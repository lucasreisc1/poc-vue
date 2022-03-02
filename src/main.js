import Vue from 'vue';
import VueApollo from 'vue-apollo';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueApollo);

new Vue({
  router,
  store,
  vuetify,
  render(h) { return h(App); },
}).$mount('#app');
