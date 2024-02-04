import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CurrencyPipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ExpandedRowComponent } from '../../../shared/components/expanded-row/expanded-row.component';
import { StockTickerNameComponent } from '../../../shared/components/stock/stock-ticker-name/stock-ticker-name.component';
import { TvSingleQuoteWidgetComponent } from '../../../shared/components/tradingview/tv-single-quote-widget/tv-single-quote-widget.component';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'portfolio-holdings',
  templateUrl: './portfolio-holdings.component.html',
  styleUrls: ['./portfolio-holdings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  standalone: true,
  imports: [
    CurrencyPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    NgFor,
    NgIf,
    NgStyle,
    NgxChartsModule,
    ExpandedRowComponent,
    StockTickerNameComponent,
    TvSingleQuoteWidgetComponent,
  ],
  
})
export class PortfolioHoldingsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  displayTradingviewWidgets = false;
  portfolioHoldings: any = {};
  portfolioData: any = {};
  totalCostChartData: any = [];
  allTotalCostChartData: any = [];
  dataSource = new MatTableDataSource<any>();
  expandedRow!: any;
  columnDefs = [
    'symbol',
    'costAverage',
    'marketValue',
    'portfolioPercent',
    'unrealizedGain',
    'dividendIncome',
    'yieldOnCost',
    'sector',
  ];
  headers = [
    'Symbol',
    'Cost Average x shares Owned',
    'Market Value',
    'Portfolio %',
    'Unrealized Gain',
    'Annual Income',
    'Yield on Cost',
    'Sector',
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;
    this.dataSource.data = Object.values(this.portfolioData)
      .filter((a) => typeof a !== 'number')
      .map((data: any) => {
        return {
          ...data.position,
          symbol: data.symbol,
          sector: data.profile.sector,
          rating: data.averageAnalystRating,
          longName: data.longName,
          shortName: data.shortName,
          quoteType: data.quoteType,
          fiftyTwoWeekLow: data.fiftyTwoWeekLow,
          regularMarketPrice: data.regularMarketPrice,
          regularMarketChange: data.regularMarketChange,
          regularMarketChangePercent: data.regularMarketChangePercent,
          preMarketPrice: data.preMarketPrice,
          postMarketPrice: data.postMarketPrice,
        };
      });
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const dataStrings = [
        data.symbol,
        data.shortName,
        data.longName,
        data.quoteType,
        data.sector || '',
      ];
      for (const str of dataStrings) {
        if (str.toLowerCase().includes(filter.toLowerCase())) {
          return true;
        }
      }
      return false;
    };
    Object.values(this.portfolioData).forEach((stock: any) => {
      if (stock.position) {
        this.allTotalCostChartData.push({
          name: stock.symbol,
          value: this.portfolioHoldings[stock.symbol].totalCost,
          sector: stock.profile.sector || 'ETF',
          shortName: stock.shortName,
          longName: stock.longName,
        });
      }
    });
    this.allTotalCostChartData.sort((a: any, b: any) => a.value - b.value);
    this.totalCostChartData = this.allTotalCostChartData;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  cells: Function[] = [
    (stock: any) => '',
    (stock: any) => '',
    (stock: any) => `$${this.portfolioHoldings[stock.symbol].marketValue.toFixed(2)}`,
    (stock: any) => `${(this.portfolioHoldings[stock.symbol].marketValue / this.portfolioHoldings.portfolioMarketValue * 100).toFixed(2)}%`,
    (stock: any) => '',
    (stock: any) => `${this.portfolioHoldings[stock.symbol].dividendIncome.toFixed(2)}`,
    (stock: any) => this.portfolioHoldings[stock.symbol].yieldOnCost.toFixed(2) * 100 + '%',
    (stock: any) => stock.sector || 'ETF',
  ];

  footerRow: Function[] = [
    () => '',
    () => `$${this.portfolioData?.portfolioTotalInvestment?.toFixed(2)}`,
    () => `$${this.portfolioData?.portfolioMarketValue?.toFixed(2)}`,
    () => '',
    () => `$${this.portfolioData?.portfolioUnrealizedGain?.toFixed(2)}`,
    () => `$${this.portfolioData?.portfolioDividendIncome?.toFixed(2)}`,
    () => `${(this.portfolioData?.portfolioYieldOnCost * 100)?.toFixed(2)}%`,
    () => '',
    () => '',
    () => '',
  ];

  applyFilter(event: Event) {
    this.totalCostChartData = this.allTotalCostChartData;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
    if (filterValue) {
      this.totalCostChartData = this.totalCostChartData.filter((stock: any) => {
        return stock.sector?.toLowerCase().includes(filterValue.toLowerCase()) ||
          stock.name?.toLowerCase().includes(filterValue.toLowerCase()) ||
          stock.shortName?.toLowerCase().includes(filterValue.toLowerCase()) ||
          stock.longName?.toLowerCase().includes(filterValue.toLowerCase())
      });
    } else {
      this.totalCostChartData = this.allTotalCostChartData;
    }
  }

  expandRow(row: any) {
    this.expandedRow = this.expandedRow === row ? null : row;
  }

  getColColor(stock: any, index: number) {
    switch (index) {
      case 1:
        return this.portfolioHoldings[stock.symbol].costAverage > stock.fiftyTwoWeekLow
          ? 'tomato'
          : 'forestgreen';
      case 4:
        return stock.unrealizedGain < 0 ? 'tomato' : 'forestgreen';
      default:
        return 'black';
    }
  }

  tradingviewWidgetToggleHandler() {
    this.displayTradingviewWidgets = !this.displayTradingviewWidgets;
  }
}
