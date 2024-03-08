import './polyfills.server.mjs';
import{D as C,M as L,N}from"./chunk-UY3DO3X5.mjs";import{m as z,n as E,q as P,r as k,s as O,t as _}from"./chunk-6YJCKQYO.mjs";import{Db as o,Eb as m,Gb as h,Hb as b,Ob as l,Pb as T,Qb as A,Xb as s,Yb as p,ac as v,ba as f,bb as r,ca as D,cb as S,da as g,dc as F,fc as x,gc as j,hc as y,na as I,pa as w,sb as u,ub as d,wb as M}from"./chunk-D5BORNAZ.mjs";var q=["*"];var J=new w("MAT_CARD_CONFIG"),B=(()=>{let t=class t{constructor(c){this.appearance=c?.appearance||"raised"}};t.\u0275fac=function(i){return new(i||t)(S(J,8))},t.\u0275cmp=f({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(i,n){i&2&&M("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],standalone:!0,features:[v],ngContentSelectors:q,decls:1,vars:0,template:function(i,n){i&1&&(T(),A(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0});let e=t;return e})(),R=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=g({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"],standalone:!0});let e=t;return e})();var V=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=g({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"],standalone:!0});let e=t;return e})();var G=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=g({type:t,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"],standalone:!0});let e=t;return e})();var H=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=D({type:t}),t.\u0275inj=I({imports:[C,_,C]});let e=t;return e})();function Q(e,t){if(e&1&&(o(0,"mat-icon"),s(1),m()),e&2){let a=l();r(),p(a.icon)}}function U(e,t){if(e&1&&(o(0,"div",5),s(1),x(2,"date"),m()),e&2){let a=l();r(),p(y(2,1,a.date,"fullDate"))}}function W(e,t){if(e&1&&(h(0),s(1),x(2,"currency"),b()),e&2){let a=l(2);r(),p(j(2,1,a.value))}}function Y(e,t){if(e&1&&(h(0),s(1),x(2,"percent"),b()),e&2){let a=l(2);r(),p(y(2,1,a.value,".2"))}}function Z(e,t){if(e&1&&(h(0),s(1),b()),e&2){let a=l(2);r(),p(a.value)}}function $(e,t){if(e&1&&(o(0,"mat-card-title",0),u(1,W,3,3,"ng-container",2)(2,Y,3,4,"ng-container",2)(3,Z,2,1,"ng-container",2),m()),e&2){let a=l();d("ngStyle",a.getStyle()),r(),d("ngIf",a.valueType==="currency"),r(),d("ngIf",a.valueType==="percentage"),r(),d("ngIf",a.valueType==="number")}}function tt(e,t){if(e&1&&(o(0,"mat-card-subtitle"),s(1),m()),e&2){let a=l();r(),p(a.subtitle)}}function et(e,t){if(e&1&&(o(0,"mat-card-subtitle"),s(1),m()),e&2){let a=l();r(),p(a.additionalInfo)}}var at=(e,t)=>({border:e,"border-left":t}),Dt=(()=>{let t=class t{constructor(){this.icon="",this.value=0,this.subtitle="",this.valueType="number",this.color="black",this.fontSize="2rem",this.borderStyle="",this.borderLeftStyle=""}ngOnInit(){this.borderLeftStyle="0.5rem solid "+(this.accentColor?this.accentColor:"navy")}getStyle(){return{color:this.color,"font-size":this.fontSize}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["info-card"]],inputs:{icon:"icon",value:"value",subtitle:"subtitle",date:"date",additionalInfo:"additionalInfo",valueType:"valueType",color:"color",accentColor:"accentColor",fontSize:"fontSize"},standalone:!0,features:[v],decls:8,vars:9,consts:[[3,"ngStyle"],[1,"flex-between"],[4,"ngIf"],["class","date",4,"ngIf"],[3,"ngStyle",4,"ngIf"],[1,"date"]],template:function(i,n){i&1&&(o(0,"mat-card",0)(1,"div",1),u(2,Q,2,1,"mat-icon",2)(3,U,3,4,"div",3),m(),u(4,$,4,4,"mat-card-title",4),o(5,"mat-card-footer",1),u(6,tt,2,1,"mat-card-subtitle",2)(7,et,2,1,"mat-card-subtitle",2),m()()),i&2&&(d("ngStyle",F(6,at,n.borderStyle,n.borderLeftStyle)),r(2),d("ngIf",n.icon),r(),d("ngIf",n.date),r(),d("ngIf",n.value),r(2),d("ngIf",n.subtitle),r(),d("ngIf",n.additionalInfo))},dependencies:[_,z,E,k,O,P,H,B,G,V,R,N,L],styles:["mat-icon[_ngcontent-%COMP%]{padding:.5rem}.mat-mdc-card[_ngcontent-%COMP%]{max-width:max-content;border:1px solid grey;border-radius:.5rem}.mat-mdc-card-title[_ngcontent-%COMP%]{padding:.5rem 1rem 0 .5rem}.mat-mdc-card-subtitle[_ngcontent-%COMP%]{padding:.5rem;color:steel}.flex-between[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.date[_ngcontent-%COMP%]{padding-right:.5rem;color:steel}"]});let e=t;return e})();export{Dt as a};
