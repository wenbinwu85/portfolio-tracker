import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

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
      this.displayMode
    );
    this.symbolFinancialsWidget.nativeElement.appendChild(financials);
  }
}
