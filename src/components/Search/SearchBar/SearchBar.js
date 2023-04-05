import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector";

export const SearchBar = ({
    searchQuery,
    searchType,
    onSearchQueryChange,
    onSearchTypeChange,
}) => {
    return (
    <div>
        <SearchForm
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        />
        <SearchTypeSelector
        searchType={searchType}
        onSearchTypeChange={onSearchTypeChange}
        />
    </div>
    );
}
