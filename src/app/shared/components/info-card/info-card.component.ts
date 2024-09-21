import {
  CommonModule,
  CurrencyPipe,
  NgStyle,
  PercentPipe,
} from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DataService } from "../../services/data.service";
import { StockTickerChipComponent } from "../portfolio/stock-ticker-chip/stock-ticker-chip.component";

@Component({
  selector: "info-card",
  templateUrl: "./info-card.component.html",
  styleUrls: ["./info-card.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    NgStyle,
    PercentPipe,
    StockTickerChipComponent,
  ],
})
export class InfoCardComponent implements OnInit {
  @Input({ required: true }) value: number | string = 0;
  @Input({ required: true }) subtitle: string = "";
  @Input() icon?: string = "";
  @Input() subtitleChip?: boolean = false;
  @Input() date?: Date | string;
  @Input() additionalInfo?: string | number;
  @Input() valueType?: string = "number";
  @Input() color?: string;
  @Input() fontSize?: string = "1.5rem";
  borderStyle = "";
  stock: any;
  tickerChipTooltip = "";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.borderStyle = "1px solid ghostwhite";
    if (this.subtitleChip) {
      this.stock = this.dataService.portfolioData[this.subtitle];
      this.tickerChipTooltip =
        "Fwd PE: " +
        this.stock.forwardPE.fmt +
        " Fwd EPS:" +
        this.stock.forwardEps.fmt;
    }
  }

  getStyle() {
    return {
      color: this.color || "slategrey",
      "font-size": this.fontSize,
    };
  }
}
