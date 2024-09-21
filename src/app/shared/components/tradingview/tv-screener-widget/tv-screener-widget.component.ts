import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-screener-widget',
  standalone: true,
  imports: [],
  template: '<div #screenerWidget></div>',
})
export class TvScreenerWidgetComponent implements AfterViewInit {
  @ViewChild('screenerWidget') screenerWidget!: ElementRef;
  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      defaultColumn: "performance",
      defaultScreen: "oversold",
      market: "america",
      showToolbar: true,
      width: '100%',
      height: '800',
      colorTheme: 'light',
      isTransparent: false,
      locale: "en"
    }
    this.params = JSON.stringify(this.params)
    const widget = this.tradingviewService.screenerWidget(this.params);
    this.screenerWidget.nativeElement.appendChild(widget);
  }
}
