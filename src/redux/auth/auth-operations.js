import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;

      await axios.post('/users/signup', credentials);
      const res = await axios.post('/users/signin', { email, password });
      // console.log(res);
      setAuthHeader(res.data.user.token);
      return res.data;
    } catch (error) {
      // console.log(error);
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
      setAuthHeader(res.data.user.token);
      // console.log(res);
      return res.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout', credentials);
      clearAuthHeader();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrent',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to download user information');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      // check is token is expired - and then delete it from local storage
      if (error.response.data.message === 'jwt expired') {
        // If the response status is 401, clear the auth header and purge the persisted data
        clearAuthHeader();
        thunkAPI.dispatch({ type: 'persist/PURGE', key: 'persist:auth' });
      }
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
