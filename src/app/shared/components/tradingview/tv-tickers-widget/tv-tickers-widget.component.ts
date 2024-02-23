import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
    selector: 'tv-tickers-widget',
    template: '<div #tickersWidget></div>',
    styles: [],
    standalone: true
})
export class TvTickersWidgetComponent implements AfterViewInit {
  @Input() symbols = `[
    {
      "title": "S&P 500",
      "proName": "SPX"
    },
    {
      "title": "NASDAQ",
      "proName": "NASDAQ"
    },
    {
      "title": "DJI",
      "proName": "DJI"
    },
    {
      "description": "Bitcoin",
      "proName": "BITSTAMP:BTCUSD"
    },
    {
      "description": "Ethereum",
      "proName": "BITSTAMP:ETHUSD"
    },
    {
      "description": "Doge",
      "proName": "BINANCE:DOGEUSD"
    },
    {
      "description": "USD/RMB",
      "proName": "FX:USDCNH"
    },
    {
      "description": "USD/JPY",
      "proName": "FX:USDJPY"
    },
    {
      "description": "EUR/USD",
      "proName": "FX:EURUSD"
    }
  ]`;
  @Input() tape = true;
  @Input() theme = 'light';
  @ViewChild('tickersWidget') tickersWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const tickers = this.tradingviewService.tickersWidget(
      this.symbols,
      this.theme,
      this.tape
    );
    this.tickersWidget.nativeElement.appendChild(tickers);

    // why the fuck is this doubled?
    const node = this.tickersWidget.nativeElement.children[1];
    this.tickersWidget.nativeElement.removeChild(node);
  }
}
