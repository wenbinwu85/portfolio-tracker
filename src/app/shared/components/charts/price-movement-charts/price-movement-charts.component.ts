import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  TvMiniChartWidgetComponent,
} from '../../../components/tradingview/tv-market-quotes-widget/tv-mini-chart-widget/tv-mini-chart-widget.component';
import { DataService } from '../../../services/data.service';

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
  portfolioHoldings: any;
  portfolioData: any;
  priceChangeChartData: any = [];
  priceChange = 0;
  priceRangeChartData: any = [];
  betaChartData: any = [];
  selectedChart = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;


    this.dataService.portfolioSymbols.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stock = this.portfolioData[symbol];
      if (stock.price.preMarketChange) {
        this.priceChange += stock.price.preMarketChange * position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.price.symbol,
          value: stock.price.preMarketChangePercent * 100 || 0,
        });
      } else if (stock.price.postMarketChange) {
        this.priceChange += stock.price.postMarketChange * position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.price.symbol,
          value: stock.price.postMarketChangePercent * 100 || 0,
        });
      } else {
        this.priceChange +=
          stock.price.regularMarketChange * position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.price.symbol,
          value: stock.price.regularMarketChangePercent * 100 || 0,
        });
      }

      this.priceRangeChartData.push({
        name: stock.price.symbol,
        series: [
          {
            name: `Low Range`,
            value: stock.price.regularMarketPrice - stock.price.regularMarketDayLow,
          },
          {
            name: `High Range`,
            value: stock.price.regularMarketDayHigh - stock.price.regularMarketPrice,
          },
        ],
      });

      if (stock.price.quoteType === 'EQUITY') {
        this.betaChartData.push({
          name: stock.price.symbol,
          value: stock.defaultKeyStatistics.beta || 0,
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
