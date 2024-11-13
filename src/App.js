import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents'
import { getEvents, extractLocations } from './api';
import './App.css';
import calendar from './calendar.png';

const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [currentNOE, setCurrentNOE] = useState('32');
  const [errorAlert, setErrorAlert] = useState([]);
  const [errorCity, setErrorCity] = useState([]);

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
      <h1>Meetup App</h1><img className="time" alt="meet-logo"src={calendar}></img>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity} 
        setErrorCity={setErrorCity} />
        {errorCity && <div className="alert">{errorCity}</div>}
      <NumberOfEvents 
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert} />
        {errorAlert && <div className="alert">{errorAlert}</div>}
      <EventList events={events} />
    </div>
  );
}

export default App;