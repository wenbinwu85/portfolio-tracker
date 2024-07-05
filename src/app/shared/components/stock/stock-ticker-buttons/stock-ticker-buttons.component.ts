import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../../services/data.service';
import { HelperService } from '../../../services/helper.service';

@Component({
  selector: 'stock-ticker-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './stock-ticker-buttons.component.html',
  styleUrl: './stock-ticker-buttons.component.css'
})
export class StockTickerButtonsComponent implements OnInit {
  @Input() showETF: boolean = true;
  @Output() selectedTicker = new EventEmitter<string>();
  sortedStocks: any[] = [];
  sortedEtfs: any[] = [];

  constructor(
    private dataService: DataService,
    public helperService: HelperService,
  ) { }
  
  ngOnInit() { 
    this.sortedStocks = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "EQUITY")
      .sort((a: any, b: any) => a["52WeekChange"].raw - b["52WeekChange"].raw);
    this.sortedEtfs = Object.values(this.dataService.portfolioData)
      .filter((a: any) => a.quoteType === "ETF")
      .sort((a: any, b: any) => a["ytdReturn"].raw - b["ytdReturn"].raw);
  }

  emitSelectedTicker(symbol: string) {
    this.selectedTicker.emit(symbol);
  }
}
