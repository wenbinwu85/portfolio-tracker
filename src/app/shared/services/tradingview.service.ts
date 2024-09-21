import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

export const TradingviewApiBaseUrl = "https://s3.tradingview.com/external-embedding/";

export enum SourceScripts {
  EconomicEvents = TradingviewApiBaseUrl + "embed-widget-events.js",
  Financials = TradingviewApiBaseUrl + "embed-widget-financials.js",
  Heatmap = TradingviewApiBaseUrl + "embed-widget-stock-heatmap.js",
  EtfHeatmap = TradingviewApiBaseUrl + "embed-widget-etf-heatmap.js",
  CryptoHeatmap = TradingviewApiBaseUrl + "embed-widget-crypto-coins-heatmap.js",
  HotLists = TradingviewApiBaseUrl + "embed-widget-hotlists.js",
  MarketOverview = TradingviewApiBaseUrl + "embed-widget-market-overview.js",
  MarketQuotes = TradingviewApiBaseUrl + "embed-widget-market-quotes.js",
  MiniSymbolOverview = TradingviewApiBaseUrl + "embed-widget-mini-symbol-overview.js",
  Screener = TradingviewApiBaseUrl + "embed-widget-screener.js",
  SingleQuote = TradingviewApiBaseUrl + "embed-widget-single-quote.js",
  SymbolInfo = TradingviewApiBaseUrl + "embed-widget-symbol-info.js",
  SymbolOverview = TradingviewApiBaseUrl + "embed-widget-symbol-overview.js",
  SymbolProfile = TradingviewApiBaseUrl + "embed-widget-symbol-profile.js",
  TechnicalAnalysis = TradingviewApiBaseUrl + "embed-widget-technical-analysis.js",
  TickerTape = TradingviewApiBaseUrl + "embed-widget-ticker-tape.js",
  Tickers = TradingviewApiBaseUrl + "embed-widget-tickers.js",
  Timeline = TradingviewApiBaseUrl + "embed-widget-timeline.js",
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

  // https://www.tradingview.com/widget-docs/widgets/heatmaps/etf-heatmap/
  etfHeatMapWidget(params: string) { 
    return this.getScript(SourceScripts.EtfHeatmap, params);
  }

  //https://www.tradingview.com/widget-docs/widgets/heatmaps/crypto-heatmap/
  cryptoHeatMapWidget(params: string) { 
    return this.getScript(SourceScripts.CryptoHeatmap, params);
  }

  // https://www.tradingview.com/widget-docs/widgets/screeners/screener/
  screenerWidget(params: string) { 
    return this.getScript(SourceScripts.Screener, params);
  }
}
