import axios from 'axios';
import constants from '@/constants';
import store from '@/store';

const instance = axios.create({
  baseURL: constants.baseUrl,
  withCredentials: true,
  headers: {
    'X-CSRF-TOKEN': `INDEX ${store.state.auth.token}`,
    "Access-Control-Allow-Origin": "true",
    "Access-Control-Allow-Credentials": "true",
  },
});

instance.interceptors.response.use(response => response, (error) => {
  return Promise.reject(error);
});

export default instance;