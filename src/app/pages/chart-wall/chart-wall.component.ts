import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { MarketChartsComponent } from './market-charts/market-charts.component';
import { PortfolioChartsComponent } from './portfolio-charts/portfolio-charts.component';

@Component({
  selector: 'app-chart-wall',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MarketChartsComponent,
    PortfolioChartsComponent
  ],
  templateUrl: './chart-wall.component.html',
  styleUrls: ['./chart-wall.component.css'],
})
export class ChartWallComponent {}
