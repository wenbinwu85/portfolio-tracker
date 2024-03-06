import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../../../services/data.service";

declare const TradingView: any;

@Component({
  selector: "tv-advanced-chart-widget",
  template: ` <div class="tradingview-widget-container" #advancedChartWidget>
    <div id="tradingview_ecabe"></div>
  </div>`,
  styleUrls: ["./tv-advanced-chart-widget.component.css"],
  standalone: true,
})
export class TvAdvancedChartWidgetComponent implements OnInit {
  @Input({ required: true }) symbol!: string;
  @Input() showWatchlist?: boolean = false;
  @Input() watchlist?: string[];
  @Input() theme!: string;
  private widgetParams = {
    symbol: this.symbol,
    height: "800",
    width: "auto",
    autosize: false,
    timezone: "America/New_York",
    style: "1",
    range: "12M",
    theme: "light",
    locale: "en",
    details: true,
    toolbar_bg: "#f1f3f6",
    withdateranges: true,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    watchlist: [],
    studies: ["STD;Bollinger_Bands", "STD;MACD", "STD;RSI"],
    show_popup_button: true,
    popup_width: "1000",
    popup_height: "800",
    container_id: "tradingview_ecabe",
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    let params = {};
    if (this.showWatchlist) {
      if (this.watchlist) {
        params = this.getWidgetParams(this.symbol, this.watchlist);
      } else {
        params = this.getWidgetParams(
          this.symbol,
          [
            "AAPL",
            "AMZN",
            "GOOG",
            "META",
            "MSFT",
            "NFLX",
            "NVDA",
            "TSLA",
          ]
        );
      }
    } else {
      params = this.getWidgetParams(
        this.symbol,
        [
          "AAPL",
          "AMZN",
          "GOOG",
          "META",
          "MSFT",
          "NFLX",
          "NVDA",
          "TSLA",
        ]
      );
    }
    new TradingView.widget(params);
  }

  getWidgetParams(symbol: string, watchlist: any, theme = "light") {
    let params = { ...this.widgetParams };
    params.symbol = symbol;
    params.watchlist = watchlist;
    params.theme = theme;
    return params;
  }
}
