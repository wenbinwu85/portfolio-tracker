import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";
import { TradingviewService } from "../../../services/tradingview.service";

@Component({
  selector: "tv-tickers-widget",
  template: "<div #tickersWidget></div>",
  styles: [],
  standalone: true,
})
export class TvTickersWidgetComponent implements AfterViewInit {
  @Input() symbols = `[
    {
      "title": "S&P 500 Index",
      "proName": "FOREXCOM:SPXUSD"
    },
    {
      "title": "Nasdaq 100",
      "proName": "NASDAQ:NDX"
    },
    {
      "title": "Dow Jones Industrial",
      "proName": "DJI"
    },
    {
      "title": "Bitcoin",
      "proName": "BITSTAMP:BTCUSD"
    },
    {
      "title": "Ethereum",
      "proName": "BITSTAMP:ETHUSD"
    },
    {
      "title": "Dogecoin",
      "proName": "BINANCE:DOGEUSD"
    },
    {
      "title": "USD/RMB",
      "proName": "FX:USDCNH"
    },
    {
      "title": "USD/JPY",
      "proName": "FX:USDJPY"
    },
    {
      "title": "EUR/USD",
      "proName": "FX:EURUSD"
    }
  ]`;
  @Input({required: true}) tape!: boolean;
  @Input() theme = "light";
  @Input() displayMode = "adaptive";
  @ViewChild("tickersWidget") tickersWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const tickers = this.tradingviewService.tickersWidget(
      this.symbols,
      this.tape,
      this.displayMode,
      this.theme
    );
    this.tickersWidget.nativeElement.appendChild(tickers);

    try {
      // why the fuck is this doubled?
      const node = this.tickersWidget.nativeElement.children[1];
      this.tickersWidget.nativeElement.removeChild(node);
    } catch (error) {
      // do nothing
    }
  }
}
