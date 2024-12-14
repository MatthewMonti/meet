import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Button from '../components/Button';
import puppeteer from 'puppeteer';
describe('<Button /> component', () => {

  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
    render(<Button event={{ description: 'Test event description.' }} />);
  });

  test('button renders and toggles event details visibility', async () => {
    const button = await screen.findByText('Show Details');
    expect(button).toBeInTheDocument();

    // Initially, the event description should not be visible
    let eventDetails = screen.queryByText('Test event description.');
    
    // Instead of expecting null, check if the details are an empty object
    expect(eventDetails).toBeNull(); // Or you can check if it is not found ({} represents the absence of the element)

    // Click the button to show the details
    fireEvent.click(button);

    // After the click, the event description should appear
    eventDetails = screen.getByText('Test event description.');
    expect(eventDetails).toBeInTheDocument();

    // The button text should now be 'Hide Details'
    expect(screen.getByText('Hide Details')).toBeInTheDocument();

    // Click the button again to hide the details
    fireEvent.click(screen.getByText('Hide Details'));

    // After clicking, the event description should be hidden again
    eventDetails = screen.queryByText('Test event description.');
    
    // Instead of expecting null, check for empty object
    expect(eventDetails).toBeNull(); // Ensures that the element is not found and is not rendered
    
    // The button text should revert back to 'Show Details'
    expect(screen.getByText('Show Details')).toBeInTheDocument();
  });
});