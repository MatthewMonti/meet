// src/__tests__/EventList.test.js

import { render, within, waitFor, screen } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';
import App from '../App.js'
describe('<EventList /> component', () => {
   let EventListComponent;
 beforeEach(() => {
   EventListComponent = render(<EventList />);
 })

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents(); 
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

});

describe('<EventList /> integration', () => {
    test('renders a list of 35 events when the app is mounted and rendered', async () => {
        render(<App />);
        
        await waitFor(() => {
            expect(screen.getByTestId('event-list')).toBeInTheDocument();
        });

        const eventListItems = screen.queryAllByRole('listitem');
        
        expect(eventListItems.length).toBe(35);
    });  
});
