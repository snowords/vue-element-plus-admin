import{p as e,c as r}from"./index.e670f1c8.js";import{b as s,o as t,j as o,k as a,P as n,H as l,u as i,_ as u,g as m,Y as p}from"./vendor.eeac13a4.js";/* empty css                  */const c={class:"flex justify-center"},d={class:"text-center"},v=["src"],x={class:"text-14px text-[var(--el-color-info)]"},f={class:"mt-20px"},g=s({props:{type:e.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:s}){const g=e,{t:b}=r(),y={404:{url:"/vue-element-plus-admin/assets/404.904e236c.svg",message:b("error.pageError"),buttonText:b("error.returnToHome")},500:{url:"/vue-element-plus-admin/assets/500.40f0978f.svg",message:b("error.networkError"),buttonText:b("error.returnToHome")},403:{url:"/vue-element-plus-admin/assets/403.7832526d.svg",message:b("error.noPermission"),buttonText:b("error.returnToHome")}},T=()=>{s("errorClick",g.type)};return(r,s)=>(t(),o("div",c,[a("div",d,[a("img",{width:"350",src:y[e.type].url,alt:""},null,8,v),a("div",x,n(y[e.type].message),1),a("div",f,[l(i(u),{type:"primary",onClick:T},{default:m((()=>[p(n(y[e.type].buttonText),1)])),_:1})])])]))}});export{g as _};
