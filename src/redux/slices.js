import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesOperation, getRecipesByCategoryOperation } from './opertions';

const initialState = {
    categories: [],
    recipesOfCategory: [],
    loadingRecipesOfCategory: false,
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getCategoriesOperation.fulfilled, (state, { payload }) => {
                state.categories = payload.data;
            })
            .addCase(getRecipesByCategoryOperation.pending, (state) => {
                state.loadingRecipesOfCategory = true;
            })
            .addCase(getRecipesByCategoryOperation.rejected, (state) => {
                state.loadingRecipesOfCategory = false;
            })
            .addCase(getRecipesByCategoryOperation.fulfilled, (state, { payload }) => {
                state.recipesOfCategory = payload.data;
                state.loadingRecipesOfCategory = false;
            }),
});

export const recipesReducer = recipesSlice.reducer;
