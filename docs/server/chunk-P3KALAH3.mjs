import './polyfills.server.mjs';
import"./chunk-JHO6FBM5.mjs";import{b as x}from"./chunk-SWEB7ML4.mjs";import"./chunk-XVGC4DKZ.mjs";import"./chunk-MQ36YNMH.mjs";import{a as b,b as k,f as M}from"./chunk-BUYYADIR.mjs";import"./chunk-RB4SQSSO.mjs";import{b as T}from"./chunk-AGRCXGH2.mjs";import"./chunk-7DUXMH4B.mjs";import{b as _}from"./chunk-5VKVYCBP.mjs";import{x as S}from"./chunk-PS5NKWHF.mjs";import{T as v}from"./chunk-BOYX4EOR.mjs";import{$a as i,Gb as y,La as p,Qa as m,T as c,Ya as f,Za as d,_a as s,ab as a,jb as C,nc as h,tb as u,wa as r,xa as l,zb as g}from"./chunk-IN6CXG4C.mjs";import"./chunk-5XUXGTUW.mjs";var E=(t,o)=>o.symbol;function R(t,o){if(t&1&&a(0,"stock-earnings-chart",8),t&2){let e=C().$implicit;m("stock",e)}}function F(t,o){if(t&1&&(p(0,R,1,1,"ng-template",null,0,y),s(2,"section",6),a(3,"container-card",7),i()),t&2){let e=o.$implicit,n=u(1);r(3),m("title",e.symbol)("mainContentRef",n)}}var N=(()=>{class t{constructor(e){this.dataService=e}ngOnInit(){this.stocks=this.dataService.portfolioStocks}static{this.\u0275fac=function(n){return new(n||t)(l(v))}}static{this.\u0275cmp=c({type:t,selectors:[["app-analysis"]],standalone:!0,features:[g],decls:7,vars:0,consts:[["earningsChartRef",""],["mat-align-tabs","center"],["label","Earnings Per Share"],[1,"chart-container"],["label","Analysis B"],["label","Analysis C"],[1,"add-margin"],[3,"title","mainContentRef"],[3,"stock"]],template:function(n,A){n&1&&(s(0,"mat-tab-group",1)(1,"mat-tab",2)(2,"div",3),f(3,F,4,2,null,null,E),i()(),a(5,"mat-tab",4)(6,"mat-tab",5),i()),n&2&&(r(3),d(A.stocks))},dependencies:[h,S,_,T,M,b,k,x],styles:[".chart-container[_ngcontent-%COMP%]{display:flex;height:max-content}container-card[_ngcontent-%COMP%]{display:block;width:max-content}"]})}}return t})();export{N as AnalysisComponent};
