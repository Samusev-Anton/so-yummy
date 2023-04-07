import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCategoriesAPI,
  getRecipesByCategoryAPI,
  getSetOfCategoriestAPI,
  searchRecipesApi,
} from 'services/API/Recipes';
import { getMailAPI } from 'services/API/SendMail';

export const getCategoriesOperation = createAsyncThunk(
  'recipes/categories',
  async (_, { rejectWithValue }) => {
    try {
      return await getCategoriesAPI();
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByCategoryOperation = createAsyncThunk(
  'recipes/recepiesByCategory',
  async (category, { rejectWithValue }) => {
    try {
      return await getRecipesByCategoryAPI(category);
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const sendMailOperation = createAsyncThunk(
  'users/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      return await getMailAPI(email);
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
export const getMainCategories = createAsyncThunk(
  'recipes/mainCategories',
  async (_, { rejectWithValue }) => {
    try {
      return await getSetOfCategoriestAPI();
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getSearchRecipes = createAsyncThunk(
  'search/getSearchRecipes',
  async ({ searchQuery, searchType }, { rejectWithValue }) => {
    try {
      return await searchRecipesApi({ searchQuery, searchType });
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

