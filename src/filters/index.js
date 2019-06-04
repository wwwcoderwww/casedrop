import Vue from 'vue';

const priceFormater = value => +value.toFixed(2);
const toUppercase = value => value.toString().replace(/\b\w/g, l => l.toUpperCase());

Vue.filter('priceFormater', priceFormater);
Vue.filter('toUppercase', toUppercase);