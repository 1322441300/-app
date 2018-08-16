// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Mint from 'mint-ui';
import LyTab from 'ly-tab';
import App from './App';
import router from './router';
import axios from './common/ajax/ajax'; // 引入axiox
import '../static/css/normalize.css';
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(Mint);
Vue.use(LyTab);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
