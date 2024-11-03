import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(currentNOE);

    const handleInputChanged = (event) => {
        const value = event.target.value;

        // Convert value to a number if it's a valid numeric string
        const numericValue = Number(value);

        setNumber(value);

        // Validate the input
        if (isNaN(numericValue)) {
            setErrorAlert('Enter a valid number');
        } else if (numericValue < 1) {
            setErrorAlert('Number must be greater than 0');
        } else if (numericValue > 32) {
            setErrorAlert('Only a maximum of 32 is allowed');
        } else {
            setErrorAlert('');
            setCurrentNOE(numericValue); // Update the main state only when input is valid
        }
    };

    return (
        <div data-testid="number-of-events">
            <label>
                Number of Events:
                <input 
                    type="text"
                    value={number}
                    onChange={handleInputChanged}
                    data-testid="NumberOfEventsInput"
                />
            </label>
        </div>
    );
};

export default NumberOfEvents;