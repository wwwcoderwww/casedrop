import axios from 'axios';
import constants from '@/constants';
import store from '@/store';

const instance = axios.create({
  baseURL: constants.url,
  headers: {
    'X-CSRF-TOKEN': `${store.state.auth.token}`
  },
});

instance.interceptors.response.use(response => response, (error) => {
  return Promise.reject(error);
});

export default instance;