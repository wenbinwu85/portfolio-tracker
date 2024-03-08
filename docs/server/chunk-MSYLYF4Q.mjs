import './polyfills.server.mjs';
import{d as J}from"./chunk-VBZFI26U.mjs";import{b as be}from"./chunk-EJNVCZJD.mjs";import{a as we,b as Pe}from"./chunk-3255VLTN.mjs";import{d as K}from"./chunk-E2ID36ZF.mjs";import{d as ne,e as ae,f as re,h as oe,i as le,k as se,l as me,n as ce,o as de,q as he,s as pe,t as ue}from"./chunk-3COKWBAI.mjs";import{a as U,c as G}from"./chunk-7ZMFGXXX.mjs";import{a as Z,c as ee,d as te,g as ie}from"./chunk-GGEKHSFE.mjs";import{c as _e}from"./chunk-X6AOY3PN.mjs";import{e as fe,f as ge,g as ye,h as ve}from"./chunk-O6QRFAAF.mjs";import{b as Ce}from"./chunk-VE7BFPGR.mjs";import{a as N,b as q}from"./chunk-M6KIDLHG.mjs";import{a as xe}from"./chunk-YNHG5XWE.mjs";import{N as z}from"./chunk-UY3DO3X5.mjs";import{l as Y,m as E,n as B,r as j,s as Q,t as I}from"./chunk-6YJCKQYO.mjs";import{Db as l,Eb as o,Fb as d,Gb as C,Hb as x,Jb as V,Nb as b,Ob as g,Tb as T,Ub as D,Vb as M,Xb as m,Ya as F,Yb as y,Zb as v,ac as A,ba as w,bb as a,bc as u,cb as S,cc as O,ec as X,fa as W,fc as f,ga as H,gc as _,hc as k,ib as $,ja as P,sb as h,ub as c}from"./chunk-D5BORNAZ.mjs";var Me=["startThumb"],Ae=["endThumb"],ke=["line"];function Ee(e,n){e&1&&d(0,"div",6,7)}function Ie(e,n){e&1&&d(0,"div",6,8)}var Se=(()=>{let n=class n{constructor(s){this.renderer=s,this.showThumbs=!0,this.tooltip=""}ngOnInit(){this.tooltip=`Day range: $${this.lowThumbValue} - $${this.highThumbValue}`}ngAfterViewInit(){if(this.showThumbs){let s=(this.lowThumbValue-this.min)/(this.max-this.min)*this.line.nativeElement.offsetWidth;s=Math.round(s*100)/100,this.renderer.setStyle(this.startThumb.nativeElement,"left",`${s-8}px`);let t=(this.highThumbValue-this.min)/(this.max-this.min)*this.line.nativeElement.offsetWidth;t=Math.round(t*100)/100,this.renderer.setStyle(this.endThumb.nativeElement,"left",`${t-8}px`)}this.updateSliderGradient()}updateSliderGradient(){let s=(this.lowThumbValue-this.min)/(this.max-this.min)*100,t=(this.highThumbValue-this.min)/(this.max-this.min)*100,r=`linear-gradient(
      to right,
      lightgrey 0% ${s}%,
      orangered ${s}% ${t}%, 
      lightgrey ${t}% 100%
    )`;this.renderer.setStyle(this.line.nativeElement,"background",r)}};n.\u0275fac=function(t){return new(t||n)(S($))},n.\u0275cmp=w({type:n,selectors:[["stock-day-price-range"]],viewQuery:function(t,r){if(t&1&&(T(Me,5,P),T(Ae,5,P),T(ke,5,P)),t&2){let p;D(p=M())&&(r.startThumb=p.first),D(p=M())&&(r.endThumb=p.first),D(p=M())&&(r.line=p.first)}},inputs:{min:"min",max:"max",lowThumbValue:"lowThumbValue",highThumbValue:"highThumbValue",showThumbs:"showThumbs"},standalone:!0,features:[A],decls:13,vars:5,consts:[[1,"light-color"],[1,"line-container"],["matTooltipPosition","above",1,"line",3,"matTooltip"],["line",""],["class","dot",4,"ngIf"],[1,"label-wrapper"],[1,"dot"],["startThumb",""],["endThumb",""]],template:function(t,r){t&1&&(l(0,"div")(1,"span",0),m(2,"Day Range vs 52w Range"),o(),l(3,"div",1),d(4,"div",2,3),h(6,Ee,2,0,"div",4)(7,Ie,2,0,"div",4),o(),l(8,"div",5)(9,"span"),m(10),o(),l(11,"span"),m(12),o()()()),t&2&&(a(4),c("matTooltip",r.tooltip),a(2),c("ngIf",r.showThumbs),a(),c("ngIf",r.showThumbs),a(3),v("$",r.min,""),a(2),v("$",r.max,""))},dependencies:[I,E,Pe,we],styles:[".line-container[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;height:1rem;align-items:center}.line[_ngcontent-%COMP%]{width:100%;height:1rem;border:none;border-radius:5%;background:navy}.dot[_ngcontent-%COMP%]{position:absolute;width:.5rem;height:1rem;background-color:#2e8b57;border-radius:10%;z-index:1}.label-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.light-color[_ngcontent-%COMP%]{color:#fff}"]});let e=n;return e})();function Le(e,n){if(e&1){let i=V();l(0,"button",14),b("click",function(){let r=W(i).$implicit,p=g();return H(p.updateWidget(r.symbol))}),d(1,"img",15),l(2,"div"),m(3),o()()}if(e&2){let i=n.$implicit,s=g();a(),c("src",s.getLogoSource(i),F),a(2),y(i.symbol)}}function We(e,n){if(e&1){let i=V();l(0,"button",14),b("click",function(){let r=W(i).$implicit,p=g();return H(p.updateWidget(r.symbol))}),d(1,"img",15),l(2,"div"),m(3),o()()}if(e&2){let i=n.$implicit,s=g();a(),c("src",s.getLogoSource(i),F),a(2),y(i.symbol)}}function He(e,n){e&1&&(l(0,"th",30),m(1,"Symbol"),o())}var L=()=>({color:"seagreen"});function Fe(e,n){if(e&1&&(l(0,"td",31)(1,"span"),m(2),o(),l(3,"span",6),m(4),f(5,"currency"),o()()),e&2){let i=n.$implicit;a(2),y(i.symbol),a(),c("ngStyle",u(5,L)),a(),v(" ",_(5,3,i.currentPrice),"")}}function Ve(e,n){e&1&&(l(0,"th",30),m(1,"52 Week Low"),o())}function Re(e,n){if(e&1&&(l(0,"td",31),m(1),f(2,"currency"),o()),e&2){let i=n.$implicit;a(),y(_(2,1,i.fiftyTwoWeekLow))}}function $e(e,n){e&1&&(l(0,"th",30),m(1,"Day Low"),o())}function Oe(e,n){if(e&1&&(l(0,"td",31)(1,"span"),m(2),f(3,"currency"),o(),l(4,"span",6),m(5),o()()),e&2){let i=n.$implicit;a(2),y(_(3,3,i.dayLow)),a(2),c("ngStyle",u(5,L)),a(),v(" +",(i.dayLow-i.fiftyTwoWeekLow).toFixed(2),"")}}function Xe(e,n){e&1&&(l(0,"th",30),m(1,"Day High"),o())}function Ye(e,n){if(e&1&&(l(0,"td",31)(1,"span"),m(2),f(3,"currency"),o(),l(4,"span",6),m(5),o()()),e&2){let i=n.$implicit;a(2),y(_(3,3,i.dayHigh)),a(2),c("ngStyle",u(5,L)),a(),v(" +",(i.dayHigh-i.dayLow).toFixed(2),"")}}function Be(e,n){e&1&&(l(0,"th",30),m(1,"52 Week High"),o())}function je(e,n){if(e&1&&(l(0,"td",31)(1,"span"),m(2),f(3,"currency"),o(),l(4,"span",6),m(5),o()()),e&2){let i=n.$implicit;a(2),y(_(3,3,i.fiftyTwoWeekHigh)),a(2),c("ngStyle",u(5,L)),a(),v(" +",(i.fiftyTwoWeekHigh-i.dayHigh).toFixed(2),"")}}function Qe(e,n){e&1&&(l(0,"th",30),m(1,"Target Price Low"),o())}var R=()=>({color:"navy"});function Ne(e,n){if(e&1&&(l(0,"td",31)(1,"span"),m(2),f(3,"currency"),o(),l(4,"span",6),m(5),f(6,"percent"),o()()),e&2){let i=n.$implicit;a(2),y(_(3,3,i.targetLowPrice)),a(2),c("ngStyle",u(8,R)),a(),v(" (",k(6,5,(i.targetLowPrice-i.currentPrice)/i.currentPrice,".2"),")")}}function qe(e,n){e&1&&(l(0,"th",30),m(1,"Target Price Median"),o())}function ze(e,n){if(e&1&&(l(0,"td",31)(1,"span"),m(2),f(3,"currency"),o(),l(4,"span",6),m(5),f(6,"percent"),o()()),e&2){let i=n.$implicit;a(2),y(_(3,3,i.targetMedianPrice)),a(2),c("ngStyle",u(8,R)),a(),v(" (",k(6,5,(i.targetMedianPrice-i.currentPrice)/i.currentPrice,".2"),")")}}function Ue(e,n){e&1&&(l(0,"th",30),m(1,"52 Week High"),o())}function Ge(e,n){if(e&1&&(l(0,"td",31)(1,"span"),m(2),f(3,"currency"),o(),l(4,"span",6),m(5),f(6,"percent"),o()()),e&2){let i=n.$implicit;a(2),y(_(3,3,i.targetHighPrice)),a(2),c("ngStyle",u(8,R)),a(),v(" (",k(6,5,(i.targetHighPrice-i.currentPrice)/i.currentPrice,".2"),")")}}function Je(e,n){e&1&&d(0,"tr",32)}function Ke(e,n){e&1&&d(0,"tr",33)}function Ze(e,n){if(e&1&&(l(0,"div",16)(1,"table",17),C(2,18),h(3,He,2,0,"th",19)(4,Fe,6,6,"td",20),x(),C(5,21),h(6,Ve,2,0,"th",19)(7,Re,3,3,"td",20),x(),C(8,22),h(9,$e,2,0,"th",19)(10,Oe,6,6,"td",20),x(),C(11,23),h(12,Xe,2,0,"th",19)(13,Ye,6,6,"td",20),x(),C(14,24),h(15,Be,2,0,"th",19)(16,je,6,6,"td",20),x(),C(17,25),h(18,Qe,2,0,"th",19)(19,Ne,7,9,"td",20),x(),C(20,26),h(21,qe,2,0,"th",19)(22,ze,7,9,"td",20),x(),C(23,27),h(24,Ue,2,0,"th",19)(25,Ge,7,9,"td",20),x(),h(26,Je,1,0,"tr",28)(27,Ke,1,0,"tr",29),o()()),e&2){let i=g();a(),c("dataSource",i.getTableDataSource()),a(25),c("matHeaderRowDef",i.tableColumns),a(),c("matRowDefColumns",i.tableColumns)}}function et(e,n){if(e&1&&(l(0,"div",16)(1,"span"),m(2,"Day Range vs 52 week Range"),o(),d(3,"stock-day-price-range",34),o()),e&2){let i=g();a(3),c("min",i.getStock().fiftyTwoWeekLow)("max",i.getStock().fiftyTwoWeekHigh)("lowThumbValue",i.getStock().dayLow)("highThumbValue",i.getStock().dayHigh)("showThumbs",!1)}}function tt(e,n){if(e&1&&(l(0,"div",11),d(1,"ngx-charts-bar-vertical",13),o()),e&2){let i=g();a(),c("scheme",i.performanceChartColorScheme)("animations",!0)("results",i.fiftyDayMAChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Price vs 50 Day MA %")("rotateXAxisTicks",!0)("yScaleMin",i.fiftyDayMAChartData[0].value-5)}}function it(e,n){if(e&1&&(l(0,"div",11),d(1,"ngx-charts-bar-vertical",13),o()),e&2){let i=g();a(),c("scheme","air")("scheme",i.performanceChartColorScheme)("animations",!0)("results",i.twoHundredDayMAChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Price vs 200 Day MA %")("rotateXAxisTicks",!0)("yScaleMin",i.twoHundredDayMAChartData[0].value-5)}}var nt=()=>["S&P 500"],at=()=>({name:"S&P 500",value:"gold"}),rt=e=>[e];function ot(e,n){if(e&1&&(l(0,"div",11),d(1,"ngx-charts-bar-vertical",35),o()),e&2){let i=g();a(),c("scheme",i.performanceChartColorScheme)("animations",!0)("results",i.fiftyTwoWeekChangeChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","52 Week Change %")("rotateXAxisTicks",!0)("activeEntries",u(12,nt))("customColors",O(14,rt,u(13,at)))}}var lt=()=>({name:"SCHD",value:"deepskyblue"}),st=()=>({name:"VYM",value:"maroon"}),mt=()=>({name:"JEPI",value:"dodgerblue"}),ct=(e,n,i)=>[e,n,i];function dt(e,n){if(e&1&&(l(0,"div",11),d(1,"ngx-charts-bar-vertical-2d",36),o()),e&2){let i=g();a(),c("animations",!0)("results",i.etfPerformanceChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","ETF Performance %")("showDataLabel",!0)("rotateXAxisTicks",!0)("customColors",X(14,ct,u(11,lt),u(12,st),u(13,mt)))}}var ht=()=>({padding:"1.25rem"}),Kt=(()=>{let n=class n{constructor(s){this.dataService=s,this.sortedStocks=[],this.sortedEtfs=[],this.fiftyTwoWeekChangeChartData=[],this.fiftyTwoWeekLowChartData=[],this.fiftyTwoWeekHighChartData=[],this.fiftyDayMAChartData=[],this.twoHundredDayMAChartData=[],this.discountChartData=[],this.displayTradingviewWidgets=!1,this.sp500FiftyTwoWeekChange=0,this.etfPerformanceChartData=[],this.sp500="S&P 500",this.activeSymbol=[{name:this.sp500}],this.customColor=[{name:this.sp500,value:"orangered"}],this.selectedPerformanceChart=1,this.selectedVSChart=1,this.scaleType=Z,this.selectedSymbol="SCHD",this.performanceChartColorScheme={domain:["lightsteelblue"]},this.fiftyTwoWeekChartColorScheme={domain:["lightsteelblue"]},this.targetPriceChartColorScheme={domain:["lightsteelblue"]},this.tableColumns=["symbol","fiftyTwoWeekLow","dayLow","dayHigh","fiftyTwoWeekHigh","targetLowPrice","targetMedianPrice","targetHighPrice"]}ngOnInit(){this.sortedStocks=Object.values(this.dataService.portfolioData).filter(t=>t.quoteType==="EQUITY").sort((t,r)=>t["52WeekChange"]-r["52WeekChange"]),this.sortedEtfs=Object.values(this.dataService.portfolioData).filter(t=>t.quoteType==="ETF").sort((t,r)=>t.ytdReturn-r.ytdReturn),this.sp500FiftyTwoWeekChange=this.sortedStocks[0].SandP52WeekChange,this.sortedStocks.forEach(t=>{this.fiftyTwoWeekChangeChartData.push({name:t.symbol,value:t["52WeekChange"]*100}),this.fiftyTwoWeekLowChartData.push({name:t.symbol,value:(t.regularMarketPrice-t.fiftyTwoWeekLow)/t.fiftyTwoWeekLow*100}),this.fiftyTwoWeekHighChartData.push({name:t.symbol,value:(t.regularMarketPrice-t.fiftyTwoWeekHigh)/t.fiftyTwoWeekHigh*100}),this.discountChartData.push({name:t.symbol,value:(t.regularMarketPrice-t.targetMeanPrice)/t.targetMeanPrice*100}),this.fiftyDayMAChartData.push({name:t.symbol,value:(t.regularMarketPrice-t.fiftyDayAverage)/t.fiftyDayAverage*100}),this.twoHundredDayMAChartData.push({name:t.symbol,value:(t.regularMarketPrice-t.twoHundredDayAverage)/t.twoHundredDayAverage*100})}),this.fiftyTwoWeekChangeChartData.push({name:this.sp500,value:this.sortedStocks[0].SandP52WeekChange*100}),this.fiftyTwoWeekChangeChartData.sort((t,r)=>t.value-r.value),this.fiftyDayMAChartData.sort((t,r)=>t.value-r.value),this.twoHundredDayMAChartData.sort((t,r)=>t.value-r.value),this.fiftyTwoWeekLowChartData.sort((t,r)=>t.value-r.value),this.fiftyTwoWeekHighChartData.sort((t,r)=>t.value-r.value),this.discountChartData.sort((t,r)=>t.value-r.value);let s={ytd:"Year to Date",oneMonth:"One Month",threeMonth:"Three Month",oneYear:"One Year",threeYear:"Three Year",fiveYear:"Five Year",tenYear:"Ten Year"};Object.keys(s).forEach(t=>{if(s[t]){let r={name:s[t],series:[]};this.sortedEtfs.forEach(p=>{r.series.push({name:p.symbol,value:p.fundPerformance.trailingReturns[t]*100})}),this.etfPerformanceChartData.push(r)}})}getSP500ChangeColor(s){return this.sp500FiftyTwoWeekChange>0?"seagreen":"orangered"}getTooltipData(s){return Object.values(this.dataService.portfolioData).filter(t=>t.symbol===s)[0]}changePerformanceChart(s){this.selectedPerformanceChart=s}changeVSCharts(s){this.selectedVSChart=s}getLogoSource(s){return`/assets/ticker-logos/${s.symbol}.png`}updateWidget(s){this.selectedSymbol="",setTimeout(()=>this.selectedSymbol=s,50)}get getWidget(){return{widget:_e,inputs:{symbol:this.selectedSymbol}}}getStock(){return Object.values(this.dataService.portfolioData).filter(s=>s.symbol===this.selectedSymbol)[0]}getTableDataSource(){let s=this.getStock(),t=new ue;return t.data=[s],t}};n.\u0275fac=function(t){return new(t||n)(S(xe))},n.\u0275cmp=w({type:n,selectors:[["portfolio-price-insights"]],standalone:!0,features:[A],decls:39,vars:41,consts:[[1,"add-border"],[1,"title"],[1,"logos-container"],["mat-button","","class","ticker-button",3,"click",4,"ngFor","ngForOf"],["class","add-margin",4,"ngIf"],[1,"chart-header"],[3,"ngStyle"],["selected","",3,"click"],[3,"click"],[1,"add-flex"],["class","chart-container",4,"ngIf"],[1,"chart-container"],[3,"scheme","animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","rotateXAxisTicks"],[3,"scheme","animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","rotateXAxisTicks","yScaleMin"],["mat-button","",1,"ticker-button",3,"click"],["alt","Logo","width","auto","height","35",3,"src"],[1,"add-margin"],["mat-table","",3,"dataSource"],["matColumnDef","symbol"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fiftyTwoWeekLow"],["matColumnDef","dayLow"],["matColumnDef","dayHigh"],["matColumnDef","fiftyTwoWeekHigh"],["matColumnDef","targetLowPrice"],["matColumnDef","targetMedianPrice"],["matColumnDef","targetHighPrice"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[3,"min","max","lowThumbValue","highThumbValue","showThumbs"],[3,"scheme","animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","rotateXAxisTicks","activeEntries","customColors"],[3,"animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","showDataLabel","rotateXAxisTicks","customColors"]],template:function(t,r){t&1&&(l(0,"section",0)(1,"div",1),m(2,"Price Insights"),o(),l(3,"div",2),h(4,Le,4,2,"button",3),o(),l(5,"div",2),h(6,We,4,2,"button",3),o(),d(7,"mat-divider"),h(8,Ze,28,3,"div",4),d(9,"mat-divider"),h(10,et,4,5,"div",4),o(),d(11,"price-movement-charts"),l(12,"section",0)(13,"div",5)(14,"div",1)(15,"span"),m(16,"Performance"),o()(),l(17,"mat-chip-listbox",6)(18,"mat-chip-option",7),b("click",function(){return r.changePerformanceChart(1)}),m(19,"Moving Averages"),o(),l(20,"mat-chip-option",8),b("click",function(){return r.changePerformanceChart(2)}),m(21,"ETFs Performance"),o()()(),l(22,"div",9),h(23,tt,2,11,"div",10)(24,it,2,12,"div",10)(25,ot,2,16,"div",10),o(),h(26,dt,2,18,"div",10),o(),l(27,"section",0)(28,"div",5)(29,"div",1)(30,"span"),m(31,"Price vs 52 Week & Analyst Target"),o()()(),l(32,"div",9)(33,"div",11),d(34,"ngx-charts-bar-vertical",12),o(),l(35,"div",11),d(36,"ngx-charts-bar-vertical",12),o(),l(37,"div",11),d(38,"ngx-charts-bar-vertical",13),o()()()),t&2&&(a(4),c("ngForOf",r.sortedStocks),a(2),c("ngForOf",r.sortedEtfs),a(2),c("ngIf",r.selectedSymbol),a(2),c("ngIf",r.selectedSymbol),a(7),c("ngStyle",u(40,ht)),a(6),c("ngIf",r.selectedPerformanceChart===1),a(),c("ngIf",r.selectedPerformanceChart===1),a(),c("ngIf",r.selectedPerformanceChart===1),a(),c("ngIf",r.selectedPerformanceChart===2),a(8),c("scheme",r.fiftyTwoWeekChartColorScheme)("animations",!0)("results",r.fiftyTwoWeekLowChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Price % above 52 week low")("rotateXAxisTicks",!0),a(2),c("scheme",r.fiftyTwoWeekChartColorScheme)("animations",!0)("results",r.fiftyTwoWeekHighChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Price % below 52 week high")("rotateXAxisTicks",!0),a(2),c("scheme",r.targetPriceChartColorScheme)("animations",!0)("results",r.discountChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Price % vs mean target price")("rotateXAxisTicks",!0)("yScaleMin",-5))},dependencies:[I,Y,E,B,j,Q,G,U,ve,ye,ge,q,N,K,fe,z,Ce,pe,ne,re,me,oe,ae,ce,le,se,de,he,J,ie,ee,te,be,Se],styles:[".chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.logos-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 1rem 1rem}.ticker-button[_ngcontent-%COMP%]{align-items:center;height:5rem}"]});let e=n;return e})();export{Kt as a};
