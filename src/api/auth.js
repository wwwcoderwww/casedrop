import axiosInstanceApi from './axios-instance-api';
import axiosInstance from './axios-instance';

export default {
  async getUserCredentials(formData) {
    const response = await axiosInstanceApi.post('/login', formData);

    return response;
  },

  async getAuthURL() {
    const response = await axiosInstance.get('/login');

    return response;
  },
  checkAuthUser() {
    return axiosInstanceApi.get('/authuser');
  }
}