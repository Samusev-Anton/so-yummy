import React from "react";
import { SearchSelectorWrap, SearchSelectorLabel, SearchSelectorSelect, SearchSelectorOption } from "../SearchTypeSelector/SearchTypeSelector.styled"

export const SearchTypeSelector = ({ searchType, onSearchTypeChange }) => {
  return (
    <SearchSelectorWrap>
      <SearchSelectorLabel htmlFor="search-type">Search by:</SearchSelectorLabel>
      <SearchSelectorSelect
        id="search-type"
        value={searchType}
        onChange={(e) => onSearchTypeChange(e.target.value)}
      >
          <SearchSelectorOption value="query">Title</SearchSelectorOption>
          <SearchSelectorOption value="ingredient">Ingredients</SearchSelectorOption>
      </SearchSelectorSelect>
    </SearchSelectorWrap>
  );
}


