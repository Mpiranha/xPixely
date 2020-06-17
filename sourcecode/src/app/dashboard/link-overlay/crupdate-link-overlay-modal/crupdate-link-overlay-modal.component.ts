import {AfterViewInit, ChangeDetectionStrategy, Component, Inject, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {LinkOverlay} from '../link-overlay';
import {BehaviorSubject} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Messages} from '../../../messages.enum';
import {LinkOverlayService} from '../link-overlay.service';
import {Toast} from '@common/core/ui/toast.service';
import {LinkOverlayComponent} from '../../../shared/link-overlay/link-overlay.component';
import {Translations} from '@common/core/translations/translations.service';
import {finalize} from 'rxjs/operators';

interface CrupdateLinkOverlayModalData {
    overlay?: LinkOverlay;
}

@Component({
    selector: 'crupdate-link-overlay-modal',
    templateUrl: './crupdate-link-overlay-modal.component.html',
    styleUrls: ['./crupdate-link-overlay-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrupdateLinkOverlayModalComponent implements AfterViewInit {
    @ViewChild(LinkOverlayComponent, {static: true}) overlayCmp: LinkOverlayComponent;
    public loading$ = new BehaviorSubject(false);
    public errors$ = new BehaviorSubject<Partial<LinkOverlay>>({});
    public form = this.fb.group({
        name: [''],
        position: [''],
        message: [''],
        label: [''],
        label_position: [''],
        btn_link: [''],
        btn_text: [''],
        colors: this.fb.group({
            'bg-color': this.fb.control(['']),
            'text-color': this.fb.control(['']),
            'label-bg-color': this.fb.control(['']),
            'label-color': this.fb.control(['']),
            'btn-bg-color': this.fb.control(['']),
            'btn-text-color': this.fb.control(['']),
        }),
    });

    constructor(
        private dialogRef: MatDialogRef<CrupdateLinkOverlayModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CrupdateLinkOverlayModalData,
        private fb: FormBuilder,
        private linkOverlays: LinkOverlayService,
        private toast: Toast,
        private i18n: Translations,
    ) {}

    ngAfterViewInit() {
        setTimeout(() => this.hydrateForm());
    }

    public confirm() {
        this.loading$.next(true);
        const request = this.data.overlay ?
            this.linkOverlays.update(this.data.overlay.id, this.getPayload()) :
            this.linkOverlays.create(this.getPayload());

        const msg = this.data.overlay ?
            Messages.LINK_OVERLAY_UPDATE_SUCCESS :
            Messages.LINK_OVERLAY_CREATE_SUCCESS;

        request
            .pipe(finalize(() => this.loading$.next(false)))
            .subscribe(response => {
                this.toast.open(msg);
                this.close(response.linkOverlay);
            }, err => this.errors$.next(err.messages));
    }

    public close(overlay?: LinkOverlay) {
        this.dialogRef.close(overlay);
    }

    private getPayload() {
        return this.form.value;
    }

    private hydrateForm() {
        const value =  this.data.overlay || this.getDefaultValue();
        this.form.patchValue({...value});
    }

    private getDefaultValue() {
        const defaults = {
            position: 'top-left',
            message: this.i18n.t('Your message here'),
            label: this.i18n.t('Label'),
            btn_text: this.i18n.t('Button Text'),
            btn_link: 'https://google.com',
            colors: {},
        };
        const style = this.overlayCmp.getComputedStyle();
        Object.keys(this.colorControls()).forEach(key => {
            defaults.colors[key] = style.getPropertyValue('--' + key).trim();
        });
        return defaults;
    }

    public colorControls() {
        return (this.form.get('colors') as FormGroup).controls;
    }

    public colorViewName(name: string) {
        return name.replace(/-/g, ' ')
            .replace('bg', 'background')
            .replace('btn', 'button');
    }
}
