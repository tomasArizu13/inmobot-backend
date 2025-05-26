import pandas as pd
from datetime import datetime
import time
import random
import re
import os
from typing import List, Dict, Any, Optional
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager

class FiltrosPropiedad:
    def __init__(
        self,
        superficie_min: float = 40,
        superficie_max: float = 80,
        ambientes_min: int = 2,
        ambientes_max: int = 3,
        precio_max: Optional[float] = None,
        antiguedad_max: Optional[int] = None
    ):
        self.superficie_min = superficie_min
        self.superficie_max = superficie_max
        self.ambientes_min = ambientes_min
        self.ambientes_max = ambientes_max
        self.precio_max = precio_max
        self.antiguedad_max = antiguedad_max

def extraer_numero(texto: str) -> float:
    """Extrae números de un texto, incluyendo decimales."""
    match = re.search(r'[\d.,]+', texto)
    if match:
        return float(match.group().replace(',', '.'))
    return 0.0

def extraer_precio_usd(texto: str) -> float:
    """Extrae el precio en USD de un texto."""
    # Busca patrones como "USD 150.000" o "U$S 150000"
    match = re.search(r'(?:USD|U\$S)\s*([\d.,]+)', texto, re.IGNORECASE)
    if match:
        return float(match.group(1).replace('.', '').replace(',', '.'))
    return 0.0

def extraer_antiguedad(texto: str) -> int:
    """Extrae la antigüedad en años de un texto."""
    match = re.search(r'(\d+)\s*años', texto.lower())
    if match:
        return int(match.group(1))
    return 0

def configurar_driver():
    """Configura y retorna un driver de Selenium con opciones anti-detección."""
    chrome_options = Options()
    chrome_options.add_argument('--headless=new')
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('--window-size=1920,1080')
    chrome_options.add_argument('--disable-software-rasterizer')
    chrome_options.add_argument('--enable-features=NetworkService,NetworkServiceInProcess')
    chrome_options.add_argument('--disable-blink-features=AutomationControlled')
    chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
    
    chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    chrome_options.add_experimental_option('useAutomationExtension', False)
    
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)
    driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    
    return driver

def scrapear_zonaprop(zona: str, tipo: str, filtros: FiltrosPropiedad) -> List[Dict[str, Any]]:
    """Scrapea propiedades de Zonaprop."""
    driver = None
    try:
        driver = configurar_driver()
        base_url = "https://www.zonaprop.com.ar"
        propiedades = []
        pagina_actual = 1
        max_paginas = 3
        
        while pagina_actual <= max_paginas:
            try:
                # Construir URL de búsqueda con formato correcto
                zona_formatted = zona.lower().replace(' ', '-')
                tipo_formatted = tipo.lower().replace(' ', '-')
                
                # Construir URL base con ambientes
                ambientes = filtros.ambientes_min
                url = f"{base_url}/{tipo_formatted}s-{zona_formatted}-{ambientes}-ambientes"
                
                # Agregar página si no es la primera
                if pagina_actual > 1:
                    url += f"-pagina-{pagina_actual}"
                
                url += ".html"
                print(f"Accediendo a Zonaprop: {url}...")
                
                # Configurar headers para el driver
                driver.execute_cdp_cmd('Network.setUserAgentOverride', {
                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
                })
                
                # Limpiar cookies antes de cada request
                driver.delete_all_cookies()
                
                # Navegar a la URL
                driver.get(url)
                
                # Espera inicial para la carga
                time.sleep(random.uniform(3, 5))
                
                # Verificar si hay mensaje de error o redirección
                if "No se encontraron resultados" in driver.page_source:
                    print("No se encontraron resultados para la búsqueda")
                    if pagina_actual == 1:
                        return []
                    break
                
                # Scroll suave para cargar todo el contenido
                for i in range(5):
                    driver.execute_script(f"window.scrollTo(0, {i * 800});")
                    time.sleep(random.uniform(1, 2))
                
                # Esperar a que las tarjetas de propiedades estén visibles
                try:
                    WebDriverWait(driver, 20).until(
                        EC.presence_of_element_located((By.CLASS_NAME, "postingCard"))
                    )
                except TimeoutException:
                    print(f"Timeout esperando las tarjetas de propiedades en la página {pagina_actual}")
                    if pagina_actual == 1:
                        return []
                    break
                
                soup = BeautifulSoup(driver.page_source, 'lxml')
                cards = soup.find_all("div", class_=lambda c: c and "posting-card-layout" in c)
                
                if not cards:
                    print(f"No se encontraron tarjetas de propiedades en la página {pagina_actual}")
                    if pagina_actual == 1:
                        return []
                    break
                
                print(f"Encontradas {len(cards)} propiedades en la página {pagina_actual}")
                
                for card in cards:
                    try:
                        # Extraer precio
                        precio_elem = card.select_one('.postingCard__price')
                        if not precio_elem:
                            continue
                        precio_texto = precio_elem.text.strip()
                        precio = extraer_precio_usd(precio_texto)
                        
                        if precio <= 0:
                            continue
                        
                        # Extraer superficie
                        superficie = 0
                        features = card.select('.postingCard__property-features')
                        for feature in features:
                            texto = feature.text.strip().lower()
                            if 'm²' in texto:
                                superficie = extraer_numero(texto)
                                break
                        
                        if superficie <= 0:
                            continue
                        
                        # Aplicar filtros
                        if (superficie >= filtros.superficie_min and 
                            superficie <= filtros.superficie_max):
                            
                            propiedades.append({
                                'precio': precio,
                                'superficie': superficie,
                                'precio_m2': round(precio / superficie, 2)
                            })
                            print(f"Propiedad encontrada: ${precio:,.2f} - {superficie}m²")
                    
                    except Exception as e:
                        print(f"Error procesando propiedad individual: {str(e)}")
                        continue
                
                if len(propiedades) >= 10:  # Limitamos a 10 propiedades para el MVP
                    break
                    
                pagina_actual += 1
                
            except Exception as e:
                print(f"Error procesando página {pagina_actual}: {str(e)}")
                if pagina_actual == 1:
                    return []
                break
        
        return propiedades
    
    except Exception as e:
        print(f"Error durante el scraping de Zonaprop: {str(e)}")
        return []
    
    finally:
        if driver:
            try:
                driver.quit()
            except:
                pass

def scrapear_propiedades(zona: str, tipo: str, filtros: Optional[FiltrosPropiedad] = None) -> pd.DataFrame:
    """
    Scrapea propiedades de Zonaprop y retorna un DataFrame con los resultados.
    """
    if filtros is None:
        filtros = FiltrosPropiedad()
    
    # Scrapear de Zonaprop
    propiedades = scrapear_zonaprop(zona, tipo, filtros)
    
    if propiedades:
        df = pd.DataFrame(propiedades)
        print(f"\nResumen de scraping para {zona}:")
        print(f"Total de propiedades recolectadas: {len(propiedades)}")
        print(f"Precio promedio por m²: ${df['precio_m2'].mean():,.2f}")
        return df
    
    return pd.DataFrame()

if __name__ == "__main__":
    # Ejemplo de uso
    filtros = FiltrosPropiedad(
        superficie_min=40,
        superficie_max=80,
        ambientes_min=2,
        ambientes_max=3,
        precio_max=200000,
        antiguedad_max=20
    )
    scrapear_propiedades("Palermo", "Departamento", filtros) 