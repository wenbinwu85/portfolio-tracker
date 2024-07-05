import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'stock-day-price-range',
  templateUrl: './stock-day-price-range.component.html',
  styleUrls: ['./stock-day-price-range.component.css'],
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatChipsModule],
})
export class StockDayPriceRangeComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) min!: number;
  @Input({ required: true }) max!: number;
  @Input({ required: true }) lowThumbValue!: number;
  @Input({ required: true }) highThumbValue!: number;
  @Input() showThumbs = true;
  @ViewChild('startThumb', { read: ElementRef, static: false })
  startThumb!: ElementRef<HTMLElement>;
  @ViewChild('endThumb', { read: ElementRef, static: false })
  endThumb!: ElementRef<HTMLElement>;
  @ViewChild('line', { read: ElementRef, static: false })
  line!: ElementRef<HTMLElement>;
  tooltip = '';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.tooltip = `Day range: $${this.lowThumbValue} - $${this.highThumbValue}`;
  }

  ngAfterViewInit(): void {
    if (this.showThumbs) {
      let pos =
        ((this.lowThumbValue - this.min) / (this.max - this.min)) *
        this.line.nativeElement.offsetWidth;
      pos = Math.round(pos * 100) / 100;
      this.renderer.setStyle(
        this.startThumb.nativeElement,
        'left',
        `${pos - 8}px`
      );

      let pos2 =
        ((this.highThumbValue - this.min) / (this.max - this.min)) *
        this.line.nativeElement.offsetWidth;
      pos2 = Math.round(pos2 * 100) / 100;
      this.renderer.setStyle(
        this.endThumb.nativeElement,
        'left',
        `${pos2 - 8}px`
      );
    }
    this.updateSliderGradient();
  }

  updateSliderGradient() {
    const startPercentage =
      ((this.lowThumbValue - this.min) / (this.max - this.min)) * 100;
    const endPercentage =
      ((this.highThumbValue - this.min) / (this.max - this.min)) * 100;
    let gradient = `linear-gradient(
      to right,
      slategrey 0% ${startPercentage}%,
      chocolate ${startPercentage}% ${endPercentage}%, 
      slategrey ${endPercentage}% 100%
    )`;
    this.renderer.setStyle(this.line.nativeElement, 'background', gradient);
  }
}
