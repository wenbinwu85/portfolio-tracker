import{t as w,u as k,v}from"./chunk-KDKXGZYQ.js";import{C as f,N as u,_ as d,da as p,eb as y,g,m,w as b}from"./chunk-AWEJSUHL.js";import{a as h,b as c}from"./chunk-MON7YFGF.js";var D=(()=>{let n=class n{constructor(t){this.http=t,this.httpOptions={headers:new w().set("content-type","application/json").set("Access-Control-Allow-Origin","*")},this.backendDataPath="../../../backend/data",this.backendUrl="http://127.0.0.1:5000",this.portfolioHoldings={},this.portfolioSymbols=[],this.portfolioData={},this.portfolioTechnicalInsights={},this.portfolioDividendHistory={},this.isLoadingData=new g(!1),this.updatePortfolioData(!0),this.updatePortfolioTechnicalInsights()}error(t){let e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status} Message: ${t.message}`;return m({data:[],message:e,status:500})}wrapHttpCall(t,e=this.httpOptions){return this.http.get(t,e).pipe(u(2),f(this.error))}updatePortfolioData(t){this.isLoadingData.next(!0),b([this.getPortfolioHoldings(),this.getPortfolioData(t)]).subscribe(([e,o])=>{this.portfolioData=o,this.portfolioHoldings=e,this.portfolioSymbols=Object.keys(this.portfolioData),this.isLoadingData.next(!1),console.log("%c ----- Sanity Check -----","background: teal; color: white");let i=Object.keys(this.portfolioData).length===this.portfolioSymbols.length;console.log("data.length equal symbols.length:",i),console.table(Object.entries(this.portfolioHoldings)),console.log("%c ------------------------","background: teal; color: white")})}updatePortfolioCorporateEvents(){this.isLoadingData.next(!0);let t=0;Object.values(this.portfolioData).filter(e=>e.quoteType==="EQUITY").forEach((e,o,i)=>{this.getCorporateEvents(e.symbol).subscribe(()=>{t++,t===i.length&&(this.isLoadingData.next(!1),console.log("%c ----- Sanity Check -----","background: teal; color: white"),console.log("counter equal portfolio symbols length:",t==this.portfolioSymbols.length),console.log("%c ------------------------","background: teal; color: white"))})})}updatePortfolioTechnicalInsights(t=!0){this.isLoadingData.next(!0),this.portfolioSymbols.forEach(e=>{this.getTechnicalInsights(e,t).subscribe(o=>{if(this.portfolioTechnicalInsights[e]=o,Object.keys(this.portfolioTechnicalInsights).length===this.portfolioSymbols.length){this.isLoadingData.next(!1),console.log("%c ----- Sanity Check -----","background: teal; color: white");let i=Object.keys(this.portfolioTechnicalInsights).length===this.portfolioSymbols.length;console.log("technicalInsights.length equal symbols.length:",i),console.table(Object.entries(this.portfolioTechnicalInsights)),console.log("%c ------------------------","background: teal; color: white")}})})}updatePortfolioDividendHistory(){this.isLoadingData.next(!0),this.portfolioSymbols.forEach(t=>{this.getDividendHistory(t,10,!1).subscribe(e=>{if(this.portfolioDividendHistory[t]=e,Object.keys(this.portfolioDividendHistory).length===this.portfolioSymbols.length){this.isLoadingData.next(!1),console.log("%c ----- Sanity Check -----","background: teal; color: white");let o=Object.keys(this.portfolioDividendHistory).length===this.portfolioSymbols.length;console.log("dividendHistory.length equal symbols.length:",o),console.table(Object.entries(this.portfolioDividendHistory)),console.log("%c ------------------------","background: teal; color: white")}})})}getPortfolioHoldings(){let t=`${this.backendUrl}/fetch/portfolio/holdings`;return this.wrapHttpCall(t)}getPortfolioSymbols(){let t=`${this.backendUrl}/fetch/portfolio/symbols`;return this.wrapHttpCall(t)}getPortfolioData(t=!1){if(t){let o=`${this.backendDataPath}/portfolio.json`,i=c(h({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(o,i)}let e=`${this.backendUrl}/fetch/portfolio/data`;return this.wrapHttpCall(e)}getStockData(t,e=!1){if(e){let i=`${this.backendDataPath}/${t.toLowerCase()}.json`,a=c(h({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(i,a)}let o=`${this.backendUrl}/fetch/stock/${t.toLowerCase()}`;return this.wrapHttpCall(o)}getDividendHistory(t,e=10,o=!1){if(o){let $=`${this.backendDataPath}/${t.toLowerCase()}-dividend.json`,j=c(h({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall($,j)}let i=`${this.backendUrl}/fetch/dividend-history/${t}`,a=new k().set("years",e),l=c(h({},this.httpOptions),{params:a});return this.wrapHttpCall(i,l)}getTechnicalInsights(t,e=!1){if(e){let i=`${this.backendDataPath}/${t.toLowerCase()}-technical-insights.json`,a=c(h({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(i,a)}let o=`${this.backendUrl}/fetch/technical-insights/${t}`;return this.wrapHttpCall(o)}getCorporateEvents(t,e=!1){if(e){let i=`${this.backendDataPath}/${t.toLowerCase()}-events.json`,a=c(h({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(i,a)}let o=`${this.backendUrl}/fetch/events/${t}`;return this.wrapHttpCall(o)}};n.\u0275fac=function(e){return new(e||n)(p(v))},n.\u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();var r=function(s){return s.EconomicEvents="https://s3.tradingview.com/external-embedding/embed-widget-events.js",s.Financials="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",s.Heatmap="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js",s.HotLists="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js",s.MarketOverview="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",s.MarketQuotes="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js",s.MiniSymbolOverview="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js",s.Screener="https://s3.tradingview.com/external-embedding/embed-widget-screener.js",s.SingleQuote="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",s.SymbolInfo="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js",s.SymbolProfile="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",s.TechnicalAnalysis="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js",s.TickerTape="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",s.Tickers="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",s.Timeline="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",s}(r||{}),I=(()=>{let n=class n{constructor(t){this.rendererFactory=t,this.renderer2=this.rendererFactory.createRenderer(null,null)}getScript(t,e){let o=this.renderer2.createElement("script");return o.type="text/javascript",o.src=t,o.text=e,o.async=!0,o}tickersWidget(t,e,o="adaptive",i="light"){let a=`
      {
        "symbols": ${t},
        "displayMode": "${o}",
        "colorTheme": "${i}",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en"
      }
    `,l=e?r.TickerTape:r.Tickers;return this.getScript(l,a)}technicalAnalysisWidget(t,e="450",o="light"){let i=`
      {
        "symbol": "${t}",
        "height": "${e}",
        "colorTheme": "${o}",
        "interval": "1m",
        "width": "450",
        "isTransparent": false,
        "showIntervalTabs": true,
        "locale": "en",
        "displayMode": "multiple"
      }
    `;return this.getScript(r.TechnicalAnalysis,i)}symbolInfoWidget(t,e="100%",o="light"){let i=`
      {
        "symbol": "${t}",
        "width": "${e}",
        "colorTheme": "${o}",
        "locale": "en",
        "isTransparent": false
      }
    `;return this.getScript(r.SymbolInfo,i)}singleQuoteWidget(t,e="simple",o="light"){let i=e==="simple"?280:800,a=e==="simple"?r.SingleQuote:r.SymbolInfo,l=`
      {
        "symbol": "${t}",
        "width": "${i}",
        "colorTheme": "${o}",
        "height": "auto",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(a,l)}symbolProfileWidget(t,e="100%",o="auto",i="light"){let a=`
      {
        "symbol": "${t}",
        "width": "${e}",
        "height": "${o}",
        "colorTheme": "${i}",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(r.SymbolProfile,a)}symbolFinancialsWidget(t,e="100%",o="490",i="compact",a="light"){let l=`
      {
        "symbol": "${t}",
        "width": "${e}",
        "height": "${o}",
        "displayMode": "${i}",
        "colorTheme": "${a}",
        "largeChartUrl": "",
        "isTransparent": false,
        "locale": "en"
      }
    `;return this.getScript(r.Financials,l)}miniChartWidget(t,e="100%",o=200,i="12M",a="light"){let l=`
      {
        "symbol": "${t}",
        "dateRange": "${i}",
        "width": "${e}",
        "height": "${o}",
        "colorTheme": "${a}",
        "autosize": true,
        "trendLineColor": "rgba(41, 98, 255, 1)",
        "underLineColor": "rgba(41, 98, 255, 0.3)",
        "underLineBottomColor": "rgba(41, 98, 255, 0)",
        "isTransparent": true,
        "locale": "en"
      }
    `;return this.getScript(r.MiniSymbolOverview,l)}marketQuotesWidget(t){return this.getScript(r.MarketQuotes,t)}heatMapWidget(){return this.getScript(r.Heatmap,`
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
    }`)}};n.\u0275fac=function(e){return new(e||n)(p(y))},n.\u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();export{D as a,I as b};
