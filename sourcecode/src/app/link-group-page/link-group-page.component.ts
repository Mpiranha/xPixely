import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Settings} from '@common/core/config/settings.service';
import {ActivatedRoute} from '@angular/router';
import {GetLinkGroupResponse} from '../shared/link/link-group.service';
import {getFaviconFromUrl} from '@common/core/utils/get-favicon-from-url';

@Component({
    selector: 'link-group-page',
    templateUrl: './link-group-page.component.html',
    styleUrls: ['./link-group-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkGroupPageComponent implements OnInit {
    public linkGroupResponse: GetLinkGroupResponse;

    constructor(
        public settings: Settings,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.data.subscribe(data => {
            this.linkGroupResponse = data.linkGroupResponse;
        });
    }

    public favicon(url: string) {
        return getFaviconFromUrl(url);
    }

    public removeProtocol(url: string) {
        return url.replace(/(^\w+:|^)\/\//, '');
    }
}
