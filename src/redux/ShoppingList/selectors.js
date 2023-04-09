import { createSelector } from '@reduxjs/toolkit';

export const selectfavRecipies = state => state.favRecipies.items;

export const selectIsLoading = state => state.favRecipies.isLoading;
