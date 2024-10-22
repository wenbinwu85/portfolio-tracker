import { CurrencyPipe, NgStyle, PercentPipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { HelperService } from "../../../services/helper.service";

@Component({
  selector: "stock-ticker-chip",
  standalone: true,
  imports: [MatChipsModule, NgStyle, PercentPipe, CurrencyPipe],
  templateUrl: "./stock-ticker-chip.component.html",
  styleUrl: "./stock-ticker-chip.component.css",
})
export class StockTickerChipComponent implements OnInit {
  @Input({ required: true }) stock!: any;
  @Input() largeTicker?: boolean = false;
  priceKeyPrefix: any;
  priceColor = '';
  fontSize = '1rem';
  price = 0;
  priceChangePercent = 0;

  constructor(public helperService: HelperService) {}

  ngOnInit() {
    this.priceKeyPrefix = this.helperService.getPriceKeyPrefix();
    this.priceColor = this.helperService.getStockPriceColor(this.stock.symbol);
    this.fontSize = this.largeTicker ? '1.5rem' : '1rem';
    this.price = this.stock[this.priceKeyPrefix + 'Price']?.fmt || this.stock.regularMarketPrice.fmt;
    this.priceChangePercent = this.stock[this.priceKeyPrefix + 'ChangePercent']?.fmt || this.stock.regularMarketChangePercent.fmt;
  }
}
