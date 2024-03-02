import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { Color, NgxChartsModule, ScaleType } from "@swimlane/ngx-charts";
import { DataService } from "../../../services/data.service";
import { HelperService } from "../../../services/helper.service";
import { TvMiniChartWidgetComponent } from "../../tradingview/tv-mini-chart-widget/tv-mini-chart-widget.component";
import { TvTickersWidgetComponent } from "../../tradingview/tv-tickers-widget/tv-tickers-widget.component";

@Component({
  selector: "price-movement-charts",
  standalone: true,
  imports: [
    CommonModule,
    NgxChartsModule,
    MatChipsModule,
    MatDividerModule,
    TvMiniChartWidgetComponent,
    TvTickersWidgetComponent,
  ],
  templateUrl: "./price-movement-charts.component.html",
  styleUrls: ["./price-movement-charts.component.css"],
})
export class PriceMovementChartsComponent {
  @Input() showTickers = true;
  betaChartData: any = [];
  portfolioData: any;
  portfolioHoldings: any;
  priceChange = 0;
  priceChangeChartData: any = [];
  priceKeyPrefix = "";
  priceRangeChartData: any = [];
  priceRangeColorScheme = { domain: ["skyblue", "steelblue"] } as Color;
  betaColorScheme = { domain: ["palevioletred"] } as Color;
  scaleType = ScaleType;
  selectedChart = 1;
  winners = "";
  losers = "";

  constructor(
    private dataService: DataService,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;
    this.priceKeyPrefix = this.helperService.getPriceKeyPrefix();

    this.dataService.portfolioSymbols.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stock = this.portfolioData[symbol];
      this.priceChange +=
        stock[this.priceKeyPrefix + "Change"] * position.sharesOwned;
      this.priceChangeChartData.push({
        name: stock.symbol,
        value: stock[this.priceKeyPrefix + "ChangePercent"] * 100 || 0,
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
    this.priceChangeChartData.sort((a: any, b: any) => a.value - b.value);
    this.priceRangeChartData.sort(
      (a: any, b: any) =>
        a.series[0].value +
        a.series[1].value -
        (b.series[0].value + b.series[1].value)
    );
    this.betaChartData.sort((a: any, b: any) => a.value - b.value);

    let winnerStocks: any = [];
    [...this.priceChangeChartData]
      .reverse()
      .slice(0, 5)
      .forEach((s: any) => {
        winnerStocks.push({
          title: this.portfolioData[s.name].shortName,
          proName: s.name,
        });
      });
    this.winners = JSON.stringify(winnerStocks);

    let loserStocks: any = [];
    [...this.priceChangeChartData].slice(0, 5).forEach((s: any) => {
      loserStocks.push({
        title: this.portfolioData[s.name].shortName,
        proName: s.name,
      });
    });
    this.losers = JSON.stringify(loserStocks);
  }

  getDayPriceChangeColor() {
    return this.priceChange > 0 ? "seagreen" : "orangered";
  }

  getPriceChangeChartColor = (symbol: any) => {
    const stock = this.portfolioData[symbol];
    const price = stock[this.priceKeyPrefix + "ChangePercent"];
    return price > 0 ? "olivedrab" : "chocolate";
  };

  displayChart(chartID: number) {
    this.selectedChart = chartID;
  }
}
