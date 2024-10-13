import './polyfills.server.mjs';
import{B as rt,a as Ae,b as Fe,c as Le,d as E,e as $e,f as Oe,g as R,h as Ge,i as ze,j as Be,k as We,l as Ne,m as Qe,n as Ye,o as qe,p as je,q as Ue,r as Xe,s as Je,t as Ke,u as Ze,v as et,w as tt,x as nt,y as at,z as lt}from"./chunk-5K6BIBFD.mjs";import{a as ot,b as it}from"./chunk-4FWQ2FKT.mjs";import{a as Ee}from"./chunk-GTN2DYE3.mjs";import{f as Se,g as Pe,h as ke}from"./chunk-72SWT5YW.mjs";import{a as fe,b as _e,f as ge}from"./chunk-IOV4FF2A.mjs";import{g as Ce,i as xe,k as ve,l as ye,m as we}from"./chunk-7V4TRYOZ.mjs";import{a as De}from"./chunk-NUJG4LMO.mjs";import{a as Re,b as Ve,c as Ie}from"./chunk-OJLKWXFL.mjs";import{a as te,c as oe}from"./chunk-RIBE464P.mjs";import{g as he}from"./chunk-DI3YNZK4.mjs";import{a as He,b as Me}from"./chunk-L6S6RZJV.mjs";import{a as ae,b as le}from"./chunk-62KTUHH5.mjs";import{D as $,G as Te,o as re,s as se,t as ce,u as me,v as de,w as pe,x as ue}from"./chunk-5TKWRWDU.mjs";import{Q as ie,R as ne,Y as be}from"./chunk-P566SQAQ.mjs";import{$a as _,Ab as p,Bb as x,Ca as n,Cb as j,Da as D,Ib as S,Jb as I,Kb as A,Mb as y,Nb as w,Pb as P,Ra as u,Uc as K,Va as z,Vc as Z,Wa as c,Xc as F,Y as b,Ya as B,Yc as L,_c as ee,bb as W,ca as g,cb as N,da as h,db as Q,eb as l,fb as r,gb as d,hb as Y,ib as q,kb as v,nb as C,pb as s,sc as U,ub as k,vb as H,wb as M,xc as X,yc as J,zb as T}from"./chunk-GABBXSEO.mjs";import{a as O,b as G}from"./chunk-WUI6SWGE.mjs";function ft(o,m){if(o&1&&(l(0,"mat-tab",5)(1,"div",11),d(2,"stock-earnings-chart",12)(3,"stock-recommendation-trends",7),r()()),o&2){let e=s();n(2),c("stock",e.stock),n(),c("symbol",e.stock.symbol)}}var ct=(()=>{class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=b({type:o,selectors:[["expanded-row"]],inputs:{stock:"stock"},standalone:!0,features:[S],decls:13,vars:6,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"company","symbol"],["label","Financials"],["width","100%",3,"symbol"],["label","EPS & Recommendations"],["label","Profile"],[3,"symbol"],[1,"tradingview-widget-copyright"],["href","https://www.tradingview.com/","rel","noopener nofollow","target","_blank"],[1,"blue-text"],[1,"widget-container"],[3,"stock"]],template:function(t,i){t&1&&(l(0,"mat-tab-group",0)(1,"mat-tab",1),d(2,"tv-symbol-overview-widget",2),r(),l(3,"mat-tab",3),d(4,"tv-financials-widget",4),r(),u(5,ft,4,2,"mat-tab",5),l(6,"mat-tab",6),d(7,"tv-symbol-info-widget",7)(8,"tv-profile-widget",4),r()(),l(9,"div",8)(10,"a",9)(11,"span",10),p(12,"Track all markets on TradingView"),r()()()),t&2&&(n(2),c("company",i.stock.shortName)("symbol",i.stock.symbol),n(2),c("symbol",i.stock.symbol),n(),_(i.stock.quoteType==="EQUITY"?5:-1),n(2),c("symbol",i.stock.symbol),n(),c("symbol",i.stock.symbol))},dependencies:[J,ge,fe,_e,it,ot,nt,at,lt,Ee],styles:[".widget-container[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-evenly;padding:.5rem 0}"]})}}return o})();var _t=["singleQuoteWidget"],mt=(()=>{class o{constructor(e){this.tradingviewService=e,this.type="simple"}ngAfterViewInit(){this.params={symbol:this.symbol,width:this.type==="simple"?280:800,height:"auto",colorTheme:this.theme||"light",isTransparent:!0,locale:"en"},this.params=JSON.stringify(this.params);let e=this.tradingviewService.singleQuoteWidget(this.params,this.type);this.singleQuoteWidget.nativeElement.appendChild(e)}static{this.\u0275fac=function(t){return new(t||o)(D(De))}}static{this.\u0275cmp=b({type:o,selectors:[["tv-single-quote-widget"]],viewQuery:function(t,i){if(t&1&&k(_t,5),t&2){let a;H(a=M())&&(i.singleQuoteWidget=a.first)}},inputs:{symbol:"symbol",type:"type",theme:"theme"},standalone:!0,features:[S],decls:2,vars:0,consts:[["singleQuoteWidget",""]],template:function(t,i){t&1&&d(0,"div",null,0)},encapsulation:2})}}return o})();var gt=()=>["expandedRow"],dt=o=>({color:o}),ht=()=>({color:"black"});function Ct(o,m){if(o&1&&d(0,"info-card",14)(1,"info-card",15)(2,"info-card",16),o&2){let e=s();c("value",e.portfolioHoldings==null?null:e.portfolioHoldings.dividendIncome),n(),c("value",e.portfolioHoldings==null?null:e.portfolioHoldings.yield),n(),c("value",e.portfolioHoldings==null?null:e.portfolioHoldings.yieldOnCost)}}function xt(o,m){if(o&1){let e=v();l(0,"mat-chip-option",18),C("click",function(){g(e);let i=s(2);return h(i.selectTab("dividends"))}),p(1,"Dividend Income"),r()}}function vt(o,m){if(o&1){let e=v();l(0,"mat-chip-listbox")(1,"mat-chip-option",17),C("click",function(){g(e);let i=s();return h(i.selectTab("allocations"))}),p(2,"Allocations"),r(),l(3,"mat-chip-option",18),C("click",function(){g(e);let i=s();return h(i.selectTab("cost-basis"))}),p(4,"Cost Basis"),r(),l(5,"mat-chip-option",18),C("click",function(){g(e);let i=s();return h(i.selectTab("performance"))}),p(6,"Performance"),r(),u(7,xt,2,0,"mat-chip-option"),r()}if(o&2){let e=s();n(7),_(e.dividendData.length?7:-1)}}function yt(o,m){if(o&1){let e=v();l(0,"div",24)(1,"div",25)(2,"ngx-charts-pie-chart",26),C("select",function(i){g(e);let a=s(2);return h(a.onSelectSector(i))}),r()(),l(3,"div",25),d(4,"ngx-charts-bar-vertical",27),r()()}if(o&2){let e=s(2);n(2),c("scheme","air")("animations",!0)("results",e.sectorsData)("labels",!0)("title","Sector Allocations")("maxLabelLength",100),n(2),c("scheme",e.allocationsBarChartColorScheme)("results",e.portfolioPercentData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Holding Allocations %")("roundEdges",!1)("customColors",e.selectedSectorColors)}}function wt(o,m){if(o&1&&(l(0,"div",24)(1,"div",25),d(2,"ngx-charts-pie-grid",28),r()()),o&2){let e=s(2);n(2),c("scheme","picnic")("animations",!0)("results",e.totalCostChartData)("label","Dollars Invested")}}function bt(o,m){if(o&1&&(l(0,"div",24)(1,"div",25),d(2,"ngx-charts-bar-vertical-stacked",29),r(),l(3,"div",25),d(4,"ngx-charts-bar-vertical",30),r()()),o&2){let e=s(2);n(2),c("scheme",e.stackedBarChartColorScheme)("results",e.marketValueData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Cost Basis & Unrealized Gain"),n(2),c("results",e.unrealizedGainData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Unrealized Gain %")("roundEdges",!1)("customColors",e.getGainLostColor)}}function Tt(o,m){if(o&1&&(l(0,"div",24)(1,"div",25),d(2,"ngx-charts-bar-vertical",27),r(),l(3,"div",25),d(4,"ngx-charts-bar-vertical",27),r()()),o&2){let e=s(2);n(2),c("scheme",e.dividendBarChartColorScheme)("results",e.dividendData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Dividend Income")("roundEdges",!1)("customColors",e.selectedSectorColors),n(2),c("scheme",e.dividendBarChartColorScheme)("results",e.yocData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Yield On Cost %")("roundEdges",!1)("customColors",e.selectedSectorColors)}}function St(o,m){if(o&1&&(l(0,"section",19)(1,"div",20)(2,"h6"),p(3,"Dividend Income Target"),r(),l(4,"mat-slider",21),d(5,"input",22),r(),l(6,"div",23)(7,"mat-chip"),p(8),y(9,"currency"),r(),l(10,"mat-chip"),p(11),y(12,"currency"),r()()(),l(13,"div",20)(14,"h6"),p(15,"Portfolio Value Target"),r(),l(16,"mat-slider",21),d(17,"input",22),r(),l(18,"div",23)(19,"mat-chip"),p(20),y(21,"currency"),r(),l(22,"mat-chip"),p(23),y(24,"currency"),r()()()(),d(25,"mat-divider"),u(26,yt,5,16,"div",24)(27,wt,3,4,"div",24)(28,bt,5,17,"div",24)(29,Tt,5,20,"div",24)),o&2){let e=s();n(4),c("min",0)("max",e.passiveIncomeTarget)("step",120)("showTickMarks",!0)("color","primary"),n(),c("value",e.portfolioHoldings==null?null:e.portfolioHoldings.dividendIncome)("matTooltip",e.getTooltip("passive")),n(3),x(w(9,22,"0")),n(3),x(w(12,24,e.passiveIncomeTarget)),n(5),c("min",0)("max",e.portfolioValueTarget)("step",1e3)("showTickMarks",!0)("color","primary"),n(),c("value",e.portfolioHoldings==null?null:e.portfolioHoldings.marketValue)("matTooltip",e.getTooltip("investment")),n(3),x(w(21,26,"0")),n(3),x(w(24,28,e.portfolioValueTarget)),n(3),_(e.selectedTab==="allocations"?26:-1),n(),_(e.selectedTab==="cost-basis"?27:-1),n(),_(e.selectedTab==="performance"?28:-1),n(),_(e.selectedTab==="dividends"?29:-1)}}function Pt(o,m){if(o&1&&(l(0,"th",42)(1,"span"),p(2),r()()),o&2){let e=s().$index,t=s(2);n(2),x(t.headers[e])}}function kt(o,m){if(o&1&&d(0,"stock-name-card",46),o&2){let e=s(2).$implicit;c("stock",e)}}function Ht(o,m){if(o&1&&d(0,"tv-single-quote-widget",47),o&2){let e=s(2).$implicit;c("symbol",e.symbol)}}function Mt(o,m){if(o&1&&(l(0,"div",44),u(1,kt,1,1,"stock-name-card",46)(2,Ht,1,1,"tv-single-quote-widget",47),r()),o&2){let e=s(4);n(),_(e.showTradingviewWidgets?2:1)}}function Dt(o,m){if(o&1){let e=v();l(0,"div",18),C("click",function(){g(e);let i=s().$implicit,a=s(3);return h(a.expandRow(i))}),l(1,"div",48)(2,"span",49),p(3),y(4,"currency"),r(),l(5,"span",50),p(6),r()()()}if(o&2){let e=s().$implicit,t=s(3);n(3),x(w(4,2,t.portfolioHoldings[e.symbol].costAverage)),n(3),j(" x ",t.portfolioHoldings[e.symbol].shares,"")}}function Et(o,m){if(o&1){let e=v();l(0,"span",51),C("click",function(){g(e);let i=s().$implicit,a=s(3);return h(a.expandRow(i))}),p(1),y(2,"currency"),r()}if(o&2){let e=s().$implicit,t=s(),i=t.$implicit,a=t.$index,f=s(2);c("ngStyle",A(4,dt,f.getCellColor(e,a))),n(),x(w(2,2,e[i]))}}function Rt(o,m){if(o&1){let e=v();l(0,"span",51),C("click",function(){g(e);let i=s().$implicit,a=s(3);return h(a.expandRow(i))}),p(1),r()}if(o&2){let e=s().$implicit,t=s().$index,i=s(2);c("ngStyle",A(2,dt,i.getCellColor(e,t))),n(),x(i.cells[t](e))}}function Vt(o,m){if(o&1&&(l(0,"td",43),u(1,Mt,3,1,"div",44)(2,Dt,7,4,"div")(3,Et,3,6,"span",45)(4,Rt,2,4,"span",45),r()),o&2){let e=s().$index;n(),_(e===0?1:e===1?2:e===5?3:4)}}function It(o,m){if(o&1&&(l(0,"td",52)(1,"span"),p(2),r()()),o&2){let e=s().$index,t=s(2);c("ngStyle",I(2,ht)),n(2),x(t.footerRow[e]())}}function At(o,m){if(o&1&&(l(0,"div",32),u(1,Pt,3,1,"th",40)(2,Vt,5,1,"td",34)(3,It,3,3,"td",41),r()),o&2){let e=m.$implicit,t=m.$index;c("matColumnDef",e)("sticky",t===0)}}function Ft(o,m){if(o&1&&(l(0,"div",53),d(1,"expanded-row",46),r()),o&2){let e=s().$implicit,t=s(2);c("@detailExpand",e===t.expandedRow?"expanded":"collapsed"),n(),c("stock",e)}}function Lt(o,m){if(o&1&&(l(0,"td",43),u(1,Ft,2,2,"div",53),r()),o&2){let e=m.$implicit,t=s(2);z("colspan",t.columnDefs.length),n(),_(t.expandedRow&&t.expandedRow.symbol===e.symbol?1:-1)}}function $t(o,m){o&1&&d(0,"tr",54)}function Ot(o,m){if(o&1&&d(0,"tr",55),o&2){let e=m.$implicit,t=s(2);B("expanded-stock-row",t.expandedRow===e)("row-clicked",t.expandedRow===e)}}function Gt(o,m){o&1&&d(0,"tr",56)}function zt(o,m){o&1&&d(0,"tr",57)}function Bt(o,m){o&1&&(l(0,"tr",58)(1,"td",59)(2,"h1",60)(3,"mat-icon"),p(4,"sentiment_very_dissatisfied"),r(),l(5,"span"),p(6,"Wow! Such amazing search, no results!"),r()()()())}function Wt(o,m){if(o&1&&(l(0,"table",31),N(1,At,4,2,"div",32,W),Y(3,33),u(4,Lt,2,2,"td",34),q(),u(5,$t,1,0,"tr",35)(6,Ot,1,4,"tr",36)(7,Gt,1,0,"tr",37)(8,zt,1,0,"tr",38)(9,Bt,7,0,"tr",39),r()),o&2){let e=s();c("dataSource",e.dataSource),n(),Q(e.columnDefs),n(4),c("matHeaderRowDef",e.columnDefs)("matHeaderRowDefSticky",!0),n(),c("matRowDefColumns",e.columnDefs),n(),c("matRowDefColumns",I(7,gt)),n(),c("matFooterRowDef",e.columnDefs)("matFooterRowDefSticky",!0)}}function Nt(o,m){if(o&1){let e=v();l(0,"button",68),C("click",function(){g(e);let i=s(3);return h(i.resetTable())}),l(1,"mat-icon"),p(2,"restart_alt"),r(),p(3," Reset "),r()}}function Qt(o,m){if(o&1){let e=v();l(0,"mat-slide-toggle",64),C("toggleChange",function(){g(e);let i=s(2);return h(i.showWidgets())}),l(1,"span"),p(2),r()(),l(3,"mat-form-field",65)(4,"mat-label"),p(5,"Filter"),r(),l(6,"input",66,5),C("keyup",function(i){g(e);let a=s(2);return h(a.applyFilter(i))}),r()(),u(8,Nt,4,0,"button",67)}if(o&2){let e=s(2);n(2),x(e.showTradingviewWidgets?"Hide Widgets":"Show Widgets"),n(6),_(e.showResetButton?8:-1)}}function Yt(o,m){if(o&1){let e=v();l(0,"div",61)(1,"div",62)(2,"mat-icon"),p(3,"info"),r(),l(4,"span"),p(5,"Click on a row to expand it. Click on a ticker symbol card to open the ticker data sheet"),r()(),l(6,"div",63)(7,"mat-slide-toggle",64),C("toggleChange",function(){g(e);let i=s();return h(i.openPortfolioEditor())}),l(8,"span"),p(9),r()(),u(10,Qt,9,2),r()()}if(o&2){let e=s();n(9),x(e.showPortfolioEditor?"Close Editor":"Manage Portfolio"),n(),_(e.showPortfolioEditor?-1:10)}}function qt(o,m){o&1&&d(0,"portfolio-editor")}var Yo=(()=>{class o{constructor(e){this.dataService=e,this.portfolioHoldings={},this.portfolioData={},this.showPortfolioEditor=!1,this.showResetButton=!1,this.showTradingviewWidgets=!1,this.selectedTab="allocations",this.selectedSectorColors=[],this.passiveIncomeTarget=0,this.passiveIncomeGoalPercentage=0,this.portfolioValueTarget=0,this.portfolioValueGoalPercentage=0,this.sectorsData=[],this.portfolioPercentData=[],this.marketValueData=[],this.unrealizedGainData=[],this.dividendData=[],this.yocData=[],this.allocationsBarChartColorScheme={domain:["slategrey"]},this.valueBarChartColorScheme={domain:["slategrey"]},this.dividendBarChartColorScheme={domain:["slategrey"]},this.stackedBarChartColorScheme={domain:["slategrey","skyblue"]},this.totalCostChartData=[],this.allTotalCostChartData=[],this.dataSource=new tt,this.headers=["Symbol","Average Cost x shares","Total Invested","Market Value","Portfolio %","Unrealized Gain","Unrealized Gain %","Dividend Income","Yield on Cost","Sector","Industry"],this.columnDefs=["symbol","costAverage","totalCost","marketValue","portfolioPercent","unrealizedGain","unrealizedGainPercent","dividendIncome","yieldOnCost","sector","industry"],this.cells=[t=>"",t=>"",t=>`$${t.totalCost}`,t=>`$${t.marketValue.toFixed(2)}`,t=>`${(t.portfolioPercent*100).toFixed(2)}%`,t=>"",t=>`${(t.unrealizedGainPercent*100).toFixed(2)}%`,t=>`$${t.dividendIncome.toFixed(2)}`,t=>(t.yieldOnCost*100).toFixed(2)+"%",t=>t.sector||"N/A",t=>t.industry||"N/A"],this.footerRow=[()=>`Total Holdings: ${this.portfolioHoldings.positionsHeld}`,()=>"",()=>`$${this.portfolioHoldings.totalAmountInvested.toFixed(2)}`,()=>`$${this.portfolioHoldings.marketValue.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.unrealizedGain.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.dividendIncome.toFixed(2)}`,()=>`${(this.portfolioHoldings.yieldOnCost*100).toFixed(2)}%`,()=>"",()=>""],this.getGainLostColor=t=>this.portfolioHoldings[t].unrealizedGainPercent>0?"teal":"chocolate"}ngOnInit(){this.portfolioSymbols=this.dataService.portfolioSymbols,this.portfolioData=this.dataService.portfolioData,this.portfolioHoldings=this.dataService.portfolioHoldings,this.passiveIncomeTarget=12e3,this.portfolioValueTarget=this.passiveIncomeTarget/this.portfolioHoldings.yieldOnCost,this.passiveIncomeGoalPercentage=this.portfolioHoldings.dividendIncome/this.passiveIncomeTarget,this.portfolioValueGoalPercentage=this.portfolioHoldings.marketValue/this.portfolioValueTarget;let e={};this.portfolioSymbols?.forEach(t=>{let i=this.portfolioHoldings[t],a=this.portfolioData[t],f=a.profile?.sector||"ETF",V=e[f]||0;e[f]=V+i.marketValue,this.portfolioPercentData.push({name:a.symbol,value:i.marketValue/this.portfolioHoldings.marketValue*100,sector:f}),this.marketValueData.push({name:a.symbol,series:[{name:"Cost Basis",value:i.totalCost},{name:"Unrealized Gain",value:i.unrealizedGain}],sector:f}),this.unrealizedGainData.push({name:a.symbol,value:i.unrealizedGainPercent*100||0,sector:f}),i.dividendIncome&&(this.dividendData.push({name:a.symbol,value:i.dividendIncome,sector:f}),this.yocData.push({name:a.symbol,value:i.yieldOnCost*100,sector:f}))}),Object.entries(e).forEach(([t,i])=>{this.sectorsData.push({name:t,value:i})}),this.sectorsData.sort((t,i)=>t.value-i.value),this.portfolioPercentData.sort((t,i)=>this.portfolioHoldings[t.name].marketValue-this.portfolioHoldings[i.name].marketValue),this.marketValueData.sort((t,i)=>this.portfolioHoldings[t.name].marketValue-this.portfolioHoldings[i.name].marketValue),this.unrealizedGainData.sort((t,i)=>this.portfolioHoldings[t.name].unrealizedGainPercent-this.portfolioHoldings[i.name].unrealizedGainPercent),this.dividendData.sort((t,i)=>this.portfolioHoldings[t.name].dividendIncome-this.portfolioHoldings[i.name].dividendIncome),this.yocData.sort((t,i)=>this.portfolioHoldings[t.name].yieldOnCost-this.portfolioHoldings[i.name].yieldOnCost),this.dataSource.data=this.dataService.portfolioSymbols.map(t=>{let i=this.portfolioHoldings[t],a=this.portfolioData[t],f={name:a.symbol,value:i.totalCost,sector:a.profile?.sector||"ETF",shortName:a.shortName,longName:a.longName};return this.allTotalCostChartData.push(f),G(O({},i),{symbol:a.symbol,sector:a.profile?.sector,industry:a.profile?.industry,rating:a.recommendationKey,longName:a.longName,shortName:a.shortName,quoteType:a.quoteType,website:a.profile?.website||"",marketState:a.marketState,fiftyTwoWeekLow:a.fiftyTwoWeekLow.raw,regularMarketPrice:a.regularMarketPrice.raw,regularMarketChange:a.regularMarketChange.raw,regularMarketChangePercent:a.regularMarketChangePercent.raw,preMarketPrice:a.preMarketPrice.raw,preMarketChangePercent:a.preMarketChangePercent?.raw||0,postMarketPrice:a.postMarketPrice.raw,postMarketChangePercent:a.postMarketChangePercent?.raw||0,earnings:a.earnings})}),this.dataSource.filterPredicate=(t,i)=>{let a=[t.symbol,t.shortName,t.longName,t.quoteType,t.sector||"",t.industry||""];for(let f of a)if(f.toLowerCase().includes(i.toLowerCase()))return!0;return!1},this.allTotalCostChartData.sort((t,i)=>i.value-t.value),this.totalCostChartData=this.allTotalCostChartData}ngAfterViewInit(){this.dataSource.sort=this.sort}applyFilter(e){this.totalCostChartData=this.allTotalCostChartData;let t=e.target.value;this.dataSource.filter=t,t?this.totalCostChartData=this.totalCostChartData.filter(i=>i.sector?.toLowerCase().includes(t.toLowerCase())||i.name?.toLowerCase().includes(t.toLowerCase())||i.shortName?.toLowerCase().includes(t.toLowerCase())||i.longName?.toLowerCase().includes(t.toLowerCase())):this.totalCostChartData=this.allTotalCostChartData}getCellColor(e,t){switch(t){case 5:case 6:return e.unrealizedGain>0?$.Gain:$.Lost;case 11:return e.rating==="buy"?"teal":"black";default:return"black"}}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}showWidgets(){this.showTradingviewWidgets=!this.showTradingviewWidgets}getTooltip(e){return e==="passive"?`Progress: ${(this.passiveIncomeGoalPercentage*100).toFixed(4)}%`:e==="investment"?`Progress: ${(this.portfolioValueGoalPercentage*100).toFixed(4)}%`:""}selectTab(e){this.selectedTab=e,this.selectedSectorColors=[]}onSelectSector(e){this.selectedSectorColors=[],this.portfolioPercentData.forEach(t=>{t.sector===e.name&&this.selectedSectorColors.push({name:t.name,value:"skyblue"})}),this.dataSource.filter=e.name,this.showResetButton=!0}resetTable(){this.dataSource.filter="",this.showResetButton=!1}openPortfolioEditor(){this.showPortfolioEditor=!this.showPortfolioEditor}static{this.\u0275fac=function(t){return new(t||o)(D(be))}}static{this.\u0275cmp=b({type:o,selectors:[["portfolio-holdings"]],viewQuery:function(t,i){if(t&1&&(k(R,5),k(E,5)),t&2){let a;H(a=M())&&(i.table=a.first),H(a=M())&&(i.sort=a.first)}},standalone:!0,features:[S],decls:19,vars:12,consts:[["portfolioDetailsTitleRef",""],["portfolioDetailsRef",""],["tableRef",""],["tableSubcontentRef",""],["portfolioEditorRef",""],["input",""],[1,"summary-cards-container"],["subtitle","Holdings",3,"value"],["valueType","currency","subtitle","Total Investment",3,"value"],["valueType","currency","subtitle","Market Value",3,"value"],["subtitle","Unrealized Gain","valueType","currency",3,"value","color"],["valueType","percentage","subtitle","Unrealized Gain Percent",3,"value","color"],["title","Portfolio Details",3,"titleContentRef","mainContentRef"],["title","Portfolio Holdings",3,"mainContentRef","subtitleContentRef"],["valueType","currency","subtitle","Projected Annual Income",3,"value"],["valueType","percentage","subtitle","Portfolio Yield",3,"value"],["valueType","percentage","subtitle","Portfolio YOC","color","teal",3,"value"],["selected","",3,"click"],[3,"click"],[1,"goals-container"],[1,"goal-container","add-margin"],[3,"min","max","step","showTickMarks","color"],["matSliderThumb","","matTooltipPosition","above",3,"value","matTooltip"],[1,"goal-labels"],[1,"add-flex"],[1,"chart-container"],[3,"select","scheme","animations","results","labels","title","maxLabelLength"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel","roundEdges","customColors"],[3,"scheme","animations","results","label"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel"],[3,"results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel","roundEdges","customColors"],["mat-table","","matSort","","matSortActive","unrealizedGainPercent","matSortDirection","asc","multiTemplateDataRows","",3,"dataSource"],[3,"matColumnDef","sticky"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"expanded-stock-row","row-clicked",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],[1,"single-quote-widget",3,"symbol"],[1,"cost-average"],["disabled","","value","costAverage"],["disabled","","value","shares"],[3,"click","ngStyle"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"],[1,"no-match"],[1,"subcontent-container"],[1,"subcontent-info"],[1,"table-actions"],[3,"toggleChange"],["appearance","outline"],["matInput","",3,"keyup"],["mat-stroked-button",""],["mat-stroked-button","",3,"click"]],template:function(t,i){if(t&1&&(l(0,"section",6),d(1,"info-card",7)(2,"info-card",8)(3,"info-card",9)(4,"info-card",10)(5,"info-card",11),u(6,Ct,3,3),r(),u(7,vt,8,1,"ng-template",null,0,P)(9,St,30,30,"ng-template",null,1,P),d(11,"container-card",12),u(12,Wt,10,8,"ng-template",null,2,P)(14,Yt,11,2,"ng-template",null,3,P)(16,qt,1,0,"ng-template",null,4,P),d(18,"container-card",13)),t&2){let a=T(8),f=T(10),V=T(13),pt=T(15),ut=T(17);n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.positionsHeld),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.totalAmountInvested),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.marketValue),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGain)("color",(i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGain)>0?"teal":"chocolate"),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGainPercent)("color",(i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGainPercent)>0?"teal":"chocolate"),n(),_(i.portfolioHoldings.dividendIncome>0?6:-1),n(5),c("titleContentRef",a)("mainContentRef",f),n(7),c("mainContentRef",i.showPortfolioEditor?ut:V)("subtitleContentRef",pt)}},dependencies:[Te,X,ct,ke,oe,te,ue,me,pe,de,ne,ie,he,ce,se,re,le,ae,Ve,Re,Me,He,Le,Ae,Fe,Oe,E,$e,et,R,ze,qe,We,Ge,Ue,Be,je,Ne,Ye,Qe,Xe,Ke,Je,Ze,Pe,Se,U,we,Ce,xe,ve,ye,rt,mt,Ie],styles:["mat-slider[_ngcontent-%COMP%]{width:100%;height:.5rem;padding-top:.5rem;padding-bottom:.5rem;margin-left:0;margin-right:1.5rem}.mat-mdc-outlined-button[_ngcontent-%COMP%]{max-width:min-content;margin-left:.5rem}.mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin:0}.goals-container[_ngcontent-%COMP%]{display:flex}  .goal-container mat-slider-visual-thumb.mdc-slider__thumb{height:0px!important}.summary-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:.5rem;margin-bottom:2px}.goal-container[_ngcontent-%COMP%]{width:50%;margin-top:.5rem;margin-bottom:1rem}.goal-labels[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:1rem}  ul.legend-labels{width:max-content!important;background:none!important}table[_ngcontent-%COMP%]{margin-top:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:1rem}mat-form-field[_ngcontent-%COMP%]{height:min-content}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.single-quote-widget[_ngcontent-%COMP%]{z-index:1000;height:5.5rem;margin-right:1.25rem}td.mat-mdc-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type, td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.no-match[_ngcontent-%COMP%]{display:flex;align-items:center;width:max-content}.row-clicked[_ngcontent-%COMP%]{font-weight:700;background-color:#f8f8ff}.subcontent-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:.5rem}.subcontent-info[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-mdc-form-field[_ngcontent-%COMP%]{flex-direction:row}"],data:{animation:[K("detailExpand",[L("collapsed",F({height:"0px",minHeight:"0"})),L("expanded",F({height:"*"})),ee("expanded <=> collapsed",Z("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}})}}return o})();export{Yo as a};
