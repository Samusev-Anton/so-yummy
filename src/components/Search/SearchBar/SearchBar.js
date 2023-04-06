import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector";
import { SearchBarWrap } from "../SearchBar/SearchBar.styled";

export const SearchBar = ({
    searchQuery,
    searchType,
    onSubmit,
    onSearchTypeChange,
}) => {
    return (
    <>
        <SearchBarWrap>
            <SearchForm
            searchQuery={searchQuery}
            onSubmit={onSubmit}
            />
            <SearchTypeSelector
            searchType={searchType}
            onChange={onSearchTypeChange}
            />
        </SearchBarWrap>
    </>
    );
}

