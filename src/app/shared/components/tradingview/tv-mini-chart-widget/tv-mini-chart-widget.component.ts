import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { TradingviewService } from 'src/app/shared/services/tradingview.service';

@Component({
  selector: 'tv-mini-chart-widget',
  template: '<div #miniChartWidget></div>',
  styles: [],
  standalone: true,
})
export class TvMiniChartWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() theme?: string;
  @Input() width?: string;
  @ViewChild('miniChartWidget') miniChartWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const miniChart = this.tradingviewService.miniChartWidget(
      this.symbol,
      this.theme,
      this.width,
    );
    this.tradingviewService.renderWidget(this.miniChartWidget, miniChart);
  }
}
