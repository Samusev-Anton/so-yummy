import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector";
import { SearchBarWrap } from "../SearchBar/SearchBar.styled";

export const SearchBar = ({
    searchQuery,
    searchType,
    onSearchQueryChange,
    onSearchTypeChange,
}) => {
    return (
        <>
            <SearchBarWrap>
                <SearchForm
                    searchQuery={searchQuery}
                    onSearchQueryChange={onSearchQueryChange}
                />
                <SearchTypeSelector
                    searchType={searchType}
                    onSearchTypeChange={onSearchTypeChange}
                />
            </SearchBarWrap>
        </>
    );
}


