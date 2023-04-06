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
  // const searchUrl = searchType === 'query' ? `/recipes/search/title?title=${searchQuery}` : `/ingredients/?ingredients=${searchQuery}`;

  const searchUrl = `https://so-yummy-backend.onrender.com/api/recipes/search/title?title=${searchQuery}`;
  const data = await axios.get(searchUrl);
  return data.data.data;
};
