import{d as z}from"./chunk-SKBCGCWV.js";import{c as N,d as O,e as V,f as $}from"./chunk-2W52P2HQ.js";import{h as G}from"./chunk-H4Z2VHWE.js";import{j as T,k as m,l as E,o as p,p as F,q as w}from"./chunk-EGBF34Q6.js";import{Ab as l,Bb as L,Fb as y,Ib as I,Kb as c,Ld as R,Md as j,Rc as S,Ub as D,Vb as v,Wa as r,Wb as _,Xa as u,_b as P,ba as d,fa as k,na as b,nb as g,oa as h,pb as f,ub as x,xb as M,yb as C,zb as s}from"./chunk-T5KIEBCQ.js";var q=(e,t)=>t.route;function B(e,t){if(e&1){let i=y();s(0,"a",4),I("click",function(){let o=b(i).$implicit,a=c(2);return h(a.activeLink=o)}),s(1,"mat-icon"),v(2),l(),s(3,"span"),v(4),l()()}if(e&2){let i=t.$implicit,n=c(2);f("active",n.activeLink==i)("routerLink",i.route),r(2),_(i.icon),r(2),_(i.label)}}function U(e,t){if(e&1&&(s(0,"section",1)(1,"nav",2),M(2,B,5,4,"a",3,q),l(),L(4,"mat-tab-nav-panel",null,0)(6,"mat-divider")(7,"router-outlet"),l()),e&2){let i=D(5),n=c();r(),f("tabPanel",i),r(),C(n.navLinks)}}var at=(()=>{let t=class t{constructor(n,o){this.dataService=n,this.router=o,this.navLinks=[{label:"Summary",route:"summary",icon:"summarize"},{label:"Holdings",route:"holdings",icon:"list_alt"},{label:"Price Insights",route:"price-insights",icon:"price_change"}],n.getItem("portfolioHoldings").dividendIncome>0&&this.navLinks.push({label:"Dividend Tracker",route:"dividend",icon:"paid"}),this.navLinks.push({label:"Financials",route:"financials",icon:"query_stats"}),this.activeLink=this.navLinks[0]}ngOnInit(){this.router.navigate(["portfolio",this.navLinks[0].route])}};t.\u0275fac=function(o){return new(o||t)(u(p),u(m))},t.\u0275cmp=k({type:t,selectors:[["portfolio-details"]],standalone:!0,features:[P],decls:1,vars:1,consts:[["tabPanel",""],[1,"add-margin"],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","end",3,"tabPanel"],["mat-tab-link","",3,"active","routerLink"],["mat-tab-link","",3,"click","active","routerLink"]],template:function(o,a){o&1&&g(0,U,8,1,"section",1),o&2&&x(a.navLinks?0:-1)},dependencies:[S,j,R,z,w,F,$,N,V,O,G,E,T],styles:["mat-icon[_ngcontent-%COMP%]{font-size:1.5rem}"]});let e=t;return e})();var mt=(e,t)=>{let i=d(p),n=d(m),o=i.getItem("portfolioSymbols"),a=!0;return o?(o.forEach(H=>{i.getItem(H)||(a=!1)}),a):(n.navigateByUrl("/"),!1)};export{mt as a,at as b};
