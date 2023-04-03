import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoriesOperation,
  getRecipesByCategoryOperation,
  sendMailOperation,
} from './opertions';

const initialState = {
  categories: [],
  recipesOfCategory: [],
  loadingRecipesOfCategory: false,
  email: [],
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
      ),
});

export const recipesReducer = recipesSlice.reducer;

const handlePending = state => {
  state.isLoading = true;
  state.isPending = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const sendMailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  extraReducers: {
    [sendMailOperation.pending]: handlePending,
    [sendMailOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [sendMailOperation.rejected]: handleRejected,
  },
});
export const sendMailReducer = sendMailSlice.reducer;
