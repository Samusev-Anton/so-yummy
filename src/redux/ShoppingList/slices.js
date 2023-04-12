import * as toolkit from '@reduxjs/toolkit';

import {
  // fetchFavRecipes,
  addFavRecipe,
  deleteFavRecipe,
  addIngredient,
  deleteIngredient,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const favRecipiesSlice = toolkit.createSlice({
  name: 'favRecipies',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addFavRecipe.pending]: handlePending,
    [addFavRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addFavRecipe.rejected]: handleRejected,
    [deleteFavRecipe.pending]: handlePending,
    [deleteFavRecipe.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        recipe => recipe.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteFavRecipe.rejected]: handleRejected,
  },
});

const shoppingListSlice = toolkit.createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addIngredient.pending]: handlePending,
    [addIngredient.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addIngredient.rejected]: handleRejected,
    [deleteIngredient.pending]: handlePending,
    [deleteIngredient.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        recipe => recipe.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteIngredient.rejected]: handleRejected,
  },
});

export const favRecipiesReducer = favRecipiesSlice.reducer;
export const shoppingListReducer = shoppingListSlice.reducer;
