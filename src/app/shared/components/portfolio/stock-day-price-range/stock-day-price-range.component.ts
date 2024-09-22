import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: "stock-day-price-range",
  templateUrl: "./stock-day-price-range.component.html",
  styleUrls: ["./stock-day-price-range.component.css"],
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatChipsModule, MatSliderModule],
})
export class StockDayPriceRangeComponent {
  @Input({ required: true }) min!: number;
  @Input({ required: true }) max!: number;
  @Input({ required: true }) lowThumbValue!: number;
  @Input({ required: true }) highThumbValue!: number;
  tooltip = "";

  ngOnInit() {
    this.tooltip = `$${this.lowThumbValue} - $${this.highThumbValue}`;
  }
}
