import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';

export const getMailAPI = email => {
  console.log(email);

  return axios.post('/users/subscribe', email).then(({ data }) => {
    return data;
  });

  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
 

};
