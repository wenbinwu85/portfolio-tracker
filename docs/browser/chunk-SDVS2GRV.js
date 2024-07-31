import{a as D,b as q,c as J,d as le}from"./chunk-74B6AT3Z.js";import{b as W,c as g,d as Z,e as z,g as k,h as K,j as ee,k as te,m as ie,n as ne,p as ae,r as oe,s as re}from"./chunk-NRPNPI5J.js";import{l as de}from"./chunk-HPIG2XS7.js";import{l as B,m as Q,p as X,q as G,s as U}from"./chunk-YPV6TSRG.js";import{J as j}from"./chunk-2EDEUE7O.js";import{g as H}from"./chunk-ARUT3GIC.js";import{g as N,h as V}from"./chunk-7J2R5DGE.js";import{Ab as u,Eb as M,Gb as P,Hb as d,Mb as T,Nb as R,Ob as I,Rb as C,Sb as O,Ub as E,Va as l,Wa as L,Xb as Y,dc as y,fa as F,mb as h,na as f,oa as _,ob as s,tb as w,vb as $,wb as S,xb as A,yb as m,zb as p}from"./chunk-ZQIE4LUS.js";import{a as b}from"./chunk-GAL4ENT6.js";var se=(i,o)=>o.value;function ce(i,o){if(i&1&&u(0,"info-card",7),i&2){let n=o.$implicit;s("icon",n.icon)("value",n.value)("valueType",n.valueType)("subtitle",n.subtitle)("color",n.color)("accentColor",n.color)}}function me(i,o){if(i&1&&(m(0,"section",3),S(1,ce,1,6,"info-card",7,se),p()),i&2){let n=d();l(),A(n.infoCards)}}function pe(i,o){if(i&1&&(m(0,"div",8)(1,"div",9),u(2,"ngx-charts-bar-vertical-stacked",10),p(),m(3,"div",11),u(4,"ngx-charts-bar-horizontal-stacked",10),p()()),i&2){let n=d();l(2),s("scheme","natural")("results",n.dividendIncomeChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Scheduled Dividend Payments $")("noBarWhenZero",!0)("showDataLabel",!0),l(2),s("scheme","natural")("results",n.dividendProjectionChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Estimated Monthly Dividend Income $")("noBarWhenZero",!0)("showDataLabel",!0)}}function ue(i,o){if(i&1){let n=M();m(0,"div",8)(1,"div",12),u(2,"ngx-charts-area-chart",13),p(),m(3,"div",14)(4,"ngx-charts-pie-chart",15),P("select",function(e){f(n);let a=d();return _(a.onSelect(e))})("activate",function(e){f(n);let a=d();return _(a.onActivate(e))})("deactivate",function(e){f(n);let a=d();return _(a.onDeactivate(e))}),p()()()}if(i&2){let n=d();l(2),s("scheme",n.dividendChartColorScheme)("results",n.dividendLineChartData)("xAxisLabel",n.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("autoScale",!0)("animations",!0)("gradient",!0)("yScaleMin",0),l(2),s("scheme","picnic")("results",n.pieChartData)("animations",!0)("explodeSlices",!0)("labels",!0)("legend",!0)("legendTitle","Tickers")("arcWidth",.75)}}function he(i,o){if(i&1&&(m(0,"th",22),O(1),p()),i&2){let n=d().$index,t=d(2);l(),E(" ",t.headers[n]," ")}}function ve(i,o){if(i&1&&(m(0,"div",24),u(1,"stock-name-card",25),p()),i&2){let n=d().$implicit;l(),s("stock",n)}}function fe(i,o){if(i&1){let n=M();m(0,"span",26),P("click",function(){f(n);let e=d().$implicit,a=d(3);return _(a.updateChart(e.symbol))}),O(1),p()}if(i&2){let n=d().$implicit,t=d().$index,e=d(2);l(),E(" ",e.cells[t](n)," ")}}function _e(i,o){if(i&1&&(m(0,"td",23),h(1,ve,2,1,"div",24)(2,fe,2,1,"span"),p()),i&2){let n=d().$index;l(),w(n===0?1:2)}}function xe(i,o){if(i&1&&(m(0,"div",17),h(1,he,2,1,"th",20)(2,_e,3,1,"td",21),p()),i&2){let n=o.$implicit;s("matColumnDef",n)}}function Ce(i,o){i&1&&u(0,"tr",27)}function ye(i,o){i&1&&u(0,"tr",28)}function De(i,o){if(i&1&&(m(0,"table",16),S(1,xe,3,1,"div",17,$),h(3,Ce,1,0,"tr",18)(4,ye,1,0,"tr",19),p()),i&2){let n=d();s("dataSource",n.dataSource),l(),A(n.columnDefs),l(2),s("matHeaderRowDef",n.columnDefs)("matHeaderRowDefSticky",!0),l(),s("matRowDefColumns",n.columnDefs)}}var Ne=(()=>{let o=class o{constructor(t){this.dataService=t,this.monthStrings=["January","February","March","April","May","June","July","August","September","October","November","December"],this.dividendPayoutMonths={AAPL:[2,5,8,11],ABBV:[1,4,7,10],ARCC:[3,6,9,12],CVS:[1,4,7,10],DIS:[7,12],DLR:[3,6,9,12],DVN:[3,6,9,12],ENB:[2,5,8,11],EPD:[1,4,7,10],ET:[2,5,8,10],GILD:[3,6,9,12],MO:[3,6,9,12],MSFT:[2,5,8,11],NKE:[3,6,9,12],O:[1,2,3,4,5,6,7,8,9,10,11,12],PFE:[5,7,11,1],SBUX:[2,5,8,11],SCHD:[3,6,9,12],SPG:[3,6,9,12],TPVG:[3,6,9,12],VICI:[3,6,9,12],VYM:[3,6,9,12]},this.browser="",this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbol="O",this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.dividendChartColorScheme={domain:["teal"]},this.currentMonth=new Date().getMonth(),this.dividendIncomeChartData=Array.from({length:12},(e,a)=>({name:a,series:[]})),this.dividendProjectionChartData=Array.from({length:12},(e,a)=>({name:a,series:[]})),this.pieChartData=[],this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new re,this.headers=["Symbol","Dividend Income","Yield on Cost","Dividend Rate","Dividend Rate (TTM)","Dividend Yield","Dividend Yield (TTM)","5Y Avg. Yield","Payout Ratio","FCF Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendIncome","yieldOnCost","dividendRate","trailingAnnualDividendRate","dividendYield","trailingAnnualDividendYield","fiveYearAvgDividendYield","payoutRatio","freeCashflowPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[e=>"",e=>`$${e.dividendIncome.toFixed(2)}`,e=>`${(e.yieldOnCost*100).toFixed(2)}%`,e=>"$"+(e.dividendRate?.fmt||e.dividendRate.toFixed(2)),e=>e.trailingAnnualDividendRate?.fmt||"N/A",e=>e.dividendYield?.fmt||e.dividendYield*100+"%",e=>e.trailingAnnualDividendYield?.fmt||"N/A",e=>e.fiveYearAvgDividendYield?.fmt||"N/A",e=>e.payoutRatio?.fmt||"N/A",e=>e.quoteType==="EQUITY"&&e.freeCashflowPayoutRatio!==0?`${(e.freeCashflowPayoutRatio*100).toFixed(2)}%`:"N/A",e=>e.lastDividendValue?.fmt||"N/A",e=>e.calendarEvents?.exDividendDate?new Date(e.calendarEvents.exDividendDate?.fmt).toDateString():"N/A",e=>e.calendarEvents?.dividendDate?new Date(e.calendarEvents.dividendDate?.fmt).toDateString():"N/A"]}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.portfolioData=this.dataService.portfolioData,this.dataSource.data=Object.values(this.portfolioData).filter(t=>t.dividendYield?.raw>0||t.dividendYield>0).map(t=>b(b({},this.portfolioHoldings[t.symbol]),t)),this.dataSource.data.forEach(t=>{if(this.pieChartData.push({name:t.symbol,value:t.dividendIncome}),t.calendarEvents?.dividendDate){let e=t.calendarEvents,a=new Date(e.dividendDate.fmt),r=a.getMonth();r>=new Date().getMonth()&&this.dividendIncomeChartData[r].series.push({name:`${t.symbol} | ${a.toDateString()}`,value:t.lastDividendValue?.raw*t.shares})}this.dividendPayoutMonths[t.symbol.toUpperCase()].forEach((e,a,r)=>{let v=e-1,c=(t.dividendRate?.raw||t.dividendRate)/r.length;this.dividendProjectionChartData[v].series.push({name:`${t.symbol} | ${t.shortName}`,value:t.shares*c})})}),this.dividendIncomeChartData.forEach((t,e)=>t.name=this.monthStrings[e]),this.dividendIncomeChartData=this.dividendIncomeChartData.filter(t=>t.series.length>0),this.dividendProjectionChartData.forEach((t,e)=>t.name=this.monthStrings[e]),this.dividendIncome=this.portfolioHoldings.dividendIncome,this.portfolioYieldOnCost=this.portfolioHoldings.yieldOnCost,this.browser=this.getBrowserName(),this.setInfoCards(),this.updateChart(this.selectedSymbol,!1)}ngAfterViewInit(){this.dataSource.sort=this.sort}getBrowserName(){let t=window?.navigator.userAgent.toLowerCase();return t.indexOf("edge")>-1?"Microsoft Edge":t.indexOf("edg")>-1?"Chromium-based Edge":t.indexOf("opr")>-1?"Opera":t.indexOf("chrome")>-1?"Chrome":t.indexOf("trident")>-1?"Internet Explorer":t.indexOf("firefox")>-1?"Firefox":t.indexOf("safari")>-1?"Safari":"other"}setInfoCards(){this.infoCards=[{icon:"payments",value:this.dividendIncome.toFixed(4),valueType:"currency",subtitle:"Projected Annual Income",color:null},{icon:"payments",value:(this.dividendIncome/4).toFixed(4),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{icon:"payments",value:(this.dividendIncome/12).toFixed(4),valueType:"currency",subtitle:"Average Monthly Income",color:"teal"},{icon:"payments",value:(this.dividendIncome/365).toFixed(4),valueType:"currency",subtitle:"Average Daily Income",color:null},{icon:"payments",value:(this.dividendIncome/8765.81).toFixed(4),valueType:"currency",subtitle:"Average Hourly Income",color:null},{icon:"payments",value:(this.dividendIncome/525948.766).toFixed(4),valueType:"currency",subtitle:"Average Income Per Minute",color:null},{icon:"percent",value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"teal"}]}updateChart(t,e=!0){let a={title:{text:""},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(c){return c*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(c){return c*5}},r=this.dataSource.data.filter(c=>c.symbol===t)[0],v={name:`${r.symbol} | ${r.shortName}`,series:[]},x=this.dataService.portfolioDividendHistory[r.symbol];Object.entries(x).forEach(c=>{v.series.push({name:new Date(c[0].split("-").join(" ")),value:+c[1]}),a.xAxis.data.push(c[0].split("-").join(" ")),a.series[0].data.push(+c[1])}),this.echartOptions=a,this.dividendLineChartData=[v],this.selectedSymbol=r.symbol,this.selectedSymbolLabel=`
      ${r.symbol} | 
      ${r.longName} | 
      ${r.profile?.sector||"ETF"} |
      ${r.profile?.industry||"ETF"}
    `,e&&window.scroll({top:800,left:0,behavior:"smooth"})}onSelect(t){let e=t.name||t;this.updateChart(e)}onActivate(t){}onDeactivate(t){}};o.\u0275fac=function(e){return new(e||o)(L(H))},o.\u0275cmp=F({type:o,selectors:[["portfolio-dividend"]],viewQuery:function(e,a){if(e&1&&(T(g,5),T(D,5)),e&2){let r;R(r=I())&&(a.table=r.first),R(r=I())&&(a.sort=r.first)}},standalone:!0,features:[Y],decls:10,vars:4,consts:[["dividendIncomeProjectionRef",""],["dividendHistoryRef",""],["dividendTableRef",""],[1,"dividend-cards-container"],["title","Dividend Income Projection",3,"mainContentRef"],["title","Dividend History",3,"mainContentRef"],["title","Dividend Details",3,"mainContentRef"],[3,"icon","value","valueType","subtitle","color","accentColor"],[1,"add-flex"],[1,"chart-container","dividend-income"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel","noBarWhenZero","showDataLabel"],[1,"chart-container","projected-dividend-income"],[1,"chart-container","dividend-chart"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","autoScale","animations","gradient","yScaleMin"],[1,"chart-container","dividend-pie"],[3,"select","activate","deactivate","scheme","results","animations","explodeSlices","labels","legend","legendTitle","arcWidth"],["mat-table","","matSort","","matSortActive","yieldOnCost","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"stock"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(e&1&&(h(0,me,3,0,"section",3)(1,pe,5,20,"ng-template",null,0,y),u(3,"container-card",4),h(4,ue,5,20,"ng-template",null,1,y),u(6,"container-card",5),h(7,De,5,4,"ng-template",null,2,y),u(9,"container-card",6)),e&2){let r=C(2),v=C(5),x=C(8);w(a.infoCards?0:-1),l(3),s("mainContentRef",r),l(3),s("mainContentRef",v),l(3),s("mainContentRef",x)}},dependencies:[V,de,W,N,j,J,D,q,oe,g,z,te,k,Z,ie,K,ee,ne,ae,U,B,Q,X,G,le],styles:["echarts-vertical-bar-chart[_ngcontent-%COMP%]{width:100%}.dividend-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:1rem;margin-bottom:1rem}.safari-charts-container[_ngcontent-%COMP%]{display:flex;align-items:center}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.refresh-button[_ngcontent-%COMP%]{margin-right:1rem}.dividend-income[_ngcontent-%COMP%]{max-width:10%}.dividend-chart[_ngcontent-%COMP%]{width:60%}.dividend-pie[_ngcontent-%COMP%]{width:40%}"]});let i=o;return i})();export{Ne as a};
