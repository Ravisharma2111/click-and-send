(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{12963:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n=r(87462),o=r(63366),i=r(67294);r(59864);var s=r(90512),a=r(58510),l=r(19420),c=r(90948),d=r(71657),m=r(15861),p=r(88111),u=r(82066),h=r(85893),x=(0,u.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=r(49990);let f=["slots","slotProps"],j=(0,c.ZP)(g.Z)(({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})})),b=(0,c.ZP)(x)({width:24,height:16});var Z=function(e){let{slots:t={},slotProps:r={}}=e,i=(0,o.Z)(e,f);return(0,h.jsx)("li",{children:(0,h.jsx)(j,(0,n.Z)({focusRipple:!0},i,{ownerState:e,children:(0,h.jsx)(b,(0,n.Z)({as:t.CollapsedIcon,ownerState:e},r.collapsedIcon))}))})},v=r(1977),w=r(8027);function y(e){return(0,w.ZP)("MuiBreadcrumbs",e)}let S=(0,v.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],_=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)},P=(0,c.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${S.li}`]:t.li},t.root]})({}),C=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),I=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),z=i.forwardRef(function(e,t){var r,a;let c=(0,d.Z)({props:e,name:"MuiBreadcrumbs"}),{children:m,className:p,component:u="nav",slots:x={},slotProps:g={},expandText:f="Show path",itemsAfterCollapse:j=1,itemsBeforeCollapse:b=1,maxItems:v=8,separator:w="/"}=c,y=(0,o.Z)(c,k),[S,z]=i.useState(!1),E=(0,n.Z)({},c,{component:u,expanded:S,expandText:f,itemsAfterCollapse:j,itemsBeforeCollapse:b,maxItems:v,separator:w}),B=_(E),N=(0,l.y)({elementType:x.CollapsedIcon,externalSlotProps:g.collapsedIcon,ownerState:E}),R=i.useRef(null),A=i.Children.toArray(m).filter(e=>i.isValidElement(e)).map((e,t)=>(0,h.jsx)("li",{className:B.li,children:e},`child-${t}`));return(0,h.jsx)(P,(0,n.Z)({ref:t,component:u,color:"text.secondary",className:(0,s.Z)(B.root,p),ownerState:E},y,{children:(0,h.jsx)(C,{className:B.ol,ref:R,ownerState:E,children:(r=S||v&&A.length<=v?A:b+j>=A.length?A:[...A.slice(0,b),(0,h.jsx)(Z,{"aria-label":f,slots:{CollapsedIcon:x.CollapsedIcon},slotProps:{collapsedIcon:N},onClick:()=>{z(!0);let e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...A.slice(A.length-j,A.length)],a=B.separator,r.reduce((e,t,n)=>(n<r.length-1?e=e.concat(t,(0,h.jsx)(I,{"aria-hidden":!0,className:a,ownerState:E,children:w},`separator-${n}`)):e.push(t),e),[]))})}))});var E=z},66397:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customer/subscription",function(){return r(20374)}])},34180:function(e,t,r){"use strict";r.d(t,{n:function(){return x}});var n=r(85893),o=r(87357),i=r(51233),s=r(44267),a=r(15861),l=r(67294),c=r(12963),d=r(23795),m=r(11163),p=r(41664),u=r.n(p);let h=()=>{let{asPath:e}=(0,m.useRouter)(),t=e.split("/");t.shift();let r=t.map((e,r)=>({breadcrumb:e,href:"/"+t.slice(0,r+1).join("/")}));return(0,n.jsxs)(c.Z,{mt:2,"aria-label":"breadcrumb",sx:{color:e=>e.palette.common.white,fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},children:[(0,n.jsx)(u(),{href:"/",legacyBehavior:!0,children:(0,n.jsx)(d.Z,{underline:"hover",color:"common.white",sx:{cursor:"pointer",fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},children:"Home"})}),r&&r.map((e,t)=>{var o;return t!=r.length-1?(0,n.jsx)(u(),{href:e.href,legacyBehavior:!0,children:(0,n.jsx)(d.Z,{sx:{textTransform:"capitalize"},underline:"hover",color:"inherit",children:e.breadcrumb})},"breadcrumb-".concat(t)):(0,n.jsx)(a.Z,{sx:{textTransform:"uppercase",color:e=>e.palette.common.white,fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},color:"text.secondary",children:e&&(null==e?void 0:null===(o=e.breadcrumb)||void 0===o?void 0:o.indexOf("-"))!==-1?e.breadcrumb.replace(/-/g," "):e.breadcrumb},"breadcrumb-".concat(t))})]})};var x=e=>{let{title:t,alt:r,src:c,srcWidth:d,imgSx:m,subTitle:p,titleLastWord:u}=e;return(0,n.jsx)(l.Fragment,{children:(0,n.jsxs)(o.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"350px",md:"350px",sm:"100%",xs:"100%"},backgroundImage:"url(../../../".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center","&::before":{content:'""',backgroundImage:"linear-gradient(to left, rgba(77,39,63,0) 0%, #463b46 160%)",position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:7}},children:[(0,n.jsx)(i.Z,{sx:{zIndex:8,position:"absolute",left:"8em",top:"6em"},children:(0,n.jsx)(h,{})}),(0,n.jsxs)(s.Z,{sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9},children:[(0,n.jsxs)(a.Z,{gutterBottom:!0,fontSize:44,component:"h1",fontWeight:600,color:"white",children:[t,(0,n.jsx)(a.Z,{component:"span",gutterBottom:!0,fontSize:44,fontWeight:600,color:"primary",children:u})]}),(0,n.jsx)(a.Z,{gutterBottom:!0,component:"p",fontWeight:400,width:400,fontSize:16,color:"white",m:"auto",children:p})]})]})})}},20374:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return W}});var n,o=r(85893),i=r(83590),s=r(26107);r(34180);var a=r(98355),l=r(50261),c=r(63763),d=r(87357),m=r(46574),p=r(51233),u=r(12963),h=r(15861),x=r(44267),g=r(86886),f=r(66242),j=r(78462),b=r(97212),Z=r(48885),v=r(59334),w=r(69417),y=r(41664),S=r.n(y),k=r(67294);r(99042);var _="https://js.stripe.com/v3",P=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,C=function(){for(var e=document.querySelectorAll('script[src^="'.concat(_,'"]')),t=0;t<e.length;t++){var r=e[t];if(P.test(r.src))return r}return null},I=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(_).concat(t);var n=document.head||document.body;if(!n)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r},z=null,E=null,B=null;Promise.resolve().then(function(){return n||(n=(null!==z?z:(z=new Promise(function(e,t){if("undefined"==typeof window||"undefined"==typeof document){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var r,n=C();n?n&&null!==B&&null!==E&&(n.removeEventListener("load",B),n.removeEventListener("error",E),null===(r=n.parentNode)||void 0===r||r.removeChild(n),n=I(null)):n=I(null),B=function(){window.Stripe?e(window.Stripe):t(Error("Stripe.js not available"))},E=function(){t(Error("Failed to load Stripe.js"))},n.addEventListener("load",B),n.addEventListener("error",E)}catch(e){t(e);return}})).catch(function(e){return z=null,Promise.reject(e)})).catch(function(e){return n=null,Promise.reject(e)}))}).catch(function(e){console.warn(e)});var N=r(41483),R=r(21425),A=()=>{let{user:e}=(0,R.E)(),t=null==e?void 0:e.plan,[r,n]=(0,k.useState)(0),[i,s]=(0,k.useState)([]),[y,_]=(0,k.useState)(!1),[P,C]=(0,k.useState)(null),[I,z]=(0,k.useState)(null),[E,B]=(0,k.useState)(!1),A=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"customer";_(!0),await c.Z.get("/api/auth/master/plan/list/".concat(e,"/").concat(1)).then(e=>{200===e.status&&(_(!1),s(null==e?void 0:e.data.view_data))}).catch(e=>{_(!1),console.log("error",e)})};k.useEffect(()=>{A()},[]);let F=async e=>{z(e),console.log("Selected Plan: ",e),B(!0)};return console.log("datadata",i),(0,o.jsx)(k.Fragment,{children:E?(0,o.jsx)(N.Z,{paymentDetails:I,setShowPayment:B}):(0,o.jsx)(d.Z,{sx:{backgroundColor:"#f5f5f5",pb:6},children:y?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(m.Z,{children:(0,o.jsx)(l.Z,{})})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"550px",md:"550px",sm:"100%",xs:"100%"},backgroundImage:'url("/banner/banner.png")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[(0,o.jsx)(p.Z,{className:"Subscritption_box_stack_responsive",sx:{zIndex:8,position:"absolute",left:"8em",top:"7em"},children:(0,o.jsxs)(u.Z,{"aria-label":"breadcrumb",sx:{color:"common.white"},children:[(0,o.jsx)(d.Z,{component:S(),sx:{textDecoration:"none"},color:"common.white",href:"/",children:"Home"}),(0,o.jsx)(d.Z,{component:S(),sx:{textDecoration:"none"},color:"common.white",href:"/dashboard/customer/job_posted",children:"Dashboard"}),(0,o.jsx)(h.Z,{sx:{textDecoration:"none",fontWeight:600},color:"common.white",children:"Subscription"})]})}),(0,o.jsx)(x.Z,{className:"dashboard_subscription_box_stack_responsive",sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9},children:(0,o.jsxs)(p.Z,{spacing:4,children:[(0,o.jsx)(h.Z,{gutterBottom:!0,fontSize:44,component:"h2",fontWeight:600,color:"white",variant:"h2",children:"Our Subscription Plans"}),(0,o.jsx)(h.Z,{variant:"body1",component:"p",color:"common.white",children:"Choose the right plan made for you"})]})})]}),(0,o.jsx)(d.Z,{className:"subscription_plan_box_stack_responsive",sx:{position:"relative",top:-140,zIndex:6},children:(0,o.jsx)(m.Z,{children:(0,o.jsx)(d.Z,{pb:0,children:(0,o.jsx)(g.ZP,{className:"DashboardSubscritption_Grid_stack_responsive",container:!0,spacing:6,children:i&&(null==i?void 0:i.length)>0&&i.map((e,r)=>{let i=t.plan_id===plan.id;return(0,o.jsx)(g.ZP,{item:!0,md:4,children:(0,o.jsx)(f.Z,{sx:{borderRadius:"20px"},onMouseOver:()=>n(r),onMouseOut:()=>n(!1),children:(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(d.Z,{sx:{textAlign:"center",py:5,backgroundImage:"url(/assets/images/home/subscription/subscription_banner.png)",backgroundRepeat:"no-repeat",objectFit:"contain"},children:(0,o.jsx)(d.Z,{children:(0,o.jsx)(h.Z,{variant:"h4",color:"common.white",fontWeight:600,children:null==e?void 0:e.name})})}),(0,o.jsx)(d.Z,{children:(0,o.jsxs)(p.Z,{direction:"column",spacing:.6,alignItems:"center",justifyContent:"center",children:[(0,o.jsxs)(h.Z,{variant:"h3",children:["$",null==e?void 0:e.price]}),(0,o.jsx)(h.Z,{variant:"body1",fontWeight:400,children:"/month"})]})}),(0,o.jsxs)(p.Z,{spacing:1,children:[(0,o.jsx)(d.Z,{children:(0,o.jsx)(d.Z,{textAlign:"center",children:(0,o.jsxs)(j.Z,{children:[(0,o.jsxs)(b.ZP,{sx:{position:"relative"},children:[(0,o.jsx)(Z.Z,{sx:{position:"absolute"},children:(0,o.jsx)(a.Z,{icon:"charm:square-tick",color:e=>e.palette.success.main})}),(0,o.jsx)(v.Z,{sx:{textAlign:"center"},primary:"Online System"})]}),(0,o.jsxs)(b.ZP,{sx:{position:"relative"},children:[(0,o.jsx)(Z.Z,{sx:{position:"absolute"},children:(0,o.jsx)(a.Z,{icon:"charm:square-tick",color:e=>e.palette.success.main})}),(0,o.jsx)(v.Z,{sx:{textAlign:"center"},primary:" Free apps"})]}),(0,o.jsxs)(b.ZP,{sx:{position:"relative"},children:[(0,o.jsx)(Z.Z,{sx:{position:"absolute"},children:(0,o.jsx)(a.Z,{icon:"system-uicons:cross",color:"red"})}),(0,o.jsx)(v.Z,{sx:{textAlign:"center"},primary:" Free apps"})]}),(0,o.jsxs)(b.ZP,{sx:{position:"relative"},children:[(0,o.jsx)(Z.Z,{sx:{position:"absolute"},children:(0,o.jsx)(a.Z,{icon:"charm:square-tick",color:e=>e.palette.success.main})}),(0,o.jsx)(v.Z,{sx:{textAlign:"center"},primary:"live preview"})]}),(0,o.jsxs)(b.ZP,{sx:{position:"relative"},children:[(0,o.jsx)(Z.Z,{sx:{position:"absolute"},children:(0,o.jsx)(a.Z,{icon:"system-uicons:cross",color:"red"})}),(0,o.jsx)(v.Z,{sx:{textAlign:"center"},primary:"Support unlimited"}),"theme"]})]})})}),(0,o.jsx)(p.Z,{alignItems:"center",children:i?(0,o.jsx)(w.Z,{fullWidth:!0,variant:"contained",sx:{px:5},onClick:()=>F(plan),children:"Activate Plan"}):(0,o.jsx)(w.Z,{fullWidth:!0,variant:"contained",sx:{px:5},onClick:()=>F(plan),children:"Get Started"})})]})]})})},r)})})})})})]})})})},F=r(28482);let M=()=>{let e=(0,F.TA)({});return(0,o.jsx)(i.Z,{children:(0,o.jsx)(A,{formik:e})})};M.getLayout=function(e){return(0,o.jsx)(s.l,{children:e})};var W=M}},function(e){e.O(0,[4885,1810,678,3827,1994,6034,4815,8251,4576,3879,5981,6107,5324,2593,9774,2888,179],function(){return e(e.s=66397)}),_N_E=e.O()}]);