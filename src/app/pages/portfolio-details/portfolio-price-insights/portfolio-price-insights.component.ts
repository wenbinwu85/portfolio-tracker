import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { Color, NgxChartsModule, ScaleType } from "@swimlane/ngx-charts";
import { PriceMovementChartsComponent } from "../../../shared/components/charts/price-movement-charts/price-movement-charts.component";
import { StockDayPriceRangeComponent } from "../../../shared/components/stock/stock-day-price-range/stock-day-price-range.component";
import { TvSymbolInfoWidgetComponent } from "../../../shared/components/tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { DataService } from "../../../shared/services/data.service";
import { PortfolioChartsComponent } from "../../chart-wall/portfolio-charts/portfolio-charts.component";
import { PortfolioDividendComponent } from "../portfolio-dividend/portfolio-dividend.component";
import { PortfolioEventsComponent } from "../portfolio-events/portfolio-events.component";
import { PortfolioFinancialsComponent } from "../portfolio-financials/portfolio-financials.component";
import { PortfolioHoldingsComponent } from "../portfolio-holdings/portfolio-holdings.component";

@Component({
  selector: "portfolio-price-insights",
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    NgxChartsModule,
    PortfolioChartsComponent,
    PortfolioDividendComponent,
    PortfolioEventsComponent,
    PortfolioFinancialsComponent,
    PortfolioHoldingsComponent,
    PriceMovementChartsComponent,
    StockDayPriceRangeComponent,
    TvSymbolInfoWidgetComponent,
  ],
  templateUrl: "./portfolio-price-insights.component.html",
  styleUrls: ["./portfolio-price-insights.component.css"],
})
export class PortfolioPriceInsightsComponent implements OnInit {
  sortedStocks: any[] = [];
  sortedEtfs: any[] = [];
  fiftyTwoWeekChangeChartData: any = [];
  fiftyTwoWeekLowChartData: any = [];
  fiftyTwoWeekHighChartData: any = [];
  fiftyDayMAChartData: any = [];
  twoHundredDayMAChartData: any = [];
  discountChartData: any = [];
  displayTradingviewWidgets = false;
  sp500FiftyTwoWeekChange = 0;
  etfPerformanceChartData: any = [];
  sp500 = "S&P 500";
  activeSymbol = [{ name: this.sp500 }];
  customColor = [{ name: this.sp500, value: "orangered" }];
  selectedPerformanceChart = 1;
  selectedVSChart = 1;
  scaleType = ScaleType;
  selectedSymbol = "SCHD";

  performanceChartColorScheme = {
    domain: ["lightsteelblue"],
  } as Color;

  fiftyTwoWeekChartColorScheme = {
    domain: ["lightsteelblue"],
  } as Color;

  targetPriceChartColorScheme = {
    domain: ["lightsteelblue"],
  } as Color;

  tableColumns = [
    "symbol",
    "fiftyTwoWeekLow",
    "dayLow",
    "dayHigh",
    "fiftyTwoWeekHigh",
    "targetLowPrice",
    "targetMedianPrice",
    "targetHighPrice",
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sortedStocks = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "EQUITY")
      .sort((a: any, b: any) => a["52WeekChange"] - b["52WeekChange"]);
    this.sortedEtfs = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "ETF")
      .sort((a: any, b: any) => a["ytdReturn"] - b["ytdReturn"]);
    this.sp500FiftyTwoWeekChange = this.sortedStocks[0].SandP52WeekChange;

    this.sortedStocks.forEach((stock: any) => {
      this.fiftyTwoWeekChangeChartData.push({
        name: stock.symbol,
        value: stock["52WeekChange"] * 100,
      });
      this.fiftyTwoWeekLowChartData.push({
        name: stock.symbol,
        value:
          ((stock.regularMarketPrice - stock.fiftyTwoWeekLow) /
            stock.fiftyTwoWeekLow) *
          100,
      });
      this.fiftyTwoWeekHighChartData.push({
        name: stock.symbol,
        value:
          ((stock.regularMarketPrice - stock.fiftyTwoWeekHigh) /
            stock.fiftyTwoWeekHigh) *
          100,
      });
      this.discountChartData.push({
        name: stock.symbol,
        value:
          ((stock.regularMarketPrice - stock.targetMeanPrice) /
            stock.targetMeanPrice) *
          100,
      });
      this.fiftyDayMAChartData.push({
        name: stock.symbol,
        value:
          ((stock.regularMarketPrice - stock.fiftyDayAverage) /
            stock.fiftyDayAverage) *
          100,
      });
      this.twoHundredDayMAChartData.push({
        name: stock.symbol,
        value:
          ((stock.regularMarketPrice - stock.twoHundredDayAverage) /
            stock.twoHundredDayAverage) *
          100,
      });
    });
    this.fiftyTwoWeekChangeChartData.push({
      name: this.sp500,
      value: this.sortedStocks[0].SandP52WeekChange * 100,
    });
    this.fiftyTwoWeekChangeChartData.sort(
      (a: any, b: any) => a.value - b.value
    );
    this.fiftyDayMAChartData.sort((a: any, b: any) => a.value - b.value);
    this.twoHundredDayMAChartData.sort((a: any, b: any) => a.value - b.value);
    this.fiftyTwoWeekLowChartData.sort((a: any, b: any) => a.value - b.value);
    this.fiftyTwoWeekHighChartData.sort((a: any, b: any) => a.value - b.value);
    this.discountChartData.sort((a: any, b: any) => a.value - b.value);

    const keyLabelMapping: any = {
      ytd: "Year to Date",
      oneMonth: "One Month",
      threeMonth: "Three Month",
      oneYear: "One Year",
      threeYear: "Three Year",
      fiveYear: "Five Year",
      tenYear: "Ten Year",
    };
    Object.keys(keyLabelMapping).forEach((key: any) => {
      if (keyLabelMapping[key]) {
        let keyData: any = {
          name: keyLabelMapping[key],
          series: [],
        };
        this.sortedEtfs.forEach((etf: any) => {
          keyData.series.push({
            name: etf.symbol,
            value: etf.fundPerformance.trailingReturns[key] * 100,
          });
        });
        this.etfPerformanceChartData.push(keyData);
      }
    });
  }

  getSP500ChangeColor(stock: any) {
    return this.sp500FiftyTwoWeekChange > 0 ? "seagreen" : "orangered";
  }

  getTooltipData(name: string) {
    return Object.values(this.dataService.portfolioData).filter(
      (a: any) => a.symbol === name
    )[0];
  }

  changePerformanceChart(chartID: number) {
    this.selectedPerformanceChart = chartID;
  }

  changeVSCharts(chartId: number) {
    this.selectedVSChart = chartId;
  }

  getLogoSource(stock: any) {
    return `/assets/ticker-logos/${stock.symbol}.png`;
  }

  updateWidget(symbol: string) {
    this.selectedSymbol = "";
    setTimeout(() => (this.selectedSymbol = symbol), 50);
  }

  get getWidget() {
    return {
      widget: TvSymbolInfoWidgetComponent,
      inputs: { symbol: this.selectedSymbol },
    };
  }

  getStock() {
    return Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.symbol === this.selectedSymbol
    )[0] as any;
  }

  getTableDataSource() {
    const selectedStock = this.getStock();
    let dataSource = new MatTableDataSource<any>();
    dataSource.data = [selectedStock];
    return dataSource;
  }
}
