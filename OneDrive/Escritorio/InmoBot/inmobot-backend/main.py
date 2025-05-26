from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.openapi.utils import get_openapi
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel
import requests
from bs4 import BeautifulSoup
import re
from typing import List, Optional
import logging
import time
import random
import json
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
import os
from datetime import datetime

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Inmobot API",
    description="API para tasación de propiedades",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json"
)

# Configurar CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitimos todas las origenes en desarrollo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Datos de ejemplo para desarrollo
PROPIEDADES_EJEMPLO = {
    "caballito": [
        {
            "titulo": "Departamento en Venta - Caballito",
            "direccion": "Av. Rivadavia 4500",
            "precio": 150000,
            "metros": 65,
            "precio_m2": 2307.69,
            "ambientes": 2,
            "antiguedad": 5
        },
        {
            "titulo": "Departamento 2 Ambientes - Caballito",
            "direccion": "Av. Acoyte 500",
            "precio": 145000,
            "metros": 60,
            "precio_m2": 2416.67,
            "ambientes": 2,
            "antiguedad": 3
        },
        {
            "titulo": "Depto 2 Ambientes - Caballito",
            "direccion": "Av. Directorio 2000",
            "precio": 155000,
            "metros": 70,
            "precio_m2": 2214.29,
            "ambientes": 2,
            "antiguedad": 7
        }
    ],
    "palermo": [
        {
            "titulo": "Departamento en Venta - Palermo",
            "direccion": "Av. Santa Fe 4500",
            "precio": 180000,
            "metros": 70,
            "precio_m2": 2571.43,
            "ambientes": 2,
            "antiguedad": 5
        },
        {
            "titulo": "Departamento 2 Ambientes - Palermo",
            "direccion": "Av. Scalabrini Ortiz 1000",
            "precio": 175000,
            "metros": 65,
            "precio_m2": 2692.31,
            "ambientes": 2,
            "antiguedad": 3
        },
        {
            "titulo": "Depto 2 Ambientes - Palermo",
            "direccion": "Av. Córdoba 5000",
            "precio": 190000,
            "metros": 75,
            "precio_m2": 2533.33,
            "ambientes": 2,
            "antiguedad": 7
        }
    ],
    "san isidro": [
        {
            "titulo": "Casa en Venta - San Isidro",
            "direccion": "Av. del Libertador 15000",
            "precio": 350000,
            "metros": 180,
            "precio_m2": 1944.44,
            "ambientes": 4,
            "antiguedad": 10
        },
        {
            "titulo": "Casa 3 Ambientes - San Isidro",
            "direccion": "Av. Centenario 2000",
            "precio": 320000,
            "metros": 160,
            "precio_m2": 2000.00,
            "ambientes": 3,
            "antiguedad": 8
        },
        {
            "titulo": "Casa 5 Ambientes - San Isidro",
            "direccion": "Av. Márquez 3000",
            "precio": 400000,
            "metros": 200,
            "precio_m2": 2000.00,
            "ambientes": 5,
            "antiguedad": 15
        }
    ],
    "tigre": [
        {
            "titulo": "Casa en Venta - Tigre",
            "direccion": "Av. Liniers 1000",
            "precio": 280000,
            "metros": 200,
            "precio_m2": 1400.00,
            "ambientes": 4,
            "antiguedad": 5
        },
        {
            "titulo": "Casa 3 Ambientes - Tigre",
            "direccion": "Av. Cazón 2000",
            "precio": 250000,
            "metros": 180,
            "precio_m2": 1388.89,
            "ambientes": 3,
            "antiguedad": 3
        },
        {
            "titulo": "Casa 5 Ambientes - Tigre",
            "direccion": "Av. Italia 3000",
            "precio": 320000,
            "metros": 220,
            "precio_m2": 1454.55,
            "ambientes": 5,
            "antiguedad": 8
        }
    ]
}

# Endpoint de prueba
@app.get("/test")
async def test_endpoint():
    return {"status": "API funcionando correctamente", "message": "Puedes acceder a la documentación en /docs"}

class PropertyInput(BaseModel):
    direccion: str
    zona: str
    tipo: str
    ambientes: int
    superficie: float
    antiguedad: str
    estado: str

