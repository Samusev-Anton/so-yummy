import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';

// const setAuthHeader = token => {};

export const getMailAPI = email => {
  console.log(email);
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios
    .post('/users/subscribe', email, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM5ZjVlNTM5NDRjMDE1NDI2YzRiMCIsImlhdCI6MTY4MDY0NjAxOCwiZXhwIjoxNjgwNjU2ODE4fQ.u050iTqul0bD7R-0XwmEgGE8-9YdTgLGP1NSs8mw_T0`,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

// axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM5ZjVlNTM5NDRjMDE1NDI2YzRiMCIsImlhdCI6MTY4MDY0NjAxOCwiZXhwIjoxNjgwNjU2ODE4fQ.u050iTqul0bD7R-0XwmEgGE8-9YdTgLGP1NSs8mw_T0`;

// state.auth.token;
// const MyComponent = () => {
//   const token = useSelector(state => state.auth.token);
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   console.log(token);
// };
