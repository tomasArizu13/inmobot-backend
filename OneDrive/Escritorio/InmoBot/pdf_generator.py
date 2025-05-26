from fpdf import FPDF
import pandas as pd
from datetime import datetime

class PDF(FPDF):
    def header(self):
        # Logo
        # self.image('logo.png', 10, 8, 33)
        # Arial bold 15
        self.set_font('Arial', 'B', 15)
        # Move to the right
        self.cell(80)
        # Title
        self.cell(30, 10, 'Informe de Tasación', 0, 0, 'C')
        # Line break
        self.ln(20)

    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Arial italic 8
        self.set_font('Arial', 'I', 8)
        # Page number
        self.cell(0, 10, f'Página {self.page_no()}/{{nb}}', 0, 0, 'C')

def generar_pdf_comparables(df: pd.DataFrame, output_path: str):
    """
    Genera un PDF con la información de las propiedades comparables.
    
    Args:
        df (pd.DataFrame): DataFrame con las propiedades comparables
        output_path (str): Ruta donde se guardará el PDF
    """
    pdf = PDF()
    pdf.alias_nb_pages()
    pdf.add_page()
    
    # Título
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(0, 10, 'Propiedades Comparables', 0, 1, 'C')
    pdf.ln(10)
    
    # Estadísticas generales
    pdf.set_font('Arial', 'B', 12)
    pdf.cell(0, 10, 'Estadísticas Generales', 0, 1)
    pdf.set_font('Arial', '', 10)
    
    stats = {
        'Precio promedio por m²': f"${df['precio_m2'].mean():,.2f}",
        'Precio mínimo': f"${df['precio'].min():,.2f}",
        'Precio máximo': f"${df['precio'].max():,.2f}",
        'Superficie promedio': f"{df['superficie'].mean():.1f} m²",
        'Cantidad de propiedades': str(len(df))
    }
    
    for key, value in stats.items():
        pdf.cell(60, 8, key, 0, 0)
        pdf.cell(0, 8, value, 0, 1)
    
    pdf.ln(10)
    
    # Tabla de propiedades
    pdf.set_font('Arial', 'B', 12)
    pdf.cell(0, 10, 'Detalle de Propiedades', 0, 1)
    
    # Encabezados
    pdf.set_font('Arial', 'B', 10)
    headers = ['Título', 'Superficie', 'Ambientes', 'Precio', 'Precio/m²', 'Antigüedad']
    widths = [60, 20, 20, 30, 30, 20]
    
    for i, header in enumerate(headers):
        pdf.cell(widths[i], 8, header, 1, 0, 'C')
    pdf.ln()
    
    # Datos
    pdf.set_font('Arial', '', 8)
    for _, row in df.iterrows():
        # Título (con salto de línea si es muy largo)
        pdf.cell(widths[0], 8, row['titulo'][:40] + '...' if len(row['titulo']) > 40 else row['titulo'], 1)
        
        # Resto de datos
        pdf.cell(widths[1], 8, f"{row['superficie']} m²", 1)
        pdf.cell(widths[2], 8, str(row['ambientes']), 1)
        pdf.cell(widths[3], 8, f"${row['precio']:,.2f}", 1)
        pdf.cell(widths[4], 8, f"${row['precio_m2']:,.2f}", 1)
        pdf.cell(widths[5], 8, f"{row['antiguedad']} años", 1)
        pdf.ln()
    
    # Pie de página con fecha
    pdf.ln(10)
    pdf.set_font('Arial', 'I', 8)
    pdf.cell(0, 10, f'Generado el {datetime.now().strftime("%d/%m/%Y %H:%M:%S")}', 0, 0, 'C')
    
    # Guardar PDF
    pdf.output(output_path) 