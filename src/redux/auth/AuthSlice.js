import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  getCurrentUser,
  addIngredient,
  deleteIngredient,
  addFavRecipe,
  deleteFavRecipe,
} from './auth-operations';
import { transformUserData } from '../../utils/transformUserData';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    avatarCloudId: null,
    favoritsRecipe: [],
    shoppingList: [],
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = transformUserData(action.payload.user);
        state.token = action.payload.user.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = transformUserData(action.payload.user);
        state.token = action.payload.user.token;
      })
      .addCase(logout.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.data.name,
          email: action.payload.data.email,
          avatarURL: action.payload.data.avatarURL,
          avatarCloudId: action.payload.data.avatarCloudId,
          favoritsRecipe: [...action.payload.data.favoritsRecipe],
          shoppingList: [...action.payload.data.shoppingList],
        };
        state.token = action.payload.data.token;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(addFavRecipe.fulfilled, (state, action) => {
        state.user.favoritsRecipe.push(action.meta.arg);
      })
      .addCase(deleteFavRecipe.fulfilled, (state, action) => {
        state.user.favoritsRecipe = state.user.favoritsRecipe.filter(
          item => item !== action.meta.arg
        );
      })
      .addCase(addIngredient.fulfilled, (state, action) => {
        state.user.shoppingList.push(action.meta.arg);
      })
      .addCase(deleteIngredient.fulfilled, (state, action) => {
        state.user.shoppingList = state.user.shoppingList.filter(
          item => item._id !== action.meta.arg
        );
      })
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled, getCurrentUser.fulfilled),
        state => {
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;

// {
// [register.fulfilled](state, action) {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// },
// [login.fulfilled](state, action) {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// },
// [logout.fulfilled](state) {
//   state.user = { name: null, email: null };
//   state.token = null;
//   state.isLoggedIn = false;
// },
// [getCurrentUser.pending](state) {
//   state.isRefreshing = true;
// },
// [getCurrentUser.fulfilled](state, action) {
//   state.user = action.payload;
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// },
// [getCurrentUser.rejected](state) {
//   state.isRefreshing = false;
// },
// },
