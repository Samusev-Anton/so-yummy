import * as toolkit from '@reduxjs/toolkit';

import { fetchFavRecipes, addFavRecipe } from './operations';

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
    [fetchFavRecipes.pending]: handlePending,
    [fetchFavRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchFavRecipes.rejected]: handleRejected,
    [addFavRecipe.pending]: handlePending,
    [addFavRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addFavRecipe.rejected]: handleRejected,
    // [deleteContact.pending]: handlePending,
    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    // [deleteContact.rejected]: handleRejected,
  },
});

export const favRecipiesReducer = favRecipiesSlice.reducer;
