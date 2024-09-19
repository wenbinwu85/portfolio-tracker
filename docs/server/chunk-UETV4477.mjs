import './polyfills.server.mjs';
import{a as w,c as P}from"./chunk-EVGBBNQ4.mjs";import{v as E}from"./chunk-2N46HQF5.mjs";import{T as g}from"./chunk-L37IW5RY.mjs";import{$a as l,La as T,T as h,Va as y,Wa as _,Ya as p,Z as d,Za as u,_ as m,_a as r,da as b,eb as f,hb as k,jb as a,ub as C,vb as v,wa as s,xa as x,zb as S}from"./chunk-UPMD732B.mjs";function B(t,o){if(t&1){let e=f();r(0,"button",2),k("click",function(){let i=d(e).$implicit,c=a(2);return m(c.emitSelectedTicker(i.symbol))}),r(1,"div"),C(2),l()()}if(t&2){let e=o.$implicit;s(2),v(e.symbol)}}function F(t,o){if(t&1&&(r(0,"div",0),p(1,B,3,1,"button",1,_),l()),t&2){let e=a();s(),u(e.dividendPayers)}}function I(t,o){if(t&1){let e=f();r(0,"button",2),k("click",function(){let i=d(e).$implicit,c=a(2);return m(c.emitSelectedTicker(i.symbol))}),r(1,"div"),C(2),l()()}if(t&2){let e=o.$implicit;s(2),v(e.symbol)}}function O(t,o){if(t&1){let e=f();r(0,"button",2),k("click",function(){let i=d(e).$implicit,c=a(3);return m(c.emitSelectedTicker(i.symbol))}),r(1,"div"),C(2),l()()}if(t&2){let e=o.$implicit;s(2),v(e.symbol)}}function V(t,o){if(t&1&&p(0,O,3,1,"button",1,_),t&2){let e=a(2);u(e.sortedEtfs)}}function M(t,o){if(t&1&&(r(0,"div",0),p(1,I,3,1,"button",1,_),T(3,V,2,0),l()),t&2){let e=a();s(),u(e.sortedStocks),s(2),y(e.showETF?3:-1)}}var G=(()=>{let o=class o{constructor(n,i){this.dataService=n,this.helperService=i,this.showETF=!0,this.dividendPayersOnly=!1,this.selectedTicker=new b,this.sortedStocks=[],this.sortedEtfs=[],this.dividendPayers=[]}ngOnInit(){this.sortedStocks=this.dataService.portfolioStocks.sort((n,i)=>n["52WeekChange"].raw-i["52WeekChange"].raw),this.sortedEtfs=this.dataService.portfolioEtfs.sort((n,i)=>n.ytdReturn.raw-i.ytdReturn.raw),this.dividendPayers=this.dataService.portfolioDividendPayers}emitSelectedTicker(n){this.selectedTicker.emit(n)}};o.\u0275fac=function(i){return new(i||o)(x(g),x(E))},o.\u0275cmp=h({type:o,selectors:[["portfolio-ticker-buttons"]],inputs:{showETF:"showETF",dividendPayersOnly:"dividendPayersOnly"},outputs:{selectedTicker:"selectedTicker"},standalone:!0,features:[S],decls:2,vars:1,consts:[[1,"logos-container"],["mat-button","",1,"ticker-button"],["mat-button","",1,"ticker-button",3,"click"]],template:function(i,c){i&1&&T(0,F,3,0,"div",0)(1,M,4,1,"div",0),i&2&&y(c.dividendPayersOnly?0:1)},dependencies:[P,w],styles:[".logos-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 0rem 1rem}.ticker-button[_ngcontent-%COMP%]{align-items:center;height:2rem;border:1px solid ghostwhite}.ticker-button[_ngcontent-%COMP%]:hover{border:1px solid slategrey;border-left:.3rem solid slategrey}"]});let t=o;return t})();export{G as a};
