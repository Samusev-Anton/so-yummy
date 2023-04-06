import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoriesOperation,
  getRecipesByCategoryOperation,
  getMainCategories,
  getSearchRecipes,
} from './opertions';

const initialState = {
  categories: [],
  recipesOfCategory: [],
  mainCategories: null,
  loadingRecipesOfCategory: false,
  searchedRecipes: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategoriesOperation.fulfilled, (state, { payload }) => {
        state.categories = payload.data;
      })
      .addCase(getRecipesByCategoryOperation.pending, state => {
        state.loadingRecipesOfCategory = true;
      })
      .addCase(getRecipesByCategoryOperation.rejected, state => {
        state.loadingRecipesOfCategory = false;
      })
      .addCase(
        getRecipesByCategoryOperation.fulfilled,
        (state, { payload }) => {
          state.recipesOfCategory = payload.data;
          state.loadingRecipesOfCategory = false;
        }
      )
      .addCase( getMainCategories.fulfilled, (state, { payload }) => {
        state.mainCategories = payload.data;
      })
});

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
      [getSearchRecipes.pending]: handlePending,
      [getSearchRecipes.rejected]: handleRejected,
      
      [getSearchRecipes.fulfilled](state, { payload }) {
        state.isLoading = false;
        state.error = null;
        state.searchedRecipes = payload.data;
      },
    },
  });  


export const recipesReducer = recipesSlice.reducer;

export const searchReducer = recipesSlice.reducer;

