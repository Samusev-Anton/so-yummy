import React from "react";

export const SearchForm = ({ searchQuery, onSearchQueryChange }) => {
  return (
    <form>
      <label htmlFor="search-query"></label>
      <input
        id="search-query"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchQueryChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
