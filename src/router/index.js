import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Workspace from '@/components/Workspace';
import ManageTeam from '@/components/ManageTeam';
import AccountSettings from '@/components/AccountSettings';
import Billing from '@/components/Billing';
import Links from '@/components/Links';


Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Sidebar',
    //   component: Sidebar,
    // },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/workspace',
      name: 'Workspace',
      component: Workspace,
    },
    {
      path: '/manage-team',
      name: 'ManageTeam',
      component: ManageTeam,
    },
    {
      path: '/account-settings',
      name: 'AccountSettings',
      component: AccountSettings,
    },
    {
      path: '/billing',
      name: 'Billing',
      component: Billing,
    },
    {
      path: '/links',
      name: 'Links',
      component: Links,
    },
  ],
});
