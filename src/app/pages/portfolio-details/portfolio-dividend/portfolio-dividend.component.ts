import { NgFor, NgIf } from "@angular/common";
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatSort, MatSortModule } from "@angular/material/sort";
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from "@angular/material/table";
import { Subscription } from "rxjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { EChartsOption } from "echarts";
import { EchartComponent } from "../../../shared/components/charts/echart/echart.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { StockTickerNameComponent } from "../../../shared/components/stock/stock-ticker-name/stock-ticker-name.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-dividend",
  templateUrl: "./portfolio-dividend.component.html",
  styleUrls: ["./portfolio-dividend.component.css"],
  standalone: true,
  imports: [
    EchartComponent,
    InfoCardComponent,
    MatSortModule,
    MatTableModule,
    NgFor,
    NgIf,
    NgxChartsModule,
    StockTickerNameComponent,
  ],
})
export class PortfolioDividendComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  browser = "";
  dividendIncome = 0;
  portfolioYieldOnCost = 0;
  selectedSymbol = "";
  infoCards: any[] = [];
  dividendSubscription$!: Subscription;
  dividendLineChartData: any = [];
  echartOptions!: EChartsOption;
  echartUpdateOptions: any = {
    yAxis: {},
    xAxis: { data: [] },
    series: [{ data: [] }],
  };
  dataSource = new MatTableDataSource<any>();
  headers = [
    "Symbol",
    "Dividend Rate",
    "Dividend Rate (TTM)",
    "Yield",
    "Yield (TTM)",
    "5Y Avg. Yield",
    "Payout Ratio",
    "Free Cash Flow Payout Ratio",
    "Last Dividend Paid",
    "Ex-dividend Date",
    "Dividend Date",
  ];
  columnDefs = [
    "symbol",
    "dividendRate",
    "trailingAnnualDividendRate",
    "dividendYield",
    "trailingAnnualDividendYield",
    "fiveYearAvgDividendYield",
    "payoutRatio",
    "fcfPayoutRatio",
    "lastDividendValue",
    "exDividendDate",
    "dividendDate",
  ];
  cells: Function[] = [
    (stock: any) => "",
    (stock: any) => `$${stock.dividendRate?.toFixed(2)}`,
    (stock: any) => `$${stock.trailingAnnualDividendRate?.toFixed(2) || 0}`,
    (stock: any) => `${(stock.dividendYield * 100 || 0).toFixed(2)}%`,
    (stock: any) =>
      `${(stock.trailingAnnualDividendYield * 100 || 0).toFixed(2)}%`,
    (stock: any) => `${(stock.fiveYearAvgDividendYield || 0).toFixed(2)}%`,
    (stock: any) => `${(stock.payoutRatio * 100 || 0).toFixed(2)}%`,
    (stock: any) =>
      (stock.quoteType === 'EQUITY' && stock.fcfPayoutRatio !== 0)
        ? `${(stock.fcfPayoutRatio * 100).toFixed(2)}%`
        : 'N/A',
    (stock: any) => `$${stock.lastDividendValue?.toFixed(2) || 0}`,
    (stock: any) =>
      stock.calendarEvents?.exDividendDate
        ? new Date(stock.calendarEvents.exDividendDate).toDateString()
        : "N/A",
    (stock: any) =>
      stock.calendarEvents?.dividendDate
        ? new Date(stock.calendarEvents.dividendDate).toDateString()
        : "N/A",
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.browser = this.getBrowserName();
    this.dataSource.data = Object.values(this.dataService.portfolioData).filter(
      (a: any) => a.dividendYield
    );
    this.dividendIncome = this.dataService.portfolioHoldings?.portfolioDividendIncome;
    this.portfolioYieldOnCost = this.dataService.portfolioHoldings?.portfolioYieldOnCost;
    this.setInfoCards();
    this.updateChart("SCHD");
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.dividendSubscription$.unsubscribe();
  }

  getBrowserName(): string {
    const agent = window?.navigator.userAgent.toLowerCase();
    const browser =
      agent.indexOf("edge") > -1
        ? "Microsoft Edge"
        : agent.indexOf("edg") > -1
        ? "Chromium-based Edge"
        : agent.indexOf("opr") > -1
        ? "Opera"
        : agent.indexOf("chrome") > -1
        ? "Chrome"
        : agent.indexOf("trident") > -1
        ? "Internet Explorer"
        : agent.indexOf("firefox") > -1
        ? "Firefox"
        : agent.indexOf("safari") > -1
        ? "Safari"
        : "other";
    return browser;
  }

  setInfoCards() {
    this.infoCards = [
      {
        icon: "payments",
        value: this.dividendIncome.toFixed(2),
        valueType: "currency",
        subtitle: "Projected Annual Income",
        color: null,
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 4).toFixed(2),
        valueType: "currency",
        subtitle: "Average Quarterly Income",
        color: null,
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 12).toFixed(2),
        valueType: "currency",
        subtitle: "Average Monthly Income",
        color: 'forestgreen',
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 365).toFixed(2),
        valueType: "currency",
        subtitle: "Average Daily Income",
        color: null,
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 8760).toFixed(2),
        valueType: "currency",
        subtitle: "Average Hourly Income",
        color: null,
      },
      {
        icon: "percent",
        value: this.portfolioYieldOnCost.toFixed(4),
        valueType: "percentage",
        subtitle: "Portfolio YOC",
        color: "forestgreen",
      },
    ];
  }

  updateChart(symbol: string) {
    this.dividendSubscription$ = this.dataService
      .getDividendHistory(symbol)
      .subscribe((divHis: any) => {
        let options: any = {
          title: {
            text: "Dividend History",
          },
          legend: {
            data: ["Dividend $"],
          },
          tooltip: {},
          xAxis: {
            data: [],
            splitLine: {
              show: false,
            },
          },
          yAxis: {},
          series: [
            {
              name: "Dividend $",
              type: "bar",
              data: [],
              emphasis: {
                focus: "series",
              },
              animationDelay: function (idx: any) {
                return idx * 10;
              },
            },
          ],
          animationEasing: "elasticOut",
          animationDelayUpdate: function (idx: any) {
            return idx * 5;
          },
        };

        const stock = this.dataSource.data.filter((stock: any) => stock.symbol === symbol)[0];
        let divData: any = {
          name: stock.longName,
          series: [],
        };

        Object.entries(divHis).forEach((item: any) => {
          divData.series.push({
            name: new Date(item[0].split("-").join(" ")),
            value: +item[1],
          });

          options.xAxis.data.push(item[0].split("-").join(" "));
          options.series[0].data.push(+item[1]);
        });

        this.echartOptions = options;
        this.dividendLineChartData = [divData];
        this.selectedSymbol = `${stock.symbol} | ${stock.longName} | ${stock.profile?.sector || "ETF"}`;
      });

    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }
}
