(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1055],{12963:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var o=r(87462),n=r(63366),i=r(67294);r(59864);var a=r(90512),l=r(58510),s=r(19420),c=r(90948),d=r(71657),h=r(15861),m=r(88111),p=r(82066),u=r(85893),x=(0,p.Z)((0,u.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=r(49990);let f=["slots","slotProps"],b=(0,c.ZP)(g.Z)(({theme:e})=>(0,o.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,m._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(e.palette.grey[600],.12)})})),Z=(0,c.ZP)(x)({width:24,height:16});var j=function(e){let{slots:t={},slotProps:r={}}=e,i=(0,n.Z)(e,f);return(0,u.jsx)("li",{children:(0,u.jsx)(b,(0,o.Z)({focusRipple:!0},i,{ownerState:e,children:(0,u.jsx)(Z,(0,o.Z)({as:t.CollapsedIcon,ownerState:e},r.collapsedIcon))}))})},v=r(1977),w=r(8027);function y(e){return(0,w.ZP)("MuiBreadcrumbs",e)}let S=(0,v.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],z=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)},B=(0,c.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${S.li}`]:t.li},t.root]})({}),_=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),I=i.forwardRef(function(e,t){var r,l;let c=(0,d.Z)({props:e,name:"MuiBreadcrumbs"}),{children:h,className:m,component:p="nav",slots:x={},slotProps:g={},expandText:f="Show path",itemsAfterCollapse:b=1,itemsBeforeCollapse:Z=1,maxItems:v=8,separator:w="/"}=c,y=(0,n.Z)(c,k),[S,I]=i.useState(!1),P=(0,o.Z)({},c,{component:p,expanded:S,expandText:f,itemsAfterCollapse:b,itemsBeforeCollapse:Z,maxItems:v,separator:w}),R=z(P),N=(0,s.y)({elementType:x.CollapsedIcon,externalSlotProps:g.collapsedIcon,ownerState:P}),W=i.useRef(null),M=i.Children.toArray(h).filter(e=>i.isValidElement(e)).map((e,t)=>(0,u.jsx)("li",{className:R.li,children:e},`child-${t}`));return(0,u.jsx)(B,(0,o.Z)({ref:t,component:p,color:"text.secondary",className:(0,a.Z)(R.root,m),ownerState:P},y,{children:(0,u.jsx)(_,{className:R.ol,ref:W,ownerState:P,children:(r=S||v&&M.length<=v?M:Z+b>=M.length?M:[...M.slice(0,Z),(0,u.jsx)(j,{"aria-label":f,slots:{CollapsedIcon:x.CollapsedIcon},slotProps:{collapsedIcon:N},onClick:()=>{I(!0);let e=W.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...M.slice(M.length-b,M.length)],l=R.separator,r.reduce((e,t,o)=>(o<r.length-1?e=e.concat(t,(0,u.jsx)(C,{"aria-hidden":!0,className:l,ownerState:P,children:w},`separator-${o}`)):e.push(t),e),[]))})}))});var P=I},40836:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return r(62853)}])},34180:function(e,t,r){"use strict";r.d(t,{n:function(){return x}});var o=r(85893),n=r(87357),i=r(51233),a=r(44267),l=r(15861),s=r(67294),c=r(12963),d=r(23795),h=r(11163),m=r(41664),p=r.n(m);let u=()=>{let{asPath:e}=(0,h.useRouter)(),t=e.split("/");t.shift();let r=t.map((e,r)=>({breadcrumb:e,href:"/"+t.slice(0,r+1).join("/")}));return(0,o.jsxs)(c.Z,{mt:2,"aria-label":"breadcrumb",sx:{color:e=>e.palette.common.white,fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},children:[(0,o.jsx)(p(),{href:"/",legacyBehavior:!0,children:(0,o.jsx)(d.Z,{underline:"hover",color:"common.white",sx:{cursor:"pointer",fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},children:"Home"})}),r&&r.map((e,t)=>{var n;return t!=r.length-1?(0,o.jsx)(p(),{href:e.href,legacyBehavior:!0,children:(0,o.jsx)(d.Z,{sx:{textTransform:"capitalize"},underline:"hover",color:"inherit",children:e.breadcrumb})},"breadcrumb-".concat(t)):(0,o.jsx)(l.Z,{sx:{textTransform:"uppercase",color:e=>e.palette.common.white,fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},color:"text.secondary",children:e&&(null==e?void 0:null===(n=e.breadcrumb)||void 0===n?void 0:n.indexOf("-"))!==-1?e.breadcrumb.replace(/-/g," "):e.breadcrumb},"breadcrumb-".concat(t))})]})};var x=e=>{let{title:t,alt:r,src:c,srcWidth:d,imgSx:h,subTitle:m,titleLastWord:p}=e;return(0,o.jsx)(s.Fragment,{children:(0,o.jsxs)(n.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"350px",md:"350px",sm:"100%",xs:"100%"},backgroundImage:"url(../../../".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center","&::before":{content:'""',backgroundImage:"linear-gradient(to left, rgba(77,39,63,0) 0%, #463b46 160%)",position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:7}},children:[(0,o.jsx)(i.Z,{sx:{zIndex:8,position:"absolute",left:"8em",top:"6em"},children:(0,o.jsx)(u,{})}),(0,o.jsxs)(a.Z,{sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9},children:[(0,o.jsxs)(l.Z,{gutterBottom:!0,fontSize:44,component:"h1",fontWeight:600,color:"white",children:[t,(0,o.jsx)(l.Z,{component:"span",gutterBottom:!0,fontSize:44,fontWeight:600,color:"primary",children:p})]}),(0,o.jsx)(l.Z,{gutterBottom:!0,component:"p",fontWeight:400,width:400,fontSize:16,color:"white",m:"auto",children:m})]})]})})}},54762:function(e,t,r){"use strict";r.d(t,{J:function(){return l}});var o=r(85893),n=r(87357),i=r(51233),a=r(15861);r(67294);var l=e=>{let{title:t}=e;return(0,o.jsx)(n.Z,{sx:{width:"100%",textAlign:"center",my:4},children:(0,o.jsxs)(i.Z,{alignItems:"center",children:[(0,o.jsx)(n.Z,{children:(0,o.jsx)(a.Z,{variant:"h5",children:t})}),(0,o.jsx)(n.Z,{component:"img",sx:{width:"400px"},src:"/assets/images/home/new/banner-image.jpg",alt:"truck"})]})})}},50261:function(e,t,r){"use strict";var o=r(85893),n=r(66242),i=r(78445),a=r(88078),l=r(44267),s=r(67294);t.Z=()=>(0,o.jsxs)(n.Z,{sx:{maxWidth:"100%",my:4},children:[(0,o.jsx)(i.Z,{avatar:(0,o.jsx)(a.Z,{animation:"wave",variant:"circular",width:40,height:40}),title:(0,o.jsx)(a.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:(0,o.jsx)(a.Z,{animation:"wave",height:10,width:"40%"})}),(0,o.jsx)(a.Z,{sx:{height:190},animation:"wave",variant:"rectangular"}),(0,o.jsx)(l.Z,{children:(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(a.Z,{animation:"wave",height:10,style:{marginBottom:6}}),(0,o.jsx)(a.Z,{animation:"wave",height:10,width:"80%"})]})})]})},68936:function(e,t,r){"use strict";var o=r(85893),n=r(45697),i=r.n(n),a=r(67294),l=r(23795),s=r(15861),c=r(13718);let d=(0,a.forwardRef)((e,t)=>{let{asLink:r,variant:n="body1",line:i=2,persistent:a=!1,children:d,sx:h,...m}=e,{lineHeight:p}=(0,c.Z)(n),u={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:i,WebkitBoxOrient:"vertical",...a&&{height:p*i},...h};return r?(0,o.jsx)(l.Z,{color:"inherit",ref:t,variant:n,sx:{...u},...m,children:d}):(0,o.jsx)(s.Z,{ref:t,variant:n,sx:{...u},...m,children:d})});d.propTypes={sx:i().object,asLink:i().bool,line:i().number,persistent:i().bool,children:i().node,variant:i().oneOf(["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"])},t.Z=d},13718:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(2734),n=r(42076),i=r(32074);function a(e){let t=(0,o.Z)(),r=(0,n.z)(),a=t.breakpoints.up("xl"===r?"lg":r),l=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&t.typography[e][a]?t.typography[e][a]:t.typography[e],s=(0,i.cv)(l.fontSize),c=Number(t.typography[e].lineHeight)*s,{fontWeight:d,letterSpacing:h}=t.typography[e];return{fontSize:s,lineHeight:c,fontWeight:d,letterSpacing:h}}},62853:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var o=r(85893),n=r(67294),i=r(26107),a=r(28482),l=r(34180),s=r(54762),c=r(50261),d=r(51621),h=r(63763),m=r(87357),p=r(46574),u=r(86886),x=r(11163),g=e=>{let{formik:t}=e;(0,x.useRouter)();let[r,i]=n.useState(!1),[a,g]=(0,n.useState)(""),f=async()=>{i(!0),await h.Z.get("api/front/blogs").then(e=>{var t;(null==e?void 0:e.status)===200?(i(!1),g(null===(t=e.data.view_data)||void 0===t?void 0:t.data)):(i(!1),console.log("error"))}).catch(e=>{i(!1),console.log(e,"Blog Page")})};return(0,n.useEffect)(()=>{f()},[]),(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)(l.n,{src:"/blog_banner.png",alt:"",title:"Welcome to Our ",titleLastWord:"Blogs",subTitle:"Here are some Informational Blogs to enhance   your understanding of of our website."}),(0,o.jsx)(m.Z,{py:9,pb:14,children:(0,o.jsx)(p.Z,{children:r?(0,o.jsx)(c.Z,{}):(0,o.jsx)(u.ZP,{container:!0,spacing:4,children:a&&a.length>0?(0,o.jsx)(d.Z,{data:a}):(0,o.jsx)(o.Fragment,{children:!r&&a.length<=0&&(0,o.jsx)(s.J,{title:"No Blog"})})})})})]})};let f=()=>{let e=(0,a.TA)({});return(0,o.jsx)(g,{formik:e})};f.getLayout=function(e){return(0,o.jsx)(i.l,{children:e})};var b=f},51621:function(e,t,r){"use strict";var o=r(85893),n=r(68936),i=r(86886),a=r(66242),l=r(87357),s=r(44267),c=r(51233),d=r(15861),h=r(69661),m=r(67720),p=r(30381),u=r.n(p),x=r(11163);t.Z=e=>{let{data:t}=e,r=(0,x.useRouter)();return(0,o.jsx)(o.Fragment,{children:t&&t.map((e,t)=>(console.log(e,"dattaa"),(0,o.jsx)(i.ZP,{className:"commonblog_grid_responsive",item:!0,md:4,children:(0,o.jsxs)(a.Z,{sx:{borderRadius:"5px",height:"430px"},children:[(0,o.jsx)(l.Z,{component:"img",width:"100%",height:200,sx:{objectFit:"cover"},src:"".concat(null==e?void 0:e.base_url).concat(null==e?void 0:e.image),alt:"blog"}),(0,o.jsx)(s.Z,{sx:{height:"52%"},children:(0,o.jsxs)(c.Z,{height:"100%",justifyContent:"space-between",children:[(0,o.jsxs)(c.Z,{spacing:1,children:[(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{fontSize:18,fontWeight:600,children:null==e?void 0:e.title})}),(0,o.jsxs)(c.Z,{spacing:1,direction:"row",alignItems:"center",children:[(0,o.jsx)(l.Z,{children:(0,o.jsx)(h.Z,{sx:{width:"23.59px",height:"24.28px"}})}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{component:"h2",fontSize:14,fontWeight:500,children:"User Name"})}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(m.Z,{sx:{borderStyle:"dashed",width:"50px"}})}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{fontWeight:400,fontSize:10,component:"h6",color:e=>e.palette.grey[500],children:u()(null==e?void 0:e.created_at).format("MMM-DD-YYYY")})})]}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(n.Z,{sx:{fontSize:"12.19px"},color:e=>e.palette.grey[500],line:3,children:null==e?void 0:e.description})})]}),(0,o.jsx)(l.Z,{sx:{mt:2},children:(0,o.jsx)(d.Z,{color:"primary",onClick:()=>r.push("/blogs/blog_detail/".concat(e.slug)),fontWeight:600,sx:{cursor:"pointer",position:"relative",fontSize:"14.63px","&::after":{content:'""',position:"relative",width:"65px",height:"2px",bottom:0,left:0,background:e=>e.palette.dark.dark,display:"block",marginTop:.2}},children:"View Blog"})})]})})]})},t)))})}}},function(e){e.O(0,[4885,678,3827,1994,6034,4815,3171,5981,6107,9774,2888,179],function(){return e(e.s=40836)}),_N_E=e.O()}]);