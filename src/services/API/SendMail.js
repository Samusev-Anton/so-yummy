import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend.onrender.com/api';

export const getMailAPI = email => {
  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmJlMmRhY2JiMzhhNzRiODBjYjZmNSIsImlhdCI6MTY4MDU5ODQ5NywiZXhwIjoxNjgwNjA5Mjk3fQ.AMszraR1pb5t3PCD84GWrjR_AntbnB99cGOH6hDRbEI`;
  return axios.post('/users/subscribe', email).then(({ data }) => {
    return data;
  });
};
