import { CurrencyPipe, NgIf, PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DataService } from '../../../shared/services/data.service';
import { InfoCardComponent } from '../../../shared/components/info-card/info-card.component';

@Component({
  selector: 'portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css'],
  standalone: true,
  imports: [
    CurrencyPipe,
    InfoCardComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    NgIf,
    NgxChartsModule,
    PercentPipe,
  ],
  
})
export class PortfolioSummaryComponent implements OnInit {
  portfolioData: any = null;
  portfolioYtdGain = 12345 // this.dataService.getPortfolioYtdGain();
  ytdDividendEarned = 12345 // this.dataService.getPortfolioYtdDividend();
  portfolioValueTarget = 0;
  portfolioValueGoalPercentage = 0;
  passiveIncomeTarget = 0;
  passiveIncomeGoalPercentage = 0;
  sectorsData: any = [];
  portfolioPercentBarChartData: any = [];
  allPortfolioPercentData: any = [];
  marketValueBarChartData: any[] = [];
  allMarketValueData: any[] = [];
  marketValueYMax = 0;
  unrealizedGainBarChartData: any[] = [];
  allUnrealizedGainData: any[] = [];
  unrealizedGainYMax = 0;
  dividendBarChartData: any[] = [];
  allDividendData: any[] = [];
  dividendYMax = 0;
  yocBarChartData: any[] = [];
  allYocData: any[] = [];
  yocYMax = 0;
  showResetButton = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioData = this.dataService.portfolioData;
    this.passiveIncomeTarget = this.portfolioData.dividendIncomeGoal;
    this.passiveIncomeGoalPercentage =
      this.portfolioData.dividendIncome / this.passiveIncomeTarget;
    this.portfolioValueTarget =
      this.passiveIncomeTarget / this.portfolioData.portfolioYieldOnCost;
    this.portfolioValueGoalPercentage =
      this.portfolioData.portfolioValue / this.portfolioValueTarget;

    let stocks = Object
      .values(this.portfolioData)
      .filter((value: any) => value.position !== undefined);

    // sectors
    let market_sectors: any = {};
    stocks.forEach((stock: any) => {
      if (market_sectors[stock.profile.sector]) {
        market_sectors[stock.profile.sector] += stock.position.marketValue;
      } else {
        market_sectors[stock.profile.sector] = stock.position.marketValue;
      }
    });
    market_sectors['ETF'] = market_sectors['undefined'];
    delete market_sectors['undefined'];
    Object.keys(market_sectors).forEach((sector: string) => {
      this.sectorsData.push({
        name: sector,
        value: market_sectors[sector],
      });
    });
    this.sectorsData.sort((a: any, b: any) => a.value - b.value);

    // market values
    stocks
      .sort((a: any, b: any) => a.position.marketValue - b.position.marketValue)
      .forEach((stock: any) => {
        this.allMarketValueData.push({
          name: stock.symbol,
          series: [
            {
              name: 'Cost Basis',
              value: stock.position.totalCost,
            },
            {
              name: 'Unrealized Gain',
              value: stock.position.unrealizedGain,
            },
          ],
          sector: stock.profile?.sector || 'ETF',
        });

        this.allPortfolioPercentData.push({
          name: stock.symbol,
          value:
            (stock.position?.marketValue / this.portfolioData.portfolioValue) *
            100,
          sector: stock.profile?.sector || 'ETF',
        });
      });
    this.marketValueBarChartData = this.allMarketValueData;
    this.portfolioPercentBarChartData = this.allPortfolioPercentData;

    // unrealized gain
    stocks
      .sort(
        (a: any, b: any) =>
          a.position.unrealizedGainPercent - b.position.unrealizedGainPercent
      )
      .forEach((stock: any) =>
        this.allUnrealizedGainData.push({
          name: stock.symbol,
          value: stock.position.unrealizedGainPercent.toFixed(2) || 0,
          sector: stock.profile?.sector || 'ETF',
        })
      );
    this.unrealizedGainBarChartData = this.allUnrealizedGainData;

    // dividend income
    stocks
      .sort(
        (a: any, b: any) =>
          a.position.dividendIncome - b.position.dividendIncome
      )
      .forEach((stock: any) =>
        this.allDividendData.push({
          name: stock.symbol,
          value: stock.position.dividendIncome,
          sector: stock.profile?.sector || 'ETF',
        })
      );
    this.dividendBarChartData = this.allDividendData;

    // yield on cost
    stocks
      .sort((a: any, b: any) => a.position.yieldOnCost - b.position.yieldOnCost)
      .forEach((stock: any) => {
        this.allYocData.push({
          name: stock.symbol,
          value: stock.position.yieldOnCost,
          sector: stock.profile?.sector || 'ETF',
        });
      });
    this.yocBarChartData = this.allYocData;
  }

  filterBySector(event: any) {
    if (event.name === 'all') {
      this.portfolioPercentBarChartData = this.allPortfolioPercentData;
      this.marketValueBarChartData = this.allMarketValueData;
      this.unrealizedGainBarChartData = this.allUnrealizedGainData;
      this.dividendBarChartData = this.allDividendData;
      this.yocBarChartData = this.allYocData;
      this.showResetButton = false;
      return;
    }

    this.showResetButton = true;
    this.portfolioPercentBarChartData = this.allPortfolioPercentData.filter(
      (data: any) => data.sector === event.name
    );
    this.marketValueBarChartData = this.allMarketValueData.filter(
      (data) => data.sector === event.name
    );
    this.unrealizedGainBarChartData = this.allUnrealizedGainData.filter(
      (data) => data.sector === event.name
    );
    this.dividendBarChartData = this.allDividendData.filter(
      (data) => data.sector === event.name
    );
    this.yocBarChartData = this.allYocData.filter(
      (data) => data.sector === event.name
    );
  }

  getTooltip(kind: string) {
    if (kind === 'passive') {
      return `Progress: ${(this.passiveIncomeGoalPercentage * 100).toFixed(4)}%`;
    } else if (kind === 'investment') {
      return `Progress: ${(this.portfolioValueGoalPercentage * 100).toFixed(4)}%`;
    } else {
      return '';
    }
  }
}
