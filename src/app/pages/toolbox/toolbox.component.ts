import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ContainerCardComponent } from "../../shared/components/container-card/container-card.component";
import { TvAdvancedChartWidgetComponent } from "../../shared/components/tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component";
import { TvHeatmapWidgetComponent } from "../../shared/components/tradingview/tv-heatmap-widget/tv-heatmap-widget.component";
import { DataService } from "../../shared/services/data.service";
import { TvScreenerWidgetComponent } from "../../shared/components/tradingview/tv-screener-widget/tv-screener-widget.component";

@Component({
  selector: "app-toolbox",
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    TvAdvancedChartWidgetComponent,
    TvHeatmapWidgetComponent,
    TvScreenerWidgetComponent,
  ],
  templateUrl: "./toolbox.component.html",
  styleUrls: ["./toolbox.component.css"],
})
export class ToolboxComponent implements OnInit {
  symbols: string[] = [];
  heatMapType: any = 'stock';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.symbols = this.dataService.portfolioSymbols;
  }

  selectHeatMap(type: any) { 
    this.heatMapType = type;
  }
}
