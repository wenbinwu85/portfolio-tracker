import './polyfills.server.mjs';
import{X as m,aa as d,bb as g}from"./chunk-QSEKS3E2.mjs";var n=function(t){return t.EconomicEvents="https://s3.tradingview.com/external-embedding/embed-widget-events.js",t.Financials="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",t.Heatmap="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js",t.HotLists="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",t.MarketOverview="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",t.MarketQuotes="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",t.MiniSymbolOverview="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js",t.Screener="https://s3.tradingview.com/external-embedding/embed-widget-screener.js",t.SingleQuote="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",t.SymbolInfo="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",t.SymbolOverview="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js",t.SymbolProfile="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",t.TechnicalAnalysis="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",t.TickerTape="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",t.Tickers="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",t.Timeline="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",t}(n||{}),c=(()=>{let o=class o{constructor(e){this.rendererFactory=e,this.renderer2=this.rendererFactory.createRenderer(null,null)}getScript(e,a){let i=this.renderer2.createElement("script");return i.type="text/javascript",i.src=e,i.text=a,i.async=!0,i}tickersWidget(e,a,i="adaptive",r="light"){let s=`
      {
        "symbols": ${e},
        "displayMode": "${i}",
        "colorTheme": "${r}",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en"
      }
    `,l=a?n.TickerTape:n.Tickers;return this.getScript(l,s)}technicalAnalysisWidget(e,a="450",i="light"){let r=`
      {
        "symbol": "${e}",
        "height": "${a}",
        "colorTheme": "${i}",
        "interval": "1m",
        "width": "450",
        "isTransparent": false,
        "showIntervalTabs": true,
        "locale": "en",
        "displayMode": "multiple"
      }
    `;return this.getScript(n.TechnicalAnalysis,r)}symbolInfoWidget(e,a="100%",i="light"){let r=`
      {
        "symbol": "${e}",
        "width": "${a}",
        "colorTheme": "${i}",
        "locale": "en",
        "isTransparent": false
      }
    `;return this.getScript(n.SymbolInfo,r)}singleQuoteWidget(e,a="simple",i="light"){let r=a==="simple"?280:800,s=a==="simple"?n.SingleQuote:n.SymbolInfo,l=`
      {
        "symbol": "${e}",
        "width": "${r}",
        "colorTheme": "${i}",
        "height": "auto",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(s,l)}symbolProfileWidget(e,a="100%",i="auto",r="light"){let s=`
      {
        "symbol": "${e}",
        "width": "${a}",
        "height": "${i}",
        "colorTheme": "${r}",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(n.SymbolProfile,s)}symbolOverviewWidget(e,a,i="1D"){let r=`
      {
        "symbols": [
          [
            "${e}",
            "${a}|${i}"
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
    `;return this.getScript(n.SymbolOverview,r)}symbolFinancialsWidget(e,a="100%",i="490",r="compact",s="light"){let l=`
      {
        "symbol": "${e}",
        "width": "${a}",
        "height": "${i}",
        "displayMode": "${r}",
        "colorTheme": "${s}",
        "largeChartUrl": "",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(n.Financials,l)}miniChartWidget(e,a="100%",i=200,r="12M",s="light"){let l=`
      {
        "symbol": "${e}",
        "dateRange": "${r}",
        "width": "${a}",
        "height": "${i}",
        "colorTheme": "${s}",
        "autosize": true,
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(n.MiniSymbolOverview,l)}marketQuotesWidget(e){return this.getScript(n.MarketQuotes,e)}heatMapWidget(){return this.getScript(n.Heatmap,`
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
    }`)}};o.\u0275fac=function(a){return new(a||o)(d(g))},o.\u0275prov=m({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();export{c as a};
