import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'stock-ticker-buttons',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatButtonModule,
  ],
  templateUrl: './stock-ticker-buttons.component.html',
  styleUrl: './stock-ticker-buttons.component.css'
})
export class StockTickerButtonsComponent implements OnInit {
  @Input() showETF: boolean = true;
  @Output() selectedTicker = new EventEmitter<string>();
  sortedStocks: any[] = [];
  sortedEtfs: any[] = [];

  constructor(private dataService: DataService) { }
  
  ngOnInit() { 
    this.sortedStocks = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "EQUITY")
      .sort((a: any, b: any) => a["52WeekChange"] - b["52WeekChange"]);
    this.sortedEtfs = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "ETF")
      .sort((a: any, b: any) => a["ytdReturn"] - b["ytdReturn"]);
  }

  emitSelectedTicker(ticker: string) {
    this.selectedTicker.emit(ticker);
  }

  getLogoSource(ticker: any) {
    return `/assets/ticker-logos/${ticker.symbol}.png`;
  }
}
