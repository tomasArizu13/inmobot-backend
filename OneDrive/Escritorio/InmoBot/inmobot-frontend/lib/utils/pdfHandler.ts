import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface PDFContent {
  title: string;
  content: string;
  images?: string[];
}

export async function createPDF(content: PDFContent): Promise<Uint8Array> {
  try {
    // Crear un nuevo documento PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Cargar la fuente
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Agregar título
    page.drawText(content.title, {
      x: 50,
      y: height - 50,
      size: 24,
      font: titleFont,
      color: rgb(0, 0, 0),
    });

    // Agregar contenido
    const lines = content.content.split('\n');
    let yPosition = height - 100;
    const lineHeight = 20;

    for (const line of lines) {
      if (yPosition < 50) {
        // Si nos quedamos sin espacio, crear una nueva página
        const newPage = pdfDoc.addPage();
        yPosition = newPage.getSize().height - 50;
      }

      page.drawText(line, {
        x: 50,
        y: yPosition,
        size: 12,
        font: font,
        color: rgb(0, 0, 0),
      });

      yPosition -= lineHeight;
    }

    // Guardar el PDF
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error('Error creating PDF:', error);
    throw error;
  }
}

export async function mergePDFs(pdfBuffers: Uint8Array[]): Promise<Uint8Array> {
  try {
    const mergedPdf = await PDFDocument.create();

    for (const pdfBuffer of pdfBuffers) {
      const pdf = await PDFDocument.load(pdfBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    return await mergedPdf.save();
  } catch (error) {
    console.error('Error merging PDFs:', error);
    throw error;
  }
} 