import { CurrencyPipe, NgStyle } from "@angular/common";
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatSort, MatSortModule } from "@angular/material/sort";
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from "@angular/material/table";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { StockNameCardComponent } from "../../../shared/components/stock/stock-name-card/stock-name-card.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-financials",
  templateUrl: "./portfolio-financials.component.html",
  styleUrls: ["./portfolio-financials.component.css"],
  standalone: true,
  imports: [
    ContainerCardComponent,
    CurrencyPipe,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    NgStyle,
    StockNameCardComponent,
  ],
})
export class PortfolioFinancialsComponent implements OnInit, AfterViewInit {
  @Input() transactions = "portfolio";
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();
  sortedEtfs: any[] = [];
  headers = [
    "Symbol",
    "Debt To Equity (MRQ)",
    "Current Ratio (MRQ)",
    "Earnings Growth (YOY)",
    "Quarterly Revenue Growth (YOY)",
    "Profit Margins",
    "Forward PE",
    "Forward EPS",
    "PEG Ratio",
    "Total Cash / Share",
    "Revenue / Share",
    "FCF Yield",
    "FCF / Share",
    "Return On Assets",
    "Return On Equity",
    "EV / EBITDA",
    "EV / Revenue",
  ];
  columnDefs = [
    "symbol",
    "debtToEquity",
    "currentRatio",
    "earningsQuarterlyGrowth",
    "revenueGrowth",
    "profitMargins",
    "forwardPE",
    "forwardEps",
    "pegRatio",
    "totalCashPerShare",
    "revenuePerShare",
    "freeCashflowYield",
    "freeCashflowPerShare",
    "returnOnAssets",
    "returnOnEquity",
    "enterpriseToEbitda",
    "enterpriseToRevenue",
  ];
  etfHeaders = [
    "Symbol",
    "Expense Ratio",
    "Nav Price",
    "Trailing PE",
    "YTD Return",
    "1 Month Return",
    "3 month Return",
    "1 Year Return",
    "3 Year Return",
    "5 year Return",
    "10 Year return",
    "3Y Beta",
    "Total Assets",
  ];
  etfColumnDefs = [
    "symbol",
    "annualReportExpenseRatio",
    "navPrice",
    "trailingPE",
    "ytdReturn",
    "1monthReturn",
    "3monthReturn",
    "1YearReturn",
    "threeYearReturn",
    "fiveYearReturn",
    "tenYearReturn",
    "beta3Year",
    "totalAssets",
  ];

  cells: Function[] = [
    (stock: any) => "",
    (stock: any) => stock.debtToEquity.fmt || 0,
    (stock: any) => stock.currentRatio.fmt || 0,
    (stock: any) => stock.earningsQuarterlyGrowth?.fmt || 0,
    (stock: any) => stock.revenueGrowth.fmt || 0,
    (stock: any) => stock.profitMargins.fmt|| 0,
    (stock: any) => stock.forwardPE.fmt || 0,
    (stock: any) => stock.forwardEps.fmt || 0,
    (stock: any) => stock.pegRatio.fmt || 0,
    (stock: any) => stock.totalCashPerShare.fmt || 0,
    (stock: any) => stock.revenuePerShare.fmt || 0,
    (stock: any) => `${(stock.freeCashflowYield * 100).toFixed(2)}%` || 0,
    (stock: any) => `$${stock.freeCashflowPerShare.toFixed(2)}` || 0,
    (stock: any) => stock.returnOnAssets.fmt || 0,
    (stock: any) => stock.returnOnEquity.fmt || 0,
    (stock: any) => stock.enterpriseToEbitda.fmt || 0,
    (stock: any) => stock.enterpriseToRevenue.fmt || 0,
  ];

  etfCells: Function[] = [
    (etf: any) => "",
    (etf: any) => etf.profile.feesExpensesInvestment.annualReportExpenseRatio.fmt,
    (etf: any) => etf.navPrice.fmt,
    (etf: any) => etf.trailingPE.fmt,
    (etf: any) => etf.fundPerformance.trailingReturns.ytd.fmt,
    (etf: any) => etf.fundPerformance.trailingReturns.oneMonth.fmt,
    (etf: any) => etf.fundPerformance.trailingReturns.threeMonth.fmt,
    (etf: any) => etf.fundPerformance.trailingReturns.oneYear.fmt,
    (etf: any) => etf.fundPerformance.trailingReturns.threeYear.fmt,
    (etf: any) => etf.fundPerformance.trailingReturns.fiveYear.fmt,
    (etf: any) => etf.fundPerformance.trailingReturns.tenYear.fmt,
    (etf: any) => etf.beta3Year.raw,
    (etf: any) => etf.totalAssets.fmt,
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const stocks = Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.quoteType === "EQUITY"
    );
    const etfs = Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.quoteType === "ETF"
    );
    this.dataSource.data = stocks.map(
      (stock: any) => {
        const holding = this.dataService.portfolioHoldings[stock.symbol];
        return {
          ...stock,
          ...holding
        }
      });
    this.sortedEtfs = etfs
      .map((etf: any) => { 
        const holding = this.dataService.portfolioHoldings[etf.symbol];
        return {
          ...etf,
          ...holding
        }
      })
      .sort(
        (a: any, b: any) => a["ytdReturn"].raw - b["ytdReturn"].raw
      );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getCellColor(index: number, stock: any) {
    const value = this.cells[index](stock);
    return value < 0 || value[0] === "-" || value[1] === "-" ? "chocolate" : "";
  }
}
