import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import {LinkOverlay} from '../../dashboard/link-overlay/link-overlay';

@Component({
    selector: 'link-overlay',
    templateUrl: './link-overlay.component.html',
    styleUrls: ['./link-overlay.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkOverlayComponent implements OnChanges {
    @Input() overlay: LinkOverlay;

    constructor(private el: ElementRef<HTMLElement>) {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.overlay) {
            this.updateColors();

            if (this.overlay.position) {
                this.el.nativeElement.classList.add(this.overlay.position);
            }
        }
    }

    public getComputedStyle() {
        return getComputedStyle(this.el.nativeElement);
    }

    private updateColors() {
        Object.keys(this.overlay.colors).forEach(key => {
            this.el.nativeElement.style.setProperty(
                '--' + key,
                this.overlay.colors[key],
            );
        });
    }
}
