import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
import './registerServiceWorker';


Vue. prototype. $axios = axios;
Vue. prototype. $bus = new Vue ();
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
