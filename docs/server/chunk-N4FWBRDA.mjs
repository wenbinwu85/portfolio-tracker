import './polyfills.server.mjs';
import{a as N}from"./chunk-A2KJDQD6.mjs";import{a as E,b as W,c as v,d as C}from"./chunk-4NVO3U6Q.mjs";import"./chunk-GSZ4UUK4.mjs";import{N as M,O as P,ba as D}from"./chunk-ZOO27FTS.mjs";import{m as x}from"./chunk-M4BOR6LG.mjs";import{$b as y,C as h,Cb as r,Db as o,Eb as u,Nb as g,Wb as p,ab as m,bb as f,ja as d,q as l,rb as S,tb as s}from"./chunk-3SQ4IWRA.mjs";import"./chunk-VVCT4QZE.mjs";function B(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Magnificiant 7+"),o()()(),u(7,"tv-market-quotes-widget",2),o()),i&2){let c=g();s("expanded",!1),m(7),s("stockNames",c.magnificent7PlusWatchlist)("height",400)}}function A(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Potential Buys"),o()()(),u(7,"tv-market-quotes-widget",2),o()),i&2){let c=g();s("expanded",!1),m(7),s("stockNames",c.potentialBuysWatchlist)("height",600)}}var G=(()=>{let n=class n{constructor(e){this.dataService=e,this.magnificent7Symbols=["AAPL","MSFT","META","GOOG","AMZN","NVDA","NFLX","TSLA","SMCI"],this.magnificent7PlusWatchlist=[],this.potentialBuysSymbols=["PG","AMD","AMT","DGRO","DGRW","DIVO","MCHP","OBDC","BAC","NEE","CVS","WFC","NTES","MCD","LOW"],this.potentialBuysWatchlist=[]}ngOnInit(){this.magnificent7Symbols.forEach(e=>{this.dataService.getStockData(e,!0).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!1).pipe(l(a=>a[e]))))).subscribe(t=>{this.magnificent7PlusWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.potentialBuysSymbols.forEach(e=>{this.dataService.getStockData(e,!0).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!1).pipe(l(a=>a[e]))))).subscribe(t=>{this.potentialBuysWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.magnificent7PlusWatchlist.sort((e,t)=>e.changePercent-t.changePercent),this.potentialBuysWatchlist.sort((e,t)=>e.changePercent-t.changePercent)}};n.\u0275fac=function(t){return new(t||n)(f(D))},n.\u0275cmp=d({type:n,selectors:[["app-watchlists"]],standalone:!0,features:[y],decls:2,vars:2,consts:[[3,"expanded",4,"ngIf"],[3,"expanded"],[3,"stockNames","height"]],template:function(t,a){t&1&&S(0,B,8,3,"mat-expansion-panel",0)(1,A,8,3,"mat-expansion-panel",0),t&2&&(s("ngIf",a.magnificent7PlusWatchlist&&a.magnificent7PlusWatchlist.length===a.magnificent7Symbols.length),m(),s("ngIf",a.potentialBuysWatchlist&&a.potentialBuysWatchlist.length===a.potentialBuysSymbols.length))},dependencies:[x,C,E,W,v,P,M,N]});let i=n;return i})();export{G as WatchlistsComponent};
