import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../services/data.service";
import { ContainerCardComponent } from "../../container-card/container-card.component";
import { InfoCardComponent } from "../../info-card/info-card.component";
import { TvAdvancedChartWidgetComponent } from "../../tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component";
import { TvFinancialsWidgetComponent } from "../../tradingview/tv-financials-widget/tv-financials-widget.component";
import { TvProfileWidgetComponent } from "../../tradingview/tv-profile-widget/tv-profile-widget.component";
import { TvSymbolInfoWidgetComponent } from "../../tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { TvTechnicalAnalysisWidgetComponent } from "../../tradingview/tv-technical-analysis-widget/tv-technical-analysis-widget.component";
import { StockPriceInsightComponent } from "../stock-price-insight/stock-price-insight.component";
import { StockRecommendationTrendsComponent } from "../stock-recommendation-trends/stock-recommendation-trends.component";
import { TvSymbolOverviewWidgetComponent } from "../../tradingview/tv-symbol-overview-widget/tv-symbol-overview-widget.component";

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
    StockPriceInsightComponent,
    StockRecommendationTrendsComponent,
    TvAdvancedChartWidgetComponent,
    TvFinancialsWidgetComponent,
    TvProfileWidgetComponent,
    TvSymbolInfoWidgetComponent,
    TvTechnicalAnalysisWidgetComponent,
    TvSymbolOverviewWidgetComponent
  ],
})
export class StockDataSheetComponent implements OnInit {
  @Input({ required: true }) symbol: any;
  stock: any;
  position: any;
  wallmineLink = "https://wallmine.com/";
  finvizLink = "https://finviz.com/quote.ashx?t=";
  yahooLink = "https://finance.yahoo.com/quote/";
  seekingAlphaLink = "https://seekingalpha.com/symbol/";
  etfdbLink = "https://etfdb.com/etf/";
  etfcomLink = "https://www.etf.com/";
  stockAnalysisLink = "https://www.stockanalysis.com/stocks/";
  stockAnalysisLinkEtf = "https://www.stockanalysis.com/etf/";
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
    this.activatedRoute.data.subscribe(() => {
      this.symbol = this.symbol
        ? this.symbol.toUpperCase()
        : this.activatedRoute.snapshot.params["symbol"].toUpperCase();
    });
    this.stock = this.dataService.portfolioData[this.symbol];
    this.position = this.dataService.portfolioHoldings[this.symbol];
    let exchange = this.stock?.exchangeName || "NasdaqGS";
    exchange === "NasdaqGS" ? "Nasdaq" : exchange;
    this.externalLinks = [
      {
        label: "StockAnalysis",
        url:
          this.stock.quoteType === "EQUITY"
            ? this.stockAnalysisLink + this.stock.symbol
            : this.stockAnalysisLinkEtf + this.stock.symbol,
      },
      {
        label: "Seekingalpha",
        url: this.seekingAlphaLink + this.stock.symbol,
      },
      {
        label: "Yahoo Finance",
        url: this.yahooLink + this.stock.symbol,
      },
      {
        label: "Finviz",
        url: this.finvizLink + this.stock.symbol,
      },
      {
        label: "Wallmine",
        url: this.wallmineLink + exchange + "/" + this.stock.symbol,
      },
    ];
    this.etfLinks = [
      {
        label: "EtfDB",
        url: this.etfdbLink + this.stock.symbol,
      },
      {
        label: "etf.com",
        url: this.etfcomLink + this.stock.symbol,
      },
    ];

    this.below50DayAverage =
      this.stock.fiftyDayAverage > this.stock.previousClose;
    this.below200DayAverage =
      this.stock.twoHundredDayAverage > this.stock.previousClose;
  }

  selectChart(chatId: number) {
    this.selectedChart = chatId;
  }
}
