import {Injectable} from '@angular/core';
import {AppHttpClient} from '@common/core/http/app-http-client.service';
import {BackendResponse} from '@common/core/types/backend-response';
import {LinkGroup} from './link-group';
import {LinkReportRange, LinkStats} from './link.service';
import {PaginationResponse} from '@common/core/types/pagination/pagination-response';
import {Link} from './link';

const BASE_URI = 'link-group';

export interface GetLinkGroupResponse {
    group: LinkGroup;
    links: PaginationResponse<Link>,
    reports: LinkStats;
}

@Injectable({
    providedIn: 'root'
})
export class LinkGroupService {
    constructor(private http: AppHttpClient) {
    }

    public get(id: number, params: {range?: LinkReportRange, reportsOnly?: boolean} = {}): BackendResponse<GetLinkGroupResponse> {
        return this.http.get(`${BASE_URI}/${id}`, params);
    }

    public create(params: Partial<LinkGroup>): BackendResponse<{ group: LinkGroup }> {
        return this.http.post(BASE_URI, params);
    }

    public update(id, params: Partial<LinkGroup>): BackendResponse<{ group: LinkGroup }> {
        return this.http.put(`${BASE_URI}/${id}`, params);
    }

    public delete(ids: number[]): BackendResponse<void> {
        return this.http.delete(`${BASE_URI}/${ids}`);
    }

    public detach(groupId: number, linkIds: number[]) {
        return this.http.post(`${BASE_URI}/${groupId}/detach`, {linkIds});
    }

    public attach(groupId: number, linkIds: number[]) {
        return this.http.post(`${BASE_URI}/${groupId}/attach`, {linkIds});
    }
}
