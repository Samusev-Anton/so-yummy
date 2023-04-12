import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseAxiosURL } from '../../services/API/commonServerAdress';

import {
  getShoppingList,
  addFavouriteRecipe,
  deleteFavouriteRecipe,
  addToShoppingList,
  deleteFromShoppingList,
} from 'services/API/Recipes';

axios.defaults.baseUR = baseAxiosURL;

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.user.token);
      return res.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
      setAuthHeader(res.data.user.token);
      return res.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout', credentials);
      clearAuthHeader();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrent',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to download user information');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  '/auth/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.patch(`/users/profile`, data);
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addFavRecipe = createAsyncThunk(
  'favorite/addFavRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const response = await addFavouriteRecipe(recipeId);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteFavRecipe = createAsyncThunk(
  'favorite/deleteFavRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const response = await deleteFavouriteRecipe(recipeId);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getShopList = createAsyncThunk(
  'shopping/getShopList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getShoppingList();
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addIngredient = createAsyncThunk(
  'shopping/addIngredient',
  async (obj, { rejectWithValue }) => {
    try {
      const response = await addToShoppingList(obj);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const deleteIngredient = createAsyncThunk(
  'shopping/deleteIngredient',
  async (ingridientId, { rejectWithValue }) => {
    try {
      const response = await deleteFromShoppingList(ingridientId);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
