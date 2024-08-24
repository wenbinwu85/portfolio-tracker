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
import { StockNameCardComponent } from "../../../shared/components/portfolio/stock-name-card/stock-name-card.component";
import { PortfolioTickerButtonsComponent } from "../../../shared/components/portfolio/portfolio-ticker-buttons/portfolio-ticker-buttons.component";
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
    PortfolioTickerButtonsComponent,
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
  portfolioHoldings: any;
  browser = "";
  todayDate = new Date();
  dividendIncome = 0;
  portfolioYieldOnCost = 0;
  selectedSymbol: any;
  selectedSymbolLabel = "";
  infoCards: any[] = [];
  dividendLineChartData: any = [];
  dividendChartColorScheme = { domain: ["steelblue"] } as Color;
  currentMonth = new Date().getMonth();
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
    "Dividend Yield",
    "Dividend Yield (TTM)",
    "Dividend Rate",
    "Dividend Rate (TTM)",
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
    "dividendYield",
    "trailingAnnualDividendYield",
    "dividendRate",
    "trailingAnnualDividendRate",
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
    (stock: any) =>
      stock.dividendYield?.fmt || (stock.dividendYield * 100).toFixed(2) + "%",
    (stock: any) => stock.trailingAnnualDividendYield?.fmt || "--",
    (stock: any) =>
      "$" + (stock.dividendRate?.fmt || stock.dividendRate.toFixed(2)),
    (stock: any) => stock.trailingAnnualDividendRate?.fmt || "--",
    (stock: any) => stock.fiveYearAvgDividendYield?.fmt || "--",
    (stock: any) => stock.payoutRatio.toFixed(2) + "%",
    (stock: any) =>
      stock.quoteType === "EQUITY" && stock.freeCashflowPayoutRatio !== 0
        ? `${(stock.freeCashflowPayoutRatio * 100).toFixed(2)}%`
        : "--",
    (stock: any) => stock.lastDividendValue?.fmt || "--",
    (stock: any) => { 
      const divDate = stock.calendarEvents?.exDividendDate;
      if (divDate && divDate.raw * 1000 >= this.todayDate.valueOf()) {
        return new Date(divDate.fmt).toDateString()
      } else { 
        return "--"
      }
    },
    (stock: any) => { 
      const divDate = stock.calendarEvents?.dividendDate;
      if (divDate && divDate.raw * 1000 >= this.todayDate.valueOf()) {
        return new Date(divDate.fmt).toDateString()
      } else { 
        return "--"
      }
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.dividendIncome = this.portfolioHoldings.dividendIncome;
    this.portfolioYieldOnCost = this.portfolioHoldings.yieldOnCost;
    this.dataSource.data = this.dataService.portfolioDividendPayers
      .map((stock: any) => {
        return {
          ...this.portfolioHoldings[stock.symbol],
          ...stock,
          payoutRatio: stock.payoutRatio?.raw * 100 || 0
        };
      });
    this.selectedSymbol = this.dataSource.data[0].symbol;

    this.dataSource.data.forEach((stock: any) => {
      this.pieChartData.push({
        name: stock.symbol,
        value: stock.dividendIncome,
      });
    });
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
        value: this.dividendIncome.toFixed(4),
        valueType: "currency",
        subtitle: "Projected Annual Income",
        color: null,
      },
      {
        value: (this.dividendIncome / 4).toFixed(4),
        valueType: "currency",
        subtitle: "Average Quarterly Income",
        color: null,
      },
      {
        value: (this.dividendIncome / 12).toFixed(4),
        valueType: "currency",
        subtitle: "Average Monthly Income",
        color: "teal",
      },
      {
        value: (this.dividendIncome / 365).toFixed(4),
        valueType: "currency",
        subtitle: "Average Daily Income",
        color: null,
      },
      {
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

    const stock = this.dataSource.data.filter((stock: any) => stock.symbol === symbol)[0];
    let divData: any = {
      name: `${stock.symbol} | ${stock.shortName}`,
      series: [],
    };
    const divHis = this.dataService.getTickerDividendHistory(stock.symbol);
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
  }

  onSelect(symbol: string): void {
    this.updateChart(symbol);
  }

  getCellColor(stock: any, index: number) {
    switch (index) {
      case 8:
        return stock.payoutRatio < 80
          ? "teal"
          : "chocolate";
      case 9:
        return  stock.freeCashflowPayoutRatio > 0 && stock.freeCashflowPayoutRatio < 1
          ? "teal"
          : "chocolate";
      default:
        return "black";
    }
  }
}
