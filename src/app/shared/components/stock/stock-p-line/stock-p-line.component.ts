import { DataService } from './../../../services/data.service';
import { NgIf, CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'stock-p-line',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, NgIf],
  templateUrl: './stock-p-line.component.html',
  styleUrl: './stock-p-line.component.css'
})
export class StockPLineComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @ViewChild('line', { read: ElementRef, static: false }) line!: ElementRef<HTMLElement>;
  @ViewChild('startThumb', { read: ElementRef, static: false }) startThumb!: ElementRef<HTMLElement>;
  @ViewChild('endThumb', { read: ElementRef, static: false }) endThumb!: ElementRef<HTMLElement>;
  @ViewChild('targetPriceLowThumb', { read: ElementRef, static: false }) targetPriceLowThumb!: ElementRef<HTMLElement>;

  stock: any;
  tooltip = '';
  min = 0;
  max = 0;
  dayLow = 0;
  dayHigh = 0;


  constructor(
    private renderer: Renderer2,
    private dataService: DataService
  ) {};

  ngOnInit() { 
    this.stock = this.dataService.portfolioData[this.symbol];
  };

  ngAfterViewInit() {
    this.tooltip = `${this.stock.shortName} | $${this.stock.dayLow} - $${this.stock.dayHigh}`;
    this.min = this.stock.fiftyTwoWeekLow;
    this.max = this.stock.fiftyTwoWeekHigh;
    this.dayLow = this.stock.dayLow;
    this.dayHigh = this.stock.dayHigh;

    const startPercentage = ((this.dayLow - this.min) / (this.max - this.min)) * 100;
    const endPercentage = ((this.dayHigh - this.min) / (this.max - this.min)) * 100;
    const pos1 = startPercentage / 100 * this.line.nativeElement.offsetWidth
    this.renderer.setStyle(
      this.startThumb.nativeElement,
      'left',
      `${pos1}px`
    );

    const targetPriceLowPos = ((this.stock.targetLowPrice - this.min) / (this.max - this.min)) * this.line.nativeElement.offsetWidth
    this.renderer.setStyle(
      this.targetPriceLowThumb.nativeElement,
      'left',
      `${targetPriceLowPos}px`
    )

    let gradient = `linear-gradient(
      to right,
      ghostwhite 0% ${startPercentage}%,
      chocolate ${startPercentage}% ${endPercentage}%, 
      ghostwhite ${endPercentage}% 100%
    )`;
    this.renderer.setStyle(this.line.nativeElement, 'background', gradient);
  }
}
