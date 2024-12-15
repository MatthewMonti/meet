import { useState, useEffect } from "react";
import '../App.css';

const CitySearch = ({ allLocations, setCurrentCity}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const city = event.target.value;

    // Filter locations based on user input
    const filteredLocations = allLocations
      ? allLocations.filter((location) => location.toUpperCase().includes(city.toUpperCase()))
      : [];
    setQuery(city);
    setSuggestions(city ? filteredLocations : []);

    //SUGGESTIONS LIST SHOWN = TEXT IN SEARCHBOX. 
    //This was causes the errors with CitySearch Tests
    setShowSuggestions(city.length > 0); 
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // Hide suggestions
    setCurrentCity(value);
  };

  useEffect(() => {
    setSuggestions(allLocations || []);
  }, [allLocations]);

  return (
    <div data-testid="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        // SUGGESTION LIST SHOWN = CLICK INPUT TEXTBOX"
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
        data-testid="search-input"
      />

      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li onClick={handleItemClicked} key={suggestion}>
              {suggestion}
            </li>
          ))}
          <li key="See all cities" onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CitySearch;