(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7543],{37307:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/company",function(){return r(70539)}])},12499:function(e,t,r){"use strict";var n=r(85893),o=r(21425),i=r(79582),s=r(18217),c=r(67998),a=r(63763),l=r(87357),d=r(86886),h=r(66242),u=r(44267),p=r(51233),x=r(15861),m=r(88111),j=r(13311),g=r.n(j),f=r(11163),Z=r(67294);t.Z=e=>{let{jobPost:t}=e,r=(0,f.useRouter)(),{user:j}=(0,o.E)(),v=(0,c.I0)(),{jobPost:{pageCount:b,data:_,page:y,pageSize:w},jobHistory:C,jobDelete:k}=(0,c.v9)(e=>e.customerJob);(0,Z.useEffect)(()=>{v((0,s.zj)({user_id:null==j?void 0:j.id,type:null==j?void 0:j.user_type,lat:0,long:0}))},[]),Z.useEffect(()=>{v((0,s.M_)({user_id:null==j?void 0:j.id,type:null==j?void 0:j.user_type,lat:0,long:0}))},[]),Z.useEffect(()=>{v((0,s.dR)({user_id:null==j?void 0:j.id,type:null==j?void 0:j.user_type,lat:0,long:0}))},[]);let[E,P]=Z.useState([]),R=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"customer";try{let t=await a.Z.get("/api/auth/master/plan/list/".concat(e,"/").concat(1));if(200===t.status){let e=g()(null==t?void 0:t.data.view_data,{default:1});e?P(e):console.log("No data found in response.view_data")}}catch(e){console.log("error",e)}};return Z.useEffect(()=>{R()},[]),(0,n.jsx)(Z.Fragment,{children:(0,n.jsx)(l.Z,{sx:{mt:4},children:(0,n.jsxs)(d.ZP,{className:"dashboard_box_grid_responsive",container:!0,spacing:2,children:[(0,n.jsx)(d.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{sx:{backgroundColor:(r.pathname,"#145365"),border:"1px solid #145365",color:(r.pathname,"#fff"),cursor:"pointer"},onClick:()=>r.push("/dashboard/customer/job_posted"),children:(0,n.jsx)(u.Z,{className:"dashboardCards_CardContent_responsive",children:(0,n.jsxs)(p.Z,{direction:"row",justifyContent:"space-around",spacing:0,alignItems:"center",children:[(0,n.jsx)(l.Z,{sx:{backgroundColor:e=>(r.pathname,"#246678")},height:"80px",p:2,width:"80px",borderRadius:"50%",component:"div",children:(0,n.jsx)(i.Z,{icon:"basil:bag-solid",width:48})}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(x.Z,{variant:"h6",fontWeight:300,children:"JOB POSTED"}),(0,n.jsx)(x.Z,{variant:"h4",textAlign:"center",children:null==_?void 0:_.length})]})]})})})}),(0,n.jsx)(d.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{sx:{backgroundColor:(r.pathname,"#FD9B3D"),border:"1px solid #FD9B3D",color:(r.pathname,"#fff"),cursor:"pointer"},onClick:()=>r.push("/dashboard/customer/job_history"),children:(0,n.jsx)(u.Z,{children:(0,n.jsxs)(p.Z,{direction:"row",justifyContent:"space-around",alignItems:"center",spacing:0,children:[(0,n.jsx)(l.Z,{sx:{backgroundColor:e=>(r.pathname,"#ffa54e")},height:"80px",p:2,width:"80px",borderRadius:"50%",component:"div",children:(0,n.jsx)(i.Z,{icon:"ri:history-fill",width:48})}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(x.Z,{variant:"h6",fontWeight:300,children:"JOB HISTORY"}),(0,n.jsx)(x.Z,{variant:"h4",textAlign:"center",children:null==C?void 0:C.dataCount})]})]})})})}),(0,n.jsx)(d.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{sx:{backgroundColor:e=>e.palette.error.main,border:e=>"1px solid ".concat(e.palette.error.main),color:e=>e.palette.common.white,cursor:"pointer"},onClick:()=>r.push("/dashboard/customer/job_delete"),children:(0,n.jsx)(u.Z,{children:(0,n.jsxs)(p.Z,{direction:"row",justifyContent:"space-around",alignItems:"center",spacing:0,children:[(0,n.jsx)(l.Z,{sx:{backgroundColor:e=>(0,m.Fq)(e.palette.error.light,.3)},height:"80px",p:2,width:"80px",borderRadius:"50%",component:"div",children:(0,n.jsx)(i.Z,{icon:"material-symbols:delete-outline",width:48})}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(x.Z,{variant:"h6",fontWeight:300,children:"JOB DELETE"}),(0,n.jsx)(x.Z,{variant:"h4",textAlign:"center",children:null==k?void 0:k.dataCount})]})]})})})})]})})})}},70539:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(85893),o=r(67294),i=r(83590),s=r(6049),c=r(26107),a=r(84412);r(12499);var l=r(46574),d=r(51233),h=r(87357),u=r(66242),p=r(44267),x=r(86886),m=r(15861),j=r(11163),g=()=>((0,j.useRouter)(),(0,n.jsx)(o.Fragment,{children:(0,n.jsx)("div",{style:{marginTop:"150px",marginBottom:"80px"},children:(0,n.jsx)(l.Z,{sx:{my:2},children:(0,n.jsx)(d.Z,{spacing:4,children:(0,n.jsx)(h.Z,{children:(0,n.jsxs)(u.Z,{sx:{position:"relative",height:"356px",borderRadius:"12px"},children:[(0,n.jsx)(h.Z,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:-1},children:(0,n.jsx)(h.Z,{component:"img",src:"/customerDashboard.png",sx:{width:"100%",height:"100%",backgroundRepeat:"no-repeat",objectFit:"fill"}})}),(0,n.jsx)(p.Z,{sx:{height:"100%",px:10},children:(0,n.jsx)(x.ZP,{container:!0,alignItems:"center",sx:{height:"inherit"},children:(0,n.jsx)(x.ZP,{item:!0,md:5,children:(0,n.jsx)(d.Z,{direction:"row",alignItems:"center",height:"100%",children:(0,n.jsxs)(d.Z,{spacing:2,children:[(0,n.jsx)(m.Z,{fontSize:30,fontWeight:600,color:"common.black",children:"Lorem ipsums"}),(0,n.jsx)(m.Z,{color:"common.black",fontSize:13,fontWeight:400,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium augue ac justo semper, vitae ultrices velit cursus. Aenean tristique vel mi non pulvinar."}),(0,n.jsx)(h.Z,{})]})})})})})]})})})})})})),f=r(28482);let Z=(e,t)=>new Promise(r=>{setTimeout(()=>{r({user_type:e,company_type:t})},1e3)}),v=()=>{let[e,t]=(0,o.useState)(null),r=(0,f.TA)({});return((0,o.useEffect)(()=>{let e="company";Z(e,"driver").then(e=>{console.log("Fetched user data for driver:",e),t(e)}).catch(e=>console.error("Error fetching user data for driver:",e)),Z(e,"customer").then(e=>{console.log("Fetched user data for customer:",e),t(e)}).catch(e=>console.error("Error fetching user data for customer:",e))},[]),e)?(console.log(e,"userdata"),(0,n.jsxs)(i.Z,{children:["company"===e.user_type&&"driver"===e.company_type&&(0,n.jsx)(a.Z,{formik:r}),"company"===e.user_type&&"customer"===e.company_type&&(0,n.jsx)(g,{formik:r}),(0,n.jsx)(s.Z,{})]})):(0,n.jsx)("div",{children:"Loading..."})};v.getLayout=function(e){return(0,n.jsx)(c.l,{children:e})};var b=v}},function(e){e.O(0,[4885,1810,678,3827,1994,6034,4815,8251,4576,5981,6107,5324,7115,9774,2888,179],function(){return e(e.s=37307)}),_N_E=e.O()}]);