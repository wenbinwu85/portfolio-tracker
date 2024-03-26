import { CommonModule, Location, NgFor, NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../services/data.service";
import { WallmineChartComponent } from "../../charts/wallmine-chart/wallmine-chart.component";
import { InfoCardComponent } from "../../info-card/info-card.component";
import { TvAdvancedChartWidgetComponent } from "../../tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component";
import { TvFinancialsWidgetComponent } from "../../tradingview/tv-financials-widget/tv-financials-widget.component";
import { TvProfileWidgetComponent } from "../../tradingview/tv-profile-widget/tv-profile-widget.component";
import { TvSymbolInfoWidgetComponent } from "../../tradingview/tv-symbol-info-widget/tv-symbol-info-widget.component";
import { TvTechnicalAnalysisWidgetComponent } from "../../tradingview/tv-technical-analysis-widget/tv-technical-analysis-widget.component";
import { StockPriceInsightComponent } from "../stock-price-insight/stock-price-insight.component";

@Component({
  selector: 'stock-data-sheet',
  templateUrl: './stock-data-sheet.component.html',
  styleUrls: ['./stock-data-sheet.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatSlideToggleModule,
    NgFor,
    NgIf,
    StockPriceInsightComponent,
    TvAdvancedChartWidgetComponent,
    TvFinancialsWidgetComponent,
    TvProfileWidgetComponent,
    TvSymbolInfoWidgetComponent,
    TvTechnicalAnalysisWidgetComponent,
    WallmineChartComponent,
  ],
})
export class StockDataSheetComponent implements OnInit {
  @Input({ required: true }) symbol: any;
  stock: any;
  position: any;
  wallmineLink = "https://wallmine.com/";
  finvizLink = "https://finviz.com/quote.ashx?t=";
  yahooLink = "https://finance.yahoo.com/quote/";
  seekingalphaLink = "https://seekingalpha.com/symbol/";
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
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(() => {
      this.symbol = this.symbol
        ? this.symbol.toUpperCase()
        : this.activatedRoute.snapshot.params["symbol"].toUpperCase();
    });
    const data = this.dataService.portfolioData;
    this.stock = data[this.symbol];
    this.position = this.dataService.portfolioHoldings[this.symbol];
    console.log(this.position);
    let exchange = this.stock?.exchangeName || "NasdaqGS";
    exchange === "NasdaqGS" ? "Nasdaq" : exchange;
    this.externalLinks = [
      {
        label: "StockAnalysis",
        url: this.stock.quoteType === "EQUITY"
          ? this.stockAnalysisLink + this.stock.symbol
          : this.stockAnalysisLinkEtf + this.stock.symbol,
      },
      {
        label: "Seekingalpha",
        url: this.seekingalphaLink + this.stock.symbol,
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
