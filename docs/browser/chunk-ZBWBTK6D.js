import{a as D}from"./chunk-CMSXBW25.js";import{a as M,b as P,c as E,d as W}from"./chunk-Q7LQDA4O.js";import"./chunk-BFQGLIJV.js";import"./chunk-5NH4QBIL.js";import"./chunk-C52VLURE.js";import{a as N}from"./chunk-ZLL66DZL.js";import{i as x,oa as v,pa as C}from"./chunk-RNTJAAAV.js";import{$a as m,Bb as r,C as h,Cb as o,Db as d,Mb as u,Vb as p,_b as y,ab as f,ba as g,q as l,qb as S,sb as s}from"./chunk-FNNUKVD3.js";import"./chunk-MON7YFGF.js";function B(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Magnificiant 7+"),o()()(),d(7,"tv-market-quotes-widget",2),o()),i&2){let c=u();s("expanded",!1),m(7),s("stockNames",c.magnificent7PlusWatchlist)("height",400)}}function A(i,n){if(i&1&&(r(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),p(4,"list"),o(),r(5,"span"),p(6,"Potential Buys"),o()()(),d(7,"tv-market-quotes-widget",2),o()),i&2){let c=u();s("expanded",!1),m(7),s("stockNames",c.potentialBuysWatchlist)("height",600)}}var G=(()=>{let n=class n{constructor(e){this.dataService=e,this.magnificent7Symbols=["AAPL","MSFT","META","GOOG","AMZN","NVDA","NFLX","TSLA","SMCI"],this.magnificent7PlusWatchlist=[],this.potentialBuysSymbols=["PG","AMD","AMT","DGRO","DGRW","DIVO","MCHP","OBDC","BAC","NEE","CVS","WFC","NTES","MCD","LOW"],this.potentialBuysWatchlist=[]}ngOnInit(){this.magnificent7Symbols.forEach(e=>{this.dataService.loadStockDataFromDataFolder(e).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!0).pipe(l(a=>a[e]))))).subscribe(t=>{this.magnificent7PlusWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.potentialBuysSymbols.forEach(e=>{this.dataService.loadStockDataFromDataFolder(e).pipe(l(t=>{if(t.status===500)throw`Api Error: ${e} - ${t.status} - ${t.message}`;return t}),h(t=>(console.log(t),this.dataService.getStockData(e,!0).pipe(l(a=>a[e]))))).subscribe(t=>{this.potentialBuysWatchlist.push({name:t.symbol,displayName:`${t.longName} - ${t.symbol}`,changePercent:t.regularMarketChangePercent})})}),this.magnificent7PlusWatchlist.sort((e,t)=>e.changePercent-t.changePercent),this.potentialBuysWatchlist.sort((e,t)=>e.changePercent-t.changePercent)}};n.\u0275fac=function(t){return new(t||n)(f(N))},n.\u0275cmp=g({type:n,selectors:[["app-watchlists"]],standalone:!0,features:[y],decls:2,vars:2,consts:[[3,"expanded",4,"ngIf"],[3,"expanded"],[3,"stockNames","height"]],template:function(t,a){t&1&&S(0,B,8,3,"mat-expansion-panel",0)(1,A,8,3,"mat-expansion-panel",0),t&2&&(s("ngIf",a.magnificent7PlusWatchlist&&a.magnificent7PlusWatchlist.length===a.magnificent7Symbols.length),m(),s("ngIf",a.potentialBuysWatchlist&&a.potentialBuysWatchlist.length===a.potentialBuysSymbols.length))},dependencies:[x,W,M,P,E,C,v,D]});let i=n;return i})();export{G as WatchlistsComponent};
