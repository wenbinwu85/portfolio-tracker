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
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();
  sortedEtfs: any[] = [];
  headers = [
    "Symbol",
    "Debt To Equity (MRQ)",
    "Current Ratio (MRQ)",
    "Earnings Growth (QOQ) %",
    "Quarterly Revenue Growth (YOY) %",
    "Profit Margins %",
    "Forward PE",
    "Forward EPS",
    "PEG Ratio",
    "Total Cash / Share",
    "Revenue / Share",
    "FCF Yield",
    "FCF / Share",
    "Return On Assets %",
    "Return On Equity %",
    "EV / EBITDA",
    "EV / Revenue",
  ];
  columnDefs = [
    "symbol",
    "debtToEquity",
    "currentRatio",
    "earningsGrowth",
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const stocks = this.dataService.portfolioDataArray.filter(
      (stock: any) => stock.quoteType === "EQUITY"
    );
    const etfs = this.dataService.portfolioDataArray.filter(
      (stock: any) => stock.quoteType === "ETF"
    );

    this.dataSource.data = stocks
      .map((stock: any) => {
        const holding = this.dataService.portfolioHoldings[stock.symbol];
        return {
          ...stock,
          ...holding,
          symbol: stock.symbol,
          debtToEquity: (stock.debtToEquity.raw / 100).toFixed(2) || 0,
          currentRatio: stock.currentRatio.fmt || 0,
          earningsGrowth: +stock.earningsQuarterlyGrowth.fmt?.replace('%', '') || 0,
          revenueGrowth: +stock.revenueGrowth.fmt?.replace('%', '') || 0,
          profitMargins: +stock.profitMargins.fmt?.replace('%', '') || 0,
          forwardPE: stock.forwardPE.fmt || 0,
          forwardEps: stock.forwardEps.fmt || 0,
          pegRatio: stock.pegRatio.fmt || 0,
          totalCashPerShare: stock.totalCashPerShare.fmt || 0,
          revenuePerShare: stock.revenuePerShare.fmt || 0,
          freeCashflowYield: +(stock.freeCashflowYield * 100).toFixed(2) || 0,
          freeCashflowPerShare: +(stock.freeCashflowPerShare.toFixed(2)) || 0,
          returnOnAssets: +stock.returnOnAssets.fmt?.replace('%', '') || 0,
          returnOnEquity: +stock.returnOnEquity.fmt?.replace('%', '') || 0,
          enterpriseToEbitda: stock.enterpriseToEbitda.fmt || 0,
          enterpriseToRevenue: stock.enterpriseToRevenue.fmt || 0,
        };
      })
      .sort((a: any, b: any) => a.unrealizedGainPercent - b.unrealizedGainPercent);

    this.sortedEtfs = etfs
      .map((etf: any) => {
        const holding = this.dataService.portfolioHoldings[etf.symbol];
        return {
          ...etf,
          ...holding,
          symbol: etf.symbol,
          annualReportExpenseRatio: etf.profile.feesExpensesInvestment.annualReportExpenseRatio.fmt,
          navPrice: etf.navPrice.fmt,
          trailingPE: etf.trailingPE.fmt,
          ytdReturn: etf.fundPerformance.trailingReturns.ytd.fmt,
          '1monthReturn': etf.fundPerformance.trailingReturns.oneMonth.fmt,
          '3monthReturn': etf.fundPerformance.trailingReturns.threeMonth.fmt,
          '1YearReturn': etf.fundPerformance.trailingReturns.oneYear.fmt,
          threeYearReturn: etf.fundPerformance.trailingReturns.threeYear.fmt,
          fiveYearReturn: etf.fundPerformance.trailingReturns.fiveYear.fmt,
          tenYearReturn: etf.fundPerformance.trailingReturns.tenYear.fmt,
          beta3Year: etf.beta3Year.raw,
          totalAssets: etf.totalAssets.fmt,
        };
      })
      .sort((a: any, b: any) => a.unrealizedGainPercent - b.unrealizedGainPercent);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getCellColor(index: number, stock: any) {
    const key = this.columnDefs[index];
    const value = stock[key];
    return value < 0 || value[0] === "-" || value[1] === "-" ? "chocolate" : "";
  }
}
