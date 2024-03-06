import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: "tv-market-quotes-widget",
  template: "<div #marketQuotesWidget></div>",
  styles: [],
  standalone: true,
})
export class TvMarketQuotesWidgetComponent implements AfterViewInit {
  @Input() stockNames: any;
  @ViewChild("marketQuotesWidget") marketQuotesWidget!: ElementRef;
  params: any = {
    width: '100%',
    height: 820,
    symbolsGroups: [
      {
        name: "Portfolio",
        symbols: [] as any,
      },
    ],
    showSymbolLogo: true,
    isTransparent: false,
    colorTheme: "light",
    locale: "en",
  };

  constructor(private tradingviewService: TradingviewService) {}

  ngOnInit() {
    this.params.symbolsGroups[0].symbols = this.stockNames;
    this.params = JSON.stringify(this.params);
  }

  ngAfterViewInit(): void {
    const script = this.tradingviewService.marketQuotesWidget(this.params);
    this.marketQuotesWidget.nativeElement.append(script);
  }
}
