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
  ],
})
export class InfoCardComponent implements OnInit {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) value: number | string = 0;
  @Input({ required: true }) subtitle: string = '';
  @Input() date?: Date | string;
  @Input() additionalInfo?: string | number;
  @Input() valueType?: string = 'number';
  @Input() color?: string = 'steel';
  @Input() accentColor?: string;
  @Input() fontSize?: string = '2rem';
  borderStyle = ''
  borderLeftStyle = '';

  ngOnInit(): void {
    this.borderLeftStyle = '0.5rem solid ' + (this.accentColor ? this.accentColor : 'navy');
  }

  getStyle() {
    return {
      color: this.color,
      'font-size': this.fontSize,
    };
  }
}
