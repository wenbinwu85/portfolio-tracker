import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataService } from '../../../services/data.service';
import { TvMiniChartWidgetComponent } from '../../../components/tradingview/tv-market-quotes-widget/tv-mini-chart-widget/tv-mini-chart-widget.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'price-movement-charts',
  standalone: true,
  imports: [
    CommonModule,
    NgxChartsModule,
    MatChipsModule,
    MatDividerModule,
    TvMiniChartWidgetComponent,
  ],
  templateUrl: './price-movement-charts.component.html',
  styleUrls: ['./price-movement-charts.component.css'],
  
})
export class PriceMovementChartsComponent {
  portfolioData: any = [];
  priceChangeChartData: any = [];
  priceChange = 0;
  priceRangeChartData: any = [];
  betaChartData: any = [];
  selectedChart = 1;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.portfolioData = this.dataService.portfolioData;

    let stocks = Object.values(this.portfolioData).filter(
      (value: any) => value.position !== undefined
    );

    stocks.forEach((stock: any) => {
      if (stock.preMarketChange) {
        this.priceChange += stock.preMarketChange * stock.position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.symbol,
          value: stock.preMarketChangePercent * 100 || 0,
        });
      } else if (stock.postMarketChange) {
        this.priceChange += stock.postMarketChange * stock.position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.symbol,
          value: stock.postMarketChangePercent * 100 || 0,
        });
      } else {
        this.priceChange +=
          stock.regularMarketChange * stock.position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.symbol,
          value: stock.regularMarketChangePercent * 100 || 0,
        });
      }

      this.priceRangeChartData.push({
        name: stock.symbol,
        series: [
          {
            name: `Low Range`,
            value: stock.regularMarketPrice - stock.regularMarketDayLow,
          },
          {
            name: `High Range`,
            value: stock.regularMarketDayHigh - stock.regularMarketPrice,
          },
        ],
      });

      if (stock.quoteType === 'EQUITY') {
        this.betaChartData.push({
          name: stock.symbol,
          value: stock.beta || 0,
        });
      }
    });
    this.priceChangeChartData.sort((a: any, b: any) => a.value - b.value);
    this.priceRangeChartData.sort(
      (a: any, b: any) =>
        a.series[0].value +
        a.series[1].value -
        (b.series[0].value + b.series[1].value)
    );
    this.betaChartData.sort((a: any, b: any) => a.value - b.value);
  }

  getPriceChangeColor() {
    return this.priceChange > 0 ? 'forestgreen' : 'tomato';
  }

  displayChart(chartID: number) {
    this.selectedChart = chartID;
  }
}
