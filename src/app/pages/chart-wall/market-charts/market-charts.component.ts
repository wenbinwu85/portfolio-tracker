import { Component } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { WallmineChartComponent } from "../../../shared/components/charts/wallmine-chart/wallmine-chart.component";

@Component({
  selector: "market-charts",
  templateUrl: "./market-charts.component.html",
  styleUrls: ["./market-charts.component.css"],
  standalone: true,
  imports: [MatDividerModule, MatIconModule, WallmineChartComponent],
})
export class MarketChartsComponent {}
