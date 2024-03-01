import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { TvAdvancedChartWidgetComponent } from "../../shared/components/tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component";
import { DataService } from "../../shared/services/data.service";

@Component({
  selector: "app-toolbox",
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    TvAdvancedChartWidgetComponent,
  ],
  templateUrl: "./toolbox.component.html",
  styleUrls: ["./toolbox.component.css"],
})
export class ToolboxComponent implements OnInit {
  symbols: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.symbols = this.dataService.portfolioSymbols;
  }
}
