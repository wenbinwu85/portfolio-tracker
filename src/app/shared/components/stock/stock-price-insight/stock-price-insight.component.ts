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
import { DataService } from "../../../services/data.service";
import { StockDayPriceRangeComponent } from "../stock-day-price-range/stock-day-price-range.component";
import { StockTickerChipComponent } from "../stock-ticker-chip/stock-ticker-chip.component";

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
    StockTickerChipComponent,
  ],
  templateUrl: "./stock-price-insight.component.html",
  styleUrl: "./stock-price-insight.component.css",
})
export class StockPriceInsightComponent implements OnInit {
  @Input({ required: true }) symbol!: string;
  technicalInsights!: any;
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
    this.technicalInsights = this.dataService.portfolioTechnicalInsights[this.symbol];
    this.stockData = this.dataService.portfolioData[this.symbol];
  }

  getTableDataSource() {
    let dataSource = new MatTableDataSource<any>();
    dataSource.data = [this.stockData];
    return dataSource;
  }
}
