import {Injectable} from '@angular/core';
import {AppHttpClient} from '@common/core/http/app-http-client.service';
import {PaginatedBackendResponse} from '@common/core/types/pagination/paginated-backend-response';
import {BackendResponse} from '@common/core/types/backend-response';
import {LinkOverlay} from './link-overlay';

const BASE_URI = 'link-overlay';

@Injectable({
    providedIn: 'root'
})
export class LinkOverlayService {
    constructor(private http: AppHttpClient) {
    }

    public index(params: { userId?: number, query?: string } = {}): PaginatedBackendResponse<LinkOverlay> {
        return this.http.get(`${BASE_URI}`, params);
    }

    public create(params: { host: string }): BackendResponse<{ linkOverlay: LinkOverlay }> {
        return this.http.post(BASE_URI, params);
    }

    public update(id, params: { host: string }): BackendResponse<{ linkOverlay: LinkOverlay }> {
        return this.http.put(`${BASE_URI}/${id}`, params);
    }

    public delete(ids: number[]): BackendResponse<void> {
        return this.http.delete(`${BASE_URI}/${ids}`);
    }
}
