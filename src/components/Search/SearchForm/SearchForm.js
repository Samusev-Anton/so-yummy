import React from "react";
import { Formik, ErrorMessage } from 'formik';
import { FormWrap, Input } from '../../SearchInput/Search.styled';
import { SearchPageBtn } from "./SearchForm.styled";

const validateSearchQuery = (value) => {
  let error;
  if (!/^[a-zA-Z]+$/.test(value)) {
  error = 'Please enter only letters';
  }
  return error;
  };

export const SearchForm = ({ searchQuery, onSearchQueryChange }) => {

  return (
    <Formik initialValues={{ searchQuery: '' }}>
      {({ errors, touched }) => (
        <FormWrap>
          <label htmlFor="search-query"></label>
            <Input
              required
              id="search-query"
              type="text"
              placeholder="|"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              validate={validateSearchQuery}
              autoComplete="on"
              autoFocus
            />
          {errors.searchQuery && touched.searchQuery && 
            <ErrorMessage>{errors.searchQuery}</ErrorMessage>}
            <SearchPageBtn type="submit">Search</SearchPageBtn>
        </FormWrap>
      )}
    </Formik>
  );
}

