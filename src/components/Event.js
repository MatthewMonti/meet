import Button from './Button'


// src/components/Event.js
const Event = ({event}) => {
    return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.start.dateTime}</p>
      <p>{event.end.dateTime}</p>
      <p>{event.location}</p>
      <Button />
    </li>
    );
  }
  
  export default Event;
  