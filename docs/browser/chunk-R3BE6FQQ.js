import{a as f,b as e}from"./chunk-KM7IRPKB.js";import"./chunk-63H6MYPZ.js";import"./chunk-OSUIEARW.js";import"./chunk-KGCF5KC5.js";import"./chunk-QVVGOBX4.js";import"./chunk-RYNL6BR6.js";import"./chunk-IW6ZVJNN.js";import"./chunk-AESYL7IM.js";import{l as s,o as p,p as c}from"./chunk-7TW437ZA.js";import{Sc as d,Y as r,ba as a,ga as n}from"./chunk-QSIP5JXX.js";import"./chunk-GAL4ENT6.js";var l=(o,t)=>{let u=a(c),m=a(s);return u.getItem("portfolioHoldings").dividendIncome>0?!0:(m.navigateByUrl("/portfolio/summary"),!1)};var v=[{path:"",component:e,canActivateChild:[f],children:[{path:"summary",loadComponent:()=>import("./chunk-GMPT54I4.js").then(o=>o.PortfolioSummaryComponent)},{path:"holdings",loadComponent:()=>import("./chunk-U3RDUR4W.js").then(o=>o.PortfolioHoldingsComponent)},{path:"price-insights",loadComponent:()=>import("./chunk-XEDWVHX7.js").then(o=>o.PortfolioPriceInsightsComponent)},{path:"dividend",canActivate:[l],loadComponent:()=>import("./chunk-2IAR6D7X.js").then(o=>o.PortfolioDividendComponent)},{path:"financials",loadComponent:()=>import("./chunk-GHWZC7HB.js").then(o=>o.PortfolioFinancialsComponent)}]}],h=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n({type:t}),t.\u0275inj=r({imports:[p.forChild(v),p]});let o=t;return o})();var k=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n({type:t}),t.\u0275inj=r({imports:[d,e,h]});let o=t;return o})();export{k as PortfolioDetailsModule};
