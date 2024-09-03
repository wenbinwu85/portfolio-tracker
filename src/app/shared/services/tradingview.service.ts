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
  tickersWidget(params: string, tape: boolean) {
    const widgetScript = tape ? SourceScripts.TickerTape : SourceScripts.Tickers;
    return this.getScript(widgetScript, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/technical-analysis/
  technicalAnalysisWidget(params: string) {
    return this.getScript(SourceScripts.TechnicalAnalysis, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/symbol-info/
  symbolInfoWidget(params: string) {
    return this.getScript(SourceScripts.SymbolInfo, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/tickers/single-ticker/
  singleQuoteWidget(params: string, type: string) {
    let src =  type === "simple" ? SourceScripts.SingleQuote : SourceScripts.SymbolInfo;
    return this.getScript(src, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/company-profile/
  symbolProfileWidget(params: string) {
    return this.getScript(SourceScripts.SymbolProfile, params);
  }

  symbolOverviewWidget(params: string) { 
    return this.getScript(SourceScripts.SymbolOverview, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/symbol-details/fundamental-data/
  symbolFinancialsWidget(params: string) {
    return this.getScript(SourceScripts.Financials, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/charts/mini-chart/
  miniChartWidget(params: string) {
    return this.getScript(SourceScripts.MiniSymbolOverview, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/watchlists/market-quotes/
  marketQuotesWidget(params: string) {
    return this.getScript(SourceScripts.MarketQuotes, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/heatmaps/stock-heatmap/
  heatMapWidget(params: string) {
    return this.getScript(SourceScripts.Heatmap, params);
  }
}
