import {
    AfterViewInit,
    ApplicationRef,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {PaginatedDataTableSource} from '@common/shared/data-table/data/paginated-data-table-source';
import {Paginator} from '@common/shared/paginator.service';
import {Modal} from '@common/core/ui/dialogs/modal.service';
import {CurrentUser} from '@common/auth/current-user';
import {Settings} from '@common/core/config/settings.service';
import {Toast} from '@common/core/ui/toast.service';
import {HttpErrors} from '@common/core/http/errors/http-errors.enum';
import {ConfirmModalComponent} from '@common/core/ui/confirm-modal/confirm-modal.component';
import {getFaviconFromUrl} from '@common/core/utils/get-favicon-from-url';
import {Link} from '../../../shared/link/link';
import {CrupdateLinkModalComponent} from '../crupdate-link-modal/crupdate-link-modal.component';
import {DataTableSourceConfig} from '@common/shared/data-table/data/data-table-source-config';
import {LinkGroup} from '../../../shared/link/link-group';
import {LinkService} from '../../../shared/link/link.service';
import {LinkGroupService} from '../../../shared/link/link-group.service';
import {AttachLinkModalComponent} from '../../link-group/attach-link-modal/attach-link-modal.component';
import {LinkUsageService} from '../../../shared/link/link-usage.service';
import {LINK_INDEX_FILTERS} from './link-index-filters';
import {Router} from '@angular/router';
import merge from 'deepmerge';
import {RecaptchaService} from '@common/core/services/recaptcha.service';

@Component({
    selector: 'link-index',
    templateUrl: './link-index.component.html',
    styleUrls: ['./link-index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [Paginator],
})
export class LinkIndexComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatSort, { static: true }) matSort: MatSort;
    @Input() params: Partial<DataTableSourceConfig<Link>> = {};
    @Input() group: LinkGroup;
    public dataSource: PaginatedDataTableSource<Link>;

    constructor(
        public paginator: Paginator<Link>,
        private links: LinkService,
        private linkGroups: LinkGroupService,
        private modal: Modal,
        public currentUser: CurrentUser,
        public settings: Settings,
        private toast: Toast,
        public linkUsage: LinkUsageService,
        private router: Router,
        private recaptcha: RecaptchaService,
    ) {}

    ngOnInit() {
        // filter links by current user ID if we are not in admin
        if (this.router.url.indexOf('admin') === -1) {
            this.params = merge(this.params, {staticParams: {userId: this.currentUser.get('id')}});
        }
        this.dataSource = new PaginatedDataTableSource<Link>({
            uri: 'link',
            dataPaginator: this.paginator,
            matSort: this.matSort,
            filters: LINK_INDEX_FILTERS,
            ...this.params,
        });
    }

    ngAfterViewInit() {
        this.recaptcha.loadIfEnableFor('link_creation');
    }

    ngOnDestroy() {
        this.paginator.destroy();
    }

    public favicon(url: string) {
        return getFaviconFromUrl(url);
    }

    public maybeDeleteSelectedLinks() {
        this.modal.show(ConfirmModalComponent, {
            title: 'Delete Links',
            body:  'Are you sure you want to delete selected links?',
            ok:    'Delete'
        }).afterClosed().subscribe(confirmed => {
            if ( ! confirmed) return;
            this.deleteSelectedLinks();
        });
    }

    public deleteSelectedLinks() {
        const ids = this.dataSource.getSelectedItems();
        this.links.delete(ids).subscribe(() => {
            this.dataSource.reset();
            this.linkUsage.reload();
        }, err => {
            this.toast.open(err.messages.general || HttpErrors.Default);
        });
    }

    public maybeDetachSelectedLinks() {
        this.modal.show(ConfirmModalComponent, {
            title: 'Detach Links',
            body:  'Are you sure you want to detach selected links?',
            ok:    'Detach'
        }).afterClosed().subscribe(confirmed => {
            if ( ! confirmed) return;
            this.detachSelectedLinks();
        });
    }

    public detachSelectedLinks() {
        const ids = this.dataSource.getSelectedItems();
        this.linkGroups.detach(this.group.id, ids).subscribe(() => {
            this.dataSource.reset();
        }, err => {
            this.toast.open(err.messages.general || HttpErrors.Default);
        });
    }

    public showCrupdateLinkModal(link?: Link) {
        this.modal.open(
            CrupdateLinkModalComponent,
            {link, group: this.group},
            'crupdate-link-modal-container'
        ).beforeClosed().subscribe(data => {
            if ( ! data) return;
            this.dataSource.reset();
            this.linkUsage.reload();
        });
    }

    public showAttachLinkModal() {
        this.modal.open(
            AttachLinkModalComponent,
            {group: this.group},
            'attach-link-modal-container'
        ).beforeClosed().subscribe(data => {
            if ( ! data) return;
            this.dataSource.reset();
        });
    }

    public removeProtocol(url: string) {
        return url.replace(/(^\w+:|^)\/\//, '');
    }

    public getParentRoute(): string {
        return this.router.url.indexOf('admin') > -1 ? 'admin' : 'dashboard';
    }
}
