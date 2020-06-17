import {Injectable} from '@angular/core';
import {AppHttpClient} from '@common/core/http/app-http-client.service';
import {PaginatedBackendResponse} from '@common/core/types/pagination/paginated-backend-response';
import {BackendResponse} from '@common/core/types/backend-response';
import {TrackingPixel} from './tracking-pixel';

export const PIXEL_BASE_URI = 'tracking-pixel';

@Injectable({
    providedIn: 'root'
})
export class TrackingPixelService {
    constructor(private http: AppHttpClient) {
    }

    public index(params: { userId?: number, query?: string } = {}): PaginatedBackendResponse<TrackingPixel> {
        return this.http.get(`${PIXEL_BASE_URI}`, params);
    }

    public create(params: Partial<TrackingPixel>): BackendResponse<{ pixel: TrackingPixel }> {
        return this.http.post(PIXEL_BASE_URI, params);
    }

    public update(id, params: Partial<TrackingPixel>): BackendResponse<{ pixel: TrackingPixel }> {
        return this.http.put(`${PIXEL_BASE_URI}/${id}`, params);
    }

    public delete(ids: number[]): BackendResponse<void> {
        return this.http.delete(`${PIXEL_BASE_URI}/${ids}`);
    }
}
