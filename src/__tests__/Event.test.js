import Event from "../components/Event";
import {render} from '@testing-library/react';
import mockData from "../mock-data";

const event = mockData[0];


describe('<Event /> component', () => {
  let eventComponent;
  beforeEach(() => {
    eventComponent = render(<Event event={event}/>);
  });
  
  test('has an element with "list" role', () => {
    const eventList = eventComponent.getByRole("listitem");
    expect(eventList).toBeInTheDocument();
  });

  test('event information displays event title', () => {
    const eventSummary = eventComponent.queryByText(event.summary);
    expect(eventSummary).toBeInTheDocument();
  });

  test('event location is displayed', () => {
    const eventLocation = eventComponent.queryByText(event.location);
    expect(eventLocation).toBeInTheDocument();
  });

  test('event start time is displayed', () => {
    const eventStartTime = eventComponent.queryByText(event.start.dateTime);
    expect(eventStartTime).toBeInTheDocument();
  });

  test('event end time is displayed', () => {
    const eventEndTime = eventComponent.queryByText(event.end.dateTime);
    expect(eventEndTime).toBeInTheDocument();
  });
});
