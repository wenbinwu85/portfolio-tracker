import{A as Z,a as h,b as q,c as B,d as R,e as z,f as V,h as N,i as j,k,l as J,n as K,o as L,q as U,s as W,t as X}from"./chunk-ZSPSATS3.js";import{o as Q}from"./chunk-VATWJDSL.js";import{f as A}from"./chunk-KVTS2LAY.js";import{Ab as s,Bb as p,Kb as r,Lc as O,Md as I,Pb as S,Qb as E,Qc as G,Rb as w,Ub as F,Vb as u,Wa as l,Wb as C,Xa as M,_b as b,ac as Y,dc as $,ec as H,fa as D,gc as T,nb as f,pb as m,ub as _,wb as y,xb as v,yb as P,zb as c}from"./chunk-V7GFWOCT.js";import{a as x,b as g}from"./chunk-GAL4ENT6.js";var ee=e=>({color:e});function te(e,i){if(e&1&&(c(0,"th",10)(1,"span"),u(2),s()()),e&2){let n=r().$index,o=r(2);l(2),C(o.headers[n])}}function ne(e,i){if(e&1&&(c(0,"div",12),p(1,"stock-name-card",14),s()),e&2){let n=r().$implicit;l(),m("stock",n)}}function ie(e,i){if(e&1&&(c(0,"span",13),u(1),s()),e&2){let n=r().$implicit,o=r(),d=o.$implicit,t=o.$index,a=r(2);m("ngStyle",Y(2,ee,a.getCellColor(t,n))),l(),C(n[d])}}function ae(e,i){if(e&1&&(c(0,"td",11),f(1,ne,2,1,"div",12)(2,ie,2,4,"span",13),s()),e&2){let n=r().$index;l(),_(n===0?1:2)}}function re(e,i){if(e&1&&(c(0,"div",5),f(1,te,3,1,"th",8)(2,ae,3,1,"td",9),s()),e&2){let n=i.$implicit;m("matColumnDef",n)}}function oe(e,i){e&1&&p(0,"tr",15)}function le(e,i){e&1&&p(0,"tr",16)}function me(e,i){if(e&1&&(c(0,"table",4),v(1,re,3,1,"div",5,y),f(3,oe,1,0,"tr",6)(4,le,1,0,"tr",7),s()),e&2){let n=r();m("dataSource",n.dataSource),l(),P(n.columnDefs),l(2),m("matHeaderRowDef",n.columnDefs)("matHeaderRowDefSticky",!0),l(),m("matRowDefColumns",n.columnDefs)}}function ce(e,i){if(e&1&&(c(0,"th",19)(1,"span"),u(2),s()()),e&2){let n=r().$index,o=r(2);l(2),C(o.etfHeaders[n])}}function se(e,i){if(e&1&&(c(0,"div",12),p(1,"stock-name-card",14),s()),e&2){let n=r().$implicit;l(),m("stock",n)}}function de(e,i){if(e&1&&(c(0,"span"),u(1),s()),e&2){let n=r(2).$implicit,o=r().$implicit;l(),C(n[o])}}function fe(e,i){if(e&1&&(c(0,"span"),u(1),$(2,"currency"),s()),e&2){let n=r(2).$implicit,o=r().$implicit;l(),C(H(2,1,n[o]))}}function pe(e,i){if(e&1&&f(0,de,2,1,"span")(1,fe,3,3,"span"),e&2){let n=r(2).$index;_(n<13?0:-1),l(),_(n===13?1:-1)}}function _e(e,i){if(e&1&&(c(0,"td",11),f(1,se,2,1,"div",12)(2,pe,2,2),s()),e&2){let n=r().$index;l(),_(n===0?1:2)}}function ue(e,i){if(e&1&&(c(0,"div",5),f(1,ce,3,1,"th",18)(2,_e,3,1,"td",9),s()),e&2){let n=i.$implicit;m("matColumnDef",n)}}function Ce(e,i){e&1&&p(0,"tr",15)}function xe(e,i){e&1&&p(0,"tr",16)}function he(e,i){if(e&1&&(c(0,"table",17),v(1,ue,3,1,"div",5,y),f(3,Ce,1,0,"tr",6)(4,xe,1,0,"tr",7),s()),e&2){let n=r();m("dataSource",n.sortedEtfs),l(),P(n.etfColumnDefs),l(2),m("matHeaderRowDef",n.etfColumnDefs)("matHeaderRowDefSticky",!0),l(),m("matRowDefColumns",n.etfColumnDefs)}}function Re(e,i){if(e&1&&p(0,"container-card",3),e&2){r();let n=F(4);m("mainContentRef",n)}}var Me=(()=>{let i=class i{constructor(o){this.dataService=o,this.dataSource=new X,this.sortedEtfs=[],this.headers=["Symbol","Debt To Equity (MRQ)","Current Ratio (MRQ)","Earnings Growth (QOQ) %","Quarterly Revenue Growth (YOY) %","Profit Margins %","Forward PE","Forward EPS","PEG Ratio","Total Cash / Share","Revenue / Share","FCF Yield","FCF / Share","Return On Assets %","Return On Equity %","EV / EBITDA","EV / Revenue"],this.columnDefs=["symbol","debtToEquity","currentRatio","earningsGrowth","revenueGrowth","profitMargins","forwardPE","forwardEps","pegRatio","totalCashPerShare","revenuePerShare","freeCashflowYield","freeCashflowPerShare","returnOnAssets","returnOnEquity","enterpriseToEbitda","enterpriseToRevenue"],this.etfHeaders=["Symbol","Expense Ratio","Nav Price","Trailing PE","YTD Return","1 Month Return","3 month Return","1 Year Return","3 Year Return","5 year Return","10 Year return","3Y Beta","Total Assets"],this.etfColumnDefs=["symbol","annualReportExpenseRatio","navPrice","trailingPE","ytdReturn","1monthReturn","3monthReturn","1YearReturn","threeYearReturn","fiveYearReturn","tenYearReturn","beta3Year","totalAssets"]}ngOnInit(){let o=this.dataService.portfolioStocks,d=this.dataService.portfolioEtfs;this.dataSource.data=o.map(t=>{let a=this.dataService.portfolioHoldings[t.symbol];return g(x(x({},t),a),{symbol:t.symbol,debtToEquity:(t.debtToEquity.raw/100).toFixed(2)||0,currentRatio:t.currentRatio.fmt||0,earningsGrowth:+t.earningsQuarterlyGrowth.fmt?.replace("%","")||0,revenueGrowth:+t.revenueGrowth.fmt?.replace("%","")||0,profitMargins:+t.profitMargins.fmt?.replace("%","")||0,forwardPE:t.forwardPE.fmt||0,forwardEps:t.forwardEps.fmt||0,pegRatio:t.pegRatio.fmt||0,totalCashPerShare:t.totalCashPerShare.fmt||0,revenuePerShare:t.revenuePerShare.fmt||0,freeCashflowYield:+(t.freeCashflowYield*100).toFixed(2)||0,freeCashflowPerShare:+t.freeCashflowPerShare.toFixed(2)||0,returnOnAssets:+t.returnOnAssets.fmt?.replace("%","")||0,returnOnEquity:+t.returnOnEquity.fmt?.replace("%","")||0,enterpriseToEbitda:t.enterpriseToEbitda.fmt||0,enterpriseToRevenue:t.enterpriseToRevenue.fmt||0})}).sort((t,a)=>t.unrealizedGainPercent-a.unrealizedGainPercent),this.sortedEtfs=d.map(t=>{let a=this.dataService.portfolioHoldings[t.symbol];return g(x(x({},t),a),{symbol:t.symbol,annualReportExpenseRatio:t.profile.feesExpensesInvestment.annualReportExpenseRatio.fmt,navPrice:t.navPrice.fmt,trailingPE:t.trailingPE.fmt,ytdReturn:t.fundPerformance.trailingReturns.ytd.fmt,"1monthReturn":t.fundPerformance.trailingReturns.oneMonth.fmt,"3monthReturn":t.fundPerformance.trailingReturns.threeMonth.fmt,"1YearReturn":t.fundPerformance.trailingReturns.oneYear.fmt,threeYearReturn:t.fundPerformance.trailingReturns.threeYear.fmt,fiveYearReturn:t.fundPerformance.trailingReturns.fiveYear.fmt,tenYearReturn:t.fundPerformance.trailingReturns.tenYear.fmt,beta3Year:t.beta3Year.raw,totalAssets:t.totalAssets.fmt})}).sort((t,a)=>t.unrealizedGainPercent-a.unrealizedGainPercent)}ngAfterViewInit(){this.dataSource.sort=this.sort}getCellColor(o,d){let t=this.columnDefs[o],a=d[t];return a<0||a[0]==="-"||a[1]==="-"?"chocolate":""}};i.\u0275fac=function(d){return new(d||i)(M(Q))},i.\u0275cmp=D({type:i,selectors:[["portfolio-financials"]],viewQuery:function(d,t){if(d&1&&(S(R,5),S(h,5)),d&2){let a;E(a=w())&&(t.table=a.first),E(a=w())&&(t.sort=a.first)}},standalone:!0,features:[b],decls:6,vars:2,consts:[["stocksRef",""],["etfsRef",""],["title","Stocks",3,"mainContentRef"],["title","Exchange Traded Funds",3,"mainContentRef"],["mat-table","","matSort","","matSortActive","earningsQuarterlyGrowth","matSortDirection","asc",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],["mat-header-row",""],["mat-row",""],["mat-table","",3,"dataSource"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-cell",""]],template:function(d,t){if(d&1&&(f(0,me,5,4,"ng-template",null,0,T),p(2,"container-card",2),f(3,he,5,4,"ng-template",null,1,T)(5,Re,1,1,"container-card",3)),d&2){let a=F(1);l(2),m("mainContentRef",a),l(3),_(t.sortedEtfs.length>0?5:-1)}},dependencies:[A,G,I,B,h,q,W,R,V,J,N,z,K,j,k,L,U,O,Z],styles:[".table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.mat-mdc-row[_ngcontent-%COMP%]{height:max-content}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}"]});let e=i;return e})();export{Me as a};
