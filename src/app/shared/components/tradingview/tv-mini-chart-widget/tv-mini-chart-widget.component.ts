import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-mini-chart-widget',
  template: '<div #miniChartWidget></div>',
  styles: [],
  standalone: true,
})
export class TvMiniChartWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() width = "100%";
  @Input() height = 200;
  @Input() range = "12M";
  @Input() theme = "light";
  @ViewChild('miniChartWidget') miniChartWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      symbol: this.symbol,
      dateRange: this.range,
      width: this.width,
      height: this.height,
      colorTheme: this.theme,
      autosize: true,
      trendLineColor: "rgba(41, 98, 255, 1)",
      underLineColor: "rgba(41, 98, 255, 0.3)",
      underLineBottomColor: "rgba(41, 98, 255, 0)",
      isTransparent: true,
      locale: "en"
    }
    this.params = JSON.stringify(this.params);
    const miniChart = this.tradingviewService.miniChartWidget(this.params);
    this.miniChartWidget.nativeElement.appendChild(miniChart);
  }
}
