import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { WallmineChartComponent } from "../../../shared/components/charts/wallmine-chart/wallmine-chart.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-charts",
  templateUrl: "./portfolio-charts.component.html",
  styleUrls: ["./portfolio-charts.component.css"],
  standalone: true,
  imports: [NgFor, WallmineChartComponent],
})
export class PortfolioChartsComponent {
  symbols: string[] = [];

  constructor(private dataService: DataService) {
    this.symbols = this.dataService.portfolioSymbols;
  }
}
