import{a as h,b as A,c as G,d as Z}from"./chunk-74B6AT3Z.js";import{c as R,d as B,e as V,g as j,h as N,j as U,k as z,m as J,n as K,p as L,r as W,s as X}from"./chunk-NRPNPI5J.js";import{g as I}from"./chunk-ARUT3GIC.js";import{g as Q,h as q}from"./chunk-7J2R5DGE.js";import{Ab as _,Hb as o,Ic as O,Mb as S,Nb as P,Nc as H,Ob as E,Rb as w,Sb as p,Tb as x,Ub as M,Va as l,Wa as D,Xb as b,Zb as $,ac as Y,bc as k,dc as F,fa as T,mb as d,ob as m,tb as C,vb as g,wb as y,xb as v,yb as c,zb as s}from"./chunk-ZQIE4LUS.js";import{a as u}from"./chunk-GAL4ENT6.js";var et=e=>({color:e});function nt(e,i){if(e&1&&(c(0,"th",10),p(1),s()),e&2){let n=o().$index,a=o(2);l(),M(" ",a.headers[n]," ")}}function it(e,i){if(e&1&&(c(0,"div",12),_(1,"stock-name-card",14),s()),e&2){let n=o().$implicit;l(),m("stock",n)}}function ot(e,i){if(e&1&&(c(0,"span",13),p(1),s()),e&2){let n=o().$implicit,a=o().$index,t=o(2);m("ngStyle",$(2,et,t.getCellColor(a,n))),l(),x(t.cells[a](n))}}function at(e,i){if(e&1&&(c(0,"td",11),d(1,it,2,1,"div",12)(2,ot,2,4,"span",13),s()),e&2){let n=o().$index;l(),C(n===0?1:2)}}function rt(e,i){if(e&1&&(c(0,"div",5),d(1,nt,2,1,"th",8)(2,at,3,1,"td",9),s()),e&2){let n=i.$implicit;m("matColumnDef",n)}}function lt(e,i){e&1&&_(0,"tr",15)}function mt(e,i){e&1&&_(0,"tr",16)}function ct(e,i){if(e&1&&(c(0,"table",4),y(1,rt,3,1,"div",5,g),d(3,lt,1,0,"tr",6)(4,mt,1,0,"tr",7),s()),e&2){let n=o();m("dataSource",n.dataSource),l(),v(n.columnDefs),l(2),m("matHeaderRowDef",n.columnDefs)("matHeaderRowDefSticky",!0),l(),m("matRowDefColumns",n.columnDefs)}}function st(e,i){if(e&1&&(c(0,"th",10)(1,"span"),p(2),s()()),e&2){let n=o().$index,a=o(2);l(2),x(a.etfHeaders[n])}}function ft(e,i){if(e&1&&(c(0,"div",12),_(1,"stock-name-card",14),s()),e&2){let n=o().$implicit;l(),m("stock",n)}}function dt(e,i){if(e&1&&(c(0,"span"),p(1),s()),e&2){let n=o(2).$implicit,a=o().$index,t=o(2);l(),x(t.etfCells[a](n))}}function _t(e,i){if(e&1&&(c(0,"span"),p(1),Y(2,"currency"),s()),e&2){let n=o(2).$implicit,a=o().$index,t=o(2);l(),x(k(2,1,t.etfCells[a](n)))}}function pt(e,i){if(e&1&&d(0,dt,2,1,"span")(1,_t,3,3,"span"),e&2){let n=o(2).$index;C(n<13?0:-1),l(),C(n===13?1:-1)}}function ut(e,i){if(e&1&&(c(0,"td",11),d(1,ft,2,1,"div",12)(2,pt,2,2),s()),e&2){let n=o().$index;l(),C(n===0?1:2)}}function Ct(e,i){if(e&1&&(c(0,"div",5),d(1,st,3,1,"th",8)(2,ut,3,1,"td",9),s()),e&2){let n=i.$implicit;m("matColumnDef",n)}}function xt(e,i){e&1&&_(0,"tr",15)}function ht(e,i){e&1&&_(0,"tr",16)}function Rt(e,i){if(e&1&&(c(0,"table",17),y(1,Ct,3,1,"div",5,g),d(3,xt,1,0,"tr",6)(4,ht,1,0,"tr",7),s()),e&2){let n=o();m("dataSource",n.sortedEtfs),l(),v(n.etfColumnDefs),l(2),m("matHeaderRowDef",n.etfColumnDefs)("matHeaderRowDefSticky",!0),l(),m("matRowDefColumns",n.etfColumnDefs)}}var Mt=(()=>{let i=class i{constructor(a){this.dataService=a,this.transactions="portfolio",this.dataSource=new X,this.sortedEtfs=[],this.headers=["Symbol","Debt To Equity (MRQ)","Current Ratio (MRQ)","Earnings Growth (YOY)","Quarterly Revenue Growth (YOY)","Profit Margins","Forward PE","Forward EPS","PEG Ratio","Total Cash / Share","Revenue / Share","FCF Yield","FCF / Share","Return On Assets","Return On Equity","EV / EBITDA","EV / Revenue"],this.columnDefs=["symbol","debtToEquity","currentRatio","earningsQuarterlyGrowth","revenueGrowth","profitMargins","forwardPE","forwardEps","pegRatio","totalCashPerShare","revenuePerShare","freeCashflowYield","freeCashflowPerShare","returnOnAssets","returnOnEquity","enterpriseToEbitda","enterpriseToRevenue"],this.etfHeaders=["Symbol","Expense Ratio","Nav Price","Trailing PE","YTD Return","1 Month Return","3 month Return","1 Year Return","3 Year Return","5 year Return","10 Year return","3Y Beta","Total Assets"],this.etfColumnDefs=["symbol","annualReportExpenseRatio","navPrice","trailingPE","ytdReturn","1monthReturn","3monthReturn","1YearReturn","threeYearReturn","fiveYearReturn","tenYearReturn","beta3Year","totalAssets"],this.cells=[t=>"",t=>t.debtToEquity.fmt||0,t=>t.currentRatio.fmt||0,t=>t.earningsQuarterlyGrowth?.fmt||0,t=>t.revenueGrowth.fmt||0,t=>t.profitMargins.fmt||0,t=>t.forwardPE.fmt||0,t=>t.forwardEps.fmt||0,t=>t.pegRatio.fmt||0,t=>t.totalCashPerShare.fmt||0,t=>t.revenuePerShare.fmt||0,t=>`${(t.freeCashflowYield*100).toFixed(2)}%`||0,t=>`$${t.freeCashflowPerShare.toFixed(2)}`||0,t=>t.returnOnAssets.fmt||0,t=>t.returnOnEquity.fmt||0,t=>t.enterpriseToEbitda.fmt||0,t=>t.enterpriseToRevenue.fmt||0],this.etfCells=[t=>"",t=>t.profile.feesExpensesInvestment.annualReportExpenseRatio.fmt,t=>t.navPrice.fmt,t=>t.trailingPE.fmt,t=>t.fundPerformance.trailingReturns.ytd.fmt,t=>t.fundPerformance.trailingReturns.oneMonth.fmt,t=>t.fundPerformance.trailingReturns.threeMonth.fmt,t=>t.fundPerformance.trailingReturns.oneYear.fmt,t=>t.fundPerformance.trailingReturns.threeYear.fmt,t=>t.fundPerformance.trailingReturns.fiveYear.fmt,t=>t.fundPerformance.trailingReturns.tenYear.fmt,t=>t.beta3Year.raw,t=>t.totalAssets.fmt]}ngOnInit(){let a=Object.values(this.dataService.portfolioData).filter(r=>r.quoteType==="EQUITY"),t=Object.values(this.dataService.portfolioData).filter(r=>r.quoteType==="ETF");this.dataSource.data=a.map(r=>{let f=this.dataService.portfolioHoldings[r.symbol];return u(u({},r),f)}),this.sortedEtfs=t.map(r=>{let f=this.dataService.portfolioHoldings[r.symbol];return u(u({},r),f)}).sort((r,f)=>r.ytdReturn.raw-f.ytdReturn.raw)}ngAfterViewInit(){this.dataSource.sort=this.sort}getCellColor(a,t){let r=this.cells[a](t);return r<0||r[0]==="-"||r[1]==="-"?"chocolate":""}};i.\u0275fac=function(t){return new(t||i)(D(I))},i.\u0275cmp=T({type:i,selectors:[["portfolio-financials"]],viewQuery:function(t,r){if(t&1&&(S(R,5),S(h,5)),t&2){let f;P(f=E())&&(r.table=f.first),P(f=E())&&(r.sort=f.first)}},inputs:{transactions:"transactions"},standalone:!0,features:[b],decls:6,vars:2,consts:[["stocksRef",""],["etfsRef",""],["title","Stocks",3,"mainContentRef"],["title","Exchange Traded Funds",3,"mainContentRef"],["mat-table","","matSort","","matSortActive","earningsQuarterlyGrowth","matSortDirection","asc",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],["mat-header-row",""],["mat-row",""],["mat-table","","matSort","","matSortActive","ytdReturn","matSortDirection","asc",3,"dataSource"]],template:function(t,r){if(t&1&&(d(0,ct,5,4,"ng-template",null,0,F),_(2,"container-card",2),d(3,Rt,5,4,"ng-template",null,1,F),_(5,"container-card",3)),t&2){let f=w(1),tt=w(4);l(2),m("mainContentRef",f),l(3),m("mainContentRef",tt)}},dependencies:[q,H,Q,G,h,A,W,R,V,z,j,B,J,N,U,K,L,O,Z],styles:[".table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.mat-mdc-row[_ngcontent-%COMP%]{height:max-content}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}"]});let e=i;return e})();export{Mt as a};