class PropiedadComparable(BaseModel):
    titulo: str
    direccion: str
    precio: float
    metros: float
    precio_m2: float
    ambientes: int
    antiguedad: int

class TasacionResponse(BaseModel):
    estimado_min: float
    estimado_prom: float
    estimado_max: float
    promedio_m2: float
    comparables: List[PropiedadComparable]

def get_random_user_agent():
    user_agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0"
    ]
    return random.choice(user_agents)

def extraer_precio(texto: str) -> float:
    """Extrae el precio en USD de un texto."""
    match = re.search(r'USD\s*(\d+(?:\.\d+)?)', texto)
    if match:
        return float(match.group(1))
    return 0.0

def extraer_superficie(texto: str) -> float:
    """Extrae la superficie en m² de un texto."""
    match = re.search(r'(\d+(?:\.\d+)?)\s*m²', texto)
    if match:
        return float(match.group(1))
    return 0.0

def generar_pdf(data: PropertyInput, tasacion: TasacionResponse):
    """Genera un PDF con el informe de tasación."""
    # Crear directorio para PDFs si no existe
    if not os.path.exists("pdfs"):
        os.makedirs("pdfs")

    # Nombre del archivo
    filename = f"pdfs/informe_tasacion_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    
    # Crear el documento
    doc = SimpleDocTemplate(filename, pagesize=letter)
    styles = getSampleStyleSheet()
    elements = []

    # Título
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=30
    )
    elements.append(Paragraph("Informe de Tasación", title_style))
    elements.append(Spacer(1, 20))

    # Datos de la propiedad
    elements.append(Paragraph("Datos de la Propiedad", styles['Heading2']))
    elements.append(Spacer(1, 10))

    property_data = [
        ["Dirección:", data.direccion],
        ["Zona:", data.zona],
        ["Tipo:", data.tipo],
        ["Ambientes:", str(data.ambientes)],
        ["Superficie:", f"{data.superficie} m²"],
        ["Antigüedad:", data.antiguedad],
        ["Estado:", data.estado]
    ]

    t = Table(property_data, colWidths=[2*inch, 4*inch])
    t.setStyle(TableStyle([
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('BACKGROUND', (0, 0), (0, -1), colors.lightgrey),
        ('PADDING', (0, 0), (-1, -1), 6),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))

    # Resultados de la tasación
    elements.append(Paragraph("Resultados de la Tasación", styles['Heading2']))
    elements.append(Spacer(1, 10))

    tasacion_data = [
        ["Valor Mínimo:", f"USD {tasacion.estimado_min:,.2f}"],
        ["Valor Promedio:", f"USD {tasacion.estimado_prom:,.2f}"],
        ["Valor Máximo:", f"USD {tasacion.estimado_max:,.2f}"],
        ["Precio Promedio m²:", f"USD {tasacion.promedio_m2:,.2f}"]
    ]

    t = Table(tasacion_data, colWidths=[2*inch, 4*inch])
    t.setStyle(TableStyle([
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('BACKGROUND', (0, 0), (0, -1), colors.lightgrey),
        ('PADDING', (0, 0), (-1, -1), 6),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))

    # Propiedades comparables
    elements.append(Paragraph("Propiedades Comparables", styles['Heading2']))
    elements.append(Spacer(1, 10))

    comparables_data = [["Título", "Dirección", "Precio", "m²", "Precio/m²"]]
    for comp in tasacion.comparables:
        comparables_data.append([
            comp.titulo,
            comp.direccion,
            f"USD {comp.precio:,.2f}",
            f"{comp.metros}",
            f"USD {comp.precio_m2:,.2f}"
        ])

    t = Table(comparables_data, colWidths=[2*inch, 2*inch, 1.5*inch, 0.75*inch, 1.25*inch])
    t.setStyle(TableStyle([
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('BACKGROUND', (0, 0), (-1, 0), colors.lightgrey),
        ('PADDING', (0, 0), (-1, -1), 6),
    ]))
    elements.append(t)

    # Generar el PDF
    doc.build(elements)
    return filename

@app.post("/api/tasar", response_model=TasacionResponse)
async def tasar_propiedad(data: PropertyInput):
    try:
        logger.info(f"Recibida solicitud para tasar propiedad en {data.zona}")
        logger.info(f"Datos recibidos: {data.dict()}")
        
        # Validar datos de entrada
        if not data.zona or not data.tipo:
            raise HTTPException(status_code=400, detail="La zona y el tipo de propiedad son requeridos")
        
        if data.superficie <= 0:
            raise HTTPException(status_code=400, detail="La superficie debe ser mayor a 0")
        
        if data.ambientes <= 0:
            raise HTTPException(status_code=400, detail="El número de ambientes debe ser mayor a 0")

        # Obtener datos de ejemplo según la zona
        zona = data.zona.lower()
        if zona not in PROPIEDADES_EJEMPLO:
            logger.warning(f"No hay datos de ejemplo para la zona {zona}, usando datos de Caballito")
            zona = "caballito"
        
        propiedades = PROPIEDADES_EJEMPLO[zona]
        logger.info(f"Usando datos de ejemplo para {zona}")

        # Calcular estadísticas
        precios_m2 = [p["precio_m2"] for p in propiedades]
        precio_min_m2 = min(precios_m2)
        precio_max_m2 = max(precios_m2)
        precio_prom_m2 = sum(precios_m2) / len(precios_m2)

        # Calcular valores estimados
        estimado_min = precio_min_m2 * data.superficie
        estimado_prom = precio_prom_m2 * data.superficie
        estimado_max = precio_max_m2 * data.superficie

        logger.info(f"Tasación completada. Usando {len(propiedades)} propiedades de ejemplo de {zona}")
        
        response = TasacionResponse(
            estimado_min=round(estimado_min, 2),
            estimado_prom=round(estimado_prom, 2),
            estimado_max=round(estimado_max, 2),
            promedio_m2=round(precio_prom_m2, 2),
            comparables=[PropiedadComparable(**p) for p in propiedades]
        )

        try:
            # Generar PDF
            pdf_path = generar_pdf(data, response)
            logger.info(f"PDF generado exitosamente en: {pdf_path}")
        except Exception as e:
            logger.error(f"Error al generar PDF: {str(e)}")
            # No lanzamos la excepción para que la tasación se complete igual
            # pero registramos el error

        return response

    except HTTPException as he:
        logger.error(f"Error HTTP: {str(he)}")
        raise he
    except Exception as e:
        logger.error(f"Error inesperado: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error al procesar la solicitud: {str(e)}"
        )

@app.get("/api/informe_tasacion.pdf")
async def get_pdf():
    """Endpoint para obtener el último PDF generado."""
    try:
        # Verificar si existe el directorio pdfs
        if not os.path.exists("pdfs"):
            logger.error("El directorio 'pdfs' no existe")
            raise HTTPException(
                status_code=404,
                detail="No se encontró el directorio de informes"
            )

        # Obtener el PDF más reciente
        pdfs = [f for f in os.listdir("pdfs") if f.endswith(".pdf")]
        if not pdfs:
            logger.error("No se encontraron archivos PDF en el directorio")
            raise HTTPException(
                status_code=404,
                detail="No se encontró ningún informe de tasación"
            )
        
        latest_pdf = max(pdfs, key=lambda x: os.path.getctime(os.path.join("pdfs", x)))
        pdf_path = os.path.join("pdfs", latest_pdf)
        
        logger.info(f"Sirviendo archivo PDF: {pdf_path}")
        
        if not os.path.exists(pdf_path):
            logger.error(f"El archivo PDF {pdf_path} no existe")
            raise HTTPException(
                status_code=404,
                detail="El archivo PDF no existe"
            )

        return FileResponse(
            pdf_path,
            media_type="application/pdf",
            filename="informe_tasacion.pdf",
            headers={
                "Content-Disposition": "attachment; filename=informe_tasacion.pdf"
            }
        )
    except HTTPException as he:
        logger.error(f"Error HTTP al obtener PDF: {str(he)}")
        raise he
    except Exception as e:
        logger.error(f"Error inesperado al obtener PDF: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error al generar el informe PDF: {str(e)}"
        )

@app.get("/")
async def read_root():
    return {"status": "API funcionando correctamente"}

if __name__ == "__main__":
    import uvicorn
    logger.info("Iniciando servidor en http://localhost:8000")
    logger.info("Documentación disponible en http://localhost:8000/docs")
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")