import React from "react";
import { SearchSelectorWrap, SearchSelectorLabel } from "../SearchTypeSelector/SearchTypeSelector.styled"
import Select from 'react-select';
import { store } from '../../../redux/store';
import { stylesSearchSelect } from '../SearchTypeSelector/stylesSearchSelect';

const options = [
  { value: 'query', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
] 

const theme = store.theme;

export const SearchTypeSelector = ({ searchType, onSearchTypeChange }) => {
  const defaultOption = options.find(option => option.value === searchType);

  return (
    <SearchSelectorWrap localTheme={theme}>
      <SearchSelectorLabel htmlFor="search-type">Search by:</SearchSelectorLabel>
          <Select
            id="search-type"
            defaultValue={defaultOption} 
            onChange={(selectedOption) => onSearchTypeChange(selectedOption.value)} 
            styles={stylesSearchSelect(theme)}
            options={options}
          />
    </SearchSelectorWrap>
  );
}



