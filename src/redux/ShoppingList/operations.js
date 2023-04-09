import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addFavouriteRecipe,
  getFavoriteRecipesAPI,
} from 'services/API/Recipes';

export const fetchFavRecipes = createAsyncThunk(
  'favorite/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getFavoriteRecipesAPI();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavRecipe = createAsyncThunk(
  'recipes/addFavRecipe',
  async (recipeId, { rejectWithValue }) => {
    console.log(recipeId);
    try {
      const response = await addFavouriteRecipe(recipeId);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
