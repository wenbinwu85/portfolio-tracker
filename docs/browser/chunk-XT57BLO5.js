import{a as w,b as C,c as S,d as E}from"./chunk-COK75LD5.js";import{a as b}from"./chunk-P5JT2JSY.js";import{a as D}from"./chunk-BR6OUKYB.js";import{b as T}from"./chunk-G3XNFLY2.js";import{C as W,D as Q}from"./chunk-OWQZJETK.js";import{g as x}from"./chunk-5F4UKWR5.js";import{b as M}from"./chunk-TMZJZPUE.js";import{Ab as a,Bb as r,Pb as v,Qb as h,Rb as g,Rc as y,Vb as m,Wa as f,Xa as d,_b as c,fa as p,pb as l,zb as o}from"./chunk-CPZLQSFH.js";var H=["marketQuotesWidget"],I=(()=>{let e=class e{constructor(i){this.tradingviewService=i}ngAfterViewInit(){let i=this.tradingviewService.heatMapWidget();this.marketQuotesWidget.nativeElement.append(i)}};e.\u0275fac=function(t){return new(t||e)(d(D))},e.\u0275cmp=p({type:e,selectors:[["tv-heatmap-widget"]],viewQuery:function(t,s){if(t&1&&v(H,5),t&2){let u;h(u=g())&&(s.marketQuotesWidget=u.first)}},standalone:!0,features:[c],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(t,s){t&1&&r(0,"div",null,0)},encapsulation:2});let n=e;return n})();var N=(()=>{let e=class e{constructor(i){this.dataService=i,this.symbols=[]}ngOnInit(){this.symbols=this.dataService.portfolioSymbols}};e.\u0275fac=function(t){return new(t||e)(d(x))},e.\u0275cmp=p({type:e,selectors:[["app-toolbox"]],standalone:!0,features:[c],decls:16,vars:4,consts:[[3,"expanded"],[1,""],["symbol","SCHD",3,"showWatchlist","watchlist"]],template:function(t,s){t&1&&(o(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),m(4,"candlestick_chart"),a(),o(5,"span"),m(6,"Advanced Chart"),a()()(),r(7,"tv-advanced-chart-widget",2),a(),o(8,"mat-expansion-panel",0)(9,"mat-expansion-panel-header")(10,"mat-panel-title")(11,"mat-icon",1),m(12,"analytics"),a(),o(13,"span"),m(14,"Heatmap"),a()()(),r(15,"tv-heatmap-widget"),a()),t&2&&(l("expanded",!0),f(7),l("showWatchlist",!0)("watchlist",s.symbols),f(),l("expanded",!1))},dependencies:[y,M,E,w,C,S,Q,W,T,b,I]});let n=e;return n})();export{N as a};
