import './polyfills.server.mjs';
import"./chunk-EEAAU7PW.mjs";import"./chunk-V3YN2O74.mjs";import"./chunk-VMZ6LH75.mjs";import{x as z}from"./chunk-M2BQTOSC.mjs";import"./chunk-ARQOSYYF.mjs";import{a as G}from"./chunk-VPPJMF3C.mjs";import"./chunk-LANSB47U.mjs";import{c as L}from"./chunk-BNZ7KQNX.mjs";import{b as Q}from"./chunk-QVOPASF5.mjs";import"./chunk-TOODNJFC.mjs";import{f as H}from"./chunk-BGRIWWPV.mjs";import"./chunk-PALMNERU.mjs";import"./chunk-JVW6X6X5.mjs";import{b as N}from"./chunk-73N4CM4W.mjs";import"./chunk-CSEF6CSE.mjs";import{g as O,h as j,m as B}from"./chunk-XGJNUMTL.mjs";import{e as F,g as I,h as Y,i as R}from"./chunk-SFAXOFUV.mjs";import"./chunk-CVP4YOA6.mjs";import{d as V}from"./chunk-Y7LQFPDD.mjs";import"./chunk-QLFL53WF.mjs";import"./chunk-QAVQYTJV.mjs";import"./chunk-YG54OGXN.mjs";import{b as E,c as q}from"./chunk-UWJE4WK3.mjs";import{f as J}from"./chunk-RFVNM7LE.mjs";import{Q as W,R as X}from"./chunk-UTCM4PI5.mjs";import"./chunk-KB5XQQFM.mjs";import{Cb as c,Db as m,Eb as l,Ib as y,Lb as w,Nb as h,Xb as v,Ya as n,Yb as A,Za as b,bc as S,cc as _,cd as k,dc as u,fa as T,fc as D,jc as P,na as C,nb as d,oa as x,sb as s,vc as M,xb as f}from"./chunk-X4WKDQBD.mjs";import"./chunk-5XUXGTUW.mjs";var p=i=>[i],Z=()=>({name:"SCHD",value:"deepskyblue"}),$=()=>({name:"VYM",value:"maroon"}),ee=()=>({name:"JEPI",value:"dodgerblue"}),te=(i,a,t)=>[i,a,t];function ie(i,a){if(i&1&&l(0,"stock-price-insight",7),i&2){let t=h(2);s("symbol",t.selectedSymbol)}}function re(i,a){if(i&1){let t=y();c(0,"portfolio-ticker-buttons",6),w("selectedTicker",function(e){C(t);let r=h();return x(r.updateSelectedStock(e))}),m(),d(1,ie,1,1,"stock-price-insight",7)}if(i&2){let t=h();n(),f(t.selectedSymbol?1:-1)}}function ae(i,a){if(i&1&&(c(0,"div",9)(1,"div",8),l(2,"ngx-charts-bar-vertical",10),m(),c(3,"div",8),l(4,"ngx-charts-bar-vertical",10),m()(),l(5,"mat-divider"),c(6,"div",9)(7,"div",8),l(8,"ngx-charts-bar-vertical",11),m(),c(9,"div",8),l(10,"ngx-charts-bar-vertical",11),m()(),l(11,"mat-divider"),c(12,"div",9)(13,"div",8),l(14,"ngx-charts-bar-vertical",12),m(),c(15,"div",8),l(16,"ngx-charts-bar-vertical",12),m()()),i&2){let t=h(2);n(2),s("scheme",t.performanceChartColorScheme)("results",t.fiftyDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("xAxisLabel","Price vs 50 Day Moving Average %")("yScaleMin",t.fiftyDayMAChartData[0].value-5)("customColors",u(76,p,t.selectedSymbolColor))("roundEdges",!1),n(2),s("scheme",t.performanceChartColorScheme)("results",t.twoHundredDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("xAxisLabel","Price vs 200 Day Moving Average %")("yScaleMin",t.twoHundredDayMAChartData[0].value-5)("customColors",u(78,p,t.selectedSymbolColor))("roundEdges",!1),n(4),s("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekLowChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("xAxisLabel","Price above 52 week low %")("customColors",u(80,p,t.selectedSymbolColor))("roundEdges",!1),n(2),s("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekHighChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("xAxisLabel","Price below 52 week high %")("customColors",u(82,p,t.selectedSymbolColor))("roundEdges",!1),n(4),s("scheme",t.targetPriceChartColorScheme)("results",t.lowTargetPriceData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yScaleMin",-5)("xAxisLabel","Price vs low target price %")("customColors",u(84,p,t.selectedSymbolColor))("roundEdges",!1),n(2),s("scheme",t.targetPriceChartColorScheme)("results",t.highTargetPriceData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yScaleMin",-5)("xAxisLabel","Price vs high target price %")("customColors",u(86,p,t.selectedSymbolColor))("roundEdges",!1)}}function oe(i,a){if(i&1&&(c(0,"div",8),l(1,"ngx-charts-bar-vertical-2d",13),m()),i&2){let t=h(2);n(),s("results",t.etfPerformanceChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("showDataLabel",!0)("rotateXAxisTicks",!0)("xAxisLabel","ETF Performance %")("customColors",D(15,te,_(12,Z),_(13,$),_(14,ee)))("roundEdges",!1)}}function ne(i,a){if(i&1&&d(0,ae,17,88)(1,oe,2,19,"div",8),i&2){let t=h();f(t.selectedPerformanceChart===1?0:-1),n(),f(t.selectedPerformanceChart===2?1:-1)}}function se(i,a){if(i&1){let t=y();c(0,"mat-chip-option",15),w("click",function(){C(t);let e=h(2);return x(e.changePerformanceChart(1))}),A(1," Stocks "),m()}if(i&2){let t=h(2);s("selected",t.selectedPerformanceChart===1)}}function le(i,a){if(i&1){let t=y();c(0,"mat-chip-option",15),w("click",function(){C(t);let e=h(2);return x(e.changePerformanceChart(2))}),A(1," ETFs "),m()}if(i&2){let t=h(2);s("selected",t.selectedPerformanceChart===2)}}function ce(i,a){if(i&1&&(c(0,"mat-chip-listbox"),d(1,se,2,1,"mat-chip-option",14)(2,le,2,1,"mat-chip-option",14),m()),i&2){let t=h();n(),f(t.sortedStocks.length>0?1:-1),n(),f(t.sortedEtfs.length>0?2:-1)}}var He=(()=>{let a=class a{constructor(o,e){this.dataService=o,this.cdr=e,this.sortedStocks=[],this.sortedEtfs=[],this.sp500FiftyTwoWeekChange=0,this.fiftyTwoWeekChangeChartData=[],this.fiftyTwoWeekLowChartData=[],this.fiftyTwoWeekHighChartData=[],this.meanTargetPriceData=[],this.lowTargetPriceData=[],this.highTargetPriceData=[],this.fiftyDayMAChartData=[],this.twoHundredDayMAChartData=[],this.etfPerformanceChartData=[],this.sp500="S&P 500",this.selectedPerformanceChart=1,this.performanceChartColorScheme={domain:["slategrey"]},this.fiftyTwoWeekChartColorScheme={domain:["slategrey"]},this.targetPriceChartColorScheme={domain:["slategrey"]}}ngOnInit(){this.sortedStocks=this.dataService.portfolioStocks.sort((e,r)=>e["52WeekChange"].raw-r["52WeekChange"].raw),this.sortedEtfs=this.dataService.portfolioEtfs.sort((e,r)=>e.ytdReturn.raw-r.ytdReturn.raw),this.sp500FiftyTwoWeekChange=this.sortedStocks[0].SandP52WeekChange.raw,this.selectedSymbol=this.sortedStocks[0].symbol||this.sortedEtfs[0].symbol,this.selectedStock=this.dataService.getTickerData(this.selectedSymbol),this.selectedSymbolColor={name:this.selectedSymbol,value:"skyblue"},this.sortedStocks.forEach(e=>{this.fiftyDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.fiftyDayAverage.raw)/e.fiftyDayAverage.raw*100}),this.twoHundredDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.twoHundredDayAverage.raw)/e.twoHundredDayAverage.raw*100}),this.fiftyTwoWeekChangeChartData.push({name:e.symbol,value:e["52WeekChange"].raw*100}),this.fiftyTwoWeekLowChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.fiftyTwoWeekLow.raw)/e.fiftyTwoWeekLow.raw*100}),this.fiftyTwoWeekHighChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.fiftyTwoWeekHigh.raw)/e.fiftyTwoWeekHigh.raw*100}),e.targetMeanPrice.raw&&this.meanTargetPriceData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.targetMeanPrice.raw)/e.targetMeanPrice.raw*100}),e.targetLowPrice.raw&&this.lowTargetPriceData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.targetLowPrice.raw)/e.targetLowPrice.raw*100}),e.targetHighPrice.raw&&this.highTargetPriceData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.targetHighPrice.raw)/e.targetHighPrice.raw*100})}),this.fiftyTwoWeekChangeChartData.push({name:this.sp500,value:this.sortedStocks[0].SandP52WeekChange.raw*100}),this.fiftyDayMAChartData.sort((e,r)=>e.value-r.value),this.twoHundredDayMAChartData.sort((e,r)=>e.value-r.value),this.fiftyTwoWeekChangeChartData.sort((e,r)=>e.value-r.value),this.fiftyTwoWeekLowChartData.sort((e,r)=>e.value-r.value),this.fiftyTwoWeekHighChartData.sort((e,r)=>e.value-r.value),this.meanTargetPriceData.sort((e,r)=>e.value-r.value),this.lowTargetPriceData.sort((e,r)=>e.value-r.value),this.highTargetPriceData.sort((e,r)=>e.value-r.value);let o={ytd:"Year to Date",oneMonth:"One Month",threeMonth:"Three Month",oneYear:"One Year",threeYear:"Three Year",fiveYear:"Five Year",tenYear:"Ten Year"};Object.keys(o).forEach(e=>{let r={name:o[e],series:[]};this.sortedEtfs.forEach(g=>{r.series.push({name:g.symbol,value:g.fundPerformance.trailingReturns[e].raw*100})}),this.etfPerformanceChartData.push(r)})}changePerformanceChart(o){this.selectedPerformanceChart=o}updateSelectedStock(o){this.selectedSymbol=null,this.cdr.detectChanges(),this.selectedSymbol=o,this.selectedSymbolColor={name:o,value:"skyblue"},this.selectedStock=[this.dataService.getTickerData(o)],this.selectedStock[0].quoteType==="ETF"?this.changePerformanceChart(2):this.changePerformanceChart(1)}};a.\u0275fac=function(e){return new(e||a)(b(q),b(M))},a.\u0275cmp=T({type:a,selectors:[["portfolio-price-insights"]],standalone:!0,features:[S],decls:9,vars:4,consts:[["priceInsightsRef",""],["performanceChartsRef",""],["performanceChartsTitleRef",""],[3,"expandWidget"],["title","Price Insights",3,"mainContentRef"],["title","Performance Charts",3,"mainContentRef","titleContentRef"],[3,"selectedTicker"],[3,"symbol"],[1,"chart-container"],[1,"add-flex"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","xAxisLabel","yScaleMin","customColors","roundEdges"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","xAxisLabel","customColors","roundEdges"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yScaleMin","xAxisLabel","customColors","roundEdges"],[3,"results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","showDataLabel","rotateXAxisTicks","xAxisLabel","customColors","roundEdges"],[3,"selected"],[3,"click","selected"]],template:function(e,r){if(e&1&&(l(0,"portfolio-quotes",3),d(1,re,2,1,"ng-template",null,0,P),l(3,"container-card",4),d(4,ne,2,2,"ng-template",null,1,P)(6,ce,3,2,"ng-template",null,2,P),l(8,"container-card",5)),e&2){let g=v(2),K=v(5),U=v(7);s("expandWidget",!1),n(3),s("mainContentRef",g),n(5),s("mainContentRef",K)("titleContentRef",U)}},dependencies:[k,J,L,R,Y,I,X,W,V,F,E,N,H,B,O,j,Q,G,z],styles:[".chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.mat-divider[_ngcontent-%COMP%]{margin:1rem}"]});let i=a;return i})();export{He as PortfolioPriceInsightsComponent};
