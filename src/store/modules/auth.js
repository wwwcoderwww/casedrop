export default {
  namespaced: true,
  state: {
    token: null,
    user: {}
  },

  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setUserBalance(state, payload) {
      state.user.balance = payload;
    },
    logout(state) {
      state.token = null;
      state.user = {};
    },
  },

  getters: {
    isAuthenticated: state => !!state.token
  }
};