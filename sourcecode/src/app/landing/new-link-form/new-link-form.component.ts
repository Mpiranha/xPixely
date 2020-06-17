import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {LinkService} from '../../shared/link/link.service';
import {BehaviorSubject} from 'rxjs';
import {Link} from '../../shared/link/link';
import copy from 'copy-to-clipboard';
import {Toast} from '@common/core/ui/toast.service';
import {Messages} from '../../messages.enum';
import {finalize} from 'rxjs/operators';
import {HomepageContent} from '../homepage-content';
import {Settings} from '@common/core/config/settings.service';
import {RecaptchaService} from '@common/core/services/recaptcha.service';

@Component({
    selector: 'new-link-form',
    templateUrl: './new-link-form.component.html',
    styleUrls: ['./new-link-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewLinkFormComponent implements AfterViewInit {
    @ViewChild('input', {static: true}) input: ElementRef<HTMLInputElement>;
    @Input() content: HomepageContent;
    public newLinkControl = new FormControl();
    public activeLink$ = new BehaviorSubject<Link>(null);
    public loading$ = new BehaviorSubject<boolean>(false);

    constructor(
        private link: LinkService,
        private toast: Toast,
        private settings: Settings,
        private recaptcha: RecaptchaService,
    ) {}

    ngAfterViewInit() {
        this.recaptcha.loadIfEnableFor('link_creation');
    }

    public submit() {
        if (this.activeLink$.value) {
            this.copyLink();
        } else {
            this.createLink();
        }
    }

    private copyLink() {
        const success = copy(this.activeLink$.value.short_url);
        if (success) {
            this.toast.open(Messages.LINK_COPY_SUCCESS);
            this.activeLink$.next(null);
            this.newLinkControl.reset();
        }
    }

    private async createLink() {
        this.loading$.next(true);

        if ( ! await this.recaptcha.verify('link_creation')) {
            return this.loading$.next(false);
        }

        const payload = {
            type: this.settings.get('links.default_type', 'direct'),
            long_url: this.newLinkControl.value,
        };
        this.link.create(payload)
            .pipe(finalize(() => this.loading$.next(false)))
            .subscribe(response => {
                const newLink = (response as {link: Link}).link;
                this.activeLink$.next(newLink);
                this.newLinkControl.setValue(newLink.short_url);
                this.input.nativeElement.select();
                this.toast.open(Messages.LINK_SHORTEN_SUCCESS);
            }, () => {
                this.toast.open(Messages.LINK_SHORTEN_FAIL);
            });
    }
}
