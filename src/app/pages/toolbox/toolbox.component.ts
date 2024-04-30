import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { TvAdvancedChartWidgetComponent } from "../../shared/components/tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component";
import { DataService } from "../../shared/services/data.service";
import { TvHeatmapWidgetComponent } from "../../shared/components/tradingview/tv-heatmap-widget/tv-heatmap-widget.component";
import { WallmineChartComponent } from "../../shared/components/charts/wallmine-chart/wallmine-chart.component";
import { MatDividerModule } from "@angular/material/divider";
import { TvSingleQuoteWidgetComponent } from "../../shared/components/tradingview/tv-single-quote-widget/tv-single-quote-widget.component";

@Component({
  selector: "app-toolbox",
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    NgFor,
    NgIf,
    TvAdvancedChartWidgetComponent,
    TvHeatmapWidgetComponent,
    TvSingleQuoteWidgetComponent,
    WallmineChartComponent,
  ],
  templateUrl: "./toolbox.component.html",
  styleUrls: ["./toolbox.component.css"],
})
export class ToolboxComponent implements OnInit {
  symbols: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.symbols = this.dataService.portfolioSymbols;
  }
}
