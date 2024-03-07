import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { PriceMovementChartsComponent } from "../../shared/components/charts/price-movement-charts/price-movement-charts.component";
import { StockPLineComponent } from "../../shared/components/stock/stock-p-line/stock-p-line.component";

@Component({
  selector: "app-portfolio-main",
  templateUrl: "./portfolio-main.component.html",
  styleUrls: ["./portfolio-main.component.css"],
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    PriceMovementChartsComponent,
    StockPLineComponent
  ],
})
export class PortfolioMainComponent {}
