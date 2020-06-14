// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './stores/store';


Vue.use(Vuex);

// eslint-disable-next-line import/first
import 'bootstrap';
// eslint-disable-next-line import/first
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.component('main-sidebar', require('./components/Sidebar.vue').default);
Vue.component('nav-header', require('./components/Header.vue').default);
Vue.component('workspace-name', require('./components/WorkspaceName.vue').default);
Vue.component('top-nav', require('./components/TopNav.vue').default);
Vue.component('user-location', require('./components/UserLocation.vue').default);
Vue.component('workspace-item', require('./components/WorkspaceItem.vue').default);
Vue.component('team-member', require('./components/TeamMember.vue').default);
Vue.component('search-filter', require('./components/SearchFilter.vue').default);
Vue.component('filter-render', require('./components/FilterRenderer.vue').default);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
