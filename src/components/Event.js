import Button from './Button'


// src/components/Event.js
const Event = ({event}) => {
    return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      <p>{event.start.dateTime}</p>
      <p>{event.end.dateTime}</p>
      <Button />
    </li>
    );
  }
  
  export default Event;
  