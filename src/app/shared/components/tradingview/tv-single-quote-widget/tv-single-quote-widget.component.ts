import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-single-quote-widget',
  template: '<div #singleQuoteWidget></div>',
  styles: [],
  standalone: true,
})
export class TvSingleQuoteWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @ViewChild('singleQuoteWidget') singleQuoteWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const singleQuote = this.tradingviewService.singleQuoteWidget(this.symbol);
    this.tradingviewService.renderWidget(this.singleQuoteWidget, singleQuote);
  }
}
