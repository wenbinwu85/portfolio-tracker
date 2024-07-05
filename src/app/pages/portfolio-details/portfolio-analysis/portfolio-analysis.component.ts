import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@Component({
  selector: "portfolio-analysis",
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: "./portfolio-analysis.component.html",
  styleUrls: ["./portfolio-analysis.component.css"],
})
export class PortfolioAnalysisComponent {}
