import Button from './Button'
import '../App.css'

// src/components/Event.js
const Event = ({event}) => {
    return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p className="eventAttribute">{event.location}</p>
      <p className="eventAttribute">{event.start.dateTime}</p>
      <p className="eventAttribute">{event.end.dateTime}</p>
      <Button event={event} />
    </li>
    );
  }
  
  export default Event;
  