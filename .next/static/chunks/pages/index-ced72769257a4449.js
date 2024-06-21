(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{87153:function(e,r,n){"use strict";var i=n(64836);r.Z=void 0;var t=i(n(64938)),o=n(85893),s=(0,t.default)((0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");r.Z=s},93619:function(e,r,n){"use strict";var i=n(64836);r.Z=void 0;var t=i(n(64938)),o=n(85893),s=(0,t.default)((0,o.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");r.Z=s},22797:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});var i=n(87462),t=n(63366),o=n(67294),s=n(90512),a=n(58510),c=n(90948),l=n(71657),d=n(1977),x=n(8027);function m(e){return(0,x.ZP)("MuiAccordionDetails",e)}(0,d.Z)("MuiAccordionDetails",["root"]);var h=n(85893);let p=["className"],u=e=>{let{classes:r}=e;return(0,a.Z)({root:["root"]},m,r)},j=(0,c.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Z=o.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiAccordionDetails"}),{className:o}=n,a=(0,t.Z)(n,p),c=u(n);return(0,h.jsx)(j,(0,i.Z)({className:(0,s.Z)(c.root,o),ref:r,ownerState:n},a))});var g=Z},38895:function(e,r,n){"use strict";n.d(r,{Z:function(){return w}});var i=n(63366),t=n(87462),o=n(67294),s=n(90512),a=n(58510),c=n(90948),l=n(71657),d=n(49990),x=n(64861),m=n(1977),h=n(8027);function p(e){return(0,h.ZP)("MuiAccordionSummary",e)}let u=(0,m.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var j=n(85893);let Z=["children","className","expandIcon","focusVisibleClassName","onClick"],g=e=>{let{classes:r,expanded:n,disabled:i,disableGutters:t}=e;return(0,a.Z)({root:["root",n&&"expanded",i&&"disabled",!t&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!t&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},p,r)},f=(0,c.ZP)(d.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{let n={duration:e.transitions.duration.shortest};return(0,t.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${u.disabled})`]:{cursor:"pointer"}},!r.disableGutters&&{[`&.${u.expanded}`]:{minHeight:64}})}),v=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,r)=>r.content})(({theme:e,ownerState:r})=>(0,t.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!r.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${u.expanded}`]:{margin:"20px 0"}})),y=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,r)=>r.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${u.expanded}`]:{transform:"rotate(180deg)"}})),b=o.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiAccordionSummary"}),{children:a,className:c,expandIcon:d,focusVisibleClassName:m,onClick:h}=n,p=(0,i.Z)(n,Z),{disabled:u=!1,disableGutters:b,expanded:w,toggle:S}=o.useContext(x.Z),k=(0,t.Z)({},n,{expanded:w,disabled:u,disableGutters:b}),C=g(k);return(0,j.jsxs)(f,(0,t.Z)({focusRipple:!1,disableRipple:!0,disabled:u,component:"div","aria-expanded":w,className:(0,s.Z)(C.root,c),focusVisibleClassName:(0,s.Z)(C.focusVisible,m),onClick:e=>{S&&S(e),h&&h(e)},ref:r,ownerState:k},p,{children:[(0,j.jsx)(v,{className:C.content,ownerState:k,children:a}),d&&(0,j.jsx)(y,{className:C.expandIconWrapper,ownerState:k,children:d})]}))});var w=b},67358:function(e,r,n){"use strict";n.d(r,{Z:function(){return w}});var i=n(63366),t=n(87462),o=n(67294);n(59864);var s=n(90512),a=n(58510),c=n(90948),l=n(71657),d=n(57922),x=n(90629),m=n(64861),h=n(49299),p=n(1977),u=n(8027);function j(e){return(0,u.ZP)("MuiAccordion",e)}let Z=(0,p.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);var g=n(85893);let f=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],v=e=>{let{classes:r,square:n,expanded:i,disabled:t,disableGutters:o}=e;return(0,a.Z)({root:["root",!n&&"rounded",i&&"expanded",t&&"disabled",!o&&"gutters"],region:["region"]},j,r)},y=(0,c.ZP)(x.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[{[`& .${Z.region}`]:r.region},r.root,!n.square&&r.rounded,!n.disableGutters&&r.gutters]}})(({theme:e})=>{let r={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${Z.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${Z.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:r})=>(0,t.Z)({},!r.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!r.disableGutters&&{[`&.${Z.expanded}`]:{margin:"16px 0"}})),b=o.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiAccordion"}),{children:a,className:c,defaultExpanded:x=!1,disabled:p=!1,disableGutters:u=!1,expanded:j,onChange:Z,square:b=!1,TransitionComponent:w=d.Z,TransitionProps:S}=n,k=(0,i.Z)(n,f),[C,P]=(0,h.Z)({controlled:j,default:x,name:"Accordion",state:"expanded"}),z=o.useCallback(e=>{P(!C),Z&&Z(e,!C)},[C,Z,P]),[A,...I]=o.Children.toArray(a),F=o.useMemo(()=>({expanded:C,disabled:p,disableGutters:u,toggle:z}),[C,p,u,z]),R=(0,t.Z)({},n,{square:b,disabled:p,disableGutters:u,expanded:C}),_=v(R);return(0,g.jsxs)(y,(0,t.Z)({className:(0,s.Z)(_.root,c),ref:r,ownerState:R,square:b},k,{children:[(0,g.jsx)(m.Z.Provider,{value:F,children:A}),(0,g.jsx)(w,(0,t.Z)({in:C,timeout:"auto"},S,{children:(0,g.jsx)("div",{"aria-labelledby":A.props.id,id:A.props["aria-controls"],role:"region",className:_.region,children:I})}))]}))});var w=b},64861:function(e,r,n){"use strict";var i=n(67294);let t=i.createContext({});r.Z=t},75557:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(13533)}])},34180:function(e,r,n){"use strict";n.d(r,{n:function(){return u}});var i=n(85893),t=n(87357),o=n(51233),s=n(44267),a=n(15861),c=n(67294),l=n(12963),d=n(23795),x=n(11163),m=n(41664),h=n.n(m);let p=()=>{let{asPath:e}=(0,x.useRouter)(),r=e.split("/");r.shift();let n=r.map((e,n)=>({breadcrumb:e,href:"/"+r.slice(0,n+1).join("/")}));return(0,i.jsxs)(l.Z,{mt:2,"aria-label":"breadcrumb",sx:{color:e=>e.palette.common.white,fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},children:[(0,i.jsx)(h(),{href:"/",legacyBehavior:!0,children:(0,i.jsx)(d.Z,{underline:"hover",color:"common.white",sx:{cursor:"pointer",fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},children:"Home"})}),n&&n.map((e,r)=>{var t;return r!=n.length-1?(0,i.jsx)(h(),{href:e.href,legacyBehavior:!0,children:(0,i.jsx)(d.Z,{sx:{textTransform:"capitalize"},underline:"hover",color:"inherit",children:e.breadcrumb})},"breadcrumb-".concat(r)):(0,i.jsx)(a.Z,{sx:{textTransform:"uppercase",color:e=>e.palette.common.white,fontSize:{lg:"1rem!important",md:"1rem!important",sm:"0.7rem!important",xs:"0.7rem!important"}},color:"text.secondary",children:e&&(null==e?void 0:null===(t=e.breadcrumb)||void 0===t?void 0:t.indexOf("-"))!==-1?e.breadcrumb.replace(/-/g," "):e.breadcrumb},"breadcrumb-".concat(r))})]})};var u=e=>{let{title:r,alt:n,src:l,srcWidth:d,imgSx:x,subTitle:m,titleLastWord:h}=e;return(0,i.jsx)(c.Fragment,{children:(0,i.jsxs)(t.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"350px",md:"350px",sm:"100%",xs:"100%"},backgroundImage:"url(../../../".concat(l,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center","&::before":{content:'""',backgroundImage:"linear-gradient(to left, rgba(77,39,63,0) 0%, #463b46 160%)",position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:7}},children:[(0,i.jsx)(o.Z,{sx:{zIndex:8,position:"absolute",left:"8em",top:"6em"},children:(0,i.jsx)(p,{})}),(0,i.jsxs)(s.Z,{sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9},children:[(0,i.jsxs)(a.Z,{gutterBottom:!0,fontSize:44,component:"h1",fontWeight:600,color:"white",children:[r,(0,i.jsx)(a.Z,{component:"span",gutterBottom:!0,fontSize:44,fontWeight:600,color:"primary",children:h})]}),(0,i.jsx)(a.Z,{gutterBottom:!0,component:"p",fontWeight:400,width:400,fontSize:16,color:"white",m:"auto",children:m})]})]})})}},54762:function(e,r,n){"use strict";n.d(r,{J:function(){return a}});var i=n(85893),t=n(87357),o=n(51233),s=n(15861);n(67294);var a=e=>{let{title:r}=e;return(0,i.jsx)(t.Z,{sx:{width:"100%",textAlign:"center",my:4},children:(0,i.jsxs)(o.Z,{alignItems:"center",children:[(0,i.jsx)(t.Z,{children:(0,i.jsx)(s.Z,{variant:"h5",children:r})}),(0,i.jsx)(t.Z,{component:"img",sx:{width:"400px"},src:"/assets/images/home/new/banner-image.jpg",alt:"truck"})]})})}},50261:function(e,r,n){"use strict";var i=n(85893),t=n(66242),o=n(78445),s=n(88078),a=n(44267),c=n(67294);r.Z=()=>(0,i.jsxs)(t.Z,{sx:{maxWidth:"100%",my:4},children:[(0,i.jsx)(o.Z,{avatar:(0,i.jsx)(s.Z,{animation:"wave",variant:"circular",width:40,height:40}),title:(0,i.jsx)(s.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:(0,i.jsx)(s.Z,{animation:"wave",height:10,width:"40%"})}),(0,i.jsx)(s.Z,{sx:{height:190},animation:"wave",variant:"rectangular"}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)(c.Fragment,{children:[(0,i.jsx)(s.Z,{animation:"wave",height:10,style:{marginBottom:6}}),(0,i.jsx)(s.Z,{animation:"wave",height:10,width:"80%"})]})})]})},13533:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return H}});var i=n(85893),t=n(9008),o=n.n(t),s=n(67294),a=n(87357),c=n(86886),l=n(46574),d=n(44267),x=n(51233),m=n(15861),h=n(69417),p=n(10380),u=n(41664),j=n.n(u),Z=()=>(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(c.ZP,{container:!0,direction:"row-reverse",children:[(0,i.jsx)(c.ZP,{item:!0,lg:6,children:(0,i.jsx)(l.Z,{sx:{mt:8},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(x.Z,{direction:"row",alignItems:"flex-end",sx:{overflow:"hidden"},children:(0,i.jsx)(d.Z,{sx:{pb:"0px !important",width:"100%"},children:(0,i.jsxs)(x.Z,{spacing:4,children:[(0,i.jsx)(a.Z,{children:(0,i.jsxs)(x.Z,{direction:"row",justifyContent:"space-evenly",children:[(0,i.jsx)(a.Z,{children:(0,i.jsxs)(x.Z,{spacing:4,children:[(0,i.jsx)(a.Z,{component:p.E.div,initial:{x:-300,y:0},animate:{x:[-300,0,0,0],y:[0,0,-250,-250]},transition:{repeat:1/0,delay:0,duration:4,times:[0,.1,.9,1],ease:"easeInOut"},children:(0,i.jsx)(a.Z,{component:"img",sx:{width:"200px"},src:"/assets/images/home/new/download-app.png",alt:"truck"})}),(0,i.jsx)(a.Z,{component:p.E.div,initial:{x:-300,y:0},animate:{x:[-300,0,0,0],y:[0,0,-280,-280]},transition:{repeat:1/0,delay:.1,duration:4,times:[0,.1,.9,1],ease:"easeInOut"},children:(0,i.jsx)(a.Z,{component:"img",sx:{width:"200px"},src:"/assets/images/home/new/start-job.png",alt:"truck"})})]})}),(0,i.jsx)(a.Z,{sx:{mt:6},children:(0,i.jsxs)(x.Z,{spacing:4,children:[(0,i.jsx)(a.Z,{component:p.E.div,initial:{x:300,y:0},animate:{x:[300,0,0,0],y:[0,0,-250,-250]},transition:{repeat:1/0,delay:0,duration:4,times:[0,.1,.9,1],ease:"easeInOut"},children:(0,i.jsx)(a.Z,{component:"img",sx:{width:"200px"},src:"/assets/images/home/new/place-bid.png",alt:"truck"})}),(0,i.jsx)(a.Z,{component:p.E.div,initial:{x:300,y:0},animate:{x:[300,0,0,0],y:[0,0,-300,-300]},transition:{repeat:1/0,delay:.1,duration:4,times:[0,.1,.9,1],ease:"easeInOut"},children:(0,i.jsx)(a.Z,{component:"img",sx:{width:"200px"},src:"/assets/images/home/new/invoice.png",alt:"truck"})})]})})]})}),(0,i.jsx)(a.Z,{component:p.E.div,initial:{rotate:0,scale:0},animate:{rotate:360,scale:1},transition:{delay:.5,duration:1.2,ease:"easeIn"},children:(0,i.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(a.Z,{component:"img",sx:{width:"500px"},src:"/home/hometruck.png",alt:"truck"})})})]})})})})})}),(0,i.jsxs)(c.ZP,{item:!0,lg:6,sx:{position:"relative"},children:[(0,i.jsx)(a.Z,{sx:{backgroundImage:"url(/home/bgHomeBanner.png)",position:"absolute",top:0,left:0,backgroundRepeat:"no-repeat",right:0,bottom:0,height:"100%",zIndex:-1}}),(0,i.jsx)(x.Z,{spacing:6,alignItems:"center",direction:"row",justifyContent:"center",height:"100%",children:(0,i.jsxs)(d.Z,{sx:{},children:[(0,i.jsx)(x.Z,{spacing:0,mb:5,children:(0,i.jsxs)(a.Z,{component:p.E.div,initial:{x:500,y:0},animate:{x:0,y:0},transition:{type:"spring",stiffness:500,damping:10,delay:0,duration:1.2,ease:"easeInOut"},children:[(0,i.jsx)(m.Z,{color:"common.black",fontSize:63,fontWeight:500,eigh:!0,children:"Your Logistic"}),(0,i.jsx)(m.Z,{color:"primary",fontSize:63,fontWeight:500,eigh:!0,children:"Solution"}),(0,i.jsxs)(m.Z,{color:"common.black",fontSize:25,children:["For Business, For Client & For Driver","'","s"]})]})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(x.Z,{direction:"row",alignItems:"flex-end",height:"100%",children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(x.Z,{className:"flexDirection",direction:"row",alignItems:"center",spacing:2,children:[(0,i.jsx)(a.Z,{component:p.E.div,initial:{scale:0},animate:{scale:1},transition:{delay:0,duration:1.2,ease:"easeInOut"},children:(0,i.jsx)(h.Z,{variant:"contained",LinkComponent:j(),href:"/auth/register",size:"large",sx:{backgroundColor:"#000",":hover":{backgroundColor:"#555555"}},children:(0,i.jsx)(m.Z,{fontWeight:500,children:"For Clients"})})}),(0,i.jsx)(a.Z,{component:p.E.div,initial:{scale:0},animate:{scale:1},transition:{delay:0,duration:1.2,ease:"easeInOut"},children:(0,i.jsx)(h.Z,{variant:"contained",size:"large",color:"primary",LinkComponent:j(),href:"/auth/register",children:(0,i.jsx)(m.Z,{fontWeight:500,children:"For Businesses"})})}),(0,i.jsx)(a.Z,{component:p.E.div,initial:{scale:0},animate:{scale:1},transition:{delay:0,duration:1.2,ease:"easeInOut"},children:(0,i.jsx)(h.Z,{LinkComponent:j(),href:"auth/register/driver",variant:"outlined",color:"dark",size:"large",children:(0,i.jsx)(m.Z,{fontWeight:500,children:"For Driver"})})})]})})})})]})})]})]})})}),g=n(79582),f=n(66242),v=n(46066),y=()=>((0,s.useRef)(),(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(a.Z,{py:8,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(m.Z,{sx:{fontSize:"25px !important",mb:2,pl:1,borderLeft:"16px  solid ",borderColor:e=>e.palette.primary.main,fontWeight:500},children:"Our Fleet"}),(0,i.jsx)(m.Z,{color:"grey",sx:{fontSize:"14px",lineHeight:"20px"},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industr."})]}),(0,i.jsxs)(c.ZP,{className:"primaryHomeSection_grid_responsive ",container:!0,columnSpacing:3,mt:6,children:[(0,i.jsx)(c.ZP,{className:"primaryHomePage_grid_responsive ",item:!0,xs:1,sm:2,md:3,children:(0,i.jsx)(f.Z,{className:"primaryHomePages_Card_responsive ",variant:"outlined",sx:{borderRadius:"5px",height:"280px",cursor:"pointer","&:hover":{borderColor:e=>e.palette.primary.main}},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(x.Z,{justifyContent:"center",direction:"column",children:[(0,i.jsx)(a.Z,{component:"img",src:"/home/carFleet.png",alt:"car",width:"100%",height:160}),(0,i.jsx)(m.Z,{variant:"h5",textAlign:"center",children:"Car"}),(0,i.jsx)(m.Z,{color:"grey",fontSize:15,textAlign:"center",children:"Extensive equipment and consolidation options"})]})})})})}),(0,i.jsx)(c.ZP,{className:"primaryHomePage_grid_responsive ",item:!0,xs:1,sm:2,md:3,children:(0,i.jsx)(f.Z,{className:"primaryHomePages_Card_responsive ",variant:"outlined",sx:{borderRadius:"5px",height:"280px",cursor:"pointer","&:hover":{borderColor:e=>e.palette.primary.main}},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(x.Z,{justifyContent:"center",direction:"column",children:[(0,i.jsx)(a.Z,{component:"img",src:"/home/vanFleet.png",alt:"van",width:"100%",height:160}),(0,i.jsx)(m.Z,{variant:"h5",textAlign:"center",children:"Van"}),(0,i.jsx)(m.Z,{color:"grey",fontSize:15,textAlign:"center",children:"Extensive equipment and consolidation options"})]})})})})}),(0,i.jsx)(c.ZP,{className:"primaryHomePage_grid_responsive ",item:!0,xs:1,sm:2,md:3,children:(0,i.jsx)(f.Z,{className:"primaryHomePages_Card_responsive ",variant:"outlined",sx:{borderRadius:"5px",height:"280px",cursor:"pointer","&:hover":{borderColor:e=>e.palette.primary.main}},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(x.Z,{justifyContent:"center",direction:"column",children:[(0,i.jsx)(a.Z,{component:"img",src:"/home/pickupFleet.png",alt:"pickup",width:"100%",height:160}),(0,i.jsx)(m.Z,{variant:"h5",textAlign:"center",children:"Pickup Truck"}),(0,i.jsx)(m.Z,{color:"grey",fontSize:15,textAlign:"center",children:"Extensive equipment and consolidation options"})]})})})})}),(0,i.jsx)(c.ZP,{className:"primaryHomePage_grid_responsive ",item:!0,xs:1,sm:2,md:3,children:(0,i.jsx)(f.Z,{className:"primaryHomePages_Card_responsive ",variant:"outlined",sx:{borderRadius:"5px",height:"280px",cursor:"pointer","&:hover":{borderColor:e=>e.palette.primary.main}},children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(x.Z,{justifyContent:"center",direction:"column",children:[(0,i.jsx)(a.Z,{component:"img",src:"/home/truckFleet.png",alt:"Truck",width:"100%",height:160}),(0,i.jsx)(m.Z,{variant:"h5",textAlign:"center",children:"Refrigetro Truck"}),(0,i.jsx)(m.Z,{color:"grey",textAlign:"center",fontSize:15,children:"Extensive equipment and consolidation options"})]})})})})})]})]})})})),b=n(34036),w=()=>(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(a.Z,{py:4,children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)(c.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(c.ZP,{item:!0,lg:4,children:(0,i.jsx)(f.Z,{variant:"outlined",sx:{my:3,cursor:"pointer",":hover":{borderColor:e=>e.palette.primary.main}},children:(0,i.jsx)(d.Z,{children:(0,i.jsxs)(x.Z,{spacing:1,children:[(0,i.jsx)(m.Z,{color:"primary",children:"For Driver"}),(0,i.jsx)(m.Z,{variant:"h5",children:"Join Our Fleet"}),(0,i.jsx)(m.Z,{color:"grey",children:"The personal account where user can manage,track and order parcels,check order details and history"}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(h.Z,{LinkComponent:j(),href:"/auth/register/driver",variant:"contained",color:"primary",children:"Signup as a Driver"})})]})})})}),(0,i.jsx)(c.ZP,{item:!0,lg:4,children:(0,i.jsx)(f.Z,{variant:"outlined",sx:{my:3,cursor:"pointer",":hover":{borderColor:e=>e.palette.primary.main}},children:(0,i.jsx)(d.Z,{children:(0,i.jsxs)(x.Z,{spacing:1,children:[(0,i.jsx)(m.Z,{color:"primary",children:"For Clients"}),(0,i.jsx)(m.Z,{variant:"h5",children:"Shipment Manager"}),(0,i.jsx)(m.Z,{color:"grey",children:"The personal account where user can manage,track and order parcels,check order details and history"}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(h.Z,{LinkComponent:j(),href:"/auth/register/company",variant:"contained",color:"primary",children:"Login to ship Manager"})})]})})})}),(0,i.jsx)(c.ZP,{item:!0,lg:4,children:(0,i.jsx)(f.Z,{variant:"outlined",sx:{my:3,cursor:"pointer",":hover":{borderColor:e=>e.palette.primary.main}},children:(0,i.jsx)(d.Z,{children:(0,i.jsxs)(x.Z,{spacing:1,children:[(0,i.jsx)(m.Z,{color:"primary",children:"For Clients"}),(0,i.jsx)(m.Z,{variant:"h5",children:"Mobile Application"}),(0,i.jsx)(m.Z,{color:"grey",children:"The personal account where user can manage,track and order parcels,check order details and history"}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(h.Z,{LinkComponent:j(),href:"/auth/register",variant:"contained",color:"primary",children:"Login to Driver"})})]})})})})]})})})}),S=()=>(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(a.Z,{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)(c.ZP,{container:!0,spacing:8,alignItems:"center",py:4,children:[(0,i.jsx)(c.ZP,{item:!0,sm:12,md:6,lg:6,children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(a.Z,{component:"img",src:"/home/screens.png",alt:"screen"})})}),(0,i.jsx)(c.ZP,{item:!0,sm:12,md:6,lg:6,children:(0,i.jsxs)(c.ZP,{container:!0,rowSpacing:6,columnSpacing:10,children:[(0,i.jsxs)(c.ZP,{item:!0,sm:6,md:6,lg:6,children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(g.Z,{sx:{color:"#ff7534"},icon:"akar-icons:info-fill",width:"35px"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h6",sx:{fontSize:"16px !important"},color:"common.black",children:"Help Center"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{color:"grey",sx:{fontSize:"14px !important"},children:"Customer Service Customer Portal Logins"})})]}),(0,i.jsxs)(c.ZP,{item:!0,sm:6,md:6,lg:6,children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(g.Z,{sx:{color:"#ff7534"},icon:"bxs:user",width:"35px"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h6",sx:{fontSize:"16px !important"},color:"common.black",children:"Business"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{color:"grey",sx:{fontSize:"14px !important"},children:"New Customer Center Service Guide"})})]}),(0,i.jsxs)(c.ZP,{item:!0,sm:6,md:6,lg:6,children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(g.Z,{sx:{color:"#ff7534"},icon:"mingcute:ship-fill",width:"35px"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h6",sx:{fontSize:"16px !important"},color:"common.black",children:"Ship Online Now"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{color:"grey",sx:{fontSize:"14px !important"},children:"Open a Account Ship Managre Software Tracking"})})]}),(0,i.jsxs)(c.ZP,{item:!0,sm:6,md:6,lg:6,children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(g.Z,{sx:{color:"#ff7534"},icon:"fa6-solid:building",width:"35px"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h6",sx:{fontSize:"16px !important"},color:"common.black",children:"Company"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{color:"grey",sx:{fontSize:"14px !important"},children:"About Us Careers"})})]}),(0,i.jsxs)(c.ZP,{item:!0,sm:6,md:6,lg:6,children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(g.Z,{sx:{color:"#ff7534"},icon:"bxs:news",width:"35px",hFlip:!0})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h6",sx:{fontSize:"16px !important"},color:"common.black",children:"News"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{color:"grey",sx:{fontSize:"14px !important"},children:"Service News for Customers Events"})})]}),(0,i.jsxs)(c.ZP,{item:!0,sm:6,md:6,lg:6,children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(g.Z,{sx:{color:"#ff7534"},icon:"la:blog",width:"35px"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h6",sx:{fontSize:"16px !important"},color:"common.black",children:"Our Blog"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{color:"grey",sx:{fontSize:"14px !important"},children:"Our Blog for customers"})})]})]})})]})})})})});n(34180);var k=n(54762),C=n(50261),P=n(34491),z=n(67998);n(63763);var A=n(67358),I=n(38895),F=n(22797),R=()=>{var e;let r=(0,z.I0)(),{testimonial:{data:n}}=(0,z.v9)(e=>e.home),[t,o]=s.useState(!1),[d,x]=s.useState(!1);(0,s.useEffect)(()=>{r((0,P.Ov)())},[]);let h=e=>(r,n)=>{o(!!n&&e)};return(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(a.Z,{mb:6,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(a.Z,{textAlign:"center",mb:6,children:[(0,i.jsx)(a.Z,{children:(0,i.jsxs)(m.Z,{fontSize:28,fontWeight:600,children:["Frequently Asked"," ",(0,i.jsxs)(m.Z,{fontSize:28,fontWeight:600,color:"primary",component:"span",children:[" ","Questions"]})]})}),(0,i.jsx)(a.Z,{my:1,width:"22em",m:"auto",children:(0,i.jsx)(m.Z,{fontSize:14,children:"Here are some frequently asked questions to enhance your understanding of of our website."})})]}),d?(0,i.jsx)(C.Z,{}):(0,i.jsx)(c.ZP,{container:!0,spacing:0,justifyContent:"center",children:(0,i.jsx)(c.ZP,{width:"100%",md:8,children:n&&(null==n?void 0:n.faqs)&&(null==n?void 0:null===(e=n.faqs)||void 0===e?void 0:e.length)>0?Array.isArray(null==n?void 0:n.faqs)&&(null==n?void 0:n.faqs.map((e,r)=>r>7?"":(0,i.jsxs)(A.Z,{expanded:t==="panel ".concat(r+1),onChange:h("panel ".concat(r+1)),sx:{"&.MuiAccordion-root:before":{opacity:0},marginBottom:"20px"},children:[(0,i.jsx)(I.Z,{expandIcon:t==="panel ".concat(r+1)?(0,i.jsx)(g.Z,{icon:"zondicons:minus-solid",width:35}):(0,i.jsx)(g.Z,{icon:"uiw:plus-circle",width:35}),"aria-controls":"panel1bh-content",id:"panel1bh-header",sx:{"& .MuiAccordionSummary-content.Mui-expanded":{minHeight:"100%",margin:"10px 0px"},"&.MuiAccordionSummary-root.Mui-expanded":{px:4,minHeight:"100%",margin:"0px 0px"},borderRadius:"40px",background:e=>e.palette.primary.main,color:"#fff",px:4,boxShadow:e=>e.shadows[9],py:1},children:(0,i.jsx)(m.Z,{variant:"h6",fontWeight:300,children:e.question})}),(0,i.jsx)(F.Z,{sx:{py:2,px:4},children:(0,i.jsx)(m.Z,{fontSize:"15px",fontWeight:400,children:e.answer})})]},r))):(0,i.jsx)(i.Fragment,{children:!d&&(0,i.jsx)(k.J,{title:"no FAQ"})})})})]})})})},_=n(69661),N=n(91440),L=n(93946),M=n(88111),O=n(87153),W=n(93619),B=()=>{var e;let r=(0,z.I0)(),{testimonial:{data:n}}=(0,z.v9)(e=>e.home),t=(0,s.useRef)();return(0,s.useEffect)(()=>{r((0,P.Ov)())},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Z,{sx:{backgroundColor:"#FFF8F4",py:8,pb:20,position:"relative"},children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(a.Z,{textAlign:"center",mb:8,children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h6",color:"primary",children:"Testimonials"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"h5",children:"What our clients say about us."})})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(v.Z,{dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2e3,pauseOnHover:!0,ref:t,children:null==n?void 0:null===(e=n.tsti)||void 0===e?void 0:e.map((e,r)=>r>12?"":(0,i.jsx)(a.Z,{px:1,children:(0,i.jsx)(f.Z,{variant:"outlined",sx:{height:"17em",borderColor:e=>e.palette.primary.main},children:(0,i.jsx)(d.Z,{children:(0,i.jsxs)(x.Z,{alignItems:"center",children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(_.Z,{src:"".concat(e.base_url).concat(e.image),sx:{width:"100px",height:"100px"}})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{variant:"subtitle1",children:e.name})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(N.Z,{value:e.rating,readOnly:!0,size:"small"})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{textAlign:"center",sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"3",WebkitBoxOrient:"vertical"},fontSize:14,children:e.text})})]})})})},r))}),(0,i.jsx)(a.Z,{sx:{position:"absolute",top:"48%",left:"4%"},children:(0,i.jsx)(f.Z,{onClick:()=>{t.current.slickPrev()},variant:"outlined",sx:{borderRadius:"50%",backgroundColor:e=>e.palette.primary.main},children:(0,i.jsx)(L.Z,{children:(0,i.jsx)(O.Z,{sx:{color:e=>(0,M.Fq)(e.palette.common.white,.9),fontWeight:500}})})})}),(0,i.jsx)(a.Z,{sx:{position:"absolute",top:"48%",right:"4%"},children:(0,i.jsx)(f.Z,{onClick:()=>{t.current.slickNext()},variant:"outlined",sx:{borderRadius:"50%",backgroundColor:e=>e.palette.primary.main},children:(0,i.jsx)(L.Z,{children:(0,i.jsx)(W.Z,{sx:{color:e=>(0,M.Fq)(e.palette.common.white,.9),fontWeight:500}})})})})]})]})})})},E=()=>(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(Z,{}),(0,i.jsx)(y,{}),(0,i.jsx)(b.Z,{}),(0,i.jsx)(w,{}),(0,i.jsx)(S,{}),(0,i.jsx)(R,{}),(0,i.jsx)(B,{})]}),T=n(26107);function H(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"ClickNSend"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,i.jsx)(E,{})]})}H.getLayout=function(e){return(0,i.jsx)(T.l,{children:e})}},34036:function(e,r,n){"use strict";var i=n(85893),t=n(34491),o=n(67998),s=n(87357),a=n(46574),c=n(86886),l=n(15861),d=n(67294),x=n(17857);r.Z=()=>{let e=(0,o.I0)(),{totalUser:{data:r}}=(0,o.v9)(e=>e.home);return(0,d.useEffect)(()=>{e((0,t.Ot)())},[]),(0,i.jsx)(d.Fragment,{children:(0,i.jsx)(s.Z,{sx:{backgroundColor:"#FFF8F4",color:"common.black"},children:(0,i.jsx)(a.Z,{sx:{py:5},children:(0,i.jsxs)(c.ZP,{className:"aboutSection_stack_responsive",container:!0,spacing:6,textAlign:"center",children:[(0,i.jsx)(c.ZP,{item:!0,md:3,sm:2,xs:1,children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(s.Z,{component:"img",src:"/home/Accountuser.png",m:"auto"}),(0,i.jsxs)(l.Z,{className:"totaluser_typograhy_responsive",variant:"h3",children:[(0,i.jsx)(x.ZP,{start:0,duration:2,end:null==r?void 0:r.customers,enableScrollSpy:!0,scrollSpyDelay:500}),"+"]}),(0,i.jsx)(l.Z,{children:"Total User"})]})}),(0,i.jsx)(c.ZP,{item:!0,md:3,sm:2,xs:1,children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(s.Z,{component:"img",src:"/home/Driver.png",m:"auto"}),(0,i.jsxs)(l.Z,{variant:"h3",children:[(0,i.jsx)(x.ZP,{start:0,duration:2,end:null==r?void 0:r.drivers,enableScrollSpy:!0,scrollSpyDelay:500})," ","+"]}),(0,i.jsx)(l.Z,{children:"Total Drivers"})]})}),(0,i.jsx)(c.ZP,{item:!0,md:3,sm:2,xs:1,children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(s.Z,{component:"img",src:"/home/jobs.png",m:"auto"}),(0,i.jsxs)(l.Z,{variant:"h3",children:[(0,i.jsx)(x.ZP,{start:0,duration:2,end:null==r?void 0:r.jobs,enableScrollSpy:!0,scrollSpyDelay:500})," ","+"]}),(0,i.jsx)(l.Z,{children:"Total Jobs"})]})}),(0,i.jsx)(c.ZP,{item:!0,md:3,sm:2,xs:1,children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(s.Z,{component:"img",src:"/home/Business.png",m:"auto"}),(0,i.jsxs)(l.Z,{variant:"h3",children:[(0,i.jsx)(x.ZP,{start:0,duration:2,end:null==r?void 0:r.companies,enableScrollSpy:!0,scrollSpyDelay:500})," ","+"]}),(0,i.jsx)(l.Z,{children:"Total Company"})]})})]})})})})}},9008:function(e,r,n){e.exports=n(42636)}},function(e){e.O(0,[4885,678,3827,1994,6034,4815,7857,1440,3171,4627,5981,6107,9774,2888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);