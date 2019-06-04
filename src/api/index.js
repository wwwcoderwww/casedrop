import axiosInstanceApi from './axios-instance-api';


export default {
  casedropCases() {
    return axiosInstanceApi.get('/boxes');
  },

  getUserInfo(steamId) {
    return axiosInstanceApi.get(`/users/${steamId}`);
  },

  userUserCases(steamId, page) {
    return axiosInstanceApi.get(`/user/${steamId}/prizes`, {
      params: {
        page
      }
    });
  },

  userTable() {
    return axiosInstanceApi.get('/users/table');
  },

  getCaseInfo(id) {
    return axiosInstanceApi.get(`/boxes/${id}`);
  },

  buyCase(id, count) {
    return axiosInstanceApi.post(`/boxes/${id}/buy`, { count });
  },

  reopenCase(id) {
    return axiosInstanceApi.post(`/boxes/${id}/reopen`);
  },

  resultOfCase(id) {
    return axiosInstanceApi.post(`/boxes/${id}/finally`);
  },

  sellCase(prize_id) {
    return axiosInstanceApi.post('/user/sell', { prize_id });
  },

  sellMultiCases(prize_ids) {
    return axiosInstanceApi.post('/user/massSell', { prize_ids });
  },

  sendItem(prize_id) {
    return axiosInstanceApi.post('/user/send', { prize_id });
  },


  testAuth() {
    return axiosInstanceApi.request({
      method: 'get',
      url: '/authuser',
      withCredentials: true
    });
  }
};