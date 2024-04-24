import {
  CommonModule,
  CurrencyPipe,
  NgIf,
  NgStyle,
  PercentPipe,
} from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { StockTickerChipComponent } from '../stock/stock-ticker-chip/stock-ticker-chip.component';
import { DataService } from '../../services/data.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    NgIf,
    NgStyle,
    PercentPipe,
    StockTickerChipComponent,
  ],
})
export class InfoCardComponent implements OnInit {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) value: number | string = 0;
  @Input({ required: true }) subtitle: string = '';
  @Input() subtitleChip?: boolean = false;
  @Input() date?: Date | string;
  @Input() additionalInfo?: string | number;
  @Input() valueType?: string = 'number';
  @Input() color?: string = 'steel';
  @Input() accentColor?: string;
  @Input() fontSize?: string = '2rem';
  borderStyle = ''
  borderLeftStyle = '';
  stock: any;
  tickerChipTooltip = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.borderLeftStyle = '0.3rem solid ' + (this.accentColor ? this.accentColor : 'steelblue');
    if (this.subtitleChip) { 
      this.stock = this.dataService.portfolioData[this.subtitle];
      this.tickerChipTooltip = 'Fwd PE: ' + this.stock.forwardPE.toFixed(2) + ' Fwd EPS:' + this.stock.forwardEps.toFixed(2);
    };
  }

  getStyle() {
    return {
      color: this.color,
      'font-size': this.fontSize,
    };
  }
}
