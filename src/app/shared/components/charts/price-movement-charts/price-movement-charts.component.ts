import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { NgxChartsModule, ScaleType, Color } from '@swimlane/ngx-charts';
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
  scaleType = ScaleType;

  priceRangeColorScheme = { domain: ['salmon', 'lightgreen'] } as Color

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;

    this.dataService.portfolioSymbols.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stock = this.portfolioData[symbol];
      if (stock.preMarketChange) {
        this.priceChange += stock.preMarketChange * position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.symbol,
          value: stock.preMarketChangePercent * 100 || 0,
        });
      }
      if (stock.postMarketChange) {
        this.priceChange += stock.postMarketChange * position.sharesOwned;
        this.priceChangeChartData.push({
          name: stock.symbol,
          value: stock.postMarketChangePercent * 100 || 0,
        });
      } else {
        this.priceChange +=
          stock.regularMarketChange * position.sharesOwned;
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
      (a: any, b: any) => a.series[0].value + a.series[1].value - (b.series[0].value + b.series[1].value)
    );
    this.betaChartData.sort((a: any, b: any) => a.value - b.value);
  }

  getDayPriceChangeColor() {
    return this.priceChange > 0 ? 'forestgreen' : 'tomato';
  }

  getPriceChangeChartColor = (symbol: any) => {
    const stock = this.portfolioData[symbol]
    const price = stock.postMarketChangePercent
      || stock.regularMarketChangePercent
      || stock.preMarketChangePercent
    return price > 0 ? 'lightgreen' : 'salmon'
  };

  displayChart(chartID: number) {
    this.selectedChart = chartID;
  }
}
