import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {PaginatedDataTableSource} from '@common/shared/data-table/data/paginated-data-table-source';
import {Paginator} from '@common/shared/paginator.service';
import {Users} from '@common/auth/users.service';
import {Modal} from '@common/core/ui/dialogs/modal.service';
import {CurrentUser} from '@common/auth/current-user';
import {Settings} from '@common/core/config/settings.service';
import {Toast} from '@common/core/ui/toast.service';
import {HttpErrors} from '@common/core/http/errors/http-errors.enum';
import {ConfirmModalComponent} from '@common/core/ui/confirm-modal/confirm-modal.component';
import {LinkGroup} from '../../../shared/link/link-group';
import {CrupdateLinkGroupModalComponent} from '../crupdate-link-group-modal/crupdate-link-group-modal.component';
import {LinkUsageService} from '../../../shared/link/link-usage.service';
import {Router} from '@angular/router';
import {LinkGroupService} from '../../../shared/link/link-group.service';

@Component({
    selector: 'link-group-index',
    templateUrl: './link-group-index.component.html',
    styleUrls: ['./link-group-index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [Paginator],
})
export class LinkGroupIndexComponent implements OnInit, OnDestroy {
    @ViewChild(MatSort, { static: true }) matSort: MatSort;
    public dataSource: PaginatedDataTableSource<LinkGroup>;

    constructor(
        public paginator: Paginator<LinkGroup>,
        private linkGroups: LinkGroupService,
        private modal: Modal,
        public currentUser: CurrentUser,
        public settings: Settings,
        private toast: Toast,
        private linkUsage: LinkUsageService,
        private router: Router,
    ) {}

    ngOnInit() {
        // filter link groups by current user ID if we are not in admin
        const staticParams = this.router.url.indexOf('admin') === -1 ?
            {userId: this.currentUser.get('id')} :
            {};
        this.dataSource = new PaginatedDataTableSource<LinkGroup>({
            uri: 'link-group',
            dataPaginator: this.paginator,
            matSort: this.matSort,
            staticParams,
        });
    }

    ngOnDestroy() {
        this.paginator.destroy();
    }

    public deleteSelectedGroups() {
        const ids = this.dataSource.selectedRows.selected.map(group => group.id);
        this.linkGroups.delete(ids).subscribe(() => {
            this.dataSource.reset();
            this.linkUsage.reload();
        }, errResponse => {
            this.toast.open(errResponse.messages.general || HttpErrors.Default);
        });
    }

    public maybeDeleteSelectedGroups() {
        this.modal.show(ConfirmModalComponent, {
            title: 'Delete Users',
            body:  'Are you sure you want to delete selected users?',
            ok:    'Delete'
        }).afterClosed().subscribe(confirmed => {
            if ( ! confirmed) return;
            this.deleteSelectedGroups();
            this.linkUsage.reload();
        });
    }

    public showCrupdateGroupModal(group?: LinkGroup) {
        this.modal.open(
            CrupdateLinkGroupModalComponent,
            {group},
            'crupdate-link-group-modal-container'
        ).beforeClosed().subscribe(data => {
            if ( ! data) return;
            this.dataSource.reset();
        });
    }

    public insideAdmin(): boolean {
        return this.router.url.indexOf('admin') > -1;
    }
}
