import{p as a,b as t,m as l}from"./index.f781cf29.js";import{b as e,V as r,aK as n,B as s,e as i,w as o,u,o as c,j as p,P as m,n as V}from"./vendor.eeac13a4.js";const d=e({props:{startVal:a.number.def(0),endVal:a.number.def(2021),duration:a.number.def(3e3),autoplay:a.bool.def(!0),decimals:a.number.validate((a=>a>=0)).def(0),decimal:a.string.def("."),separator:a.string.def(","),prefix:a.string.def(""),suffix:a.string.def(""),useEasing:a.bool.def(!0),easingFn:{type:Function,default:(a,t,l,e)=>l*(1-Math.pow(2,-10*a/e))*1024/1023+t}},emits:["mounted","callback"],setup(a,{expose:e,emit:d}){const f=a,{getPrefixCls:F}=t(),g=F("count-to"),b=a=>{const{decimals:t,decimal:e,separator:r,suffix:n,prefix:s}=f;a=Number(a).toFixed(t);const i=(a+="").split(".");let o=i[0];const u=i.length>1?e+i[1]:"",c=/(\d+)(\d{3})/;if(r&&!l(r))for(;c.test(o);)o=o.replace(c,"$1"+r+"$2");return s+o+u+n},S=r({localStartVal:f.startVal,displayValue:b(f.startVal),printVal:null,paused:!1,localDuration:f.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),A=n(S,"displayValue");s((()=>{f.autoplay&&D(),d("mounted")}));const x=i((()=>f.startVal>f.endVal));o([()=>f.startVal,()=>f.endVal],(()=>{f.autoplay&&D()}));const D=()=>{const{startVal:a,duration:t}=f;S.localStartVal=a,S.startTime=null,S.localDuration=t,S.paused=!1,S.rAF=requestAnimationFrame(j)},y=()=>{cancelAnimationFrame(S.rAF)},T=()=>{S.startTime=null,S.localDuration=+S.remaining,S.localStartVal=+S.printVal,requestAnimationFrame(j)},j=a=>{const{useEasing:t,easingFn:l,endVal:e}=f;S.startTime||(S.startTime=a),S.timestamp=a;const r=a-S.startTime;S.remaining=S.localDuration-r,t?u(x)?S.printVal=S.localStartVal-l(r,0,S.localStartVal-e,S.localDuration):S.printVal=l(r,S.localStartVal,e-S.localStartVal,S.localDuration):u(x)?S.printVal=S.localStartVal-(S.localStartVal-e)*(r/S.localDuration):S.printVal=S.localStartVal+(e-S.localStartVal)*(r/S.localDuration),u(x)?S.printVal=S.printVal<e?e:S.printVal:S.printVal=S.printVal>e?e:S.printVal,S.displayValue=b(S.printVal),r<S.localDuration?S.rAF=requestAnimationFrame(j):d("callback")};return e({pauseResume:()=>{S.paused?(T(),S.paused=!1):(y(),S.paused=!0)},reset:()=>{S.startTime=null,cancelAnimationFrame(S.rAF),S.displayValue=b(f.startVal)},start:D,pause:y}),(a,t)=>(c(),p("span",{class:V(u(g))},m(u(A)),3))}});export{d as _};
