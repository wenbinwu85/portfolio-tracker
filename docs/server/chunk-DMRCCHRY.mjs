import './polyfills.server.mjs';
import{Aa as Ge,Ba as D,C as xe,Da as fe,Ea as pe,Gc as me,Ha as U,Hc as ot,I as je,Ia as _,Ic as it,Ja as Xe,Jc as E,Ka as Je,La as Ke,Ma as We,Na as Ze,Oa as Ye,Pa as qe,Qa as C,Rc as te,S as Fe,U as Ue,V as A,Wa as $,X as T,_ as R,aa as u,ab as Qe,ad as at,ba as v,c as de,cb as He,db as x,dd as G,ea as V,gd as ne,ia as ee,ja as _e,k as ke,ka as Be,l as H,la as ze,mc as et,nc as ye,oc as tt,p as z,ta as ue,va as Ve,vc as nt,wc as rt,ya as $e,yc as st,z as Ce,za as he}from"./chunk-JF6NDZL2.mjs";import{a as F,b as Se,d as Le,h as le}from"./chunk-5XUXGTUW.mjs";var J=class{},K=class{},M=class r{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let t=s.indexOf(":");if(t>0){let n=s.slice(0,t),o=n.toLowerCase(),a=s.slice(t+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,t)=>{this.setHeaderEntries(t,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,t])=>{this.setHeaderEntries(s,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new r;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,s);let n=(e.op==="a"?this.headers.get(s):void 0)||[];n.push(...t),this.headers.set(s,n);break;case"d":let o=e.value;if(!o)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(e,s){let t=(Array.isArray(s)?s:[s]).map(o=>o.toString()),n=e.toLowerCase();this.headers.set(n,t),this.maybeSetNormalizedName(e,n)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var ve=class{encodeKey(e){return ct(e)}encodeValue(e){return ct(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function _t(r,e){let s=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(n=>{let o=n.indexOf("="),[a,i]=o==-1?[e.decodeKey(n),""]:[e.decodeKey(n.slice(0,o)),e.decodeValue(n.slice(o+1))],l=s.get(a)||[];l.push(i),s.set(a,l)}),s}var Bt=/%(\d[a-f0-9])/gi,zt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ct(r){return encodeURIComponent(r).replace(Bt,(e,s)=>zt[s]??e)}function re(r){return`${r}`}var P=class r{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new ve,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=_t(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let t=e.fromObject[s],n=Array.isArray(t)?t.map(re):[re(t)];this.map.set(s,n)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(t=>{let n=e[t];Array.isArray(n)?n.forEach(o=>{s.push({param:t,value:o,op:"a"})}):s.push({param:t,value:n,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(t=>s+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new r({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(re(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],n=t.indexOf(re(e.value));n!==-1&&t.splice(n,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Te=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Vt(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function lt(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function dt(r){return typeof Blob<"u"&&r instanceof Blob}function ut(r){return typeof FormData<"u"&&r instanceof FormData}function $t(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var X=class r{constructor(e,s,t,n){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Vt(this.method)||n?(this.body=t!==void 0?t:null,o=n):o=t,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new M,this.context??=new Te,!this.params)this.params=new P,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let i=s.indexOf("?"),l=i===-1?"?":i<s.length-1?"&":"";this.urlWithParams=s+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||lt(this.body)||dt(this.body)||ut(this.body)||$t(this.body)?this.body:this.body instanceof P?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ut(this.body)?null:dt(this.body)?this.body.type||null:lt(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof P?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,t=e.url||this.url,n=e.responseType||this.responseType,o=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,i=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,c=e.headers||this.headers,d=e.params||this.params,p=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((m,w)=>m.set(w,e.setHeaders[w]),c)),e.setParams&&(d=Object.keys(e.setParams).reduce((m,w)=>m.set(w,e.setParams[w]),d)),new r(s,t,a,{params:d,headers:c,context:p,reportProgress:l,responseType:n,withCredentials:i,transferCache:o})}},I=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(I||{}),W=class{constructor(e,s=200,t="OK"){this.headers=e.headers||new M,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},oe=class r extends W{constructor(e={}){super(e),this.type=I.ResponseHeader}clone(e={}){return new r({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},j=class r extends W{constructor(e={}){super(e),this.type=I.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new r({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},N=class extends W{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Rt=200,Gt=204;function ge(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Xt=(()=>{let e=class e{constructor(t){this.handler=t}request(t,n,o={}){let a;if(t instanceof X)a=t;else{let c;o.headers instanceof M?c=o.headers:c=new M(o.headers);let d;o.params&&(o.params instanceof P?d=o.params:d=new P({fromObject:o.params})),a=new X(t,n,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:d,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=H(a).pipe(xe(c=>this.handler.handle(c)));if(t instanceof X||o.observe==="events")return i;let l=i.pipe(Ce(c=>c instanceof j));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(z(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(z(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(z(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(z(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new P().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,o={}){return this.request("PATCH",t,ge(o,n))}post(t,n,o={}){return this.request("POST",t,ge(o,n))}put(t,n,o={}){return this.request("PUT",t,ge(o,n))}};e.\u0275fac=function(n){return new(n||e)(u(J))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),Jt=/^\)\]\}',?\n/,Kt="X-Request-URL";function ht(r){if(r.url)return r.url;let e=Kt.toLocaleLowerCase();return r.headers.get(e)}var Ee=(()=>{let e=class e{constructor(){this.fetchImpl=v(we,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=v(x)}handle(t){return new de(n=>{let o=new AbortController;return this.doRequest(t,o.signal,n).then(Re,a=>n.error(new N({error:a}))),()=>o.abort()})}doRequest(t,n,o){return le(this,null,function*(){let a=this.createRequestInit(t),i;try{let y=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,F({signal:n},a)));Wt(y),o.next({type:I.Sent}),i=yield y}catch(y){o.error(new N({error:y,status:y.status??0,statusText:y.statusText,url:t.urlWithParams,headers:y.headers}));return}let l=new M(i.headers),c=i.statusText,d=ht(i)??t.urlWithParams,p=i.status,m=null;if(t.reportProgress&&o.next(new oe({headers:l,status:p,statusText:c,url:d})),i.body){let y=i.headers.get("content-length"),S=[],h=i.body.getReader(),f=0,b,O,g=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>le(this,null,function*(){for(;;){let{done:k,value:B}=yield h.read();if(k)break;if(S.push(B),f+=B.length,t.reportProgress){O=t.responseType==="text"?(O??"")+(b??=new TextDecoder).decode(B,{stream:!0}):void 0;let Ie=()=>o.next({type:I.DownloadProgress,total:y?+y:void 0,loaded:f,partialText:O});g?g.run(Ie):Ie()}}}));let L=this.concatChunks(S,f);try{let k=i.headers.get("Content-Type")??"";m=this.parseBody(t,L,k)}catch(k){o.error(new N({error:k,headers:new M(i.headers),status:i.status,statusText:i.statusText,url:ht(i)??t.urlWithParams}));return}}p===0&&(p=m?Rt:0),p>=200&&p<300?(o.next(new j({body:m,headers:l,status:p,statusText:c,url:d})),o.complete()):o.error(new N({error:m,headers:l,status:p,statusText:c,url:d}))})}parseBody(t,n,o){switch(t.responseType){case"json":let a=new TextDecoder().decode(n).replace(Jt,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:o});case"arraybuffer":return n.buffer}}createRequestInit(t){let n={},o=t.withCredentials?"include":void 0;if(t.headers.forEach((a,i)=>n[a]=i.join(",")),t.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let a=t.detectContentTypeHeader();a!==null&&(n["Content-Type"]=a)}return{body:t.serializeBody(),method:t.method,headers:n,credentials:o}}concatChunks(t,n){let o=new Uint8Array(n),a=0;for(let i of t)o.set(i,a),a+=i.length;return o}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),we=class{};function Re(){}function Wt(r){r.then(Re,Re)}function Zt(r,e){return e(r)}function Yt(r,e,s){return(t,n)=>ze(s,()=>e(t,o=>r(o,n)))}var bt=new R(""),Mt=new R(""),qt=new R("",{providedIn:"root",factory:()=>!0});var ft=(()=>{let e=class e extends J{constructor(t,n){super(),this.backend=t,this.injector=n,this.chain=null,this.pendingTasks=v(Ve),this.contributeToStability=v(qt)}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(bt),...this.injector.get(Mt,[])]));this.chain=n.reduceRight((o,a)=>Yt(o,a,this.injector),Zt)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(je(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}};e.\u0275fac=function(n){return new(n||e)(u(K),u(Be))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})();var Qt=/^\)\]\}',?\n/;function Ht(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var pt=(()=>{let e=class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new A(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?ke(n.\u0275loadImpl()):H(null)).pipe(Fe(()=>new de(a=>{let i=n.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((h,f)=>i.setRequestHeader(h,f.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let h=t.detectContentTypeHeader();h!==null&&i.setRequestHeader("Content-Type",h)}if(t.responseType){let h=t.responseType.toLowerCase();i.responseType=h!=="json"?h:"text"}let l=t.serializeBody(),c=null,d=()=>{if(c!==null)return c;let h=i.statusText||"OK",f=new M(i.getAllResponseHeaders()),b=Ht(i)||t.url;return c=new oe({headers:f,status:i.status,statusText:h,url:b}),c},p=()=>{let{headers:h,status:f,statusText:b,url:O}=d(),g=null;f!==Gt&&(g=typeof i.response>"u"?i.responseText:i.response),f===0&&(f=g?Rt:0);let L=f>=200&&f<300;if(t.responseType==="json"&&typeof g=="string"){let k=g;g=g.replace(Qt,"");try{g=g!==""?JSON.parse(g):null}catch(B){g=k,L&&(L=!1,g={error:B,text:g})}}L?(a.next(new j({body:g,headers:h,status:f,statusText:b,url:O||void 0})),a.complete()):a.error(new N({error:g,headers:h,status:f,statusText:b,url:O||void 0}))},m=h=>{let{url:f}=d(),b=new N({error:h,status:i.status||0,statusText:i.statusText||"Unknown Error",url:f||void 0});a.error(b)},w=!1,y=h=>{w||(a.next(d()),w=!0);let f={type:I.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),t.responseType==="text"&&i.responseText&&(f.partialText=i.responseText),a.next(f)},S=h=>{let f={type:I.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),a.next(f)};return i.addEventListener("load",p),i.addEventListener("error",m),i.addEventListener("timeout",m),i.addEventListener("abort",m),t.reportProgress&&(i.addEventListener("progress",y),l!==null&&i.upload&&i.upload.addEventListener("progress",S)),i.send(l),a.next({type:I.Sent}),()=>{i.removeEventListener("error",m),i.removeEventListener("abort",m),i.removeEventListener("load",p),i.removeEventListener("timeout",m),t.reportProgress&&(i.removeEventListener("progress",y),l!==null&&i.upload&&i.upload.removeEventListener("progress",S)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(n){return new(n||e)(u(ne))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),At=new R(""),en="XSRF-TOKEN",tn=new R("",{providedIn:"root",factory:()=>en}),nn="X-XSRF-TOKEN",rn=new R("",{providedIn:"root",factory:()=>nn}),ie=class{},sn=(()=>{let e=class e{constructor(t,n,o){this.doc=t,this.platform=n,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=te(t,this.cookieName),this.lastCookieString=t),this.lastToken}};e.\u0275fac=function(n){return new(n||e)(u(E),u(D),u(tn))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})();function on(r,e){let s=r.url.toLowerCase();if(!v(At)||r.method==="GET"||r.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return e(r);let t=v(ie).getToken(),n=v(rn);return t!=null&&!r.headers.has(n)&&(r=r.clone({headers:r.headers.set(n,t)})),e(r)}var Ot=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(Ot||{});function an(r,e){return{\u0275kind:r,\u0275providers:e}}function Yn(...r){let e=[Xt,pt,ft,{provide:J,useExisting:ft},{provide:K,useFactory:()=>v(Ee,{optional:!0})??v(pt)},{provide:bt,useValue:on,multi:!0},{provide:At,useValue:!0},{provide:ie,useClass:sn}];for(let s of r)e.push(...s.\u0275providers);return ee(e)}function qn(){return an(Ot.Fetch,[Ee,{provide:K,useExisting:Ee}])}var cn=new R(""),yt="b",mt="h",gt="s",vt="st",Tt="u",Et="rt",se=new R(""),ln=["GET","HEAD"];function dn(r,e){let w=v(se),{isCacheActive:s}=w,t=Le(w,["isCacheActive"]),{transferCache:n,method:o}=r;if(!s||n===!1||o==="POST"&&!t.includePostRequests&&!n||o!=="POST"&&!ln.includes(o)||!t.includeRequestsWithAuthHeaders&&un(r)||t.filter?.(r)===!1)return e(r);let a=v(pe),i=v(cn,{optional:!0}),l=G(v(D));if(i&&!l)throw new A(2803,!1);let c=l&&i?yn(r.url,i):r.url,d=fn(r,c),p=a.get(d,null),m=t.includeHeaders;if(typeof n=="object"&&n.includeHeaders&&(m=n.includeHeaders),p){let{[yt]:y,[Et]:S,[mt]:h,[gt]:f,[vt]:b,[Tt]:O}=p,g=y;switch(S){case"arraybuffer":g=new TextEncoder().encode(y).buffer;break;case"blob":g=new Blob([y]);break}let L=new M(h);return H(new j({body:g,headers:L,status:f,statusText:b,url:O}))}return e(r).pipe(Ue(y=>{y instanceof j&&l&&a.set(d,{[yt]:y.body,[mt]:hn(y.headers,m),[gt]:y.status,[vt]:y.statusText,[Tt]:c,[Et]:r.responseType})}))}function un(r){return r.headers.has("authorization")||r.headers.has("proxy-authorization")}function hn(r,e){if(!e)return{};let s={};for(let t of e){let n=r.getAll(t);n!==null&&(s[t]=n)}return s}function wt(r){return[...r.keys()].sort().map(e=>`${e}=${r.getAll(e)}`).join("&")}function fn(r,e){let{params:s,method:t,responseType:n}=r,o=wt(s),a=r.serializeBody();a instanceof URLSearchParams?a=wt(a):typeof a!="string"&&(a="");let i=[t,n,e,a,o].join("|"),l=pn(i);return l}function pn(r){let e=0;for(let s of r)e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Dt(r){return[{provide:se,useFactory:()=>(He("NgHttpTransferCache"),F({isCacheActive:!0},r))},{provide:Mt,useValue:dn,multi:!0,deps:[pe,se]},{provide:et,multi:!0,useFactory:()=>{let e=v(ye),s=v(se);return()=>{tt(e).then(()=>{s.isCacheActive=!1})}}}]}function yn(r,e){let s=new URL(r,"resolve://").origin,t=e[s];return t?r.replace(s,t):r}var Ae=class extends it{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Oe=class r extends Ae{static makeCurrent(){ot(new r)}onAndCancel(e,s,t){return e.addEventListener(s,t),()=>{e.removeEventListener(s,t)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=gn();return s==null?null:vn(s)}resetBaseElement(){Z=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return te(document.cookie,e)}},Z=null;function gn(){return Z=Z||document.querySelector("base"),Z?Z.getAttribute("href"):null}function vn(r){return new URL(r,document.baseURI).pathname}var Tn=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),ae=new R(""),St=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,o){return this._findPluginFor(n).addEventListener(t,n,o)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(a=>a.supports(t)),!n)throw new A(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(u(ae),u(x))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),Y=class{constructor(e){this._doc=e}},be="ng-app-id",Lt=(()=>{let e=class e{constructor(t,n,o,a={}){this.doc=t,this.appId=n,this.nonce=o,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=G(a),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(o=>o.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${be}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(o=>{o.textContent!=null&&n.set(o.textContent,o)}),n}return null}changeUsageCount(t,n){let o=this.styleRef;if(o.has(t)){let a=o.get(t);return a.usage+=n,a.usage}return o.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let o=this.styleNodesInDOM,a=o?.get(n);if(a?.parentNode===t)return o.delete(n),a.removeAttribute(be),a;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=n,this.platformIsServer&&i.setAttribute(be,this.appId),t.appendChild(i),i}}addStyleToHost(t,n){let o=this.getStyleElement(t,n),a=this.styleRef,i=a.get(n)?.elements;i?i.push(o):a.set(n,{elements:[o],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(u(E),u(he),u(fe,8),u(D))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),Me={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Pe=/%COMP%/g,kt="%COMP%",En=`_nghost-${kt}`,wn=`_ngcontent-${kt}`,Rn=!0,bn=new R("",{providedIn:"root",factory:()=>Rn});function Mn(r){return wn.replace(Pe,r)}function An(r){return En.replace(Pe,r)}function Ct(r,e){return e.map(s=>s.replace(Pe,r))}var Nt=(()=>{let e=class e{constructor(t,n,o,a,i,l,c,d=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=i,this.platformId=l,this.ngZone=c,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=G(l),this.defaultRenderer=new q(t,i,c,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===V.ShadowDom&&(n=Se(F({},n),{encapsulation:V.Emulated}));let o=this.getOrCreateRenderer(t,n);return o instanceof ce?o.applyToHost(t):o instanceof Q&&o.applyStyles(),o}getOrCreateRenderer(t,n){let o=this.rendererByCompId,a=o.get(n.id);if(!a){let i=this.doc,l=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(n.encapsulation){case V.Emulated:a=new ce(c,d,n,this.appId,p,i,l,m);break;case V.ShadowDom:return new De(c,d,t,n,i,l,this.nonce,m);default:a=new Q(c,d,n,p,i,l,m);break}o.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(u(St),u(Lt),u(he),u(bn),u(E),u(D),u(x),u(fe))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),q=class{constructor(e,s,t,n){this.eventManager=e,this.doc=s,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(Me[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(Pt(e)?e.content:e).appendChild(s)}insertBefore(e,s,t){e&&(Pt(e)?e.content:e).insertBefore(s,t)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new A(-5104,!1);return s||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,t,n){if(n){s=n+":"+s;let o=Me[n];o?e.setAttributeNS(o,s,t):e.setAttribute(s,t)}else e.setAttribute(s,t)}removeAttribute(e,s,t){if(t){let n=Me[t];n?e.removeAttributeNS(n,s):e.removeAttribute(`${t}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,t,n){n&($.DashCase|$.Important)?e.style.setProperty(s,t,n&$.Important?"important":""):e.style[s]=t}removeStyle(e,s,t){t&$.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,t){e!=null&&(e[s]=t)}setValue(e,s){e.nodeValue=s}listen(e,s,t){if(typeof e=="string"&&(e=me().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(t))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function Pt(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var De=class extends q{constructor(e,s,t,n,o,a,i,l){super(e,o,a,l),this.sharedStylesHost=s,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Ct(n.id,n.styles);for(let d of c){let p=document.createElement("style");i&&p.setAttribute("nonce",i),p.textContent=d,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,t){return super.insertBefore(this.nodeOrShadowRoot(e),s,t)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Q=class extends q{constructor(e,s,t,n,o,a,i,l){super(e,o,a,i),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=n,this.styles=l?Ct(l,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},ce=class extends Q{constructor(e,s,t,n,o,a,i,l){let c=n+"-"+t.id;super(e,s,t,o,a,i,l,c),this.contentAttr=Mn(c),this.hostAttr=An(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let t=super.createElement(e,s);return super.setAttribute(t,this.contentAttr,""),t}},On=(()=>{let e=class e extends Y{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,o){return t.addEventListener(n,o,!1),()=>this.removeEventListener(t,n,o)}removeEventListener(t,n,o){return t.removeEventListener(n,o)}};e.\u0275fac=function(n){return new(n||e)(u(E))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),Dn=(()=>{let e=class e extends Y{constructor(t){super(t),this.delegate=v(rt,{optional:!0})}supports(t){return this.delegate?this.delegate.supports(t):!1}addEventListener(t,n,o){return this.delegate.addEventListener(t,n,o)}removeEventListener(t,n,o){return this.delegate.removeEventListener(t,n,o)}};e.\u0275fac=function(n){return new(n||e)(u(E))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),It=["alt","control","meta","shift"],Nn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Pn={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},In=(()=>{let e=class e extends Y{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,o){let a=e.parseEventName(n),i=e.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>me().onAndCancel(t,a.domEventName,i))}static parseEventName(t){let n=t.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let a=e._normalizeKey(n.pop()),i="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),i="code."),It.forEach(d=>{let p=n.indexOf(d);p>-1&&(n.splice(p,1),i+=d+".")}),i+=a,n.length!=0||a.length===0)return null;let c={};return c.domEventName=o,c.fullKey=i,c}static matchEventFullKeyCode(t,n){let o=Nn[t.key]||t.key,a="";return n.indexOf("code.")>-1&&(o=t.code,a="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),It.forEach(i=>{if(i!==o){let l=Pn[i];l(t)&&(a+=i+".")}}),a+=o,a===n)}static eventCallback(t,n,o){return a=>{e.matchEventFullKeyCode(a,t)&&o.runGuarded(()=>n(a))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(u(E))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})();function br(r,e){return nt(F({rootComponent:r},Sn(e)))}function Sn(r){return{appProviders:[...jn,...r?.providers??[]],platformProviders:xn}}function Ln(){Oe.makeCurrent()}function kn(){return new ue}function Cn(){return $e(document),document}var xn=[{provide:D,useValue:at},{provide:Ge,useValue:Ln,multi:!0},{provide:E,useFactory:Cn,deps:[]}];var jn=[{provide:_e,useValue:"root"},{provide:ue,useFactory:kn,deps:[]},{provide:ae,useClass:On,multi:!0,deps:[E,x,D]},{provide:ae,useClass:In,multi:!0,deps:[E]},{provide:ae,useClass:Dn,multi:!0},Nt,Lt,St,{provide:Qe,useExisting:Nt},{provide:ne,useClass:Tn,deps:[]},[]];var Mr=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(u(E))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var Fn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=T({token:e,factory:function(n){let o=null;return n?o=new(n||e):o=u(Un),o},providedIn:"root"});let r=e;return r})(),Un=(()=>{let e=class e extends Fn{constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case C.NONE:return n;case C.HTML:return _(n,"HTML")?U(n):qe(this._doc,String(n)).toString();case C.STYLE:return _(n,"Style")?U(n):n;case C.SCRIPT:if(_(n,"Script"))return U(n);throw new A(5200,!1);case C.URL:return _(n,"URL")?U(n):Ye(String(n));case C.RESOURCE_URL:if(_(n,"ResourceURL"))return U(n);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(t){return Xe(t)}bypassSecurityTrustStyle(t){return Je(t)}bypassSecurityTrustScript(t){return Ke(t)}bypassSecurityTrustUrl(t){return We(t)}bypassSecurityTrustResourceUrl(t){return Ze(t)}};e.\u0275fac=function(n){return new(n||e)(u(E))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),Ne=function(r){return r[r.NoHttpTransferCache=0]="NoHttpTransferCache",r[r.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",r[r.I18nSupport=2]="I18nSupport",r[r.EventReplay=3]="EventReplay",r}(Ne||{});function Ar(...r){let e=[],s=new Set,t=s.has(Ne.HttpTransferCacheOptions);for(let{\u0275providers:n,\u0275kind:o}of r)s.add(o),n.length&&e.push(n);return ee([[],st(),s.has(Ne.NoHttpTransferCache)||t?[]:Dt({}),e])}export{M as a,P as b,Xt as c,Mt as d,Yn as e,qn as f,Oe as g,ae as h,Y as i,Nt as j,br as k,Mr as l,Fn as m,Ar as n};
