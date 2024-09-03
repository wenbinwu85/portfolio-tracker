import { Component, ElementRef, ViewChild } from "@angular/core";
import { TradingviewService } from "../../../services/tradingview.service";

@Component({
  selector: "tv-heatmap-widget",
  standalone: true,
  template: "<div #marketQuotesWidget></div>",
  styles: [],
})
export class TvHeatmapWidgetComponent {
  @ViewChild("marketQuotesWidget") marketQuotesWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      exchanges: [],
      dataSource: "SPX500",
      grouping: "sector",
      blockSize: "market_cap_basic",
      blockColor: "change",
      locale: "en",
      symbolUrl: "",
      colorTheme: "light",
      hasTopBar: true,
      isDataSetEnabled: true,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      width: "100%",
      height: "800",
    };
    this.params = JSON.stringify(this.params);
    const widget = this.tradingviewService.heatMapWidget(this.params);
    this.marketQuotesWidget.nativeElement.append(widget);
  }
}
