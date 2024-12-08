import { useState, useEffect } from "react";
import '../App.css';

const CitySearch = ({ allLocations, setCurrentCity, setErrorCity, errorCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const city = event.target.value;

    // Filter locations based on user input
    const filteredLocations = allLocations
      ? allLocations.filter((location) => location.toUpperCase().includes(city.toUpperCase()))
      : [];

    // Validate city input
    if (!filteredLocations.length && city) {
      setErrorCity("Check spelling or not in database");
    } else {
      setErrorCity("");
    }

    setQuery(city);
    setSuggestions(city ? filteredLocations : []);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // Hide suggestions
    setCurrentCity(value);
    setErrorCity(""); // Clear error on valid selection
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
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
        data-testid="search-input"
      />
      <li>
        {errorCity}
      </li>
      {showSuggestions && (
        <ul>
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