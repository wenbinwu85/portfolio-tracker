import{f as v,i as b,m as f}from"./chunk-UROA4DXB.js";import{o as y}from"./chunk-2WYAVOGU.js";import{Ab as h,Bb as u,Wa as m,Xa as l,_b as p,ac as g,fa as i,ma as r,pb as c,zb as d}from"./chunk-6PRU6VJY.js";var x=o=>[400,o],w=(()=>{let n=class n{constructor(t){this.dataService=t,this.symbol="AAPL",this.recommendationTrendChartColorScheme={domain:["teal","seagreen","gold","tomato","chocolate"]},this.scaleType=v}ngOnInit(){this.updateRecommendationTrends()}ngOnChanges(){this.updateRecommendationTrends()}updateRecommendationTrends(){let t=this.dataService.portfolioData;this.stockData=Object.values(t).filter(e=>e.symbol===this.symbol)[0],this.recommendationTrends=this.stockData.recommendationTrend,this.recommendationTrendChartData=[],this.recommendationTrends.forEach(e=>{this.recommendationTrendChartData.push({name:this.getMonthName(e.period),series:[{name:"Strong Buy",value:e.strongBuy},{name:"Buy",value:e.buy},{name:"Hold",value:e.hold},{name:"Sell",value:e.sell},{name:"Strong Sell",value:e.strongSell}]})})}getMonthName(t){let a={"0m":0,"-1m":1,"-2m":2,"-3m":3}[t],s=new Date,T=s.getMonth();return s.setMonth(T-a),s.toLocaleString("default",{month:"short"})}};n.\u0275fac=function(e){return new(e||n)(l(y))},n.\u0275cmp=i({type:n,selectors:[["stock-recommendation-trends"]],inputs:{symbol:"symbol",height:"height"},standalone:!0,features:[r,p],decls:2,vars:15,consts:[[1,"rec-trends"],[3,"view","scheme","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","rotateXAxisTicks","animations","legend","showDataLabel","legendTitle","xAxisLabel"]],template:function(e,a){e&1&&(d(0,"div",0),u(1,"ngx-charts-bar-vertical-stacked",1),h()),e&2&&(m(),c("view",g(13,x,a.height||200))("scheme",a.recommendationTrendChartColorScheme)("results",a.recommendationTrendChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("legend",!0)("showDataLabel",!0)("legendTitle","")("xAxisLabel",a.symbol+" Analysts Recommendation Trends"))},dependencies:[f,b],styles:["div.ngx-charts-outer{display:flex!important;align-items:center!important}  ul.legend-labels{width:min-content!important;background:none!important}"]});let o=n;return o})();export{w as a};
