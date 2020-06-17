import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LinkStats} from '../../shared/link/link.service';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHomeComponent implements OnInit {
    public reports$ = new BehaviorSubject<LinkStats>(null);

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: {reports: LinkStats}) => {
            this.reports$.next(data.reports);
        });
    }

}
