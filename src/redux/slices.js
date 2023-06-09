import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoriesOperation,
  getRecipesByCategoryOperation,
  getMainCategories,
} from './opertions';

const initialState = {
  categories: [],
  recipesOfCategory: [],
  mainCategories: null,
  loadingRecipesOfCategory: false,
  loadingRecipesMain: false
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

      .addCase(getMainCategories.pending, state => {
        state.loadingRecipesMain = true;
      })
      .addCase(getMainCategories.rejected, state => {
        state.loadingRecipesMain = false;
      })
      .addCase(getMainCategories.fulfilled, (state, { payload }) => {
        state.mainCategories = payload.data;
        state.loadingRecipesMain = false;
      }),
});


export const recipesReducer = recipesSlice.reducer;


