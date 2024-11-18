import {
  AsyncPipe,
  CurrencyPipe,
  NgStyle,
  PercentPipe,
} from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { StockPriceColorsEnum } from "../../../model/colors.model";
import { DataService } from "../../../services/data.service";
import { StockPriceRangeComponent } from "../stock-price-range/stock-price-range.component";
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
    NgStyle,
    PercentPipe,
    StockPriceRangeComponent,
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
  ];

  constructor(private dataService: DataService) { };

  ngOnInit() {
    this.technicalInsights = this.dataService.getTickerTechnicalInsights( this.symbol);
    this.stockData = this.dataService.getTickerData(this.symbol);
  }

  getTableDataSource() {
    let dataSource = new MatTableDataSource<any>();
    dataSource.data = [this.stockData];
    return dataSource;
  }

  getTargetPriceColor(stock: any, key: string) {
    return stock.regularMarketPrice?.raw < stock[key].raw
      ? StockPriceColorsEnum.Gain
      : StockPriceColorsEnum.Lost;
  }
}
