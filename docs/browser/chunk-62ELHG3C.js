import{fb as g,ma as d,wa as m}from"./chunk-5F7CWZHS.js";var s=function(t){return t.EconomicEvents="https://s3.tradingview.com/external-embedding/embed-widget-events.js",t.Financials="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",t.HotLists="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",t.MarketOverview="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",t.MarketQuotes="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",t.MiniSymbolOverview="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js",t.Screener="https://s3.tradingview.com/external-embedding/embed-widget-screener.js",t.SingleQuote="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",t.SymbolInfo="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",t.SymbolProfile="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",t.TechnicalAnalysis="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",t.TickerTape="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",t.Tickers="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",t.Timeline="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",t}(s||{}),h=(()=>{let l=class l{constructor(e){this.rendererFactory=e,this.renderer2=this.rendererFactory.createRenderer(null,null)}getScript(e,n){let i=this.renderer2.createElement("script");return i.type="text/javascript",i.src=e,i.text=n,i.async=!0,i}tickersWidget(e,n,i="adaptive",r="light"){let a=`
      {
        "symbols": ${e},
        "displayMode": "${i}",
        "colorTheme": "${r}",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en"
      }
    `,o=n?s.TickerTape:s.Tickers;return this.getScript(o,a)}technicalAnalysisWidget(e,n="450",i="light"){let r=`
      {
        "symbol": "${e}",
        "height": "${n}",
        "colorTheme": "${i}",
        "interval": "1m",
        "width": "450",
        "isTransparent": false,
        "showIntervalTabs": true,
        "locale": "en",
        "displayMode": "multiple"
      }
    `;return this.getScript(s.TechnicalAnalysis,r)}symbolInfoWidget(e,n="100%",i="light"){let r=`
      {
        "symbol": "${e}",
        "width": "${n}",
        "colorTheme": "${i}",
        "locale": "en",
        "isTransparent": false
      }
    `;return this.getScript(s.SymbolInfo,r)}singleQuoteWidget(e,n="simple",i="light"){let r=n==="simple"?280:800,a=n==="simple"?s.SingleQuote:s.SymbolInfo,o=`
      {
        "symbol": "${e}",
        "width": "${r}",
        "colorTheme": "${i}",
        "height": "auto",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(a,o)}symbolProfileWidget(e,n="100%",i="auto",r="light"){let a=`
      {
        "symbol": "${e}",
        "width": "${n}",
        "height": "${i}",
        "colorTheme": "${r}",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(s.SymbolProfile,a)}symbolFinancialsWidget(e,n="100%",i="490",r="compact",a="light"){let o=`
      {
        "symbol": "${e}",
        "width": "${n}",
        "height": "${i}",
        "displayMode": "${r}",
        "colorTheme": "${a}",
        "largeChartUrl": "",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(s.Financials,o)}miniChartWidget(e,n="100%",i=200,r="12M",a="light"){let o=`
      {
        "symbol": "${e}",
        "dateRange": "${r}",
        "width": "${n}",
        "height": "${i}",
        "colorTheme": "${a}",
        "autosize": true,
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(s.MiniSymbolOverview,o)}marketQuotesWidget(e){return this.getScript(s.MarketQuotes,e)}};l.\u0275fac=function(n){return new(n||l)(m(g))},l.\u0275prov=d({token:l,factory:l.\u0275fac,providedIn:"root"});let t=l;return t})();export{h as a};
