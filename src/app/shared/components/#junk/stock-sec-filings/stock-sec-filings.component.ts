import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Observable, of } from 'rxjs';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'stock-sec-filings',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './stock-sec-filings.component.html',
  styleUrls: ['./stock-sec-filings.component.css'],
  
})
export class StockSecFilingsComponent implements OnInit {
  @Input({ required: true }) symbol!: string;
  filings$!: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.filings$ = of({}) // this.dataService.getSecFilings(this.symbol);
  }
}
