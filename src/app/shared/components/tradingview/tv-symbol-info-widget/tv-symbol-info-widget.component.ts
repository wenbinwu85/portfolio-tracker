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
  @Input() theme?: string;
  @ViewChild('symbolInfoWidget') symbolInfoWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      symbol: this.symbol,
      width: this.width|| '100%',
      colorTheme: this.theme || 'light',
      locale: "en",
      isTransparent: false
    }
    this.params = JSON.stringify(this.params);
    const symbolInfo = this.tradingviewService.symbolInfoWidget(this.params);
    this.symbolInfoWidget.nativeElement.appendChild(symbolInfo);
  }
}
