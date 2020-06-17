import {AppConfig} from '@common/core/config/app-config';
import {HomepageAppearancePanelComponent} from './app/admin/appearance/homepage-appearance-panel/homepage-appearance-panel.component';

export const LINK_CONFIG: AppConfig = {
    assetsPrefix: 'client',
    navbar: {
        defaultPosition: 'homepage-navbar',
        defaultColor: 'primary',
        dropdownItems: [
            {route: '/dashboard', name: 'Dashboard', icon: 'link'},
        ]
    },
    auth: {
        redirectUri: '/dashboard',
        adminRedirectUri: '/dashboard',
    },
    accountSettings: {
        hideNavbar: false,
    },
    customPages: {
        hideNavbar: false,
    },
    admin: {
        analytics: {
            channels: [
                {name: 'link reports', route: '/admin/analytics/links'},
                {name: 'google analytics', route: '/admin/analytics/google'}
            ]
        },
        ads: [
            {
                slot: 'ads.splash.top',
                description: 'Top of link splash page',
            },
            {
                slot: 'ads.splash.bottom',
                description: 'Bottom of link splash page',
            },
            {
                slot: 'ads.dashboard.top',
                description: 'Top of user dashboard page',
            },
            {
                slot: 'ads.frame.top',
                description: 'Top of link frame page',
            },
            {
                slot: 'ads.landing.top',
                description: 'Top of landing page',
            },
            {
                slot: 'ads.page.top',
                description: 'Top of custom link page',
            },
        ],
        pages: [
            {name: 'links', icon: 'link', route: 'links', permission: 'links.view'},
            {name: 'link groups', icon: 'copy-link', route: 'groups', permission: 'link_groups.view'},
            {name: 'link overlays', icon: 'tooltip', route: 'link-overlays', permission: 'link_overlays.view'},
            {name: 'tracking pixels', icon: 'tracking', route: 'pixels', permission: 'tracking_pixels.view'},
            {name: 'custom domains', icon: 'www', route: 'custom-domains', permission: 'custom_domains.view'},
        ],
        appearance: {
            defaultRoute: '/',
            navigationRoutes: [
                '/',
                'dashboard',
            ],
            menus: {
                positions: [
                    'dashboard-navbar',
                    'dashboard-sidebar',
                    'homepage-navbar',
                    'admin-navbar',
                    'custom-page-navbar',
                    'footer',
                ],
                availableRoutes: [
                    'dashboard',
                    'dashboard/links',
                    'dashboard/groups',
                    'dashboard/custom-domains',
                    'dashboard/link-overlays',
                    'dashboard/custom-pages',
                    'dashboard/pixels',
                ]
            },
            sections: [
                {
                    name: 'homepage',
                    component: HomepageAppearancePanelComponent,
                    position: 1,
                }
            ]
        }
    },
};
