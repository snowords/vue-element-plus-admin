var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&s(e,o,r[o]);if(a)for(var o of a(r))n.call(r,o)&&s(e,o,r[o]);return e};import{V as o,e as i,w as l,r as c,u as p,aT as u,y as g,aU as m,aV as d,m as b}from"./vendor.eeac13a4.js";/* empty css                       *//* empty css                  *//* empty css                 *//* empty css                   */import{c as f}from"./index.f781cf29.js";const{t:v}=f(),y=e=>{const a=o({pageSize:10,currentPage:1,total:10,tableList:[],parmasObj:{},loading:!0,currentRow:null}),t=i((()=>d({params:{pageSize:a.pageSize,pageIndex:a.currentPage}},a.parmasObj)));l((()=>a.currentPage),(()=>{w.getList()})),l((()=>a.pageSize),(()=>{a.currentPage=1,w.getList()}));const n=c(),s=c(),f=async()=>{await b();const e=p(n);return e},y=async(t,n)=>{if(await((null==e?void 0:e.delListApi)&&(null==e?void 0:e.delListApi(t)))){g.success(v("common.delSuccess"));const e=(a.total%a.pageSize===n.length||1===a.pageSize)&&a.currentPage>1?a.currentPage-1:a.currentPage;a.currentPage=e,w.getList()}},w={getList:async()=>{var n;a.loading=!0;const s=await(null==e?void 0:e.getListApi(p(t)).catch((()=>{})).finally((()=>{a.loading=!1})));s&&(a.tableList=u(s.data||{},null==e?void 0:e.response.list),a.total=u(s.data||{},null==(n=null==e?void 0:e.response)?void 0:n.total)||0)},setProps:async(e={})=>{const a=await f();null==a||a.setProps(e)},setColumn:async e=>{const a=await f();null==a||a.setColumn(e)},getSelections:async()=>{const e=await f();return(null==e?void 0:e.selections)||[]},setSearchParmas:e=>{a.currentPage=1,a.parmasObj=Object.assign(a.parmasObj,{params:r({pageSize:a.pageSize,pageIndex:a.currentPage},e)}),w.getList()},delList:async(e,t,n=!0)=>{const s=await f();if(t){if(!(null==s?void 0:s.selections.length))return void g.warning(v("common.delNoData"))}else if(!a.currentRow)return void g.warning(v("common.delNoData"));const r={data:{ids:e}};n?m.confirm(v("common.delMessage"),v("common.delWarning"),{confirmButtonText:v("common.delOk"),cancelButtonText:v("common.delCancel"),type:"warning"}).then((async()=>{await y(r,e)})).catch((()=>{})):await y(r,e)}};return(null==e?void 0:e.props)&&w.setProps(e.props),{register:(e,a)=>{n.value=e,s.value=a},elTableRef:s,tableObject:a,methods:w}};export{y as u};
