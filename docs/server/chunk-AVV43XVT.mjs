import './polyfills.server.mjs';
import{Ec as p,Fc as l,Lb as j,V as M,W as G,Za as h,_ as y,ac as B,f as Z,ha as T,jb as f,k as X,lb as R,ma as J,nc as Q,p as Y,ua as _,v as K}from"./chunk-Y7GFRNBX.mjs";import{a as o,b as a}from"./chunk-5XUXGTUW.mjs";var It=new y("");function u(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function le(t){return t!=null&&typeof t.length=="number"}var ue=new y(""),ce=new y(""),Fe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ee=class{static min(e){return Ie(e)}static max(e){return Se(e)}static required(e){return Oe(e)}static requiredTrue(e){return xe(e)}static email(e){return Ne(e)}static minLength(e){return Pe(e)}static maxLength(e){return ke(e)}static pattern(e){return Ge(e)}static nullValidator(e){return de(e)}static compose(e){return ve(e)}static composeAsync(e){return ye(e)}};function Ie(t){return e=>{if(u(e.value)||u(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function Se(t){return e=>{if(u(e.value)||u(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function Oe(t){return u(t.value)?{required:!0}:null}function xe(t){return t.value===!0?null:{required:!0}}function Ne(t){return u(t.value)||Fe.test(t.value)?null:{email:!0}}function Pe(t){return e=>u(e.value)||!le(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function ke(t){return e=>le(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ge(t){if(!t)return de;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(u(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function de(t){return null}function he(t){return t!=null}function fe(t){return Q(t)?X(t):t}function pe(t){let e={};return t.forEach(i=>{e=i!=null?o(o({},e),i):e}),Object.keys(e).length===0?null:e}function ge(t,e){return e.map(i=>i(t))}function Te(t){return!t.validate}function me(t){return t.map(e=>Te(e)?e:i=>e.validate(i))}function ve(t){if(!t)return null;let e=t.filter(he);return e.length==0?null:function(i){return pe(ge(i,e))}}function W(t){return t!=null?ve(me(t)):null}function ye(t){if(!t)return null;let e=t.filter(he);return e.length==0?null:function(i){let n=ge(i,e).map(fe);return K(n).pipe(Y(pe))}}function q(t){return t!=null?ye(me(t)):null}function te(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function _e(t){return t._rawValidators}function Ce(t){return t._rawAsyncValidators}function U(t){return t?Array.isArray(t)?t:[t]:[]}function w(t,e){return Array.isArray(t)?t.includes(e):t===e}function ie(t,e){let i=U(e);return U(t).forEach(r=>{w(i,r)||i.push(r)}),i}function ne(t,e){return U(e).filter(i=>!w(t,i))}var F=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=W(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},v=class extends F{get formDirective(){return null}get path(){return null}},re=class extends F{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}};var Re={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},St=a(o({},Re),{"[class.ng-submitted]":"isSubmitted"});var C="VALID",E="INVALID",g="PENDING",V="DISABLED",c=class{},I=class extends c{constructor(e,i){super(),this.value=e,this.source=i}},b=class extends c{constructor(e,i){super(),this.pristine=e,this.source=i}},A=class extends c{constructor(e,i){super(),this.touched=e,this.source=i}},m=class extends c{constructor(e,i){super(),this.status=e,this.source=i}},H=class extends c{constructor(e){super(),this.source=e}},L=class extends c{constructor(e){super(),this.source=e}};function Ve(t){return(P(t)?t.validators:t)||null}function je(t){return Array.isArray(t)?W(t):t||null}function De(t,e){return(P(e)?e.asyncValidators:t)||null}function Be(t){return Array.isArray(t)?q(t):t||null}function P(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ue(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new M(1e3,"");if(!n[i])throw new M(1001,"")}function He(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new M(1002,"")})}var S=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=p(()=>this.statusReactive()),this.statusReactive=f(void 0),this._pristine=p(()=>this.pristineReactive()),this.pristineReactive=f(!0),this._touched=p(()=>this.touchedReactive()),this.touchedReactive=f(!1),this._events=new Z,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return l(this.statusReactive)}set status(e){l(()=>this.statusReactive.set(e))}get valid(){return this.status===C}get invalid(){return this.status===E}get pending(){return this.status==g}get disabled(){return this.status===V}get enabled(){return this.status!==V}get pristine(){return l(this.pristineReactive)}set pristine(e){l(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return l(this.touchedReactive)}set touched(e){l(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ie(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ie(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ne(e,this._rawAsyncValidators))}hasValidator(e){return w(this._rawValidators,e)}hasAsyncValidator(e){return w(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(a(o({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new A(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new A(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(a(o({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new b(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new b(!0,n))}markAsPending(e={}){this.status=g;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new m(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(a(o({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(r=>{r.disable(a(o({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new I(this.value,n)),this._events.next(new m(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(a(o({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(n=>{n.enable(a(o({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(a(o({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===g)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new I(this.value,i)),this._events.next(new m(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(a(o({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=g,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=fe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new m(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?E:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g)?g:this._anyControlsHaveStatus(E)?E:C}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new b(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new A(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){P(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=je(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Be(this._rawAsyncValidators)}},O=class extends S{constructor(e,i,n){super(Ve(i),De(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){He(this,!0,e),Object.keys(e).forEach(n=>{Ue(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,s)=>{n=i(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var be=new y("CallSetDisabledState",{providedIn:"root",factory:()=>Ae}),Ae="always";function $(t,e,i=Ae){z(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),$e(t,e),qe(t,e),We(t,e),Le(t,e)}function se(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),N(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function x(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Le(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function z(t,e){let i=_e(t);e.validator!==null?t.setValidators(te(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Ce(t);e.asyncValidator!==null?t.setAsyncValidators(te(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();x(e._rawValidators,r),x(e._rawAsyncValidators,r)}function N(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=_e(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.validator);s.length!==r.length&&(i=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Ce(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.asyncValidator);s.length!==r.length&&(i=!0,t.setAsyncValidators(s))}}}let n=()=>{};return x(e._rawValidators,n),x(e._rawAsyncValidators,n),i}function $e(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Me(t,e)})}function We(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Me(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Me(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function qe(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Ee(t,e){t==null,z(t,e)}function ze(t,e){return N(t,e)}function we(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Ze(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}var Xe={provide:v,useExisting:G(()=>Ye)},D=Promise.resolve(),Ye=(()=>{let e=class e extends v{get submitted(){return l(this.submittedReactive)}constructor(n,r,s){super(),this.callSetDisabledState=s,this._submitted=p(()=>this.submittedReactive()),this.submittedReactive=f(!1),this._directives=new Set,this.ngSubmit=new _,this.form=new O({},W(n),q(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){D.then(()=>{let r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),$(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){D.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){D.then(()=>{let r=this._findContainer(n.path),s=new O({});Ee(s,n),r.registerControl(n.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){D.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){D.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submittedReactive.set(!0),we(this.form,this._directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}};e.\u0275fac=function(r){return new(r||e)(h(ue,10),h(ce,10),h(be,8))},e.\u0275dir=T({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&j("submit",function(k){return s.onSubmit(k)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[B([Xe]),R]});let t=e;return t})();function oe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ae(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ke=class extends S{constructor(e=null,i,n){super(Ve(i),De(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),P(i)&&(i.nonNullable||i.initialValueIsDefault)&&(ae(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){oe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){oe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ae(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Je=t=>t instanceof Ke;var Qe={provide:v,useExisting:G(()=>et)},et=(()=>{let e=class e extends v{get submitted(){return l(this._submittedReactive)}set submitted(n){this._submittedReactive.set(n)}constructor(n,r,s){super(),this.callSetDisabledState=s,this._submitted=p(()=>this._submittedReactive()),this._submittedReactive=f(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(N(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let r=this.form.get(n.path);return $(r,n,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){se(n.control||null,n,!1),Ze(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this._submittedReactive.set(!0),we(this.form,this.directives),this.ngSubmit.emit(n),this.form._events.next(new H(this.control)),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this._submittedReactive.set(!1),this.form._events.next(new L(this.form))}_updateDomValue(){this.directives.forEach(n=>{let r=n.control,s=this.form.get(n.path);r!==s&&(se(r||null,n),Je(s)&&($(s,n,this.callSetDisabledState),n.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let r=this.form.get(n.path);Ee(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let r=this.form.get(n.path);r&&ze(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){z(this.form,this),this._oldForm&&N(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(h(ue,10),h(ce,10),h(be,8))},e.\u0275dir=T({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&j("submit",function(k){return s.onSubmit(k)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[B([Qe]),R,J]});let t=e;return t})();export{It as a,ue as b,ee as c,re as d,Ye as e,et as f};
