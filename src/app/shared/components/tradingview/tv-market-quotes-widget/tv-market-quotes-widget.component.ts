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
  @Input({ required: true }) stockNames!: any;
  @Input({ required: true }) height!: any 
  @ViewChild("marketQuotesWidget") marketQuotesWidget!: ElementRef;
  
  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      width: "100%",
      height: this.height,
      symbolsGroups: [
        {
          name: "Portfolio",
          symbols: this.stockNames,
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    };
    this.params = JSON.stringify(this.params);
    const widget = this.tradingviewService.marketQuotesWidget(this.params);
    this.marketQuotesWidget.nativeElement.append(widget);
  }
}
