import React from "react";

export const SearchTypeSelector = ({ searchType, onSearchTypeChange }) => {
  return (
    <div>
      <label htmlFor="search-type">Search by:</label>
      <select
        id="search-type"
        value={searchType}
        onChange={(e) => onSearchTypeChange(e.target.value)}
      >
        <option value="query">Title</option>
        <option value="ingredient">Ingredients</option>
      </select>
    </div>
  );
}
