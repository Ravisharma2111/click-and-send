(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1115],{42118:function(e,i,n){var r=n(41848),t=n(62722),o=n(42351);e.exports=function(e,i,n){return i==i?o(e,i,n):r(e,t,n)}},62722:function(e){e.exports=function(e){return e!=e}},5076:function(e,i,n){var r=n(89881);e.exports=function(e,i){var n;return r(e,function(e,r,t){return!(n=i(e,r,t))}),!!n}},47415:function(e,i,n){var r=n(29932);e.exports=function(e,i){return r(i,function(i){return e[i]})}},16612:function(e,i,n){var r=n(77813),t=n(98612),o=n(65776),l=n(13218);e.exports=function(e,i,n){if(!l(n))return!1;var s=typeof i;return("number"==s?!!(t(n)&&o(i,n.length)):"string"==s&&i in n)&&r(n[i],e)}},42351:function(e){e.exports=function(e,i,n){for(var r=n-1,t=e.length;++r<t;)if(e[r]===i)return r;return -1}},64721:function(e,i,n){var r=n(42118),t=n(98612),o=n(47037),l=n(40554),s=n(52628),d=Math.max;e.exports=function(e,i,n,c){e=t(e)?e:s(e),n=n&&!c?l(n):0;var a=e.length;return n<0&&(n=d(a+n,0)),o(e)?n<=a&&e.indexOf(i,n)>-1:!!a&&r(e,i,n)>-1}},47037:function(e,i,n){var r=n(44239),t=n(1469),o=n(37005);e.exports=function(e){return"string"==typeof e||!t(e)&&o(e)&&"[object String]"==r(e)}},59704:function(e,i,n){var r=n(82908),t=n(67206),o=n(5076),l=n(1469),s=n(16612);e.exports=function(e,i,n){var d=l(e)?r:o;return n&&s(e,i,n)&&(i=void 0),d(e,t(i,3))}},52628:function(e,i,n){var r=n(47415),t=n(3674);e.exports=function(e){return null==e?[]:r(e,t(e))}},89367:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/driver/job_request",function(){return n(25638)}])},54762:function(e,i,n){"use strict";n.d(i,{J:function(){return s}});var r=n(85893),t=n(87357),o=n(51233),l=n(15861);n(67294);var s=e=>{let{title:i}=e;return(0,r.jsx)(t.Z,{sx:{width:"100%",textAlign:"center",my:4},children:(0,r.jsxs)(o.Z,{alignItems:"center",children:[(0,r.jsx)(t.Z,{children:(0,r.jsx)(l.Z,{variant:"h5",children:i})}),(0,r.jsx)(t.Z,{component:"img",sx:{width:"400px"},src:"/assets/images/home/new/banner-image.jpg",alt:"truck"})]})})}},33074:function(e,i,n){"use strict";var r=n(85893),t=n(21425),o=n(38308),l=n(23984),s=n(67998),d=n(63763),c=n(87357),a=n(11994),u=n(51233),x=n(15861),h=n(69417),p=n(28482),m=n(50841),j=n(46901),v=n(67294);i.Z=e=>{let{job_id:i,applyOpen:n,handleClose:g,getData:f}=e,Z=(0,s.I0)(),{user:b}=(0,t.E)(),{enqueueSnackbar:y}=(0,m.Ds)(),{jobAlert:{pageCount:w,data:_,page:S,pageSize:k}}=(0,s.v9)(e=>e.driverJob),z=(0,p.TA)({initialValues:{job_id:i,driver_id:null==b?void 0:b.id,is_apply:1,ammount:"",description:""},validate:e=>{let i={};return e.description||(i.description="Note is required"),e.ammount?e.ammount.length>=6&&(i.ammount="Enter valid number (Max 5 Digit)"):i.ammount="Amount is required",i},onSubmit:async e=>{await d.Z.post("api/auth/jobs/apply-bid",z.values).then(e=>{if(200===e.status){var i;z.resetForm(),y((0,r.jsx)(j.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}),Z((0,l.tH)({user_id:null==b?void 0:b.id,type:null==b?void 0:b.user_type,lat:0,long:0})),g(!1)}}).catch(e=>{var i;console.log(e);let{response:n}=e;y((0,r.jsx)(j.Z,{icon:!1,severity:"error",children:null==n?void 0:null===(i=n.data)||void 0===i?void 0:i.error}),{variant:"error",anchorOrigin:{vertical:"top",horizontal:"center"}})})}});return(0,v.useEffect)(()=>{z.setFieldValue("job_id",i)},[i]),(0,v.useEffect)(()=>{z.setFieldValue("driver_id",null==b?void 0:b.id)},[b,null==b?void 0:b.id]),(0,r.jsx)(c.Z,{children:(0,r.jsx)(a.Z,{open:n,onClose:g,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(c.Z,{sx:{position:"absolute",top:"50%",left:"50%",textAlign:"center",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"1px solid #f5f5f5",boxShadow:24,p:4},component:"form",noValidate:!0,onSubmit:z.handleSubmit,children:[(0,r.jsxs)(u.Z,{spacing:2,children:[(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.zC,{fullWidth:!0,size:"small",name:"ammount",value:z.values.ammount,isMaxLenght:5,onChange:e=>{e&&z.setFieldValue("ammount",e.target.value.replace(/\D/gm,""))},label:"Bid Price",placeholder:"Bidding Price",helperText:z.touched.ammount&&z.errors.ammount})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.zC,{fullWidth:!0,size:"small",multiline:!0,rows:4,name:"description",value:z.values.description,onChange:z.handleChange,label:"Note",placeholder:"Note For Customer",helperText:z.touched.description&&z.errors.description})}),(0,r.jsx)(x.Z,{id:"modal-modal-title",variant:"h6",component:"h2",pb:2,children:"Are you sure you want to Apply for the Job ?"})]}),(0,r.jsxs)(u.Z,{direction:"row",spacing:8,children:[(0,r.jsx)(h.Z,{fullWidth:!0,variant:"outlined",type:"submit",children:"Yes"}),(0,r.jsx)(h.Z,{fullWidth:!0,variant:"outlined",onClick:()=>{g(),z.resetForm()},children:"No"})]})]})})})}},25638:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return H}});var r=n(85893),t=n(83590),o=n(6049),l=n(26107);n(38308);var s=n(79582),d=n(87357),c=n(46574),a=n(86886),u=n(51233),x=n(15861),h=n(66242),p=n(67720),m=n(44267),j=n(88111),v=n(69417),g=n(70872),f=n(6964),Z=n(11163),b=n(67294),y=n(37958),w=n(61659),_=n(17857),S=n(69468),k=n(33074),z=n(63763),C=n(50261),I=n(54762),E=n(28482),W=n(21425),F=n(50841);n(46901);var P=n(67998),A=n(23984);n(64721);var N=n(59704),D=n.n(N),T=n(36599),q=n(7921),B=n(77451),V=n(9601),J=n(51221),O=n(72162),M=()=>{var e,i;let n=(0,P.I0)(),{jobAlert:{pageCount:t,data:o,page:l,pageSize:N}}=(0,P.v9)(e=>e.driverJob),M=(0,Z.useRouter)(),{user:R}=(0,W.E)(),H=null==R?void 0:R.id,{enqueueSnackbar:Y}=(0,F.Ds)(),[L,X]=(0,b.useState)(!1),[Q,G]=b.useState(!1),[K,U]=b.useState("new"),[$]=b.useState(1),[ee,ei]=b.useState({}),[en,er]=b.useState(!1),[et,eo]=b.useState(!1),[el,es]=b.useState(!1),ed=e=>eo(e),[ec,ea]=b.useState(!1),eu={address:[{type:"pickup"},{type:"delivery"}]};null==eu||null===(e=eu.address)||void 0===e||e.filter(e=>"pickup"===e.type),null==eu||null===(i=eu.address)||void 0===i||i.filter(e=>"drop"===e.type),b.useEffect(()=>{n((0,A.tH)({user_id:null==R?void 0:R.id,type:null==R?void 0:R.user_type,lat:0,long:0}))},[l]);let ex=async()=>{};b.useEffect(()=>{ex()},[l]);let eh=(0,E.TA)({initialValues:{id:"",driver_id:""}});async function ep(){ea(!0),await z.Z.get("api/auth/profile/my-profile").then(e=>{if(200===e.status){ea(!1);let i=e.data.view_data.profile;i.insurance_cert&&i.liability_cert&&i.licence_back&&i.licence_front&&i.v5c_cert&&i.vehicle_cert&&i.nationality_cert&&i.transit_cert&&er(!0),console.log("newData",i)}}).catch(e=>{ea(!1),console.log("ProfileError",e)})}return b.useEffect(()=>{ep()},[]),(0,b.useEffect)(()=>{eh.setFieldValue("id",el)},[el]),(0,b.useEffect)(()=>{eh.setFieldValue("driver_id",null==R?void 0:R.id)},[R,null==R?void 0:R.id]),(0,r.jsx)(b.Fragment,{children:(0,r.jsxs)(d.Z,{py:3,pb:12,children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{py:5,children:(0,r.jsx)(S.Z,{jobalert:null==o?void 0:o.length})}),(0,r.jsx)(d.Z,{py:2,children:ec?(0,r.jsx)(C.Z,{}):(0,r.jsx)(a.ZP,{container:!0,spacing:2,children:(0,r.jsx)(a.ZP,{item:!0,md:12,children:(0,r.jsxs)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,r.jsx)(x.Z,{fontSize:"1.75rem",fontWeight:500,color:"primary",children:"Jobs For You"}),(0,r.jsx)(d.Z,{borderRadius:"50%",border:"1px solid",borderColor:e=>e.palette.primary.main,color:e=>e.palette.primary.main,py:.6,px:1.8,children:(0,r.jsx)(x.Z,{fontSize:"1.3rem",fontWeight:500,color:"primary",children:(0,r.jsx)(_.ZP,{start:0,duration:1,end:null==o?void 0:o.length,enableScrollSpy:!0,scrollSpyDelay:200})})})]})})})}),(0,r.jsxs)(d.Z,{py:2,sx:{background:" "},children:[(0,r.jsx)(a.ZP,{container:!0,rowSpacing:0,justifyContent:"center",children:o&&(null==o?void 0:o.length)>0?o.map((e,i)=>{var n,t,o,l,c,g,f,Z,y,w,_,S,k;let z=(null==e?void 0:e.items)&&(null==e?void 0:null===(n=e.items)||void 0===n?void 0:n.length)>0&&(null==e?void 0:e.items[0]),C=(null==e?void 0:e.items)&&(null==e?void 0:null===(t=e.items)||void 0===t?void 0:t.length)>0&&(null==e?void 0:e.items[0]);return(0,r.jsx)(b.Fragment,{children:en?(0,r.jsx)(d.Z,{}):(0,r.jsx)(a.ZP,{container:!0,rowSpacing:0,children:(0,r.jsx)(a.ZP,{item:!0,md:12,children:(0,r.jsxs)(h.Z,{sx:{my:2,borderWidth:"2px",":hover":{borderColor:"#ff7534",transition:" all 0.3s ease-in-out"}},variant:"outlined",children:[(0,r.jsx)(u.Z,{direction:"row",alignItems:"center",spacing:.5,px:2,py:1.4,children:(0,r.jsx)(d.Z,{sx:{width:"95%"},children:(0,r.jsx)(x.Z,{color:"common.black",fontSize:17,sx:{overflow:"hidden",textOverflow:"ellipsis"},fontWeight:500,children:e.name})})}),(0,r.jsx)(p.Z,{}),(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"start",children:[(0,r.jsxs)(a.ZP,{item:!0,md:3,children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{fontSize:28,fontWeight:500})}),(0,r.jsxs)(u.Z,{direction:"row",spacing:2,mb:2,children:[(0,r.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:.6,children:[(0,r.jsx)(u.Z,{alignItems:"center",children:(0,r.jsx)(s.Z,{icon:"bx:layer",color:e=>e.palette.primary.main,width:22})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{fontSize:12,color:"grey",children:null==z?void 0:null===(o=z.product)||void 0===o?void 0:o.material})})]}),(0,r.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:.6,children:[(0,r.jsx)(u.Z,{alignItems:"center",children:(0,r.jsx)(s.Z,{icon:"gg:expand",color:e=>e.palette.primary.main,width:22})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{fontSize:12,color:"grey",children:"".concat((null==z?void 0:null===(l=z.product)||void 0===l?void 0:l.length)||"N/A","*").concat((null==z?void 0:null===(c=z.product)||void 0===c?void 0:c.width)||"N/A","*").concat((null==z?void 0:null===(g=z.product)||void 0===g?void 0:g.height)||"N/A")})})]}),(0,r.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:.6,children:[(0,r.jsx)(u.Z,{alignItems:"center",children:(0,r.jsx)(s.Z,{icon:"uil:weight",color:e=>e.palette.primary.main,width:22})}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(x.Z,{fontSize:12,color:"grey",children:[null==z?void 0:null===(f=z.product)||void 0===f?void 0:f.quantity," ","Qty"]})})]})]}),(0,r.jsx)(u.Z,{direction:"row",spacing:1,children:e.items.map((e,i)=>i>2?"":(0,r.jsx)(b.Fragment,{children:(0,r.jsx)(d.Z,{component:"img",alt:e.product.image,src:"".concat(e.product.base_url).concat(e.product.image),sx:{width:"83px",height:"59px",border:"1px solid lightgrey",objectFit:"cover"}})},i))})]}),(0,r.jsxs)(a.ZP,{item:!0,md:3,children:[(0,r.jsxs)(d.Z,{mb:4,children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{fontSize:13,fontWeight:600,children:"Pick up Date"})}),(0,r.jsxs)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,r.jsx)(d.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,r.jsx)(s.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==z?void 0:null===(Z=z.product)||void 0===Z?void 0:Z.pickup_date)||"N/A"})})]})]}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{fontSize:13,fontWeight:600,children:"Pick up Time"})}),(0,r.jsxs)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,r.jsx)(d.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,r.jsx)(s.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==z?void 0:null===(y=z.product)||void 0===y?void 0:y.pickup_time)||"N/A"})})]})]}),(0,r.jsxs)(a.ZP,{item:!0,md:3,children:[(0,r.jsxs)(d.Z,{mb:4,children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{fontSize:13,fontWeight:600,children:"Delivery out Date"})}),(0,r.jsxs)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,r.jsx)(d.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,r.jsx)(s.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==z?void 0:null===(w=z.product)||void 0===w?void 0:w.drop_date)||"N/A"})})]})]}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{fontSize:13,fontWeight:600,children:"Delivery out Time"})}),(0,r.jsxs)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,r.jsx)(d.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,r.jsx)(s.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==z?void 0:null===(_=z.product)||void 0===_?void 0:_.drop_time)||"N/A"})})]})]}),(0,r.jsx)(a.ZP,{item:!0,md:3,children:(0,r.jsxs)(T.Z,{sx:{["& .".concat(q.Z.root,":before")]:{flex:0,padding:0}},children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[console.log(null==C?void 0:C.address,"sd"),null==C?void 0:null===(S=C.address.filter(e=>"pickup"===e.type))||void 0===S?void 0:S.map((e,i)=>(0,r.jsxs)(B.Z,{sx:{"&.MuiTimelineItem-root":{minHeight:"50px"}},children:[(0,r.jsxs)(V.Z,{children:[(0,r.jsx)(s.Z,{color:e=>e.palette.primary.main,width:30,icon:"carbon:location-star-filled"}),(0,r.jsx)(J.Z,{sx:{"&.MuiTimelineConnector-root":{border:e=>"1px solid ".concat((0,j.Fq)(e.palette.common.black,.6)),width:"0px",borderStyle:"dashed",backgroundColor:"transparent"}}})]}),(0,r.jsxs)(O.Z,{sx:{fontSize:14,fontWeight:600},children:[e.address," ",(0,r.jsxs)(x.Z,{fontSize:10,component:"span",color:"primary",children:[e.type,","]})]},i)]},i))]}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[console.log(null==C?void 0:C.address,"sd"),null==C?void 0:null===(k=C.address.filter(e=>"drop"===e.type))||void 0===k?void 0:k.map((e,i)=>(0,r.jsxs)(B.Z,{sx:{"&.MuiTimelineItem-root":{minHeight:"50px"}},children:[(0,r.jsx)(V.Z,{children:(0,r.jsx)(s.Z,{width:30,icon:"carbon:location-star-filled"})}),(0,r.jsxs)(O.Z,{sx:{fontSize:14,fontWeight:600},children:[e.address," ",(0,r.jsxs)(x.Z,{fontSize:10,component:"span",color:"primary",children:[e.type," "]})]})]},i))]})]})})]}),(0,r.jsx)(p.Z,{sx:{my:2}}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(x.Z,{variant:"subtitle2",sx:{display:"flex",alignItems:"flex-start"}}),(0,r.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(v.Z,{sx:{fontWeight:500},fullWidth:!0,variant:"contained",startIcon:(0,r.jsx)(s.Z,{icon:"carbon:view-filled"}),onClick:()=>M.push("/dashboard/driver/view_job/".concat(null==e?void 0:e.id)),children:"View Job"})}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(v.Z,{color:D()(null==e?void 0:e.job_requests,{driver_id:H})?"warning":"dark",fullWidth:!0,variant:"outlined",startIcon:(0,r.jsx)(s.Z,{sx:{"& svg, g":{stroke:i=>D()(null==e?void 0:e.job_requests,{driver_id:H})?null==i?void 0:i.palette.warning.main:null==i?void 0:i.palette.dark.main}},icon:"icon-park:check-correct"}),onClick:()=>{D()(null==e?void 0:e.job_requests,{driver_id:H})||ed(null==e?void 0:e.id)},sx:{fontWeight:500},children:[console.log("CDdvd",D()(null==e?void 0:e.job_requests,{driver_id:H})),D()(null==e?void 0:e.job_requests,{driver_id:H})?"Pending":"Apply Job"]})})]})]})})]})]})})})},i)}):(0,r.jsx)(r.Fragment,{children:!ec&&(0,r.jsx)(I.J,{title:"No active Jobs..."})})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.Z,{alignItems:"center",justifyContent:"center",children:(0,r.jsx)(g.Z,{count:t,color:"primary",page:l,onChange:(e,i)=>{n((0,A.mY)(i))},variant:"outlined",shape:"rounded",renderItem:e=>(0,r.jsx)(f.Z,{slots:{previous:()=>(0,r.jsx)(u.Z,{direction:"row",spacing:.5,alignItems:"center",children:(0,r.jsx)(w.Z,{})}),next:()=>(0,r.jsx)(u.Z,{direction:"row",spacing:.5,alignItems:"center",children:(0,r.jsx)(y.Z,{})})},...e})})})})]})]}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(k.Z,{handleClose:()=>eo(!1),job_id:et,applyOpen:et,getData:ex})})]})})};let R=()=>{let e=(0,E.TA)({});return(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(M,{formik:e}),(0,r.jsx)(o.Z,{})]})};R.getLayout=function(e){return(0,r.jsx)(l.l,{children:e})};var H=R}},function(e){e.O(0,[4885,1810,678,3827,1994,6034,4815,8251,4576,872,7857,1383,5981,6107,5324,2008,9774,2888,179],function(){return e(e.s=89367)}),_N_E=e.O()}]);