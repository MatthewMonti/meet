import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, within, fireEvent, waitFor } from '@testing-library/react';
import EventList from '../components/EventList';
import mockData from '../mock-data';
import { act } from 'react';
import App from '../App.js';

const feature = loadFeature('./src/features/displayEvent.feature');

defineFeature(feature, (test) => {

  test('City suggestion list is collapsed by default', ({ given, when, then }) => {
    
    let AppComponent;
    given('user is on default homepage', async () => {
      await act(async () => {
        AppComponent = render(<App />);
        });
    });
    
    when('user has not search for city or change number of event count', async () => {
    const searchBox = screen.getByPlaceholderText('Search for a city');
     // Assert the textbox is in the document
    expect(searchBox).toBeInTheDocument();
     // Optional: Ensure it's of type "text"
    expect(searchBox).toHaveAttribute('type', 'text');

    });

    then('suggestion list with list of cities and option to see all cities is hidden', async () => {
      const suggestionCityDOM= screen.queryByTestId('city-search');  
      
      await waitFor(() => {
        const cities = within(suggestionCityDOM).queryAllByRole('listitem');
        expect(cities.length).toBe(0);
       });
      });
    });

    test('Show event details', ({ given, when, then }) => {
      let detailsContainer;
  
      given('the user is viewing the EventList', async () => {
        render(<EventList events={mockData} />);
        const eventListItems = await screen.findAllByRole('listitem');
        expect(eventListItems.length).toBeGreaterThan(0);
  
        detailsContainer = within(eventListItems[0]).getByTestId('Details');
      });
  
      when(/^the user clicks on the "(.*)" button for information about the event$/, async (arg0) => {
        const showDetailsButton = within(detailsContainer).getByRole('button', { name: 'Show Details' });
        fireEvent.click(showDetailsButton);
  
        // Wait for the paragraph to appear
        const detailParagraph = await waitFor(() =>
          within(detailsContainer).getByRole('paragraph')
        );
        expect(detailParagraph).toBeInTheDocument();
      });
  
      then('the event details should be displayed for that event', async () => {
        const detailParagraph = within(detailsContainer).getByRole('paragraph');
        expect(detailParagraph).toBeInTheDocument();
      });
    });
    test('Hide event details', ({ given, when, then }) => {
      let detailsContainer;
  
      given('the event details are displayed for an event', async () => {
        render(<EventList events={mockData} />);
        const eventListItems = await screen.findAllByRole('listitem');
        expect(eventListItems.length).toBeGreaterThan(0);
  
        detailsContainer = within(eventListItems[0]).getByTestId('Details');
        const showDetailsButton = within(detailsContainer).getByRole('button', { name: 'Show Details' });
        fireEvent.click(showDetailsButton);
  
        // Verify paragraph is visible
        const detailParagraph = await waitFor(() =>
          within(detailsContainer).getByRole('paragraph')
        );
        expect(detailParagraph).toBeInTheDocument();
      });
  
      when('the user clicks on the "Hide Details" button to hide event', async () => {
        const hideDetailsButton = within(detailsContainer).getByRole('button', { name: 'Hide Details' });
        fireEvent.click(hideDetailsButton);
      });
  
      then('the event details should be hidden for that event', async () => {
        const detailParagraph = within(detailsContainer).queryByRole('paragraph');
        expect(detailParagraph).toBeNull();
      });
    });
});
  


