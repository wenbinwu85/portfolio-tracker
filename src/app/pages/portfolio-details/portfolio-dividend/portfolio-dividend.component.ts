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
import { StockTickerButtonsComponent } from "../../../shared/components/stock/stock-ticker-buttons/stock-ticker-buttons.component";
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
    StockTickerButtonsComponent,
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
  portfolioData: any;
  browser = "";
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
    (stock: any) =>
      "$" + (stock.dividendRate?.fmt || stock.dividendRate.toFixed(2)),
    (stock: any) => stock.trailingAnnualDividendRate?.fmt || "N/A",
    (stock: any) =>
      stock.dividendYield?.fmt || (stock.dividendYield * 100).toFixed(2) + "%",
    (stock: any) => stock.trailingAnnualDividendYield?.fmt || "N/A",
    (stock: any) => stock.fiveYearAvgDividendYield?.fmt || "N/A",
    (stock: any) => stock.payoutRatio?.fmt || "N/A",
    (stock: any) =>
      stock.quoteType === "EQUITY" && stock.freeCashflowPayoutRatio !== 0
        ? `${(stock.freeCashflowPayoutRatio * 100).toFixed(2)}%`
        : "N/A",
    (stock: any) => stock.lastDividendValue?.fmt || "N/A",
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
      .filter(
        (stock: any) => stock.dividendYield?.raw > 0 || stock.dividendYield > 0
      )
      .map((stock: any) => {
        return {
          ...this.portfolioHoldings[stock.symbol],
          ...stock,
        };
      });
    this.selectedSymbol = this.dataSource.data[0].symbol;

    this.dataSource.data.forEach((stock: any) => {
      this.pieChartData.push({
        name: stock.symbol,
        value: stock.dividendIncome,
      });
    });
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
  }

  onSelect(symbol: string): void {
    this.updateChart(symbol);
  }
}
