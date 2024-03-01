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

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const miniChart = this.tradingviewService.miniChartWidget(
      this.symbol,
      this.width,
      this.height,
      this.range,
      this.theme,
    );
    this.miniChartWidget.nativeElement.appendChild(miniChart);
  }
}
