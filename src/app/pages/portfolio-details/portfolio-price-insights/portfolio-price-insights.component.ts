import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { StockDayPriceRangeComponent } from "../../../shared/components/stock/stock-day-price-range/stock-day-price-range.component";
import { StockPriceInsightComponent } from "../../../shared/components/stock/stock-price-insight/stock-price-insight.component";
import { StockPriceMovementChartsComponent } from "../../../shared/components/stock/stock-price-movement-charts/stock-price-movement-charts.component";
import { StockTickerButtonsComponent } from "../../../shared/components/stock/stock-ticker-buttons/stock-ticker-buttons.component";
import { TvSymbolInfoWidgetComponent } from "../../../shared/components/tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { DataService } from "../../../shared/services/data.service";
import { PortfolioChartsComponent } from "../../chart-wall/portfolio-charts/portfolio-charts.component";
import { PortfolioDividendComponent } from "../portfolio-dividend/portfolio-dividend.component";
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
    MatTabsModule,
    NgxChartsModule,
    PortfolioChartsComponent,
    PortfolioDividendComponent,
    PortfolioFinancialsComponent,
    PortfolioHoldingsComponent,
    StockDayPriceRangeComponent,
    StockPriceInsightComponent,
    StockPriceMovementChartsComponent,
    StockTickerButtonsComponent,
    TvSymbolInfoWidgetComponent,
  ],
  templateUrl: "./portfolio-price-insights.component.html",
  styleUrls: ["./portfolio-price-insights.component.css"],
})
export class PortfolioPriceInsightsComponent implements OnInit {
  sortedStocks: any[] = [];
  sortedEtfs: any[] = [];
  sp500FiftyTwoWeekChange = 0;
  fiftyTwoWeekChangeChartData: any = [];
  fiftyTwoWeekLowChartData: any = [];
  fiftyTwoWeekHighChartData: any = [];
  discountChartData: any = [];
  fiftyDayMAChartData: any = [];
  twoHundredDayMAChartData: any = [];
  etfPerformanceChartData: any = [];
  sp500 = "S&P 500";
  selectedPerformanceChart = 1;
  selectedSymbol: any = "SCHD";
  selectedStock: any;
  selectedSymbolColor: any = { name: "SCHD", value: "teal" };
  performanceChartColorScheme = {
    domain: ["slategrey"],
  } as Color;
  fiftyTwoWeekChartColorScheme = {
    domain: ["slategrey"],
  } as Color;
  targetPriceChartColorScheme = {
    domain: ["slategrey"],
  } as Color;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sortedStocks = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "EQUITY")
      .sort((a: any, b: any) => a["52WeekChange"] - b["52WeekChange"]);
    this.sortedEtfs = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "ETF")
      .sort((a: any, b: any) => a["ytdReturn"] - b["ytdReturn"]);
    this.sp500FiftyTwoWeekChange = this.sortedStocks[0].SandP52WeekChange;
    this.selectedStock = Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.symbol === this.selectedSymbol
    )[0] as any;

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
    });
  }

  refreshData() {
    this.dataService.updatePortfolioTechnicalInsights();
  }

  changePerformanceChart(chartID: number) {
    this.selectedPerformanceChart = chartID;
  }

  updateSelectedStock(symbol: string) {
    this.selectedSymbol = null;
    setTimeout(() => {
      this.selectedSymbolColor = { name: symbol, value: "chocolate" };
      this.selectedSymbol = symbol;
      this.selectedStock = Object
        .values(this.dataService.portfolioData)
        .filter(
          (stock: any) => stock.symbol === this.selectedSymbol
        )[0] as any;
    }, 50);
  }

  // get getWidget() {
  //   return {
  //     widget: TvSymbolInfoWidgetComponent,
  //     inputs: { symbol: this.selectedSymbol },
  //   };
  // }
}
