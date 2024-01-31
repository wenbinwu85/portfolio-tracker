import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { TradingviewService } from 'src/app/shared/services/tradingview.service';

@Component({
  selector: 'tv-financials-widget',
  template: '<div #symbolFinancialsWidget></div>',
  styles: [],
  standalone: true,
})
export class TvFinancialsWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() displayMode? = 'compact';
  @ViewChild('symbolFinancialsWidget') symbolFinancialsWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const financials = this.tradingviewService.symbolFinancialsWidget(
      this.symbol,
      this.width,
      this.height,
      'light',
      this.displayMode
    );
    this.tradingviewService.renderWidget(
      this.symbolFinancialsWidget,
      financials
    );
  }
}
