import{b as $}from"./chunk-3GN2QV4S.js";import{a as Y,b as F,f as G}from"./chunk-SM5D7HCO.js";import{a as K}from"./chunk-DFHHGORS.js";import{k as B}from"./chunk-FSWIBED3.js";import{g as N,h as U,i as A}from"./chunk-2OYNNDPY.js";import{g as y}from"./chunk-XMSE4Q72.js";import{a as V,b as P,c as X}from"./chunk-E5M4GV6I.js";import{f as j}from"./chunk-KA7RJ2H5.js";import{$b as O,Ab as s,B as S,Bb as c,Cb as p,Gb as k,Jb as C,Lb as d,M as T,Vb as v,Wb as u,X as I,Xa as r,Ya as b,aa as w,fa as D,hc as E,l as M,na as h,oa as _,ob as x,qb as a,vb as f,yb as H,zb as R}from"./chunk-3MUY6BAD.js";var q=(()=>{let n=class n{constructor(i,t){this.http=i,this.dataService=t,this.apiBaseUrl="https://data.alpaca.markets",this.apiKey="PK41CNLBVKS2CHYHD6FQ",this.secretKey="hOurdDodVN23wnjowMOyXYjeaobsmIbXtqhOwSbE",this.httpHeaders=new V().set("APCA-API-KEY-ID",this.apiKey).set("APCA-API-SECRET-KEY",this.secretKey)}error(i){let t=i.error instanceof ErrorEvent?i.error.message:`Error Code: ${i.status} Message: ${i.message}`;return M({data:[],message:t,status:500})}wrapHttpCall(i,t){return this.http.get(i,t).pipe(T(2),S(this.error))}getLatestBars(){let i=this.dataService.portfolioSymbols,t=this.apiBaseUrl+"/v2/stocks/bars/latest",l=new P().appendAll({symbols:i.join(","),feed:"iex"}),m={headers:this.httpHeaders,params:l};return this.wrapHttpCall(t,m)}getNews(i,t,l,m){let g=this.apiBaseUrl+"/v1beta1/alpaca/fetch/news/",J=new P().appendAll({symbols:i.join(","),start:t,end:l,limit:m}),L={headers:this.httpHeaders,params:J};return this.wrapHttpCall(g,L)}};n.\u0275fac=function(t){return new(t||n)(w(X),w(y))},n.\u0275prov=I({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var Z=(e,n)=>n.epochGradeDate;function tt(e,n){if(e&1){let o=k();s(0,"div",10)(1,"mat-chip-listbox")(2,"mat-chip-option",11),C("click",function(){h(o);let t=d();return _(t.selectChart(1))}),u(3,"S&P | DJI"),c(),s(4,"mat-chip-option",12),C("click",function(){h(o);let t=d();return _(t.selectChart(2))}),u(5,"Nasdaq | Russell"),c(),s(6,"mat-chip-option",12),C("click",function(){h(o);let t=d();return _(t.selectChart(3))}),u(7,"VIX"),c(),s(8,"mat-chip-option",12),C("click",function(){h(o);let t=d();return _(t.selectChart(4))}),u(9,"Cryptos"),c(),s(10,"mat-chip-option",12),C("click",function(){h(o);let t=d();return _(t.selectChart(5))}),u(11,"Forex"),c()()()}}function et(e,n){e&1&&p(0,"wallmine-chart",14)(1,"wallmine-chart",14),e&2&&(a("symbol","INDEX:GSPC")("width","50%"),r(),a("symbol","INDEX:DJI")("width","50%"))}function it(e,n){e&1&&p(0,"wallmine-chart",14)(1,"wallmine-chart",14),e&2&&(a("symbol","INDEX:IXIC")("width","50%"),r(),a("symbol","INDEX:RUT")("width","50%"))}function nt(e,n){e&1&&p(0,"wallmine-chart",13),e&2&&a("symbol","INDEX:VIX")}function ot(e,n){e&1&&p(0,"wallmine-chart",14)(1,"wallmine-chart",14)(2,"wallmine-chart",14),e&2&&(a("symbol","CRYPTO:BTC")("width","33.33%"),r(),a("symbol","CRYPTO:ETH")("width","33.33%"),r(),a("symbol","CRYPTO:DOGE")("width","33.33%"))}function at(e,n){e&1&&p(0,"wallmine-chart",14)(1,"wallmine-chart",14)(2,"wallmine-chart",14),e&2&&(a("symbol","FOREX:USDCNY")("width","33.33%"),r(),a("symbol","FOREX:USDJPY")("width","33.33%"),r(),a("symbol","FOREX:USDEUR")("width","33.33%"))}function rt(e,n){if(e&1&&x(0,et,2,4)(1,it,2,4)(2,nt,1,1,"wallmine-chart",13)(3,ot,3,6)(4,at,3,6),e&2){let o=d();f(o.selectedChart===1?0:-1),r(),f(o.selectedChart===2?1:-1),r(),f(o.selectedChart===3?2:-1),r(),f(o.selectedChart===4?3:-1),r(),f(o.selectedChart===5?4:-1)}}function lt(e,n){if(e&1&&p(0,"info-card",7),e&2){let o=n.$implicit;a("value",o.fromGrade+" --> "+o.toGrade)("subtitle",o.symbol)("subtitleChip",!0)("additionalInfo",o.firm)("date",(o.epochGradeDate*1e3).toString())("icon",o.icon)}}var gt=(()=>{let n=class n{constructor(i,t){this.alpacaApiService=i,this.dataService=t,this.selectedChart=1,this.gradingHistory=[]}ngOnInit(){this.dataService.portfolioDataArray.forEach(i=>{if(i.quoteType==="EQUITY"){let t=Object.values(i.upgradeDowngradeHistory).map(l=>{let m={up:"thumb_up",down:"thumb_down",main:"thumbs_up_down",reit:"thumbs_up_down"};return l.symbol=i.symbol,l.icon=m[l.action],l});this.gradingHistory.push(...t)}}),this.gradingHistory.sort((i,t)=>t.epochGradeDate-i.epochGradeDate),this.gradingHistory=this.gradingHistory.slice(0,50),console.table(this.gradingHistory)}selectChart(i){this.selectedChart=i}};n.\u0275fac=function(t){return new(t||n)(b(q),b(y))},n.\u0275cmp=D({type:n,selectors:[["app-portfolio-main"]],standalone:!0,features:[O],decls:14,vars:3,consts:[["titleContentRef",""],["indexCharts",""],[1,"add-margin"],["title","Market Charts",3,"mainContentRef","titleContentRef"],["mat-align-tabs","center"],["label","Portfolio News"],[1,"add-margin","grading-history-container"],[3,"value","subtitle","subtitleChip","additionalInfo","date","icon"],["label","Portfolio Price Change"],[3,"expandWidget"],[1,"add-flex"],["selected","",3,"click"],[3,"click"],[3,"symbol"],[3,"symbol","width"]],template:function(t,l){if(t&1&&(x(0,tt,12,0,"ng-template",null,0,E)(2,rt,5,5,"ng-template",null,1,E),s(4,"section",2),p(5,"container-card",3),c(),s(6,"mat-tab-group",4)(7,"mat-tab",5)(8,"section",6),H(9,lt,1,6,"info-card",7,Z),c()(),s(11,"mat-tab",8)(12,"section",2),p(13,"stock-price-movement-charts",9),c()()()),t&2){let m=v(1),g=v(3);r(5),a("mainContentRef",g)("titleContentRef",m),r(4),R(l.gradingHistory),r(4),a("expandWidget",!0)}},dependencies:[j,B,A,U,N,G,Y,F,$,K],styles:[".grading-history-container[_ngcontent-%COMP%]{display:flex}info-card[_ngcontent-%COMP%]{min-width:fit-content}"]});let e=n;return e})();export{gt as a};
