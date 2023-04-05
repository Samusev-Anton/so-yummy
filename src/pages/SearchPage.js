import React, { useState, useEffect } from "react";
import { SearchBar } from "components/Search/SearchBar/SearchBar";
import { SearchedRecipesList } from "components/Search/SearchedRecipesList/SearchedRecipesList";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle/MainPageTitle";
import { Loader } from "components/Loader/Loader";

export const SearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("query");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  useEffect(() => {
    const fetchSearchRecipes = async () => {
      setLoading(true);
      setError("");

      if (searchQuery && searchType) {
        const searchUrl =
        searchType === "query"
          ? `https://so-yummy-backend.onrender.com/api/recipes/search/title?title=${searchQuery}`
          : `https://so-yummy-backend.onrender.com/api/ingredients/?ingredients=${searchQuery}`;
      
        try {
          const response = await fetch(searchUrl);
          const recipes = await response.json();
          setRecipes([...recipes]);
          setLoading(false);
      } catch (error) {
        setError("Error fetching recipes.");
        setRecipes([]);
        setLoading(false);
      }
    }
    };

    if (searchQuery && searchType) {
      fetchSearchRecipes();
    } else {
      setRecipes([]);
    }
  }, [searchQuery, searchType]);

  return (
    <>
      {loading && <Loader/>}
      <MainPageTitle></MainPageTitle>
      <SearchBar
        searchQuery={searchQuery}
        searchType={searchType}
        onSearchQueryChange={handleSearchQueryChange}
        onSearchTypeChange={handleSearchTypeChange}
      />
      {!loading && !error && (
      <SearchedRecipesList recipes={recipes} searchValue={searchQuery} />
      )}
      {error && <p>{error}</p>}
    </>
  );
}


