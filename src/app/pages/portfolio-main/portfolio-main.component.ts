import { Component } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { WallmineChartComponent } from "../../shared/components/charts/wallmine-chart/wallmine-chart.component";
import { ContainerCardComponent } from "../../shared/components/container-card/container-card.component";
import { StockPriceMovementChartsComponent } from "../../shared/components/stock/stock-price-movement-charts/stock-price-movement-charts.component";
import { AlpacaApiService } from "../../shared/services/alpaca-api.service";

@Component({
  selector: "app-portfolio-main",
  templateUrl: "./portfolio-main.component.html",
  styleUrls: ["./portfolio-main.component.css"],
  standalone: true,
  imports: [
    ContainerCardComponent,
    MatChipsModule,
    StockPriceMovementChartsComponent,
    WallmineChartComponent,
  ],
})
export class PortfolioMainComponent {
  selectedChart = 1;

  constructor(private alpacaApiService: AlpacaApiService) {}

  ngOnInit() {
    // this.alpacaApiService.getNews(['O', 'VICI'], '2024-01-01', '2024-02-01', 20).subscribe((news: any) => {
    //   console.log(JSON.parse(news));
    // });
    // this.alpacaApiService.getLatestBars().subscribe((res: any) => { 
    //   Object.entries(res.bars).forEach(([symbol, bar]: any) => { 
    //     console.log(symbol)
    //     console.log(bar)
    //   })
    // })
  }

  selectChart(chartId: number) {
    this.selectedChart = chartId;
  }
}
