import{d as R}from"./chunk-HYCLT52H.js";import{a as O,b as V,c as $,d as z}from"./chunk-WUS225MV.js";import{r as N}from"./chunk-5IE56ZJH.js";import{I as j,J as H}from"./chunk-GMCOC7RB.js";import{b as T,c,d as E,g as p}from"./chunk-HNWMA23S.js";import{f as F,g as w}from"./chunk-HC3HT2CS.js";import{Ab as P,Eb as y,Gb as L,Hb as m,Oc as S,Rb as I,Sb as v,Tb as _,Wa as r,Xa as d,Xb as D,ba as f,fa as b,mb as g,na as k,oa as h,ob as u,tb as C,wb as x,xb as M,yb as l,zb as s}from"./chunk-2TNWCKWZ.js";var q=(e,t)=>t.route;function A(e,t){if(e&1){let i=y();l(0,"a",4),L("click",function(){let n=k(i).$implicit,a=m(2);return h(a.activeLink=n)}),l(1,"mat-icon"),v(2),s(),l(3,"span"),v(4),s()()}if(e&2){let i=t.$implicit,o=m(2);u("active",o.activeLink==i)("routerLink",i.route),r(2),_(i.icon),r(2),_(i.label)}}function B(e,t){if(e&1&&(l(0,"section",1)(1,"nav",2),x(2,A,5,4,"a",3,q),s(),P(4,"mat-tab-nav-panel",null,0)(6,"mat-divider")(7,"router-outlet"),s()),e&2){let i=I(5),o=m();r(),u("tabPanel",i),r(),M(o.navLinks)}}var vt=(()=>{let t=class t{constructor(o,n){this.dataService=o,this.router=n,this.navLinks=[{label:"Summary",route:"summary",icon:"summarize"},{label:"Holdings",route:"holdings",icon:"list_alt"},{label:"Price Insights",route:"price-insights",icon:"price_change"}],o.getItem("portfolioHoldings").dividendIncome>0&&this.navLinks.push({label:"Dividend Tracker",route:"dividend",icon:"paid"}),this.navLinks.push({label:"Financial Stats",route:"financials",icon:"query_stats"},{label:"Analysis",route:"analysis",icon:"calculate"}),this.activeLink=this.navLinks[0]}ngOnInit(){this.router.navigate(["portfolio",this.navLinks[0].route])}};t.\u0275fac=function(n){return new(n||t)(d(p),d(c))},t.\u0275cmp=b({type:t,selectors:[["portfolio-details"]],standalone:!0,features:[D],decls:1,vars:1,consts:[["tabPanel",""],[1,"add-margin"],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","start",3,"tabPanel"],["mat-tab-link","",3,"active","routerLink"],["mat-tab-link","",3,"click","active","routerLink"]],template:function(n,a){n&1&&g(0,B,8,1,"section",1),n&2&&C(a.navLinks?0:-1)},dependencies:[S,w,F,R,H,j,z,O,$,V,N,E,T],styles:["mat-icon[_ngcontent-%COMP%]{font-size:1.5rem}"]});let e=t;return e})();var gt=(e,t)=>{let i=f(p),o=f(c),n=i.getItem("portfolioSymbols"),a=!0;return n?(n.forEach(G=>{i.getItem(G)||(a=!1)}),a):(o.navigateByUrl("/"),!1)};export{gt as a,vt as b};
