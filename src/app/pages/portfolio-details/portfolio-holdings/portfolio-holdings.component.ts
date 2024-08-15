import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { CurrencyPipe, NgStyle, TitleCasePipe } from "@angular/common";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSort, MatSortModule } from "@angular/material/sort";
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from "@angular/material/table";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { ExpandedRowComponent } from "../../../shared/components/expanded-row/expanded-row.component";
import { StockNameCardComponent } from "../../../shared/components/stock/stock-name-card/stock-name-card.component";
import { TvSingleQuoteWidgetComponent } from "../../../shared/components/tradingview/tv-single-quote-widget/tv-single-quote-widget.component";
import { StockPriceColorsEnum } from "../../../shared/model/colors.model";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-holdings",
  templateUrl: "./portfolio-holdings.component.html",
  styleUrls: ["./portfolio-holdings.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
  standalone: true,
  imports: [
    ContainerCardComponent,
    CurrencyPipe,
    ExpandedRowComponent,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    NgStyle,
    NgxChartsModule,
    StockNameCardComponent,
    TitleCasePipe,
    TvSingleQuoteWidgetComponent,
  ],
})
export class PortfolioHoldingsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  showTradingviewWidgets = false;
  portfolioHoldings: any = {};
  portfolioData: any = {};
  totalCostChartData: any = [];
  allTotalCostChartData: any = [];
  dataSource = new MatTableDataSource<any>();
  expandedRow!: any;
  headers = [
    "Symbol",
    "Average Cost x shares",
    "Total Invested",
    "Market Value",
    "Portfolio %",
    "Unrealized Gain",
    "Unrealized Gain %",
    "Dividend Income",
    "Yield on Cost",
    "Sector",
    // "Recommendation",
  ];
  columnDefs = [
    "symbol",
    "costAverage",
    "totalCost",
    "marketValue",
    "portfolioPercent",
    "unrealizedGain",
    "unrealizedGainPercent",
    "dividendIncome",
    "yieldOnCost",
    "sector",
    // "rating",
  ];
  cells: Function[] = [
    (stock: any) => "",
    (stock: any) => "",
    (stock: any) => `$${stock.totalCost}`,
    (stock: any) => `$${stock.marketValue.toFixed(2)}`,
    (stock: any) => `${(stock.portfolioPercent * 100).toFixed(2)}%`,
    (stock: any) => "",
    (stock: any) => `${(stock.unrealizedGainPercent * 100).toFixed(2)}%`,
    (stock: any) => `$${stock.dividendIncome.toFixed(2)}`,
    (stock: any) => (stock.yieldOnCost * 100).toFixed(2) + "%",
    (stock: any) => stock.sector || "ETF",
    // (stock: any) => "",
  ];
  footerRow: Function[] = [
    () => `Total Holdings: ${this.portfolioHoldings.positionsHeld}`,
    () => "",
    () => `$${this.portfolioHoldings.totalAmountInvested.toFixed(2)}`,
    () => `$${this.portfolioHoldings.marketValue.toFixed(2)}`,
    () => "",
    () => `$${this.portfolioHoldings.unrealizedGain.toFixed(2)}`,
    () => "",
    () => `$${this.portfolioHoldings.dividendIncome.toFixed(2)}`,
    () => `${(this.portfolioHoldings.yieldOnCost * 100).toFixed(2)}%`,
    () => "",
    // () => "",
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioData = this.dataService.portfolioData;
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.dataSource.data = this.dataService.portfolioSymbols.map(
      (symbol: any) => {
        const stock = this.portfolioData[symbol];
        const stockInfo = {
          name: stock.symbol,
          value: this.portfolioHoldings[stock.symbol].totalCost,
          sector: stock.profile?.sector || "ETF",
          shortName: stock.shortName,
          longName: stock.longName,
        };
        this.allTotalCostChartData.push(stockInfo);

        return {
          ...this.portfolioHoldings[stock.symbol],
          symbol: stock.symbol,
          sector: stock.profile.sector,
          rating: stock.recommendationKey,
          longName: stock.longName,
          shortName: stock.shortName,
          quoteType: stock.quoteType,
          website: stock.profile?.website || "",
          fiftyTwoWeekLow: stock.fiftyTwoWeekLow.raw,
          regularMarketPrice: stock.regularMarketPrice.raw,
          regularMarketChange: stock.regularMarketChange.raw,
          regularMarketChangePercent: stock.regularMarketChangePercent.raw,
          preMarketPrice: stock.preMarketPrice.raw,
          preMarketChangePercent: stock.preMarketChangePercent?.raw || 0,
          postMarketPrice: stock.postMarketPrice.raw,
          postMarketChangePercent: stock.postMarketChangePercent?.raw || 0,
        };
      }
    );
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const dataStrings = [
        data.symbol,
        data.shortName,
        data.longName,
        data.quoteType,
        data.sector || "",
      ];
      for (const str of dataStrings) {
        if (str.toLowerCase().includes(filter.toLowerCase())) {
          return true;
        }
      }
      return false;
    };
    this.allTotalCostChartData.sort((a: any, b: any) => b.value - a.value);
    this.totalCostChartData = this.allTotalCostChartData;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.totalCostChartData = this.allTotalCostChartData;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
    if (filterValue) {
      this.totalCostChartData = this.totalCostChartData.filter((stock: any) => {
        return (
          stock.sector?.toLowerCase().includes(filterValue.toLowerCase()) ||
          stock.name?.toLowerCase().includes(filterValue.toLowerCase()) ||
          stock.shortName?.toLowerCase().includes(filterValue.toLowerCase()) ||
          stock.longName?.toLowerCase().includes(filterValue.toLowerCase())
        );
      });
    } else {
      this.totalCostChartData = this.allTotalCostChartData;
    }
  }

  getCellColor(stock: any, index: number) {
    switch (index) {
      case 5:
      case 6:
        return stock.unrealizedGain > 0
          ? StockPriceColorsEnum.Gain
          : StockPriceColorsEnum.Lost;
      case 7:
        return stock.dividendIncome > 0
          ? StockPriceColorsEnum.Gain
          : StockPriceColorsEnum.Lost;
      case 10:
        return stock.rating === "buy" ? "teal" : "black";
      default:
        return "black";
    }
  }

  expandRow(row: any) {
    this.expandedRow = this.expandedRow === row ? null : row;
  }

  showWidgets() {
    this.showTradingviewWidgets = !this.showTradingviewWidgets;
  }
}
