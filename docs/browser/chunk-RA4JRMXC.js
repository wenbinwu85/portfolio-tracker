import{g as c}from"./chunk-XMSE4Q72.js";import{X as n,aa as i}from"./chunk-3MUY6BAD.js";var o=function(r){return r.Gain="teal",r.Lost="chocolate",r}(o||{});var m=(()=>{let a=class a{constructor(t){this.dataService=t,this.portfolioData=this.dataService.portfolioData}getPriceKeyPrefix(){let t=new Date().getDay(),e=new Date().getTime(),s=new Date().setHours(4,0,0),u=new Date().setHours(9,29,59),f=new Date().setHours(9,30,0),p=new Date().setHours(16,0,0),l=new Date().setHours(16,0,1),g=new Date().setHours(20,0,0),k=new Date().setHours(20,0,1);return this.dataService.marketState!=="CLOSED"&&0<t&&t<6?s<=e&&e<=u?"preMarket":f<=e&&e<=p?"regularMarket":l<=e&&e<=g||k<=e?"postMarket":"regularMarket":"regularMarket"}getStockPriceColor(t){let e=this.getPriceKeyPrefix();return this.portfolioData[t][e+"ChangePercent"].raw>0?o.Gain:o.Lost}getTickerLogo(t){return`/assets/ticker-logos/${t}.png`}};a.\u0275fac=function(e){return new(e||a)(i(c))},a.\u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"});let r=a;return r})();export{o as a,m as b};
