import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/filters';
import Spinner from '@/components/partials/Spinner';
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'https://live.casedrop.com:8080');

require('vue2-scrollbar/dist/style/vue2-scrollbar.css')

Vue.component('spinner', Spinner);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
