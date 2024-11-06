import Button from './Button'
import '../App.css'

// src/components/Event.js
const Event = ({event}) => {
    return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      <p>{event.start.dateTime}</p>
      <p>{event.end.dateTime}</p>
      <Button event={event} />
    </li>
    );
  }
  
  export default Event;
  