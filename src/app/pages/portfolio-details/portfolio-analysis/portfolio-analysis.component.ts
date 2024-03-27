import { CommonModule, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Color, NgxChartsModule, ScaleType } from "@swimlane/ngx-charts";
import { StockTickerButtonsComponent } from "../../../shared/components/stock/stock-ticker-buttons/stock-ticker-buttons.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-analysis",
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    NgIf,
    NgxChartsModule,
    StockTickerButtonsComponent,
  ],
  templateUrl: "./portfolio-analysis.component.html",
  styleUrls: ["./portfolio-analysis.component.css"],
})
export class PortfolioAnalysisComponent implements OnInit {
  portfolioData: any;
  selectedStock: any;
  selectedRecommendationTrend: any;
  recommendationTrendChartData: any;
  recommendationTrendChartColorScheme = {
    domain: ["teal", "seagreen", "gold", "tomato", "chocolate"],
  } as Color;
  scaleType = ScaleType;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioData = Object.values(this.dataService.portfolioData);
    this.updateSelectedTicker("AAPL");
  }

  getMonthName(period: string) {
    const monthMap: any = { 
      '0m': 0,
      '-1m': 1,
      '-2m': 2,
      '-3m': 3,
    }
    const monthDelta = monthMap[period];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth - monthDelta);
    return currentDate.toLocaleString('default', {month: 'short'})
  }

  updateSelectedTicker(event: any) {
    this.selectedStock = this.portfolioData.filter(
      (stock: any) => stock.symbol === event
    )[0];
    this.selectedRecommendationTrend = this.selectedStock.recommendationTrend;
    this.recommendationTrendChartData = [];
    this.selectedRecommendationTrend.forEach((period: any) => {
      this.recommendationTrendChartData.push({
        name: this.getMonthName(period.period),
        series: [
          {
            name: "Strong Buy",
            value: period.strongBuy,
          },
          {
            name: "Buy",
            value: period.buy,
          },
          {
            name: "Hold",
            value: period.hold,
          },
          {
            name: "Sell",
            value: period.sell,
          },
          {
            name: "Strong Sell",
            value: period.strongSell,
          },
        ],
      });
    });
  }
}
