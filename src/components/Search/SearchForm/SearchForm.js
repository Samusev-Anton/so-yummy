import React from "react";
import { Formik } from 'formik';
import { FormWrap, Input } from '../../SearchInput/SearchForm.styled';
import { SearchPageBtn } from "./SearchForm.styled";

export const SearchForm = ({ searchQuery, onSearchQueryChange }) => {

  return (
    <Formik>
      <FormWrap>
        <label htmlFor="search-query"></label>
        <Input
          required
          id="search-query"
          type="text"
          placeholder="Beef |"
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          autoComplete="on"
          autoFocus
        >
        </Input>
        <SearchPageBtn type="submit">Search</SearchPageBtn>
      </FormWrap>
    </Formik>
  );
}

