import './polyfills.server.mjs';
import{A as Z,a as h,b as A,c as G,d as R,e as B,f as V,h as j,i as N,k as U,l as z,n as J,o as K,q as L,s as W,t as X}from"./chunk-WK3YIIZN.mjs";import{a as Q}from"./chunk-GMF6TEPD.mjs";import{f as q}from"./chunk-A5GLH26F.mjs";import{b as I}from"./chunk-ADBMVI5A.mjs";import{Ab as y,Bb as v,Cb as c,Db as s,Eb as _,Nb as o,Sb as S,Tb as P,Ub as E,Xb as w,Ya as l,Yb as u,Yc as O,Za as D,Zb as x,_b as M,bc as b,bd as H,dc as $,fa as T,gc as Y,hc as k,jc as F,qb as d,sb as m,xb as p,zb as g}from"./chunk-Y7GFRNBX.mjs";import{a as C}from"./chunk-5XUXGTUW.mjs";var tt=e=>({color:e});function et(e,i){if(e&1&&(c(0,"th",10),u(1),s()),e&2){let n=o().$index,r=o(2);l(),M(" ",r.headers[n]," ")}}function nt(e,i){if(e&1&&(c(0,"div",12),_(1,"stock-name-card",14),s()),e&2){let n=o().$implicit;l(),m("stock",n)}}function it(e,i){if(e&1&&(c(0,"span",13),u(1),s()),e&2){let n=o().$implicit,r=o().$index,t=o(2);m("ngStyle",$(2,tt,t.getCellColor(r,n))),l(),x(t.cells[r](n))}}function ot(e,i){if(e&1&&(c(0,"td",11),d(1,nt,2,1,"div",12)(2,it,2,4,"span",13),s()),e&2){let n=o().$index;l(),p(n===0?1:2)}}function at(e,i){if(e&1&&(c(0,"div",5),d(1,et,2,1,"th",8)(2,ot,3,1,"td",9),s()),e&2){let n=i.$implicit;m("matColumnDef",n)}}function rt(e,i){e&1&&_(0,"tr",15)}function lt(e,i){e&1&&_(0,"tr",16)}function mt(e,i){if(e&1&&(c(0,"table",4),y(1,at,3,1,"div",5,g),d(3,rt,1,0,"tr",6)(4,lt,1,0,"tr",7),s()),e&2){let n=o();m("dataSource",n.dataSource),l(),v(n.columnDefs),l(2),m("matHeaderRowDef",n.columnDefs)("matHeaderRowDefSticky",!0),l(),m("matRowDefColumns",n.columnDefs)}}function ct(e,i){if(e&1&&(c(0,"th",10)(1,"span"),u(2),s()()),e&2){let n=o().$index,r=o(2);l(2),x(r.etfHeaders[n])}}function st(e,i){if(e&1&&(c(0,"div",12),_(1,"stock-name-card",14),s()),e&2){let n=o().$implicit;l(),m("stock",n)}}function ft(e,i){if(e&1&&(c(0,"span"),u(1),s()),e&2){let n=o(2).$implicit,r=o().$index,t=o(2);l(),x(t.etfCells[r](n))}}function dt(e,i){if(e&1&&(c(0,"span"),u(1),Y(2,"currency"),s()),e&2){let n=o(2).$implicit,r=o().$index,t=o(2);l(),x(k(2,1,t.etfCells[r](n)))}}function _t(e,i){if(e&1&&d(0,ft,2,1,"span")(1,dt,3,3,"span"),e&2){let n=o(2).$index;p(n<13?0:-1),l(),p(n===13?1:-1)}}function pt(e,i){if(e&1&&(c(0,"td",11),d(1,st,2,1,"div",12)(2,_t,2,2),s()),e&2){let n=o().$index;l(),p(n===0?1:2)}}function ut(e,i){if(e&1&&(c(0,"div",5),d(1,ct,3,1,"th",8)(2,pt,3,1,"td",9),s()),e&2){let n=i.$implicit;m("matColumnDef",n)}}function Ct(e,i){e&1&&_(0,"tr",15)}function xt(e,i){e&1&&_(0,"tr",16)}function ht(e,i){if(e&1&&(c(0,"table",17),y(1,ut,3,1,"div",5,g),d(3,Ct,1,0,"tr",6)(4,xt,1,0,"tr",7),s()),e&2){let n=o();m("dataSource",n.sortedEtfs),l(),v(n.etfColumnDefs),l(2),m("matHeaderRowDef",n.etfColumnDefs)("matHeaderRowDefSticky",!0),l(),m("matRowDefColumns",n.etfColumnDefs)}}function Rt(e,i){if(e&1&&_(0,"container-card",3),e&2){o();let n=w(4);m("mainContentRef",n)}}var Mt=(()=>{let i=class i{constructor(r){this.dataService=r,this.transactions="portfolio",this.dataSource=new X,this.sortedEtfs=[],this.headers=["Symbol","Debt To Equity (MRQ)","Current Ratio (MRQ)","Earnings Growth (YOY)","Quarterly Revenue Growth (YOY)","Profit Margins","Forward PE","Forward EPS","PEG Ratio","Total Cash / Share","Revenue / Share","FCF Yield","FCF / Share","Return On Assets","Return On Equity","EV / EBITDA","EV / Revenue"],this.columnDefs=["symbol","debtToEquity","currentRatio","earningsQuarterlyGrowth","revenueGrowth","profitMargins","forwardPE","forwardEps","pegRatio","totalCashPerShare","revenuePerShare","freeCashflowYield","freeCashflowPerShare","returnOnAssets","returnOnEquity","enterpriseToEbitda","enterpriseToRevenue"],this.etfHeaders=["Symbol","Expense Ratio","Nav Price","Trailing PE","YTD Return","1 Month Return","3 month Return","1 Year Return","3 Year Return","5 year Return","10 Year return","3Y Beta","Total Assets"],this.etfColumnDefs=["symbol","annualReportExpenseRatio","navPrice","trailingPE","ytdReturn","1monthReturn","3monthReturn","1YearReturn","threeYearReturn","fiveYearReturn","tenYearReturn","beta3Year","totalAssets"],this.cells=[t=>"",t=>t.debtToEquity.fmt||0,t=>t.currentRatio.fmt||0,t=>t.earningsQuarterlyGrowth?.fmt||0,t=>t.revenueGrowth.fmt||0,t=>t.profitMargins.fmt||0,t=>t.forwardPE.fmt||0,t=>t.forwardEps.fmt||0,t=>t.pegRatio.fmt||0,t=>t.totalCashPerShare.fmt||0,t=>t.revenuePerShare.fmt||0,t=>`${(t.freeCashflowYield*100).toFixed(2)}%`||0,t=>`$${t.freeCashflowPerShare.toFixed(2)}`||0,t=>t.returnOnAssets.fmt||0,t=>t.returnOnEquity.fmt||0,t=>t.enterpriseToEbitda.fmt||0,t=>t.enterpriseToRevenue.fmt||0],this.etfCells=[t=>"",t=>t.profile.feesExpensesInvestment.annualReportExpenseRatio.fmt,t=>t.navPrice.fmt,t=>t.trailingPE.fmt,t=>t.fundPerformance.trailingReturns.ytd.fmt,t=>t.fundPerformance.trailingReturns.oneMonth.fmt,t=>t.fundPerformance.trailingReturns.threeMonth.fmt,t=>t.fundPerformance.trailingReturns.oneYear.fmt,t=>t.fundPerformance.trailingReturns.threeYear.fmt,t=>t.fundPerformance.trailingReturns.fiveYear.fmt,t=>t.fundPerformance.trailingReturns.tenYear.fmt,t=>t.beta3Year.raw,t=>t.totalAssets.fmt]}ngOnInit(){let r=Object.values(this.dataService.portfolioData).filter(a=>a.quoteType==="EQUITY"),t=Object.values(this.dataService.portfolioData).filter(a=>a.quoteType==="ETF");this.dataSource.data=r.map(a=>{let f=this.dataService.portfolioHoldings[a.symbol];return C(C({},a),f)}),this.sortedEtfs=t.map(a=>{let f=this.dataService.portfolioHoldings[a.symbol];return C(C({},a),f)}).sort((a,f)=>a.ytdReturn.raw-f.ytdReturn.raw)}ngAfterViewInit(){this.dataSource.sort=this.sort}getCellColor(r,t){let a=this.cells[r](t);return a<0||a[0]==="-"||a[1]==="-"?"chocolate":""}};i.\u0275fac=function(t){return new(t||i)(D(Q))},i.\u0275cmp=T({type:i,selectors:[["portfolio-financials"]],viewQuery:function(t,a){if(t&1&&(S(R,5),S(h,5)),t&2){let f;P(f=E())&&(a.table=f.first),P(f=E())&&(a.sort=f.first)}},inputs:{transactions:"transactions"},standalone:!0,features:[b],decls:6,vars:2,consts:[["stocksRef",""],["etfsRef",""],["title","Stocks",3,"mainContentRef"],["title","Exchange Traded Funds",3,"mainContentRef"],["mat-table","","matSort","","matSortActive","earningsQuarterlyGrowth","matSortDirection","asc",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"table-col-0"],[3,"ngStyle"],[3,"stock"],["mat-header-row",""],["mat-row",""],["mat-table","","matSort","","matSortActive","ytdReturn","matSortDirection","asc",3,"dataSource"]],template:function(t,a){if(t&1&&(d(0,mt,5,4,"ng-template",null,0,F),_(2,"container-card",2),d(3,ht,5,4,"ng-template",null,1,F)(5,Rt,1,1,"container-card",3)),t&2){let f=w(1);l(2),m("mainContentRef",f),l(3),p(a.sortedEtfs.length>0?5:-1)}},dependencies:[q,H,I,G,h,A,W,R,V,z,j,B,J,N,U,K,L,O,Z],styles:[".table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.mat-mdc-row[_ngcontent-%COMP%]{height:max-content}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}"]});let e=i;return e})();export{Mt as a};
