import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { TickerButtonsComponent } from "../../../shared/components/ticker-buttons/ticker-buttons.component";
import { StockEarningsChartComponent } from "../../../shared/components/portfolio/stock-earnings-chart/stock-earnings-chart.component";
import { DataService } from "../../../shared/services/data.service";
import { StockTickerChipComponent } from "../../../shared/components/portfolio/stock-ticker-chip/stock-ticker-chip.component";

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
    StockEarningsChartComponent,
    StockTickerChipComponent,
    TickerButtonsComponent,
  ],
  templateUrl: './portfolio-analysis.component.html',
  styleUrls: ['./portfolio-analysis.component.css'],
})
export class PortfolioAnalysisComponent implements OnInit {
  stocks: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.stocks = this.dataService.portfolioStocks;
  }
}
