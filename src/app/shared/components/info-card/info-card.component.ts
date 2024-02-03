import {
  CommonModule,
  CurrencyPipe,
  NgIf,
  NgStyle,
  PercentPipe,
} from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
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
    MatIconModule,
    NgIf,
    NgStyle,
    PercentPipe,
  ],
})
export class InfoCardComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) value: number | string = 0;
  @Input({ required: true }) subtitle: string = '';
  @Input() date?: string;
  @Input() additionalInfo?: string | number;
  @Input() valueType?: string = 'number';
  @Input() color?: string = 'black';
  @Input() fontSize?: string = '2rem';

  getStyle() {
    return {
      color: this.color,
      'font-size': this.fontSize,
    };
  }
}
