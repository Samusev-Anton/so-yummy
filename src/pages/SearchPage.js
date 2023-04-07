import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SearchBar } from 'components/Search/SearchBar/SearchBar';
import { SearchedRecipesList } from 'components/Search/SearchedRecipesList/SearchedRecipesList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { Loader } from 'components/Loader/Loader';
import {
  // selectsearchedRecipes,
  selectIsLoading,
  selectError,
} from '../redux/selectors';
import { getSearchRecipes } from '../redux/opertions';
import { searchRecipesApi } from '../services/API/Recipes';

export const SearchPage = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState('' || query);
  const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);

  // const searchedRecipes = useSelector(selectsearchedRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  // console.log(searchedRecipes);
  useEffect(() => {
    // if (searchQuery || searchType === 'ingredient') {
    dispatch(getSearchRecipes({ searchQuery, searchType }));
    searchRecipesApi({ searchQuery, searchType }).then(data =>
      setRecipes(data)
    );

    // }
  }, [dispatch, searchQuery, searchType]);

  const handleSearchSubmit = value => {
    setSearchQuery(value);
  };

  const handleSearchTypeChange = type => {
    setSearchType(type);
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainPageTitle></MainPageTitle>
      <SearchBar
        searchQuery={searchQuery}
        searchType={searchType}
        onSearchTypeChange={handleSearchTypeChange}
        onSubmit={handleSearchSubmit}
      />
      {/* {!isLoading && !error && ( */}
      <SearchedRecipesList recipes={recipes} />
      {/* )} */}
      {error && <p>{error}</p>}
    </>
  );
};
