import './polyfills.server.mjs';
import{m as v}from"./chunk-C7QHNKL3.mjs";import{Eb as y,Ua as c,X as m,Yc as u,Za as g,aa as d,bb as p,bc as w,cd as f,fa as h,sb as b}from"./chunk-Y7GFRNBX.mjs";var C=(()=>{let s=class s{constructor(e){this.sanitizer=e,this.symbol="AAPL",this.width="100%",this.height="450px",this.style={}}ngOnInit(){this.symbol==="SCHD"&&(this.symbol="ETF:SCHD"),this.safeUrl=this.getChartUrl(this.symbol),this.style={width:this.width,height:this.height}}getChartUrl(e){let t="https://wallmine.com/widgets/chart/"+e;return this.sanitizer.bypassSecurityTrustResourceUrl(t)}};s.\u0275fac=function(t){return new(t||s)(g(v))},s.\u0275cmp=h({type:s,selectors:[["wallmine-chart"]],inputs:{symbol:"symbol",width:"width",height:"height"},standalone:!0,features:[w],decls:1,vars:2,consts:[["async","","frameborder","0","allowtransparency","true","scrolling","no",3,"src","ngStyle"]],template:function(t,r){t&1&&y(0,"iframe",0),t&2&&b("src",r.safeUrl,c)("ngStyle",r.style)},dependencies:[f,u]});let i=s;return i})();var a=function(i){return i.EconomicEvents="https://s3.tradingview.com/external-embedding/embed-widget-events.js",i.Financials="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",i.Heatmap="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js",i.HotLists="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",i.MarketOverview="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",i.MarketQuotes="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",i.MiniSymbolOverview="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js",i.Screener="https://s3.tradingview.com/external-embedding/embed-widget-screener.js",i.SingleQuote="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",i.SymbolInfo="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",i.SymbolProfile="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",i.TechnicalAnalysis="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",i.TickerTape="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",i.Tickers="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",i.Timeline="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",i}(a||{}),I=(()=>{let s=class s{constructor(e){this.rendererFactory=e,this.renderer2=this.rendererFactory.createRenderer(null,null)}getScript(e,t){let r=this.renderer2.createElement("script");return r.type="text/javascript",r.src=e,r.text=t,r.async=!0,r}tickersWidget(e,t,r="adaptive",n="light"){let o=`
      {
        "symbols": ${e},
        "displayMode": "${r}",
        "colorTheme": "${n}",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en"
      }
    `,l=t?a.TickerTape:a.Tickers;return this.getScript(l,o)}technicalAnalysisWidget(e,t="450",r="light"){let n=`
      {
        "symbol": "${e}",
        "height": "${t}",
        "colorTheme": "${r}",
        "interval": "1m",
        "width": "450",
        "isTransparent": false,
        "showIntervalTabs": true,
        "locale": "en",
        "displayMode": "multiple"
      }
    `;return this.getScript(a.TechnicalAnalysis,n)}symbolInfoWidget(e,t="100%",r="light"){let n=`
      {
        "symbol": "${e}",
        "width": "${t}",
        "colorTheme": "${r}",
        "locale": "en",
        "isTransparent": false
      }
    `;return this.getScript(a.SymbolInfo,n)}singleQuoteWidget(e,t="simple",r="light"){let n=t==="simple"?280:800,o=t==="simple"?a.SingleQuote:a.SymbolInfo,l=`
      {
        "symbol": "${e}",
        "width": "${n}",
        "colorTheme": "${r}",
        "height": "auto",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(o,l)}symbolProfileWidget(e,t="100%",r="auto",n="light"){let o=`
      {
        "symbol": "${e}",
        "width": "${t}",
        "height": "${r}",
        "colorTheme": "${n}",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(a.SymbolProfile,o)}symbolFinancialsWidget(e,t="100%",r="490",n="compact",o="light"){let l=`
      {
        "symbol": "${e}",
        "width": "${t}",
        "height": "${r}",
        "displayMode": "${n}",
        "colorTheme": "${o}",
        "largeChartUrl": "",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(a.Financials,l)}miniChartWidget(e,t="100%",r=200,n="12M",o="light"){let l=`
      {
        "symbol": "${e}",
        "dateRange": "${n}",
        "width": "${t}",
        "height": "${r}",
        "colorTheme": "${o}",
        "autosize": true,
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(a.MiniSymbolOverview,l)}marketQuotesWidget(e){return this.getScript(a.MarketQuotes,e)}heatMapWidget(){return this.getScript(a.Heatmap,`
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
    }`)}};s.\u0275fac=function(t){return new(t||s)(d(p))},s.\u0275prov=m({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();export{C as a,I as b};
