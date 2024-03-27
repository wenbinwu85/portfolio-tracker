import {
  CommonModule,
  NgIf,
} from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: "portfolio-analysis",
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    NgIf,
  ],
  templateUrl: "./portfolio-analysis.component.html",
  styleUrls: ["./portfolio-analysis.component.css"],
})
export class PortfolioAnalysisComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
