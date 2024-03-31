import{b as j,c as N}from"./chunk-RCC3PFAX.js";import{d as M}from"./chunk-3JB3UZ5W.js";import{d as V}from"./chunk-ILMWSSAK.js";import{A as J}from"./chunk-FQZOB2GV.js";import{b as q}from"./chunk-KP5UVKCM.js";import{e as E,f as W,g as I,h as F}from"./chunk-5SSVH6JN.js";import{d as X,e as Y,i as H,j as B,l as R}from"./chunk-HNH6RBUO.js";import{a as T,b as k}from"./chunk-3ULOWT2I.js";import{a as O}from"./chunk-CYGSLZJH.js";import{Sa as _,Ta as L,i as w,j as D,q as P}from"./chunk-5D2EFSFN.js";import{$a as g,$b as u,Bb as o,Cb as a,Db as m,Lb as y,Mb as f,Vb as h,_a as s,_b as b,ac as p,bc as A,cc as S,ja as x,qb as v,sb as l}from"./chunk-IGZPA4PM.js";var U=()=>({"padding-right":"1.25rem"}),C=i=>[i],z=()=>["S&P 500"],G=()=>({name:"S&P 500",value:"gold"}),K=(i,n)=>[i,n],Z=()=>({name:"SCHD",value:"deepskyblue"}),$=()=>({name:"VYM",value:"maroon"}),ee=()=>({name:"JEPI",value:"dodgerblue"}),te=(i,n,r)=>[i,n,r];function ie(i,n){if(i&1&&(o(0,"div"),m(1,"stock-price-insight",14),a()),i&2){let r=f();s(),l("symbol",r.selectedSymbol)}}function ae(i,n){if(i&1&&(o(0,"div",11),m(1,"ngx-charts-bar-vertical",15),a()),i&2){let r=f();s(),l("scheme",r.performanceChartColorScheme)("results",r.fiftyDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 50 Day MA %")("yScaleMin",r.fiftyDayMAChartData[0].value-5)("customColors",p(12,C,r.selectedSymbolColor))}}function re(i,n){if(i&1&&(o(0,"div",11),m(1,"ngx-charts-bar-vertical",15),a()),i&2){let r=f();s(),l("scheme",r.performanceChartColorScheme)("results",r.twoHundredDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 200 Day MA %")("yScaleMin",r.twoHundredDayMAChartData[0].value-5)("customColors",p(12,C,r.selectedSymbolColor))}}function oe(i,n){if(i&1&&(o(0,"div",11),m(1,"ngx-charts-bar-vertical",16),a()),i&2){let r=f();s(),l("scheme",r.performanceChartColorScheme)("results",r.fiftyTwoWeekChangeChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","52 Week Change %")("activeEntries",u(12,z))("customColors",A(14,K,r.selectedSymbolColor,u(13,G)))}}function ne(i,n){if(i&1&&(o(0,"div",11),m(1,"ngx-charts-bar-vertical-2d",17),a()),i&2){let r=f();s(),l("results",r.etfPerformanceChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("showDataLabel",!0)("rotateXAxisTicks",!0)("yAxisLabel","ETF Performance %")("customColors",S(14,te,u(11,Z),u(12,$),u(13,ee)))}}var je=(()=>{let n=class n{constructor(c){this.dataService=c,this.sortedStocks=[],this.sortedEtfs=[],this.sp500FiftyTwoWeekChange=0,this.fiftyTwoWeekChangeChartData=[],this.fiftyTwoWeekLowChartData=[],this.fiftyTwoWeekHighChartData=[],this.discountChartData=[],this.fiftyDayMAChartData=[],this.twoHundredDayMAChartData=[],this.etfPerformanceChartData=[],this.sp500="S&P 500",this.selectedPerformanceChart=1,this.selectedSymbol="SCHD",this.selectedSymbolColor={name:"SCHD",value:"teal"},this.performanceChartColorScheme={domain:["slategrey"]},this.fiftyTwoWeekChartColorScheme={domain:["slategrey"]},this.targetPriceChartColorScheme={domain:["slategrey"]}}ngOnInit(){this.sortedStocks=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="EQUITY").sort((e,t)=>e["52WeekChange"]-t["52WeekChange"]),this.sortedEtfs=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="ETF").sort((e,t)=>e.ytdReturn-t.ytdReturn),this.sp500FiftyTwoWeekChange=this.sortedStocks[0].SandP52WeekChange,this.selectedStock=Object.values(this.dataService.portfolioData).filter(e=>e.symbol===this.selectedSymbol)[0],this.sortedStocks.forEach(e=>{this.fiftyTwoWeekChangeChartData.push({name:e.symbol,value:e["52WeekChange"]*100}),this.fiftyTwoWeekLowChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyTwoWeekLow)/e.fiftyTwoWeekLow*100}),this.fiftyTwoWeekHighChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyTwoWeekHigh)/e.fiftyTwoWeekHigh*100}),this.discountChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.targetMeanPrice)/e.targetMeanPrice*100}),this.fiftyDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyDayAverage)/e.fiftyDayAverage*100}),this.twoHundredDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.twoHundredDayAverage)/e.twoHundredDayAverage*100})}),this.fiftyTwoWeekChangeChartData.push({name:this.sp500,value:this.sortedStocks[0].SandP52WeekChange*100}),this.fiftyTwoWeekChangeChartData.sort((e,t)=>e.value-t.value),this.fiftyDayMAChartData.sort((e,t)=>e.value-t.value),this.twoHundredDayMAChartData.sort((e,t)=>e.value-t.value),this.fiftyTwoWeekLowChartData.sort((e,t)=>e.value-t.value),this.fiftyTwoWeekHighChartData.sort((e,t)=>e.value-t.value),this.discountChartData.sort((e,t)=>e.value-t.value);let c={ytd:"Year to Date",oneMonth:"One Month",threeMonth:"Three Month",oneYear:"One Year",threeYear:"Three Year",fiveYear:"Five Year",tenYear:"Ten Year"};Object.keys(c).forEach(e=>{let t={name:c[e],series:[]};this.sortedEtfs.forEach(d=>{t.series.push({name:d.symbol,value:d.fundPerformance.trailingReturns[e]*100})}),this.etfPerformanceChartData.push(t)})}refreshData(){this.dataService.updatePortfolioTechnicalInsights()}changePerformanceChart(c){this.selectedPerformanceChart=c}updateSelectedStock(c){this.selectedSymbol=null,setTimeout(()=>{this.selectedSymbolColor={name:c,value:"chocolate"},this.selectedSymbol=c,this.selectedStock=Object.values(this.dataService.portfolioData).filter(e=>e.symbol===this.selectedSymbol)[0]},50)}};n.\u0275fac=function(e){return new(e||n)(g(O))},n.\u0275cmp=x({type:n,selectors:[["portfolio-price-insights"]],standalone:!0,features:[b],decls:40,vars:47,consts:[[1,"add-border"],[1,"add-flex"],[1,"title"],["mat-button","","extended","","color","primary",1,"refresh-button",3,"click"],[3,"selectedTicker"],[4,"ngIf"],[1,"chart-header"],[3,"ngStyle"],["selected","",3,"click"],[3,"click"],["class","chart-container",4,"ngIf"],[1,"chart-container"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","customColors"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yScaleMin","yAxisLabel","customColors"],[3,"symbol"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","yScaleMin","customColors"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","activeEntries","customColors"],[3,"results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","showDataLabel","rotateXAxisTicks","yAxisLabel","customColors"]],template:function(e,t){e&1&&(m(0,"stock-price-movement-charts"),o(1,"section",0)(2,"div",1)(3,"div",2),h(4,"Price Insights"),a(),o(5,"button",3),y("click",function(){return t.refreshData()}),o(6,"mat-icon"),h(7,"cloud_sync"),a(),o(8,"span"),h(9,"Refresh Technical Insights"),a()()(),o(10,"stock-ticker-buttons",4),y("selectedTicker",function(Q){return t.updateSelectedStock(Q)}),a(),m(11,"mat-divider"),v(12,ie,2,1,"div",5),a(),o(13,"section",0)(14,"div",6)(15,"div",2)(16,"span"),h(17,"Performance"),a()(),o(18,"mat-chip-listbox",7)(19,"mat-chip-option",8),y("click",function(){return t.changePerformanceChart(1)}),h(20,"Moving Averages"),a(),o(21,"mat-chip-option",9),y("click",function(){return t.changePerformanceChart(2)}),h(22,"ETFs Performance"),a()()(),o(23,"div",1),v(24,ae,2,14,"div",10)(25,re,2,14,"div",10)(26,oe,2,17,"div",10),a(),v(27,ne,2,18,"div",10),a(),o(28,"section",0)(29,"div",6)(30,"div",2)(31,"span"),h(32,"Price vs 52 Week & Analyst Target"),a()()(),o(33,"div",1)(34,"div",11),m(35,"ngx-charts-bar-vertical",12),a(),o(36,"div",11),m(37,"ngx-charts-bar-vertical",12),a(),o(38,"div",11),m(39,"ngx-charts-bar-vertical",13),a()()()),e&2&&(s(12),l("ngIf",t.selectedSymbol),s(6),l("ngStyle",u(40,U)),s(6),l("ngIf",t.selectedPerformanceChart===1),s(),l("ngIf",t.selectedPerformanceChart===1),s(),l("ngIf",t.selectedPerformanceChart===1),s(),l("ngIf",t.selectedPerformanceChart===2),s(8),l("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekLowChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % above 52 week low")("customColors",p(41,C,t.selectedSymbolColor)),s(2),l("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekHighChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % below 52 week high")("customColors",p(43,C,t.selectedSymbolColor)),s(2),l("scheme",t.targetPriceChartColorScheme)("results",t.discountChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yScaleMin",-5)("yAxisLabel","Price % vs mean target price")("customColors",p(45,C,t.selectedSymbolColor)))},dependencies:[P,w,D,R,B,F,I,W,k,T,M,E,L,_,q,V,H,X,Y,J,j,N],styles:[".chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.refresh-button[_ngcontent-%COMP%]{margin-right:1rem}"]});let i=n;return i})();export{je as a};
