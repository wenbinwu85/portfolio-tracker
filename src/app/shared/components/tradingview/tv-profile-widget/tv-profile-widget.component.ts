import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-profile-widget',
  template: '<div #profileWidget></div>',
  styles: [],
  standalone: true,
})
export class TvProfileWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() width!: string;
  @Input() height!: string;
  @ViewChild('profileWidget') profileWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const profile = this.tradingviewService.symbolProfileWidget(
      this.symbol,
      this.width,
      this.height
    );
    this.tradingviewService.renderWidget(this.profileWidget, profile);
  }
}
