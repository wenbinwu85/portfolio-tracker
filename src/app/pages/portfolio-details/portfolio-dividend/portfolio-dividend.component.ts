import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSort, MatSortModule } from "@angular/material/sort";
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from "@angular/material/table";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { EChartsOption } from "echarts";
import { EchartsVerticalBarChartComponent } from "../../../shared/components/charts/echart/echarts-vertical-bar-chart/echarts-vertical-bar-chart.component";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { StockNameCardComponent } from "../../../shared/components/stock/stock-name-card/stock-name-card.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-dividend",
  templateUrl: "./portfolio-dividend.component.html",
  styleUrls: ["./portfolio-dividend.component.css"],
  standalone: true,
  imports: [
    ContainerCardComponent,
    EchartsVerticalBarChartComponent,
    InfoCardComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    NgxChartsModule,
    StockNameCardComponent,
  ],
})
export class PortfolioDividendComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  monthStrings: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  dividendPayoutMonths: any = {
    AAPL: [2, 5, 8, 11],
    ABBV: [1, 4, 7, 10],
    ARCC: [3, 6, 9, 12],
    CVS: [1, 4, 7, 10],
    DIS: [7, 12],
    DLR: [3, 6, 9, 12],
    DVN: [3, 6, 9, 12],
    ENB: [2, 5, 8, 11],
    EPD: [1, 4, 7, 10],
    ET: [2, 5, 8, 10],
    GILD: [3, 6, 9, 12],
    MO: [3, 6, 9, 12],
    MSFT: [2, 5, 8, 11],
    NKE: [3, 6, 9, 12],
    O: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    PFE: [5, 7, 11, 1],
    SBUX: [2, 5, 8, 11],
    SCHD: [3, 6, 9, 12],
    SPG: [3, 6, 9, 12],
    TPVG: [3, 6, 9, 12],
    VICI: [3, 6, 9, 12],
    VYM: [3, 6, 9, 12],
  };
  portfolioHoldings: any;
  portfolioData: any;
  browser = "";
  dividendIncome = 0;
  portfolioYieldOnCost = 0;
  selectedSymbol = "O";
  selectedSymbolLabel = "";
  infoCards: any[] = [];
  dividendLineChartData: any = [];
  dividendChartColorScheme = { domain: ["teal"] } as Color;
  currentMonth = new Date().getMonth();
  dividendIncomeChartData: any[] = Array.from({ length: 12 }, (_, index) => {
    return {
      name: index,
      series: [],
    };
  });
  dividendProjectionChartData: any[] = Array.from(
    { length: 12 },
    (_, index) => {
      return {
        name: index,
        series: [],
      };
    }
  );
  pieChartData: any = [];
  echartOptions!: EChartsOption;
  echartUpdateOptions: any = {
    yAxis: {},
    xAxis: { data: [] },
    series: [{ data: [] }],
  };
  dataSource = new MatTableDataSource<any>();
  headers = [
    "Symbol",
    "Dividend Income",
    "Yield on Cost",
    "Dividend Rate",
    "Dividend Rate (TTM)",
    "Dividend Yield",
    "Dividend Yield (TTM)",
    "5Y Avg. Yield",
    "Payout Ratio",
    "FCF Payout Ratio",
    "Last Dividend Paid",
    "Ex-dividend Date",
    "Dividend Date",
  ];
  columnDefs = [
    "symbol",
    "dividendIncome",
    "yieldOnCost",
    "dividendRate",
    "trailingAnnualDividendRate",
    "dividendYield",
    "trailingAnnualDividendYield",
    "fiveYearAvgDividendYield",
    "payoutRatio",
    "freeCashflowPayoutRatio",
    "lastDividendValue",
    "exDividendDate",
    "dividendDate",
  ];
  cells: Function[] = [
    (stock: any) => "",
    (stock: any) => `$${stock.dividendIncome.toFixed(2)}`,
    (stock: any) => `${(stock.yieldOnCost * 100).toFixed(2)}%`,
    (stock: any) => '$' + (stock.dividendRate?.fmt || stock.dividendRate.toFixed(2)),
    (stock: any) => stock.trailingAnnualDividendRate?.fmt || 'N/A',
    (stock: any) => stock.dividendYield?.fmt || stock.dividendYield * 100 + '%', 
    (stock: any) => stock.trailingAnnualDividendYield?.fmt || 'N/A',
    (stock: any) => stock.fiveYearAvgDividendYield?.fmt || 'N/A',
    (stock: any) => stock.payoutRatio?.fmt || 'N/A',
    (stock: any) =>
      stock.quoteType === "EQUITY" && stock.freeCashflowPayoutRatio !== 0
        ? `${(stock.freeCashflowPayoutRatio * 100).toFixed(2)}%`
        : "N/A",
    (stock: any) => stock.lastDividendValue?.fmt || 'N/A',
    (stock: any) =>
      stock.calendarEvents?.exDividendDate
        ? new Date(stock.calendarEvents.exDividendDate?.fmt).toDateString()
        : "N/A",
    (stock: any) =>
      stock.calendarEvents?.dividendDate
        ? new Date(stock.calendarEvents.dividendDate?.fmt).toDateString()
        : "N/A",
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;
    this.dataSource.data = this.dataService.portfolioDataArray
      .filter((stock: any) => (stock.dividendYield?.raw > 0) || (stock.dividendYield > 0))
      .map((stock: any) => {
        return {
          ...this.portfolioHoldings[stock.symbol],
          ...stock,
        };
      });

    this.dataSource.data.forEach((stock: any) => {
      this.pieChartData.push({
        name: stock.symbol,
        value: stock.dividendIncome,
      });

      if (stock.calendarEvents?.dividendDate) {
        const calEvents = stock.calendarEvents;
        const divDate = new Date(calEvents.dividendDate.fmt);
        const month = divDate.getMonth();
        if (month >= new Date().getMonth()) {
          this.dividendIncomeChartData[month].series.push({
            name: `${stock.symbol} | ${divDate.toDateString()}`,
            value: stock.lastDividendValue?.raw * stock.shares,
          });
        }
      }

      this.dividendPayoutMonths[stock.symbol.toUpperCase()].forEach(
        (month: number, _: any, arr: any[]) => {
          const idx = month - 1;
          const divRate = stock.dividendRate?.raw || stock.dividendRate;
          const divAmount = divRate / arr.length;
          this.dividendProjectionChartData[idx].series.push({
            name: `${stock.symbol} | ${stock.shortName}`,
            value: stock.shares * divAmount,
          });
        }
      );
    });

    // this.dividendIncomeChartData.forEach(
    //   (month, idx) => (month.name = this.monthStrings[idx])
    // );
    // this.dividendIncomeChartData = this.dividendIncomeChartData.filter(
    //   (month) => month.series.length > 0
    // );
    // this.dividendProjectionChartData.forEach(
    //   (month, idx) => (month.name = this.monthStrings[idx])
    // );

    this.dividendIncome = this.portfolioHoldings.dividendIncome;
    this.portfolioYieldOnCost = this.portfolioHoldings.yieldOnCost;
    this.browser = this.getBrowserName();
    this.setInfoCards();
    this.updateChart(this.selectedSymbol, false);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
        value: this.dividendIncome.toFixed(4),
        valueType: "currency",
        subtitle: "Projected Annual Income",
        color: null,
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 4).toFixed(4),
        valueType: "currency",
        subtitle: "Average Quarterly Income",
        color: null,
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 12).toFixed(4),
        valueType: "currency",
        subtitle: "Average Monthly Income",
        color: "teal",
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 365).toFixed(4),
        valueType: "currency",
        subtitle: "Average Daily Income",
        color: null,
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 8765.81).toFixed(4),
        valueType: "currency",
        subtitle: "Average Hourly Income",
        color: null,
      },
      {
        icon: "payments",
        value: (this.dividendIncome / 525948.766).toFixed(4),
        valueType: "currency",
        subtitle: "Average Income Per Minute",
        color: null,
      },
      {
        icon: "percent",
        value: this.portfolioYieldOnCost.toFixed(4),
        valueType: "percentage",
        subtitle: "Portfolio YOC",
        color: "teal",
      },
    ];
  }

  updateChart(symbol: string, scroll: boolean = true) {
    let options: any = {
      title: {
        text: "",
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

    const stock = this.dataSource.data.filter(
      (stock: any) => stock.symbol === symbol
    )[0];

    let divData: any = {
      name: `${stock.symbol} | ${stock.shortName}`,
      series: [],
    };

    const divHis = this.dataService.portfolioDividendHistory[stock.symbol];

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
    this.selectedSymbol = stock.symbol;
    this.selectedSymbolLabel = `
      ${stock.symbol} | 
      ${stock.longName} | 
      ${stock.profile?.sector || "ETF"} |
      ${stock.profile?.industry || "ETF"}
    `;

    // if (scroll) {
    //   window.scroll({
    //     top: 800,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // }
  }

  onSelect(data: any): void {
    const symbol = data.name || data;
    this.updateChart(symbol);
  }

  onActivate(data: any): void {}

  onDeactivate(data: any): void {}
}
