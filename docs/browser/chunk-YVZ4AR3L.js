import{a as C,b as M,c as _,d as T}from"./chunk-GPOULYNH.js";import{a as Q}from"./chunk-CNRITQZJ.js";import{a as S,b,c as I,d as P}from"./chunk-EAQPCGMJ.js";import{g as O}from"./chunk-G5DDTLI2.js";import{a as W,b as k}from"./chunk-6G5JGSN7.js";import{Ra as D,Sa as F,h as x,p as E}from"./chunk-KDKXGZYQ.js";import{$a as c,Bb as i,Cb as e,Db as p,Rb as w,Sb as g,Tb as u,Vb as o,_a as a,_b as h,ja as s,qb as y,sb as t}from"./chunk-AWEJSUHL.js";var X=["marketQuotesWidget"],R=(()=>{let n=class n{constructor(m){this.tradingviewService=m}ngAfterViewInit(){let m=this.tradingviewService.heatMapWidget();this.marketQuotesWidget.nativeElement.append(m)}};n.\u0275fac=function(l){return new(l||n)(c(k))},n.\u0275cmp=s({type:n,selectors:[["tv-heatmap-widget"]],viewQuery:function(l,d){if(l&1&&w(X,5),l&2){let f;g(f=u())&&(d.marketQuotesWidget=f.first)}},standalone:!0,features:[h],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(l,d){l&1&&p(0,"div",null,0)},encapsulation:2});let r=n;return r})();function H(r,n){if(r&1&&p(0,"wallmine-chart",8),r&2){let v=n.$implicit;t("symbol",v)}}function Y(r,n){if(r&1&&p(0,"tv-single-quote-widget",9),r&2){let v=n.$implicit;t("symbol",v)}}var oe=(()=>{let n=class n{constructor(m){this.dataService=m,this.symbols=[]}ngOnInit(){this.symbols=this.dataService.portfolioSymbols}};n.\u0275fac=function(l){return new(l||n)(c(W))},n.\u0275cmp=s({type:n,selectors:[["app-toolbox"]],standalone:!0,features:[h],decls:67,vars:27,consts:[[3,"expanded"],[1,""],["symbol","SCHD",3,"showWatchlist","watchlist"],[1,"title"],[3,"symbol","width"],[1,"wallmine-chart-container"],["class","wallmine-chart",3,"symbol",4,"ngFor","ngForOf"],[3,"symbol",4,"ngFor","ngForOf"],[1,"wallmine-chart",3,"symbol"],[3,"symbol"]],template:function(l,d){l&1&&(i(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),o(4,"candlestick_chart"),e(),i(5,"span"),o(6,"Advanced Chart"),e()()(),p(7,"tv-advanced-chart-widget",2),e(),i(8,"mat-expansion-panel",0)(9,"mat-expansion-panel-header")(10,"mat-panel-title")(11,"mat-icon",1),o(12,"analytics"),e(),i(13,"span"),o(14,"Heatmap"),e()()(),p(15,"tv-heatmap-widget"),e(),i(16,"mat-expansion-panel",0)(17,"mat-expansion-panel-header")(18,"mat-panel-title")(19,"mat-icon",1),o(20,"candlestick_chart"),e(),i(21,"span"),o(22,"Market Charts"),e()()(),i(23,"div",3)(24,"mat-icon"),o(25,"stacked_line_chart"),e(),i(26,"span"),o(27,"Indices"),e()(),p(28,"wallmine-chart",4)(29,"wallmine-chart",4)(30,"wallmine-chart",4)(31,"mat-divider"),i(32,"div",3)(33,"mat-icon"),o(34,"currency_bitcoin"),e(),i(35,"span"),o(36,"Cryptos"),e()(),p(37,"wallmine-chart",4)(38,"wallmine-chart",4)(39,"wallmine-chart",4)(40,"mat-divider"),i(41,"div",3)(42,"mat-icon"),o(43,"currency_exchange"),e(),i(44,"span"),o(45,"Forex"),e()(),p(46,"wallmine-chart",4)(47,"wallmine-chart",4)(48,"wallmine-chart",4),e(),i(49,"mat-expansion-panel",0)(50,"mat-expansion-panel-header")(51,"mat-panel-title")(52,"mat-icon",1),o(53,"candlestick_chart"),e(),i(54,"span"),o(55,"Portfolio Charts"),e()()(),i(56,"div",5),y(57,H,1,1,"wallmine-chart",6),e()(),i(58,"mat-expansion-panel",0)(59,"mat-expansion-panel-header")(60,"mat-panel-title")(61,"mat-icon",1),o(62,"widgets"),e(),i(63,"span"),o(64,"Portfolio Widgets"),e()()(),i(65,"div",5),y(66,Y,1,1,"tv-single-quote-widget",7),e()()),l&2&&(t("expanded",!1),a(7),t("showWatchlist",!0)("watchlist",d.symbols),a(),t("expanded",!1),a(8),t("expanded",!1),a(12),t("symbol","INDEX:GSPC")("width","33.33%"),a(),t("symbol","INDEX:DJI")("width","33.33%"),a(),t("symbol","INDEX:IXIC")("width","33.33%"),a(7),t("symbol","CRYPTO:BTC")("width","33.33%"),a(),t("symbol","CRYPTO:ETH")("width","33.33%"),a(),t("symbol","CRYPTO:DOGE")("width","33.33%"),a(7),t("symbol","FOREX:USDCNY")("width","33.33%"),a(),t("symbol","FOREX:USDJPY")("width","33.33%"),a(),t("symbol","FOREX:USDEUR")("width","33.33%"),a(),t("expanded",!1),a(8),t("ngForOf",d.symbols),a(),t("expanded",!1),a(8),t("ngForOf",d.symbols))},dependencies:[E,x,b,S,T,C,M,_,F,D,O,P,R,Q,I],styles:[".wallmine-chart-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.wallmine-chart[_ngcontent-%COMP%]{width:33.33%}"]});let r=n;return r})();export{oe as a};
