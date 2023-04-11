import React from "react";
import { Formik, ErrorMessage } from 'formik';
import { FormWrap, Input } from '../../SearchInput/Search.styled';
import { SearchPageBtn } from '../SearchForm/SearchForm.styled';
import { throttle } from 'lodash';

const validateSearchQuery = (value) => {
  let error;
  if (!/^[a-zA-Z]+$/.test(value)) {
  error = 'Please enter only letters';
  }
  return error;
  };

export const SearchForm = ({ searchQuery, onSearchQueryChange }) => {

  const throttledOnSearchQueryChange = throttle(onSearchQueryChange, 5000);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
    {({ errors, touched }) => (
    <FormWrap>
      <label htmlFor="search-query"></label>
      <Input
        required
        id="search-query"
        type="text"
        placeholder="Beef |"
        value={searchQuery}
        onChange={(e) => throttledOnSearchQueryChange(e.target.value)}
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


