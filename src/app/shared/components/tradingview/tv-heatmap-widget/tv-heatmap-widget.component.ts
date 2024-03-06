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

  constructor(private tradingviewService: TradingviewService) { }
  
  ngAfterViewInit(): void {
    const script = this.tradingviewService.heatMapWidget();
    this.marketQuotesWidget.nativeElement.append(script);
  }
}
