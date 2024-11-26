import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { StockEarningsChartComponent } from "../../../shared/components/portfolio/stock-earnings-chart/stock-earnings-chart.component";
import { StockRecommendationTrendsComponent } from "../../../shared/components/portfolio/stock-recommendation-trends/stock-recommendation-trends.component";
import { StockTickerChipComponent } from "../../../shared/components/portfolio/stock-ticker-chip/stock-ticker-chip.component";
import { TickerButtonsComponent } from "../../../shared/components/ticker-buttons/ticker-buttons.component";
import { StockPriceColorsEnum } from "../../../shared/model/colors.model";
import { DataService } from "../../../shared/services/dataV2.service";

@Component({
  selector: 'app-portfolio-analysis',
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    InfoCardComponent,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgxChartsModule,
    StockEarningsChartComponent,
    StockRecommendationTrendsComponent,
    StockTickerChipComponent,
    TickerButtonsComponent,
    MatExpansionModule
  ],
  templateUrl: './portfolio-analysis.component.html',
  styleUrls: ['./portfolio-analysis.component.css'],
})
export class PortfolioAnalysisComponent implements OnInit {
  insights: any;
  snapshotChartData: any = {};
  selectedTicker: any;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.changeTicker(this.dataService.portfolioStockTickers[0].symbol);
  }

  generateSnapshotChartData(symbol: string) {
    const snapshotData = this.insights.companySnapshot;
    const companySnapshot: any = {
      name: symbol,
      series: []
    }
    const sectorSnapshot: any = {
      name: snapshotData.sectorInfo,
      series: []
    }
    Object.keys(snapshotData.company).forEach((metric: string) => {
      const metricName = metric.replace(/([A-Z])/g, ' $1').toUpperCase();
      companySnapshot.series.push({
        name: metricName,
        value: snapshotData.company[metric],
      });

      sectorSnapshot.series.push({
        name: metricName,
        value: snapshotData.sector[metric],
      });
    });
    return [companySnapshot, sectorSnapshot];
  }

  getOutlookTextColor(outlookDirection: string) {
    switch (outlookDirection) {
      case "Bullish":
        return StockPriceColorsEnum.Gain;
      case "Bearish":
        return StockPriceColorsEnum.Lost;
      default:
        return "steelblue";
    }
  }

  changeTicker(symbol: string) {
    this.selectedTicker = null;
    this.cdr.detectChanges();
    this.selectedTicker = this.dataService.portfolioData.get(symbol);
    this.insights = this.dataService.portfolioTechnicalInsights.get(symbol);
    this.snapshotChartData = this.generateSnapshotChartData(symbol);
  }
}
