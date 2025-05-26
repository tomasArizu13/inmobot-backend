import puppeteer from 'puppeteer';
import axios from 'axios';
import * as cheerio from 'cheerio';

export interface PropertyData {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  propertyType: string;
  operationType: string; // venta/alquiler
  area: number;
  rooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  images: string[];
  url: string;
  source: string; // zonaprop/argenprop/mercadolibre
  lastUpdated: Date;
}

export interface ScrapingResult {
  properties: PropertyData[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
}

async function scrapeZonaprop(url: string): Promise<ScrapingResult> {
  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    const properties = await page.evaluate(() => {
      const propertyCards = document.querySelectorAll('.postingCard');
      return Array.from(propertyCards).map(card => {
        const priceElement = card.querySelector('.postingCard__price');
        const priceText = priceElement?.textContent || '';
        const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
        const currency = priceText.includes('USD') ? 'USD' : 'ARS';

        return {
          id: card.getAttribute('data-id') || '',
          title: card.querySelector('.postingCard__title')?.textContent?.trim() || '',
          price,
          currency,
          location: card.querySelector('.postingCard__location')?.textContent?.trim() || '',
          propertyType: card.querySelector('.postingCard__propertyType')?.textContent?.trim() || '',
          operationType: card.querySelector('.postingCard__operationType')?.textContent?.trim() || '',
          area: parseFloat(card.querySelector('.postingCard__area')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          rooms: parseInt(card.querySelector('.postingCard__rooms')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          bathrooms: parseInt(card.querySelector('.postingCard__bathrooms')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          description: card.querySelector('.postingCard__description')?.textContent?.trim() || '',
          features: Array.from(card.querySelectorAll('.postingCard__features li')).map(li => li.textContent?.trim() || ''),
          images: Array.from(card.querySelectorAll('.postingCard__image img')).map(img => img.getAttribute('src') || ''),
          url: card.querySelector('a')?.href || '',
          source: 'zonaprop',
          lastUpdated: new Date(),
        };
      });
    });

    const totalResults = await page.evaluate(() => {
      const totalElement = document.querySelector('.postingCard__totalResults');
      return parseInt(totalElement?.textContent?.replace(/[^0-9]/g, '') || '0');
    });

    return {
      properties,
      totalResults,
      currentPage: 1,
      totalPages: Math.ceil(totalResults / 20), // Zonaprop muestra 20 propiedades por página
    };
  } finally {
    await browser.close();
  }
}

async function scrapeArgenprop(url: string): Promise<ScrapingResult> {
  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    const properties = await page.evaluate(() => {
      const propertyCards = document.querySelectorAll('.postingCard');
      return Array.from(propertyCards).map(card => {
        const priceElement = card.querySelector('.postingCard__price');
        const priceText = priceElement?.textContent || '';
        const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
        const currency = priceText.includes('USD') ? 'USD' : 'ARS';

        return {
          id: card.getAttribute('data-id') || '',
          title: card.querySelector('.postingCard__title')?.textContent?.trim() || '',
          price,
          currency,
          location: card.querySelector('.postingCard__location')?.textContent?.trim() || '',
          propertyType: card.querySelector('.postingCard__propertyType')?.textContent?.trim() || '',
          operationType: card.querySelector('.postingCard__operationType')?.textContent?.trim() || '',
          area: parseFloat(card.querySelector('.postingCard__area')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          rooms: parseInt(card.querySelector('.postingCard__rooms')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          bathrooms: parseInt(card.querySelector('.postingCard__bathrooms')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          description: card.querySelector('.postingCard__description')?.textContent?.trim() || '',
          features: Array.from(card.querySelectorAll('.postingCard__features li')).map(li => li.textContent?.trim() || ''),
          images: Array.from(card.querySelectorAll('.postingCard__image img')).map(img => img.getAttribute('src') || ''),
          url: card.querySelector('a')?.href || '',
          source: 'argenprop',
          lastUpdated: new Date(),
        };
      });
    });

    const totalResults = await page.evaluate(() => {
      const totalElement = document.querySelector('.postingCard__totalResults');
      return parseInt(totalElement?.textContent?.replace(/[^0-9]/g, '') || '0');
    });

    return {
      properties,
      totalResults,
      currentPage: 1,
      totalPages: Math.ceil(totalResults / 20),
    };
  } finally {
    await browser.close();
  }
}

async function scrapeMercadoLibre(url: string): Promise<ScrapingResult> {
  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    const properties = await page.evaluate(() => {
      const propertyCards = document.querySelectorAll('.ui-search-result');
      return Array.from(propertyCards).map(card => {
        const priceElement = card.querySelector('.price-tag-fraction');
        const priceText = priceElement?.textContent || '';
        const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
        const currency = priceText.includes('USD') ? 'USD' : 'ARS';

        return {
          id: card.getAttribute('data-id') || '',
          title: card.querySelector('.ui-search-item__title')?.textContent?.trim() || '',
          price,
          currency,
          location: card.querySelector('.ui-search-item__location')?.textContent?.trim() || '',
          propertyType: card.querySelector('.ui-search-item__property-type')?.textContent?.trim() || '',
          operationType: card.querySelector('.ui-search-item__operation-type')?.textContent?.trim() || '',
          area: parseFloat(card.querySelector('.ui-search-item__area')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          rooms: parseInt(card.querySelector('.ui-search-item__rooms')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          bathrooms: parseInt(card.querySelector('.ui-search-item__bathrooms')?.textContent?.replace(/[^0-9]/g, '') || '0'),
          description: card.querySelector('.ui-search-item__description')?.textContent?.trim() || '',
          features: Array.from(card.querySelectorAll('.ui-search-item__features li')).map(li => li.textContent?.trim() || ''),
          images: Array.from(card.querySelectorAll('.ui-search-item__image img')).map(img => img.getAttribute('src') || ''),
          url: card.querySelector('a')?.href || '',
          source: 'mercadolibre',
          lastUpdated: new Date(),
        };
      });
    });

    const totalResults = await page.evaluate(() => {
      const totalElement = document.querySelector('.ui-search-search-result__quantity');
      return parseInt(totalElement?.textContent?.replace(/[^0-9]/g, '') || '0');
    });

    return {
      properties,
      totalResults,
      currentPage: 1,
      totalPages: Math.ceil(totalResults / 48), // MercadoLibre muestra 48 propiedades por página
    };
  } finally {
    await browser.close();
  }
}

export async function scrapeProperties(url: string): Promise<ScrapingResult> {
  if (url.includes('zonaprop.com')) {
    return await scrapeZonaprop(url);
  } else if (url.includes('argenprop.com')) {
    return await scrapeArgenprop(url);
  } else if (url.includes('mercadolibre.com.ar/inmuebles')) {
    return await scrapeMercadoLibre(url);
  } else {
    throw new Error('URL no soportada');
  }
} 