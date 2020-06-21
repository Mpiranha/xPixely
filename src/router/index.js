import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Workspace from '@/components/Workspace';
import ManageTeam from '@/components/ManageTeam';
import AccountSettings from '@/components/AccountSettings';
import Billing from '@/components/Billing';
import Links from '@/components/Links';
import LinkOverlay from '@/components/LinkOverlay';
import CustomDomain from '@/components/CustomDomain';
import Pixel from '@/components/Pixel';
import LinkGroup from '@/components/LinkGroup';
import LinkPages from '@/components/LinkPages';


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
    {
      path: '/link-overlay',
      name: 'LinkOverlay',
      component: LinkOverlay,
    },
    {
      path: '/custom-domain',
      name: 'CustomDomain',
      component: CustomDomain,
    },
    {
      path: '/pixel',
      name: 'Pixel',
      component: Pixel,
    },
    {
      path: '/link-group',
      name: 'LinkGroup',
      component: LinkGroup,
    },
    {
      path: '/link-pages',
      name: 'LinkPages',
      component: LinkPages,
    },
  ],
});
