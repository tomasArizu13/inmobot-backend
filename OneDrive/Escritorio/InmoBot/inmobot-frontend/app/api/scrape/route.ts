import { NextResponse } from 'next/server';
import { scrapeProperties } from '@/lib/utils/scraper';
import { createPDF } from '@/lib/utils/pdfHandler';

export async function POST(request: Request) {
  try {
    const { url, page = 1, generatePDF = false } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL es requerida' },
        { status: 400 }
      );
    }

    // Realizar el scraping de propiedades
    const scrapedData = await scrapeProperties(url);

    // Si se solicita generar PDF
    if (generatePDF) {
      const pdfContent = {
        title: `Reporte de Propiedades - ${new Date().toLocaleDateString()}`,
        content: scrapedData.properties.map(prop => `
          Título: ${prop.title}
          Precio: ${prop.currency} ${prop.price}
          Ubicación: ${prop.location}
          Tipo: ${prop.propertyType}
          Operación: ${prop.operationType}
          Área: ${prop.area}m²
          Habitaciones: ${prop.rooms}
          Baños: ${prop.bathrooms}
          Descripción: ${prop.description}
          Características: ${prop.features.join(', ')}
          Fuente: ${prop.source}
          URL: ${prop.url}
          ------------------------
        `).join('\n'),
      };

      const pdfBytes = await createPDF(pdfContent);
      const base64PDF = Buffer.from(pdfBytes).toString('base64');

      return NextResponse.json({
        data: scrapedData,
        pdf: base64PDF,
      });
    }

    return NextResponse.json({ data: scrapedData });
  } catch (error) {
    console.error('Error en la ruta de scraping:', error);
    return NextResponse.json(
      { error: 'Error al obtener datos de propiedades' },
      { status: 500 }
    );
  }
} 