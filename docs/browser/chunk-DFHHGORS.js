import{i as y}from"./chunk-E5M4GV6I.js";import{$b as m,Cb as h,Mc as c,Sa as o,Sc as p,Ya as l,fa as n,qb as a}from"./chunk-3MUY6BAD.js";var C=(()=>{let t=class t{constructor(e){this.sanitizer=e,this.symbol="AAPL",this.width="100%",this.height="450px",this.style={}}ngOnInit(){this.symbol==="SCHD"&&(this.symbol="ETF:SCHD"),this.safeUrl=this.getChartUrl(this.symbol),this.style={width:this.width,height:this.height}}getChartUrl(e){let s="https://wallmine.com/widgets/chart/"+e;return this.sanitizer.bypassSecurityTrustResourceUrl(s)}};t.\u0275fac=function(i){return new(i||t)(l(y))},t.\u0275cmp=n({type:t,selectors:[["wallmine-chart"]],inputs:{symbol:"symbol",width:"width",height:"height"},standalone:!0,features:[m],decls:1,vars:2,consts:[["async","","frameborder","0","allowtransparency","true","scrolling","no",3,"src","ngStyle"]],template:function(i,s){i&1&&h(0,"iframe",0),i&2&&a("src",s.safeUrl,o)("ngStyle",s.style)},dependencies:[p,c]});let r=t;return r})();export{C as a};
