import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchRecipesApi } from '../services/API/Recipes';
import { getSearch } from '../redux/search/searchSelector';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { SearchBar } from 'components/Search/SearchBar/SearchBar';
import { SearchedRecipesList } from 'components/Search/SearchedRecipesList/SearchedRecipesList';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/GlobalStyles';


export const SearchPage = () => {
  const search = useSelector(getSearch);
  const { query } = useParams('');
  const [searchQuery, setSearchQuery] = useState('' ? query : search);
  const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
        setIsLoading(true);
        searchRecipesApi({ searchQuery, searchType })
          .then(data => setRecipes(data))
          .finally(() => setIsLoading(false))
      }, [searchQuery, searchType]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  return (
    <Container>
        <MainPageTitle value={`Search`}></MainPageTitle>
          <SearchBar
            searchQuery={searchQuery}
            searchType={searchType}
            onSearchQueryChange={handleSearchQueryChange}
            onSearchTypeChange={handleSearchTypeChange}
          />
        {isLoading ? (<Loader />
        ) : (<SearchedRecipesList recipes={recipes} />)}
    </Container>
  );
};

