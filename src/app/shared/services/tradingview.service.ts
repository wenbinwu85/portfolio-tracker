import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

export enum SourceScripts {
  EconomicEvents = "https://s3.tradingview.com/external-embedding/embed-widget-events.js",
  Financials = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js",
  Heatmap = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js",
  HotLists = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",
  MarketOverview = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",
  MarketQuotes = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",
  MiniSymbolOverview = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js",
  Screener = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js",
  SingleQuote = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",
  SymbolInfo = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",
  SymbolOverview = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js",
  SymbolProfile = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",
  TechnicalAnalysis = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",
  TickerTape = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",
  Tickers = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",
  Timeline = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",
}

@Injectable({
  providedIn: "root",
})
export class TradingviewService {
  private renderer2!: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer2 = this.rendererFactory.createRenderer(null, null);
  }

  public getScript(src: string, params: string) {
    let script = this.renderer2.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.text = params;
    script["async"] = true;
    return script;
  }

  // https://www.tradingview.com/widget-docs/widgets/tickers/
  tickersWidget(
    symbols: string,
    tape: boolean,
    displayMode = "adaptive",
    theme = "light"
  ) {
    const params = `
      {
        "symbols": ${symbols},
        "displayMode": "${displayMode}",
        "colorTheme": "${theme}",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en"
      }
    `;
    const widgetScript = tape
      ? SourceScripts.TickerTape
      : SourceScripts.Tickers;
    return this.getScript(widgetScript, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/technical-analysis/
  technicalAnalysisWidget(symbol: string, height = "450", theme = "light") {
    const params = `
      {
        "symbol": "${symbol}",
        "height": "${height}",
        "colorTheme": "${theme}",
        "interval": "1m",
        "width": "450",
        "isTransparent": false,
        "showIntervalTabs": true,
        "locale": "en",
        "displayMode": "multiple"
      }
    `;
    return this.getScript(SourceScripts.TechnicalAnalysis, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/symbol-info/
  symbolInfoWidget(symbol: string, width = "100%", theme = "light") {
    const params = `
      {
        "symbol": "${symbol}",
        "width": "${width}",
        "colorTheme": "${theme}",
        "locale": "en",
        "isTransparent": false
      }
    `;
    return this.getScript(SourceScripts.SymbolInfo, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/tickers/single-ticker/
  singleQuoteWidget(symbol: string, type = "simple", theme = "light") {
    let width = type === "simple" ? 280 : 800;
    let src =
      type === "simple" ? SourceScripts.SingleQuote : SourceScripts.SymbolInfo;
    const params = `
      {
        "symbol": "${symbol}",
        "width": "${width}",
        "colorTheme": "${theme}",
        "height": "auto",
        "isTransparent": true,
        "locale": "en"
      }
    `;
    return this.getScript(src, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/company-profile/
  symbolProfileWidget(
    symbol: string,
    width = "100%",
    height = "auto",
    theme = "light"
  ) {
    const params = `
      {
        "symbol": "${symbol}",
        "width": "${width}",
        "height": "${height}",
        "colorTheme": "${theme}",
        "isTransparent": false,
        "locale": "en"
      }
    `;
    return this.getScript(SourceScripts.SymbolProfile, params);
  }

  symbolOverviewWidget(
    company: string,
    symbol: string,
    timeFrame: string = '1D'
  ) { 
    const params = `
      {
        "symbols": [
          [
            "${company}",
            "${symbol}|${timeFrame}"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "600",
        "locale": "en",
        "colorTheme": "light",
        "autosize": true,
        "showVolume": true,
        "showMA": true,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "rgba(255, 152, 0, 1)",
        "maLineWidth": 1,
        "maLength": 14,
        "headerFontSize": "medium",
        "gridLineColor": "rgba(41, 98, 255, 0.74)",
        "lineWidth": 2,
        "lineType": 2,
        "dateRanges": [
          "1d|1",
          "1w|60",
          "1m|30",
          "3m|60",
          "ytd|1D",
          "12m|1D",
          "60m|1W",
          "120m|1M",
          "all|1M"
        ]
      }
    `;
    return this.getScript(SourceScripts.SymbolOverview, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/fundamental-data/
  symbolFinancialsWidget(
    symbol: string,
    width = "100%",
    height = "490",
    displayMode = "compact",
    theme = "light"
  ) {
    const params = `
      {
        "symbol": "${symbol}",
        "width": "${width}",
        "height": "${height}",
        "displayMode": "${displayMode}",
        "colorTheme": "${theme}",
        "largeChartUrl": "",
        "isTransparent": false,
        "locale": "en"
      }
    `;
    return this.getScript(SourceScripts.Financials, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/charts/mini-chart/
  miniChartWidget(
    symbol: string,
    width = "100%",
    height = 200,
    dateRange = "12M",
    theme = "light"
  ) {
    const params = `
      {
        "symbol": "${symbol}",
        "dateRange": "${dateRange}",
        "width": "${width}",
        "height": "${height}",
        "colorTheme": "${theme}",
        "autosize": true,
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": true,
        "locale": "en"
      }
    `;
    return this.getScript(SourceScripts.MiniSymbolOverview, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/watchlists/market-quotes/
  marketQuotesWidget(params: string) {
    return this.getScript(SourceScripts.MarketQuotes, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/heatmaps/stock-heatmap/
  heatMapWidget() {
    const params = `
    {
      "exchanges": [],
      "dataSource": "SPX500",
      "grouping": "sector",
      "blockSize": "market_cap_basic",
      "blockColor": "change",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "light",
      "hasTopBar": true,
      "isDataSetEnabled": true,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "width": "100%",
      "height": "800"
    }`;
    return this.getScript(SourceScripts.Heatmap, params);
  }
}
