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
  PortfolioQuotesComponent,
} from '../../shared/components/portfolio/portfolio-quotes/portfolio-quotes.component';
import { AlpacaApiService } from '../../shared/services/alpaca-api.service';
import { DataService } from '../../shared/services/data.service';
import { TvMiniChartWidgetComponent } from '../../shared/components/tradingview/tv-mini-chart-widget/tv-mini-chart-widget.component';

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
    PortfolioQuotesComponent,
    WallmineChartComponent,
    TvMiniChartWidgetComponent,
  ],
})
export class PortfolioMainComponent {
  selectedChart = 1;
  gradingHistory: any[] = [];
  insiderActivities: any[] = [];

  constructor(
    private alpacaApiService: AlpacaApiService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.portfolioDataArray.forEach((stock: any) => {
      const icons = {
        up: 'thumb_up',
        down: 'thumb_down',
        main: 'thumbs_up_down',
        reit: 'thumbs_up_down',
      } as any;
      if (stock.quoteType === 'EQUITY') { 
        const gradingHistory = Object.values(stock.upgradeDowngradeHistory)
          .filter((grade: any) => new Date(grade.epochGradeDate * 1000).getFullYear() === new Date().getFullYear())
          .map((grade: any) => {
            grade.symbol = stock.symbol;
            grade.icon = icons[grade.action];
            if (grade.action === 'up') { 
              grade.color = 'teal';
            }
            if (grade.action === 'down') { 
              grade.color = 'chocolate';
            }
            return grade
          });
        this.gradingHistory.push(...gradingHistory)

        const activities = stock.insiderTransactions;
        if (activities.length > 0) { 
          this.insiderActivities.push(
            ...activities
              .filter((activity: any) =>
                new Date(activity.startDate.raw * 1000).getFullYear() === new Date().getFullYear() &&
                (activity.transactionText.startsWith('Purchase') || activity.transactionText.startsWith('Sale'))
              )
              .map((activity: any) => {
                activity.symbol = stock.symbol;
                if (activity.transactionText.startsWith('Purchase')) {
                  activity.icon = 'sentiment_very_satisfied';
                  activity.color = 'teal';
                } else if (activity.transactionText.startsWith('Sale')) {
                  activity.icon = 'sentiment_very_dissatisfied';
                  activity.color = 'chocolate';
                }
                return activity;
              })
          )
        } 
      }
    });
    this.gradingHistory.sort((a, b) => b.epochGradeDate - a.epochGradeDate);
    this.insiderActivities.sort((a, b) => b.startDate.raw - a.startDate.raw);
  }

  selectChart(chartId: number) {
    this.selectedChart = chartId;
  }
}
