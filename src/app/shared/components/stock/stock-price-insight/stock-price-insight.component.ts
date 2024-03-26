import {
  AsyncPipe,
  CurrencyPipe,
  NgIf,
  NgStyle,
  PercentPipe,
} from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { catchError, map, Observable } from "rxjs";
import { DataService } from "../../../services/data.service";
import { StockDayPriceRangeComponent } from "../stock-day-price-range/stock-day-price-range.component";

@Component({
  selector: "stock-price-insight",
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    NgIf,
    NgStyle,
    PercentPipe,
    StockDayPriceRangeComponent,
  ],
  templateUrl: "./stock-price-insight.component.html",
  styleUrl: "./stock-price-insight.component.css",
})
export class StockPriceInsightComponent implements OnInit {
  @Input({ required: true }) symbol!: string;
  technicalInsights$!: Observable<any>;
  stockData: any;

  tableColumns = [
    "symbol",
    "support",
    "resistance",
    "stopLoss",
    "fiftyTwoWeekLow",
    "dayLow",
    "dayHigh",
    "fiftyTwoWeekHigh",
    "targetLowPrice",
    "targetMedianPrice",
    "targetHighPrice",
    "argusTarget",
    "tradingCentral",
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.technicalInsights$ = this.dataService
      .getTechnicalInsights(this.symbol, true)
      .pipe(
        map((response: any) => {
          if (response.status === 500) {
            throw `Api Error: ${this.symbol} - ${response.status} - ${response.message}`;
          } else {
            return response;
          }
        }),
        catchError((err: any) => {
          console.log(err);
          return this.dataService
            .getTechnicalInsights(this.symbol)
            .pipe(map((response: any) => response[this.symbol]));
        })
      );

    this.stockData = Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.symbol === this.symbol
    )[0] as any;

    console.log(this.stockData)
  }

  getTableDataSource() {
    let dataSource = new MatTableDataSource<any>();
    dataSource.data = [this.stockData];
    return dataSource;
  }
}
