import {Component, ChangeDetectionStrategy, Inject, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Toast} from '@common/core/ui/toast.service';
import {Messages} from '../../../messages.enum';
import {LinkGroup} from '../../../shared/link/link-group';
import {LinkGroupService} from '../../../shared/link/link-group.service';
import {FormControl, FormGroup} from '@angular/forms';
import {distinctUntilChanged, filter, finalize} from 'rxjs/operators';
import {bindSlugTo} from '@common/shared/form-controls/slug-control/bind-slug-to';
import {slugifyString} from '@common/core/utils/slugify-string';

interface CrupdateLinkGroupModalData {
    group: LinkGroup;
}

@Component({
    selector: 'crupdate-link-group-modal',
    templateUrl: './crupdate-link-group-modal.component.html',
    styleUrls: ['./crupdate-link-group-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrupdateLinkGroupModalComponent implements OnInit {
    public loading$ = new BehaviorSubject(false);
    public updating$ = new BehaviorSubject(false);
    public errors$ = new BehaviorSubject<{name?: string}>({});
    public form = new FormGroup({
        name: new FormControl(),
        public: new FormControl(false),
        description: new FormControl(''),
        slug: new FormControl(''),
    });

    constructor(
        private dialogRef: MatDialogRef<CrupdateLinkGroupModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CrupdateLinkGroupModalData,
        private linkGroup: LinkGroupService,
        private toast: Toast,
    ) {
        this.updating$.next(!!data.group);
        if (data.group) {
            this.form.patchValue(data.group);
        }
    }

    ngOnInit() {
        bindSlugTo(this.form.get('name'));
    }

    public confirm() {
        this.loading$.next(true);

        const request = this.updating$.value ?
            this.linkGroup.update(this.data.group.id, this.form.value) :
            this.linkGroup.create(this.form.value);

        request.pipe(finalize(() => this.loading$.next(false)))
            .subscribe(response => {
                this.toast.open(this.updating$.value ? Messages.LINK_GROUP_UPDATE_SUCCESS : Messages.LINK_GROUP_CREATE_SUCCESS);
                this.close(response.group);
            }, err => this.errors$.next(err.messages));
    }

    public close(group?: LinkGroup) {
        this.dialogRef.close(group);
    }
}
