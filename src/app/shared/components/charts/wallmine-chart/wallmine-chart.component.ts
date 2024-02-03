import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'wallmine-chart',
  templateUrl: './wallmine-chart.component.html',
  styleUrls: ['./wallmine-chart.component.css'],
  standalone: true,
  imports: [CommonModule, NgStyle],
})
export class WallmineChartComponent implements OnInit {
  @Input({ required: true }) symbol: string = 'AAPL';
  @Input() width: string = '100%';
  @Input() height: string = '450px';
  safeUrl: any;
  style = {};

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.symbol === 'SCHD') {
      this.symbol = 'ETF:SCHD';
    }
    this.safeUrl = this.getChartUrl(this.symbol);
    this.style = {
      width: this.width,
      height: this.height,
    };
  }

  getChartUrl(symbol: string) {
    const url = 'https://wallmine.com/widgets/chart/' + symbol;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
