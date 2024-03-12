import './polyfills.server.mjs';
import{A as m,B as l,C as w}from"./chunk-6YJCKQYO.mjs";import{C as d,N as g,g as p,m as c,ma as u,w as f,wa as b}from"./chunk-D5BORNAZ.mjs";import{a as n,b as r}from"./chunk-VVCT4QZE.mjs";var y=(()=>{let a=class a{constructor(t){this.http=t,this.httpOptions={headers:new m().set("content-type","application/json").set("Access-Control-Allow-Origin","*")},this.backendDataPath="../../../backend/data/",this.backendUrl="http://127.0.0.1:5000",this.portfolioTechnicalInsights={},this.isLoadingData=new p(!1),this.updatePortfolioData(!1)}error(t){let s=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status} Message: ${t.message}`;return c({data:[],message:s,status:500})}wrapHttpCall(t,s=this.httpOptions){return this.http.get(t,s).pipe(g(2),d(this.error))}updatePortfolioData(t){this.isLoadingData.next(!0),console.log("loading true..."),f([this.getPortfolioData(t),this.getPortfolioHoldings()]).subscribe(([s,o])=>{this.portfolioData=s,this.portfolioHoldings=o,this.portfolioSymbols=Object.keys(this.portfolioData),this.isLoadingData.next(!1),t&&location.reload(),console.log("--- sanity check ---"),console.table(Object.entries(this.portfolioHoldings))})}updatePortfolioTechnicalInsights(){this.isLoadingData.next(!0),this.portfolioSymbols.forEach(t=>{this.getTechnicalInsights(t).subscribe(s=>{this.portfolioTechnicalInsights[t]=s,Object.keys(this.portfolioTechnicalInsights).length===this.portfolioSymbols.length&&this.isLoadingData.next(!1)})})}getPortfolioHoldings(){let t=`${this.backendUrl}/fetch/portfolio/holdings`;return this.wrapHttpCall(t)}getPortfolioSymbols(){let t=`${this.backendUrl}/fetch/portfolio/symbols`;return this.wrapHttpCall(t)}getPortfolioData(t){let s=`${this.backendUrl}/fetch/portfolio/data`;if(t!==null){let o=new l().set("update",String(t)),e=r(n({},this.httpOptions),{params:o});return this.wrapHttpCall(s,e)}return this.wrapHttpCall(s)}getStockData(t,s){let o=`${this.backendUrl}/fetch/stock/${t}`;if(s!==null){let e=new l().set("save",String(s)),i=r(n({},this.httpOptions),{params:e});return this.wrapHttpCall(o,i)}return this.wrapHttpCall(o)}getStocksData(t,s){let o=`${this.backendUrl}/fetch/stocks/`+t.join(":");if(s!==null){let e=new l().set("save",String(s)),i=r(n({},this.httpOptions),{params:e});return this.wrapHttpCall(o,i)}return this.wrapHttpCall(o)}loadStockDataFromDataFolder(t){let s=`${this.backendDataPath}${t.toLowerCase()}.json`,o=r(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,o)}getDividendHistory(t,s=10,o=!1){let e=`${this.backendUrl}/fetch/dividend-history/${t}`,i=new l;i=i.set("update",String(o)),i=i.set("years",s);let k=r(n({},this.httpOptions),{params:i});return this.wrapHttpCall(e,k)}getTechnicalInsights(t){let s=`${this.backendUrl}/fetch/technical-insights/${t}`;return this.wrapHttpCall(s)}loadTechnicalInsightsFromDataFolder(t){let s=`${this.backendDataPath}${t.toLowerCase()}-technical-insights.json`,o=r(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,o)}getRecommendations(t){let s=`${this.backendUrl}/fetch/recommendations/${t}`;return this.wrapHttpCall(s)}getCorporateEvents(t){let s=`${this.backendUrl}/fetch/events/${t}`;return this.wrapHttpCall(s)}};a.\u0275fac=function(s){return new(s||a)(b(w))},a.\u0275prov=u({token:a,factory:a.\u0275fac,providedIn:"root"});let h=a;return h})();export{y as a};
