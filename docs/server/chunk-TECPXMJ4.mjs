import './polyfills.server.mjs';
import{D as s,k as T}from"./chunk-HUZJBRX4.mjs";import{$c as D,Bb as c,Cb as d,Db as M,Gb as v,Kb as x,Lb as w,Mb as h,Vb as I,Wc as O,Xa as n,Xb as j,Xc as z,Y as b,Ya as F,_ as A,_b as m,dc as R,ec as k,fa as o,ga as C,ha as p,pb as u,qb as S,rb as f,tb as y,wb as g}from"./chunk-JF6NDZL2.mjs";var P=(()=>{let t=class t{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(i){this._vertical=T(i)}get inset(){return this._inset}set inset(i){this._inset=T(i)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(a,r){a&2&&(S("aria-orientation",r.vertical?"vertical":"horizontal"),y("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},standalone:!0,features:[m],decls:0,vars:0,template:function(a,r){},styles:[".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0});let e=t;return e})(),et=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=C({type:t}),t.\u0275inj=b({imports:[s,s]});let e=t;return e})();var X=["*"];var q=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],J=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],K=new A("MAT_CARD_CONFIG"),_=(()=>{let t=class t{constructor(i){this.appearance=i?.appearance||"raised"}};t.\u0275fac=function(a){return new(a||t)(F(K,8))},t.\u0275cmp=o({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(a,r){a&2&&y("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],standalone:!0,features:[m],ngContentSelectors:X,decls:1,vars:0,template:function(a,r){a&1&&(w(),h(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color);border-color:var(--mdc-elevated-card-container-color);border-radius:var(--mdc-elevated-card-container-shape);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color);border-radius:var(--mdc-outlined-card-container-shape);border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0});let e=t;return e})(),B=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=p({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"],standalone:!0});let e=t;return e})();var N=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=p({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"],standalone:!0});let e=t;return e})(),V=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=p({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"],standalone:!0});let e=t;return e})();var L=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],standalone:!0,features:[m],ngContentSelectors:J,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,r){a&1&&(w(q),h(0),c(1,"div",0),h(2,1),d(),h(3,2))},encapsulation:2,changeDetection:0});let e=t;return e})(),H=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=p({type:t,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"],standalone:!0});let e=t;return e})();var G=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=C({type:t}),t.\u0275inj=b({imports:[s,D,s]});let e=t;return e})();function U(e,t){if(e&1&&v(0,2),e&2){let l=x();f("ngTemplateOutlet",l.titleContentRef)}}function W(e,t){if(e&1&&(c(0,"mat-card-subtitle"),v(1,2),d()),e&2){let l=x();n(),f("ngTemplateOutlet",l.subContentRef)}}function Y(e,t){e&1&&M(0,"mat-divider")}function Z(e,t){if(e&1&&(c(0,"mat-card-footer",3),M(1,"mat-divider",4),v(2,2),d()),e&2){let l=x();n(2),f("ngTemplateOutlet",l.footerContentRef)}}var Ct=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o({type:t,selectors:[["container-card"]],inputs:{title:"title",mainContentRef:"mainContentRef",titleContentRef:"titleContentRef",subContentRef:"subContentRef",footerContentRef:"footerContentRef"},standalone:!0,features:[m],decls:11,vars:8,consts:[[1,"container"],[1,"container-title"],[3,"ngTemplateOutlet"],[1,"container-footer"],[1,"footer-divider"]],template:function(a,r){a&1&&(c(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),I(3),R(4,"titlecase"),u(5,U,1,1,"ng-container",2),d(),u(6,W,2,1,"mat-card-subtitle"),d(),u(7,Y,1,0,"mat-divider"),c(8,"mat-card-content"),v(9,2),d(),u(10,Z,3,1,"mat-card-footer",3),d()),a&2&&(n(3),j(" ",k(4,6,r.title)," "),n(2),g(r.titleContentRef?5:-1),n(),g(r.subContentRef?6:-1),n(),g(r.title||r.titleContentRef?7:-1),n(2),f("ngTemplateOutlet",r.mainContentRef),n(),g(r.footerContentRef?10:-1))},dependencies:[D,O,z,G,_,N,H,L,V,B,P],styles:[".container[_ngcontent-%COMP%]{border:1px solid ghostwhite;border-radius:1.5rem 1.5rem 0;margin-top:.5rem;margin-bottom:.5rem;min-height:4rem}.container-title[_ngcontent-%COMP%]{font-size:2rem;display:flex;align-items:center;justify-content:space-between}.container-footer[_ngcontent-%COMP%]{padding:.5rem 1rem .25rem}.footer-divider[_ngcontent-%COMP%], .footer-divider.mat-divider-horizontal[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}mat-card-header[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem;background-color:#f8f8ff;border-radius:1.5rem 1.5rem 0 0}"]});let e=t;return e})();export{P as a,et as b,_ as c,B as d,V as e,H as f,G as g,Ct as h};
