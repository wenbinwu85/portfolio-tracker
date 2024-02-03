import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

declare const TradingView: any;

@Component({
  selector: 'tv-advanced-chart-widget',
  template: `
    <div class="tradingview-widget-container" #advancedChartWidget>
      <div id="tradingview_ecabe"></div>
    </div>`,
  styleUrls: ['./tv-advanced-chart-widget.component.css'],
  standalone: true,
  
})
export class TvAdvancedChartWidgetComponent implements OnInit {
  @Input({ required: true }) symbol!: string;
  @Input() showWatchlist?: boolean = true;
  @Input() watchlist?: string[];
  @Input() theme!: string;
  private widgetParams: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (this.showWatchlist) {
      if (this.watchlist) {
        this.widgetParams = this.getWidgetParams(
          this.symbol,
          this.watchlist,
          this.theme
        );
      } else {
        this.widgetParams = this.getWidgetParams(
          this.symbol,
          ['AAPL', 'MSFT'], //this.dataService.getPortfolioSymbols,
          this.theme
        );
      }
      new TradingView.widget(this.widgetParams);
    } else {
      const widgetParams = {
        symbol: this.symbol || 'SPY',
        height: '800',
        width: 'auto',
        autosize: false,
        timezone: 'Etc/UTC',
        theme: `${this.theme}`,
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        withdateranges: true,
        range: 'YTD',
        hide_side_toolbar: false,
        allow_symbol_change: false,
        details: true,
        studies: [
          'STD;Bollinger_Bands',
          'STD;MACD',
          'STD;RSI',
        ],
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '800',
        container_id: 'tradingview_ecabe',
      };

      new TradingView.widget(widgetParams);
    }
  }

  getWidgetParams(symbol: string, watchlist: any, theme: string) {
    return {
      symbol: symbol,
      watchlist: watchlist,
      height: '800',
      width: 'auto',
      autosize: false,
      timezone: 'Etc/UTC',
      theme: `${theme}`,
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      withdateranges: true,
      range: 'YTD',
      hide_side_toolbar: false,
      allow_symbol_change: true,
      details: true,
      studies: [
        'STD;Bollinger_Bands',
        'STD;MACD',
        'STD;RSI',
      ],
      show_popup_button: true,
      popup_width: '1000',
      popup_height: '800',
      container_id: 'tradingview_ecabe',
    };
  }
}
