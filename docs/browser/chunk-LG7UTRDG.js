import{a as Ye,b as Xe,f as Je}from"./chunk-4BYFHLYH.js";import{A as bt,a as j,b as et,c as tt,d as z,e as it,f as nt,g as ot,h as rt,i as at,j as st,k as lt,l as dt,m as ct,n as mt,o as pt,p as ht,q as ut,r as ft,s as _t,t as gt,u as Ct,v as vt,w as xt,x as yt,y as wt}from"./chunk-E33AP5DM.js";import{a as qe}from"./chunk-RVWMOZ7O.js";import{a as Ke}from"./chunk-BR6OUKYB.js";import{a as Qe,b as Ge}from"./chunk-G3XNFLY2.js";import{a as Be,b as We,c as je,d as ze,e as F,j as I}from"./chunk-5IFXCR54.js";import{h as Ue,i as Ze}from"./chunk-UBKOQLDF.js";import{c as Ne,d as Oe,e as Ve,f as $e}from"./chunk-ADCYV66N.js";import{c as Ee,d as Te,f as te,g as ie,i as He}from"./chunk-NAC4X7ZC.js";import{g as Re}from"./chunk-7LVK74HI.js";import{k as De,l as Le}from"./chunk-7EGNW77G.js";import{f as Ae}from"./chunk-M2FRXOVZ.js";import{$b as Y,Ab as l,Ad as Fe,Bb as p,Bd as Ie,Cb as Ce,Db as ve,Fb as M,Gb as xe,Ib as _,Kb as a,Lc as be,Nc as Me,Pb as T,Qb as H,Qc as ke,Rb as R,Rc as Se,Ub as $,Vb as u,Wa as d,Wb as k,X as pe,Xa as h,Xb as ye,Xc as B,Y as L,Yc as ne,Zb as we,Zc as Pe,_ as he,_b as S,aa as U,ac as X,dc as J,ec as ee,f as D,fa as w,fd as W,ga as A,gc as P,ha as Z,i as me,kd as oe,ma as ue,na as C,nb as f,oa as v,ob as O,pb as c,rb as V,ub as b,va as N,wb as fe,xa as K,xb as _e,yb as ge,zb as s,zd as re}from"./chunk-CPZLQSFH.js";import{a as de,b as ce}from"./chunk-GAL4ENT6.js";var Mt=Pe({passive:!0}),kt=(()=>{let n=class n{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return me;let e=oe(t),o=this._monitoredElements.get(e);if(o)return o.subject;let m=new D,g="cdk-text-field-autofilled",x=y=>{y.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(g)?(e.classList.add(g),this._ngZone.run(()=>m.next({target:y.target,isAutofilled:!0}))):y.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(g)&&(e.classList.remove(g),this._ngZone.run(()=>m.next({target:y.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",x,Mt),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:m,unlisten:()=>{e.removeEventListener("animationstart",x,Mt)}}),m}stopMonitoring(t){let e=oe(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}};n.\u0275fac=function(e){return new(e||n)(U(B),U(N))},n.\u0275prov=pe({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var St=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=A({type:n}),n.\u0275inj=L({});let i=n;return i})();var Lt=new he("MAT_INPUT_VALUE_ACCESSOR"),At=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Nt=0,Et=(()=>{let n=class n{get disabled(){return this._disabled}set disabled(t){this._disabled=W(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(t){this._id=t||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(Ne.required)??!1}set required(t){this._required=W(t)}get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&ne().has(this._type)&&(this._elementRef.nativeElement.type=this._type),this._ensureWheelDefaultBehavior()}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}get value(){return this._inputValueAccessor.value}set value(t){t!==this.value&&(this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=W(t)}get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}constructor(t,e,o,m,g,x,y,Ft,ae,se){this._elementRef=t,this._platform=e,this.ngControl=o,this._autofillMonitor=Ft,this._ngZone=ae,this._formField=se,this._uid=`mat-input-${Nt++}`,this._webkitBlinkWheelListenerAttached=!1,this.focused=!1,this.stateChanges=new D,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(G=>ne().has(G)),this._iOSKeyupListener=G=>{let E=G.target;!E.value&&E.selectionStart===0&&E.selectionEnd===0&&(E.setSelectionRange(1,1),E.setSelectionRange(0,0))},this._webkitBlinkWheelListener=()=>{};let Q=this._elementRef.nativeElement,le=Q.nodeName.toLowerCase();this._inputValueAccessor=y||Q,this._previousNativeValue=this.value,this.id=this.id,e.IOS&&ae.runOutsideAngular(()=>{t.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Fe(x,o,g,m,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=le==="select",this._isTextarea=le==="textarea",this._isInFormField=!!se,this._isNativeSelect&&(this.controlType=Q.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener),this._webkitBlinkWheelListenerAttached&&this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){t!==this.focused&&(this.focused=t,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){At.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused||!this.empty}setDescribedByIds(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_ensureWheelDefaultBehavior(){!this._webkitBlinkWheelListenerAttached&&this._type==="number"&&(this._platform.BLINK||this._platform.WEBKIT)&&(this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("wheel",this._webkitBlinkWheelListener)}),this._webkitBlinkWheelListenerAttached=!0),this._webkitBlinkWheelListenerAttached&&this._type!=="number"&&(this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener),this._webkitBlinkWheelListenerAttached=!0)}};n.\u0275fac=function(e){return new(e||n)(h(K),h(B),h(Oe,10),h(Ve,8),h($e,8),h(Ie),h(Lt,10),h(kt),h(N),h(je,8))},n.\u0275dir=Z({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(e,o){e&1&&_("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),e&2&&(xe("id",o.id)("disabled",o.disabled)("required",o.required),O("name",o.name||null)("readonly",o.readonly&&!o._isNativeSelect||null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),V("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[we([{provide:We,useExisting:n}]),ue]});let i=n;return i})(),Tt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=A({type:n}),n.\u0275inj=L({imports:[re,F,F,St,re]});let i=n;return i})();function Vt(i,n){if(i&1&&(s(0,"div",5),p(1,"stock-recommendation-trends",2),l()),i&2){let r=a();d(),c("symbol",r.stock.symbol)}}var Ht=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=w({type:n,selectors:[["expanded-row"]],inputs:{stock:"stock"},standalone:!0,features:[S],decls:12,vars:6,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"symbol"],["label","Analysis & Recommedations"],[1,"widget-container"],[1,"rec-trends"],["label","Financials"],["width","100%",3,"symbol"],["label","Profile"]],template:function(e,o){e&1&&(s(0,"mat-tab-group",0)(1,"mat-tab",1),p(2,"wallmine-chart",2),l(),s(3,"mat-tab",3)(4,"div",4),p(5,"tv-technical-analysis-widget",2),f(6,Vt,2,1,"div",5),l()(),s(7,"mat-tab",6),p(8,"tv-financials-widget",7),l(),s(9,"mat-tab",8),p(10,"tv-symbol-info-widget",2)(11,"tv-profile-widget",7),l()()),e&2&&(d(2),c("symbol",o.stock.symbol),d(3),c("symbol",o.stock.symbol),d(),b(o.stock.quoteType==="EQUITY"?6:-1),d(2),c("symbol",o.stock.symbol),d(2),c("symbol",o.stock.symbol),d(),c("symbol",o.stock.symbol))},dependencies:[Se,Je,Ye,Xe,Ct,vt,xt,yt,wt,qe],styles:[".widget-container[_ngcontent-%COMP%]{display:flex;align-items:baseline}"]});let i=n;return i})();var $t=["singleQuoteWidget"],Rt=(()=>{let n=class n{constructor(t){this.tradingviewService=t,this.type="simple"}ngAfterViewInit(){let t=this.tradingviewService.singleQuoteWidget(this.symbol,this.type);this.singleQuoteWidget.nativeElement.appendChild(t)}};n.\u0275fac=function(e){return new(e||n)(h(Ke))},n.\u0275cmp=w({type:n,selectors:[["tv-single-quote-widget"]],viewQuery:function(e,o){if(e&1&&T($t,5),e&2){let m;H(m=R())&&(o.singleQuoteWidget=m.first)}},inputs:{symbol:"symbol",type:"type"},standalone:!0,features:[S],decls:2,vars:0,consts:[["singleQuoteWidget",""]],template:function(e,o){e&1&&p(0,"div",null,0)},encapsulation:2});let i=n;return i})();var Bt=()=>["expandedRow"],Pt=i=>({color:i}),Wt=()=>({color:"black"});function jt(i,n){if(i&1&&(s(0,"div",7)(1,"div",8),p(2,"ngx-charts-pie-grid",9),l()()),i&2){let r=a();d(2),c("scheme","forest")("animations",!0)("results",r.totalCostChartData)("label","Dollars Invested")}}function zt(i,n){if(i&1&&(s(0,"th",21)(1,"span"),u(2),l()()),i&2){let r=a().$index,t=a(2);d(2),k(t.headers[r])}}function qt(i,n){if(i&1&&p(0,"stock-name-card",25),i&2){let r=a(2).$implicit;c("stock",r)}}function Qt(i,n){if(i&1&&p(0,"tv-single-quote-widget",26),i&2){let r=a(2).$implicit;c("symbol",r.symbol)}}function Gt(i,n){if(i&1&&(s(0,"div",23),f(1,qt,1,1,"stock-name-card",25)(2,Qt,1,1,"tv-single-quote-widget",26),l()),i&2){let r=a(4);d(),b(r.showTradingviewWidgets?2:1)}}function Ut(i,n){if(i&1){let r=M();s(0,"div",27),_("click",function(){C(r);let e=a().$implicit,o=a(3);return v(o.expandRow(e))}),s(1,"div",28)(2,"span",29),u(3),J(4,"currency"),l(),s(5,"span",30),u(6),l()()()}if(i&2){let r=a().$implicit,t=a(3);d(3),k(ee(4,2,t.portfolioHoldings[r.symbol].costAverage)),d(3),ye(" x ",t.portfolioHoldings[r.symbol].shares,"")}}function Zt(i,n){if(i&1){let r=M();s(0,"span",31),_("click",function(){C(r);let e=a().$implicit,o=a(3);return v(o.expandRow(e))}),u(1),J(2,"titlecase"),l()}if(i&2){let r=a().$implicit,t=a().$index,e=a(2);c("ngStyle",X(4,Pt,e.getCellColor(r,t))),d(),k(ee(2,2,r.rating))}}function Kt(i,n){if(i&1){let r=M();s(0,"span",31),_("click",function(){C(r);let e=a().$implicit,o=a(3);return v(o.expandRow(e))}),u(1),l()}if(i&2){let r=a().$implicit,t=a().$index,e=a(2);c("ngStyle",X(2,Pt,e.getCellColor(r,t))),d(),k(e.cells[t](r))}}function Yt(i,n){if(i&1&&(s(0,"td",22),f(1,Gt,3,1,"div",23)(2,Ut,7,4,"div")(3,Zt,3,6,"span",24)(4,Kt,2,4,"span",24),l()),i&2){let r=a().$index;d(),b(r===0?1:r===1?2:r===10?3:4)}}function Xt(i,n){if(i&1&&(s(0,"td",32)(1,"span"),u(2),l()()),i&2){let r=a().$index,t=a(2);c("ngStyle",Y(2,Wt)),d(2),k(t.footerRow[r]())}}function Jt(i,n){if(i&1&&(s(0,"div",11),f(1,zt,3,1,"th",19)(2,Yt,5,1,"td",13)(3,Xt,3,3,"td",20),l()),i&2){let r=n.$implicit,t=n.$index;c("matColumnDef",r)("sticky",t===0)}}function ei(i,n){if(i&1&&(s(0,"div",33),p(1,"expanded-row",25),l()),i&2){let r=a().$implicit,t=a(2);c("@detailExpand",r===t.expandedRow?"expanded":"collapsed"),d(),c("stock",r)}}function ti(i,n){if(i&1&&(s(0,"td",22),f(1,ei,2,2,"div",33),l()),i&2){let r=n.$implicit,t=a(2);O("colspan",t.columnDefs.length),d(),b(t.expandedRow&&t.expandedRow.symbol===r.symbol?1:-1)}}function ii(i,n){i&1&&p(0,"tr",34)}function ni(i,n){if(i&1&&p(0,"tr",35),i&2){let r=n.$implicit,t=a(2);V("expanded-stock-row",t.expandedRow===r)("row-clicked",t.expandedRow===r)}}function oi(i,n){i&1&&p(0,"tr",36)}function ri(i,n){i&1&&p(0,"tr",37)}function ai(i,n){i&1&&(s(0,"tr",38)(1,"td",39)(2,"h1",40)(3,"mat-icon"),u(4,"sentiment_very_dissatisfied"),l(),s(5,"span"),u(6,"Wow! Such amazing search, no results!"),l()()()())}function si(i,n){if(i&1&&(s(0,"table",10),_e(1,Jt,4,2,"div",11,fe),Ce(3,12),f(4,ti,2,2,"td",13),ve(),f(5,ii,1,0,"tr",14)(6,ni,1,4,"tr",15)(7,oi,1,0,"tr",16)(8,ri,1,0,"tr",17)(9,ai,7,0,"tr",18),l()),i&2){let r=a();c("dataSource",r.dataSource),d(),ge(r.columnDefs),d(4),c("matHeaderRowDef",r.columnDefs)("matHeaderRowDefSticky",!0),d(),c("matRowDefColumns",r.columnDefs),d(),c("matRowDefColumns",Y(7,Bt)),d(),c("matFooterRowDef",r.columnDefs)("matFooterRowDefSticky",!0)}}function li(i,n){if(i&1){let r=M();s(0,"div",41)(1,"mat-slide-toggle",42),_("toggleChange",function(){C(r);let e=a();return v(e.showWidgets())}),s(2,"span"),u(3,"Show Widgets"),l()(),s(4,"mat-form-field",43)(5,"mat-label"),u(6,"Filter"),l(),s(7,"input",44,4),_("keyup",function(e){C(r);let o=a();return v(o.applyFilter(e))}),l()()()}}function di(i,n){if(i&1){let r=M();s(0,"div",45)(1,"div",46)(2,"mat-icon"),u(3,"info"),l(),s(4,"span"),u(5,"Click on a row to expand it. Click on a ticker symbol card to open the ticker data sheet"),l()(),s(6,"div",41)(7,"mat-slide-toggle",42),_("toggleChange",function(){C(r);let e=a();return v(e.showWidgets())}),s(8,"span"),u(9,"Show Widgets"),l()(),s(10,"mat-form-field",43)(11,"mat-label"),u(12,"Filter"),l(),s(13,"input",44,4),_("keyup",function(e){C(r);let o=a();return v(o.applyFilter(e))}),l()()()()}}var un=(()=>{let n=class n{constructor(t){this.dataService=t,this.showTradingviewWidgets=!1,this.portfolioHoldings={},this.portfolioData={},this.totalCostChartData=[],this.allTotalCostChartData=[],this.dataSource=new gt,this.headers=["Symbol","Average Cost x shares","Total Invested","Market Value","Portfolio %","Unrealized Gain","Unrealized Gain %","Dividend Income","Yield on Cost","Sector"],this.columnDefs=["symbol","costAverage","totalCost","marketValue","portfolioPercent","unrealizedGain","unrealizedGainPercent","dividendIncome","yieldOnCost","sector"],this.cells=[e=>"",e=>"",e=>`$${this.portfolioHoldings[e.symbol].totalCost}`,e=>`$${this.portfolioHoldings[e.symbol].marketValue.toFixed(2)}`,e=>`${(this.portfolioHoldings[e.symbol].portfolioPercent*100).toFixed(2)}%`,e=>`$${this.portfolioHoldings[e.symbol].unrealizedGain.toFixed(2)}`,e=>`${(this.portfolioHoldings[e.symbol].unrealizedGainPercent*100).toFixed(2)}%`,e=>`$${this.portfolioHoldings[e.symbol].dividendIncome.toFixed(2)}`,e=>(this.portfolioHoldings[e.symbol].yieldOnCost*100).toFixed(2)+"%",e=>e.sector||"ETF"],this.footerRow=[()=>`Total Holdings: ${this.portfolioHoldings.positionsHeld}`,()=>"",()=>`$${this.portfolioHoldings.totalAmountInvested.toFixed(2)}`,()=>`$${this.portfolioHoldings.marketValue.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.unrealizedGain.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.dividendIncome.toFixed(2)}`,()=>`${(this.portfolioHoldings.yieldOnCost*100).toFixed(2)}%`,()=>""]}ngOnInit(){this.portfolioData=this.dataService.portfolioData,this.portfolioHoldings=this.dataService.portfolioHoldings,this.dataSource.data=this.dataService.portfolioSymbols.map(t=>{let e=this.portfolioData[t],o={name:e.symbol,value:this.portfolioHoldings[e.symbol].totalCost,sector:e.profile?.sector||"ETF",shortName:e.shortName,longName:e.longName};return this.allTotalCostChartData.push(o),ce(de({},this.portfolioHoldings[e.symbol]),{symbol:e.symbol,sector:e.profile.sector,rating:e.recommendationKey,longName:e.longName,shortName:e.shortName,quoteType:e.quoteType,website:e.profile?.website||"",fiftyTwoWeekLow:e.fiftyTwoWeekLow.raw,regularMarketPrice:e.regularMarketPrice.raw,regularMarketChange:e.regularMarketChange.raw,regularMarketChangePercent:e.regularMarketChangePercent.raw,preMarketPrice:e.preMarketPrice.raw,preMarketChangePercent:e.preMarketChangePercent?.raw||0,postMarketPrice:e.postMarketPrice.raw,postMarketChangePercent:e.postMarketChangePercent?.raw||0})}),this.dataSource.filterPredicate=(t,e)=>{let o=[t.symbol,t.shortName,t.longName,t.quoteType,t.sector||""];for(let m of o)if(m.toLowerCase().includes(e.toLowerCase()))return!0;return!1},this.allTotalCostChartData.sort((t,e)=>e.value-t.value),this.totalCostChartData=this.allTotalCostChartData}ngAfterViewInit(){this.dataSource.sort=this.sort}applyFilter(t){this.totalCostChartData=this.allTotalCostChartData;let e=t.target.value;this.dataSource.filter=e,e?this.totalCostChartData=this.totalCostChartData.filter(o=>o.sector?.toLowerCase().includes(e.toLowerCase())||o.name?.toLowerCase().includes(e.toLowerCase())||o.shortName?.toLowerCase().includes(e.toLowerCase())||o.longName?.toLowerCase().includes(e.toLowerCase())):this.totalCostChartData=this.allTotalCostChartData}getCellColor(t,e){switch(e){case 5:case 6:return this.portfolioHoldings[t.symbol].unrealizedGain>0?I.Gain:I.Lost;case 7:return this.portfolioHoldings[t.symbol].dividendIncome>0?I.Gain:I.Lost;case 10:return t.rating==="buy"?"teal":"black";default:return"black"}}expandRow(t){this.expandedRow=this.expandedRow===t?null:t}showWidgets(){this.showTradingviewWidgets=!this.showTradingviewWidgets}};n.\u0275fac=function(e){return new(e||n)(h(Re))},n.\u0275cmp=w({type:n,selectors:[["portfolio-holdings"]],viewQuery:function(e,o){if(e&1&&(T(z,5),T(j,5)),e&2){let m;H(m=R())&&(o.table=m.first),H(m=R())&&(o.sort=m.first)}},standalone:!0,features:[S],decls:10,vars:3,consts:[["costBasisRef",""],["tableRef",""],["tableActionsRef",""],["tableSubcontentRef",""],["input",""],["title","Cost Basis",3,"mainContentRef"],["title","My Holdings",3,"mainContentRef","subContentRef"],[1,"add-flex"],[1,"chart-container"],[3,"scheme","animations","results","label"],["mat-table","","matSort","","matSortActive","unrealizedGainPercent","matSortDirection","asc","multiTemplateDataRows","",3,"dataSource"],[3,"matColumnDef","sticky"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"expanded-stock-row","row-clicked",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],[1,"single-quote-widget",3,"symbol"],[3,"click"],[1,"cost-average"],["disabled","","value","costAverage"],["disabled","","value","shares"],[3,"click","ngStyle"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"],[1,"no-match"],[1,"table-actions"],[3,"toggleChange"],["appearance","outline"],["matInput","",3,"keyup"],[1,"subcontent-container"],[1,"subcontent-info"]],template:function(e,o){if(e&1&&(f(0,jt,3,4,"ng-template",null,0,P),p(2,"container-card",5),f(3,si,10,8,"ng-template",null,1,P)(5,li,9,0,"ng-template",null,2,P)(7,di,15,0,"ng-template",null,3,P),p(9,"container-card",6)),e&2){let m=$(1),g=$(4),x=$(8);d(2),c("mainContentRef",m),d(7),c("mainContentRef",g)("subContentRef",x)}},dependencies:[Ae,ke,Ht,F,ze,Be,Le,De,Tt,Et,Ge,Qe,tt,j,et,_t,z,nt,dt,rt,it,mt,ot,ct,at,lt,st,pt,ut,ht,ft,be,Ze,Me,Ue,bt,Rt],styles:["table[_ngcontent-%COMP%]{margin-top:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:1.5rem}mat-form-field[_ngcontent-%COMP%]{height:min-content}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:baseline}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.single-quote-widget[_ngcontent-%COMP%]{z-index:1000;height:5.5rem;margin-right:1.25rem}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.no-match[_ngcontent-%COMP%]{display:flex;align-items:center;width:max-content}.mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%]{font-weight:700;border-top:1px solid slategrey;border-bottom:1px solid slategrey}.row-clicked[_ngcontent-%COMP%]{font-weight:700;background-color:#f8f8ff}.subcontent-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.subcontent-info[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-mdc-form-field[_ngcontent-%COMP%]{flex-direction:row}"],data:{animation:[Ee("detailExpand",[ie("collapsed",te({height:"0px",minHeight:"0"})),ie("expanded",te({height:"*"})),He("expanded <=> collapsed",Te("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}});let i=n;return i})();export{un as a};
