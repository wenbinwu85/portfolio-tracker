import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Color, NgxChartsModule, ScaleType } from "@swimlane/ngx-charts";
import { StockPriceColorsEnum } from "../../../model/colors.model";
import { DataService } from "../../../services/data.service";
import { HelperService } from "../../../services/helper.service";
import { ContainerCardComponent } from "../../container-card/container-card.component";
import { TvMarketQuotesWidgetComponent } from "../../tradingview/tv-market-quotes-widget/tv-market-quotes-widget.component";
import { TvMiniChartWidgetComponent } from "../../tradingview/tv-mini-chart-widget/tv-mini-chart-widget.component";
import { TvSymbolOverviewWidgetComponent } from "../../tradingview/tv-symbol-overview-widget/tv-symbol-overview-widget.component";
import { TvTickersWidgetComponent } from "../../tradingview/tv-tickers-widget/tv-tickers-widget.component";

@Component({
  selector: "portfolio-quotes",
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    NgxChartsModule,
    TvMarketQuotesWidgetComponent,
    TvMiniChartWidgetComponent,
    TvSymbolOverviewWidgetComponent,
    TvTickersWidgetComponent,
  ],
  templateUrl: "./portfolio-quotes.component.html",
  styleUrls: ["./portfolio-quotes.component.css"],
})
export class PortfolioQuotesComponent {
  @Input() showTickers = true;
  @Input({ required: true }) expandWidget!: boolean;
  priceChange = 0;
  prePostPriceChange = 0;
  prePostHourIcon: any;
  prePostHourText: any;
  priceChangeChartData: any = [];
  priceRangeChartData: any = [];
  betaChartData: any = [];
  stockNames: any = [];
  priceRangeColorScheme = { domain: ["steelblue", "skyblue"] } as Color;
  betaColorScheme = { domain: ["slategrey"] } as Color;
  scaleType = ScaleType;
  selectedChart = 1;
  prefix: any;
  toggleChecked = false;
  portfolioMarketValue = 0;
  chartConfigs = {
    preMarket: {
      text: "Pre Market",
      toggleText: "Pre Market Chart",
      priceChange: "preMarketChange",
      priceChangePercent: "preMarketChangePercent",
    },
    postMarket: {
      text: "Post Market",
      toggleText: "Post Market Chart",
      priceChange: "postMarketChange",
      priceChangePercent: "postMarketChangePercent",
    },
    regularMarket: {
      text: "Regular Market",
    },
  } as any;
  marketState: string = "";

  constructor(
    private dataService: DataService,
    private helper: HelperService
  ) {}

  ngOnInit() {
    this.marketState = this.dataService.marketState;
    this.prefix = this.helper.getPriceKeyPrefix();
    this.portfolioMarketValue = this.dataService.portfolioHoldings.marketValue;
    this.prePostHourIcon = this.prefix.startsWith("pre") ? "sunny" : "bedtime";
    this.prePostHourText = this.prefix.startsWith("pre")
      ? "Pre Market "
      : "Post Market ";

    this.dataService.portfolioSymbols.forEach((symbol: any) => {
      const position = this.dataService.portfolioHoldings[symbol];
      const stock = this.dataService.portfolioData[symbol];
      this.stockNames.push({
        name: stock.symbol,
        displayName: `${stock.longName} - ${
          stock.profile.sector || stock.quoteType
        } - ${stock.symbol}`,
      });

      this.priceChange += stock.regularMarketChange.raw * position.shares;
      this.priceChangeChartData.push({
        name: stock.symbol,
        value: stock.regularMarketChangePercent.raw * 100,
      });
      this.priceChangeChartData.sort((a: any, b: any) => a.value - b.value);
      this.priceRangeChartData.push({
        name: stock.symbol,
        series: [
          {
            name: `Price -> Day Low Range`,
            value: stock.regularMarketPrice.raw - stock.regularMarketDayLow.raw,
          },
          {
            name: `Price -> Day High Range`,
            value:
              stock.regularMarketDayHigh.raw - stock.regularMarketPrice.raw,
          },
        ],
      });
      this.priceRangeChartData.sort(
        (a: any, b: any) =>
          a.series[0].value +
          a.series[1].value -
          (b.series[0].value + b.series[1].value)
      );

      if (!this.prefix.startsWith("regular")) {
        const key = this.chartConfigs[this.prefix].priceChange;
        if (stock[key]) {
          this.prePostPriceChange += stock[key].raw * position.shares;
        }
      }

      if (stock.quoteType === "EQUITY" && stock.beta.raw) {
        this.betaChartData.push({
          name: stock.symbol,
          value: stock.beta.raw || 0,
        });
      }
    });

    this.stockNames.sort((a: any, b: any) => {
      const val1 =
        this.dataService.portfolioData[a.name].regularMarketChangePercent.raw;
      const val2 =
        this.dataService.portfolioData[b.name].regularMarketChangePercent.raw;
      return val1 - val2;
    });

    this.betaChartData.sort((a: any, b: any) => a.value - b.value);
  }

  getDayPriceChangeColor() {
    return this.priceChange > 0
      ? StockPriceColorsEnum.Gain
      : StockPriceColorsEnum.Lost;
  }

  getPrePostPriceChangeColor() {
    return this.prePostPriceChange > 0
      ? StockPriceColorsEnum.Gain
      : StockPriceColorsEnum.Lost;
  }

  getPriceChangeChartColor = (symbol: any) => {
    const key = this.toggleChecked
      ? this.chartConfigs[this.prefix]?.priceChangePercent
      : "regularMarketChangePercent";
    const stock = this.dataService.portfolioData[symbol];
    return stock[key].raw > 0
      ? StockPriceColorsEnum.Gain
      : StockPriceColorsEnum.Lost;
  };

  displayChart(chartID: number) {
    this.selectedChart = chartID;
  }

  changeChart() {
    this.toggleChecked = !this.toggleChecked;
    const prefixKey = this.toggleChecked
      ? this.prefix + "ChangePercent"
      : "regularMarketChangePercent";
    this.priceChangeChartData = [];

    this.dataService.portfolioSymbols?.forEach((symbol: any) => {
      const stock = this.dataService.portfolioData[symbol];
      if (stock[prefixKey].raw) {
        this.priceChangeChartData.push({
          name: stock.symbol,
          value: stock[prefixKey].raw * 100,
        });
      }
    });
    this.priceChangeChartData.sort((a: any, b: any) => a.value - b.value);
  }
}
