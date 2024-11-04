import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents'
import { getEvents, extractLocations } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [currentNOE, setCurrentNOE] = useState(32);
  const [errorAlert, setErrorAlert] = useState("");

  // Trigger fetching when the city changes
  useEffect(() => {
      // Fetch meetings/events based on the current city
  const fetchMeetings = async () => {
    try {
      const allEvents = await getEvents();
      const filteredEvents = currentCity === "See all cities"
        ? allEvents
        : allEvents.filter(event => event.location === currentCity);
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents)); // Extract unique locations
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
    fetchMeetings();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      {errorAlert && <div className="alert">{errorAlert}</div>}
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents 
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert} />
      <EventList events={events} />
    </div>
  );
}

export default App;