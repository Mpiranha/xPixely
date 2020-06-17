import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetLinkGroupResponse} from '../../../shared/link/link-group.service';
import {BehaviorSubject} from 'rxjs';
import {CrupdateLinkGroupModalComponent} from '../crupdate-link-group-modal/crupdate-link-group-modal.component';
import {Modal} from '@common/core/ui/dialogs/modal.service';
import { matExpansionAnimations } from '@angular/material/expansion';

@Component({
    selector: 'link-group-show',
    templateUrl: './link-group-show.component.html',
    styleUrls: ['./link-group-show.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        matExpansionAnimations.indicatorRotate,
    ]
})
export class LinkGroupShowComponent implements OnInit {
    public reportsPanelState$ = new BehaviorSubject<'expanded'|'collapsed'>('collapsed');
    public data$ = new BehaviorSubject<GetLinkGroupResponse>(null);

    constructor(
        public route: ActivatedRoute,
        private modal: Modal,
    ) {}

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.data$.next(data.api);
        });
    }

    public paginationParams() {
        return {
            initialData: this.data$.value.links,
            staticParams: {
                groupId: this.data$.value.group.id
            }
        };
    }

    public openCrupdateGroupModal() {
        this.modal.open(
            CrupdateLinkGroupModalComponent,
            {group: this.data$.value.group},
            'crupdate-link-group-modal-container'
        ).beforeClosed().subscribe(newGroup => {
            if ( ! newGroup) return;
            this.data$.next({
                ...this.data$.value,
                group: newGroup
            });
        });
    }

    public toggleReportsHeight() {
        this.reportsPanelState$.next(
            this.reportsPanelState$.value === 'expanded' ? 'collapsed' : 'expanded'
        );
    }
}
