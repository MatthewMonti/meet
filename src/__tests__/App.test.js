import { render, screen, act } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);  // Don't assign to AppDOM yet
    });
  });

  test('renders list of events', async () => {
    const eventList = await screen.findByTestId('event-list');  // Assuming it has data-testid="event-list"
    expect(eventList).toBeInTheDocument();
  });

  test('renders CitySearch', async () => {
    const citySearch = await screen.findByTestId('city-search');  // Assuming it has data-testid="city-search"
    expect(citySearch).toBeInTheDocument();
  });
});