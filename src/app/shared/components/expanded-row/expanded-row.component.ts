import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { WallmineChartComponent } from "../charts/wallmine-chart/wallmine-chart.component";
import { StockRecommendationTrendsComponent } from "../stock/stock-recommendation-trends/stock-recommendation-trends.component";
import { TvFinancialsWidgetComponent } from "../tradingview/tv-financials-widget/tv-financials-widget.component";
import { TvProfileWidgetComponent } from "../tradingview/tv-profile-widget/tv-profile-widget.component";
import { TvSymbolInfoWidgetComponent } from "../tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { TvTechnicalAnalysisWidgetComponent } from "../tradingview/tv-technical-analysis-widget/tv-technical-analysis-widget.component";

@Component({
  selector: "expanded-row",
  templateUrl: "./expanded-row.component.html",
  styleUrls: ["./expanded-row.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    StockRecommendationTrendsComponent,
    TvFinancialsWidgetComponent,
    TvProfileWidgetComponent,
    TvSymbolInfoWidgetComponent,
    TvTechnicalAnalysisWidgetComponent,
    WallmineChartComponent,
  ],
})
export class ExpandedRowComponent {
  @Input({ required: true }) stock!: any;
}
