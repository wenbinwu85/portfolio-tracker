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
    NgIf,
    NgStyle,
    PercentPipe,
    StockTickerChipComponent
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.borderLeftStyle = '0.3rem solid ' + (this.accentColor ? this.accentColor : 'navy');
    if (this.subtitleChip) { 
      this.stock = this.dataService.portfolioData[this.subtitle];
    };
  }

  getStyle() {
    return {
      color: this.color,
      'font-size': this.fontSize,
    };
  }
}
