import './polyfills.server.mjs';
import{a as te}from"./chunk-LQXQ76MO.mjs";import{a as C,b as Q,c as j,d as D,e as B,f as q,h as U,i as X,k as z,l as G,n as J,o as K,q as W,s as Z,t as ee,u as oe}from"./chunk-54E7FKC7.mjs";import{a as L,c as k}from"./chunk-L5DUAMJC.mjs";import{b as V,g as N}from"./chunk-ZUM34HXI.mjs";import{a as ie}from"./chunk-IPNQQRZT.mjs";import{a as ne}from"./chunk-WUBBEX7Z.mjs";import{M as $,N as H}from"./chunk-FRE24EMT.mjs";import{l as F,m as Y}from"./chunk-ILXILXJ3.mjs";import{$b as P,Cb as l,Db as s,Eb as v,Fb as g,Gb as b,Ib as h,Mb as y,Nb as c,Sb as S,Tb as w,Ub as M,Vb as O,Wb as p,Xb as I,ab as r,bb as E,hc as R,ja as T,rb as u,ta as _,tb as d,ua as x}from"./chunk-CTKXV6KZ.mjs";function ae(t,o){if(t&1&&(g(0),v(1,"info-card",9),b()),t&2){let i=o.$implicit;r(),d("icon",i.icon)("value",i.value)("valueType",i.valueType)("subtitle",i.subtitle)("color",i.color)("accentColor",i.color)}}function re(t,o){if(t&1&&(l(0,"section",7),u(1,ae,2,6,"ng-container",8),s()),t&2){let i=c();r(),d("ngForOf",i.infoCards)}}function de(t,o){if(t&1){let i=h();l(0,"section",10)(1,"div",11)(2,"span",12),p(3,"Dividend History"),s(),l(4,"button",13),y("click",function(){_(i);let e=c();return x(e.refreshDividend(e.selectedSymbol,!0))}),l(5,"mat-icon"),p(6,"cloud_sync"),s(),l(7,"span"),p(8,"Refresh Dividend History"),s()()(),v(9,"app-echart",14),s()}if(t&2){let i=c();r(9),d("options",i.echartOptions)}}function le(t,o){if(t&1&&(l(0,"div",16),v(1,"ngx-charts-area-chart",17),s()),t&2){let i=c(2);r(),d("scheme",i.dividendChartColorScheme)("results",i.dividendLineChartData)("xAxisLabel",i.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("autoScale",!0)("animations",!0)("gradient",!0)("yScaleMin",0)}}function se(t,o){if(t&1){let i=h();l(0,"section",10)(1,"div",11)(2,"span",12),p(3,"Dividend History"),s(),l(4,"button",13),y("click",function(){_(i);let e=c();return x(e.refreshDividend(e.selectedSymbol,!0))}),l(5,"mat-icon"),p(6,"cloud_sync"),s(),l(7,"span"),p(8,"Refresh Dividend History"),s()()(),u(9,le,2,12,"div",15),s()}if(t&2){let i=c();r(9),d("ngIf",i.dividendLineChartData)}}function ce(t,o){if(t&1&&(l(0,"th",21),p(1),s()),t&2){let i=c().index,n=c();r(),I(n.headers[i])}}function me(t,o){if(t&1&&(l(0,"div",24),v(1,"stock-name-card",25),s()),t&2){let i=c().$implicit;r(),d("stock",i)}}function fe(t,o){if(t&1){let i=h();l(0,"span",26),y("click",function(){_(i);let e=c().$implicit,a=c(2);return x(a.refreshDividend(e.symbol,!1))}),p(1),s()}if(t&2){let i=c().$implicit,n=c().index,e=c();r(),I(e.cells[n](i))}}function pe(t,o){if(t&1&&(l(0,"td",22),u(1,me,2,1,"div",23)(2,fe,2,1,"ng-template",null,0,R),s()),t&2){let i=O(3),n=c().index;r(),d("ngIf",n===0)("ngIfElse",i)}}function ue(t,o){if(t&1&&(g(0,18),u(1,ce,2,1,"th",19)(2,pe,4,2,"td",20),b()),t&2){let i=o.$implicit;d("matColumnDef",i)}}function ve(t,o){t&1&&v(0,"tr",27)}function _e(t,o){t&1&&v(0,"tr",28)}var Re=(()=>{let o=class o{constructor(n){this.dataService=n,this.browser="",this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbol="SCHD",this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.dividendChartColorScheme={domain:["navy"]},this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new ee,this.headers=["Symbol","Dividend Rate","Dividend Rate (TTM)","Dividend Yield","Dividend Yield (TTM)","5Y Avg. Yield","Payout Ratio","Free Cash Flow Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendRate","trailingAnnualDividendRate","dividendYield","trailingAnnualDividendYield","fiveYearAvgDividendYield","payoutRatio","fcfPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[e=>"",e=>`$${e.dividendRate?.toFixed(2)}`,e=>`$${e.trailingAnnualDividendRate?.toFixed(2)||0}`,e=>`${(e.dividendYield*100||0).toFixed(2)}%`,e=>`${(e.trailingAnnualDividendYield*100||0).toFixed(2)}%`,e=>`${(e.fiveYearAvgDividendYield||0).toFixed(2)}%`,e=>`${(e.payoutRatio*100||0).toFixed(2)}%`,e=>e.quoteType==="EQUITY"&&e.fcfPayoutRatio!==0?`${(e.fcfPayoutRatio*100).toFixed(2)}%`:"N/A",e=>`$${e.lastDividendValue?.toFixed(2)||0}`,e=>e.calendarEvents?.exDividendDate?new Date(e.calendarEvents.exDividendDate).toDateString():"N/A",e=>e.calendarEvents?.dividendDate?new Date(e.calendarEvents.dividendDate).toDateString():"N/A"]}ngOnInit(){this.dataSource.data=Object.values(this.dataService.portfolioData).filter(n=>n.dividendYield),this.dividendIncome=this.dataService.portfolioHoldings?.portfolioDividendIncome,this.portfolioYieldOnCost=this.dataService.portfolioHoldings?.portfolioYieldOnCost,this.browser=this.getBrowserName(),this.setInfoCards(),this.refreshDividend(this.selectedSymbol,!1)}ngAfterViewInit(){this.dataSource.sort=this.sort}getBrowserName(){let n=window?.navigator.userAgent.toLowerCase();return n.indexOf("edge")>-1?"Microsoft Edge":n.indexOf("edg")>-1?"Chromium-based Edge":n.indexOf("opr")>-1?"Opera":n.indexOf("chrome")>-1?"Chrome":n.indexOf("trident")>-1?"Internet Explorer":n.indexOf("firefox")>-1?"Firefox":n.indexOf("safari")>-1?"Safari":"other"}setInfoCards(){this.infoCards=[{icon:"payments",value:this.dividendIncome.toFixed(2),valueType:"currency",subtitle:"Projected Annual Income",color:null},{icon:"payments",value:(this.dividendIncome/4).toFixed(2),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{icon:"payments",value:(this.dividendIncome/12).toFixed(2),valueType:"currency",subtitle:"Average Monthly Income",color:"seagreen"},{icon:"payments",value:(this.dividendIncome/365).toFixed(2),valueType:"currency",subtitle:"Average Daily Income",color:null},{icon:"payments",value:(this.dividendIncome/8760).toFixed(2),valueType:"currency",subtitle:"Average Hourly Income",color:null},{icon:"percent",value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"seagreen"}]}updateChart(n,e){let a={title:{text:""},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(f){return f*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(f){return f*5}},m=this.dataSource.data.filter(f=>f.symbol===n)[0],A={name:m.longName,series:[]};Object.entries(e).forEach(f=>{A.series.push({name:new Date(f[0].split("-").join(" ")),value:+f[1]}),a.xAxis.data.push(f[0].split("-").join(" ")),a.series[0].data.push(+f[1])}),this.echartOptions=a,this.dividendLineChartData=[A],this.selectedSymbol=m.symbol,this.selectedSymbolLabel=`${m.symbol} | ${m.longName} | ${m.profile?.sector||"ETF"}`,window.scroll({top:0,left:0,behavior:"smooth"})}refreshDividend(n,e=!0){this.dataService.getDividendHistory(n,10,e).subscribe(a=>{this.updateChart(n,a)})}};o.\u0275fac=function(e){return new(e||o)(E(ne))},o.\u0275cmp=T({type:o,selectors:[["portfolio-dividend"]],viewQuery:function(e,a){if(e&1&&(S(D,5),S(C,5)),e&2){let m;w(m=M())&&(a.table=m.first),w(m=M())&&(a.sort=m.first)}},standalone:!0,features:[P],decls:7,vars:8,consts:[["elseBlock",""],["class","info-cards",4,"ngIf"],["class","add-border",4,"ngIf"],["mat-table","","matSort","","matSortActive","dividendYield","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"info-cards"],[4,"ngFor","ngForOf"],[3,"icon","value","valueType","subtitle","color","accentColor"],[1,"add-border"],[1,"add-flex"],[1,"title"],["mat-button","","color","primary",1,"refresh-button",3,"click"],[3,"options"],["class","chart-container",4,"ngIf"],[1,"chart-container"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","autoScale","animations","gradient","yScaleMin"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",4,"ngIf","ngIfElse"],[1,"table-col-0"],[3,"stock"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){e&1&&(u(0,re,2,1,"section",1)(1,de,10,1,"section",2)(2,se,10,1,"section",2),l(3,"table",3),u(4,ue,3,1,"ng-container",4)(5,ve,1,0,"tr",5)(6,_e,1,0,"tr",6),s()),e&2&&(d("ngIf",a.infoCards),r(),d("ngIf",a.browser==="Safari"),r(),d("ngIf",a.browser!=="Safari"),r(),d("dataSource",a.dataSource),r(),d("ngForOf",a.columnDefs),r(),d("matHeaderRowDef",a.columnDefs)("matHeaderRowDefSticky",!0),r(),d("matRowDefColumns",a.columnDefs))},dependencies:[te,ie,k,L,H,$,j,C,Q,Z,D,q,G,U,B,J,X,z,K,W,F,Y,N,V,oe],styles:[".info-cards[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:20px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.refresh-button[_ngcontent-%COMP%]{margin-right:1rem}"]});let t=o;return t})();export{Re as a};
