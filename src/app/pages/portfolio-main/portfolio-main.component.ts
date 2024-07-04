import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import {
  WallmineChartComponent,
} from '../../shared/components/charts/wallmine-chart/wallmine-chart.component';
import {
  ContainerCardComponent,
} from '../../shared/components/container-card/container-card.component';
import {
  StockPriceMovementChartsComponent,
} from '../../shared/components/stock/stock-price-movement-charts/stock-price-movement-charts.component';
import { NgIf } from '@angular/common';

@Component({
  selector: "app-portfolio-main",
  templateUrl: "./portfolio-main.component.html",
  styleUrls: ["./portfolio-main.component.css"],
  standalone: true,
  imports: [
    ContainerCardComponent,
    MatChipsModule,
    NgIf,
    StockPriceMovementChartsComponent,
    WallmineChartComponent,
  ],
})
export class PortfolioMainComponent {
  selectedChart = 1;

  displayChart(chartId: number) { 
    this.selectedChart = chartId;
  }
}
