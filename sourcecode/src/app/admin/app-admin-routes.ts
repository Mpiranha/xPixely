import {LinkIndexComponent} from '../dashboard/link/link-index/link-index.component';
import {LinkShowResolverService} from '../dashboard/link/link-show/link-show-resolver.service';
import {LinkShowComponent} from '../dashboard/link/link-show/link-show.component';
import {LinkGroupIndexComponent} from '../dashboard/link-group/link-group-index/link-group-index.component';
import {LinkGroupResolverService} from '../dashboard/link-group/link-group-show/link-group-resolver.service';
import {LinkGroupShowComponent} from '../dashboard/link-group/link-group-show/link-group-show.component';
import {CustomDomainIndexComponent} from '@common/custom-domain/custom-domain-index/custom-domain-index.component';
import {LinkOverlayIndexComponent} from '../dashboard/link-overlay/link-overlay-index/link-overlay-index.component';
import {TrackingPixelIndexComponent} from '../dashboard/pixels/tracking-pixel-index/tracking-pixel-index.component';
import {LinkSettingsComponent} from './settings/link-settings/link-settings.component';
import {Routes} from '@angular/router';

export const APP_ADMIN_ROUTES: Routes = [
    // link
    {path: 'links', component: LinkIndexComponent},
    {path: 'links/:linkId', resolve: {api: LinkShowResolverService}, component: LinkShowComponent},

    // group
    {path: 'groups', component: LinkGroupIndexComponent},
    {path: 'groups/:groupId', resolve: {api: LinkGroupResolverService}, component: LinkGroupShowComponent},

    // custom domain
    {path: 'custom-domains', component: CustomDomainIndexComponent},

    // link overlay
    {path: 'link-overlays', component: LinkOverlayIndexComponent},

    // tracking pixels
    {path: 'pixels', component: TrackingPixelIndexComponent},
];

export const APP_SETTING_ROUTES: Routes = [
    {path: 'links', component: LinkSettingsComponent}
];
