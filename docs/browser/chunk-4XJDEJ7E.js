import{_ as d,da as m,eb as g}from"./chunk-YSX44WVI.js";var n=function(t){return t.EconomicEvents="https://s3.tradingview.com/external-embedding/embed-widget-events.js",t.Financials="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",t.Heatmap="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js",t.HotLists="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",t.MarketOverview="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",t.MarketQuotes="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",t.MiniSymbolOverview="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js",t.Screener="https://s3.tradingview.com/external-embedding/embed-widget-screener.js",t.SingleQuote="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",t.SymbolInfo="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",t.SymbolProfile="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",t.TechnicalAnalysis="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",t.TickerTape="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",t.Tickers="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",t.Timeline="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",t}(n||{}),h=(()=>{let l=class l{constructor(e){this.rendererFactory=e,this.renderer2=this.rendererFactory.createRenderer(null,null)}getScript(e,r){let i=this.renderer2.createElement("script");return i.type="text/javascript",i.src=e,i.text=r,i.async=!0,i}tickersWidget(e,r,i="adaptive",a="light"){let s=`
      {
        "symbols": ${e},
        "displayMode": "${i}",
        "colorTheme": "${a}",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en"
      }
    `,o=r?n.TickerTape:n.Tickers;return this.getScript(o,s)}technicalAnalysisWidget(e,r="450",i="light"){let a=`
      {
        "symbol": "${e}",
        "height": "${r}",
        "colorTheme": "${i}",
        "interval": "1m",
        "width": "450",
        "isTransparent": false,
        "showIntervalTabs": true,
        "locale": "en",
        "displayMode": "multiple"
      }
    `;return this.getScript(n.TechnicalAnalysis,a)}symbolInfoWidget(e,r="100%",i="light"){let a=`
      {
        "symbol": "${e}",
        "width": "${r}",
        "colorTheme": "${i}",
        "locale": "en",
        "isTransparent": false
      }
    `;return this.getScript(n.SymbolInfo,a)}singleQuoteWidget(e,r="simple",i="light"){let a=r==="simple"?280:800,s=r==="simple"?n.SingleQuote:n.SymbolInfo,o=`
      {
        "symbol": "${e}",
        "width": "${a}",
        "colorTheme": "${i}",
        "height": "auto",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(s,o)}symbolProfileWidget(e,r="100%",i="auto",a="light"){let s=`
      {
        "symbol": "${e}",
        "width": "${r}",
        "height": "${i}",
        "colorTheme": "${a}",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(n.SymbolProfile,s)}symbolFinancialsWidget(e,r="100%",i="490",a="compact",s="light"){let o=`
      {
        "symbol": "${e}",
        "width": "${r}",
        "height": "${i}",
        "displayMode": "${a}",
        "colorTheme": "${s}",
        "largeChartUrl": "",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(n.Financials,o)}miniChartWidget(e,r="100%",i=200,a="12M",s="light"){let o=`
      {
        "symbol": "${e}",
        "dateRange": "${a}",
        "width": "${r}",
        "height": "${i}",
        "colorTheme": "${s}",
        "autosize": true,
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(n.MiniSymbolOverview,o)}marketQuotesWidget(e){return this.getScript(n.MarketQuotes,e)}heatMapWidget(){return this.getScript(n.Heatmap,`
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
    }`)}};l.\u0275fac=function(r){return new(r||l)(m(g))},l.\u0275prov=d({token:l,factory:l.\u0275fac,providedIn:"root"});let t=l;return t})();export{h as a};
