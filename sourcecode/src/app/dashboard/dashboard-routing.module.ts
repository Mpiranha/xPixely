import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardHostComponent} from './dashboard-host/dashboard-host.component';
import {LinkIndexComponent} from './link/link-index/link-index.component';
import {LinkShowComponent} from './link/link-show/link-show.component';
import {LinkShowResolverService} from './link/link-show/link-show-resolver.service';
import {LinkReportsResolverService} from '../shared/link/link-reports-resolver.service';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {LinkGroupIndexComponent} from './link-group/link-group-index/link-group-index.component';
import {LinkGroupShowComponent} from './link-group/link-group-show/link-group-show.component';
import {LinkGroupResolverService} from './link-group/link-group-show/link-group-resolver.service';
import {CustomDomainIndexComponent} from '@common/custom-domain/custom-domain-index/custom-domain-index.component';
import {LinkOverlayIndexComponent} from './link-overlay/link-overlay-index/link-overlay-index.component';
import {customPagesManagerRoutes} from '@common/core/pages/manager/custom-pages-manager-routing.module';
import {TrackingPixelIndexComponent} from './pixels/tracking-pixel-index/tracking-pixel-index.component';

const routes: Routes = [
    {path: '', component: DashboardHostComponent, children: [
        {path: '', resolve: {reports: LinkReportsResolverService}, component: DashboardHomeComponent, data: {name: 'Dashboard'}},

        // link
        {path: 'links', component: LinkIndexComponent, data: {name: 'Links'}},
        {path: 'links/:linkId', resolve: {api: LinkShowResolverService}, component: LinkShowComponent, data: {name: 'Link Statistics'}},

        // group
        {path: 'link-groups', component: LinkGroupIndexComponent, data: {name: 'Link Groups'}},
        {path: 'link-groups/:groupId', resolve: {api: LinkGroupResolverService}, component: LinkGroupShowComponent, data: {name: 'Link Group Statistics'}},

        // custom domain
        {path: 'custom-domains', component: CustomDomainIndexComponent, data: {name: 'Custom Domains'}},

        // link overlay
        {path: 'link-overlays', component: LinkOverlayIndexComponent, data: {name: 'Link Overlays'}},

        // tracking pixels
        {path: 'pixels', component: TrackingPixelIndexComponent, data: {name: 'Tracking Pixels'}},

        ...customPagesManagerRoutes,
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
