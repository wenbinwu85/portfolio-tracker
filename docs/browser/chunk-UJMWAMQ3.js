import{a as y,b as S,c as w,d as M}from"./chunk-Q7LQDA4O.js";import{a as D}from"./chunk-OZOT2HEY.js";import{b as Q}from"./chunk-XF7BECU3.js";import{a as T}from"./chunk-5NH4QBIL.js";import{a as W}from"./chunk-ZLL66DZL.js";import{oa as E,p as g,pa as C}from"./chunk-RNTJAAAV.js";import{$a as p,Bb as n,Cb as i,Db as s,Rb as v,Sb as h,Tb as x,Vb as o,_b as f,ab as c,ba as d,sb as m}from"./chunk-FNNUKVD3.js";var k=["marketQuotesWidget"],b=(()=>{let e=class e{constructor(a){this.tradingviewService=a}ngAfterViewInit(){let a=this.tradingviewService.heatMapWidget();this.marketQuotesWidget.nativeElement.append(a)}};e.\u0275fac=function(t){return new(t||e)(c(T))},e.\u0275cmp=d({type:e,selectors:[["tv-heatmap-widget"]],viewQuery:function(t,l){if(t&1&&v(k,5),t&2){let u;h(u=x())&&(l.marketQuotesWidget=u.first)}},standalone:!0,features:[f],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(t,l){t&1&&s(0,"div",null,0)},encapsulation:2});let r=e;return r})();var B=(()=>{let e=class e{constructor(a){this.dataService=a,this.symbols=[]}ngOnInit(){this.symbols=this.dataService.portfolioSymbols}};e.\u0275fac=function(t){return new(t||e)(c(W))},e.\u0275cmp=d({type:e,selectors:[["app-toolbox"]],standalone:!0,features:[f],decls:30,vars:6,consts:[[3,"expanded"],[1,""],["symbol","SCHD",3,"showWatchlist","watchlist"]],template:function(t,l){t&1&&(n(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),o(4,"candlestick_chart"),i(),n(5,"span"),o(6,"Advanced Chart"),i()()(),s(7,"tv-advanced-chart-widget",2),i(),n(8,"mat-expansion-panel",0)(9,"mat-expansion-panel-header")(10,"mat-panel-title")(11,"mat-icon",1),o(12,"analytics"),i(),n(13,"span"),o(14,"Heatmap"),i()()(),s(15,"tv-heatmap-widget"),i(),n(16,"mat-expansion-panel",0)(17,"mat-expansion-panel-header")(18,"mat-panel-title")(19,"mat-icon",1),o(20,"auto_graph"),i(),n(21,"span"),o(22,"Tool C"),i()()()(),n(23,"mat-expansion-panel",0)(24,"mat-expansion-panel-header")(25,"mat-panel-title")(26,"mat-icon",1),o(27,"auto_graph"),i(),n(28,"span"),o(29,"Tool D"),i()()()()),t&2&&(m("expanded",!1),p(7),m("showWatchlist",!0)("watchlist",l.symbols),p(),m("expanded",!1),p(8),m("expanded",!1),p(7),m("expanded",!1))},dependencies:[g,M,y,S,w,C,E,Q,D,b]});let r=e;return r})();export{B as a};
