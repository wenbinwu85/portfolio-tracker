import './polyfills.server.mjs';
import{a as l}from"./chunk-4GXEFY3W.mjs";import{Fb as m,Tb as c,Ub as u,Vb as d,ac as h,ba as n,cb as a}from"./chunk-D5BORNAZ.mjs";var p=["marketQuotesWidget"],v=(()=>{let e=class e{constructor(t){this.tradingviewService=t}ngOnInit(){this.params={width:"100%",height:this.height,symbolsGroups:[{name:"Portfolio",symbols:this.stockNames}],showSymbolLogo:!0,isTransparent:!1,colorTheme:"light",locale:"en"},this.params=JSON.stringify(this.params)}ngAfterViewInit(){let t=this.tradingviewService.marketQuotesWidget(this.params);this.marketQuotesWidget.nativeElement.append(t)}};e.\u0275fac=function(i){return new(i||e)(a(l))},e.\u0275cmp=n({type:e,selectors:[["tv-market-quotes-widget"]],viewQuery:function(i,o){if(i&1&&c(p,5),i&2){let r;u(r=d())&&(o.marketQuotesWidget=r.first)}},inputs:{stockNames:"stockNames",height:"height"},standalone:!0,features:[h],decls:2,vars:0,consts:[["marketQuotesWidget",""]],template:function(i,o){i&1&&m(0,"div",null,0)},encapsulation:2});let s=e;return s})();export{v as a};
