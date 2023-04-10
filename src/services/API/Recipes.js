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

  return axios.get(searchUrl).then(({ data }) => {
    console.log(data.data);
    return data.data;
  });
  // const data = await axios.get(searchUrl);
  // return data.data.data;
};

// favorite recipes
export const getFavoriteRecipesAPI = () => {
  return axios.get('/favorite').then(({ data }) => {
    return data;
  });
};

export const addFavouriteRecipe = recipeId => {
  return axios.post(`/favorite/${recipeId}`).then(({ data }) => {
    return data;
  });
};

export const deleteFavouriteRecipe = recipeId => {
  return axios.delete(`/favorite/${recipeId}`).then(({ data }) => {
    return data;
  });
};

export const getRecipesById = recipeId => {
  return axios.get(`/recipes/description/${recipeId}`).then(({ data }) => {
    return data;
  });
};

export const getShoppingList = () => {
  return axios.get('/ingredients/shopping').then(({ data }) => {
    return data;
  });
};

export const addToShoppingList = obj => {
  return axios.post(`/ingredients/shopping`, obj).then(({ data }) => {
    return data;
  });
};

export const deleteFromShoppingList = ingridientId => {
  return axios.delete(`/ingredients/${ingridientId}`).then(({ data }) => {
    return data;
  });
};
