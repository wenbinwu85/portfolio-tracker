import './polyfills.server.mjs';
import{A as wt,a as W,b as Xe,c as et,d as j,e as tt,f as it,g as nt,h as ot,i as rt,j as at,k as st,l as lt,m as dt,n as ct,o as mt,p as ht,q as pt,r as ut,s as _t,t as ft,u as gt,v as vt,w as Ct,x as xt,y as yt}from"./chunk-BEQVXDN7.mjs";import{a as Je}from"./chunk-TOODNJFC.mjs";import{a as We,b as je,f as ze}from"./chunk-BGRIWWPV.mjs";import{a as Ye}from"./chunk-JVW6X6X5.mjs";import{a as Ze,b as Ke}from"./chunk-73N4CM4W.mjs";import{h as re}from"./chunk-CSEF6CSE.mjs";import{l as qe,m as Qe}from"./chunk-XGJNUMTL.mjs";import{a as Oe,b as Ve,c as $e,d as Be,e as I}from"./chunk-SFAXOFUV.mjs";import{c as Fe,d as Ae,e as Le,f as Ne}from"./chunk-QAVQYTJV.mjs";import{c as Se,d as Ee,f as ee,g as te,i as Te}from"./chunk-YG54OGXN.mjs";import{a as Ie,b as De,c as Ue}from"./chunk-UWJE4WK3.mjs";import{f as Ge}from"./chunk-RFVNM7LE.mjs";import{E as oe,F as He,G as Pe,a as $,b as ie,c as Re,k as B,p as ne}from"./chunk-UTCM4PI5.mjs";import{Ab as fe,Bb as ge,Cb as s,Db as l,Eb as h,Fb as ve,Gb as Ce,Ib as k,Jb as xe,Lb as f,Nb as a,Sb as T,Tb as R,Ub as H,X as he,Xb as V,Y as F,Ya as d,Yb as p,Yc as be,Za as u,Zb as M,_ as pe,_b as ye,aa as U,ac as we,bc as S,bd as ke,cc as K,cd as Me,dc as Y,f as D,fa as w,ga as A,gc as J,ha as G,hc as X,i as me,jc as P,ma as ue,na as v,nb as _,oa as C,rb as N,sb as m,ub as O,va as L,xa as Z,xb as b,zb as _e}from"./chunk-X4WKDQBD.mjs";import{a as de,b as ce}from"./chunk-5XUXGTUW.mjs";var bt=Re({passive:!0}),kt=(()=>{let o=class o{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return me;let t=ne(e),n=this._monitoredElements.get(t);if(n)return n.subject;let c=new D,g="cdk-text-field-autofilled",x=y=>{y.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(g)?(t.classList.add(g),this._ngZone.run(()=>c.next({target:y.target,isAutofilled:!0}))):y.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(g)&&(t.classList.remove(g),this._ngZone.run(()=>c.next({target:y.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",x,bt),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:c,unlisten:()=>{t.removeEventListener("animationstart",x,bt)}}),c}stopMonitoring(e){let t=ne(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}};o.\u0275fac=function(t){return new(t||o)(U($),U(L))},o.\u0275prov=he({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();var Mt=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=A({type:o}),o.\u0275inj=F({});let i=o;return i})();var Ft=new pe("MAT_INPUT_VALUE_ACCESSOR"),At=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Lt=0,St=(()=>{let o=class o{get disabled(){return this._disabled}set disabled(e){this._disabled=B(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(Fe.required)??!1}set required(e){this._required=B(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ie().has(this._type)&&(this._elementRef.nativeElement.type=this._type),this._ensureWheelDefaultBehavior()}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=B(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,n,c,g,x,y,Pt,ae,se){this._elementRef=e,this._platform=t,this.ngControl=n,this._autofillMonitor=Pt,this._ngZone=ae,this._formField=se,this._uid=`mat-input-${Lt++}`,this._webkitBlinkWheelListenerAttached=!1,this.focused=!1,this.stateChanges=new D,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(Q=>ie().has(Q)),this._iOSKeyupListener=Q=>{let E=Q.target;!E.value&&E.selectionStart===0&&E.selectionEnd===0&&(E.setSelectionRange(1,1),E.setSelectionRange(0,0))},this._webkitBlinkWheelListener=()=>{};let q=this._elementRef.nativeElement,le=q.nodeName.toLowerCase();this._inputValueAccessor=y||q,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&ae.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new He(x,n,g,c,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=le==="select",this._isTextarea=le==="textarea",this._isInFormField=!!se,this._isNativeSelect&&(this.controlType=q.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener),this._webkitBlinkWheelListenerAttached&&this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){At.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_ensureWheelDefaultBehavior(){!this._webkitBlinkWheelListenerAttached&&this._type==="number"&&(this._platform.BLINK||this._platform.WEBKIT)&&(this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("wheel",this._webkitBlinkWheelListener)}),this._webkitBlinkWheelListenerAttached=!0),this._webkitBlinkWheelListenerAttached&&this._type!=="number"&&(this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener),this._webkitBlinkWheelListenerAttached=!0)}};o.\u0275fac=function(t){return new(t||o)(u(Z),u($),u(Ae,10),u(Le,8),u(Ne,8),u(Pe),u(Ft,10),u(kt),u(L),u($e,8))},o.\u0275dir=G({type:o,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,n){t&1&&f("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(xe("id",n.id)("disabled",n.disabled)("required",n.required),N("name",n.name||null)("readonly",n.readonly&&!n._isNativeSelect||null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),O("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[we([{provide:Ve,useExisting:o}]),ue]});let i=o;return i})(),Et=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=A({type:o}),o.\u0275inj=F({imports:[oe,I,I,Mt,oe]});let i=o;return i})();function Ot(i,o){if(i&1&&(s(0,"div",6),h(1,"stock-recommendation-trends",13),l()),i&2){let r=a();d(),m("symbol",r.stock.symbol)("height",400)}}var Tt=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=w({type:o,selectors:[["expanded-row"]],inputs:{stock:"stock"},standalone:!0,features:[S],decls:16,vars:7,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"company","symbol"],["label","Analysis & Recommedations"],[1,"widget-container"],[3,"symbol"],[1,"rec-trends"],["label","Financials"],["width","100%",3,"symbol"],["label","Profile"],[1,"tradingview-widget-copyright"],["href","https://www.tradingview.com/","rel","noopener nofollow","target","_blank"],[1,"blue-text"],[3,"symbol","height"]],template:function(t,n){t&1&&(s(0,"mat-tab-group",0)(1,"mat-tab",1),h(2,"tv-symbol-overview-widget",2),l(),s(3,"mat-tab",3)(4,"div",4),h(5,"tv-technical-analysis-widget",5),_(6,Ot,2,2,"div",6),l()(),s(7,"mat-tab",7),h(8,"tv-financials-widget",8),l(),s(9,"mat-tab",9),h(10,"tv-symbol-info-widget",5)(11,"tv-profile-widget",8),l()(),s(12,"div",10)(13,"a",11)(14,"span",12),p(15,"Track all markets on TradingView"),l()()()),t&2&&(d(2),m("company",n.stock.shortName)("symbol",n.stock.symbol),d(3),m("symbol",n.stock.symbol),d(),b(n.stock.quoteType==="EQUITY"?6:-1),d(2),m("symbol",n.stock.symbol),d(2),m("symbol",n.stock.symbol),d(),m("symbol",n.stock.symbol))},dependencies:[Me,ze,We,je,gt,vt,Ct,xt,yt,Je],styles:[".widget-container[_ngcontent-%COMP%]{display:flex;align-items:baseline}"]});let i=o;return i})();var Vt=["singleQuoteWidget"],Rt=(()=>{let o=class o{constructor(e){this.tradingviewService=e,this.type="simple"}ngAfterViewInit(){this.params={symbol:this.symbol,width:this.type==="simple"?280:800,height:"auto",colorTheme:this.theme||"light",isTransparent:!0,locale:"en"},this.params=JSON.stringify(this.params);let e=this.tradingviewService.singleQuoteWidget(this.params,this.type);this.singleQuoteWidget.nativeElement.appendChild(e)}};o.\u0275fac=function(t){return new(t||o)(u(Ye))},o.\u0275cmp=w({type:o,selectors:[["tv-single-quote-widget"]],viewQuery:function(t,n){if(t&1&&T(Vt,5),t&2){let c;R(c=H())&&(n.singleQuoteWidget=c.first)}},inputs:{symbol:"symbol",type:"type",theme:"theme"},standalone:!0,features:[S],decls:2,vars:0,consts:[["singleQuoteWidget",""]],template:function(t,n){t&1&&h(0,"div",null,0)},encapsulation:2});let i=o;return i})();var $t=()=>["expandedRow"],Ht=i=>({color:i}),Bt=()=>({color:"black"});function Wt(i,o){if(i&1&&(s(0,"div",7)(1,"div",8),h(2,"ngx-charts-pie-grid",9),l()()),i&2){let r=a();d(2),m("scheme","forest")("animations",!0)("results",r.totalCostChartData)("label","Dollars Invested")}}function jt(i,o){if(i&1&&(s(0,"th",21)(1,"span"),p(2),l()()),i&2){let r=a().$index,e=a(2);d(2),M(e.headers[r])}}function zt(i,o){if(i&1&&h(0,"stock-name-card",25),i&2){let r=a(2).$implicit;m("stock",r)}}function qt(i,o){if(i&1&&h(0,"tv-single-quote-widget",26),i&2){let r=a(2).$implicit;m("symbol",r.symbol)}}function Qt(i,o){if(i&1&&(s(0,"div",23),_(1,zt,1,1,"stock-name-card",25)(2,qt,1,1,"tv-single-quote-widget",26),l()),i&2){let r=a(4);d(),b(r.showTradingviewWidgets?2:1)}}function Ut(i,o){if(i&1){let r=k();s(0,"div",27),f("click",function(){v(r);let t=a().$implicit,n=a(3);return C(n.expandRow(t))}),s(1,"div",28)(2,"span",29),p(3),J(4,"currency"),l(),s(5,"span",30),p(6),l()()()}if(i&2){let r=a().$implicit,e=a(3);d(3),M(X(4,2,e.portfolioHoldings[r.symbol].costAverage)),d(3),ye(" x ",e.portfolioHoldings[r.symbol].shares,"")}}function Gt(i,o){if(i&1){let r=k();s(0,"span",31),f("click",function(){v(r);let t=a().$implicit,n=a(3);return C(n.expandRow(t))}),p(1),J(2,"currency"),l()}if(i&2){let r=a().$implicit,e=a(),t=e.$implicit,n=e.$index,c=a(2);m("ngStyle",Y(4,Ht,c.getCellColor(r,n))),d(),M(X(2,2,r[t]))}}function Zt(i,o){if(i&1){let r=k();s(0,"span",31),f("click",function(){v(r);let t=a().$implicit,n=a(3);return C(n.expandRow(t))}),p(1),l()}if(i&2){let r=a().$implicit,e=a().$index,t=a(2);m("ngStyle",Y(2,Ht,t.getCellColor(r,e))),d(),M(t.cells[e](r))}}function Kt(i,o){if(i&1&&(s(0,"td",22),_(1,Qt,3,1,"div",23)(2,Ut,7,4,"div")(3,Gt,3,6,"span",24)(4,Zt,2,4,"span",24),l()),i&2){let r=a().$index;d(),b(r===0?1:r===1?2:r===5?3:4)}}function Yt(i,o){if(i&1&&(s(0,"td",32)(1,"span"),p(2),l()()),i&2){let r=a().$index,e=a(2);m("ngStyle",K(2,Bt)),d(2),M(e.footerRow[r]())}}function Jt(i,o){if(i&1&&(s(0,"div",11),_(1,jt,3,1,"th",19)(2,Kt,5,1,"td",13)(3,Yt,3,3,"td",20),l()),i&2){let r=o.$implicit,e=o.$index;m("matColumnDef",r)("sticky",e===0)}}function Xt(i,o){if(i&1&&(s(0,"div",33),h(1,"expanded-row",25),l()),i&2){let r=a().$implicit,e=a(2);m("@detailExpand",r===e.expandedRow?"expanded":"collapsed"),d(),m("stock",r)}}function ei(i,o){if(i&1&&(s(0,"td",22),_(1,Xt,2,2,"div",33),l()),i&2){let r=o.$implicit,e=a(2);N("colspan",e.columnDefs.length),d(),b(e.expandedRow&&e.expandedRow.symbol===r.symbol?1:-1)}}function ti(i,o){i&1&&h(0,"tr",34)}function ii(i,o){if(i&1&&h(0,"tr",35),i&2){let r=o.$implicit,e=a(2);O("expanded-stock-row",e.expandedRow===r)("row-clicked",e.expandedRow===r)}}function ni(i,o){i&1&&h(0,"tr",36)}function oi(i,o){i&1&&h(0,"tr",37)}function ri(i,o){i&1&&(s(0,"tr",38)(1,"td",39)(2,"h1",40)(3,"mat-icon"),p(4,"sentiment_very_dissatisfied"),l(),s(5,"span"),p(6,"Wow! Such amazing search, no results!"),l()()()())}function ai(i,o){if(i&1&&(s(0,"table",10),fe(1,Jt,4,2,"div",11,_e),ve(3,12),_(4,ei,2,2,"td",13),Ce(),_(5,ti,1,0,"tr",14)(6,ii,1,4,"tr",15)(7,ni,1,0,"tr",16)(8,oi,1,0,"tr",17)(9,ri,7,0,"tr",18),l()),i&2){let r=a();m("dataSource",r.dataSource),d(),ge(r.columnDefs),d(4),m("matHeaderRowDef",r.columnDefs)("matHeaderRowDefSticky",!0),d(),m("matRowDefColumns",r.columnDefs),d(),m("matRowDefColumns",K(7,$t)),d(),m("matFooterRowDef",r.columnDefs)("matFooterRowDefSticky",!0)}}function si(i,o){if(i&1){let r=k();s(0,"div",41)(1,"mat-slide-toggle",42),f("toggleChange",function(){v(r);let t=a();return C(t.showWidgets())}),s(2,"span"),p(3,"Show Widgets"),l()(),s(4,"mat-form-field",43)(5,"mat-label"),p(6,"Filter"),l(),s(7,"input",44,4),f("keyup",function(t){v(r);let n=a();return C(n.applyFilter(t))}),l()()()}}function li(i,o){if(i&1){let r=k();s(0,"div",45)(1,"div",46)(2,"mat-icon"),p(3,"info"),l(),s(4,"span"),p(5,"Click on a row to expand it. Click on a ticker symbol card to open the ticker data sheet"),l()(),s(6,"div",41)(7,"mat-slide-toggle",42),f("toggleChange",function(){v(r);let t=a();return C(t.showWidgets())}),s(8,"span"),p(9,"Show Widgets"),l()(),s(10,"mat-form-field",43)(11,"mat-label"),p(12,"Filter"),l(),s(13,"input",44,4),f("keyup",function(t){v(r);let n=a();return C(n.applyFilter(t))}),l()()()()}}var hn=(()=>{let o=class o{constructor(e){this.dataService=e,this.showTradingviewWidgets=!1,this.portfolioHoldings={},this.portfolioData={},this.totalCostChartData=[],this.allTotalCostChartData=[],this.dataSource=new ft,this.headers=["Symbol","Average Cost x shares","Total Invested","Market Value","Portfolio %","Unrealized Gain","Unrealized Gain %","Dividend Income","Yield on Cost","Sector","Industry"],this.columnDefs=["symbol","costAverage","totalCost","marketValue","portfolioPercent","unrealizedGain","unrealizedGainPercent","dividendIncome","yieldOnCost","sector","industry"],this.cells=[t=>"",t=>"",t=>`$${t.totalCost}`,t=>`$${t.marketValue.toFixed(2)}`,t=>`${(t.portfolioPercent*100).toFixed(2)}%`,t=>"",t=>`${(t.unrealizedGainPercent*100).toFixed(2)}%`,t=>`$${t.dividendIncome.toFixed(2)}`,t=>(t.yieldOnCost*100).toFixed(2)+"%",t=>t.sector||"N/A",t=>t.industry||"N/A"],this.footerRow=[()=>`Total Holdings: ${this.portfolioHoldings.positionsHeld}`,()=>"",()=>`$${this.portfolioHoldings.totalAmountInvested.toFixed(2)}`,()=>`$${this.portfolioHoldings.marketValue.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.unrealizedGain.toFixed(2)}`,()=>"",()=>`$${this.portfolioHoldings.dividendIncome.toFixed(2)}`,()=>`${(this.portfolioHoldings.yieldOnCost*100).toFixed(2)}%`,()=>"",()=>""]}ngOnInit(){this.portfolioData=this.dataService.portfolioData,this.portfolioHoldings=this.dataService.portfolioHoldings,this.dataSource.data=this.dataService.portfolioSymbols.map(e=>{let t=this.portfolioHoldings[e],n=this.portfolioData[e],c={name:n.symbol,value:t.totalCost,sector:n.profile?.sector||"ETF",shortName:n.shortName,longName:n.longName};return this.allTotalCostChartData.push(c),ce(de({},t),{symbol:n.symbol,sector:n.profile?.sector,industry:n.profile?.industry,rating:n.recommendationKey,longName:n.longName,shortName:n.shortName,quoteType:n.quoteType,website:n.profile?.website||"",marketState:n.marketState,fiftyTwoWeekLow:n.fiftyTwoWeekLow.raw,regularMarketPrice:n.regularMarketPrice.raw,regularMarketChange:n.regularMarketChange.raw,regularMarketChangePercent:n.regularMarketChangePercent.raw,preMarketPrice:n.preMarketPrice.raw,preMarketChangePercent:n.preMarketChangePercent?.raw||0,postMarketPrice:n.postMarketPrice.raw,postMarketChangePercent:n.postMarketChangePercent?.raw||0})}),this.dataSource.filterPredicate=(e,t)=>{let n=[e.symbol,e.shortName,e.longName,e.quoteType,e.sector||"",e.industry||""];for(let c of n)if(c.toLowerCase().includes(t.toLowerCase()))return!0;return!1},this.allTotalCostChartData.sort((e,t)=>t.value-e.value),this.totalCostChartData=this.allTotalCostChartData}ngAfterViewInit(){this.dataSource.sort=this.sort}applyFilter(e){this.totalCostChartData=this.allTotalCostChartData;let t=e.target.value;this.dataSource.filter=t,t?this.totalCostChartData=this.totalCostChartData.filter(n=>n.sector?.toLowerCase().includes(t.toLowerCase())||n.name?.toLowerCase().includes(t.toLowerCase())||n.shortName?.toLowerCase().includes(t.toLowerCase())||n.longName?.toLowerCase().includes(t.toLowerCase())):this.totalCostChartData=this.allTotalCostChartData}getCellColor(e,t){switch(t){case 5:case 6:return e.unrealizedGain>0?re.Gain:re.Lost;case 11:return e.rating==="buy"?"teal":"black";default:return"black"}}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}showWidgets(){this.showTradingviewWidgets=!this.showTradingviewWidgets}};o.\u0275fac=function(t){return new(t||o)(u(Ue))},o.\u0275cmp=w({type:o,selectors:[["portfolio-holdings"]],viewQuery:function(t,n){if(t&1&&(T(j,5),T(W,5)),t&2){let c;R(c=H())&&(n.table=c.first),R(c=H())&&(n.sort=c.first)}},standalone:!0,features:[S],decls:10,vars:3,consts:[["costBasisRef",""],["tableRef",""],["tableActionsRef",""],["tableSubcontentRef",""],["input",""],["title","Cost Basis",3,"mainContentRef"],["title","My Holdings",3,"mainContentRef","subContentRef"],[1,"add-flex"],[1,"chart-container"],[3,"scheme","animations","results","label"],["mat-table","","matSort","","matSortActive","unrealizedGainPercent","matSortDirection","asc","multiTemplateDataRows","",3,"dataSource"],[3,"matColumnDef","sticky"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"expanded-stock-row","row-clicked",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],[1,"single-quote-widget",3,"symbol"],[3,"click"],[1,"cost-average"],["disabled","","value","costAverage"],["disabled","","value","shares"],[3,"click","ngStyle"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"],[1,"no-match"],[1,"table-actions"],[3,"toggleChange"],["appearance","outline"],["matInput","",3,"keyup"],[1,"subcontent-container"],[1,"subcontent-info"]],template:function(t,n){if(t&1&&(_(0,Wt,3,4,"ng-template",null,0,P),h(2,"container-card",5),_(3,ai,10,8,"ng-template",null,1,P)(5,si,9,0,"ng-template",null,2,P)(7,li,15,0,"ng-template",null,3,P),h(9,"container-card",6)),t&2){let c=V(1),g=V(4),x=V(8);d(2),m("mainContentRef",c),d(7),m("mainContentRef",g)("subContentRef",x)}},dependencies:[Ge,ke,Tt,I,Be,Oe,De,Ie,Et,St,Ke,Ze,et,W,Xe,_t,j,it,lt,ot,tt,ct,nt,dt,rt,st,at,mt,pt,ht,ut,be,Qe,qe,wt,Rt],styles:["table[_ngcontent-%COMP%]{margin-top:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:1rem}mat-form-field[_ngcontent-%COMP%]{height:min-content}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:baseline}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.single-quote-widget[_ngcontent-%COMP%]{z-index:1000;height:5.5rem;margin-right:1.25rem}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.no-match[_ngcontent-%COMP%]{display:flex;align-items:center;width:max-content}.row-clicked[_ngcontent-%COMP%]{font-weight:700;background-color:#f8f8ff}.subcontent-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.subcontent-info[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-mdc-form-field[_ngcontent-%COMP%]{flex-direction:row}"],data:{animation:[Se("detailExpand",[te("collapsed",ee({height:"0px",minHeight:"0"})),te("expanded",ee({height:"*"})),Te("expanded <=> collapsed",Ee("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}});let i=o;return i})();export{hn as a};
