import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'stock-recommendation-trends',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './stock-recommendation-trends.component.html',
  styleUrl: './stock-recommendation-trends.component.css'
})
export class StockRecommendationTrendsComponent implements OnInit, OnChanges {
  @Input({ required: true }) symbol: string = 'AAPL';
  @Input() height?: number;
  stockData: any;
  recommendationTrends: any;
  recommendationTrendChartData: any;
  recommendationTrendChartColorScheme = {
    domain: ["teal", "seagreen", "gold", "tomato", "chocolate"],
  } as Color;
  scaleType = ScaleType;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.updateRecommendationTrends();
  }

  ngOnChanges() { 
    this.updateRecommendationTrends();
  }

  updateRecommendationTrends() {
    const portfolioData = this.dataService.portfolioData;
    this.stockData = Object.values(portfolioData).filter((stock: any) => stock.symbol === this.symbol)[0];
    this.recommendationTrends = this.stockData.recommendationTrend;
    this.recommendationTrendChartData = [];
    this.recommendationTrends.forEach((period: any) => {
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

  getMonthName(period: string) {
    const monthMap: any = {
      '0m': 0,
      '-1m': 1,
      '-2m': 2,
      '-3m': 3,
    };
    const monthDelta = monthMap[period];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth - monthDelta);
    return currentDate.toLocaleString('default', { month: 'short' });
  }
}
