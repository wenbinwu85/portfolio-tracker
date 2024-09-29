import{A as $,Ba as O,C as B,Da as et,Eb as ct,F as Y,G as q,Ia as nt,Ib as v,L as C,La as it,Ma as ot,O as S,P as w,Q as _,R as g,S as Q,V as G,W as y,X as b,Yb as ht,bc as lt,ca as J,da as K,db as st,ea as X,eb as rt,f as V,fd as k,ga as F,h as H,ha as D,i as U,la as p,o as f,p as z,r as m,ra as h,sb as at,ta as Z,u as W,ua as tt,xa as x}from"./chunk-A2FSG2YQ.js";var Ct=["*"],R;function St(){if(R===void 0&&(R=null,typeof window<"u")){let o=window;o.trustedTypes!==void 0&&(R=o.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return R}function E(o){return St()?.createHTML(o)||o}function dt(o){return Error(`Unable to find icon with the name "${o}"`)}function wt(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ut(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function ft(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var u=class{constructor(i,t,e){this.url=i,this.svgText=t,this.options=e}},yt=(()=>{class o{constructor(t,e,n,s){this._httpClient=t,this._sanitizer=e,this._errorHandler=s,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,s){return this._addSvgIconConfig(t,e,new u(n,null,s))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,s){let r=this._sanitizer.sanitize(p.HTML,n);if(!r)throw ft(n);let a=E(r);return this._addSvgIconConfig(t,e,new u("",a,s))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new u(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let s=this._sanitizer.sanitize(p.HTML,e);if(!s)throw ft(e);let r=E(s);return this._addSvgIconSetConfig(t,new u("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(p.RESOURCE_URL,t);if(!e)throw ut(t);let n=this._cachedIconsByUrl.get(e);return n?f(M(n)):this._loadSvgIconFromConfig(new u(t,null)).pipe(C(s=>this._cachedIconsByUrl.set(e,s)),m(s=>M(s)))}getNamedSvgIcon(t,e=""){let n=mt(e,t),s=this._svgIconConfigs.get(n);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(e,t),s)return this._svgIconConfigs.set(n,s),this._getSvgFromConfig(s);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):z(dt(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?f(M(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(m(e=>M(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return f(n);let s=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe($(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(p.RESOURCE_URL,r.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),f(null)})));return W(s).pipe(m(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw dt(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let s=e[n];if(s.svgText&&s.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(s),a=this._extractSvgIconFromSet(r,t,s.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(C(e=>t.svgText=e),m(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?f(null):this._fetchIcon(t).pipe(C(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let s=t.querySelector(`[id="${e}"]`);if(!s)return null;let r=s.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);let a=this._svgElementFromString(E("<svg></svg>"));return a.appendChild(r),this._setSvgAttributes(a,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(E("<svg></svg>")),n=t.attributes;for(let s=0;s<n.length;s++){let{name:r,value:a}=n[s];r!=="id"&&e.setAttribute(r,a)}for(let s=0;s<t.childNodes.length;s++)t.childNodes[s].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[s].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,s=n?.withCredentials??!1;if(!this._httpClient)throw wt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(p.RESOURCE_URL,e);if(!r)throw ut(e);let a=this._inProgressUrlFetches.get(r);if(a)return a;let c=this._httpClient.get(r,{responseType:"text",withCredentials:s}).pipe(m(l=>E(l)),Y(()=>this._inProgressUrlFetches.delete(r)),q());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(mt(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let s=this._resolvers[n](e,t);if(s)return Ft(s)?new u(s.url,null,s.options):new u(s,null)}}static{this.\u0275fac=function(e){return new(e||o)(g(ht,8),g(lt),g(v,8),g(F))}}static{this.\u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function M(o){return o.cloneNode(!0)}function mt(o,i){return o+":"+i}function Ft(o){return!!(o.url&&o.options)}var Dt=new _("MAT_ICON_DEFAULT_OPTIONS"),Rt=new _("mat-icon-location",{providedIn:"root",factory:Mt});function Mt(){let o=Q(v),i=o?o.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}var _t=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],At=_t.map(o=>`[${o}]`).join(", "),Nt=/^url\(['"]?#(.*?)['"]?\)$/,Qt=(()=>{class o{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,s,r,a){this._elementRef=t,this._iconRegistry=e,this._location=s,this._errorHandler=r,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=V.EMPTY,a&&(a.color&&(this.color=this._defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,s)=>{n.forEach(r=>{s.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(At),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<e.length;s++)_t.forEach(r=>{let a=e[s],c=a.getAttribute(r),l=c?c.match(Nt):null;if(l){let d=n.get(a);d||(d=[],n.set(a,d)),d.push({name:r,value:l[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(B(1)).subscribe(s=>this._setSvgElement(s),s=>{let r=`Error retrieving icon ${e}:${n}! ${s.message}`;this._errorHandler.handleError(new Error(r))})}}static{this.\u0275fac=function(e){return new(e||o)(h(D),h(yt),J("aria-hidden"),h(Rt),h(F),h(Dt,8))}}static{this.\u0275cmp=G({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(nt("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),ot(n.color?"mat-"+n.color:""),it("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ct],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[et,at],ngContentSelectors:Ct,decls:1,vars:0,template:function(e,n){e&1&&(st(),rt(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}}return o})(),Gt=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=y({type:o})}static{this.\u0275inj=w({imports:[k,k]})}}return o})();var gt=class{};function ee(o){return o&&typeof o.connect=="function"&&!(o instanceof H)}var A=function(o){return o[o.REPLACED=0]="REPLACED",o[o.INSERTED=1]="INSERTED",o[o.MOVED=2]="MOVED",o[o.REMOVED=3]="REMOVED",o}(A||{}),ne=new _("_ViewRepeater"),vt=class{applyChanges(i,t,e,n,s){i.forEachOperation((r,a,c)=>{let l,d;if(r.previousIndex==null){let P=e(r,a,c);l=t.createEmbeddedView(P.templateRef,P.context,P.index),d=A.INSERTED}else c==null?(t.remove(a),d=A.REMOVED):(l=t.get(a),t.move(l,c),d=A.MOVED);s&&s({context:l?.context,operation:d,record:r})})}detach(){}};var Et=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(i=!1,t,e=!0,n){this._multiple=i,this._emitChanges=e,this.compareWith=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new U,t&&t.length&&(i?t.forEach(s=>this._markSelected(s)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...i){this._verifyValueAssignment(i),i.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...i){this._verifyValueAssignment(i);let t=this.selected,e=new Set(i);i.forEach(s=>this._markSelected(s)),t.filter(s=>!e.has(this._getConcreteValue(s,e))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let t=this._hasQueuedChanges();return i&&this._emitChangeEvent(),t}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(i,e))return e;return i}else return i}};var ie=(()=>{class o{constructor(){this._listeners=[]}notify(t,e){for(let n of this._listeners)n(t,e)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(e=>t!==e)}}ngOnDestroy(){this._listeners=[]}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var I=class{attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},j=class extends I{constructor(i,t,e,n,s){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.componentFactoryResolver=n,this.projectableNodes=s}},N=class extends I{constructor(i,t,e,n){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},L=class extends I{constructor(i){super(),this.element=i instanceof D?i.nativeElement:i}},T=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof j)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof N)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof L)return this._attachedPortal=i,this.attachDomPortal(i)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var It=class extends T{constructor(i,t,e,n,s){super(),this.outletElement=i,this._componentFactoryResolver=t,this._appRef=e,this._defaultInjector=n,this.attachDomPortal=r=>{this._document;let a=r.element;a.parentNode;let c=this._document.createComment("dom-portal");a.parentNode.insertBefore(c,a),this.outletElement.appendChild(a),this._attachedPortal=r,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(a,c)})},this._document=s}attachComponentPortal(i){let e=(i.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(i.component),n;return i.viewContainerRef?(n=i.viewContainerRef.createComponent(e,i.viewContainerRef.length,i.injector||i.viewContainerRef.injector,i.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=e.create(i.injector||this._defaultInjector||K.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=i,n}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(n=>this.outletElement.appendChild(n)),e.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(e);n!==-1&&t.remove(n)}),this._attachedPortal=i,e}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var me=(()=>{class o extends N{constructor(t,e){super(t,e)}static{this.\u0275fac=function(e){return new(e||o)(h(Z),h(x))}}static{this.\u0275dir=b({type:o,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],standalone:!0,features:[O]})}}return o})();var pe=(()=>{class o extends T{constructor(t,e,n){super(),this._componentFactoryResolver=t,this._viewContainerRef=e,this._isInitialized=!1,this.attached=new X,this.attachDomPortal=s=>{this._document;let r=s.element;r.parentNode;let a=this._document.createComment("dom-portal");s.setAttachedHost(this),r.parentNode.insertBefore(a,r),this._getRootNode().appendChild(r),this._attachedPortal=s,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(r,a)})},this._document=n}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,s=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),r=e.createComponent(s,e.length,t.injector||e.injector,t.projectableNodes||void 0);return e!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=t,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static{this.\u0275fac=function(e){return new(e||o)(h(tt),h(x),h(v))}}static{this.\u0275dir=b({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[O]})}}return o})();var _e=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=y({type:o})}static{this.\u0275inj=w({})}}return o})();export{Qt as a,Gt as b,gt as c,ee as d,A as e,ne as f,vt as g,Et as h,ie as i,j,N as k,T as l,It as m,me as n,pe as o,_e as p};
