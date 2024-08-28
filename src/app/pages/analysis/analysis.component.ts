import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { DataService } from "../../shared/services/data.service";
import { PortfolioTickerButtonsComponent } from "../../shared/components/portfolio/portfolio-ticker-buttons/portfolio-ticker-buttons.component";
import { ContainerCardComponent } from "../../shared/components/container-card/container-card.component";
import { MatTabsModule } from "@angular/material/tabs";
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    PortfolioTickerButtonsComponent,
    InfoCardComponent,
  ],
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {
  stocks: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.stocks = this.dataService.portfolioStocks;
    const earnings = this.dataService.getTickerData('AAPL')?.earnings;
    console.dir(earnings.earningsChart);
  }
}
