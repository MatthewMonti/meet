import puppeteer from 'puppeteer';

describe('<Button /> Puppeteer Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 100 });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('button toggles event details visibility with a delay', async () => {
    // Wait for the button to appear
    await page.waitForSelector('button');
    const button = await page.$('button');

    // Initially, the button text should be "Show Details"
    const buttonText = await page.evaluate(el => el.textContent, button);
    expect(buttonText).toBe('show details');

    // Click the button to show details
    await button.click();

    // Wait for the description to appear
    await page.waitForTimeout(500); // Ensure this matches the component delay
    const eventDetails = await page.$eval('p', el => el.textContent);
    expect(eventDetails).toBeTruthy;

    // Click the button to hide details
    await button.click();

    // Wait for the description to disappear
    await page.waitForTimeout(500);
    const hiddenDetails = await page.$('p');
    expect(hiddenDetails).toBeFalsy; // Ensure the description is not rendered
  });
});