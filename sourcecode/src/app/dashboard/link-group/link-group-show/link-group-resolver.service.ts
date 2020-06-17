import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {BackendResponse} from '@common/core/types/backend-response';
import {AppHttpClient} from '@common/core/http/app-http-client.service';
import {catchError, mergeMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {GetLinkGroupResponse, LinkGroupService} from '../../../shared/link/link-group.service';
import {CurrentUser} from '@common/auth/current-user';

@Injectable({
    providedIn: 'root'
})
export class LinkGroupResolverService implements Resolve<BackendResponse<GetLinkGroupResponse>> {
    constructor(
        private router: Router,
        private http: AppHttpClient,
        private linkGroup: LinkGroupService,
        private currentUser: CurrentUser,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BackendResponse<GetLinkGroupResponse> {
        const failRedirectUri = this.currentUser.hasPermission('link_groups.view') ? '/dashboard/link-groups' : '/',
            queryParams = {...route.queryParams};
        queryParams.skipStats = route.data.skipGroupStats;
        return this.linkGroup.get(route.params.groupId || route.params.slug, queryParams).pipe(
            catchError(() => {
                this.router.navigate([failRedirectUri]);
                return EMPTY;
            }),
            mergeMap(response => {
                if (response) {
                    return of(response);
                } else {
                    this.router.navigate([failRedirectUri]);
                    return EMPTY;
                }
            })
        );
    }
}

