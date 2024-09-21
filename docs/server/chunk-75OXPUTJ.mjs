import './polyfills.server.mjs';
import{b as M}from"./chunk-ZQTR3MMC.mjs";import{h as A}from"./chunk-MQ36YNMH.mjs";import{a as _,b as T,f as H}from"./chunk-BUYYADIR.mjs";import{o as D}from"./chunk-PS5NKWHF.mjs";import{T as d}from"./chunk-BOYX4EOR.mjs";import{$a as p,M as v,P as h,Qa as l,T as g,Ya as u,Za as b,_a as c,ab as m,uc as w,vc as C,wa as s,wc as S,xa as f,zb as y}from"./chunk-IN6CXG4C.mjs";var I=(()=>{class o{constructor(t,i){this.http=t,this.dataService=i,this.apiBaseUrl="https://data.alpaca.markets",this.apiKey="PK41CNLBVKS2CHYHD6FQ",this.secretKey="hOurdDodVN23wnjowMOyXYjeaobsmIbXtqhOwSbE",this.httpHeaders=new w().set("APCA-API-KEY-ID",this.apiKey).set("APCA-API-SECRET-KEY",this.secretKey)}getLatestBars(){let t=this.dataService.portfolioSymbols,i=this.apiBaseUrl+"/v2/stocks/bars/latest",a=new C().appendAll({symbols:t.join(","),feed:"iex"}),n={headers:this.httpHeaders,params:a};return this.dataService.wrapHttpCall(i,n)}getNews(t,i,a,n){let e=this.apiBaseUrl+"/v1beta1/alpaca/fetch/news/",P=new C().appendAll({symbols:t.join(","),start:i,end:a,limit:n}),x={headers:this.httpHeaders,params:P};return this.dataService.wrapHttpCall(e,x)}static{this.\u0275fac=function(i){return new(i||o)(h(S),h(d))}}static{this.\u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var G=(o,r)=>r.epochGradeDate,O=(o,r)=>r.index;function Y(o,r){if(o&1&&m(0,"info-card",6)(1,"div",7),o&2){let t=r.$implicit;l("value",t.fromGrade+" to "+t.toGrade)("subtitle",t.symbol)("subtitleChip",!0)("additionalInfo",t.firm)("date",(t.epochGradeDate*1e3).toString())("icon",t.icon)("color",t.color)}}function K(o,r){if(o&1&&m(0,"info-card",6)(1,"div",7),o&2){let t=r.$implicit;l("value",t.shares.fmt+" shares. "+t.transactionText)("subtitle",t.symbol)("subtitleChip",!0)("additionalInfo",t.filerName+", "+t.filerRelation)("date",(t.startDate.raw*1e3).toString())("icon",t.icon)("color",t.color)}}var J=(()=>{class o{constructor(t,i){this.alpacaApiService=t,this.dataService=i,this.selectedChart=1,this.gradingHistory=[],this.insiderActivities=[]}ngOnInit(){this.dataService.portfolioDataArray.forEach(t=>{let i={up:"thumb_up",down:"thumb_down",main:"thumbs_up_down",reit:"thumbs_up_down"};if(t.quoteType==="EQUITY"){let a=Object.values(t.upgradeDowngradeHistory).filter(e=>new Date(e.epochGradeDate*1e3).getFullYear()===new Date().getFullYear()).map(e=>(e.symbol=t.symbol,e.icon=i[e.action],e.action==="up"&&(e.color="teal"),e.action==="down"&&(e.color="chocolate"),e));this.gradingHistory.push(...a);let n=t.insiderTransactions;n.length>0&&this.insiderActivities.push(...n.filter(e=>new Date(e.startDate.raw*1e3).getFullYear()===new Date().getFullYear()&&(e.transactionText.startsWith("Purchase")||e.transactionText.startsWith("Sale"))).map(e=>(e.symbol=t.symbol,e.transactionText.startsWith("Purchase")?(e.icon="sentiment_very_satisfied",e.color="teal"):e.transactionText.startsWith("Sale")&&(e.icon="sentiment_very_dissatisfied",e.color="chocolate"),e)))}}),this.gradingHistory.sort((t,i)=>i.epochGradeDate-t.epochGradeDate),this.insiderActivities.sort((t,i)=>i.startDate.raw-t.startDate.raw)}selectChart(t){this.selectedChart=t}static{this.\u0275fac=function(i){return new(i||o)(f(I),f(d))}}static{this.\u0275cmp=g({type:o,selectors:[["app-portfolio-main"]],standalone:!0,features:[y],decls:12,vars:1,consts:[["mat-align-tabs","center"],["label","Quotes"],[1,"add-margin"],[3,"expandWidget"],["label","Grading History"],["label","Insider Activities"],[3,"value","subtitle","subtitleChip","additionalInfo","date","icon","color"],[1,"spacer"]],template:function(i,a){i&1&&(c(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"section",2),m(3,"portfolio-quotes",3),p()(),c(4,"mat-tab",4)(5,"section",2),u(6,Y,2,7,null,null,G),p()(),c(8,"mat-tab",5)(9,"section",2),u(10,K,2,7,null,null,O),p()()()),i&2&&(s(3),l("expandWidget",!0),s(3),b(a.gradingHistory),s(4),b(a.insiderActivities))},dependencies:[A,D,H,_,T,M],styles:[".grading-history-container[_ngcontent-%COMP%]{display:flex}.spacer[_ngcontent-%COMP%]{height:.5rem}info-card[_ngcontent-%COMP%]{min-width:fit-content}"]})}}return o})();export{J as a};
