import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
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
        state.user = action.payload.user;
        state.token = action.payload.user.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled, getCurrentUser.fulfilled),
        state => {
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(getCurrentUser.fulfilled, getCurrentUser.rejected),
        state => {
          state.isRefreshing = false;
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
