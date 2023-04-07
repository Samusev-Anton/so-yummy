import React, { useState } from "react";
import { Formik } from 'formik';
import { FormWrap, Input } from '../../SearchInput/SearchForm.styled';
import { SearchPageBtn } from "./SearchForm.styled";

export const SearchForm = ({ searchQuery, onSubmit }) => {
  const [value, setValue] = useState(searchQuery || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    };
    
    const handleChange = (event) => {
    setValue(event.target.value);
    };
    
  return (
    <Formik>
    <FormWrap onSubmit={handleSubmit}>
      <label htmlFor="search-query"></label>
      <Input
        required
        id="search-query"
        type="text"
        placeholder="Beef"
        value={value}
        onChange={handleChange}
        autoComplete="on"
        autoFocus 
      />
      <SearchPageBtn type="submit">Search</SearchPageBtn>
    </FormWrap>
    </Formik>
  );
}
