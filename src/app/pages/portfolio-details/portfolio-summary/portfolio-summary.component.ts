import { CurrencyPipe, NgIf, PercentPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Color, NgxChartsModule, ScaleType } from "@swimlane/ngx-charts";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-summary",
  templateUrl: "./portfolio-summary.component.html",
  styleUrls: ["./portfolio-summary.component.css"],
  standalone: true,
  imports: [
    CurrencyPipe,
    InfoCardComponent,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    NgIf,
    NgxChartsModule,
    PercentPipe,
  ],
})
export class PortfolioSummaryComponent implements OnInit {
  portfolioHoldings: any;
  portfolioData: any;
  portfolioSymbols: any;
  portfolioValueTarget = 0;
  portfolioValueGoalPercentage = 0;
  passiveIncomeTarget = 12000;
  passiveIncomeGoalPercentage = 0;
  sectorsData: any = [];
  portfolioPercentBarChartData: any = [];
  portfolioPercentBarChartColorScheme = { domain: ['lightsteelblue'] } as Color;
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
  scaleType = ScaleType;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;
    this.portfolioSymbols = this.dataService.portfolioSymbols;
    this.passiveIncomeGoalPercentage =
      this.portfolioHoldings?.portfolioDividendIncome /
      this.passiveIncomeTarget;
    this.portfolioValueTarget =
      this.passiveIncomeTarget / this.portfolioHoldings?.portfolioYieldOnCost;
    this.portfolioValueGoalPercentage =
      this.portfolioHoldings?.portfolioMarketValue / this.portfolioValueTarget;

    // sectors
    let market_sectors: any = {};
    this.portfolioSymbols?.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stock = this.portfolioData[symbol];
      if (market_sectors[stock.profile.sector]) {
        market_sectors[stock.profile.sector] += position.marketValue;
      } else {
        market_sectors[stock.profile.sector] = position.marketValue;
      }
    });
    market_sectors["ETF"] = market_sectors["undefined"];
    delete market_sectors["undefined"];
    Object.keys(market_sectors).forEach((sector: string) => {
      this.sectorsData.push({
        name: sector,
        value: market_sectors[sector],
      });
    });
    this.sectorsData.sort((a: any, b: any) => a.value - b.value);

    // market values
    this.portfolioSymbols
      .sort(
        (a: any, b: any) =>
          this.portfolioHoldings[a].marketValue -
          this.portfolioHoldings[b].marketValue
      )
      .forEach((symbol: any) => {
        const position = this.portfolioHoldings[symbol];
        const stock = this.portfolioData[symbol];
        this.allMarketValueData.push({
          name: stock.symbol,
          series: [
            {
              name: "Cost Basis",
              value: position.totalCost,
            },
            {
              name: "Unrealized Gain",
              value: position.unrealizedGain,
            },
          ],
          sector: stock.profile?.sector || "ETF",
        });

        this.allPortfolioPercentData.push({
          name: stock.symbol,
          value:
            (position.marketValue /
              this.portfolioHoldings.portfolioMarketValue) *
            100,
          sector: stock.profile?.sector || "ETF",
        });
      });
    this.marketValueBarChartData = this.allMarketValueData;
    this.portfolioPercentBarChartData = this.allPortfolioPercentData;

    // unrealized gain
    this.portfolioSymbols
      .sort(
        (a: any, b: any) =>
          this.portfolioHoldings[a].unrealizedGainPercent -
          this.portfolioHoldings[b].unrealizedGainPercent
      )
      .forEach((symbol: any) => {
        const stock = this.portfolioData[symbol];
        this.allUnrealizedGainData.push({
          name: stock.symbol,
          value:
            this.portfolioHoldings[symbol].unrealizedGainPercent * 100 || 0,
          sector: stock.profile?.sector || "ETF",
        });
      });
    this.unrealizedGainBarChartData = this.allUnrealizedGainData;

    // dividend income
    this.portfolioSymbols
      .sort(
        (a: any, b: any) =>
          this.portfolioHoldings[a].dividendIncome -
          this.portfolioHoldings[b].dividendIncome
      )
      .forEach((symbol: any) => {
        const stock = this.portfolioData[symbol];
        this.allDividendData.push({
          name: stock.symbol,
          value: this.portfolioHoldings[symbol].dividendIncome,
          sector: stock.profile?.sector || "ETF",
        });
      });
    this.dividendBarChartData = this.allDividendData;

    // yield on cost
    this.dataService.portfolioSymbols
      .sort(
        (a: any, b: any) =>
          this.portfolioHoldings[a].yieldOnCost -
          this.portfolioHoldings[b].yieldOnCost
      )
      .forEach((symbol: any) => {
        const stock = this.portfolioData[symbol];
        this.allYocData.push({
          name: stock.symbol,
          value: this.portfolioHoldings[symbol].yieldOnCost * 100,
          sector: stock.profile?.sector || "ETF",
        });
      });
    this.yocBarChartData = this.allYocData;
  }

  filterBySector(event: any) {
    if (event.name === "all") {
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
    if (kind === "passive") {
      return `Progress: ${(this.passiveIncomeGoalPercentage * 100).toFixed(4)}%`;
    } else if (kind === "investment") {
      return `Progress: ${(this.portfolioValueGoalPercentage * 100).toFixed(4)}%`;
    } else {
      return "";
    }
  }
}
