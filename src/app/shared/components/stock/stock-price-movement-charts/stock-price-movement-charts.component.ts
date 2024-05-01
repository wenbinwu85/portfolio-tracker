import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { Color, NgxChartsModule, ScaleType } from "@swimlane/ngx-charts";
import { DataService } from "../../../services/data.service";
import { TvMiniChartWidgetComponent } from "../../tradingview/tv-mini-chart-widget/tv-mini-chart-widget.component";
import { TvTickersWidgetComponent } from "../../tradingview/tv-tickers-widget/tv-tickers-widget.component";
import { TvMarketQuotesWidgetComponent } from "../../tradingview/tv-market-quotes-widget/tv-market-quotes-widget.component";
import { HelperService } from "../../../services/helper.service";

@Component({
  selector: 'stock-price-movement-charts',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    NgxChartsModule,
    TvMiniChartWidgetComponent,
    TvTickersWidgetComponent,
    TvMarketQuotesWidgetComponent
  ],
  templateUrl: './stock-price-movement-charts.component.html',
  styleUrls: ['./stock-price-movement-charts.component.css'],
})
export class StockPriceMovementChartsComponent {
  @Input() showTickers = true;
  portfolioData: any;
  portfolioHoldings: any;
  priceChange = 0;
  prePostMarketPriceChange = 0;
  prePostHourIcon: any;
  prePostHourText: any;
  priceChangeChartData: any = [];
  priceRangeChartData: any = [];
  betaChartData: any = [];
  stockNames: any = [];
  priceRangeColorScheme = { domain: ["steelblue", "skyblue"] } as Color;
  betaColorScheme = { domain: ["palevioletred"] } as Color;
  scaleType = ScaleType;
  selectedChart = 1;

  constructor(private dataService: DataService, private helper: HelperService) {}

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;

    this.dataService.portfolioSymbols?.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stock = this.portfolioData[symbol];
      this.stockNames.push({
        name: stock.symbol,
        displayName: `${stock.longName} - ${stock.symbol} `
      });

      this.priceChange += stock.regularMarketChange * position.sharesOwned;
      const prefix = this.helper.getPriceKeyPrefix();
      if (!prefix.startsWith('regular')) { 
        this.prePostMarketPriceChange += stock[prefix + 'Change'] * position.sharesOwned;
        this.prePostHourIcon = prefix.startsWith('pre') ? 'light_mode' : 'dark_mode';
        this.prePostHourText = prefix.startsWith('pre') ? 'Pre Market ' : 'Post Market ';
      }

      this.priceChangeChartData.push({
        name: stock.symbol,
        value: stock.regularMarketChangePercent * 100 || 0,
      });

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

      if (stock.quoteType === "EQUITY") {
        this.betaChartData.push({
          name: stock.symbol,
          value: stock.beta || 0,
        });
      }
    });
    this.stockNames.sort((a: any, b: any) => {
      const val1 = this.portfolioData[a.name].regularMarketChangePercent;
      const val2 = this.portfolioData[b.name].regularMarketChangePercent;
      return val1 - val2;
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

  getDayPriceChangeColor() {
    return this.priceChange > 0 ? "teal" : "chocolate";
  }

  getPrePostPriceChangeColor() {
    return this.prePostMarketPriceChange > 0 ? "teal" : "chocolate";
  } 

  getPriceChangeChartColor = (symbol: any) => {
    const stock = this.portfolioData[symbol];
    const price = stock.regularMarketChangePercent;
    return price > 0 ? "teal" : "chocolate";
  };

  displayChart(chartID: number) {
    this.selectedChart = chartID;
  }
}
