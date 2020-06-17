import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinkSplashComponent} from './link-splash/link-splash.component';
import {LinkFrameComponent} from './link-frame/link-frame.component';
import {LinkPreviewHostComponent} from './link-preview-host/link-preview-host.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {LinkCustomPageComponent} from './link-custom-page/link-custom-page.component';
import {PagesModule} from '@common/core/pages/shared/pages.module';
import {RequestPasswordPanelModule} from '@common/shared/request-password-panel/request-password-panel.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TranslationsModule} from '@common/core/translations/translations.module';
import {MaterialNavbarModule} from '@common/core/ui/material-navbar/material-navbar.module';
import {AdHostModule} from '@common/core/ui/ad-host/ad-host.module';
import {AppFooterModule} from '../app-footer/app-footer.module';

@NgModule({
    declarations: [
        LinkPreviewHostComponent,
        LinkFrameComponent,
        LinkSplashComponent,
        LinkCustomPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        PagesModule,
        TranslationsModule,
        RequestPasswordPanelModule,
        MaterialNavbarModule,
        AdHostModule,
        AppFooterModule,

        // material
        MatButtonModule,
        MatIconModule,
    ],
})
export class LinkPreviewModule {
}
