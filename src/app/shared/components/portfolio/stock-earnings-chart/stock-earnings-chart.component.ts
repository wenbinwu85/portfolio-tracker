import { Component, Input, OnInit } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { StockTickerChipComponent } from "../stock-ticker-chip/stock-ticker-chip.component";
import { ContainerCardComponent } from "../../container-card/container-card.component";
@Component({
  selector: "stock-earnings-chart",
  standalone: true,
  imports: [
    NgxChartsModule,
    StockTickerChipComponent,
    ContainerCardComponent,
  ],
  templateUrl: "./stock-earnings-chart.component.html",
  styleUrl: "./stock-earnings-chart.component.css",
})
export class StockEarningsChartComponent implements OnInit {
  @Input() stock!: any;
  earningsChartData: any = [];
  currentQuarter: string = "";
  currentQuarterYear: string = "";
  currentQuarterEstimate: number = 0;
  earningsDate: string = "";
  view: any = [400, 200];
  colorScheme: any = {
    domain: ["skyblue", "slategrey"],
  };

  ngOnInit() {
    const earningsData = this.stock.earnings?.earningsChart;
    this.currentQuarter = earningsData.currentQuarterEstimateDate;
    this.currentQuarterYear = earningsData.currentQuarterEstimateYear;
    this.currentQuarterEstimate = earningsData.currentQuarterEstimate.fmt;
    this.earningsDate = earningsData.earningsDate[0].fmt;

    this.earningsChartData.name = this.stock.symbol;
    const estimates: any = {
      name: "Estimate",
      series: [],
    };
    const actuals: any = {
      name: "Actual",
      series: [],
    };
    earningsData.quarterly.forEach((quarter: any) => {
      estimates.series.push({
        name: quarter.date,
        x: quarter.date,
        y: quarter.estimate.fmt,
        r: 50,
      });
      actuals.series.push({
        name: quarter.date,
        x: quarter.date,
        y: quarter.actual.fmt,
        r: 50,
      });
    });
    estimates.series.push({
      name:
        this.currentQuarter + this.currentQuarterYear + " " + this.earningsDate,
      x: this.currentQuarter + this.currentQuarterYear,
      y: this.currentQuarterEstimate,
      r: 50,
    });
    this.earningsChartData.push(estimates);
    this.earningsChartData.push(actuals);
  }
}
