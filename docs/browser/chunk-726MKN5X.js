import{a as T,b as W,c as _,d as Q}from"./chunk-KKJXG2TB.js";import{a as H}from"./chunk-EV5GC3JJ.js";import{a as F}from"./chunk-UTKXGQIS.js";import{a as b,b as P}from"./chunk-DVG4WEZ5.js";import{b as D}from"./chunk-KIBVZIMG.js";import{I as k,J as I}from"./chunk-2EDEUE7O.js";import{g as M}from"./chunk-ARUT3GIC.js";import{g as E}from"./chunk-7J2R5DGE.js";import{Ab as p,Mb as g,Nb as w,Ob as C,Oc as S,Sb as r,Va as l,Wa as c,Xb as f,fa as d,ob as m,ub as u,wb as h,xb as y,yb as a,zb as i}from"./chunk-ZQIE4LUS.js";var O=["marketQuotesWidget"],q=(()=>{let e=class e{constructor(o){this.tradingviewService=o}ngAfterViewInit(){let o=this.tradingviewService.heatMapWidget();this.marketQuotesWidget.nativeElement.append(o)}};e.\u0275fac=function(n){return new(n||e)(c(P))},e.\u0275cmp=d({type:e,selectors:[["tv-heatmap-widget"]],viewQuery:function(n,s){if(n&1&&g(O,5),n&2){let x;w(x=C())&&(s.marketQuotesWidget=x.first)}},standalone:!0,features:[f],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(n,s){n&1&&p(0,"div",null,0)},encapsulation:2});let t=e;return t})();function j(t,e){if(t&1&&p(0,"wallmine-chart",4),t&2){let v=e.$implicit;m("symbol",v)}}function B(t,e){if(t&1&&p(0,"tv-single-quote-widget",5),t&2){let v=e.$implicit;m("symbol",v)}}var ne=(()=>{let e=class e{constructor(o){this.dataService=o,this.symbols=[]}ngOnInit(){this.symbols=this.dataService.portfolioSymbols}};e.\u0275fac=function(n){return new(n||e)(c(M))},e.\u0275cmp=d({type:e,selectors:[["app-toolbox"]],standalone:!0,features:[f],decls:36,vars:6,consts:[[3,"expanded"],[1,""],["symbol","SCHD",3,"showWatchlist","watchlist"],[1,"wallmine-chart-container"],[1,"wallmine-chart",3,"symbol"],[3,"symbol"]],template:function(n,s){n&1&&(a(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),r(4,"candlestick_chart"),i(),a(5,"span"),r(6,"Advanced Chart"),i()()(),p(7,"tv-advanced-chart-widget",2),i(),a(8,"mat-expansion-panel",0)(9,"mat-expansion-panel-header")(10,"mat-panel-title")(11,"mat-icon",1),r(12,"analytics"),i(),a(13,"span"),r(14,"Heatmap"),i()()(),p(15,"tv-heatmap-widget"),i(),a(16,"mat-expansion-panel",0)(17,"mat-expansion-panel-header")(18,"mat-panel-title")(19,"mat-icon",1),r(20,"candlestick_chart"),i(),a(21,"span"),r(22,"Portfolio Charts"),i()()(),a(23,"div",3),h(24,j,1,1,"wallmine-chart",4,u),i()(),a(26,"mat-expansion-panel",0)(27,"mat-expansion-panel-header")(28,"mat-panel-title")(29,"mat-icon",1),r(30,"widgets"),i(),a(31,"span"),r(32,"Portfolio Widgets"),i()()(),a(33,"div",3),h(34,B,1,1,"tv-single-quote-widget",5,u),i()()),n&2&&(m("expanded",!1),l(7),m("showWatchlist",!0)("watchlist",s.symbols),l(),m("expanded",!1),l(8),m("expanded",!1),l(8),y(s.symbols),l(2),m("expanded",!1),l(8),y(s.symbols))},dependencies:[S,E,Q,T,W,_,I,k,D,F,q,H,b],styles:[".wallmine-chart-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.wallmine-chart[_ngcontent-%COMP%]{width:33.33%}"]});let t=e;return t})();export{ne as a};
