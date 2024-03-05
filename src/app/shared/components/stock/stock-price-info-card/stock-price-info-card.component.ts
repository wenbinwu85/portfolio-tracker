import {
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  JsonPipe,
  NgIf,
  NgStyle,
  PercentPipe,
} from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DataService } from "../../../../shared/services/data.service";
import { StockDayPriceRangeComponent } from "../stock-day-price-range/stock-day-price-range.component";
import { StockNameCardComponent } from "../stock-name-card/stock-name-card.component";

@Component({
  selector: "stock-price-info-card",
  templateUrl: "./stock-price-info-card.component.html",
  styleUrls: ["./stock-price-info-card.component.css"],
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    CurrencyPipe,
    JsonPipe,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    NgIf,
    NgStyle,
    PercentPipe,
    StockDayPriceRangeComponent,
    StockNameCardComponent,
  ],
})
export class StockPriceInfoCardComponent {
  @Input({ required: true }) stock!: any;
  technicalInsights$!: Observable<any>;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.technicalInsights$ = this.dataService
      .getTechnicalInsights(this.stock.symbol)
      .pipe(map((data: any) => data[this.stock.symbol]));
  }

  getTargetPriceRangeColor(stock: any) {
    return stock.regularMarketPrice > stock.targetMeanPrice
      ? "primary"
      : "accent";
  }

  getTooltip() {
    const price = this.stock.regularMarketPrice;
    const target = this.stock.targetMeanPrice;
    let hint = "";
    if (this.getTargetPriceRangeColor(this.stock) === "primary") {
      hint = `Price $${price} is above mean target $${target} by $${(
        price - target
      ).toFixed(2)}.`;
    } else {
      hint = `Price $${price} is below mean target $${target} by $${(
        target - price
      ).toFixed(2)}.`;
    }
    return hint;
  }

  openInfoSheet() {
    this.router.navigate(["stock/" + this.stock.symbol]);
  }

  getDiscountColor(discount: string) {
    return discount.includes("-") ? "orangered" : "seagreen";
  }

  getValuationColor(valuation: string) {
    switch (valuation) {
      case "Overvalued":
        return "orangered";
      case "Undervalued":
        return "seagreen";
      default:
        return "navy";
    }
  }

  get50DMAColor(stock: any) {
    return stock.fiftyDayAverage < stock.regularMarketPrice
      ? "seagreen"
      : "orangered";
  }

  get200DMAColor(stock: any) {
    return stock.twoHundredDayAverage < stock.regularMarketPrice
      ? "seagreen"
      : "orangered";
  }

  get50DMATrendIcon(stock: any) {
    return stock.fiftyDayAverage < stock.regularMarketPrice
      ? "trending_up"
      : "trending_down";
  }

  get200DMATrendIcon(stock: any) {
    return stock.twoHundredDayAverage < stock.regularMarketPrice
      ? "trending_up"
      : "trending_down";
  }
}
