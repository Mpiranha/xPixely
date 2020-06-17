import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Bootstrapper} from '@common/core/bootstrapper.service';
import {Link} from '../../link/link';
import {BehaviorSubject} from 'rxjs';
import {MetaTag, MetaTagsService} from '@common/core/meta/meta-tags.service';

interface LinkResponse {
    link: Link;
    seo: MetaTag[];
}

@Component({
    selector: 'link-preview-host',
    templateUrl: './link-preview-host.component.html',
    styleUrls: ['./link-preview-host.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkPreviewHostComponent implements OnInit {
    public link$ = new BehaviorSubject<Link>(null);
    public passwordConfirmed$ = new BehaviorSubject<boolean>(false);

    constructor(
        private bootstrapper: Bootstrapper,
        private metaTags: MetaTagsService,
    ) {}

    ngOnInit() {
        if (this.bootstrapper.data.linkResponse) {
            const {link, seo} = this.bootstrapper.data.linkResponse as LinkResponse;
            this.link$.next(link);
            this.metaTags.latestMetaTags$.next(seo);
        }
    }

    public hidePasswordPanel() {
        if (this.link$.value.type === 'direct') {
            window.location.replace(this.link$.value.long_url);
        } else {
            this.passwordConfirmed$.next(true);
        }
    }
}
