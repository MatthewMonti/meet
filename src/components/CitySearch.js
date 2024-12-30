import { useState, useEffect, useRef } from "react";
import '../App.css';

const CitySearch = ({ allLocations, setCurrentCity}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const SuggestionListRef = useRef(null)

  const handleInputChanged = (event) => {
    const city = event.target.value;
    setQuery(city);
  
    if (city === "") {
      setSuggestions(allLocations); // Show all locations when input is empty
    } else {
      const filteredLocations = allLocations.filter((location) =>
        location.toUpperCase().includes(city.toUpperCase())
      );
      setSuggestions(filteredLocations); // Set filtered suggestions
    }
  
    setShowSuggestions(true); // Ensure dropdown is displayed
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // Hide suggestions
    setCurrentCity(value);
  };

 // Handle clicking outside the dropdown
 useEffect(() => {
  const handleClickOutside = (event) => {
    if (SuggestionListRef.current && !SuggestionListRef.current.contains(event.target)) {
      setShowSuggestions(false); // Hide suggestions when clicking outside
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div id="citySearch" data-testid="city-search">
      <h4>Choose your nearest city </h4>
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
        <ul className="suggestions" ref={SuggestionListRef}>
          <div className="listCities">
            {suggestions.map((suggestion, index) => (
              <li 
                className="cityName" 
                onClick={handleItemClicked} 
                key={`${suggestion}-${index}`}
                >
                {suggestion}
              </li>
            ))}
            <li 
              className="cityName" 
              key="See all cities" 
              onClick={handleItemClicked}
              >
              <b>See all cities</b>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
