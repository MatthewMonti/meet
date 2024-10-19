// src/components/EventList.js

import React, { useEffect, useState } from 'react';
import Event from './Event';
import { getEvents } from '../api'; // Import getEvents function

const EventList = () => {
  const [eventz, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents(); // Fetch events
      setEvents(eventsData); // Set events in state
    };

    fetchEvents();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <ul id="event-list">
      {eventz.length > 0 ?
        eventz.map(event1 => <Event key={event1.id} event1={event1} />) :
        <li>No events found.</li>}
            </ul>
  );
}
export default EventList;
        //CUSTOM NAMES for help me understand basics of coding.
        //Default generic names in lesson = difficult understanding coding relationships. 
        //Within eventList component you create a mechanism (state that changes events with react useState)
        // fetchevents is a function and passes a function from imported function from api FYI (getMockData function). Help ChatGPT.
        //If there is events displayed it then passes a prop event1 into Event.js where display in event component.
        //New Tutor & mentor Let me know use comments to clarify issues/explain code is that OK?
