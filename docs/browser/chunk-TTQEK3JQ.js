import{b as R,c as I}from"./chunk-JMLRKYOA.js";import"./chunk-I6X7ID45.js";import"./chunk-HSWCOCJ5.js";import"./chunk-FSC5F6KH.js";import{G as O,y as F}from"./chunk-ZT244NFY.js";import{b as T,c as V,d as H,e as L,f as b,g as D}from"./chunk-I2WXWEPM.js";import{a as P,b as w}from"./chunk-PR6IC7HB.js";import{$ as m,Aa as u,Db as v,Fa as h,Hc as E,Ka as d,Ua as t,V as f,Va as o,Wa as x,_ as l,_a as C,bb as c,db as p,nb as S,ob as a,ra as s,sa as _,wb as M,yc as y}from"./chunk-E7YHUEPY.js";function k(r,A){if(r&1){let e=C();t(0,"section")(1,"mat-accordion",3)(2,"mat-expansion-panel",4),c("opened",function(){l(e);let i=p();return m(i.setStep(0))}),t(3,"mat-expansion-panel-header")(4,"mat-panel-title"),a(5,"Open File"),o(),t(6,"mat-panel-description"),a(7," Load portfolio data from a csv or txt file "),t(8,"mat-icon"),a(9,"upload"),o()()(),t(10,"div",5)(11,"input",6),c("change",function(i){l(e);let g=p();return m(g.handleOpenFile(i))}),o()()(),t(12,"mat-expansion-panel",4),c("opened",function(){l(e);let i=p();return m(i.setStep(1))}),t(13,"mat-expansion-panel-header")(14,"mat-panel-title"),a(15,"Portfolio Editor"),o(),t(16,"mat-panel-description"),a(17," Manually enter your portfolio holdings "),t(18,"mat-icon"),a(19,"edit_note"),o()()(),x(20,"portfolio-editor"),o(),t(21,"mat-expansion-panel",4),c("opened",function(){l(e);let i=p();return m(i.setStep(2))}),t(22,"mat-expansion-panel-header")(23,"mat-panel-title"),a(24," Sign In "),o(),t(25,"mat-panel-description"),a(26," Sign in to your saved portfolio "),t(27,"mat-icon"),a(28,"login"),o()()(),a(29," blah blah blah "),o()()()}if(r&2){let e=p();s(2),d("expanded",e.step()===0),s(10),d("expanded",e.step()===1),s(9),d("expanded",e.step()===2)}}var ee=(()=>{class r{constructor(e,n){this.dataService=e,this.router=n,this.step=u(0),this.dataService.sanityCheck()&&this.router.navigateByUrl("/main")}setStep(e){this.step.set(e)}nextStep(){this.step.update(e=>e+1)}prevStep(){this.step.update(e=>e-1)}handleOpenFile(e){let n=e.target.files[0],i=new FileReader;i.onload=g=>{let j=i.result.split(`
`);this.dataService.generatePortfolioData(j)},i.readAsText(n)}static{this.\u0275fac=function(n){return new(n||r)(_(E),_(y))}}static{this.\u0275cmp=f({type:r,selectors:[["app-homepage-landing"]],standalone:!0,features:[M],decls:4,vars:1,consts:[["landingPageRef",""],[1,"add-margin"],["title","Choose your portfolio",3,"mainContentRef"],[1,"accordion"],["hideToggle","",3,"opened","expanded"],[1,"file-input"],["type","file","accept","text/csv",3,"change"]],template:function(n,i){if(n&1&&(h(0,k,30,3,"ng-template",null,0,v),t(2,"section",1),x(3,"container-card",2),o()),n&2){let g=S(1);s(3),d("mainContentRef",g)}},dependencies:[w,P,O,D,b,T,V,L,H,F,R,I],styles:[".file-input[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:2rem;padding:2rem}.subcontent[_ngcontent-%COMP%]{display:flex;align-items:center;padding-top:.5rem}.accordion[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;margin-right:0}.local[_ngcontent-%COMP%]{background-color:#4169e1}.signin[_ngcontent-%COMP%]{background-color:tomato}"],changeDetection:0})}}return r})();export{ee as HomepageLandingComponent};
