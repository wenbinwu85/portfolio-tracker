import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { ContainerCardComponent } from "../../shared/components/container-card/container-card.component";
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";
import { PortfolioTickerButtonsComponent } from "../../shared/components/portfolio/portfolio-ticker-buttons/portfolio-ticker-buttons.component";
import { StockEarningsChartComponent } from "../../shared/components/portfolio/stock-earnings-chart/stock-earnings-chart.component";
import { DataService } from "../../shared/services/data.service";

@Component({
  selector: "app-analysis",
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    InfoCardComponent,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    PortfolioTickerButtonsComponent,
    StockEarningsChartComponent,
  ],
  templateUrl: "./analysis.component.html",
  styleUrls: ["./analysis.component.css"],
})
export class AnalysisComponent implements OnInit {
  stocks: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.stocks = this.dataService.portfolioStocks;
  }
}
