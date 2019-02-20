import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store'; // weird: I can't name it store!
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currencyFilter';
import argCurrencyFilter from './shared/argCurrencyFilter';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);
Vue.filter('argCurrency', argCurrencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
