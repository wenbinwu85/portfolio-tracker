import './polyfills.server.mjs';
import{a as D}from"./chunk-WS2D4TJG.mjs";import{a as b}from"./chunk-SR2LGVN6.mjs";import{b as T}from"./chunk-N7LKGSHH.mjs";import{a as C,b as S,c as E,d as W}from"./chunk-LXPK26GA.mjs";import{a as Q}from"./chunk-NBWMD5I7.mjs";import{a as x,b as M}from"./chunk-KX35ANUQ.mjs";import{b as w}from"./chunk-SNU2TC3P.mjs";import{Cb as o,Db as a,Eb as r,Sb as v,Tb as h,Ub as g,Ya as f,Yb as m,Za as d,bc as c,cd as y,fa as p,sb as l}from"./chunk-6LZGNP3H.mjs";var F=["marketQuotesWidget"],I=(()=>{let e=class e{constructor(i){this.tradingviewService=i}ngAfterViewInit(){let i=this.tradingviewService.heatMapWidget();this.marketQuotesWidget.nativeElement.append(i)}};e.\u0275fac=function(t){return new(t||e)(d(b))},e.\u0275cmp=p({type:e,selectors:[["tv-heatmap-widget"]],viewQuery:function(t,s){if(t&1&&v(F,5),t&2){let u;h(u=g())&&(s.marketQuotesWidget=u.first)}},standalone:!0,features:[c],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(t,s){t&1&&r(0,"div",null,0)},encapsulation:2});let n=e;return n})();var N=(()=>{let e=class e{constructor(i){this.dataService=i,this.symbols=[]}ngOnInit(){this.symbols=this.dataService.portfolioSymbols}};e.\u0275fac=function(t){return new(t||e)(d(Q))},e.\u0275cmp=p({type:e,selectors:[["app-toolbox"]],standalone:!0,features:[c],decls:16,vars:4,consts:[[3,"expanded"],[1,""],["symbol","VOO",3,"showWatchlist","watchlist"]],template:function(t,s){t&1&&(o(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),m(4,"candlestick_chart"),a(),o(5,"span"),m(6,"Advanced Chart"),a()()(),r(7,"tv-advanced-chart-widget",2),a(),o(8,"mat-expansion-panel",0)(9,"mat-expansion-panel-header")(10,"mat-panel-title")(11,"mat-icon",1),m(12,"analytics"),a(),o(13,"span"),m(14,"Heatmap"),a()()(),r(15,"tv-heatmap-widget"),a()),t&2&&(l("expanded",!0),f(7),l("showWatchlist",!0)("watchlist",s.symbols),f(),l("expanded",!1))},dependencies:[y,w,W,C,S,E,M,x,T,D,I]});let n=e;return n})();export{N as a};
