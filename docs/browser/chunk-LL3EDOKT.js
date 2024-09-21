import{a as le}from"./chunk-EDIJHZXJ.js";import{a as v,b as U,c as X,d as _,e as z,f as G,h as K,i as W,k as Z,l as ee,n as te,o as ie,q as ne,s as oe,t as ae,y as de}from"./chunk-RELZAON7.js";import{c as re}from"./chunk-XMFA6CSM.js";import{h as B}from"./chunk-SW7TU5WH.js";import{x as j}from"./chunk-YSYRDJUH.js";import{h as q,m as J}from"./chunk-HRDN5KJF.js";import{b as Q}from"./chunk-WUSB5NQB.js";import{$ as y,Ea as u,Ja as l,Ka as k,Nb as L,Oa as x,Qa as E,Ra as D,Sa as g,Ta as c,Ua as m,V as $,Va as p,Za as b,_ as C,a as h,ab as w,b as I,cb as r,hb as M,ib as S,jb as P,mb as R,nb as T,nd as N,pb as A,qa as d,ra as O,sb as Y,ub as H,xc as V,zb as F}from"./chunk-NRXSNQ2Q.js";var ce=(i,a)=>a.value,me=i=>({color:i});function pe(i,a){if(i&1&&p(0,"info-card",5),i&2){let e=a.$implicit;l("value",e.value)("valueType",e.valueType)("subtitle",e.subtitle)("color",e.color)}}function ue(i,a){if(i&1&&(c(0,"section",2),D(1,pe,1,4,"info-card",5,ce),m()),i&2){let e=r();d(),g(e.infoCards)}}function fe(i,a){if(i&1){let e=b();c(0,"div",6)(1,"portfolio-ticker-buttons",7),w("selectedTicker",function(n){C(e);let o=r();return y(o.onSelect(n))}),m(),c(2,"div",8),p(3,"ngx-charts-bar-vertical-2d",9),m()()}if(i&2){let e=r();k("flex-direction","column"),d(),l("dividendPayersOnly",!0),d(2),l("scheme",e.dividendChartColorScheme)("results",e.dividendLineChartData)("xAxisLabel",e.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("animations",!0)("roundEdges",!1)}}function ve(i,a){if(i&1&&(c(0,"th",16),T(1),m()),i&2){let e=r().$index,t=r(2);d(),A(" ",t.headers[e]," ")}}function _e(i,a){if(i&1&&(c(0,"div",18),p(1,"stock-name-card",20),m()),i&2){let e=r().$implicit;d(),l("stock",e)}}function he(i,a){if(i&1){let e=b();c(0,"span",21),w("click",function(){C(e);let n=r().$implicit,o=r(3);return y(o.updateChart(n.symbol))}),T(1),m()}if(i&2){let e=r().$implicit,t=r().$index,n=r(2);l("ngStyle",H(2,me,n.getCellColor(e,t))),d(),A(" ",n.cells[t](e)," ")}}function Ce(i,a){if(i&1&&(c(0,"td",17),u(1,_e,2,1,"div",18)(2,he,2,4,"span",19),m()),i&2){let e=r().$index;d(),x(e===0?1:2)}}function ye(i,a){if(i&1&&(c(0,"div",11),u(1,ve,2,1,"th",14)(2,Ce,3,1,"td",15),m()),i&2){let e=a.$implicit;l("matColumnDef",e)}}function xe(i,a){i&1&&p(0,"tr",22)}function De(i,a){i&1&&p(0,"tr",23)}function ge(i,a){if(i&1&&(c(0,"table",10),D(1,ye,3,1,"div",11,E),u(3,xe,1,0,"tr",12)(4,De,1,0,"tr",13),m()),i&2){let e=r();l("dataSource",e.dataSource),d(),g(e.columnDefs),d(2),l("matHeaderRowDef",e.columnDefs)("matHeaderRowDefSticky",!0),d(),l("matRowDefColumns",e.columnDefs)}}var Le=(()=>{class i{constructor(e){this.dataService=e,this.monthStrings=["January","February","March","April","May","June","July","August","September","October","November","December"],this.browser="",this.todayDate=new Date,this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.dividendChartColorScheme={domain:["steelblue"]},this.currentMonth=new Date().getMonth(),this.pieChartData=[],this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new ae,this.headers=["Symbol","Dividend Income","Yield on Cost","Dividend Yield","Dividend Yield (TTM)","Dividend Rate","Dividend Rate (TTM)","5Y Avg. Yield","Payout Ratio","FCF Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendIncome","yieldOnCost","dividendYield","trailingAnnualDividendYield","dividendRate","trailingAnnualDividendRate","fiveYearAvgDividendYield","payoutRatio","freeCashflowPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[t=>"",t=>`$${t.dividendIncome.toFixed(2)}`,t=>`${(t.yieldOnCost*100).toFixed(2)}%`,t=>t.dividendYield?.fmt||(t.dividendYield*100).toFixed(2)+"%",t=>t.trailingAnnualDividendYield?.fmt||"--",t=>"$"+(t.dividendRate?.fmt||t.dividendRate.toFixed(2)),t=>t.trailingAnnualDividendRate?.fmt||"--",t=>t.fiveYearAvgDividendYield?.fmt||"--",t=>t.payoutRatio.toFixed(2)+"%",t=>t.quoteType==="EQUITY"&&t.freeCashflowPayoutRatio!==0?`${(t.freeCashflowPayoutRatio*100).toFixed(2)}%`:"--",t=>t.lastDividendValue?.fmt||"--",t=>{let n=t.calendarEvents?.exDividendDate;return n&&n.raw*1e3>=this.todayDate.valueOf()?new Date(n.fmt).toDateString():"--"},t=>{let n=t.calendarEvents?.dividendDate;return n&&n.raw*1e3>=this.todayDate.valueOf()?new Date(n.fmt).toDateString():"--"}]}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.dividendIncome=this.portfolioHoldings.dividendIncome,this.portfolioYieldOnCost=this.portfolioHoldings.yieldOnCost,this.dataSource.data=this.dataService.portfolioDividendPayers.map(e=>{let t=this.portfolioHoldings[e.symbol];return this.pieChartData.push({name:e.symbol,value:t.dividendIncome}),I(h(h({},t),e),{regularMarketPrice:e.regularMarketPrice.raw,regularMarketChange:e.regularMarketChange.raw,regularMarketChangePercent:e.regularMarketChangePercent.raw,preMarketPrice:e.preMarketPrice.raw,preMarketChangePercent:e.preMarketChangePercent?.raw||0,postMarketPrice:e.postMarketPrice.raw,postMarketChangePercent:e.postMarketChangePercent?.raw||0,payoutRatio:e.payoutRatio?.raw*100||0})}),this.selectedSymbol=this.dataSource.data[0].symbol,this.setInfoCards(),this.updateChart(this.selectedSymbol,!1)}ngAfterViewInit(){this.dataSource.sort=this.sort}setInfoCards(){this.infoCards=[{value:this.dividendIncome.toFixed(4),valueType:"currency",subtitle:"Projected Annual Income",color:null},{value:(this.dividendIncome/4).toFixed(4),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{value:(this.dividendIncome/12).toFixed(4),valueType:"currency",subtitle:"Average Monthly Income",color:"teal"},{value:(this.dividendIncome/365).toFixed(4),valueType:"currency",subtitle:"Average Daily Income",color:null},{value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"teal"}]}updateChart(e,t=!0){let n={title:{text:""},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(s){return s*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(s){return s*5}},o=this.dataSource.data.filter(s=>s.symbol===e)[0],f={name:`${o.symbol} | ${o.shortName}`,series:[]},se=this.dataService.getTickerDividendHistory(o.symbol);Object.entries(se).forEach(s=>{f.series.push({name:new Date(s[0].split("-").join(" ")),value:+s[1]}),n.xAxis.data.push(s[0].split("-").join(" ")),n.series[0].data.push(+s[1])}),this.dividendLineChartData=[f],this.selectedSymbol=o.symbol,this.selectedSymbolLabel=`
      ${o.symbol} | 
      ${o.longName} | 
      ${o.profile?.sector||"ETF"} |
      ${o.profile?.industry||"ETF"}
    `,t&&window.scroll({top:0,left:0,behavior:"smooth"})}onSelect(e){this.updateChart(e,!0)}getCellColor(e,t){switch(t){case 8:return e.payoutRatio<80?"teal":"chocolate";case 9:return e.freeCashflowPayoutRatio>0&&e.freeCashflowPayoutRatio<1?"teal":"chocolate";default:return"black"}}static{this.\u0275fac=function(t){return new(t||i)(O(V))}}static{this.\u0275cmp=$({type:i,selectors:[["portfolio-dividend"]],viewQuery:function(t,n){if(t&1&&(M(_,5),M(v,5)),t&2){let o;S(o=P())&&(n.table=o.first),S(o=P())&&(n.sort=o.first)}},standalone:!0,features:[Y],decls:7,vars:3,consts:[["dividendHistoryRef",""],["dividendTableRef",""],[1,"dividend-cards-container"],["title","Dividend History",3,"mainContentRef"],["title","Dividend Details",3,"mainContentRef"],[3,"value","valueType","subtitle","color"],[1,"add-flex"],[3,"selectedTicker","dividendPayersOnly"],[1,"chart-container","dividend-chart"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","animations","roundEdges"],["mat-table","","matSort","","matSortActive","yieldOnCost","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],[3,"click","ngStyle"],["mat-header-row",""],["mat-row",""]],template:function(t,n){if(t&1&&(u(0,ue,3,0,"section",2)(1,fe,4,13,"ng-template",null,0,F),p(3,"container-card",3),u(4,ge,5,4,"ng-template",null,1,F),p(6,"container-card",4)),t&2){let o=R(2),f=R(5);x(n.infoCards?0:-1),d(3),l("mainContentRef",o),d(3),l("mainContentRef",f)}},dependencies:[j,B,re,N,Q,X,v,U,oe,_,G,ee,K,z,te,W,Z,ie,ne,J,L,q,le,de],styles:[".dividend-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:.5rem;margin-bottom:1rem}.safari-charts-container[_ngcontent-%COMP%]{display:flex;align-items:center}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.dividend-chart[_ngcontent-%COMP%]{width:100%}.chart-flex[_ngcontent-%COMP%]{display:flex}"]})}}return i})();export{Le as a};
