import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { TvAdvancedChartWidgetComponent } from "../../shared/components/tradingview/tv-advanced-chart-widget/tv-advanced-chart-widget.component";

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
export class ToolboxComponent {}
