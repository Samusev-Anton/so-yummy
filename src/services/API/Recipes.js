import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';

export const getCategoriesAPI = () => {
  return axios.get('/recipes/categories').then(({ data }) => {
    return data;
  });
};

export const getRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/${category}`).then(({ data }) => {
    return data;
  });
};
export const getSetOfCategoriestAPI = () => {
  return axios.get('/recipes/main').then(({ data }) => {
    return data;
  });
};

export const searchRecipesApi = async ({ searchQuery, searchType }) => {
  let searchUrl;
  if (!searchQuery) {
      searchUrl = `/recipes/search/title?title=beef`;
  }
  else{
      searchUrl = searchType === 'query' ? `/recipes/search/title?title=${searchQuery}` : `/ingredients/?ingredients=${searchQuery}`;
  }
  return axios.get(searchUrl).then(({ data }) => {
    return data.data;
  });
};


// favorite recipes
export const getFavoriteRecipesAPI = () => {
  return axios.get('/favorite').then(({ data }) => {
    return data;
  });
};
