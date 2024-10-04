import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  CurrencyPipe,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
} from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSort, MatSortModule } from "@angular/material/sort";
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { ExpandedRowComponent } from "../../../shared/components/expanded-row/expanded-row.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { StockNameCardComponent } from "../../../shared/components/portfolio/stock-name-card/stock-name-card.component";
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
    InfoCardComponent,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    NgStyle,
    NgxChartsModule,
    PercentPipe,
    StockNameCardComponent,
    TitleCasePipe,
    TvSingleQuoteWidgetComponent,
  ],
})
export class PortfolioHoldingsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  portfolioSymbols: any;
  portfolioHoldings: any = {};
  portfolioData: any = {};

  showTradingviewWidgets = false;
  selectedTab = "allocations";
  selectedSectorColors: any[] = [];
  passiveIncomeTarget = 0;
  passiveIncomeGoalPercentage = 0;
  portfolioValueTarget = 0;
  portfolioValueGoalPercentage = 0;
  sectorsData: any = [];
  portfolioPercentData: any = [];
  marketValueData: any[] = [];
  unrealizedGainData: any[] = [];
  dividendData: any[] = [];
  yocData: any[] = [];
  allocationsBarChartColorScheme = { domain: ["slategrey"] } as Color;
  valueBarChartColorScheme = { domain: ["slategrey"] } as Color;
  dividendBarChartColorScheme = { domain: ["slategrey"] } as Color;
  stackedBarChartColorScheme = { domain: ["slategrey", "skyblue"] } as Color;
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
    "Industry",
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
    "industry",
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
    (stock: any) => stock.sector || "N/A",
    (stock: any) => stock.industry || "N/A",
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
    () => "",
    // () => "",
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.portfolioSymbols = this.dataService.portfolioSymbols;
    this.portfolioData = this.dataService.portfolioData;
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.passiveIncomeTarget = 12000;
    this.portfolioValueTarget = this.passiveIncomeTarget / this.portfolioHoldings.yieldOnCost;
    this.passiveIncomeGoalPercentage = this.portfolioHoldings.dividendIncome / this.passiveIncomeTarget;
    this.portfolioValueGoalPercentage = this.portfolioHoldings.marketValue / this.portfolioValueTarget;

    const market_sector_values: any = {};
    this.portfolioSymbols?.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stockData = this.portfolioData[symbol];
      const sector = stockData.profile?.sector || "ETF";
      const sectorValue = market_sector_values[sector] || 0;
      market_sector_values[sector] = sectorValue + position.marketValue;

      this.portfolioPercentData.push({
        name: stockData.symbol,
        value:
          (position.marketValue / this.portfolioHoldings.marketValue) * 100,
        sector: sector,
      });

      this.marketValueData.push({
        name: stockData.symbol,
        series: [
          {
            name: "Cost Basis",
            value: position.totalCost,
          },
          {
            name: "Unrealized Gain",
            value: position.unrealizedGain,
          },
        ],
        sector: sector,
      });
      this.unrealizedGainData.push({
        name: stockData.symbol,
        value: position.unrealizedGainPercent * 100 || 0,
        sector: sector,
      });

      if (position.dividendIncome) {
        this.dividendData.push({
          name: stockData.symbol,
          value: position.dividendIncome,
          sector: sector,
        });
        this.yocData.push({
          name: stockData.symbol,
          value: position.yieldOnCost * 100,
          sector: sector,
        });
      }
    });

    Object.entries(market_sector_values).forEach(([sector, value]) => {
      this.sectorsData.push({
        name: sector,
        value: value,
      });
    });

    this.sectorsData.sort((a: any, b: any) => a.value - b.value);
    this.portfolioPercentData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].marketValue -
        this.portfolioHoldings[b.name].marketValue
    );

    this.marketValueData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].marketValue -
        this.portfolioHoldings[b.name].marketValue
    );

    this.unrealizedGainData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].unrealizedGainPercent -
        this.portfolioHoldings[b.name].unrealizedGainPercent
    );

    this.dividendData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].dividendIncome -
        this.portfolioHoldings[b.name].dividendIncome
    );

    this.yocData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].yieldOnCost -
        this.portfolioHoldings[b.name].yieldOnCost
    );

    this.dataSource.data = this.dataService.portfolioSymbols.map(
      (symbol: any) => {
        const holding = this.portfolioHoldings[symbol];
        const stock = this.portfolioData[symbol];
        const stockInfo = {
          name: stock.symbol,
          value: holding.totalCost,
          sector: stock.profile?.sector || "ETF",
          shortName: stock.shortName,
          longName: stock.longName,
        };
        this.allTotalCostChartData.push(stockInfo);

        return {
          ...holding,
          symbol: stock.symbol,
          sector: stock.profile?.sector,
          industry: stock.profile?.industry,
          rating: stock.recommendationKey,
          longName: stock.longName,
          shortName: stock.shortName,
          quoteType: stock.quoteType,
          website: stock.profile?.website || "",
          marketState: stock.marketState,
          fiftyTwoWeekLow: stock.fiftyTwoWeekLow.raw,
          regularMarketPrice: stock.regularMarketPrice.raw,
          regularMarketChange: stock.regularMarketChange.raw,
          regularMarketChangePercent: stock.regularMarketChangePercent.raw,
          preMarketPrice: stock.preMarketPrice.raw,
          preMarketChangePercent: stock.preMarketChangePercent?.raw || 0,
          postMarketPrice: stock.postMarketPrice.raw,
          postMarketChangePercent: stock.postMarketChangePercent?.raw || 0,
          earnings: stock.earnings,
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
        data.industry || "",
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
      case 11:
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

  getTooltip(kind: string) {
    if (kind === "passive") {
      return `Progress: ${(this.passiveIncomeGoalPercentage * 100).toFixed(4)}%`;
    } else if (kind === "investment") {
      return `Progress: ${(this.portfolioValueGoalPercentage * 100).toFixed(4)}%`;
    } else {
      return "";
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.selectedSectorColors = [];
  }

  onSelectSector(data: any) {
    this.selectedSectorColors = [];
    this.portfolioPercentData.forEach((ticker: any) => {
      if (ticker.sector === data.name) {
        this.selectedSectorColors.push({
          name: ticker.name,
          value: 'skyblue'
        })
      }
    });
  }

  getGainLostColor = (symbol: any) => { 
    const unrealizedGainPercent = this.portfolioHoldings[symbol].unrealizedGainPercent;
    return unrealizedGainPercent > 0 ? 'teal' : 'chocolate';
  }
}
