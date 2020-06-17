import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AppHttpClient} from '@common/core/http/app-http-client.service';
import {GenericBackendResponse} from '@common/core/types/backend-response';

export interface LinkUsage {
    links: {
        used: number,
        total: number | null,
    };
    clicks: {
        used: number,
        total: number | null,
    };
    link_overlays: {
        used: number,
        total: number | null,
    };
    custom_pages: {
        used: number,
        total: number | null,
    };
    custom_domains: {
        used: number,
        total: number | null,
    };
    link_groups: {
        used: number,
        total: number | null,
    };
    tracking_pixels: {
        used: number,
        total: number | null,
    };
}

@Injectable({
    providedIn: 'root'
})
export class LinkUsageService {
    public usage$ = new BehaviorSubject<LinkUsage>(null);

    constructor(private http: AppHttpClient) {}

    public reload() {
        this.http.get<GenericBackendResponse<{usage: LinkUsage}>>('link/usage').subscribe(response => {
            this.usage$.next(response.usage);
        });
    }

    public overClickQuota(): boolean {
        if (!this.usage$.value || !this.usage$.value.clicks) {
            return false;
        }
        return this.usage$.value.clicks.total <= this.usage$.value.clicks.used;
    }
}
