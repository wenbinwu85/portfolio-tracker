import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

export enum SourceScripts {
  SingleQuote = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js',
  SymbolInfo = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js',
  MiniSymbolOverview = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js',
  TechnicalAnalysis = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js',
  MarketOverview = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js',
  MarketQuotes = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js',
  HotLists = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js',
  EconomicEvents = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js',
  SymbolProfile = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js',
  Financials = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js',
  Timeline = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js',
  Screener = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
  Tickers = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js',
  TickerTape = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
}

@Injectable({
  providedIn: 'root',
})
export class TradingviewService {
  private renderer2!: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer2 = this.rendererFactory.createRenderer(null, null);
  }

  getScript(src: string, params: string) {
    let script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.text = params;
    return script;
  }

  renderWidget(element: ElementRef, widget: any) {
    element.nativeElement.appendChild(widget);
  }

  singleQuoteWidget(symbol: string, theme = 'light', type = 'simple') {
    let width = type === 'simple' ? 280 : 800;
    let src =
      type === 'simple' ? SourceScripts.SingleQuote : SourceScripts.SymbolInfo;
    const params = `
      {
        "symbol": "${symbol}",
        "width": "${width}",
        "height": "auto",
        "colorTheme": "${theme}",
        "isTransparent": true,
        "locale": "en"
      }
    `;
    return this.getScript(src, params);
  }

  symbolProfileWidget(
    symbol: string,
    width = '100%',
    height = 'auto',
    theme = 'light'
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

  symbolFinancialsWidget(
    symbol: string,
    width = '100%',
    height = '490',
    theme = 'light',
    displayMode = 'compact'
  ) {
    const params = `
      {
        "symbol": "${symbol}",
        "width": "${width}",
        "height": "${height}",
        "colorTheme": "${theme}",
        "displayMode": "${displayMode}",
        "largeChartUrl": "",
        "isTransparent": false,
        "locale": "en"
      }
    `;
    return this.getScript(SourceScripts.Financials, params);
  }

  miniChartWidget(
    symbol: string,
    theme = 'light',
    width = '100%',
    height = 200,
    dateRange = '6M',
  ) {
    const params = `
      {
        "symbol": "${symbol}",
        "colorTheme": "${theme}",
        "width": "${width}",
        "height": "${height}",
        "autosize": true,
        "dateRange": "${dateRange}",
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "largeChartUrl": "",
        "isTransparent": true,
        "locale": "en"
      }
    `;
    return this.getScript(SourceScripts.MiniSymbolOverview, params);
  }

  tickersWidget(
    symbols: string,
    theme = 'light',
    tape = true,
    displayMode = 'regular'
  ) {
    const params = `
      {
        "symbols": ${symbols},
        "colorTheme": "${theme}",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en",
        "displayMode": "${displayMode}"
      }
    `;
    const widgetScript = tape
      ? SourceScripts.TickerTape
      : SourceScripts.Tickers;
    return this.getScript(widgetScript, params);
  }

  symbolInfoWidget(symbol: string, theme = 'light') {
    const params = `
      {
        "symbol": "${symbol}",
        "width": "100%",
        "locale": "en",
        "colorTheme": "${theme}",
        "isTransparent": false
      }
    `;
    return this.getScript(SourceScripts.SymbolInfo, params);
  }

  technicalAnalysisWidget(symbol: string, height = '450', theme = 'light') {
    const params = `
    {
      "symbol": "${symbol}",
      "interval": "1m",
      "width": "425",
      "isTransparent": false,
      "height": "${height}",
      "showIntervalTabs": true,
      "locale": "en",
      "colorTheme": "${theme}"
    }
    `;
    return this.getScript(SourceScripts.TechnicalAnalysis, params);
  }

  marketQuotesWidget(params: string) {
    return this.getScript(SourceScripts.MarketQuotes, params);
  }
}
