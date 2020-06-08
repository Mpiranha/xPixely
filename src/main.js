// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import 'bootstrap';
// eslint-disable-next-line import/first
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.component('main-sidebar', require('./components/Sidebar.vue').default);
Vue.component('nav-header', require('./components/Header.vue').default);
Vue.component('workspace-name', require('./components/WorkspaceName.vue').default);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
