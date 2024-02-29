import './polyfills.server.mjs';
import{d as G}from"./chunk-YQEX2HLG.mjs";import{a as oe,b as se,c as le,d as V,e as F,f as pe}from"./chunk-UMWDEAK6.mjs";import{d as K}from"./chunk-ASNDUNNL.mjs";import{a as me}from"./chunk-TFX57R2K.mjs";import{a as Z,c as ee,d as te,g as ie}from"./chunk-BGGCTIGO.mjs";import{c as z}from"./chunk-FVLM5Z7P.mjs";import{j as ne,k as re,l as ae,m as W}from"./chunk-UU7CXUBN.mjs";import{b as ce}from"./chunk-P5OKEXD2.mjs";import{d as q}from"./chunk-SNNKAGQA.mjs";import{a as J,b as L}from"./chunk-U4J4AU3V.mjs";import{a as O}from"./chunk-YCBEYMAB.mjs";import{O as U,P as E}from"./chunk-FI4PD5Z2.mjs";import{m as S,n as I,p as Q,t as B,u as k}from"./chunk-PBYHKXXW.mjs";import{$b as D,Hb as s,Ib as o,Jb as d,Kb as X,Lb as R,Sb as g,Ub as p,Zb as w,_b as A,ba as P,bb as a,bc as m,cb as x,cc as f,dc as v,gc as b,hc as y,ib as Y,ic as C,ja as M,kc as j,lc as _,mc as T,oc as N,q as H,wb as u,yb as c}from"./chunk-EVR6KDPA.mjs";var ye=["startThumb"],xe=["endThumb"],Ce=["line"];function _e(t,l){t&1&&d(0,"div",6,7)}function Te(t,l){t&1&&d(0,"div",6,8)}var ue=(()=>{let l=class l{constructor(n){this.renderer=n,this.min=100,this.max=200,this.lowThumbValue=0,this.highThumbValue=0,this.showThumbs=!0,this.tooltip=""}ngOnInit(){this.tooltip=`Day range: $${this.lowThumbValue} - $${this.highThumbValue}`}ngAfterViewInit(){if(this.showThumbs){let n=(this.lowThumbValue-this.min)/(this.max-this.min)*this.line.nativeElement.offsetWidth;n=Math.round(n*100)/100,this.renderer.setStyle(this.startThumb.nativeElement,"left",`${n+5}px`);let e=(this.highThumbValue-this.min)/(this.max-this.min)*this.line.nativeElement.offsetWidth;e=Math.round(e*100)/100,this.renderer.setStyle(this.endThumb.nativeElement,"left",`${e+10}px`)}this.updateSliderGradient()}updateSliderGradient(){let n=(this.lowThumbValue-this.min)/(this.max-this.min)*100,e=(this.highThumbValue-this.min)/(this.max-this.min)*100,i=`linear-gradient(
      to right,
      lightgrey 0% ${n}%,
      tomato ${n}% ${e}%, 
      lightgrey ${e}% 100%
    )`;this.renderer.setStyle(this.line.nativeElement,"background",i)}};l.\u0275fac=function(e){return new(e||l)(x(Y))},l.\u0275cmp=P({type:l,selectors:[["stock-day-price-range"]],viewQuery:function(e,i){if(e&1&&(w(ye,5,M),w(xe,5,M),w(Ce,5,M)),e&2){let h;A(h=D())&&(i.startThumb=h.first),A(h=D())&&(i.endThumb=h.first),A(h=D())&&(i.line=h.first)}},inputs:{min:"min",max:"max",lowThumbValue:"lowThumbValue",highThumbValue:"highThumbValue",showThumbs:"showThumbs"},standalone:!0,features:[b],decls:13,vars:5,consts:[[1,"light-color"],[1,"line-container"],["matTooltipPosition","above",1,"line",3,"matTooltip"],["line",""],["class","dot",4,"ngIf"],[1,"label-wrapper"],[1,"dot"],["startThumb",""],["endThumb",""]],template:function(e,i){e&1&&(s(0,"div")(1,"span",0),m(2,"Day Range vs 52w Range"),o(),s(3,"div",1),d(4,"div",2,3),u(6,_e,2,0,"div",4)(7,Te,2,0,"div",4),o(),s(8,"div",5)(9,"span"),m(10),o(),s(11,"span"),m(12),o()()()),e&2&&(a(4),c("matTooltip",i.tooltip),a(2),c("ngIf",i.showThumbs),a(),c("ngIf",i.showThumbs),a(3),v("$",i.min,""),a(2),v("$",i.max,""))},dependencies:[k,S,F,V],styles:[".line-container[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;height:10px;align-items:center}.line[_ngcontent-%COMP%]{width:100%;height:6px;border:none;border-radius:5%;background:#6a5acd}.dot[_ngcontent-%COMP%]{position:absolute;width:5px;height:5px;background-color:#228b22;border-radius:50%;z-index:1}.label-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.light-color[_ngcontent-%COMP%]{color:#fff}"]});let t=l;return t})();function be(t,l){if(t&1&&(s(0,"div")(1,"mat-icon"),m(2,"vertical_align_bottom"),o(),s(3,"span"),m(4),_(5,"currency"),o()()),t&2){let r=p().ngIf;a(4),f(T(5,1,r.instrumentInfo.keyTechnicals.support))}}function Se(t,l){if(t&1&&(s(0,"div")(1,"mat-icon"),m(2,"vertical_align_top"),o(),s(3,"span"),m(4),_(5,"currency"),o()()),t&2){let r=p().ngIf;a(4),f(T(5,1,r.instrumentInfo.keyTechnicals.resistance))}}var $=t=>({color:t});function ke(t,l){if(t&1&&(s(0,"div")(1,"mat-icon"),m(2,"thumbs_up_down"),o(),s(3,"span",3),m(4),o()()),t&2){let r=p().ngIf,n=p();a(3),c("ngStyle",C(2,$,n.getValuationColor(r.instrumentInfo.valuation.description))),a(),f(r.instrumentInfo.valuation.description)}}function Me(t,l){if(t&1&&(s(0,"div")(1,"mat-icon"),m(2,"discount"),o(),s(3,"span",3),m(4),o()()),t&2){let r=p().ngIf,n=p();a(3),c("ngStyle",C(2,$,n.getDiscountColor(r.instrumentInfo.valuation.discount))),a(),f(r.instrumentInfo.valuation.discount)}}function we(t,l){if(t&1&&(s(0,"div",8),u(1,be,6,3,"div",7)(2,Se,6,3,"div",7),s(3,"div")(4,"mat-icon"),m(5,"dangerous"),o(),s(6,"span"),m(7),_(8,"currency"),o()(),u(9,ke,5,4,"div",7)(10,Me,5,4,"div",7),o()),t&2){let r=l.ngIf;a(),c("ngIf",r.instrumentInfo.keyTechnicals.support!==void 0),a(),c("ngIf",r.instrumentInfo.keyTechnicals.resistance!==void 0),a(5),f(T(8,5,r.instrumentInfo.keyTechnicals.stopLoss)),a(2),c("ngIf",r.instrumentInfo.valuation.description!==void 0),a(),c("ngIf",r.instrumentInfo.valuation.discount!==void 0)}}function Ae(t,l){if(t&1&&(X(0),s(1,"div",9),m(2),o(),s(3,"mat-slider",10),d(4,"input",11),o(),s(5,"div",12)(6,"span",9),m(7),_(8,"currency"),o(),s(9,"span",9),m(10),_(11,"currency"),o()(),R()),t&2){let r=p();a(2),v("Target Price: $",r.stock.targetMeanPrice||0,""),a(),c("min",r.stock.targetLowPrice)("max",r.stock.targetHighPrice)("color",r.getTargetPriceRangeColor(r.stock)),a(),c("value",r.stock.targetMeanPrice)("matTooltip",r.getTooltip()),a(3),f(T(8,8,r.stock.targetLowPrice||0)),a(3),f(T(11,10,r.stock.targetHighPrice||0))}}var fe=(()=>{let l=class l{constructor(n,e){this.router=n,this.dataService=e}ngOnInit(){this.technicalInsights$=this.dataService.getTechnicalInsights(this.stock.symbol).pipe(H(n=>n[this.stock.symbol]))}getTargetPriceRangeColor(n){return n.regularMarketPrice>n.targetMeanPrice?"primary":"accent"}getTooltip(){let n=this.stock.regularMarketPrice,e=this.stock.targetMeanPrice,i="";return this.getTargetPriceRangeColor(this.stock)==="primary"?i=`Price $${n} is above mean target $${e} by $${(n-e).toFixed(2)}.`:i=`Price $${n} is below mean target $${e} by $${(e-n).toFixed(2)}.`,i}openInfoSheet(){this.router.navigate(["stock/"+this.stock.symbol])}getDiscountColor(n){return n.includes("-")?"tomato":"forestgreen"}getValuationColor(n){switch(n){case"Overvalued":return"tomato";case"Undervalued":return"forestgreen";default:return"slateblue"}}get50DMAColor(n){return n.fiftyDayAverage<n.regularMarketPrice?"forestgreen":"tomato"}get200DMAColor(n){return n.twoHundredDayAverage<n.regularMarketPrice?"forestgreen":"tomato"}get50DMATrendIcon(n){return n.fiftyDayAverage<n.regularMarketPrice?"trending_up":"trending_down"}get200DMATrendIcon(n){return n.twoHundredDayAverage<n.regularMarketPrice?"trending_up":"trending_down"}};l.\u0275fac=function(e){return new(e||l)(x(q),x(O))},l.\u0275cmp=P({type:l,selectors:[["stock-price-info-card"]],inputs:{stock:"stock"},standalone:!0,features:[b],decls:17,vars:18,consts:[[1,"price-info"],[3,"stock","click"],[1,"trend-container"],[3,"ngStyle"],["class","icon-span",4,"ngIf"],[1,"day-price-range",3,"min","max","lowThumbValue","highThumbValue","showThumbs"],[1,"target-price-range"],[4,"ngIf"],[1,"icon-span"],[1,"dark-color"],["thumbSize","10",3,"min","max","color"],["matSliderThumb","","matTooltipPosition","above",3,"value","matTooltip"],[1,"label-wrapper"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"stock-ticker-name",1),g("click",function(){return i.openInfoSheet()}),o(),s(2,"div",2)(3,"div")(4,"span"),m(5,"50DMA:"),o(),s(6,"mat-icon",3),m(7),o(),s(8,"span"),m(9,"200DMA:"),o(),s(10,"mat-icon",3),m(11),o()(),u(12,we,11,7,"div",4),_(13,"async"),o(),d(14,"stock-day-price-range",5),s(15,"div",6),u(16,Ae,12,12,"ng-container",7),o()()),e&2&&(a(),c("stock",i.stock),a(5),c("ngStyle",C(14,$,i.get50DMAColor(i.stock))),a(),f(i.get50DMATrendIcon(i.stock)),a(3),c("ngStyle",C(16,$,i.get200DMAColor(i.stock))),a(),f(i.get200DMATrendIcon(i.stock)),a(),c("ngIf",T(13,12,i.technicalInsights$)),a(2),c("min",i.stock.fiftyTwoWeekLow)("max",i.stock.fiftyTwoWeekHigh)("lowThumbValue",i.stock.regularMarketDayLow)("highThumbValue",i.stock.regularMarketDayHigh)("showThumbs",!1),a(2),c("ngIf",i.stock.quoteType==="EQUITY"))},dependencies:[Q,k,S,I,B,W,L,E,U,le,oe,se,F,V,ue,me],styles:["stock-ticker-name[_ngcontent-%COMP%]{margin-right:10px;margin-left:5px}mat-slider[_ngcontent-%COMP%]{width:100%;height:8px;padding-top:5px;padding-bottom:5px}  mat-slider-visual-thumb.mdc-slider__thumb{height:0px!important}  div.mdc-slider__thumb-knob{height:5px!important;width:5px!important;border-width:5px!important}  span.mat-mdc-chip-action-label{display:flex;align-items:center;align-content:center}mat-icon[_ngcontent-%COMP%]{margin-left:5px;font-size:1rem;height:15px;width:15px}.mat-mdc-slider[_ngcontent-%COMP%]{margin:0}.price-info[_ngcontent-%COMP%]{display:flex;padding:5px;border-radius:.5rem;flex-direction:column;margin:2px}.label-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#fff}.day-price-range[_ngcontent-%COMP%], .target-price-range[_ngcontent-%COMP%], stock-moving-trends[_ngcontent-%COMP%]{margin-bottom:5px}.light-color[_ngcontent-%COMP%]{color:#fff}.trend-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.trend-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.icon-span[_ngcontent-%COMP%]{display:flex;padding-left:5px;align-items:center}"]});let t=l;return t})();function De(t,l){if(t&1&&(s(0,"div",8),d(1,"ngx-charts-bar-vertical",9),o()),t&2){let r=p();a(),c("scheme",r.performanceChartColorScheme)("animations",!0)("results",r.fiftyDayMAChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Price vs 50 Day MA %")("rotateXAxisTicks",!0)("yScaleMin",r.fiftyDayMAChartData[0].value-5)}}function Ie(t,l){if(t&1&&(s(0,"div",8),d(1,"ngx-charts-bar-vertical",9),o()),t&2){let r=p();a(),c("scheme","air")("scheme",r.performanceChartColorScheme)("animations",!0)("results",r.twoHundredDayMAChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Price vs 200 Day MA %")("rotateXAxisTicks",!0)("yScaleMin",r.twoHundredDayMAChartData[0].value-5)}}function Ee(t,l){if(t&1&&d(0,"stock-price-info-card",15),t&2){let r=p().model,n=p(2);c("stock",n.getTooltipData(r.name))}}function Le(t,l){t&1&&d(0,"mat-divider",16)}function We(t,l){if(t&1&&(u(0,Ee,1,1,"stock-price-info-card",13)(1,Le,1,0,"mat-divider",14),s(2,"span"),m(3),o(),s(4,"span"),m(5),o()),t&2){let r=l.model;c("ngIf",r.name!=="S&P 500"),a(),c("ngIf",r.name!=="S&P 500"),a(2),v("",r.name,": "),a(2),v("",r.value.toFixed(2),"%")}}var Ve=()=>["S&P 500"],Fe=()=>({name:"S&P 500",value:"tomato"}),Oe=t=>[t];function $e(t,l){if(t&1&&(s(0,"div",8)(1,"ngx-charts-bar-vertical",10),u(2,We,6,4,"ng-template",11,12,N),o()()),t&2){let r=p();a(),c("scheme",r.performanceChartColorScheme)("animations",!0)("results",r.fiftyTwoWeekChangeChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","52 Week Change %")("rotateXAxisTicks",!0)("activeEntries",y(12,Ve))("customColors",C(14,Oe,y(13,Fe)))}}var He=()=>({name:"SCHD",value:"deepskyblue"}),Ye=()=>({name:"VYM",value:"maroon"}),Xe=()=>({name:"JEPI",value:"dodgerblue"}),Re=(t,l,r)=>[t,l,r];function je(t,l){if(t&1&&(s(0,"div",8),d(1,"ngx-charts-bar-vertical-2d",17),o()),t&2){let r=p();a(),c("animations",!0)("results",r.etfPerformanceChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","ETF Performance %")("showDataLabel",!0)("rotateXAxisTicks",!0)("customColors",j(14,Re,y(11,He),y(12,Ye),y(13,Xe)))}}function Ne(t,l){if(t&1&&(s(0,"div",8),d(1,"ngx-charts-bar-vertical",18),o()),t&2){let r=p();a(),c("scheme",r.fiftyTwoWeekChartColorScheme)("animations",!0)("results",r.fiftyTwoWeekLowChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Current price vs 52 week low %")("rotateXAxisTicks",!0)}}function Qe(t,l){if(t&1&&(s(0,"div",8),d(1,"ngx-charts-bar-vertical",18),o()),t&2){let r=p();a(),c("scheme",r.fiftyTwoWeekChartColorScheme)("animations",!0)("results",r.fiftyTwoWeekHighChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Current price vs 52 week High %")("rotateXAxisTicks",!0)}}function Be(t,l){if(t&1&&(s(0,"div",8),d(1,"ngx-charts-bar-vertical",9),o()),t&2){let r=p();a(),c("scheme",r.targetPriceChartColorScheme)("animations",!0)("results",r.discountChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("yAxisLabel","Current price vs target price %")("rotateXAxisTicks",!0)("yScaleMin",-5)}}var ge=()=>({padding:"20px"}),Nt=(()=>{let l=class l{constructor(n){this.dataService=n,this.sortedStocks=[],this.sortedEtfs=[],this.fiftyTwoWeekChangeChartData=[],this.fiftyTwoWeekLowChartData=[],this.fiftyTwoWeekHighChartData=[],this.fiftyDayMAChartData=[],this.twoHundredDayMAChartData=[],this.discountChartData=[],this.displayTradingviewWidgets=!1,this.sp500FiftyTwoWeekChange=0,this.etfPerformanceChartData=[],this.sp500="S&P 500",this.activeSymbol=[{name:this.sp500}],this.customColor=[{name:this.sp500,value:"tomato"}],this.selectedPerformanceChart=1,this.selectedVSChart=1,this.scaleType=Z,this.performanceChartColorScheme={domain:["steelblue"]},this.fiftyTwoWeekChartColorScheme={domain:["darkseagreen"]},this.targetPriceChartColorScheme={domain:["darkseagreen"]}}ngOnInit(){this.sortedStocks=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="EQUITY").sort((e,i)=>e["52WeekChange"]-i["52WeekChange"]),this.sortedEtfs=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="ETF").sort((e,i)=>e.ytdReturn-i.ytdReturn),this.sp500FiftyTwoWeekChange=this.sortedStocks[0].SandP52WeekChange,this.sortedStocks.forEach(e=>{this.fiftyTwoWeekChangeChartData.push({name:e.symbol,value:e["52WeekChange"]*100}),this.fiftyTwoWeekLowChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyTwoWeekLow)/e.fiftyTwoWeekLow*100}),this.fiftyTwoWeekHighChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyTwoWeekHigh)/e.fiftyTwoWeekHigh*100}),this.discountChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.targetMeanPrice)/e.targetMeanPrice*100}),this.fiftyDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyDayAverage)/e.fiftyDayAverage*100}),this.twoHundredDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.twoHundredDayAverage)/e.twoHundredDayAverage*100})}),this.fiftyTwoWeekChangeChartData.push({name:this.sp500,value:this.sortedStocks[0].SandP52WeekChange*100}),this.fiftyTwoWeekChangeChartData.sort((e,i)=>e.value-i.value),this.fiftyDayMAChartData.sort((e,i)=>e.value-i.value),this.twoHundredDayMAChartData.sort((e,i)=>e.value-i.value),this.fiftyTwoWeekLowChartData.sort((e,i)=>e.value-i.value),this.fiftyTwoWeekHighChartData.sort((e,i)=>e.value-i.value),this.discountChartData.sort((e,i)=>e.value-i.value);let n={ytd:"Year to Date",oneMonth:"One Month",threeMonth:"Three Month",oneYear:"One Year",threeYear:"Three Year",fiveYear:"Five Year",tenYear:"Ten Year"};Object.keys(n).forEach(e=>{if(n[e]){let i={name:n[e],series:[]};this.sortedEtfs.forEach(h=>{i.series.push({name:h.symbol,value:h.fundPerformance.trailingReturns[e]*100})}),this.etfPerformanceChartData.push(i)}})}getSP500ChangeColor(n){return this.sp500FiftyTwoWeekChange>0?"forestgreen":"tomato"}getTooltipData(n){return Object.values(this.dataService.portfolioData).filter(e=>e.symbol===n)[0]}changePerformanceChart(n){this.selectedPerformanceChart=n}changeVSCharts(n){this.selectedVSChart=n}};l.\u0275fac=function(e){return new(e||l)(x(O))},l.\u0275cmp=P({type:l,selectors:[["portfolio-price-trends"]],standalone:!0,features:[b],decls:32,vars:11,consts:[[1,"add-border"],[1,"chart-header"],[1,"title"],[3,"ngStyle"],["selected","",3,"click"],[3,"click"],[1,"charts-flex"],["class","chart-container",4,"ngIf"],[1,"chart-container"],[3,"scheme","animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","rotateXAxisTicks","yScaleMin"],[3,"scheme","animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","rotateXAxisTicks","activeEntries","customColors"],["class","dark"],["tooltipTemplate",""],[3,"stock",4,"ngIf"],["style","margin: none;",4,"ngIf"],[3,"stock"],[2,"margin","none"],[3,"animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","showDataLabel","rotateXAxisTicks","customColors"],[3,"scheme","animations","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","yAxisLabel","rotateXAxisTicks"]],template:function(e,i){e&1&&(d(0,"price-movement-charts"),s(1,"section",0)(2,"div",1)(3,"div",2)(4,"span"),m(5,"Price Performance"),o()(),s(6,"mat-chip-listbox",3)(7,"mat-chip-option",4),g("click",function(){return i.changePerformanceChart(1)}),m(8,"Moving Averages"),o(),s(9,"mat-chip-option",5),g("click",function(){return i.changePerformanceChart(2)}),m(10,"Stocks 52 Week Change"),o(),s(11,"mat-chip-option",5),g("click",function(){return i.changePerformanceChart(3)}),m(12,"ETF Past Performance"),o()()(),s(13,"div",6),u(14,De,2,11,"div",7)(15,Ie,2,12,"div",7),o(),u(16,$e,4,16,"div",7)(17,je,2,18,"div",7),o(),s(18,"section",0)(19,"div",1)(20,"div",2)(21,"span"),m(22,"Current Price vs 52 Week & Target Price"),o()(),s(23,"mat-chip-listbox",3)(24,"mat-chip-option",4),g("click",function(){return i.changeVSCharts(1)}),m(25,"VS 52 Week High Low"),o(),s(26,"mat-chip-option",5),g("click",function(){return i.changeVSCharts(2)}),m(27,"VS Target Price"),o()()(),s(28,"div",6),u(29,Ne,2,10,"div",7)(30,Qe,2,10,"div",7),o(),u(31,Be,2,11,"div",7),o()),e&2&&(a(6),c("ngStyle",y(9,ge)),a(8),c("ngIf",i.selectedPerformanceChart===1),a(),c("ngIf",i.selectedPerformanceChart===1),a(),c("ngIf",i.selectedPerformanceChart===2),a(),c("ngIf",i.selectedPerformanceChart===3),a(6),c("ngStyle",y(10,ge)),a(6),c("ngIf",i.selectedVSChart===1),a(),c("ngIf",i.selectedVSChart===1),a(),c("ngIf",i.selectedVSChart===2))},dependencies:[k,S,I,z,W,ae,re,L,J,K,ne,E,ce,G,ie,ee,te,pe,fe],styles:[".chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]});let t=l;return t})();export{Nt as a};
