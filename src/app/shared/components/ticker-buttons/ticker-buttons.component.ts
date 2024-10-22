import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../services/data.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'ticker-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './ticker-buttons.component.html',
  styleUrl: './ticker-buttons.component.css'
})
export class TickerButtonsComponent implements OnInit {
  @Input() dividendPayersOnly?: boolean = false;
  @Input() tickers?: any;
  @Output() selectedTicker = new EventEmitter<string>();
  sortedStocks: any[] = [];
  sortedEtfs: any[] = [];
  dividendPayers: any[] = [];
  sortedTickers: any[] = [];

  constructor(
    private dataService: DataService,
    public helperService: HelperService,
  ) { }
  
  ngOnInit() { 
    if (!this.tickers) {
      this.sortedStocks = this.dataService.portfolioStocks.sort((a: any, b: any) => a["52WeekChange"].raw - b["52WeekChange"].raw);
      this.sortedEtfs = this.dataService.portfolioEtfs.sort((a: any, b: any) => a["ytdReturn"].raw - b["ytdReturn"].raw);
    }
    if (this.dividendPayersOnly) { 
      this.dividendPayers = this.dataService.portfolioDividendPayers.sort((a: any, b: any) => a["52WeekChange"].raw - b["52WeekChange"].raw);
    }
  }

  emitSelectedTicker(symbol: string) {
    this.selectedTicker.emit(symbol);
  }
}
