import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, searchText }) => {
  const searchHandle = (event) => {
    // console.log(event.target.value);
    onSearch(event);
  };

  return (
    <div className="form-container">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          value={searchText}
          placeholder="Search for..."
          onChange={searchHandle}
        />
      </form>
    </div>
  );
};

export default SearchBar;
