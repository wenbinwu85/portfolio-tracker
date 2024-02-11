import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { PriceMovementChartsComponent } from '../../shared/components/charts/price-movement-charts/price-movement-charts.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { TvAdvancedChartWidgetComponent } from '../../shared/components/tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css'],
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    PortfolioSummaryComponent,
    PriceMovementChartsComponent,
    TvAdvancedChartWidgetComponent,
  ],
})
export class PortfolioMainComponent {}
