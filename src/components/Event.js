// src/components/Event.js

import React from 'react';


const Event = ({ event1 }) => {
  return (
    <li className="event-item">
      <h2> {event1.summary}</h2>
      <p>
      <strong>Start: </strong>{event1.start.dateTime}
      </p>
      <p>
      <strong>End: </strong>{event1.end.dateTime}
      </p>
      <p>
      <strong>Location: </strong>{event1.location}
      </p>
      <p>
      <strong>Description: </strong>{event1.description}
      </p>
    </li>
  );
}

export default Event;

