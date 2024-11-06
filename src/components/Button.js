import { useState } from "react";
import '../App.css'
const Button = ({ event }) => {
  const [details, setDetails] = useState(true);

  const toggleDetails = () => {
    setDetails((prevDetails) => !prevDetails);
  };

  return (
    <div data-testid="Details">
      {details ? null : <p>{event.description}</p> }
      <button onClick={toggleDetails}>
        {details ? "Show Details" : "Hide Details"}
      </button>
    </div>
  );
};

export default Button;
