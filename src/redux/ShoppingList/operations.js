import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addFavouriteRecipe,
  getFavoriteRecipesAPI,
  deleteFavouriteRecipe,
  addToShoppingList,
  deleteFromShoppingList,
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

export const addIngredient = createAsyncThunk(
  'shopping/addIngredient',
  async (ingridientId, { rejectWithValue }) => {
    try {
      const response = await addToShoppingList(ingridientId);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const deleteIngredient = createAsyncThunk(
  'shopping/deleetIngredient',
  async (ingridientId, { rejectWithValue }) => {
    try {
      const response = await deleteFromShoppingList(ingridientId);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
