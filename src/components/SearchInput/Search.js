import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/search/searchSlice";
import { Formik, ErrorMessage } from 'formik';
import { FormWrap, Input, BtnSearchLink } from '../../components/SearchInput/Search.styled';

const validateSearchQuery = (value) => {
  let error;
  if (!/^[a-zA-Z]+$/.test(value)) {
  error = 'Please enter only letters';
  }
  return error;
  };

export const Search = () => {
  const dispatch = useDispatch();
  const [newQuery, setNewQuery] = useState('');

  const handleSearchChange = (event) => {
    const newQuery = event.currentTarget.value;
    setNewQuery(newQuery);
  }

  useEffect(() => {
    dispatch(setSearch(newQuery));
    window.localStorage.setItem('search', newQuery);
  }, [dispatch, newQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
  } 

  return (
    <div>
      <Formik>
      {({ errors, touched }) => (
        <FormWrap onSubmit={handleSubmit}>
          <label name="search"></label>
            <Input
              type="text"
              placeholder="|"
              name="queryInput"
              onChange={handleSearchChange}
              validate={validateSearchQuery}
              autoComplete="on"
              autoFocus
            />
            {errors.searchQuery && touched.searchQuery && 
            <ErrorMessage>{errors.searchQuery}</ErrorMessage>}
            <BtnSearchLink type="submit" to={`/search`}>Search</BtnSearchLink>
        </FormWrap>
        )}
      </Formik>
    </div>
  );
};
