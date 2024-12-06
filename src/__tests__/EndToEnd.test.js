import puppeteer from 'puppeteer';
import {screen} from '@testing-library/react';
describe('show/hide event details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  test('An event element is collapsed by default', async () => {
    // Wait for the event container to load
    await page.waitForSelector('.event');

    // Locate the Details container
    const detailsContainer = await page.$('[data-testid="Details"]');

    // Query for the <p> tag inside the Details container
    const detailsParagraph = await detailsContainer?.$('p');

    // Assert that the <p> tag is not present (collapsed by default)
    expect(detailsParagraph).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/');
  
      // Wait for the event container to appear
      await page.waitForSelector('.event');
  
      // Locate the button with the text 'Show Details'
      const button = await page.$x("//button[contains(., 'Show Details')]");
      expect(button.length).toBeGreaterThan(0); // Ensure the button exists
      await button[0].click(); // Click the first button matching the criteria
  
      // Locate the Details container by its data-testid
      const detailsContainer = await page.$('[data-testid="Details"]');
      expect(detailsContainer).toBeDefined();
  
      // Query for the <p> tag inside the Details container
      const detailsParagraph = await detailsContainer?.$('p');
      expect(detailsParagraph).toBeDefined();
    } finally {
      await browser.close(); // Ensure the browser is closed properly
    }
  });

  test('User can collapse an event to hide details', async () => {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/');
  
      // Wait for the event container to appear
      await page.waitForSelector('.event');
  
      // Locate and click the "Show Details" button to expand details
      const showButton = await page.$x("//button[contains(., 'Show Details')]");
      expect(showButton.length).toBeGreaterThan(0); // Ensure the button exists
      await showButton[0].click(); // Click the first "Show Details" button
  
      // Ensure the <p> element is displayed
      const detailsParagraph = await page.$('[data-testid="Details"] > p');
      expect(detailsParagraph).toBeDefined(); // Confirm <p> exists after expanding
  
      // Locate and click the "Hide Details" button to collapse details
      const hideButton = await page.$x("//button[contains(., 'Hide Details')]");
      expect(hideButton.length).toBeGreaterThan(0); // Ensure the button exists
      await hideButton[0].click(); // Click the first "Hide Details" button
  
      // Check if the <p> element has been removed from the DOM
      const detailsParagraphAfterHide = await page.$('[data-testid="Details"] > p');
      expect(detailsParagraphAfterHide).toBeNull(); // Confirm <p> is removed
    } finally {
      await browser.close(); // Ensure the browser is closed properly
    }
  });

});