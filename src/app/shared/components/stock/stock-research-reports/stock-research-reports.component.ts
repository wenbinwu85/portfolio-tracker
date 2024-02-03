import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'stock-research-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-research-reports.component.html',
  styleUrls: ['./stock-research-reports.component.css'],
  
})
export class StockResearchReportsComponent implements OnInit {
  @Input({ required: true }) symbol!: string;
  technicalInsights$!: Observable<any>;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.technicalInsights$ = this.dataService
      .getTechnicalInsights(this.symbol)
      .pipe(map((data: any) => data[this.symbol]));
  }
}
