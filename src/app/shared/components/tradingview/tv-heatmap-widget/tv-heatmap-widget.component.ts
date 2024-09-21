import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { TradingviewService } from "../../../services/tradingview.service";

@Component({
  selector: "tv-heatmap-widget",
  standalone: true,
  template: "<div #marketQuotesWidget></div>",
  styles: [],
})
export class TvHeatmapWidgetComponent {
  @Input() type?: 'stock' | 'etf'| 'crypto' = 'stock';
  @ViewChild("marketQuotesWidget") marketQuotesWidget!: ElementRef;
  params: any;
  widget: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    if (this.type === 'stock') {
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
      this.widget = this.tradingviewService.heatMapWidget(this.params);
    }
    if (this.type === 'etf') { 
      this.params = {
        dataSource: "AllUSEtf",
        grouping: "sector",
        blockSize: "aum",
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
      this.widget = this.tradingviewService.etfHeatMapWidget(this.params);
    }
    if (this.type === 'crypto') { 
      this.params = {
        dataSource: "Crypto",
        blockSize: "market_cap_calc",
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
      this.widget = this.tradingviewService.cryptoHeatMapWidget(this.params);
    }
    this.marketQuotesWidget.nativeElement.append(this.widget);
  }
}
