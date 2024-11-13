import { render, within, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {getEvents} from '../api';
import App from '../App';

describe('<App /> component', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);  // Don't assign to AppDOM yet
    });
  });

  test('renders list of events', async () => {
    const eventList = screen.queryByTestId('event-list');  
    expect(eventList).toBeInTheDocument();
  });

  test('renders CitySearch', async () => {
    const citySearch = screen.queryByTestId('city-search');  
    expect(citySearch).toBeInTheDocument();
  });
});


describe('<App /> component', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);  // Don't assign to AppDOM yet
    });
  });

  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
  
    // Type "Berlin" into the city search input
    const citySearchDOM = screen.queryByTestId('city-search');
    const citySearchInput = within(citySearchDOM).queryByRole('textbox');
    await user.type(citySearchInput, "Berlin");
  
    // Click on the Berlin suggestion
    const berlinSuggestionItem = within(citySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);
  
    // Wait for events to load and find all list items (events)
    const eventListDOM = screen.queryByTestId('event-list');
  
    // Use `findAllByRole` to wait for async rendering
    const allRenderedEventItems = await within(eventListDOM).findAllByRole('listitem');   
  
    // Get all events and filter for Berlin events
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );
  
    // Check that the number of rendered events matches the Berlin events
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
  });

});