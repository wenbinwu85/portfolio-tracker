import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { PriceMovementChartsComponent } from "../../../shared/components/charts/price-movement-charts/price-movement-charts.component";
import { StockPriceInfoCardComponent } from "../../../shared/components/stock/stock-price-info-card/stock-price-info-card.component";
import { DataService } from "../../../shared/services/data.service";
import { PortfolioChartsComponent } from "../../chart-wall/portfolio-charts/portfolio-charts.component";
import { PortfolioDividendComponent } from "../portfolio-dividend/portfolio-dividend.component";
import { PortfolioEventsComponent } from "../portfolio-events/portfolio-events.component";
import { PortfolioFinancialsComponent } from "../portfolio-financials/portfolio-financials.component";
import { PortfolioHoldingsComponent } from "../portfolio-holdings/portfolio-holdings.component";
import { MatChipsModule } from "@angular/material/chips";

@Component({
  selector: "portfolio-price-trends",
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
    PortfolioEventsComponent,
    PortfolioFinancialsComponent,
    PortfolioHoldingsComponent,
    PriceMovementChartsComponent,
    StockPriceInfoCardComponent,
  ],
  templateUrl: "./portfolio-price-trends.component.html",
  styleUrls: ["./portfolio-price-trends.component.css"],
})
export class PortfolioPriceTrendsComponent implements OnInit {
  sortedStocks: any[] = [];
  sortedEtfs: any[] = [];
  fiftyTwoWeekChangeChartData: any = [];
  fiftyTwoWeekLowChartData: any = [];
  fiftyDayMAChartData: any = [];
  twoHundredDayMAChartData: any = [];
  discountChartData: any = [];
  displayTradingviewWidgets = false;
  sp500FiftyTwoWeekChange = 0;
  etfPerformanceChartData: any = [];
  sp500 = "S&P 500";
  active = [{ name: this.sp500 }];
  customColor = [{ name: this.sp500, value: "tomato" }];
  selectedChart = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sortedStocks = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "EQUITY")
      .sort((a: any, b: any) => a["52WeekChange"] - b["52WeekChange"]);
    this.sortedEtfs = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "ETF")
      .sort((a: any, b: any) => a['ytdReturn'] - b['ytdReturn']);
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
      this.discountChartData.push({
        name: stock.symbol,
        value:
          ((stock.targetMeanPrice - stock.regularMarketPrice) /
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
    this.discountChartData.sort((a: any, b: any) => b.value - a.value);

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
        console.log('!!!!')
        console.log('key', key)
        console.log(keyData)
        this.etfPerformanceChartData.push(keyData);
      };
    })
  }

  getSP500ChangeColor(stock: any) {
    return this.sp500FiftyTwoWeekChange > 0 ? "forestgreen" : "tomato";
  }

  getTooltipData(name: string) {
    return Object.values(this.dataService.portfolioData).filter(
      (a: any) => a.symbol === name
    )[0];
  }

  displayChart(chartID: number) {
    this.selectedChart = chartID;
  }
}
