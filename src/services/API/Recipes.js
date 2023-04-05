import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';

export const getCategoriesAPI = () => {
    return axios.get('/recipes/categories').then(({ data }) => {
        return data;
    });
};

export const getRecipesByCategoryAPI = (category) => {
    return axios.get(`/recipes/${category}`).then(({ data }) => {
        return data;
    });
}
export const getSetOfCategoriestAPI = () => {
    return axios.get('/recipes/main').then(({ data }) => {
      return data;
    });
  };