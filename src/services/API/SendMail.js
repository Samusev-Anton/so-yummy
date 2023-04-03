import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';

// export const getMailAPI = () => {
//   return axios.get('/users/subscribe').then(({ data }) => {
//     return data;
//   });
// };

export const getMailAPI = email => {
  return axios.post('/users/subscribe', { email }).then(({ data }) => {
    return data;
  });
};
