import { useState, useEffect } from "react";
import '../App.css';

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const city = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => location.toUpperCase().includes(city.toUpperCase()))
      : [];
    setQuery(city);
    setSuggestions(city ? filteredLocations : []);
    setShowSuggestions(city.length > 0); // Hide suggestions if input is empty
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // Hide the list
    setCurrentCity(value);
  };

  useEffect(() => { setSuggestions(allLocations); }, [`${allLocations}`]);

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
      {showSuggestions ?
       <ul className="suggestions">
         {suggestions.map((suggestion) => {
           return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
         })}
         <li key='See all cities' onClick={handleItemClicked}>
           <b>See all cities</b>
         </li>
       </ul>
       : null
     }
    </div>
  );
};

export default CitySearch;
