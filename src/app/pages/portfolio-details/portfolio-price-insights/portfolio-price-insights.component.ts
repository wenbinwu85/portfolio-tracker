import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { StockDayPriceRangeComponent } from "../../../shared/components/stock/stock-day-price-range/stock-day-price-range.component";
import { StockPriceInsightComponent } from "../../../shared/components/stock/stock-price-insight/stock-price-insight.component";
import { StockPriceMovementChartsComponent } from "../../../shared/components/stock/stock-price-movement-charts/stock-price-movement-charts.component";
import { StockTickerButtonsComponent } from "../../../shared/components/stock/stock-ticker-buttons/stock-ticker-buttons.component";
import { TvSymbolInfoWidgetComponent } from "../../../shared/components/tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { DataService } from "../../../shared/services/data.service";
import { PortfolioDividendComponent } from "../portfolio-dividend/portfolio-dividend.component";
import { PortfolioFinancialsComponent } from "../portfolio-financials/portfolio-financials.component";
import { PortfolioHoldingsComponent } from "../portfolio-holdings/portfolio-holdings.component";

@Component({
  selector: "portfolio-price-insights",
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgxChartsModule,
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
  selectedSymbol: any = "AAPL";
  selectedStock: any;
  selectedSymbolColor: any = { name: "AAPL", value: "chocolate" };
  performanceChartColorScheme = { domain: ["slategrey"] } as Color;
  fiftyTwoWeekChartColorScheme = { domain: ["slategrey"] } as Color;
  targetPriceChartColorScheme = { domain: ["slategrey"] } as Color;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.sortedStocks = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "EQUITY")
      .sort((a: any, b: any) => a["52WeekChange"].raw - b["52WeekChange"].raw);
    this.sortedEtfs = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "ETF")
      .sort((a: any, b: any) => a["ytdReturn"].raw - b["ytdReturn"].raw);
    this.sp500FiftyTwoWeekChange = this.sortedStocks[0].SandP52WeekChange.raw;
    this.selectedStock = this.dataService.portfolioData[this.selectedSymbol];

    console.dir(this.sortedStocks)
    console.log(this.sortedStocks)

    this.sortedStocks.forEach((stock: any) => {
      this.fiftyDayMAChartData.push({
        name: stock.symbol,
        value: ((stock.regularMarketPrice.raw - stock.fiftyDayAverage.raw) / stock.fiftyDayAverage.raw) * 100,
      });

      this.twoHundredDayMAChartData.push({
        name: stock.symbol,
        value: ((stock.regularMarketPrice.raw - stock.twoHundredDayAverage.raw) / stock.twoHundredDayAverage.raw) * 100,
      });

      this.fiftyTwoWeekChangeChartData.push({
        name: stock.symbol,
        value: stock["52WeekChange"].raw * 100,
      });

      this.fiftyTwoWeekLowChartData.push({
        name: stock.symbol,
        value: ((stock.regularMarketPrice.raw - stock.fiftyTwoWeekLow.raw) / stock.fiftyTwoWeekLow.raw) * 100,
      });

      this.fiftyTwoWeekHighChartData.push({
        name: stock.symbol,
        value: ((stock.regularMarketPrice.raw - stock.fiftyTwoWeekHigh.raw) / stock.fiftyTwoWeekHigh.raw) * 100,
      });

      if (stock.targetMeanPrice.raw) {
        this.discountChartData.push({
          name: stock.symbol,
          value: ((stock.regularMarketPrice.raw - stock.targetMeanPrice.raw) / stock.targetMeanPrice.raw) * 100,
        });
      }
    });

    this.fiftyTwoWeekChangeChartData.push({
      name: this.sp500,
      value: this.sortedStocks[0].SandP52WeekChange.raw * 100,
    });

    this.fiftyDayMAChartData.sort((a: any, b: any) => a.value - b.value);
    this.twoHundredDayMAChartData.sort((a: any, b: any) => a.value - b.value);
    this.fiftyTwoWeekChangeChartData.sort((a: any, b: any) => a.value - b.value);
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
          value: etf.fundPerformance.trailingReturns[key].raw * 100,
        });
      });
      this.etfPerformanceChartData.push(keyData);
    });
  }

  changePerformanceChart(chartID: number) {
    this.selectedPerformanceChart = chartID;
  }

  updateSelectedStock(symbol: string) {
    this.selectedSymbol = null;
    this.cdr.detectChanges();
    this.selectedSymbol = symbol;
    this.selectedSymbolColor = { name: symbol, value: "chocolate" };
    this.selectedStock = [this.dataService.portfolioData[symbol]];
    if (this.selectedStock[0].quoteType === "ETF") {
      this.changePerformanceChart(2);
    } else { 
      this.changePerformanceChart(1);
    }
  }
}
