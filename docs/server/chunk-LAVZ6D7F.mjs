import './polyfills.server.mjs';
import{a as b}from"./chunk-N4NSPMCQ.mjs";import{a as I}from"./chunk-MS7TOZLM.mjs";import{b as Q}from"./chunk-UDTBQ5PP.mjs";import{a as C,b as S,c as E,d as W}from"./chunk-2WRA5WHS.mjs";import{a as x,b as M,c as T}from"./chunk-KCXLRTQF.mjs";import{R as w}from"./chunk-NST6Y5I7.mjs";import{Cb as o,Db as a,Eb as r,Sb as v,Tb as h,Ub as g,Ya as f,Yb as m,Za as d,bc as c,cd as y,fa as p,sb as l}from"./chunk-QSEKS3E2.mjs";var A=["marketQuotesWidget"],D=(()=>{let e=class e{constructor(i){this.tradingviewService=i}ngAfterViewInit(){let i=this.tradingviewService.heatMapWidget();this.marketQuotesWidget.nativeElement.append(i)}};e.\u0275fac=function(t){return new(t||e)(d(I))},e.\u0275cmp=p({type:e,selectors:[["tv-heatmap-widget"]],viewQuery:function(t,s){if(t&1&&v(A,5),t&2){let u;h(u=g())&&(s.marketQuotesWidget=u.first)}},standalone:!0,features:[c],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(t,s){t&1&&r(0,"div",null,0)},encapsulation:2});let n=e;return n})();var K=(()=>{let e=class e{constructor(i){this.dataService=i,this.symbols=[]}ngOnInit(){this.symbols=this.dataService.portfolioSymbols}};e.\u0275fac=function(t){return new(t||e)(d(T))},e.\u0275cmp=p({type:e,selectors:[["app-toolbox"]],standalone:!0,features:[c],decls:16,vars:4,consts:[[3,"expanded"],[1,""],["symbol","VANTAGE:VIX",3,"showWatchlist","watchlist"]],template:function(t,s){t&1&&(o(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),m(4,"candlestick_chart"),a(),o(5,"span"),m(6,"Advanced Chart"),a()()(),r(7,"tv-advanced-chart-widget",2),a(),o(8,"mat-expansion-panel",0)(9,"mat-expansion-panel-header")(10,"mat-panel-title")(11,"mat-icon",1),m(12,"analytics"),a(),o(13,"span"),m(14,"Heatmap"),a()()(),r(15,"tv-heatmap-widget"),a()),t&2&&(l("expanded",!0),f(7),l("showWatchlist",!0)("watchlist",s.symbols),f(),l("expanded",!1))},dependencies:[y,w,W,C,S,E,M,x,Q,b,D]});let n=e;return n})();export{K as a};
