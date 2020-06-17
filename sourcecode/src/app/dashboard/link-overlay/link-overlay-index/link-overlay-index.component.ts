import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {PaginatedDataTableSource} from '@common/shared/data-table/data/paginated-data-table-source';
import {Paginator} from '@common/shared/paginator.service';
import {Modal} from '@common/core/ui/dialogs/modal.service';
import {CurrentUser} from '@common/auth/current-user';
import {Settings} from '@common/core/config/settings.service';
import {Toast} from '@common/core/ui/toast.service';
import {ConfirmModalComponent} from '@common/core/ui/confirm-modal/confirm-modal.component';
import {Messages} from '../../../messages.enum';
import {HttpErrors} from '@common/core/http/errors/http-errors.enum';
import {LinkOverlay} from '../link-overlay';
import {LinkOverlayService} from '../link-overlay.service';
import {CrupdateLinkOverlayModalComponent} from '../crupdate-link-overlay-modal/crupdate-link-overlay-modal.component';
import {LinkUsageService} from '../../../shared/link/link-usage.service';
import {OverlayPanel} from '@common/core/ui/overlay-panel/overlay-panel.service';
import {Router} from '@angular/router';

@Component({
    selector: 'link-overlay-index',
    templateUrl: './link-overlay-index.component.html',
    styleUrls: ['./link-overlay-index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [Paginator],
})
export class LinkOverlayIndexComponent implements OnInit, OnDestroy {
    @ViewChild(MatSort, {static: true}) matSort: MatSort;
    public dataSource: PaginatedDataTableSource<LinkOverlay>;

    constructor(
        public paginator: Paginator<LinkOverlay>,
        private overlays: LinkOverlayService,
        private modal: Modal,
        public currentUser: CurrentUser,
        public settings: Settings,
        private toast: Toast,
        private linkUsage: LinkUsageService,
        private overlay: OverlayPanel,
        private router: Router,
    ) {}

    ngOnInit() {
        // filter link overlays by current user ID if we are not in admin
        const staticParams = this.router.url.indexOf('admin') === -1 ?
            {userId: this.currentUser.get('id')} :
            {};
        this.dataSource = new PaginatedDataTableSource<LinkOverlay>({
            uri: 'link-overlay',
            dataPaginator: this.paginator,
            matSort: this.matSort,
            staticParams,
        });
    }

    ngOnDestroy() {
        this.paginator.destroy();
    }

    public maybeDeleteSelectedOverlays() {
        this.modal.show(ConfirmModalComponent, {
            title: 'Delete Overlays',
            body:  'Are you sure you want to delete selected overlays?',
            ok:    'Delete'
        }).afterClosed().subscribe(confirmed => {
            if ( ! confirmed) return;
            this.deleteSelectedOverlays();
        });
    }

    public deleteSelectedOverlays() {
        const ids = this.dataSource.selectedRows.selected.map(d => d.id);
        this.overlays.delete(ids).subscribe(() => {
            this.dataSource.reset();
            this.linkUsage.reload();
            this.toast.open(Messages.LINK_OVERLAY_DELETE_SUCCESS);
        }, err => {
            this.toast.open(err.messages.general || HttpErrors.Default);
        });
    }

    public showCrupdateLinkOverlayModal(overlay?: LinkOverlay) {
        this.modal.open(
            CrupdateLinkOverlayModalComponent,
            {overlay},
            'crupdate-link-overlay-modal-container'
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
