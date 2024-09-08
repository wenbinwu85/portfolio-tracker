import './polyfills.server.mjs';
import"./chunk-VPPJMF3C.mjs";import"./chunk-BNZ7KQNX.mjs";import{a as Q,b as M,f as R}from"./chunk-BGRIWWPV.mjs";import{b as Y}from"./chunk-73N4CM4W.mjs";import{j as F}from"./chunk-CSEF6CSE.mjs";import{j as T,m as I}from"./chunk-XGJNUMTL.mjs";import"./chunk-SFAXOFUV.mjs";import"./chunk-CVP4YOA6.mjs";import"./chunk-QLFL53WF.mjs";import"./chunk-QAVQYTJV.mjs";import"./chunk-YG54OGXN.mjs";import{b as D,c as A}from"./chunk-UWJE4WK3.mjs";import{f as w}from"./chunk-RFVNM7LE.mjs";import"./chunk-UTCM4PI5.mjs";import"./chunk-KB5XQQFM.mjs";import{$b as S,Ab as y,Bb as b,Cb as c,Db as s,Eb as m,Nb as f,Xb as d,Ya as o,Yb as h,Za as x,Zb as E,_b as v,bc as g,cd as _,fa as u,jc as C,nb as k,sb as p}from"./chunk-X4WKDQBD.mjs";import"./chunk-5XUXGTUW.mjs";function $(t,e){if(t&1&&(c(0,"div",4),m(1,"ngx-charts-bubble-chart",5),s()),t&2){let r=f();o(),p("view",r.view)("scheme",r.colorScheme)("results",r.earningsChartData)("xAxis",!0)("yAxis",!0)("legend",!0)("animations",!0)("legendTitle","")}}function j(t,e){if(t&1&&m(0,"stock-ticker-chip",6),t&2){let r=f();p("stock",r.stock)}}function G(t,e){if(t&1&&(c(0,"div")(1,"span"),h(2),s(),c(3,"span"),h(4),s(),c(5,"span"),h(6),s()()),t&2){let r=f();o(2),S(" ",r.currentQuarter," earnings date: ",r.earningsDate,""),o(2),v(" ",r.currentQuarter," EPS estimate: "),o(2),E(r.currentQuarterEstimate)}}var P=(()=>{let e=class e{constructor(){this.earningsChartData=[],this.currentQuarter="",this.currentQuarterYear="",this.currentQuarterEstimate=0,this.earningsDate="",this.view=[400,200],this.colorScheme={domain:["skyblue","slategrey"]}}ngOnInit(){let a=this.stock.earnings?.earningsChart;this.currentQuarter=a.currentQuarterEstimateDate,this.currentQuarterYear=a.currentQuarterEstimateYear,this.currentQuarterEstimate=a.currentQuarterEstimate.fmt,this.earningsDate=a.earningsDate[0].fmt,this.earningsChartData.name=this.stock.symbol;let n={name:"Estimate",series:[]},l={name:"Actual",series:[]};a.quarterly.forEach(i=>{n.series.push({name:i.date,x:i.date,y:i.estimate.fmt,r:50}),l.series.push({name:i.date,x:i.date,y:i.actual.fmt,r:50})}),n.series.push({name:this.currentQuarter+this.currentQuarterYear+" "+this.earningsDate,x:this.currentQuarter+this.currentQuarterYear,y:this.currentQuarterEstimate,r:50}),this.earningsChartData.push(n),this.earningsChartData.push(l)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["stock-earnings-chart"]],inputs:{stock:"stock"},standalone:!0,features:[g],decls:7,vars:4,consts:[["earningsChartRef",""],["titleContentRef",""],["subRef",""],[3,"title","mainContentRef","titleContentRef","subContentRef"],[1,"earnings-container"],[3,"view","scheme","results","xAxis","yAxis","legend","animations","legendTitle"],[3,"stock"]],template:function(n,l){if(n&1&&(k(0,$,2,8,"ng-template",null,0,C)(2,j,1,1,"ng-template",null,1,C)(4,G,7,4,"ng-template",null,2,C),m(6,"container-card",3)),n&2){let i=d(1),B=d(3),O=d(5);o(6),p("title",l.stock.longName+" Earnings Per Share")("mainContentRef",i)("titleContentRef",B)("subContentRef",O)}},dependencies:[I,T,F,w],styles:[".earnings-container[_ngcontent-%COMP%]{display:flex;padding:.5rem}  ul.legend-labels{width:min-content!important;background:none!important}"]});let t=e;return t})();var z=(t,e)=>e.symbol;function H(t,e){if(t&1&&m(0,"stock-earnings-chart",2),t&2){let r=e.$implicit;p("stock",r)}}var mt=(()=>{let e=class e{constructor(a){this.dataService=a}ngOnInit(){this.stocks=this.dataService.portfolioStocks}};e.\u0275fac=function(n){return new(n||e)(x(A))},e.\u0275cmp=u({type:e,selectors:[["app-analysis"]],standalone:!0,features:[g],decls:6,vars:0,consts:[["mat-align-tabs","center"],["label","Earnings"],[3,"stock"],["label","Analysis B"],["label","Analysis C"]],template:function(n,l){n&1&&(c(0,"mat-tab-group",0)(1,"mat-tab",1),y(2,H,1,1,"stock-earnings-chart",2,z),s(),m(4,"mat-tab",3)(5,"mat-tab",4),s()),n&2&&(o(2),b(l.stocks))},dependencies:[_,D,Y,R,Q,M,P]});let t=e;return t})();export{mt as AnalysisComponent};
