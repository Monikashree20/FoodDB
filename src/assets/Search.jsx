// Search.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css'; // Import the CSS file for styling

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for food..."
        onChange={handleChange}
        className="search-input"
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default Search;
