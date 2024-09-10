import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { StockEarningsChartComponent } from "../portfolio/stock-earnings-chart/stock-earnings-chart.component";
import { StockRecommendationTrendsComponent } from "../portfolio/stock-recommendation-trends/stock-recommendation-trends.component";
import { TvFinancialsWidgetComponent } from "../tradingview/tv-financials-widget/tv-financials-widget.component";
import { TvProfileWidgetComponent } from "../tradingview/tv-profile-widget/tv-profile-widget.component";
import { TvSymbolInfoWidgetComponent } from "../tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { TvSymbolOverviewWidgetComponent } from "../tradingview/tv-symbol-overview-widget/tv-symbol-overview-widget.component";
import { TvTechnicalAnalysisWidgetComponent } from "../tradingview/tv-technical-analysis-widget/tv-technical-analysis-widget.component";

@Component({
  selector: "expanded-row",
  templateUrl: "./expanded-row.component.html",
  styleUrls: ["./expanded-row.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    StockEarningsChartComponent,
    StockRecommendationTrendsComponent,
    TvFinancialsWidgetComponent,
    TvProfileWidgetComponent,
    TvSymbolInfoWidgetComponent,
    TvSymbolOverviewWidgetComponent,
    TvTechnicalAnalysisWidgetComponent,
  ],
})
export class ExpandedRowComponent {
  @Input({ required: true }) stock!: any;
}
