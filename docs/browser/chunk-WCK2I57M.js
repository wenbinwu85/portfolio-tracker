import{a as v}from"./chunk-4HTNXZLC.js";import{R as r,Ra as m,db as l,eb as c,fb as d,na as n,ob as h}from"./chunk-ELSQTAXV.js";var y=["symbolOverviewWidget"],g=(()=>{let e=class e{constructor(i){this.tradingviewService=i,this.timeFrame="1D"}ngAfterViewInit(){this.params={symbols:[[this.company,`${this.symbol}|${this.timeFrame}`]],chartOnly:!1,width:"100%",height:"600",locale:"en",colorTheme:"light",autosize:!0,showVolume:!0,showMA:!0,hideDateRanges:!1,hideMarketStatus:!1,hideSymbolLogo:!1,scalePosition:"right",scaleMode:"Normal",fontFamily:"-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",fontSize:10,noTimeScale:!1,valuesTracking:1,changeMode:"price-and-percent",chartType:"area",maLineColor:"rgba(255, 152, 0, 1)",maLineWidth:1,maLength:14,headerFontSize:"medium",gridLineColor:"rgba(41, 98, 255, 0.74)",lineWidth:2,lineType:2,dateRanges:["1d|1","1w|60","1m|30","3m|60","ytd|1D","12m|1D","60m|1W","120m|1M","all|1M"]},this.params=JSON.stringify(this.params);let i=this.tradingviewService.symbolOverviewWidget(this.params);this.symbolOverviewWidget.nativeElement.appendChild(i)}};e.\u0275fac=function(t){return new(t||e)(n(v))},e.\u0275cmp=r({type:e,selectors:[["tv-symbol-overview-widget"]],viewQuery:function(t,o){if(t&1&&l(y,5),t&2){let s;c(s=d())&&(o.symbolOverviewWidget=s.first)}},inputs:{company:"company",symbol:"symbol",timeFrame:"timeFrame"},standalone:!0,features:[h],decls:2,vars:0,consts:[["symbolOverviewWidget",""]],template:function(t,o){t&1&&m(0,"div",null,0)},encapsulation:2});let a=e;return a})();export{g as a};
