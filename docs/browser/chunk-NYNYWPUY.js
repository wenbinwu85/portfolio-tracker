import{a as _t,b as gt,c as yt}from"./chunk-HTREI267.js";import{B as re,a as At,b as Ft,c as Lt,d as E,e as $t,f as Ot,g as R,h as Gt,i as zt,j as Bt,k as Wt,l as Nt,m as Qt,n as Yt,o as qt,p as Ut,q as jt,r as Xt,s as Jt,t as Kt,u as Zt,v as te,w as ee,x as ne,y as ae,z as le}from"./chunk-BE5EBTDA.js";import{a as oe,b as ie}from"./chunk-YS35D442.js";import{a as ht,c as Ct}from"./chunk-HSWCOCJ5.js";import{a as It}from"./chunk-5QCYOLLE.js";import{f as Pt,g as St,h as kt}from"./chunk-CSLQBHLS.js";import{a as Vt}from"./chunk-W3RTIQTX.js";import{a as xt,b as vt}from"./chunk-FSC5F6KH.js";import{A as mt,B as dt,C as pt,D as $,G as ut,t as lt,x as rt,y as st,z as ct}from"./chunk-ZT244NFY.js";import{a as wt,b as bt,f as Tt}from"./chunk-RGKBBH44.js";import{g as ft}from"./chunk-I2WXWEPM.js";import{g as Ht,i as Mt,k as Dt,l as Et,m as Rt}from"./chunk-3FWKBJBM.js";import{a as ot,b as it}from"./chunk-PR6IC7HB.js";import{$ as h,Ab as y,Bb as w,Db as S,Fa as u,Hc as et,Ja as z,Ka as c,Ma as B,Pa as _,Ra as W,Sa as N,Sb as j,Ta as Q,Ua as l,V as b,Va as r,Wa as d,Xa as Y,Xb as X,Ya as q,Yb as J,_ as g,_a as v,a as O,b as G,bb as C,db as s,ib as k,jb as H,kb as M,kc as K,lc as Z,nb as T,nc as F,ob as p,oc as L,pb as x,qb as U,qc as tt,ra as n,sa as D,wb as P,wd as nt,xb as I,xd as at,yb as A}from"./chunk-E7YHUEPY.js";function fe(o,m){if(o&1&&(l(0,"mat-tab",5)(1,"div",11),d(2,"stock-earnings-chart",12)(3,"stock-recommendation-trends",7),r()()),o&2){let t=s();n(2),c("stock",t.stock),n(),c("symbol",t.stock.symbol)}}var ce=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=b({type:o,selectors:[["expanded-row"]],inputs:{stock:"stock"},standalone:!0,features:[P],decls:13,vars:6,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"company","symbol"],["label","Financials"],["width","100%",3,"symbol"],["label","EPS & Recommendations"],["label","Profile"],[3,"symbol"],[1,"tradingview-widget-copyright"],["href","https://www.tradingview.com/","rel","noopener nofollow","target","_blank"],[1,"blue-text"],[1,"widget-container"],[3,"stock"]],template:function(e,i){e&1&&(l(0,"mat-tab-group",0)(1,"mat-tab",1),d(2,"tv-symbol-overview-widget",2),r(),l(3,"mat-tab",3),d(4,"tv-financials-widget",4),r(),u(5,fe,4,2,"mat-tab",5),l(6,"mat-tab",6),d(7,"tv-symbol-info-widget",7)(8,"tv-profile-widget",4),r()(),l(9,"div",8)(10,"a",9)(11,"span",10),p(12,"Track all markets on TradingView"),r()()()),e&2&&(n(2),c("company",i.stock.shortName)("symbol",i.stock.symbol),n(2),c("symbol",i.stock.symbol),n(),_(i.stock.quoteType==="EQUITY"?5:-1),n(2),c("symbol",i.stock.symbol),n(),c("symbol",i.stock.symbol))},dependencies:[J,Tt,wt,bt,ie,oe,ne,ae,le,It],styles:[".widget-container[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-evenly;padding:.5rem 0}"]})}}return o})();var _e=["singleQuoteWidget"],me=(()=>{class o{constructor(t){this.tradingviewService=t,this.type="simple"}ngAfterViewInit(){this.params={symbol:this.symbol,width:this.type==="simple"?280:800,height:"auto",colorTheme:this.theme||"light",isTransparent:!0,locale:"en"},this.params=JSON.stringify(this.params);let t=this.tradingviewService.singleQuoteWidget(this.params,this.type);this.singleQuoteWidget.nativeElement.appendChild(t)}static{this.\u0275fac=function(e){return new(e||o)(D(Vt))}}static{this.\u0275cmp=b({type:o,selectors:[["tv-single-quote-widget"]],viewQuery:function(e,i){if(e&1&&k(_e,5),e&2){let a;H(a=M())&&(i.singleQuoteWidget=a.first)}},inputs:{symbol:"symbol",type:"type",theme:"theme"},standalone:!0,features:[P],decls:2,vars:0,consts:[["singleQuoteWidget",""]],template:function(e,i){e&1&&d(0,"div",null,0)},encapsulation:2})}}return o})();var ge=()=>["expandedRow"],de=o=>({color:o}),he=()=>({color:"black"});function Ce(o,m){if(o&1&&d(0,"info-card",14)(1,"info-card",15)(2,"info-card",16),o&2){let t=s();c("value",t.portfolioHoldings==null?null:t.portfolioHoldings.dividendIncome),n(),c("value",t.portfolioHoldings==null?null:t.portfolioHoldings.yield),n(),c("value",t.portfolioHoldings==null?null:t.portfolioHoldings.yieldOnCost)}}function xe(o,m){if(o&1){let t=v();l(0,"mat-chip-option",18),C("click",function(){g(t);let i=s(2);return h(i.selectTab("dividends"))}),p(1,"Dividend Income"),r()}}function ve(o,m){if(o&1){let t=v();l(0,"mat-chip-listbox")(1,"mat-chip-option",17),C("click",function(){g(t);let i=s();return h(i.selectTab("allocations"))}),p(2,"Allocations"),r(),l(3,"mat-chip-option",18),C("click",function(){g(t);let i=s();return h(i.selectTab("cost-basis"))}),p(4,"Cost Basis"),r(),l(5,"mat-chip-option",18),C("click",function(){g(t);let i=s();return h(i.selectTab("performance"))}),p(6,"Performance"),r(),u(7,xe,2,0,"mat-chip-option"),r()}if(o&2){let t=s();n(7),_(t.dividendData.length?7:-1)}}function ye(o,m){if(o&1){let t=v();l(0,"div",24)(1,"div",25)(2,"ngx-charts-pie-chart",26),C("select",function(i){g(t);let a=s(2);return h(a.onSelectSector(i))}),r()(),l(3,"div",25),d(4,"ngx-charts-bar-vertical",27),r()()}if(o&2){let t=s(2);n(2),c("scheme","air")("animations",!0)("results",t.sectorsData)("labels",!0)("title","Sector Allocations")("maxLabelLength",100),n(2),c("scheme",t.allocationsBarChartColorScheme)("results",t.portfolioPercentData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Holding Allocations %")("roundEdges",!1)("customColors",t.selectedSectorColors)}}function we(o,m){if(o&1&&(l(0,"div",24)(1,"div",25),d(2,"ngx-charts-pie-grid",28),r()()),o&2){let t=s(2);n(2),c("scheme","picnic")("animations",!0)("results",t.totalCostChartData)("label","Dollars Invested")}}function be(o,m){if(o&1&&(l(0,"div",24)(1,"div",25),d(2,"ngx-charts-bar-vertical-stacked",29),r(),l(3,"div",25),d(4,"ngx-charts-bar-vertical",30),r()()),o&2){let t=s(2);n(2),c("scheme",t.stackedBarChartColorScheme)("results",t.marketValueData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Cost Basis & Unrealized Gain"),n(2),c("results",t.unrealizedGainData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Unrealized Gain %")("roundEdges",!1)("customColors",t.getGainLostColor)}}function Te(o,m){if(o&1&&(l(0,"div",24)(1,"div",25),d(2,"ngx-charts-bar-vertical",27),r(),l(3,"div",25),d(4,"ngx-charts-bar-vertical",27),r()()),o&2){let t=s(2);n(2),c("scheme",t.dividendBarChartColorScheme)("results",t.dividendData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Dividend Income")("roundEdges",!1)("customColors",t.selectedSectorColors),n(2),c("scheme",t.dividendBarChartColorScheme)("results",t.yocData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Yield On Cost %")("roundEdges",!1)("customColors",t.selectedSectorColors)}}function Pe(o,m){if(o&1&&(l(0,"section",19)(1,"div",20)(2,"h6"),p(3,"Dividend Income Target"),r(),l(4,"mat-slider",21),d(5,"input",22),r(),l(6,"div",23)(7,"mat-chip"),p(8),y(9,"currency"),r(),l(10,"mat-chip"),p(11),y(12,"currency"),r()()(),l(13,"div",20)(14,"h6"),p(15,"Portfolio Value Target"),r(),l(16,"mat-slider",21),d(17,"input",22),r(),l(18,"div",23)(19,"mat-chip"),p(20),y(21,"currency"),r(),l(22,"mat-chip"),p(23),y(24,"currency"),r()()()(),d(25,"mat-divider"),u(26,ye,5,16,"div",24)(27,we,3,4,"div",24)(28,be,5,17,"div",24)(29,Te,5,20,"div",24)),o&2){let t=s();n(4),c("min",0)("max",t.passiveIncomeTarget)("step",120)("showTickMarks",!0)("color","primary"),n(),c("value",t.portfolioHoldings==null?null:t.portfolioHoldings.dividendIncome)("matTooltip",t.getTooltip("passive")),n(3),x(w(9,22,"0")),n(3),x(w(12,24,t.passiveIncomeTarget)),n(5),c("min",0)("max",t.portfolioValueTarget)("step",1e3)("showTickMarks",!0)("color","primary"),n(),c("value",t.portfolioHoldings==null?null:t.portfolioHoldings.marketValue)("matTooltip",t.getTooltip("investment")),n(3),x(w(21,26,"0")),n(3),x(w(24,28,t.portfolioValueTarget)),n(3),_(t.selectedTab==="allocations"?26:-1),n(),_(t.selectedTab==="cost-basis"?27:-1),n(),_(t.selectedTab==="performance"?28:-1),n(),_(t.selectedTab==="dividends"?29:-1)}}function Se(o,m){if(o&1&&(l(0,"th",42)(1,"span"),p(2),r()()),o&2){let t=s().$index,e=s(2);n(2),x(e.headers[t])}}function ke(o,m){if(o&1&&d(0,"stock-name-card",46),o&2){let t=s(2).$implicit;c("stock",t)}}function He(o,m){if(o&1&&d(0,"tv-single-quote-widget",47),o&2){let t=s(2).$implicit;c("symbol",t.symbol)}}function Me(o,m){if(o&1&&(l(0,"div",44),u(1,ke,1,1,"stock-name-card",46)(2,He,1,1,"tv-single-quote-widget",47),r()),o&2){let t=s(4);n(),_(t.showTradingviewWidgets?2:1)}}function De(o,m){if(o&1){let t=v();l(0,"div",18),C("click",function(){g(t);let i=s().$implicit,a=s(3);return h(a.expandRow(i))}),l(1,"div",48)(2,"span",49),p(3),y(4,"currency"),r(),l(5,"span",50),p(6),r()()()}if(o&2){let t=s().$implicit,e=s(3);n(3),x(w(4,2,e.portfolioHoldings[t.symbol].costAverage)),n(3),U(" x ",e.portfolioHoldings[t.symbol].shares,"")}}function Ee(o,m){if(o&1){let t=v();l(0,"span",51),C("click",function(){g(t);let i=s().$implicit,a=s(3);return h(a.expandRow(i))}),p(1),y(2,"currency"),r()}if(o&2){let t=s().$implicit,e=s(),i=e.$implicit,a=e.$index,f=s(2);c("ngStyle",A(4,de,f.getCellColor(t,a))),n(),x(w(2,2,t[i]))}}function Re(o,m){if(o&1){let t=v();l(0,"span",51),C("click",function(){g(t);let i=s().$implicit,a=s(3);return h(a.expandRow(i))}),p(1),r()}if(o&2){let t=s().$implicit,e=s().$index,i=s(2);c("ngStyle",A(2,de,i.getCellColor(t,e))),n(),x(i.cells[e](t))}}function Ve(o,m){if(o&1&&(l(0,"td",43),u(1,Me,3,1,"div",44)(2,De,7,4,"div")(3,Ee,3,6,"span",45)(4,Re,2,4,"span",45),r()),o&2){let t=s().$index;n(),_(t===0?1:t===1?2:t===5?3:4)}}function Ie(o,m){if(o&1&&(l(0,"td",52)(1,"span"),p(2),r()()),o&2){let t=s().$index,e=s(2);c("ngStyle",I(2,he)),n(2),x(e.footerRow[t]())}}function Ae(o,m){if(o&1&&(l(0,"div",32),u(1,Se,3,1,"th",40)(2,Ve,5,1,"td",34)(3,Ie,3,3,"td",41),r()),o&2){let t=m.$implicit,e=m.$index;c("matColumnDef",t)("sticky",e===0)}}function Fe(o,m){if(o&1&&(l(0,"div",53),d(1,"expanded-row",46),r()),o&2){let t=s().$implicit,e=s(2);c("@detailExpand",t===e.expandedRow?"expanded":"collapsed"),n(),c("stock",t)}}function Le(o,m){if(o&1&&(l(0,"td",43),u(1,Fe,2,2,"div",53),r()),o&2){let t=m.$implicit,e=s(2);z("colspan",e.columnDefs.length),n(),_(e.expandedRow&&e.expandedRow.symbol===t.symbol?1:-1)}}function $e(o,m){o&1&&d(0,"tr",54)}function Oe(o,m){if(o&1&&d(0,"tr",55),o&2){let t=m.$implicit,e=s(2);B("expanded-stock-row",e.expandedRow===t)("row-clicked",e.expandedRow===t)}}function Ge(o,m){o&1&&d(0,"tr",56)}function ze(o,m){o&1&&d(0,"tr",57)}function Be(o,m){o&1&&(l(0,"tr",58)(1,"td",59)(2,"h1",60)(3,"mat-icon"),p(4,"sentiment_very_dissatisfied"),r(),l(5,"span"),p(6,"Wow! Such amazing search, no results!"),r()()()())}function We(o,m){if(o&1&&(l(0,"table",31),N(1,Ae,4,2,"div",32,W),Y(3,33),u(4,Le,2,2,"td",34),q(),u(5,$e,1,0,"tr",35)(6,Oe,1,4,"tr",36)(7,Ge,1,0,"tr",37)(8,ze,1,0,"tr",38)(9,Be,7,0,"tr",39),r()),o&2){let t=s();c("dataSource",t.dataSource),n(),Q(t.columnDefs),n(4),c("matHeaderRowDef",t.columnDefs)("matHeaderRowDefSticky",!0),n(),c("matRowDefColumns",t.columnDefs),n(),c("matRowDefColumns",I(7,ge)),n(),c("matFooterRowDef",t.columnDefs)("matFooterRowDefSticky",!0)}}function Ne(o,m){o&1&&(l(0,"span"),p(1,"Click on 'Update Portfolio' at the bottom right to save changes."),r())}function Qe(o,m){o&1&&(l(0,"span"),p(1,"Click on a row to expand it. Click on a ticker symbol card to open the ticker data sheet"),r())}function Ye(o,m){if(o&1){let t=v();l(0,"button",68),C("click",function(){g(t);let i=s(3);return h(i.resetTable())}),l(1,"mat-icon"),p(2,"restart_alt"),r(),p(3," Reset "),r()}}function qe(o,m){if(o&1){let t=v();l(0,"mat-slide-toggle",64),C("toggleChange",function(){g(t);let i=s(2);return h(i.showWidgets())}),l(1,"span"),p(2),r()(),l(3,"mat-form-field",65)(4,"mat-label"),p(5,"Filter"),r(),l(6,"input",66,5),C("keyup",function(i){g(t);let a=s(2);return h(a.applyFilter(i))}),r()(),u(8,Ye,4,0,"button",67)}if(o&2){let t=s(2);n(2),x(t.showTradingviewWidgets?"Hide Widgets":"Show Widgets"),n(6),_(t.showResetButton?8:-1)}}function Ue(o,m){if(o&1){let t=v();l(0,"div",61)(1,"div",62)(2,"mat-icon"),p(3,"info"),r(),u(4,Ne,2,0,"span")(5,Qe,2,0,"span"),r(),l(6,"div",63)(7,"mat-slide-toggle",64),C("toggleChange",function(){g(t);let i=s();return h(i.openPortfolioEditor())}),l(8,"span"),p(9),r()(),u(10,qe,9,2),r()()}if(o&2){let t=s();n(4),_(t.showPortfolioEditor?4:5),n(5),x(t.showPortfolioEditor?"Close Editor":"Manage Portfolio"),n(),_(t.showPortfolioEditor?-1:10)}}function je(o,m){o&1&&d(0,"portfolio-editor")}var Uo=(()=>{class o{constructor(t){this.dataService=t,this.portfolioHoldings={},this.portfolioData={},this.showPortfolioEditor=!1,this.showResetButton=!1,this.showTradingviewWidgets=!1,this.selectedTab="allocations",this.selectedSectorColors=[],this.passiveIncomeTarget=0,this.passiveIncomeGoalPercentage=0,this.portfolioValueTarget=0,this.portfolioValueGoalPercentage=0,this.sectorsData=[],this.portfolioPercentData=[],this.marketValueData=[],this.unrealizedGainData=[],this.dividendData=[],this.yocData=[],this.allocationsBarChartColorScheme={domain:["slategrey"]},this.valueBarChartColorScheme={domain:["slategrey"]},this.dividendBarChartColorScheme={domain:["slategrey"]},this.stackedBarChartColorScheme={domain:["slategrey","skyblue"]},this.totalCostChartData=[],this.allTotalCostChartData=[],this.dataSource=new ee,this.headers=["Symbol","Average Cost x shares","Total Invested","Market Value","Portfolio %","Unrealized Gain","Unrealized Gain %","Dividend Income","Yield on Cost","Sector","Industry"],this.columnDefs=["symbol","costAverage","totalCost","marketValue","portfolioPercent","unrealizedGain","unrealizedGainPercent","dividendIncome","yieldOnCost","sector","industry"],this.cells=[e=>"",e=>"",e=>`$${e.totalCost}`,e=>`$${e.marketValue.toFixed(2)}`,e=>`${(e.portfolioPercent*100).toFixed(2)}%`,e=>"",e=>`${(e.unrealizedGainPercent*100).toFixed(2)}%`,e=>`$${e.dividendIncome.toFixed(2)}`,e=>(e.yieldOnCost*100).toFixed(2)+"%",e=>e.sector||"N/A",e=>e.industry||"N/A"],this.footerRow=[()=>`Total Holdings: ${this.portfolioHoldings.positionsHeld}`,()=>"",()=>`$${this.portfolioHoldings.totalAmountInvested.toFixed(2)}`,()=>`$${this.portfolioHoldings.marketValue.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.unrealizedGain.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.dividendIncome.toFixed(2)}`,()=>`${(this.portfolioHoldings.yieldOnCost*100).toFixed(2)}%`,()=>"",()=>""],this.getGainLostColor=e=>this.portfolioHoldings[e].unrealizedGainPercent>0?"teal":"chocolate"}ngOnInit(){this.portfolioSymbols=this.dataService.portfolioSymbols,this.portfolioData=this.dataService.portfolioData,this.portfolioHoldings=this.dataService.portfolioHoldings,this.passiveIncomeTarget=12e3,this.portfolioValueTarget=this.passiveIncomeTarget/this.portfolioHoldings.yieldOnCost,this.passiveIncomeGoalPercentage=this.portfolioHoldings.dividendIncome/this.passiveIncomeTarget,this.portfolioValueGoalPercentage=this.portfolioHoldings.marketValue/this.portfolioValueTarget;let t={};this.portfolioSymbols?.forEach(e=>{let i=this.portfolioHoldings[e],a=this.portfolioData[e],f=a.profile?.sector||"ETF",V=t[f]||0;t[f]=V+i.marketValue,this.portfolioPercentData.push({name:a.symbol,value:i.marketValue/this.portfolioHoldings.marketValue*100,sector:f}),this.marketValueData.push({name:a.symbol,series:[{name:"Cost Basis",value:i.totalCost},{name:"Unrealized Gain",value:i.unrealizedGain}],sector:f}),this.unrealizedGainData.push({name:a.symbol,value:i.unrealizedGainPercent*100||0,sector:f}),i.dividendIncome&&(this.dividendData.push({name:a.symbol,value:i.dividendIncome,sector:f}),this.yocData.push({name:a.symbol,value:i.yieldOnCost*100,sector:f}))}),Object.entries(t).forEach(([e,i])=>{this.sectorsData.push({name:e,value:i})}),this.sectorsData.sort((e,i)=>e.value-i.value),this.portfolioPercentData.sort((e,i)=>this.portfolioHoldings[e.name].marketValue-this.portfolioHoldings[i.name].marketValue),this.marketValueData.sort((e,i)=>this.portfolioHoldings[e.name].marketValue-this.portfolioHoldings[i.name].marketValue),this.unrealizedGainData.sort((e,i)=>this.portfolioHoldings[e.name].unrealizedGainPercent-this.portfolioHoldings[i.name].unrealizedGainPercent),this.dividendData.sort((e,i)=>this.portfolioHoldings[e.name].dividendIncome-this.portfolioHoldings[i.name].dividendIncome),this.yocData.sort((e,i)=>this.portfolioHoldings[e.name].yieldOnCost-this.portfolioHoldings[i.name].yieldOnCost),this.dataSource.data=this.dataService.portfolioSymbols.map(e=>{let i=this.portfolioHoldings[e],a=this.portfolioData[e],f={name:a.symbol,value:i.totalCost,sector:a.profile?.sector||"ETF",shortName:a.shortName,longName:a.longName};return this.allTotalCostChartData.push(f),G(O({},i),{symbol:a.symbol,sector:a.profile?.sector,industry:a.profile?.industry,rating:a.recommendationKey,longName:a.longName,shortName:a.shortName,quoteType:a.quoteType,website:a.profile?.website||"",marketState:a.marketState,fiftyTwoWeekLow:a.fiftyTwoWeekLow.raw,regularMarketPrice:a.regularMarketPrice.raw,regularMarketChange:a.regularMarketChange.raw,regularMarketChangePercent:a.regularMarketChangePercent.raw,preMarketPrice:a.preMarketPrice.raw,preMarketChangePercent:a.preMarketChangePercent?.raw||0,postMarketPrice:a.postMarketPrice.raw,postMarketChangePercent:a.postMarketChangePercent?.raw||0,earnings:a.earnings})}),this.dataSource.filterPredicate=(e,i)=>{let a=[e.symbol,e.shortName,e.longName,e.quoteType,e.sector||"",e.industry||""];for(let f of a)if(f.toLowerCase().includes(i.toLowerCase()))return!0;return!1},this.allTotalCostChartData.sort((e,i)=>i.value-e.value),this.totalCostChartData=this.allTotalCostChartData}ngAfterViewInit(){this.dataSource.sort=this.sort}applyFilter(t){this.totalCostChartData=this.allTotalCostChartData;let e=t.target.value;this.dataSource.filter=e,e?this.totalCostChartData=this.totalCostChartData.filter(i=>i.sector?.toLowerCase().includes(e.toLowerCase())||i.name?.toLowerCase().includes(e.toLowerCase())||i.shortName?.toLowerCase().includes(e.toLowerCase())||i.longName?.toLowerCase().includes(e.toLowerCase())):this.totalCostChartData=this.allTotalCostChartData}getCellColor(t,e){switch(e){case 5:case 6:return t.unrealizedGain>0?$.Gain:$.Lost;case 11:return t.rating==="buy"?"teal":"black";default:return"black"}}expandRow(t){this.expandedRow=this.expandedRow===t?null:t}showWidgets(){this.showTradingviewWidgets=!this.showTradingviewWidgets}getTooltip(t){return t==="passive"?`Progress: ${(this.passiveIncomeGoalPercentage*100).toFixed(4)}%`:t==="investment"?`Progress: ${(this.portfolioValueGoalPercentage*100).toFixed(4)}%`:""}selectTab(t){this.selectedTab=t,this.selectedSectorColors=[]}onSelectSector(t){this.selectedSectorColors=[],this.portfolioPercentData.forEach(e=>{e.sector===t.name&&this.selectedSectorColors.push({name:e.name,value:"skyblue"})}),this.dataSource.filter=t.name,this.showResetButton=!0}resetTable(){this.dataSource.filter="",this.showResetButton=!1}openPortfolioEditor(){this.showPortfolioEditor=!this.showPortfolioEditor}static{this.\u0275fac=function(e){return new(e||o)(D(et))}}static{this.\u0275cmp=b({type:o,selectors:[["portfolio-holdings"]],viewQuery:function(e,i){if(e&1&&(k(R,5),k(E,5)),e&2){let a;H(a=M())&&(i.table=a.first),H(a=M())&&(i.sort=a.first)}},standalone:!0,features:[P],decls:19,vars:13,consts:[["portfolioDetailsTitleRef",""],["portfolioDetailsRef",""],["tableRef",""],["tableSubcontentRef",""],["portfolioEditorRef",""],["input",""],[1,"summary-cards-container"],["subtitle","Holdings",3,"value"],["valueType","currency","subtitle","Total Investment",3,"value"],["valueType","currency","subtitle","Market Value",3,"value"],["subtitle","Unrealized Gain","valueType","currency",3,"value","color"],["valueType","percentage","subtitle","Unrealized Gain Percent",3,"value","color"],["title","Portfolio Details",3,"titleContentRef","mainContentRef"],[3,"title","mainContentRef","subtitleContentRef"],["valueType","currency","subtitle","Projected Annual Income",3,"value"],["valueType","percentage","subtitle","Portfolio Yield",3,"value"],["valueType","percentage","subtitle","Portfolio YOC","color","teal",3,"value"],["selected","",3,"click"],[3,"click"],[1,"goals-container"],[1,"goal-container","add-margin"],[3,"min","max","step","showTickMarks","color"],["matSliderThumb","","matTooltipPosition","above",3,"value","matTooltip"],[1,"goal-labels"],[1,"add-flex"],[1,"chart-container"],[3,"select","scheme","animations","results","labels","title","maxLabelLength"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel","roundEdges","customColors"],[3,"scheme","animations","results","label"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel"],[3,"results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel","roundEdges","customColors"],["mat-table","","matSort","","matSortActive","unrealizedGainPercent","matSortDirection","asc","multiTemplateDataRows","",3,"dataSource"],[3,"matColumnDef","sticky"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"expanded-stock-row","row-clicked",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],[1,"single-quote-widget",3,"symbol"],[1,"cost-average"],["disabled","","value","costAverage"],["disabled","","value","shares"],[3,"click","ngStyle"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"],[1,"no-match"],[1,"subcontent-container"],[1,"subcontent-info"],[1,"table-actions"],[3,"toggleChange"],["appearance","outline"],["matInput","",3,"keyup"],["mat-stroked-button",""],["mat-stroked-button","",3,"click"]],template:function(e,i){if(e&1&&(l(0,"section",6),d(1,"info-card",7)(2,"info-card",8)(3,"info-card",9)(4,"info-card",10)(5,"info-card",11),u(6,Ce,3,3),r(),u(7,ve,8,1,"ng-template",null,0,S)(9,Pe,30,30,"ng-template",null,1,S),d(11,"container-card",12),u(12,We,10,8,"ng-template",null,2,S)(14,Ue,11,3,"ng-template",null,3,S)(16,je,1,0,"ng-template",null,4,S),d(18,"container-card",13)),e&2){let a=T(8),f=T(10),V=T(13),pe=T(15),ue=T(17);n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.positionsHeld),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.totalAmountInvested),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.marketValue),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGain)("color",(i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGain)>0?"teal":"chocolate"),n(),c("value",i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGainPercent)("color",(i.portfolioHoldings==null?null:i.portfolioHoldings.unrealizedGainPercent)>0?"teal":"chocolate"),n(),_(i.portfolioHoldings.dividendIncome>0?6:-1),n(5),c("titleContentRef",a)("mainContentRef",f),n(7),c("title",i.showPortfolioEditor?"Portfolio Editor":"Portfolio Holdings")("mainContentRef",i.showPortfolioEditor?ue:V)("subtitleContentRef",pe)}},dependencies:[ut,X,ce,kt,Ct,ht,pt,ct,dt,mt,at,nt,ft,st,rt,lt,it,ot,gt,_t,vt,xt,Lt,At,Ft,Ot,E,$t,te,R,zt,qt,Wt,Gt,jt,Bt,Ut,Nt,Yt,Qt,Xt,Kt,Jt,Zt,St,Pt,j,Rt,Ht,Mt,Dt,Et,re,me,yt],styles:["mat-slider[_ngcontent-%COMP%]{width:100%;height:.5rem;padding-top:.5rem;padding-bottom:.5rem;margin-left:0;margin-right:1.5rem}.mat-mdc-outlined-button[_ngcontent-%COMP%]{max-width:min-content;margin-left:.5rem}.mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin:0}.goals-container[_ngcontent-%COMP%]{display:flex}  .goal-container mat-slider-visual-thumb.mdc-slider__thumb{height:0px!important}.summary-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:.5rem;margin-bottom:2px}.goal-container[_ngcontent-%COMP%]{width:50%;margin-top:.5rem;margin-bottom:1rem}.goal-labels[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:1rem}  ul.legend-labels{width:max-content!important;background:none!important}table[_ngcontent-%COMP%]{margin-top:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:1rem}mat-form-field[_ngcontent-%COMP%]{height:min-content}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.single-quote-widget[_ngcontent-%COMP%]{z-index:1000;height:5.5rem;margin-right:1.25rem}td.mat-mdc-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type, td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.no-match[_ngcontent-%COMP%]{display:flex;align-items:center;width:max-content}.row-clicked[_ngcontent-%COMP%]{font-weight:700;background-color:#f8f8ff}.subcontent-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:.5rem}.subcontent-info[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-mdc-form-field[_ngcontent-%COMP%]{flex-direction:row}"],data:{animation:[K("detailExpand",[L("collapsed",F({height:"0px",minHeight:"0"})),L("expanded",F({height:"*"})),tt("expanded <=> collapsed",Z("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}})}}return o})();export{Uo as a};
