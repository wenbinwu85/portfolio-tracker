import { NgIf, NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";
import { WallmineChartComponent } from "../../../shared/components/charts/wallmine-chart/wallmine-chart.component";
import { DataService } from "../../../shared/services/data.service";
import { TvSingleQuoteWidgetComponent } from "../../../shared/components/tradingview/tv-single-quote-widget/tv-single-quote-widget.component";

@Component({
  selector: "portfolio-charts",
  templateUrl: "./portfolio-charts.component.html",
  styleUrls: ["./portfolio-charts.component.css"],
  standalone: true,
  imports: [NgIf, NgFor, WallmineChartComponent, TvSingleQuoteWidgetComponent],
})
export class PortfolioChartsComponent {
  @Input() tradingview = false;
  symbols: string[] = [];

  constructor(private dataService: DataService) {
    this.symbols = this.dataService.portfolioSymbols;
  }
}
