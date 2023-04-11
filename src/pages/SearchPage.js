import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SearchBar } from 'components/Search/SearchBar/SearchBar';
import { SearchedRecipesList } from 'components/Search/SearchedRecipesList/SearchedRecipesList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
// import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/GlobalStyles';
import { getSearchRecipes } from '../redux/opertions';
import { searchRecipesApi } from '../services/API/Recipes'; 

export const SearchPage = () => {
  const { query } = useParams('');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchRecipes({ searchQuery, searchType }));
    searchRecipesApi({ searchQuery, searchType }).then(data =>
      setRecipes(data));
  }, [dispatch, searchQuery, searchType]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  return (
    <Container>
      {/* {<Loader />} */}
      <MainPageTitle value = "Search"></MainPageTitle>
      <SearchBar
        searchQuery={searchQuery}
        searchType={searchType}
        onSearchQueryChange={handleSearchQueryChange}
        onSearchTypeChange={handleSearchTypeChange}
      />
      <SearchedRecipesList recipes={recipes} />
    </Container>
  );
};
