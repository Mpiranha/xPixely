import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {LinkReportRange, LinkService, LinkStats} from '../../shared/link/link.service';
import {FormControl} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {ChartType, LineChartConfig, PieChartConfig} from '@common/shared/charts/base-chart';
import {LazyLoaderService} from '@common/core/utils/lazy-loader.service';
import {Link} from '../../shared/link/link';
import {BackendResponse} from '@common/core/types/backend-response';
import {ucFirst} from '@common/core/utils/uc-first';
import {LinkGroup} from '../../shared/link/link-group';
import {LinkGroupService} from '../../shared/link/link-group.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ThemeService} from '@common/core/theme.service';
import {Settings} from '@common/core/config/settings.service';
import {EXPANSION_PANEL_ANIMATION_TIMING} from '@angular/material/expansion';
import {Translations} from '@common/core/translations/translations.service';

interface ChartReports {
    totalClicks: number;
    clicks: LineChartConfig;
    browsers: PieChartConfig;
    devices: PieChartConfig;
    platforms: PieChartConfig;
    locations: { label: string, code: string, percentage: number, count: number }[];
    referrers: { label: string, count: number }[];
}

@Component({
    selector: 'click-charts',
    templateUrl: './click-charts.component.html',
    styleUrls: ['./click-charts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('bodyExpansion', [
            state('collapsed, void', style({height: '425px'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed, void => collapsed',
                animate(EXPANSION_PANEL_ANIMATION_TIMING)),
        ])
    ]
})
export class ClickChartsComponent implements OnInit, OnChanges {
    @Input() reports: LinkStats;
    @Input() link: Link | null;
    @Input() group: LinkGroup | null;
    @Input() @HostBinding('@bodyExpansion') state: 'collapsed'|'expanded' = 'expanded';
    @ViewChild('countryChartPlaceholder') iframe: ElementRef<HTMLDivElement>;
    public transformedReports$ = new BehaviorSubject<ChartReports>(null);
    public loading$ = new BehaviorSubject(false);
    public range = new FormControl('weekly');
    private googleChart;

    constructor(
        private linkApi: LinkService,
        private linkGroup: LinkGroupService,
        private loader: LazyLoaderService,
        private theme: ThemeService,
        private settings: Settings,
        private i18n: Translations,
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.reports && changes.reports.currentValue) {
            this.updateCharts(changes.reports.currentValue);
            this.initGoogleWorldMap();
        }
    }

    public ngOnInit() {
        this.range.valueChanges.subscribe(range => {
            this.loading$.next(true);
            this.getUpdateDataRequest(range)
                .pipe(finalize(() => this.loading$.next(false)))
                .subscribe(response => {
                    this.updateCharts(response.reports);
                    this.drawGoogleChart();
                });
        });

        // update google chart colors on dark/light mode toggle
        this.theme.selectedTheme$.subscribe(() => {
            if (this.googleChart) {
                this.drawGoogleChart();
            }
        });
    }

    public getRangeName() {
        // weekly => Week
        return ucFirst(this.range.value.replace('ly', ''));
    }

    private getUpdateDataRequest(range: LinkReportRange): BackendResponse<{ reports: LinkStats }> {
        if (this.link) {
            return this.linkApi.get(this.link.id, {range});
        } else if (this.group) {
            return this.linkGroup.get(this.group.id, {range, reportsOnly: true});
        } else {
            return this.linkApi.getCurrentUserReports({range});
        }
    }

    private updateCharts(data: LinkStats) {
        const reports = {
            ...data,
            browsers: this.transformData(data.browsers, ChartType.PIE) as PieChartConfig,
            platforms: this.transformData(data.platforms, ChartType.PIE) as PieChartConfig,
            devices: this.transformData(data.devices, ChartType.PIE, true) as PieChartConfig,
            clicks: this.transformData(data.clicks, ChartType.LINE) as LineChartConfig,
        };
        this.transformedReports$.next(reports);
    }

    private transformData(data: { label: string, count: number }[], type: ChartType = ChartType.LINE, translateLabel = false) {
        return {
            type: type,
            labels: data.map(v => translateLabel ? this.i18n.t(v.label) : v.label),
            data: type === ChartType.LINE ? [data.map(v => v.count)] : data.map(v => v.count),
            legend: type === ChartType.PIE,
            tooltip: this.i18n.t('Click Count'),
        };
    }

    private initGoogleWorldMap() {
        this.loader.loadAsset('https://www.gstatic.com/charts/loader.js', {type: 'js'}).then(() => {
            const google = window['google'] as any;
            google.charts.load('current', {
                packages: ['geochart'],
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey: this.settings.get('links.gchart_api_key'),
            });
            google.charts.setOnLoadCallback(() => {
                this.drawGoogleChart();
            });
        });
    }

    private drawGoogleChart() {
        const google = window['google'] as any;
        let data = this.reports.locations.map(location => {
            return [location.label, location.count];
        });
        data.unshift(['Country', 'Popularity']);
        data = google.visualization.arrayToDataTable(data);

        const options = {
            colorAxis: {colors: ['#4662fa']},
            backgroundColor: this.theme.selectedTheme$.value.is_dark ? '#1D1D1D' : null,
            datalessRegionColor: this.theme.selectedTheme$.value.is_dark ? '#e9ecfe' : null,
        };

        if ( ! this.googleChart) {
            this.googleChart = new google.visualization.GeoChart(this.iframe.nativeElement);
        }
        this.googleChart.draw(data, options);
    }
}
