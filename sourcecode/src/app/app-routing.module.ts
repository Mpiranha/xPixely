import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {AuthGuard} from '@common/guards/auth-guard.service';
import {ContactComponent} from '@common/contact/contact.component';
import {LinkPreviewHostComponent} from './shared/link-preview/link-preview-host/link-preview-host.component';
import {NOT_FOUND_ROUTES} from '@common/core/pages/not-found-routes';
import {LinkGroupPageComponent} from './link-group-page/link-group-page.component';
import {LinkGroupResolverService} from './dashboard/link-group/link-group-show/link-group-resolver.service';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LandingComponent, data: {willSetSeo: true}},
    {path: 'link-groups/:slug', component: LinkGroupPageComponent, resolve: {linkGroupResponse: LinkGroupResolverService}, data: {skipGroupStats: true}},
    {path: 'dashboard', loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule), canLoad: [AuthGuard]},
    {path: 'admin', loadChildren: () => import('app/admin/app-admin.module').then(m => m.AppAdminModule), canLoad: [AuthGuard]},
    {path: 'billing', loadChildren: () => import('common/billing/billing.module').then(m => m.BillingModule)},
    {path: 'contact', component: ContactComponent},
    {
        path: '**',
        pathMatch: 'full',
        component: LinkPreviewHostComponent,
        data: {willSetSeo: true},
    },
    ...NOT_FOUND_ROUTES,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
