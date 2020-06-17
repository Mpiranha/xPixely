import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardHostComponent} from './dashboard-host/dashboard-host.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';
import {LinkOptionsFormComponent} from './link/link-options-form/link-options-form.component';
import {ChipInputModule} from '@common/core/ui/chip-input/chip-input.module';
import {LinkIndexComponent} from './link/link-index/link-index.component';
import {DataTableModule} from '@common/shared/data-table/data-table.module';
import {CrupdateLinkModalComponent} from './link/crupdate-link-modal/crupdate-link-modal.component';
import {LinkShowComponent} from './link/link-show/link-show.component';
import {ChartsModule} from '@common/shared/charts/charts.module';
import {LinkGroupIndexComponent} from './link-group/link-group-index/link-group-index.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {SharedModule} from '../shared/shared.module';
import {CrupdateLinkGroupModalComponent} from './link-group/crupdate-link-group-modal/crupdate-link-group-modal.component';
import {LinkGroupShowComponent} from './link-group/link-group-show/link-group-show.component';
import {AttachLinkModalComponent} from './link-group/attach-link-modal/attach-link-modal.component';
import {CustomDomainModule} from '@common/custom-domain/custom-domain.module';
import {LinkOverlayIndexComponent} from './link-overlay/link-overlay-index/link-overlay-index.component';
import {CrupdateLinkOverlayModalComponent} from './link-overlay/crupdate-link-overlay-modal/crupdate-link-overlay-modal.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {CustomPagesManagerModule} from '@common/core/pages/manager/custom-pages-manager.module';
import {LinkTypeMenuComponent} from './link/link-type-menu/link-type-menu.component';
import {DatetimeInputModule} from '@common/core/ui/datetime-input/datetime-input.module';
import {LINK_PAGE_TYPE} from './link/types';
import {LinkUsageInfoComponent} from './dashboard-host/link-usage-info/link-usage-info.component';
import {UpgradePanelComponent} from './dashboard-host/upgrade-panel/upgrade-panel.component';
import {TrackingPixelIndexComponent} from './pixels/tracking-pixel-index/tracking-pixel-index.component';
import {CrupdateTrackingPixelModalComponent} from './pixels/crupdate-tracking-pixel-modal/crupdate-tracking-pixel-modal.component';
import {TranslationsModule} from '@common/core/translations/translations.module';
import {MatIconModule} from '@angular/material/icon';
import {FormatPipesModule} from '@common/core/ui/format-pipes/format-pipes.module';
import {ClickChartsModule} from './click-charts/click-charts.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {ColorPickerInputModule} from '@common/core/ui/color-picker/color-picker-input/color-picker-input.module';
import {LoadingIndicatorModule} from '@common/core/ui/loading-indicator/loading-indicator.module';
import {NoResultsMessageModule} from '@common/core/ui/no-results-message/no-results-message.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {InfoPopoverModule} from '@common/core/ui/info-popover/info-popover.module';
import {MaterialNavbarModule} from '@common/core/ui/material-navbar/material-navbar.module';
import {AdHostModule} from '@common/core/ui/ad-host/ad-host.module';
import {Modal} from '@common/core/ui/dialogs/modal.service';
import {SlugControlModule} from '@common/shared/form-controls/slug-control/slug-control.module';

@NgModule({
    declarations: [
        DashboardHostComponent,
        DashboardHomeComponent,
        LinkOptionsFormComponent,
        LinkIndexComponent,
        CrupdateLinkModalComponent,
        LinkShowComponent,
        LinkGroupIndexComponent,
        CrupdateLinkGroupModalComponent,
        LinkGroupShowComponent,
        AttachLinkModalComponent,
        LinkOverlayIndexComponent,
        CrupdateLinkOverlayModalComponent,
        LinkTypeMenuComponent,
        LinkUsageInfoComponent,
        UpgradePanelComponent,
        TrackingPixelIndexComponent,
        CrupdateTrackingPixelModalComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        DashboardRoutingModule,
        TranslationsModule,
        FormatPipesModule,
        ClickChartsModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerInputModule,
        LoadingIndicatorModule,
        NoResultsMessageModule,
        InfoPopoverModule,
        MaterialNavbarModule,
        AdHostModule,
        SlugControlModule,

        SharedModule,
        ChartsModule,
        DataTableModule,
        CustomDomainModule,
        ChipInputModule,
        DatetimeInputModule,
        CustomPagesManagerModule.forRoot({
            resourceName: 'link pages',
            type: LINK_PAGE_TYPE,
            showSlug: false,
            filterByUserId: true,
        }),

        // material
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSlideToggleModule,
    ],
    providers: [
        Modal,
    ]
})
export class DashboardModule {
}
