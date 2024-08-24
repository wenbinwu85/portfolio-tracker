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

  constructor(public helperService: HelperService) {}

  ngOnInit() {
    this.priceKeyPrefix = this.helperService.getPriceKeyPrefix();
  }
}
