import axios from 'axios';
import { baseAxiosURL } from './commonServerAdress';

axios.defaults.baseURL = baseAxiosURL;

export const getMailAPI = email => {
  // console.log(email);

  return axios.post('/users/subscribe', email).then(({ data }) => {
    return data;
  });

  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
