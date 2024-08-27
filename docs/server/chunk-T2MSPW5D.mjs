import './polyfills.server.mjs';
import"./chunk-YKHXELYT.mjs";import"./chunk-WAANU3AT.mjs";import"./chunk-2XAWSPAR.mjs";import{z}from"./chunk-HC6P3KSM.mjs";import{a as G}from"./chunk-BF5KIIXG.mjs";import{c as E}from"./chunk-ONB52HBV.mjs";import{b as Q}from"./chunk-TRVAYCXN.mjs";import"./chunk-ZGX3YCIV.mjs";import{f as H}from"./chunk-UW64HPEC.mjs";import"./chunk-UG7MNDDY.mjs";import"./chunk-DBK27LC2.mjs";import{b as N}from"./chunk-5E6T7AGC.mjs";import{b as O,c as j,g as B}from"./chunk-MU4DYLL5.mjs";import"./chunk-G4773PNV.mjs";import"./chunk-C74A6LGH.mjs";import{e as F,g as Y,h as I,i as R}from"./chunk-CXBYSPLP.mjs";import"./chunk-FVKIIOQU.mjs";import{d as V}from"./chunk-SVGEU7K3.mjs";import"./chunk-VLBZUPN5.mjs";import"./chunk-AW6XDVFB.mjs";import"./chunk-YG54OGXN.mjs";import{b as W,c as q}from"./chunk-XXXBHDGF.mjs";import{f as J}from"./chunk-WTBYBICK.mjs";import{R as X}from"./chunk-BD6CSYZT.mjs";import"./chunk-HR4XK63X.mjs";import{Cb as l,Db as c,Eb as m,Ib as w,Lb as _,Nb as h,Xb as A,Ya as n,Yb as S,Za as b,bc as T,cc as f,cd as L,dc as p,ec as D,fa as P,fc as k,jc as v,na as g,oa as y,qb as u,sb as s,vc as M,xb as d}from"./chunk-QYGPEMDX.mjs";import"./chunk-5XUXGTUW.mjs";var C=i=>[i],Z=()=>["S&P 500"],$=()=>({name:"S&P 500",value:"gold"}),ee=(i,r)=>[i,r],te=()=>({name:"SCHD",value:"deepskyblue"}),ie=()=>({name:"VYM",value:"maroon"}),oe=()=>({name:"JEPI",value:"dodgerblue"}),re=(i,r,t)=>[i,r,t];function ae(i,r){if(i&1&&m(0,"stock-price-insight",7),i&2){let t=h(2);s("symbol",t.selectedSymbol)}}function ne(i,r){if(i&1){let t=w();l(0,"portfolio-ticker-buttons",6),_("selectedTicker",function(e){g(t);let o=h();return y(o.updateSelectedStock(e))}),c(),u(1,ae,1,1,"stock-price-insight",7)}if(i&2){let t=h();n(),d(t.selectedSymbol?1:-1)}}function se(i,r){if(i&1&&(l(0,"div",9)(1,"div",8),m(2,"ngx-charts-bar-vertical",10),c(),l(3,"div",8),m(4,"ngx-charts-bar-vertical",10),c()(),l(5,"div",9)(6,"div",8),m(7,"ngx-charts-bar-vertical",11),c(),l(8,"div",8),m(9,"ngx-charts-bar-vertical",11),c()(),l(10,"div",9)(11,"div",8),m(12,"ngx-charts-bar-vertical",12),c(),l(13,"div",8),m(14,"ngx-charts-bar-vertical",13),c()()),i&2){let t=h(2);n(2),s("scheme",t.performanceChartColorScheme)("results",t.fiftyDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 50 Day MA %")("yScaleMin",t.fiftyDayMAChartData[0].value-5)("customColors",p(76,C,t.selectedSymbolColor))("roundEdges",!1),n(2),s("scheme",t.performanceChartColorScheme)("results",t.twoHundredDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 200 Day MA %")("yScaleMin",t.twoHundredDayMAChartData[0].value-5)("customColors",p(78,C,t.selectedSymbolColor))("roundEdges",!1),n(3),s("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekLowChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % above 52 week low")("customColors",p(80,C,t.selectedSymbolColor))("roundEdges",!1),n(2),s("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekHighChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % below 52 week high")("customColors",p(82,C,t.selectedSymbolColor))("roundEdges",!1),n(3),s("scheme",t.performanceChartColorScheme)("results",t.fiftyTwoWeekChangeChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","52 Week Change %")("activeEntries",f(84,Z))("customColors",D(86,ee,t.selectedSymbolColor,f(85,$)))("roundEdges",!1),n(2),s("scheme",t.targetPriceChartColorScheme)("results",t.discountChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yScaleMin",-5)("yAxisLabel","Price % vs mean target price")("customColors",p(89,C,t.selectedSymbolColor))("roundEdges",!1)}}function le(i,r){if(i&1&&(l(0,"div",8),m(1,"ngx-charts-bar-vertical-2d",14),c()),i&2){let t=h(2);n(),s("results",t.etfPerformanceChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("showDataLabel",!0)("rotateXAxisTicks",!0)("yAxisLabel","ETF Performance %")("customColors",k(15,re,f(12,te),f(13,ie),f(14,oe)))("roundEdges",!1)}}function ce(i,r){if(i&1&&u(0,se,15,91)(1,le,2,19,"div",8),i&2){let t=h();d(t.selectedPerformanceChart===1?0:-1),n(),d(t.selectedPerformanceChart===2?1:-1)}}function me(i,r){if(i&1){let t=w();l(0,"mat-chip-option",16),_("click",function(){g(t);let e=h(2);return y(e.changePerformanceChart(1))}),S(1," Stocks "),c()}if(i&2){let t=h(2);s("selected",t.selectedPerformanceChart===1)}}function he(i,r){if(i&1){let t=w();l(0,"mat-chip-option",16),_("click",function(){g(t);let e=h(2);return y(e.changePerformanceChart(2))}),S(1," ETFs "),c()}if(i&2){let t=h(2);s("selected",t.selectedPerformanceChart===2)}}function ue(i,r){if(i&1&&(l(0,"mat-chip-listbox"),u(1,me,2,1,"mat-chip-option",15)(2,he,2,1,"mat-chip-option",15),c()),i&2){let t=h();n(),d(t.sortedStocks.length>0?1:-1),n(),d(t.sortedEtfs.length>0?2:-1)}}var Oe=(()=>{let r=class r{constructor(a,e){this.dataService=a,this.cdr=e,this.sortedStocks=[],this.sortedEtfs=[],this.sp500FiftyTwoWeekChange=0,this.fiftyTwoWeekChangeChartData=[],this.fiftyTwoWeekLowChartData=[],this.fiftyTwoWeekHighChartData=[],this.discountChartData=[],this.fiftyDayMAChartData=[],this.twoHundredDayMAChartData=[],this.etfPerformanceChartData=[],this.sp500="S&P 500",this.selectedPerformanceChart=1,this.performanceChartColorScheme={domain:["slategrey"]},this.fiftyTwoWeekChartColorScheme={domain:["slategrey"]},this.targetPriceChartColorScheme={domain:["slategrey"]}}ngOnInit(){this.sortedStocks=this.dataService.portfolioStocks.sort((e,o)=>e["52WeekChange"].raw-o["52WeekChange"].raw),this.sortedEtfs=this.dataService.portfolioEtfs.sort((e,o)=>e.ytdReturn.raw-o.ytdReturn.raw),this.sp500FiftyTwoWeekChange=this.sortedStocks[0].SandP52WeekChange.raw,this.selectedSymbol=this.sortedStocks[0].symbol||this.sortedEtfs[0].symbol,this.selectedStock=this.dataService.getTickerData(this.selectedSymbol),this.selectedSymbolColor={name:this.selectedSymbol,value:"skyblue"},this.sortedStocks.forEach(e=>{this.fiftyDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.fiftyDayAverage.raw)/e.fiftyDayAverage.raw*100}),this.twoHundredDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.twoHundredDayAverage.raw)/e.twoHundredDayAverage.raw*100}),this.fiftyTwoWeekChangeChartData.push({name:e.symbol,value:e["52WeekChange"].raw*100}),console.log(e.symbol,e["52WeekChange"].raw),this.fiftyTwoWeekLowChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.fiftyTwoWeekLow.raw)/e.fiftyTwoWeekLow.raw*100}),this.fiftyTwoWeekHighChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.fiftyTwoWeekHigh.raw)/e.fiftyTwoWeekHigh.raw*100}),e.targetMeanPrice.raw&&this.discountChartData.push({name:e.symbol,value:(e.regularMarketPrice.raw-e.targetMeanPrice.raw)/e.targetMeanPrice.raw*100})}),this.fiftyTwoWeekChangeChartData.push({name:this.sp500,value:this.sortedStocks[0].SandP52WeekChange.raw*100}),this.fiftyDayMAChartData.sort((e,o)=>e.value-o.value),this.twoHundredDayMAChartData.sort((e,o)=>e.value-o.value),this.fiftyTwoWeekChangeChartData.sort((e,o)=>e.value-o.value),this.fiftyTwoWeekLowChartData.sort((e,o)=>e.value-o.value),this.fiftyTwoWeekHighChartData.sort((e,o)=>e.value-o.value),this.discountChartData.sort((e,o)=>e.value-o.value);let a={ytd:"Year to Date",oneMonth:"One Month",threeMonth:"Three Month",oneYear:"One Year",threeYear:"Three Year",fiveYear:"Five Year",tenYear:"Ten Year"};Object.keys(a).forEach(e=>{let o={name:a[e],series:[]};this.sortedEtfs.forEach(x=>{o.series.push({name:x.symbol,value:x.fundPerformance.trailingReturns[e].raw*100})}),this.etfPerformanceChartData.push(o)})}changePerformanceChart(a){this.selectedPerformanceChart=a}updateSelectedStock(a){this.selectedSymbol=null,this.cdr.detectChanges(),this.selectedSymbol=a,this.selectedSymbolColor={name:a,value:"skyblue"},this.selectedStock=[this.dataService.getTickerData(a)],this.selectedStock[0].quoteType==="ETF"?this.changePerformanceChart(2):this.changePerformanceChart(1)}};r.\u0275fac=function(e){return new(e||r)(b(q),b(M))},r.\u0275cmp=P({type:r,selectors:[["portfolio-price-insights"]],standalone:!0,features:[T],decls:9,vars:4,consts:[["priceInsightsRef",""],["performanceChartsRef",""],["performanceChartsTitleRef",""],[3,"expandWidget"],["title","Price Insights",3,"mainContentRef"],["title","Performance Charts",3,"mainContentRef","titleContentRef"],[3,"selectedTicker"],[3,"symbol"],[1,"chart-container"],[1,"add-flex"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","yScaleMin","customColors","roundEdges"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","customColors","roundEdges"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","activeEntries","customColors","roundEdges"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yScaleMin","yAxisLabel","customColors","roundEdges"],[3,"results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","showDataLabel","rotateXAxisTicks","yAxisLabel","customColors","roundEdges"],[3,"selected"],[3,"click","selected"]],template:function(e,o){if(e&1&&(m(0,"portfolio-quotes",3),u(1,ne,2,1,"ng-template",null,0,v),m(3,"container-card",4),u(4,ce,2,2,"ng-template",null,1,v)(6,ue,3,2,"ng-template",null,2,v),m(8,"container-card",5)),e&2){let x=A(2),K=A(5),U=A(7);s("expandWidget",!1),n(3),s("mainContentRef",x),n(5),s("mainContentRef",K)("titleContentRef",U)}},dependencies:[L,J,E,R,I,Y,X,V,F,W,N,H,B,O,j,Q,G,z],styles:[".chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]});let i=r;return i})();export{Oe as PortfolioPriceInsightsComponent};
