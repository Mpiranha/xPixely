import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {PaginatedDataTableSource} from '@common/shared/data-table/data/paginated-data-table-source';
import {Paginator} from '@common/shared/paginator.service';
import {Modal} from '@common/core/ui/dialogs/modal.service';
import {CurrentUser} from '@common/auth/current-user';
import {Settings} from '@common/core/config/settings.service';
import {Toast} from '@common/core/ui/toast.service';
import {LinkUsageService} from '../../../shared/link/link-usage.service';
import {ConfirmModalComponent} from '@common/core/ui/confirm-modal/confirm-modal.component';
import {Messages} from '../../../messages.enum';
import {HttpErrors} from '@common/core/http/errors/http-errors.enum';
import {TrackingPixel} from '../tracking-pixel';
import {PIXEL_BASE_URI, TrackingPixelService} from '../tracking-pixel.service';
import {CrupdateTrackingPixelModalComponent} from '../crupdate-tracking-pixel-modal/crupdate-tracking-pixel-modal.component';
import {Router} from '@angular/router';
import {ValueLists} from '@common/core/services/value-lists.service';

@Component({
    selector: 'tracking-pixel-index',
    templateUrl: './tracking-pixel-index.component.html',
    styleUrls: ['./tracking-pixel-index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [Paginator],
})
export class TrackingPixelIndexComponent implements OnInit, OnDestroy {
    @ViewChild(MatSort, {static: true}) matSort: MatSort;
    public dataSource: PaginatedDataTableSource<TrackingPixel>;

    constructor(
        public paginator: Paginator<TrackingPixel>,
        private pixels: TrackingPixelService,
        private modal: Modal,
        public currentUser: CurrentUser,
        public settings: Settings,
        private toast: Toast,
        private linkUsage: LinkUsageService,
        private router: Router,
        private valueLists: ValueLists,
    ) {}

    ngOnInit() {
        // filter link overlays by current user ID if we are not in admin
        const staticParams = this.router.url.indexOf('admin') === -1 ?
            {userId: this.currentUser.get('id')} :
            {};
        this.dataSource = new PaginatedDataTableSource<TrackingPixel>({
            uri: PIXEL_BASE_URI,
            dataPaginator: this.paginator,
            matSort: this.matSort,
            staticParams,
        });
    }

    ngOnDestroy() {
        this.paginator.destroy();
    }

    public maybeDeleteSelectedPixels() {
        this.modal.show(ConfirmModalComponent, {
            title: 'Delete Pixels',
            body:  'Are you sure you want to delete selected tracking pixels?',
            ok:    'Delete'
        }).afterClosed().subscribe(confirmed => {
            if ( ! confirmed) return;
            this.deleteSelectedPixels();
        });
    }

    public deleteSelectedPixels() {
        const ids = this.dataSource.selectedRows.selected.map(d => d.id);
        this.pixels.delete(ids).subscribe(() => {
            this.dataSource.reset();
            this.linkUsage.reload();
            this.valueLists.clearCache();
            this.toast.open(Messages.PIXEL_DELETE_SUCCESS);
        }, err => {
            this.toast.open(err.messages.general || HttpErrors.Default);
        });
    }

    public showCrupdatePixelModal(pixel?: TrackingPixel) {
        this.modal.open(
            CrupdateTrackingPixelModalComponent,
            {pixel},
            'crupdate-tracking-pixel-modal-container'
        ).beforeClosed().subscribe(data => {
            if ( ! data) return;
            this.dataSource.reset();
            this.linkUsage.reload();
        });
    }

    public insideAdmin(): boolean {
        return this.router.url.indexOf('admin') > -1;
    }
}
