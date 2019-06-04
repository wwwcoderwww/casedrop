import axiosInstanceApi from './axios-instance-api';


export default {
  getBackground() {
    return axiosInstanceApi.get('/creator');
  },
  getItem(name) {
    return axiosInstanceApi.get('/creator/items', { params: name });
  },
  filterItems(name) {
    return axiosInstanceApi.get('/creator/items', { params: name });
  },
  searchItems(name) {
    return axiosInstanceApi.get('/creator/items/live', { params: name });
  },
  createCase(name) {
    return axiosInstanceApi.post('/creator', { name } );    
  },
  testAuth() {
    return axiosInstanceApi.request({
      method: 'get',
      url: '/authuser',
      withCredentials: true
    });
  }
};