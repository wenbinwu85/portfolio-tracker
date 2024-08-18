import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import {
  WallmineChartComponent,
} from '../../shared/components/charts/wallmine-chart/wallmine-chart.component';
import {
  ContainerCardComponent,
} from '../../shared/components/container-card/container-card.component';
import {
  InfoCardComponent,
} from '../../shared/components/info-card/info-card.component';
import {
  StockPriceMovementChartsComponent,
} from '../../shared/components/stock/stock-price-movement-charts/stock-price-movement-charts.component';
import { AlpacaApiService } from '../../shared/services/alpaca-api.service';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: "app-portfolio-main",
  templateUrl: "./portfolio-main.component.html",
  styleUrls: ["./portfolio-main.component.css"],
  standalone: true,
  imports: [
    ContainerCardComponent,
    InfoCardComponent,
    MatChipsModule,
    MatTabsModule,
    StockPriceMovementChartsComponent,
    WallmineChartComponent,
  ],
})
export class PortfolioMainComponent {
  selectedChart = 1;
  gradingHistory: any[] = [];

  constructor(
    private alpacaApiService: AlpacaApiService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.portfolioDataArray.forEach((stock: any) => {
      if (stock.quoteType === 'EQUITY') { 
        const gradingHistory = Object.values(stock.upgradeDowngradeHistory).map((grade: any) => {
          const icons = {
            up: 'thumb_up',
            down: 'thumb_down',
            main: 'thumbs_up_down',
            reit: 'thumbs_up_down',
          } as any;
          grade.symbol = stock.symbol;
          grade.icon = icons[grade.action];
          return grade
        });
        this.gradingHistory.push(...gradingHistory)
      }
    });
    this.gradingHistory.sort((a, b) => b.epochGradeDate - a.epochGradeDate)
    this.gradingHistory = this.gradingHistory.slice(0, 50)
    console.table(this.gradingHistory);
  }

  selectChart(chartId: number) {
    this.selectedChart = chartId;
  }
}
