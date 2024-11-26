import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";
import { DataService } from "../../../services/dataV2.service";
import { ContainerCardComponent } from "../../container-card/container-card.component";
import { InfoCardComponent } from "../../info-card/info-card.component";
import { TvAdvancedChartWidgetComponent } from "../../tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component";
import { TvFinancialsWidgetComponent } from "../../tradingview/tv-financials-widget/tv-financials-widget.component";
import { TvProfileWidgetComponent } from "../../tradingview/tv-profile-widget/tv-profile-widget.component";
import { TvSymbolInfoWidgetComponent } from "../../tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { TvSymbolOverviewWidgetComponent } from "../../tradingview/tv-symbol-overview-widget/tv-symbol-overview-widget.component";
import { TvTechnicalAnalysisWidgetComponent } from "../../tradingview/tv-technical-analysis-widget/tv-technical-analysis-widget.component";
import { StockEarningsChartComponent } from "../stock-earnings-chart/stock-earnings-chart.component";
import { StockPriceInsightComponent } from "../stock-price-insight/stock-price-insight.component";
import { StockRecommendationTrendsComponent } from "../stock-recommendation-trends/stock-recommendation-trends.component";

@Component({
  selector: "stock-data-sheet",
  templateUrl: "./stock-data-sheet.component.html",
  styleUrls: ["./stock-data-sheet.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    InfoCardComponent,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatSlideToggleModule,
    StockEarningsChartComponent,
    StockPriceInsightComponent,
    StockRecommendationTrendsComponent,
    TvAdvancedChartWidgetComponent,
    TvFinancialsWidgetComponent,
    TvProfileWidgetComponent,
    TvSymbolInfoWidgetComponent,
    TvSymbolOverviewWidgetComponent,
    TvTechnicalAnalysisWidgetComponent,
  ],
})
export class StockDataSheetComponent implements OnInit {
  @Input({ required: true }) symbol: any;
  stock: any;
  position: any;
  externalLinks: any = [];
  etfLinks: any = [];
  below50DayAverage = false;
  below200DayAverage = false;
  selectedChart = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(take(1)).subscribe(() => {
      this.symbol = this.symbol
        ? this.symbol.toUpperCase()
        : this.activatedRoute.snapshot.params["symbol"].toUpperCase();
    });
    this.stock = this.dataService.portfolioData.get(this.symbol);
    this.position = this.dataService.portfolioHoldings.get(this.symbol);
    this.below50DayAverage = this.stock.fiftyDayAverage > this.stock.previousClose;
    this.below200DayAverage = this.stock.twoHundredDayAverage > this.stock.previousClose;
    this.externalLinks = [
      {
        label: "Seekingalpha",
        url: "https://seekingalpha.com/symbol/" + this.stock.symbol,
      },
      {
        label: "Yahoo Finance",
        url: "https://finance.yahoo.com/quote/" + this.stock.symbol,
      },
      {
        label: "Finviz",
        url: "https://finviz.com/quote.ashx?t=" + this.stock.symbol,
      },
      {
        label: "Financecharts",
        url:
          this.stock.quoteType === "EQUITY"
            ? "https://financecharts.com/stocks/" + this.stock.symbol
            : "https://financecharts.com/etfs/" + this.stock.symbol,
      },
      {
        label: "StockAnalysis",
        url:
          this.stock.quoteType === "EQUITY"
            ? "https://www.stockanalysis.com/stocks/" + this.stock.symbol
            : "https://www.stockanalysis.com/etf/" + this.stock.symbol,
      },
    ];
    this.etfLinks = [
      {
        label: "EtfDB",
        url: "https://etfdb.com/etf/" + this.stock.symbol,
      },
      {
        label: "etf.com",
        url: "https://www.etf.com/" + this.stock.symbol,
      },
    ];
  }

  selectChart(chatId: number) {
    this.selectedChart = chatId;
  }
}
