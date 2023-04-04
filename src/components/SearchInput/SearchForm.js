import { Formik } from 'formik';
import { FormWrap, Input, BtnSearch } from './SearchForm.styled';
import { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState({ search: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery(prevState => { return { ...prevState, [name]: value } })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...query });
    setQuery({ search: '' });
  }


    return (
      <div>
        <Formik>
          <FormWrap onSubmit={handleSubmit}>
            <label name="search">
              <Input
                type="text"
                placeholder="Beef"
                name="search"
                onChange={handleInputChange}
                value={query.search}
                autoComplete="on"
                autoFocus
              ></Input>
            </label>
            <BtnSearch type="submit">Search</BtnSearch>
          </FormWrap>
        </Formik>
      </div>
    );
  };