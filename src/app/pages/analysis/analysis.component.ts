import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent {}
