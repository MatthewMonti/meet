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

  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();

    const CitySearchDOM = screen.queryByTestId('city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);

    const EventListDOM = screen.queryByTestId('event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');   

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
  });

});