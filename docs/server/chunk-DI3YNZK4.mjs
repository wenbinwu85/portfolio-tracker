import './polyfills.server.mjs';
import{i as H,k as _e,o as ve,p as ye}from"./chunk-62KTUHH5.mjs";import{E as be,j as ue,u as xe,x as fe}from"./chunk-P566SQAQ.mjs";import{$a as de,$b as y,Ca as P,D as J,Da as a,Fa as oe,Hb as x,Ib as U,Ja as re,L as j,Oa as V,Qa as p,Ra as z,S as M,T as g,Uc as K,Va as Q,Vc as X,Wa as T,Xa as se,Xc as w,Y as F,Ya as _,Yc as A,Z as I,_ as d,_c as Y,a as E,ba as D,ca as O,d as f,da as N,dc as h,ea as ee,eb as u,ec as me,fb as v,ga as te,gb as le,ha as ie,i as W,ja as l,kb as pe,lc as ge,ma as ne,na as ae,nb as L,pb as ce,qb as B,rb as c,sa as R,tb as q,ub as he,vb as k,wb as S,y as Z,z as b}from"./chunk-GABBXSEO.mjs";var je=0,$=new g("CdkAccordion"),we=(()=>{class t{constructor(){this._stateChanges=new f,this._openCloseAllActions=new f,this.id=`cdk-accordion-${je++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",h]},exportAs:["cdkAccordion"],standalone:!0,features:[x([{provide:$,useExisting:t}]),p,D]})}}return t})(),Fe=0,Ae=(()=>{class t{get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(e,i,n){this.accordion=e,this._changeDetectorRef=i,this._expansionDispatcher=n,this._openCloseAllSubscription=E.EMPTY,this.closed=new l,this.opened=new l,this.destroyed=new l,this.expandedChange=new l,this.id=`cdk-accordion-child-${Fe++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen((o,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==o&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static{this.\u0275fac=function(i){return new(i||t)(a($,12),a(y),a(H))}}static{this.\u0275dir=d({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",h],disabled:[2,"disabled","disabled",h]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[x([{provide:$,useValue:void 0}]),p]})}}return t})(),Ce=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=I({type:t})}static{this.\u0275inj=M({})}}return t})();var Re=["body"],Ve=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ze=["mat-expansion-panel-header","*","mat-action-row"];function Qe(t,Te){}var Le=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Be=["mat-panel-title","mat-panel-description","*"];function qe(t,Te){if(t&1&&(u(0,"span",1),ee(),u(1,"svg",2),le(2,"path",3),v()()),t&2){let e=ce();T("@indicatorRotate",e._getExpandedState())}}var G=new g("MAT_ACCORDION"),Ee="225ms cubic-bezier(0.4,0.0,0.2,1)",Ie={indicatorRotate:K("indicatorRotate",[A("collapsed, void",w({transform:"rotate(0deg)"})),A("expanded",w({transform:"rotate(180deg)"})),Y("expanded <=> collapsed, void => collapsed",X(Ee))]),bodyExpansion:K("bodyExpansion",[A("collapsed, void",w({height:"0px",visibility:"hidden"})),A("expanded",w({height:"*",visibility:""})),Y("expanded <=> collapsed, void => collapsed",X(Ee))])},De=new g("MAT_EXPANSION_PANEL"),Ue=(()=>{class t{constructor(e,i){this._template=e,this._expansionPanel=i}static{this.\u0275fac=function(i){return new(i||t)(a(oe),a(De,8))}}static{this.\u0275dir=d({type:t,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0})}}return t})(),Ke=0,Pe=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Xe=(()=>{class t extends Ae{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,i,n,o,r,s,C){super(e,i,n),this._viewContainerRef=o,this._animationMode=s,this._hideToggle=!1,this.afterExpand=new l,this.afterCollapse=new l,this._inputChanges=new f,this._headerId=`mat-expansion-panel-header-${Ke++}`,this.accordion=e,this._document=r,this._animationsDisabled=s==="NoopAnimations",C&&(this.hideToggle=C.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(j(null),b(()=>this.expanded&&!this._portal),J(1)).subscribe(()=>{this._portal=new _e(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_animationStarted(e){!Me(e)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(e){Me(e)||(e.toState==="expanded"?this.afterExpand.emit():e.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}static{this.\u0275fac=function(i){return new(i||t)(a(G,12),a(y),a(H),a(re),a(ge),a(R,8),a(Pe,8))}}static{this.\u0275cmp=F({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,n,o){if(i&1&&q(o,Ue,5),i&2){let r;k(r=S())&&(n._lazyContent=r.first)}},viewQuery:function(i,n){if(i&1&&he(Re,5),i&2){let o;k(o=S())&&(n._body=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(i,n){i&2&&_("mat-expanded",n.expanded)("_mat-animation-noopable",n._animationsDisabled)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",h],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[x([{provide:G,useValue:void 0},{provide:De,useExisting:t}]),p,V,D,U],ngContentSelectors:ze,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,n){if(i&1){let o=pe();B(Ve),c(0),u(1,"div",1,0),L("@bodyExpansion.start",function(s){return O(o),N(n._animationStarted(s))})("@bodyExpansion.done",function(s){return O(o),N(n._animationDone(s))}),u(3,"div",2),c(4,1),z(5,Qe,0,0,"ng-template",3),v(),c(6,2),v()}i&2&&(P(),T("@bodyExpansion",n._getExpandedState())("id",n.id),Q("aria-labelledby",n._headerId),P(4),T("cdkPortalOutlet",n._portal))},dependencies:[ve],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color, var(--mat-app-surface));color:var(--mat-expansion-container-text-color, var(--mat-app-on-surface));border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font, var(--mat-app-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-app-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-app-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-app-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-app-body-large-tracking))}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-app-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[Ie.bodyExpansion]},changeDetection:0})}}return t})();function Me(t){return t.fromState==="void"}var Ye=(()=>{class t{constructor(e,i,n,o,r,s,C){this.panel=e,this._element=i,this._focusMonitor=n,this._changeDetectorRef=o,this._animationMode=s,this._parentChangeSubscription=E.EMPTY,this.tabIndex=0;let ke=e.accordion?e.accordion._stateChanges.pipe(b(m=>!!(m.hideToggle||m.togglePosition))):W;this.tabIndex=parseInt(C||"")||0,this._parentChangeSubscription=Z(e.opened,e.closed,ke,e._inputChanges.pipe(b(m=>!!(m.hideToggle||m.disabled||m.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(b(()=>e._containsFocus())).subscribe(()=>n.focusVia(i,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ue(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static{this.\u0275fac=function(i){return new(i||t)(a(Xe,1),a(ne),a(fe),a(y),a(Pe,8),a(R,8),ie("tabindex"))}}static{this.\u0275cmp=F({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(i,n){i&1&&L("click",function(){return n._toggle()})("keydown",function(r){return n._keydown(r)}),i&2&&(Q("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),se("height",n._getHeaderHeight()),_("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before")("_mat-animation-noopable",n._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:me(e)]},standalone:!0,features:[p,U],ngContentSelectors:Be,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,n){i&1&&(B(Le),u(0,"span",0),c(1),c(2,1),c(3,2),v(),z(4,qe,3,1,"span",1)),i&2&&(_("mat-content-hide-toggle",!n._showToggle()),P(4),de(n._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font, var(--mat-app-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-app-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-app-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-app-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-app-title-medium-tracking))}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-app-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-app-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-app-on-surface-variant))}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-app-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-app-on-surface-variant));display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[Ie.indicatorRotate]},changeDetection:0})}}return t})(),kt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"],standalone:!0})}}return t})(),St=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=d({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0})}}return t})(),Ht=(()=>{class t extends we{constructor(){super(...arguments),this._ownHeaders=new ae,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe(j(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new xe(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=te(t)))(n||t)}})()}static{this.\u0275dir=d({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,n,o){if(i&1&&q(o,Ye,5),i&2){let r;k(r=S())&&(n._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,n){i&2&&_("mat-accordion-multi",n.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",h],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[x([{provide:G,useExisting:t}]),p,V]})}}return t})(),jt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=I({type:t})}static{this.\u0275inj=M({imports:[be,Ce,ye]})}}return t})();export{Ue as a,Xe as b,Ye as c,kt as d,St as e,Ht as f,jt as g};
