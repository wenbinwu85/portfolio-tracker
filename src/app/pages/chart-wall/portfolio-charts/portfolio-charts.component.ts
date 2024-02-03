import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { DataService } from '../../../shared/services/data.service';
import { WallmineChartComponent } from '../../../shared/components/charts/wallmine-chart/wallmine-chart.component';

@Component({
  selector: 'portfolio-charts',
  templateUrl: './portfolio-charts.component.html',
  styleUrls: ['./portfolio-charts.component.css'],
  standalone: true,
  imports: [NgFor, WallmineChartComponent],
})
export class PortfolioChartsComponent {
  symbols: string[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getPortfolioSymbols().subscribe((symbols: string[]) => { 
      this.symbols = symbols;
    })
  }
}
