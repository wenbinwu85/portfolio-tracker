import{a as D,b as T,c as I,d as S}from"./chunk-Q7LQDA4O.js";import{a as R,b as V,c as $,d as j}from"./chunk-ISRS2U3K.js";import{g as H}from"./chunk-4WAIG2OO.js";import{a as L,b as E,c as F}from"./chunk-IBV4HRF6.js";import{b as N}from"./chunk-7XK5PBSE.js";import{h,oa as O,p as y,pa as w}from"./chunk-RNTJAAAV.js";import{$a as m,Bb as l,Cb as o,Db as k,Hb as M,Lb as g,Mb as f,Ub as P,Vb as s,Xb as C,_b as _,ab as b,ba as d,fa as u,ga as v,qb as x,sb as r}from"./chunk-FNNUKVD3.js";function z(e,t){if(e&1){let n=M();l(0,"a",5),g("click",function(){let p=u(n).$implicit,c=f();return v(c.activeLink=p)}),s(1),o()}if(e&2){let n=t.$implicit,i=f();r("active",i.activeLink==n)("routerLink",n.route),m(),C(" ",n.label," ")}}var ut=(()=>{let t=class t{constructor(i){this.router=i,this.navLinks=[{label:"Summary",route:"summary"},{label:"Holdings",route:"holdings"},{label:"Price Insights",route:"price-insights"},{label:"Dividend",route:"dividend"},{label:"Financials",route:"financials"},{label:"Analysis",route:"analysis"},{label:"Events",route:"events"}],this.activeLink=this.navLinks[0]}ngOnInit(){this.router.navigate(["portfolio",this.navLinks[0].route])}};t.\u0275fac=function(a){return new(a||t)(b(E))},t.\u0275cmp=d({type:t,selectors:[["portfolio-details"]],standalone:!0,features:[_],decls:12,vars:3,consts:[[3,"expanded"],[1,""],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","end",3,"tabPanel"],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["tabPanel",""],["mat-tab-link","",3,"active","routerLink","click"]],template:function(a,p){if(a&1&&(l(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),s(4,"table_rows"),o(),l(5,"span"),s(6," Portfolio Details"),o()()(),l(7,"nav",2),x(8,z,2,3,"a",3),o(),k(9,"mat-tab-nav-panel",null,4)(11,"router-outlet"),o()),a&2){let c=P(10);r("expanded",!0),m(7),r("tabPanel",c),m(),r("ngForOf",p.navLinks)}},dependencies:[y,h,N,S,D,T,I,w,O,j,R,$,V,H,F,L],styles:["mat-icon[_ngcontent-%COMP%]{font-size:1.25rem}"]});let e=t;return e})();export{ut as a};
