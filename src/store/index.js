import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './modules/auth';
import User from './modules/User';
import modals from './modules/modals';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    modals,
    User
  },
  plugins: [createPersistedState({
    paths: ['auth', 'modals'],
  })],
});