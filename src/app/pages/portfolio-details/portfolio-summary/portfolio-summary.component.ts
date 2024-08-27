import { CurrencyPipe, PercentPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-summary",
  templateUrl: "./portfolio-summary.component.html",
  styleUrls: ["./portfolio-summary.component.css"],
  standalone: true,
  imports: [
    ContainerCardComponent,
    CurrencyPipe,
    InfoCardComponent,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    NgxChartsModule,
    PercentPipe,
  ],
})
export class PortfolioSummaryComponent implements OnInit {
  portfolioHoldings: any;
  portfolioData: any;
  portfolioSymbols: any;
  passiveIncomeTarget = 0;
  passiveIncomeGoalPercentage = 0;
  portfolioValueTarget = 0;
  portfolioValueGoalPercentage = 0;
  sectorsData: any = [];
  portfolioPercentData: any = [];
  marketValueData: any[] = [];
  unrealizedGainData: any[] = [];
  dividendData: any[] = [];
  yocData: any[] = [];
  allocationsBarChartColorScheme = { domain: ["slategrey"] } as Color;
  valueBarChartColorScheme = { domain: ["slategrey"] } as Color;
  dividendBarChartColorScheme = { domain: ["slategrey"] } as Color;
  stackedBarChartColorScheme = { domain: ["slategrey", "lightskyblue"] } as Color;
  pieChartStyle = "pie";
  selectedSectorColors: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioSymbols = this.dataService.portfolioSymbols;
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;
    this.passiveIncomeTarget = 12000;
    this.portfolioValueTarget = this.passiveIncomeTarget / this.portfolioHoldings.yieldOnCost;
    this.passiveIncomeGoalPercentage = this.portfolioHoldings.dividendIncome / this.passiveIncomeTarget;
    this.portfolioValueGoalPercentage = this.portfolioHoldings.marketValue / this.portfolioValueTarget;

    const market_sector_values: any = {};
    this.portfolioSymbols?.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stockData = this.portfolioData[symbol];
      const sector = stockData.profile?.sector || "ETF";
      const sectorValue = market_sector_values[sector] || 0;
      market_sector_values[sector] = sectorValue + position.marketValue;

      this.portfolioPercentData.push({
        name: stockData.symbol,
        value:
          (position.marketValue / this.portfolioHoldings.marketValue) * 100,
        sector: sector,
      });

      this.marketValueData.push({
        name: stockData.symbol,
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
        sector: sector,
      });
      this.unrealizedGainData.push({
        name: stockData.symbol,
        value: position.unrealizedGainPercent * 100 || 0,
        sector: sector,
      });

      if (position.dividendIncome) {
        this.dividendData.push({
          name: stockData.symbol,
          value: position.dividendIncome,
          sector: sector,
        });
        this.yocData.push({
          name: stockData.symbol,
          value: position.yieldOnCost * 100,
          sector: sector,
        });
      }
    });

    Object.entries(market_sector_values).forEach(([sector, value]) => {
      this.sectorsData.push({
        name: sector,
        value: value,
      });
    });

    this.sectorsData.sort((a: any, b: any) => b.value - a.value);
    this.portfolioPercentData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].marketValue -
        this.portfolioHoldings[b.name].marketValue
    );

    this.marketValueData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].marketValue -
        this.portfolioHoldings[b.name].marketValue
    );
    this.unrealizedGainData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].unrealizedGainPercent -
        this.portfolioHoldings[b.name].unrealizedGainPercent
    );

    this.dividendData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].dividendIncome -
        this.portfolioHoldings[b.name].dividendIncome
    );
    this.yocData.sort(
      (a: any, b: any) =>
        this.portfolioHoldings[a.name].yieldOnCost -
        this.portfolioHoldings[b.name].yieldOnCost
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

  changeChartStyle(style: string) {
    this.pieChartStyle = style;
    this.selectedSectorColors = [];
  }

  onSelectSector(data: any) {
    this.selectedSectorColors = [];
    this.portfolioPercentData.forEach((ticker: any) => {
      if (ticker.sector === data.name) {
        this.selectedSectorColors.push({
          name: ticker.name,
          value: 'skyblue'
        })
      }
    });
  }
}
