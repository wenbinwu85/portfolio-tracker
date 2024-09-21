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
  @Input() stockNames?: any;
  @Input() height?: any; 
  @ViewChild("marketQuotesWidget") marketQuotesWidget!: ElementRef;
  
  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    let groups: any;
    if (this.stockNames) {
      groups = [
        {
          name: "Portfolio",
          symbols: this.stockNames,
        },
      ];
    } else {
      groups = [
        {
          "name": "Indices",
          "originalName": "Indices",
          "symbols": [
            {
              "name": "FOREXCOM:SPXUSD",
              "displayName": "S&P 500 Index"
            },
            {
              "name": "NASDAQ:NDX",
              "displayName": "NADAQ 100"
            },
            {
              "name": "FOREXCOM:DJI",
              "displayName": "Dow Jones Industrial Average Index"
            },
            {
              "name": "INDEX:NKY",
              "displayName": "Nikkei 225"
            },
            {
              "name": "FOREXCOM:UKXGBP",
              "displayName": "FTSE 100 Index"
            }
          ]
        },
        {
          "name": "Futures",
          "originalName": "Futures",
          "symbols": [
            {
              "name": "CME_MINI:ES1!",
              "displayName": "S&P 500"
            },
            {
              "name": "CME:6E1!",
              "displayName": "Euro"
            },
            {
              "name": "CME:BTC1!",
              "displayName": "Bitcoin"
            },
            {
              "name": "COMEX:GC1!",
              "displayName": "Gold"
            },
            {
              "name": "NYMEX:CL1!",
              "displayName": "WTI Crude Oil"
            },
            {
              "name": "NYMEX:NG1!",
              "displayName": "Gas"
            },
            {
              "name": "CBOT:ZC1!",
              "displayName": "Corn"
            },
          ]
        },
        {
          "name": "Bonds",
          "originalName": "Bonds",
          "symbols": [
            {
              "name": "CBOT:ZB1!",
              "displayName": "T-Bond"
            },
            {
              "name": "CBOT:UB1!",
              "displayName": "Ultra T-Bond"
            },
            {
              "name": "TVC:US01Y",
              "displayName": "US GOV Bonds 1Year Yield"
            },
            {
              "name": "TVC:US02Y",
              "displayName": "US GOV Bonds 2Year Yield"
            },
            {
              "name": "TVC:US05Y",
              "displayName": "US GOV Bonds 5Year Yield"
            },
            {
              "name": "TVC:US10Y",
              "displayName": "US GOV Bonds 10Year Yield"
            }
          ]
        }
      ];
    };
    this.params = {
      width: "100%",
      height: this.height || (21 * 35 + 100),
      symbolsGroups: groups,
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
