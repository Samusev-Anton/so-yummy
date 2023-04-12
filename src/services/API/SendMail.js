import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3030/api';

export const getMailAPI = email => {
  // console.log(email);

  return axios.post('/users/subscribe', email).then(({ data }) => {
    return data;
  });

  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
