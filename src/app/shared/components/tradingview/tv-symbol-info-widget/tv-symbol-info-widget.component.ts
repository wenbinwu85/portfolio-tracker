import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-symbol-info-widget',
  template: '<div #symbolInfoWidget></div>',
  styles: [],
  standalone: true,
})
export class TvSymbolInfoWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() width = '100%';
  @ViewChild('symbolInfoWidget') symbolInfoWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const symbolInfo = this.tradingviewService.symbolInfoWidget(this.symbol, this.width);
    this.symbolInfoWidget.nativeElement.appendChild(symbolInfo);
  }
}
