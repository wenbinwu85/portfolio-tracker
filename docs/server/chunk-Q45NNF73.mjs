import './polyfills.server.mjs';
import{a as oe}from"./chunk-WXSGF5SB.mjs";import{a as B,b as x,c as q,d as U,e as _,f as X,g as z,i as G,j as J,l as K,m as W,o as Z,p as ee,r as te,t as ie,u as ne}from"./chunk-TFX57R2K.mjs";import{b as N,g as V}from"./chunk-BGGCTIGO.mjs";import{a as $,c as L}from"./chunk-FVLM5Z7P.mjs";import{a as Q}from"./chunk-OMGRN3TB.mjs";import{a as j}from"./chunk-YCBEYMAB.mjs";import{O as H,P as k}from"./chunk-FI4PD5Z2.mjs";import{l as F,m as Y}from"./chunk-PBYHKXXW.mjs";import{$b as M,Hb as c,Ib as s,Jb as u,Kb as y,Lb as g,Nb as C,Sb as b,Ub as l,Zb as S,_b as w,ac as O,ba as T,bb as r,bc as v,cb as E,cc as I,fa as h,ga as D,gc as P,oc as R,wb as p,yb as d}from"./chunk-EVR6KDPA.mjs";function ae(t,o){if(t&1&&(y(0),u(1,"info-card",8),g()),t&2){let i=o.$implicit;r(),d("icon",i.icon)("value",i.value)("valueType",i.valueType)("subtitle",i.subtitle)("color",i.color)("accentColor",i.color)}}function re(t,o){if(t&1&&(c(0,"section",6),p(1,ae,2,6,"ng-container",7),s()),t&2){let i=l();r(),d("ngForOf",i.infoCards)}}function de(t,o){if(t&1&&(c(0,"section",9),u(1,"app-echart",10),s()),t&2){let i=l();r(),d("options",i.echartOptions)}}function le(t,o){if(t&1&&(c(0,"div",14),u(1,"ngx-charts-area-chart",15),s()),t&2){let i=l(2);r(),d("scheme","forest")("results",i.dividendLineChartData)("xAxisLabel",i.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("autoScale",!0)("animations",!0)("gradient",!0)}}function se(t,o){if(t&1){let i=C();c(0,"section",9)(1,"div",11)(2,"span"),v(3,"Dividend History"),s(),c(4,"button",12),b("click",function(){h(i);let e=l();return D(e.refreshDividend(e.selectedSymbol,!0))}),c(5,"mat-icon"),v(6,"cloud_sync"),s(),v(7," Refresh Dividend "),s()(),p(8,le,2,11,"div",13),s()}if(t&2){let i=l();r(8),d("ngIf",i.dividendLineChartData)}}function ce(t,o){if(t&1&&(c(0,"th",19),v(1),s()),t&2){let i=l().index,n=l();r(),I(n.headers[i])}}function me(t,o){if(t&1&&(c(0,"div",23),u(1,"stock-ticker-name",24),s()),t&2){let i=l().$implicit;r(),d("stock",i)}}function fe(t,o){if(t&1){let i=C();c(0,"span",25),b("click",function(){h(i);let e=l().$implicit,a=l(2);return D(a.refreshDividend(e.symbol,!1))}),v(1),s()}if(t&2){let i=l().$implicit,n=l().index,e=l();r(),I(e.cells[n](i))}}function pe(t,o){if(t&1&&(c(0,"td",20),p(1,me,2,1,"div",21)(2,fe,2,1,"ng-template",null,22,R),s()),t&2){let i=O(3),n=l().index;r(),d("ngIf",n===0)("ngIfElse",i)}}function ue(t,o){if(t&1&&(y(0,16),p(1,ce,2,1,"th",17)(2,pe,4,2,"td",18),g()),t&2){let i=o.$implicit;d("matColumnDef",i)}}function ve(t,o){t&1&&u(0,"tr",26)}function xe(t,o){t&1&&u(0,"tr",27)}var Re=(()=>{let o=class o{constructor(n){this.dataService=n,this.browser="",this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbol="SCHD",this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new ne,this.headers=["Symbol","Dividend Rate","Dividend Rate (TTM)","Dividend Yield","Dividend Yield (TTM)","5Y Avg. Yield","Payout Ratio","Free Cash Flow Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendRate","trailingAnnualDividendRate","dividendYield","trailingAnnualDividendYield","fiveYearAvgDividendYield","payoutRatio","fcfPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[e=>"",e=>`$${e.dividendRate?.toFixed(2)}`,e=>`$${e.trailingAnnualDividendRate?.toFixed(2)||0}`,e=>`${(e.dividendYield*100||0).toFixed(2)}%`,e=>`${(e.trailingAnnualDividendYield*100||0).toFixed(2)}%`,e=>`${(e.fiveYearAvgDividendYield||0).toFixed(2)}%`,e=>`${(e.payoutRatio*100||0).toFixed(2)}%`,e=>e.quoteType==="EQUITY"&&e.fcfPayoutRatio!==0?`${(e.fcfPayoutRatio*100).toFixed(2)}%`:"N/A",e=>`$${e.lastDividendValue?.toFixed(2)||0}`,e=>e.calendarEvents?.exDividendDate?new Date(e.calendarEvents.exDividendDate).toDateString():"N/A",e=>e.calendarEvents?.dividendDate?new Date(e.calendarEvents.dividendDate).toDateString():"N/A"]}ngOnInit(){this.dataSource.data=Object.values(this.dataService.portfolioData).filter(n=>n.dividendYield),this.dividendIncome=this.dataService.portfolioHoldings?.portfolioDividendIncome,this.portfolioYieldOnCost=this.dataService.portfolioHoldings?.portfolioYieldOnCost,this.browser=this.getBrowserName(),this.setInfoCards(),this.refreshDividend(this.selectedSymbol,!1)}ngAfterViewInit(){this.dataSource.sort=this.sort}getBrowserName(){let n=window?.navigator.userAgent.toLowerCase();return n.indexOf("edge")>-1?"Microsoft Edge":n.indexOf("edg")>-1?"Chromium-based Edge":n.indexOf("opr")>-1?"Opera":n.indexOf("chrome")>-1?"Chrome":n.indexOf("trident")>-1?"Internet Explorer":n.indexOf("firefox")>-1?"Firefox":n.indexOf("safari")>-1?"Safari":"other"}setInfoCards(){this.infoCards=[{icon:"payments",value:this.dividendIncome.toFixed(2),valueType:"currency",subtitle:"Projected Annual Income",color:null},{icon:"payments",value:(this.dividendIncome/4).toFixed(2),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{icon:"payments",value:(this.dividendIncome/12).toFixed(2),valueType:"currency",subtitle:"Average Monthly Income",color:"forestgreen"},{icon:"payments",value:(this.dividendIncome/365).toFixed(2),valueType:"currency",subtitle:"Average Daily Income",color:null},{icon:"payments",value:(this.dividendIncome/8760).toFixed(2),valueType:"currency",subtitle:"Average Hourly Income",color:null},{icon:"percent",value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"forestgreen"}]}updateChart(n,e){let a={title:{text:"Dividend History"},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(f){return f*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(f){return f*5}},m=this.dataSource.data.filter(f=>f.symbol===n)[0],A={name:m.longName,series:[]};Object.entries(e).forEach(f=>{A.series.push({name:new Date(f[0].split("-").join(" ")),value:+f[1]}),a.xAxis.data.push(f[0].split("-").join(" ")),a.series[0].data.push(+f[1])}),this.echartOptions=a,this.dividendLineChartData=[A],this.selectedSymbol=m.symbol,this.selectedSymbolLabel=`${m.symbol} | ${m.longName} | ${m.profile?.sector||"ETF"}`,window.scroll({top:100,left:0,behavior:"smooth"})}refreshDividend(n,e=!0){this.dataService.getDividendHistory(n,10,e).subscribe(a=>{this.updateChart(n,a)})}};o.\u0275fac=function(e){return new(e||o)(E(j))},o.\u0275cmp=T({type:o,selectors:[["portfolio-dividend"]],viewQuery:function(e,a){if(e&1&&(S(_,5),S(x,5)),e&2){let m;w(m=M())&&(a.table=m.first),w(m=M())&&(a.sort=m.first)}},standalone:!0,features:[P],decls:7,vars:8,consts:[["class","info-cards",4,"ngIf"],["class","add-border",4,"ngIf"],["mat-table","","matSort","","matSortActive","dividendYield","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"info-cards"],[4,"ngFor","ngForOf"],[3,"icon","value","valueType","subtitle","color","accentColor"],[1,"add-border"],[3,"options"],[1,"title","add-flex"],["mat-button","","extended","","color","primary",1,"refresh-button",3,"click"],["class","chart-container",4,"ngIf"],[1,"chart-container"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","autoScale","animations","gradient"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"table-col-0"],[3,"stock"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){e&1&&(p(0,re,2,1,"section",0)(1,de,2,1,"section",1)(2,se,9,1,"section",1),c(3,"table",2),p(4,ue,3,1,"ng-container",3)(5,ve,1,0,"tr",4)(6,xe,1,0,"tr",5),s()),e&2&&(d("ngIf",a.infoCards),r(),d("ngIf",a.browser==="Safari"),r(),d("ngIf",a.browser!=="Safari"),r(),d("dataSource",a.dataSource),r(),d("ngForOf",a.columnDefs),r(),d("matHeaderRowDef",a.columnDefs)("matHeaderRowDefSticky",!0),r(),d("matRowDefColumns",a.columnDefs))},dependencies:[oe,Q,L,$,k,H,U,x,q,ie,_,z,W,G,X,Z,J,K,ee,te,F,Y,V,N,B],styles:[".info-cards[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:20px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}"]});let t=o;return t})();export{Re as a};
