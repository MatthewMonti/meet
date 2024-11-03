import { render, screen, act } from '@testing-library/react';
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
    const eventList = screen.queryByTestId('event-list');  // Assuming it has data-testid="event-list"
    expect(eventList).toBeInTheDocument();
  });

  test('renders CitySearch', async () => {
    const citySearch = screen.queryByTestId('city-search');  // Assuming it has data-testid="city-search"
    expect(citySearch).toBeInTheDocument();
  });
});