import './polyfills.server.mjs';
import{A as le,a as h,b as G,c as z,d as _,e as K,f as W,h as Z,i as ee,k as te,l as ie,n as oe,o as ne,q as ae,s as re,t as de}from"./chunk-P33A6LGL.mjs";import{a as se}from"./chunk-G7QT527Z.mjs";import{c as V}from"./chunk-DAAT3GRF.mjs";import{b as j,h as q}from"./chunk-7FAFTRM4.mjs";import{k as X}from"./chunk-77SAXOFZ.mjs";import{b as Q,c as J}from"./chunk-3BV5F3GH.mjs";import{f as U}from"./chunk-RZIJSX7Q.mjs";import{R as B}from"./chunk-TAE77ZHD.mjs";import{$b as A,Ab as H,Bb as g,Cb as b,Db as m,Eb as p,Fb as f,Jb as w,Mb as S,Ob as d,Tb as M,Ub as T,Vb as R,Yb as O,Za as l,Zb as P,Zc as N,_a as $,cc as L,ec as k,fa as E,kc as F,na as y,oa as x,rb as u,tb as s,ub as Y,yb as D}from"./chunk-TD7VU5IN.mjs";import{a as C,b as I}from"./chunk-5XUXGTUW.mjs";var me=(t,n)=>n.value,pe=t=>({color:t});function fe(t,n){if(t&1&&f(0,"info-card",5),t&2){let o=n.$implicit;s("value",o.value)("valueType",o.valueType)("subtitle",o.subtitle)("color",o.color)}}function ue(t,n){if(t&1&&(m(0,"section",2),g(1,fe,1,4,"info-card",5,me),p()),t&2){let o=d();l(),b(o.infoCards)}}function ve(t,n){if(t&1){let o=w();m(0,"div",6)(1,"portfolio-ticker-buttons",7),S("selectedTicker",function(e){y(o);let a=d();return x(a.onSelect(e))}),p(),m(2,"div",8),f(3,"ngx-charts-area-chart",9),p()()}if(t&2){let o=d();Y("flex-direction","column"),l(3),s("scheme",o.dividendChartColorScheme)("results",o.dividendLineChartData)("xAxisLabel",o.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("autoScale",!0)("animations",!0)("gradient",!0)("yScaleMin",0)}}function he(t,n){if(t&1&&(m(0,"th",16),P(1),p()),t&2){let o=d().$index,i=d(2);l(),A(" ",i.headers[o]," ")}}function _e(t,n){if(t&1&&(m(0,"div",18),f(1,"stock-name-card",20),p()),t&2){let o=d().$implicit;l(),s("stock",o)}}function Ce(t,n){if(t&1){let o=w();m(0,"span",21),S("click",function(){y(o);let e=d().$implicit,a=d(3);return x(a.updateChart(e.symbol))}),P(1),p()}if(t&2){let o=d().$implicit,i=d().$index,e=d(2);s("ngStyle",k(2,pe,e.getCellColor(o,i))),l(),A(" ",e.cells[i](o)," ")}}function ye(t,n){if(t&1&&(m(0,"td",17),u(1,_e,2,1,"div",18)(2,Ce,2,4,"span",19),p()),t&2){let o=d().$index;l(),D(o===0?1:2)}}function xe(t,n){if(t&1&&(m(0,"div",11),u(1,he,2,1,"th",14)(2,ye,3,1,"td",15),p()),t&2){let o=n.$implicit;s("matColumnDef",o)}}function De(t,n){t&1&&f(0,"tr",22)}function ge(t,n){t&1&&f(0,"tr",23)}function be(t,n){if(t&1&&(m(0,"table",10),g(1,xe,3,1,"div",11,H),u(3,De,1,0,"tr",12)(4,ge,1,0,"tr",13),p()),t&2){let o=d();s("dataSource",o.dataSource),l(),b(o.columnDefs),l(2),s("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),l(),s("matRowDefColumns",o.columnDefs)}}var Be=(()=>{let n=class n{constructor(i){this.dataService=i,this.monthStrings=["January","February","March","April","May","June","July","August","September","October","November","December"],this.browser="",this.todayDate=new Date,this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.dividendChartColorScheme={domain:["steelblue"]},this.currentMonth=new Date().getMonth(),this.pieChartData=[],this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new de,this.headers=["Symbol","Dividend Income","Yield on Cost","Dividend Yield","Dividend Yield (TTM)","Dividend Rate","Dividend Rate (TTM)","5Y Avg. Yield","Payout Ratio","FCF Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendIncome","yieldOnCost","dividendYield","trailingAnnualDividendYield","dividendRate","trailingAnnualDividendRate","fiveYearAvgDividendYield","payoutRatio","freeCashflowPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[e=>"",e=>`$${e.dividendIncome.toFixed(2)}`,e=>`${(e.yieldOnCost*100).toFixed(2)}%`,e=>e.dividendYield?.fmt||(e.dividendYield*100).toFixed(2)+"%",e=>e.trailingAnnualDividendYield?.fmt||"--",e=>"$"+(e.dividendRate?.fmt||e.dividendRate.toFixed(2)),e=>e.trailingAnnualDividendRate?.fmt||"--",e=>e.fiveYearAvgDividendYield?.fmt||"--",e=>e.payoutRatio.toFixed(2)+"%",e=>e.quoteType==="EQUITY"&&e.freeCashflowPayoutRatio!==0?`${(e.freeCashflowPayoutRatio*100).toFixed(2)}%`:"--",e=>e.lastDividendValue?.fmt||"--",e=>{let a=e.calendarEvents?.exDividendDate;return a&&a.raw*1e3>=this.todayDate.valueOf()?new Date(a.fmt).toDateString():"--"},e=>{let a=e.calendarEvents?.dividendDate;return a&&a.raw*1e3>=this.todayDate.valueOf()?new Date(a.fmt).toDateString():"--"}]}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.portfolioData=this.dataService.portfolioData,this.dataSource.data=this.dataService.portfolioDataArray.filter(i=>i.dividendYield?.raw>0||i.dividendYield>0).map(i=>I(C(C({},this.portfolioHoldings[i.symbol]),i),{payoutRatio:i.payoutRatio?.raw*100||0})),this.selectedSymbol=this.dataSource.data[0].symbol,this.dataSource.data.forEach(i=>{this.pieChartData.push({name:i.symbol,value:i.dividendIncome})}),this.dividendIncome=this.portfolioHoldings.dividendIncome,this.portfolioYieldOnCost=this.portfolioHoldings.yieldOnCost,this.browser=this.getBrowserName(),this.setInfoCards(),this.updateChart(this.selectedSymbol,!1)}ngAfterViewInit(){this.dataSource.sort=this.sort}getBrowserName(){let i=window?.navigator.userAgent.toLowerCase();return i.indexOf("edge")>-1?"Microsoft Edge":i.indexOf("edg")>-1?"Chromium-based Edge":i.indexOf("opr")>-1?"Opera":i.indexOf("chrome")>-1?"Chrome":i.indexOf("trident")>-1?"Internet Explorer":i.indexOf("firefox")>-1?"Firefox":i.indexOf("safari")>-1?"Safari":"other"}setInfoCards(){this.infoCards=[{value:this.dividendIncome.toFixed(4),valueType:"currency",subtitle:"Projected Annual Income",color:null},{value:(this.dividendIncome/4).toFixed(4),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{value:(this.dividendIncome/12).toFixed(4),valueType:"currency",subtitle:"Average Monthly Income",color:"teal"},{value:(this.dividendIncome/365).toFixed(4),valueType:"currency",subtitle:"Average Daily Income",color:null},{value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"teal"}]}updateChart(i,e=!0){let a={title:{text:""},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(c){return c*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(c){return c*5}},r=this.dataSource.data.filter(c=>c.symbol===i)[0],v={name:`${r.symbol} | ${r.shortName}`,series:[]},ce=this.dataService.portfolioDividendHistory[r.symbol];Object.entries(ce).forEach(c=>{v.series.push({name:new Date(c[0].split("-").join(" ")),value:+c[1]}),a.xAxis.data.push(c[0].split("-").join(" ")),a.series[0].data.push(+c[1])}),this.echartOptions=a,this.dividendLineChartData=[v],this.selectedSymbol=r.symbol,this.selectedSymbolLabel=`
      ${r.symbol} | 
      ${r.longName} | 
      ${r.profile?.sector||"ETF"} |
      ${r.profile?.industry||"ETF"}
    `}onSelect(i){this.updateChart(i)}getCellColor(i,e){switch(e){case 8:return i.payoutRatio<80?"teal":"chocolate";case 9:return i.freeCashflowPayoutRatio>0&&i.freeCashflowPayoutRatio<1?"teal":"chocolate";default:return"black"}}};n.\u0275fac=function(e){return new(e||n)($(J))},n.\u0275cmp=E({type:n,selectors:[["portfolio-dividend"]],viewQuery:function(e,a){if(e&1&&(M(_,5),M(h,5)),e&2){let r;T(r=R())&&(a.table=r.first),T(r=R())&&(a.sort=r.first)}},standalone:!0,features:[L],decls:7,vars:3,consts:[["dividendHistoryRef",""],["dividendTableRef",""],[1,"dividend-cards-container"],["title","Dividend History",3,"mainContentRef"],["title","Dividend Details",3,"mainContentRef"],[3,"value","valueType","subtitle","color"],[1,"add-flex"],[3,"selectedTicker"],[1,"chart-container","dividend-chart"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","autoScale","animations","gradient","yScaleMin"],["mat-table","","matSort","","matSortActive","yieldOnCost","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],[3,"click","ngStyle"],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(e&1&&(u(0,ue,3,0,"section",2)(1,ve,4,14,"ng-template",null,0,F),f(3,"container-card",3),u(4,be,5,4,"ng-template",null,1,F),f(6,"container-card",4)),e&2){let r=O(2),v=O(5);D(a.infoCards?0:-1),l(3),s("mainContentRef",r),l(3),s("mainContentRef",v)}},dependencies:[U,X,V,B,Q,z,h,G,re,_,W,ie,Z,K,oe,ee,te,ne,ae,q,N,j,le,se],styles:["echarts-vertical-bar-chart[_ngcontent-%COMP%]{width:100%}.dividend-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:.5rem;margin-bottom:1rem}.safari-charts-container[_ngcontent-%COMP%]{display:flex;align-items:center}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.dividend-chart[_ngcontent-%COMP%]{width:100%}.chart-flex[_ngcontent-%COMP%]{display:flex}"]});let t=n;return t})();export{Be as a};
