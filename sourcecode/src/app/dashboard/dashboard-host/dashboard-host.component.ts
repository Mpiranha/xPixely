import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BreakpointsService} from '@common/core/ui/breakpoints.service';
import {filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {ValueLists} from '@common/core/services/value-lists.service';

@Component({
    selector: 'dashboard-host',
    templateUrl: './dashboard-host.component.html',
    styleUrls: ['./dashboard-host.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ValueLists],
})
export class DashboardHostComponent implements OnInit {
    public leftColumnIsHidden = false;

    constructor(
        private router: Router,
        public breakpoints: BreakpointsService,
    ) {}

    ngOnInit() {
        this.leftColumnIsHidden = this.breakpoints.isMobile$.value;

        // close left column when navigating between dashboard pages on mobile
        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe(() => {
                this.leftColumnIsHidden = this.breakpoints.isMobile$.value;
            });
    }

    public toggleLeftSidebar() {
        this.leftColumnIsHidden = !this.leftColumnIsHidden;
    }
}
