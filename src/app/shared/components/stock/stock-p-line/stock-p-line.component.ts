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
  @Input({ required: true }) symbol!: number;
  @ViewChild('startThumb', { read: ElementRef, static: false })
  startThumb!: ElementRef<HTMLElement>;
  @ViewChild('endThumb', { read: ElementRef, static: false })
  endThumb!: ElementRef<HTMLElement>;
  @ViewChild('line', { read: ElementRef, static: false })
  line!: ElementRef<HTMLElement>;
  tooltip = '';

  stock: any;

  constructor(
    private renderer: Renderer2,
    private dataService: DataService
  ) {};

  ngOnInit() { 
    this.stock = this.dataService.portfolioData[this.symbol];
    this.tooltip = `Price line for ${this.stock.symbol} | ${this.stock.shortName}`;
  };

  ngAfterViewInit() {
    
  }
}
