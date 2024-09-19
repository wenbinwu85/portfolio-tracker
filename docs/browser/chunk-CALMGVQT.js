import{a as ee,b as te,c as ie,d as ne}from"./chunk-S6ZCJ44Q.js";import{a as pe}from"./chunk-WCK2I57M.js";import{f as re,g as se,i as le,m as ce}from"./chunk-5RDUJIEY.js";import{a as D}from"./chunk-4HTNXZLC.js";import{a as ae,b as oe}from"./chunk-OOM3R3PU.js";import{a as Y,b as q}from"./chunk-H43LB37J.js";import{r as j,s as $,t as z,u as _,v as K,x as Z}from"./chunk-MW6QR6K5.js";import{Aa as k,Fa as h,Ka as u,Kb as B,Ob as X,Pa as s,Pb as O,Qa as l,Qb as U,R as C,Ra as d,Va as I,W as v,X as y,Ya as w,_a as m,db as S,eb as P,fb as M,ib as E,jb as p,jd as J,kb as A,kd as G,lb as T,ma as r,mb as F,na as g,ob as f,qb as Q,tb as R,ub as V,uc as H,vb as N,wb as b}from"./chunk-ELSQTAXV.js";var Ce=["miniChartWidget"],he=(()=>{let a=class a{constructor(n){this.tradingviewService=n,this.width="100%",this.height=200,this.range="12M",this.theme="light"}ngAfterViewInit(){this.params={symbol:this.symbol,dateRange:this.range,width:this.width,height:this.height,colorTheme:this.theme,autosize:!0,trendLineColor:"rgba(41, 98, 255, 1)",underLineColor:"rgba(41, 98, 255, 0.3)",underLineBottomColor:"rgba(41, 98, 255, 0)",isTransparent:!0,locale:"en"},this.params=JSON.stringify(this.params);let n=this.tradingviewService.miniChartWidget(this.params);this.miniChartWidget.nativeElement.appendChild(n)}};a.\u0275fac=function(i){return new(i||a)(g(D))},a.\u0275cmp=C({type:a,selectors:[["tv-mini-chart-widget"]],viewQuery:function(i,o){if(i&1&&S(Ce,5),i&2){let c;P(c=M())&&(o.miniChartWidget=c.first)}},inputs:{symbol:"symbol",width:"width",height:"height",range:"range",theme:"theme"},standalone:!0,features:[f],decls:2,vars:0,consts:[["miniChartWidget",""]],template:function(i,o){i&1&&d(0,"div",null,0)},encapsulation:2});let e=a;return e})();var fe=["marketQuotesWidget"],de=(()=>{let a=class a{constructor(n){this.tradingviewService=n}ngAfterViewInit(){this.params={width:"100%",height:this.height,symbolsGroups:[{name:"Portfolio",symbols:this.stockNames}],showSymbolLogo:!0,isTransparent:!1,colorTheme:"light",locale:"en"},this.params=JSON.stringify(this.params);let n=this.tradingviewService.marketQuotesWidget(this.params);this.marketQuotesWidget.nativeElement.append(n)}};a.\u0275fac=function(i){return new(i||a)(g(D))},a.\u0275cmp=C({type:a,selectors:[["tv-market-quotes-widget"]],viewQuery:function(i,o){if(i&1&&S(fe,5),i&2){let c;P(c=M())&&(o.marketQuotesWidget=c.first)}},inputs:{stockNames:"stockNames",height:"height"},standalone:!0,features:[f],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(i,o){i&1&&d(0,"div",null,0)},encapsulation:2});let e=a;return e})();var xe=["tickersWidget"],Ie=(()=>{let a=class a{constructor(n){this.tradingviewService=n,this.theme="light",this.displayMode="adaptive"}ngAfterViewInit(){this.symbols||(this.symbols=[{title:"S&P 500 Index",proName:"FOREXCOM:SPXUSD"},{title:"Nasdaq 100",proName:"NASDAQ:NDX"},{title:"Dow Jones Industrial",proName:"DJI"},{title:"Bitcoin",proName:"BITSTAMP:BTCUSD"},{title:"Ethereum",proName:"BITSTAMP:ETHUSD"},{title:"Dogecoin",proName:"BINANCE:DOGEUSD"},{title:"USD/RMB",proName:"FX:USDCNH"},{title:"USD/JPY",proName:"FX:USDJPY"},{title:"EUR/USD",proName:"FX:EURUSD"}]),this.params={symbols:this.symbols,displayMode:this.displayMode,colorTheme:this.theme,isTransparent:!1,showSymbolLogo:!0,locale:"en"},this.params=JSON.stringify(this.params);let n=this.tradingviewService.tickersWidget(this.params,this.tape);this.tickersWidget.nativeElement.appendChild(n);try{let i=this.tickersWidget.nativeElement.children[1];this.tickersWidget.nativeElement.removeChild(i)}catch{}}};a.\u0275fac=function(i){return new(i||a)(g(D))},a.\u0275cmp=C({type:a,selectors:[["tv-tickers-widget"]],viewQuery:function(i,o){if(i&1&&S(xe,5),i&2){let c;P(c=M())&&(o.tickersWidget=c.first)}},inputs:{symbols:"symbols",tape:"tape",theme:"theme",displayMode:"displayMode"},standalone:!0,features:[f],decls:2,vars:0,consts:[["tickersWidget",""]],template:function(i,o){i&1&&d(0,"div",null,0)},encapsulation:2});let e=a;return e})();var W=e=>({color:e});function _e(e,a){if(e&1){let t=I();s(0,"div",6)(1,"mat-chip-listbox")(2,"mat-chip-option",7),w("click",function(){v(t);let i=m();return y(i.displayChart(1))}),p(3,"Price Changes"),l(),s(4,"mat-chip-option",8),w("click",function(){v(t);let i=m();return y(i.displayChart(2))}),p(5,"Beta"),l(),s(6,"mat-chip-option",8),w("click",function(){v(t);let i=m();return y(i.displayChart(3))}),p(7,"VIX"),l()()()}}function ve(e,a){if(e&1&&(s(0,"div",6)(1,"span"),p(2,"Regular Market "),l(),s(3,"mat-icon"),p(4,"schedule"),l(),s(5,"span",10),p(6),R(7,"currency"),l(),s(8,"span",10),p(9),R(10,"percent"),l()()),e&2){let t=m(3);r(5),h("ngStyle",Q(9,W,t.getDayPriceChangeColor())),r(),T(" ",V(7,4,t.priceChange)," "),r(2),h("ngStyle",Q(11,W,t.getDayPriceChangeColor())),r(),T(" (",N(10,6,t.priceChange/t.portfolioMarketValue,".4"),") ")}}function ye(e,a){if(e&1&&(s(0,"div",6)(1,"span"),p(2),l(),s(3,"mat-icon"),p(4),l(),s(5,"span",10),p(6),R(7,"currency"),l(),s(8,"span",10),p(9),R(10,"percent"),l()()),e&2){let t=m(3);r(2),A(t.prePostHourText),r(2),A(t.prePostHourIcon),r(),h("ngStyle",Q(11,W,t.getPrePostPriceChangeColor())),r(),T(" ",V(7,6,t.prePostPriceChange)," "),r(2),h("ngStyle",Q(13,W,t.getPrePostPriceChangeColor())),r(),T(" (",N(10,8,t.prePostPriceChange/t.portfolioMarketValue,".4"),") ")}}function ke(e,a){if(e&1){let t=I();s(0,"mat-slide-toggle",11),w("toggleChange",function(){v(t);let i=m(3);return y(i.changeChart())}),s(1,"span"),p(2),l()()}if(e&2){let t=m(3);r(2),A(t.chartConfigs.preMarket.toggleText)}}function we(e,a){if(e&1){let t=I();s(0,"mat-slide-toggle",11),w("toggleChange",function(){v(t);let i=m(3);return y(i.changeChart())}),s(1,"span"),p(2),l()()}if(e&2){let t=m(3);r(2),A(t.chartConfigs.postMarket.toggleText)}}function Se(e,a){if(e&1&&(s(0,"div",9),k(1,ve,11,13,"div",6)(2,ye,11,15,"div",6)(3,ke,3,1,"mat-slide-toggle")(4,we,3,1,"mat-slide-toggle"),l()),e&2){let t=m(2);r(),u(t.prefix.startsWith("pre")?-1:1),r(),u(t.prefix.startsWith("regular")?-1:2),r(),u(t.prefix.startsWith("pre")?3:-1),r(),u(t.prefix.startsWith("post")?4:-1)}}function Pe(e,a){if(e&1&&k(0,Se,5,4,"div",9),e&2){let t=m();u(t.marketState!=="CLOSED"?0:-1)}}function Me(e,a){if(e&1&&(d(0,"tv-mini-chart-widget",18)(1,"mat-divider",19),s(2,"span"),p(3),l(),s(4,"span"),p(5),l()),e&2){let t=a.model,n=m(3);h("symbol",t.name)("theme","dark"),r(3),F("",n.chartConfigs[n.prefix].text," : ",t.name," "),r(2),T("",t.value.toFixed(2),"%")}}function Te(e,a){if(e&1&&(s(0,"div",6)(1,"div",15)(2,"ngx-charts-bar-vertical",16),k(3,Me,6,5,"ng-template",null,4,b),l()(),s(5,"div",15),d(6,"ngx-charts-bar-vertical-stacked",17),l()()),e&2){let t=m(2);r(2),h("results",t.priceChangeChartData)("xAxis",!0)("yAxis",!0)("showYAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("showDataLabel",!0)("yAxisLabel","Price Change %")("customColors",t.getPriceChangeChartColor)("roundEdges",!1),r(4),h("scheme",t.priceRangeColorScheme)("results",t.priceRangeChartData)("xAxis",!0)("yAxis",!0)("showYAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("yAxisLabel","Market Day Price Range $")}}function be(e,a){if(e&1&&(s(0,"div",6)(1,"div",15),d(2,"ngx-charts-bar-vertical",20),l()()),e&2){let t=m(2);r(2),h("scheme",t.betaColorScheme)("schemeType",t.scaleType.Linear)("results",t.betaChartData)("xAxis",!0)("yAxis",!0)("showYAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("yAxisLabel","Beta")("roundEdges",!1)}}function De(e,a){e&1&&d(0,"tv-symbol-overview-widget",12),e&2&&h("company","VIX Volatility")("symbol","VANTAGE:VIX")("timeFrame","1m")}function Ee(e,a){if(e&1&&(k(0,Te,7,20,"div",6)(1,be,3,11,"div",6)(2,De,1,3,"tv-symbol-overview-widget",12),s(3,"mat-expansion-panel",13)(4,"mat-expansion-panel-header")(5,"mat-panel-title")(6,"mat-icon"),p(7,"price_change"),l(),s(8,"span"),p(9,"Quotes"),l()()(),d(10,"tv-market-quotes-widget",14),l()),e&2){let t=m();u(t.selectedChart===1?0:-1),r(),u(t.selectedChart===2?1:-1),r(),u(t.selectedChart===3?2:-1),r(),h("expanded",t.expandWidget),r(7),h("stockNames",t.stockNames)("height",t.stockNames.length*35+100)}}function Ae(e,a){e&1&&(s(0,"div",21)(1,"a",22)(2,"span",23),p(3,"Track all markets on TradingView"),l()()())}var ot=(()=>{let a=class a{constructor(n,i){this.dataService=n,this.helper=i,this.showTickers=!0,this.priceChange=0,this.prePostPriceChange=0,this.priceChangeChartData=[],this.priceRangeChartData=[],this.betaChartData=[],this.stockNames=[],this.priceRangeColorScheme={domain:["steelblue","skyblue"]},this.betaColorScheme={domain:["slategrey"]},this.scaleType=re,this.selectedChart=1,this.toggleChecked=!1,this.portfolioMarketValue=0,this.chartConfigs={preMarket:{text:"Pre Market",toggleText:"Pre Market Chart",priceChange:"preMarketChange",priceChangePercent:"preMarketChangePercent"},postMarket:{text:"Post Market",toggleText:"Post Market Chart",priceChange:"postMarketChange",priceChangePercent:"postMarketChangePercent"},regularMarket:{text:"Regular Market"}},this.marketState="",this.getPriceChangeChartColor=o=>{let c=this.toggleChecked?this.chartConfigs[this.prefix]?.priceChangePercent:"regularMarketChangePercent";return this.dataService.portfolioData[o][c].raw>0?_.Gain:_.Lost}}ngOnInit(){this.marketState=this.dataService.marketState,this.prefix=this.helper.getPriceKeyPrefix(),this.portfolioMarketValue=this.dataService.portfolioHoldings.marketValue,this.prePostHourIcon=this.prefix.startsWith("pre")?"sunny":"bedtime",this.prePostHourText=this.prefix.startsWith("pre")?"Pre Market ":"Post Market ",this.dataService.portfolioSymbols.forEach(n=>{let i=this.dataService.portfolioHoldings[n],o=this.dataService.portfolioData[n];if(this.stockNames.push({name:o.symbol,displayName:`${o.symbol} - ${o.longName}`}),this.priceChange+=o.regularMarketChange.raw*i.shares,this.priceChangeChartData.push({name:o.symbol,value:o.regularMarketChangePercent.raw*100}),this.priceChangeChartData.sort((c,x)=>c.value-x.value),this.priceRangeChartData.push({name:o.symbol,series:[{name:"Price -> Day Low Range",value:o.regularMarketPrice.raw-o.regularMarketDayLow.raw},{name:"Price -> Day High Range",value:o.regularMarketDayHigh.raw-o.regularMarketPrice.raw}]}),this.priceRangeChartData.sort((c,x)=>c.series[0].value+c.series[1].value-(x.series[0].value+x.series[1].value)),!this.prefix.startsWith("regular")){let c=this.chartConfigs[this.prefix].priceChange;o[c]&&(this.prePostPriceChange+=o[c].raw*i.shares)}o.quoteType==="EQUITY"&&o.beta.raw&&this.betaChartData.push({name:o.symbol,value:o.beta.raw||0})}),this.stockNames.sort((n,i)=>{let o=this.dataService.portfolioData[n.name].regularMarketChangePercent.raw,c=this.dataService.portfolioData[i.name].regularMarketChangePercent.raw;return o-c}),this.betaChartData.sort((n,i)=>n.value-i.value)}getDayPriceChangeColor(){return this.priceChange>0?_.Gain:_.Lost}getPrePostPriceChangeColor(){return this.prePostPriceChange>0?_.Gain:_.Lost}displayChart(n){this.selectedChart=n}changeChart(){this.toggleChecked=!this.toggleChecked;let n=this.toggleChecked?this.prefix+"ChangePercent":"regularMarketChangePercent";this.priceChangeChartData=[],this.dataService.portfolioSymbols?.forEach(i=>{let o=this.dataService.portfolioData[i];o[n].raw&&this.priceChangeChartData.push({name:o.symbol,value:o[n].raw*100})}),this.priceChangeChartData.sort((i,o)=>i.value-o.value)}};a.\u0275fac=function(i){return new(i||a)(g(H),g(K))},a.\u0275cmp=C({type:a,selectors:[["portfolio-quotes"]],inputs:{showTickers:"showTickers",expandWidget:"expandWidget"},standalone:!0,features:[f],decls:9,vars:4,consts:[["titleContentRef",""],["subContentRef",""],["ValueChangeRef",""],["quotesFooterRef",""],["tooltipTemplate",""],["title","Portfolio Quotes",3,"titleContentRef","subContentRef","mainContentRef","footerContentRef"],[1,"add-flex"],["selected","",3,"click"],[3,"click"],[1,"subcontent-wrapper"],[3,"ngStyle"],[3,"toggleChange"],[3,"company","symbol","timeFrame"],[3,"expanded"],[3,"stockNames","height"],[1,"chart-container"],[3,"results","xAxis","yAxis","showYAxisLabel","rotateXAxisTicks","animations","showDataLabel","yAxisLabel","customColors","roundEdges"],[3,"scheme","results","xAxis","yAxis","showYAxisLabel","rotateXAxisTicks","animations","yAxisLabel"],[3,"symbol","theme"],[2,"margin","none","border-top-color","slategrey"],[3,"scheme","schemeType","results","xAxis","yAxis","showYAxisLabel","rotateXAxisTicks","animations","yAxisLabel","roundEdges"],[1,"tradingview-widget-copyright"],["href","https://www.tradingview.com/","rel","noopener nofollow","target","_blank"],[1,"blue-text"]],template:function(i,o){if(i&1&&(k(0,_e,8,0,"ng-template",null,0,b)(2,Pe,1,1,"ng-template",null,1,b)(4,Ee,11,6,"ng-template",null,2,b)(6,Ae,4,0,"ng-template",null,3,b),d(8,"container-card",5)),i&2){let c=E(1),x=E(3),ge=E(5),ue=E(7);r(8),h("titleContentRef",c)("subContentRef",x)("mainContentRef",ge)("footerContentRef",o.expandWidget||o.selectedChart===3?ue:void 0)}},dependencies:[U,B,X,O,Z,z,$,j,G,J,ne,ee,te,ie,q,Y,oe,ae,ce,se,le,de,he,pe],styles:[".subcontent-wrapper[_ngcontent-%COMP%]{display:flex;align-content:center!important;align-items:center;margin-top:.5rem;font-size:1.25rem}.subcontent-wrapper[_ngcontent-%COMP%]   .add-flex[_ngcontent-%COMP%]{margin-right:1rem}  .mat-expansion-panel{margin-top:1rem!important}  .mat-expansion-panel-body{padding:0!important}"]});let e=a;return e})();export{Ie as a,ot as b};
