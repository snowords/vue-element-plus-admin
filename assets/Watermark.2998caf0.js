import{_ as e}from"./ContentWrap.ee32e73c.js";import{u as t,c as a}from"./index.f781cf29.js";import{b as n,e as r,aF as o,o as s,f as l,g as i,u as m,H as d,_ as c,Y as p,P as u}from"./vendor.eeac13a4.js";/* empty css                  *//* empty css                *//* empty css                  */const f=Symbol("watermark-dom");const g=n({setup(n){const g=t(),k=r((()=>g.getTitle)),{setWatermark:y,clear:w}=function(e=document.body){let t=()=>{};const a=f.toString(),n=()=>{const n=document.getElementById(a);if(n){const t=e;t&&t.removeChild(n)}window.removeEventListener("resize",t)},r=t=>{n();const r=document.createElement("canvas");r.width=300,r.height=240;const o=r.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,r.width/20,r.height));const s=document.createElement("div");return s.id=a,s.style.pointerEvents="none",s.style.top="0px",s.style.left="0px",s.style.position="absolute",s.style.zIndex="100000000",s.style.width=document.documentElement.clientWidth+"px",s.style.height=document.documentElement.clientHeight+"px",s.style.background="url("+r.toDataURL("image/png")+") left top repeat",e&&e.appendChild(s),a};return{setWatermark:function(e){r(e),t=()=>{r(e)},window.addEventListener("resize",t)},clear:n}}(),{t:h}=a();return o((()=>{w()})),(t,a)=>(s(),l(m(e),{title:m(h)("watermarkDemo.watermark")},{default:i((()=>[d(m(c),{type:"primary",onClick:a[0]||(a[0]=e=>m(y)(m(k)))},{default:i((()=>[p(u(m(h)("watermarkDemo.createdWatermark")),1)])),_:1}),d(m(c),{type:"danger",onClick:m(w)},{default:i((()=>[p(u(m(h)("watermarkDemo.clearWatermark")),1)])),_:1},8,["onClick"]),d(m(c),{type:"warning",onClick:a[1]||(a[1]=e=>m(y)(`${m(k)}-new`))},{default:i((()=>[p(u(m(h)("watermarkDemo.resetWatermark")),1)])),_:1})])),_:1},8,["title"]))}});export{g as default};
