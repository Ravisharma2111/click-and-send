(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{96540:function(e,i,t){"use strict";var n=t(64836);i.Z=void 0;var r=n(t(64938)),o=t(85893),l=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");i.Z=l},49069:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/company/job_posted",function(){return t(6909)}])},54762:function(e,i,t){"use strict";t.d(i,{J:function(){return s}});var n=t(85893),r=t(87357),o=t(51233),l=t(15861);t(67294);var s=e=>{let{title:i}=e;return(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"center",my:4},children:(0,n.jsxs)(o.Z,{alignItems:"center",children:[(0,n.jsx)(r.Z,{children:(0,n.jsx)(l.Z,{variant:"h5",children:i})}),(0,n.jsx)(r.Z,{component:"img",sx:{width:"400px"},src:"/assets/images/home/new/banner-image.jpg",alt:"truck"})]})})}},12499:function(e,i,t){"use strict";var n=t(85893),r=t(21425),o=t(79582),l=t(18217),s=t(67998),a=t(63763),d=t(87357),c=t(86886),h=t(66242),u=t(44267),x=t(51233),p=t(15861),m=t(88111),j=t(13311),g=t.n(j),v=t(11163),Z=t(67294);i.Z=e=>{let{jobPost:i}=e,t=(0,v.useRouter)(),{user:j}=(0,r.E)(),f=(0,s.I0)(),{jobPost:{pageCount:b,data:y,page:w,pageSize:_},jobHistory:C,jobDelete:k}=(0,s.v9)(e=>e.customerJob);(0,Z.useEffect)(()=>{f((0,l.zj)({user_id:null==j?void 0:j.id,type:null==j?void 0:j.user_type,lat:0,long:0}))},[]),Z.useEffect(()=>{f((0,l.M_)({user_id:null==j?void 0:j.id,type:null==j?void 0:j.user_type,lat:0,long:0}))},[]),Z.useEffect(()=>{f((0,l.dR)({user_id:null==j?void 0:j.id,type:null==j?void 0:j.user_type,lat:0,long:0}))},[]);let[S,P]=Z.useState([]),I=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"customer";try{let i=await a.Z.get("/api/auth/master/plan/list/".concat(e,"/").concat(1));if(200===i.status){let e=g()(null==i?void 0:i.data.view_data,{default:1});e?P(e):console.log("No data found in response.view_data")}}catch(e){console.log("error",e)}};return Z.useEffect(()=>{I()},[]),(0,n.jsx)(Z.Fragment,{children:(0,n.jsx)(d.Z,{sx:{mt:4},children:(0,n.jsxs)(c.ZP,{className:"dashboard_box_grid_responsive",container:!0,spacing:2,children:[(0,n.jsx)(c.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{sx:{backgroundColor:(t.pathname,"#145365"),border:"1px solid #145365",color:(t.pathname,"#fff"),cursor:"pointer"},onClick:()=>t.push("/dashboard/customer/job_posted"),children:(0,n.jsx)(u.Z,{className:"dashboardCards_CardContent_responsive",children:(0,n.jsxs)(x.Z,{direction:"row",justifyContent:"space-around",spacing:0,alignItems:"center",children:[(0,n.jsx)(d.Z,{sx:{backgroundColor:e=>(t.pathname,"#246678")},height:"80px",p:2,width:"80px",borderRadius:"50%",component:"div",children:(0,n.jsx)(o.Z,{icon:"basil:bag-solid",width:48})}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(p.Z,{variant:"h6",fontWeight:300,children:"JOB POSTED"}),(0,n.jsx)(p.Z,{variant:"h4",textAlign:"center",children:null==y?void 0:y.length})]})]})})})}),(0,n.jsx)(c.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{sx:{backgroundColor:(t.pathname,"#FD9B3D"),border:"1px solid #FD9B3D",color:(t.pathname,"#fff"),cursor:"pointer"},onClick:()=>t.push("/dashboard/customer/job_history"),children:(0,n.jsx)(u.Z,{children:(0,n.jsxs)(x.Z,{direction:"row",justifyContent:"space-around",alignItems:"center",spacing:0,children:[(0,n.jsx)(d.Z,{sx:{backgroundColor:e=>(t.pathname,"#ffa54e")},height:"80px",p:2,width:"80px",borderRadius:"50%",component:"div",children:(0,n.jsx)(o.Z,{icon:"ri:history-fill",width:48})}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(p.Z,{variant:"h6",fontWeight:300,children:"JOB HISTORY"}),(0,n.jsx)(p.Z,{variant:"h4",textAlign:"center",children:null==C?void 0:C.dataCount})]})]})})})}),(0,n.jsx)(c.ZP,{item:!0,md:4,children:(0,n.jsx)(h.Z,{sx:{backgroundColor:e=>e.palette.error.main,border:e=>"1px solid ".concat(e.palette.error.main),color:e=>e.palette.common.white,cursor:"pointer"},onClick:()=>t.push("/dashboard/customer/job_delete"),children:(0,n.jsx)(u.Z,{children:(0,n.jsxs)(x.Z,{direction:"row",justifyContent:"space-around",alignItems:"center",spacing:0,children:[(0,n.jsx)(d.Z,{sx:{backgroundColor:e=>(0,m.Fq)(e.palette.error.light,.3)},height:"80px",p:2,width:"80px",borderRadius:"50%",component:"div",children:(0,n.jsx)(o.Z,{icon:"material-symbols:delete-outline",width:48})}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(p.Z,{variant:"h6",fontWeight:300,children:"JOB DELETE"}),(0,n.jsx)(p.Z,{variant:"h4",textAlign:"center",children:null==k?void 0:k.dataCount})]})]})})})})]})})})}},6909:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return en}});var n=t(85893),r=t(83590),o=t(6049),l=t(26107),s=t(21425),a=t(38308),d=t(79582);t(54762);var c=t(50261),h=t(5222),u=t(72393),x=t(18217),p=t(67998),m=t(63763),j=t(96540),g=t(61659),v=t(37958),Z=t(36599),f=t(7921),b=t(77451),y=t(9601),w=t(51221),_=t(72162),C=t(87357),k=t(46574),S=t(86886),P=t(51233),I=t(15861),z=t(69417),W=t(66242),D=t(67720),N=t(44267),O=t(88111),T=t(90263),E=t(70872),B=t(6964),R=t(64666),A=t(6514),F=t(28482),M=t(30381),V=t.n(M),J=t(11163),Y=t(50841),q=t(46901),H=t(67294),L=t(77651),X=t(50135),Q=t(54927),U=t(6154),G=e=>{let{setShowOTPVerification:i}=e,[t,r]=(0,H.useState)(""),[o,l]=(0,H.useState)(""),[s,a]=(0,H.useState)(!1),[d,c]=(0,H.useState)(!1),h=async()=>{if(6!==t.length){l("OTP must be 6 digits.");return}a(!0);try{let e=await U.Z.post("/api/verify-otp",{otp:t});200===e.status?(alert("OTP Verified Successfully!"),c(!0)):l("Verification failed. Please try again.")}catch(e){l("An error occurred. Please try again.")}finally{a(!1)}i(!1)},u=async()=>{a(!0);try{let e=await U.Z.post("/api/resend-otp");200===e.status?alert("OTP Resent Successfully!"):l("Failed to resend OTP. Please try again.")}catch(e){l("An error occurred while resending OTP. Please try again.")}finally{a(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(C.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"350px",md:"350px",sm:"100%",xs:"100%"},backgroundImage:'url("/banner/banner.png")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[(0,n.jsx)(P.Z,{className:"Subscritption_box_stack_responsive",sx:{zIndex:8,position:"absolute",left:"8em",top:"7em"}}),(0,n.jsx)(N.Z,{className:"dashboard_subscription_box_stack_responsive",sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9}})]}),(0,n.jsxs)(S.ZP,{sx:{alignItems:"center",padding:"100px 0px"},container:!0,direction:"column",spacing:2,children:[(0,n.jsx)(S.ZP,{item:!0,children:(0,n.jsx)(I.Z,{variant:"h5",children:"Verify OTP"})}),(0,n.jsx)(S.ZP,{item:!0,children:(0,n.jsx)(X.Z,{label:"Enter OTP",variant:"outlined",fullWidth:!0,value:t,onChange:e=>{let i=e.target.value;(i=i.replace(/\D/g,"")).length>6&&(i=i.slice(0,6)),r(i),l("")},error:!!o,helperText:o,disabled:s})}),(0,n.jsx)(S.ZP,{item:!0,children:(0,n.jsx)(z.Z,{variant:"contained",color:"primary",onClick:h,disabled:s,children:"Verify OTP"})}),(0,n.jsx)(S.ZP,{item:!0,children:(0,n.jsx)(z.Z,{variant:"text",onClick:u,disabled:s,children:"Resend OTP"})})]})]})},K=e=>{let{paymentDetails:i,setShowPayment:t}=e,{user:r}=(0,s.E)();(0,J.useRouter)();let[o,l]=(0,H.useState)(!1),[a,d]=(0,H.useState)({cardNumber:"",expiryDate:"",cvv:"",nameOnCard:"",email:"company@mailinator.com",expMonth:"",expYear:""}),[c,h]=(0,H.useState)({}),[u,x]=(0,H.useState)(!1),p=e=>{h({});let{name:i,value:t}=e.target;if("expiryDate"===i){2===(t=t.replace(/[^0-9/]/g,"")).length&&-1===t.indexOf("/")?t+="/":t.length>2&&(t=t.substring(0,2)+"/"+t.substring(2).replace(/[^\d]/g,"")),3===t.length&&"deleteContentBackward"===e.nativeEvent.inputType&&(t=t.slice(0,-1));let[n,r]=t.split("/");d({...a,[i]:t,expMonth:n,expYear:r||""})}else if("cvv"===i)t=t.replace(/\D/g,"").slice(0,3),d({...a,[i]:t});else if("cardNumber"===i){var n;t=(null===(n=t.replace(/\D/g,"").match(/.{1,4}/g))||void 0===n?void 0:n.join(" "))||"",d({...a,[i]:t.slice(0,19)})}else d({...a,[i]:t})},j=e=>{let i={},t=new Date().getFullYear()%100,n=new Date().getMonth()+1,r=e.cardNumber.replace(/\s/g,"");if(e.cardNumber?16!==r.length&&(i.cardNumber="Card number must be 16 digits!"):i.cardNumber="Card number is required!",e.expiryDate){let[r,o]=e.expiryDate.split("/").map(e=>parseInt(e,10));isNaN(r)||isNaN(o)||r<1||r>12?i.expiryDate="Invalid month!":(o<t||o===t&&r<n)&&(i.expiryDate="Card has expired!")}else i.expiryDate="Expiry date is required!";return e.cvv?3!==e.cvv.length&&(i.cvv="CVV must be 3 digits!"):i.cvv="CVV is required!",e.nameOnCard||(i.nameOnCard="Name on card is required!"),i},g=async e=>{e.preventDefault();let n=j(a);if(h(n),0===Object.keys(n).length){let[e,n]=a.expiryDate.split("/"),o={user_id:null==r?void 0:r.id,invoice_id:null==i?void 0:i.invoice_id,email:null==r?void 0:r.email,number:null==a?void 0:a.cardNumber,exp_month:Number(e),exp_year:Number(n),cvc:Number(null==a?void 0:a.cvv),name:null==a?void 0:a.nameOnCard};try{let e=await m.Z.post("api/auth/payment/company-invoice-payment",o);(null==e?void 0:e.status)===200&&(l(!0),setTimeout(()=>{t(!1)},1500))}catch(e){if(e.response){let{data:i}=e.response;h(i.errors)}else console.error("An error occurred:",e.message)}}};return u?(0,n.jsx)(G,{setShowOTPVerification:x}):(0,n.jsxs)(W.Z,{sx:{paddingBottom:"120px"},children:[(0,n.jsx)(L.Z,{open:o,autoHideDuration:6e3,onClose:()=>l(!1),anchorOrigin:{vertical:"top",horizontal:"center"},style:{top:"100px"},children:(0,n.jsx)(q.Z,{elevation:6,variant:"filled",onClose:()=>l(!1),severity:"success",children:"Purchase plan successful!!"})}),(0,n.jsx)(C.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"350px",md:"350px",sm:"100%",xs:"100%"},backgroundImage:'url("/banner/banner.png")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:(0,n.jsx)(N.Z,{className:"dashboard_subscription_box_stack_responsive",sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9},children:(0,n.jsx)(P.Z,{spacing:4,children:(0,n.jsx)(I.Z,{gutterBottom:!0,fontSize:44,component:"h2",fontWeight:600,color:"white",variant:"h2",children:i.name})})})}),(0,n.jsxs)(k.Z,{maxWidth:"md",children:[(0,n.jsx)(I.Z,{variant:"h4",align:"center",gutterBottom:!0,style:{marginBottom:"2rem",color:"#333",paddingTop:"25px"},children:"Pay with card"}),(0,n.jsx)(W.Z,{variant:"outlined",style:{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"16px"},children:(0,n.jsxs)(N.Z,{children:[(0,n.jsx)(C.Z,{display:"flex",justifyContent:"center",alignItems:"center",mb:2,children:(0,n.jsx)(Q.Z,{fontSize:"large",style:{color:"#ff7533"}})}),(0,n.jsx)("form",{onSubmit:g,children:(0,n.jsxs)(S.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(S.ZP,{item:!0,xs:12,children:(0,n.jsx)(X.Z,{label:"Card Number",variant:"outlined",fullWidth:!0,name:"cardNumber",InputProps:{startAdornment:(0,n.jsx)(Q.Z,{style:{marginRight:"10px"}}),inputMode:"numeric",pattern:"[0-9]*"},value:null==a?void 0:a.cardNumber,onChange:p,error:!!(null==c?void 0:c.cardNumber),helperText:null==c?void 0:c.cardNumber})}),(0,n.jsx)(S.ZP,{item:!0,xs:6,children:(0,n.jsx)(X.Z,{label:"Expiry Date (MM/YY)",variant:"outlined",fullWidth:!0,name:"expiryDate",value:null==a?void 0:a.expiryDate,onChange:p,error:!!(null==c?void 0:c.expiryDate),helperText:null==c?void 0:c.expiryDate})}),(0,n.jsx)(S.ZP,{item:!0,xs:6,children:(0,n.jsx)(X.Z,{label:"CVV",variant:"outlined",fullWidth:!0,name:"cvv",inputProps:{maxLength:3,inputMode:"numeric",pattern:"[0-9]*"},value:null==a?void 0:a.cvv,onChange:p,error:!!(null==c?void 0:c.cvv),helperText:null==c?void 0:c.cvv})}),(0,n.jsx)(S.ZP,{item:!0,xs:12,children:(0,n.jsx)(X.Z,{label:"Name on Card",variant:"outlined",fullWidth:!0,name:"nameOnCard",value:null==a?void 0:a.nameOnCard,onChange:p,error:!!(null==c?void 0:c.nameOnCard),helperText:(null==c?void 0:c.nameOnCard)||" "})}),(0,n.jsx)(S.ZP,{item:!0,xs:12,children:(0,n.jsx)(z.Z,{type:"submit",variant:"contained",style:{backgroundColor:"#ff7533",color:"white",borderRadius:"8px"},fullWidth:!0,children:"Complete payment"})}),(0,n.jsx)(z.Z,{fullWidth:!0,variant:"text",onClick:()=>t(!1),children:"Back to Plans"})]})})]})})]})]})},$=t(17857);t(43723);var ee=e=>{var i,t;let{formik:r}=e,o=(0,J.useRouter)(),l=(0,p.I0)(),[R,A]=H.useState(""),{user:F}=(0,s.E)(),[M,Y]=(0,H.useState)(!1),[q,L]=H.useState(!1),[X,Q]=H.useState("new"),[U,G]=H.useState(!1),[ee,et]=H.useState(!1),[en,er]=(0,H.useState)(!1),[eo,el]=(0,H.useState)([]),[es,ea]=(0,H.useState)(null),ed={address:[{type:"pickup"},{type:"delivery"}]};null==ed||null===(i=ed.address)||void 0===i||i.filter(e=>"pickup"===e.type),null==ed||null===(t=ed.address)||void 0===t||t.filter(e=>"drop"===e.type);let{jobPost:{pageCount:ec,data:eh,page:eu,pageSize:ex,dataCount:ep}}=(0,p.v9)(e=>e.customerJob);H.useEffect(()=>{l((0,x.zj)({user_id:null==F?void 0:F.id,type:null==F?void 0:F.user_type,lat:0,long:0,is_deleted:0,date:R?V()(R).format("YYYY-MM-DD h:mm:ss"):""})).then(()=>{})},[eu,ex,R]),H.useEffect(()=>{let e=async()=>{await m.Z.get("api/auth/profile/my-profile").then(e=>{200===e.status&&(et(e.data.view_data.profile.address),console.log(e.data.view_data.profile.address,"prire"))})};e()},[]),H.useEffect(()=>{if(eh){let e=eh.filter(e=>"company"===e.created_by&&e.user_id===F.id);el(e)}},[eh,F]),console.log(null==eo?void 0:eo.length,"companyData");let em=async e=>{ea(e),er(!0)};return(0,n.jsx)(H.Fragment,{children:(0,n.jsx)(C.Z,{py:3,pb:12,children:(0,n.jsx)(k.Z,{children:en?(0,n.jsx)(K,{paymentDetails:es,setShowPayment:er}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.Z,{py:5,children:(0,n.jsx)(u.Z,{jobPost:null==eo?void 0:eo.length})}),(0,n.jsx)(C.Z,{py:2,children:U?(0,n.jsx)(c.Z,{}):(0,n.jsxs)(S.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(S.ZP,{item:!0,md:7,children:(0,n.jsxs)(P.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,n.jsx)(I.Z,{fontSize:28,fontWeight:600,color:"primary",children:"Job Posted By You"}),(0,n.jsx)(C.Z,{borderRadius:"50%",border:"1px solid",borderColor:e=>e.palette.primary.main,color:e=>e.palette.primary.main,py:.6,px:1.8,children:(0,n.jsx)(I.Z,{fontSize:"1.3rem",fontWeight:500,color:"primary",children:(0,n.jsx)($.ZP,{start:0,duration:1,end:null==eo?void 0:eo.length,enableScrollSpy:!0,scrollSpyDelay:200})})})]})}),(0,n.jsx)(S.ZP,{item:!0,md:3,children:(0,n.jsx)(C.Z,{children:(0,n.jsx)(a.zC,{type:"date",sx:{mb:0},size:"small",fullWidth:!0,name:"date",value:R,onChange:e=>A(e.target.value)})})}),(0,n.jsx)(S.ZP,{item:!0,md:2,children:(0,n.jsx)(C.Z,{children:(0,n.jsx)(z.Z,{startIcon:(0,n.jsx)(j.Z,{}),variant:"contained",fullWidth:!0,onClick:()=>{ee?o.push("/dashboard/company/job_post_form/create"):o.push("/company/profile")},children:"Add New Job"})})})]})}),(0,n.jsxs)(C.Z,{py:2,sx:{background:" "},children:[(0,n.jsx)(S.ZP,{container:!0,rowSpacing:0,justifyContent:"center",children:eo&&(null==eo?void 0:eo.length)>0?eo.map((e,i)=>{var t,r,l,s,a,c,u,x,p;let m=(null==e?void 0:e.items)&&(null==e?void 0:null===(t=e.items)||void 0===t?void 0:t.length)>0&&(null==e?void 0:e.items[0]),j=(null==e?void 0:e.items)&&(null==e?void 0:null===(r=e.items)||void 0===r?void 0:r.length)>0&&(null==e?void 0:e.items[0]);return(0,n.jsx)(S.ZP,{item:!0,md:12,children:(0,n.jsxs)(W.Z,{sx:{my:2,borderWidth:"2px",":hover":{borderColor:"#ff7534",transition:" all 0.3s ease-in-out"}},variant:"outlined",children:[(0,n.jsxs)(P.Z,{direction:"row",justifyContent:"space-between",px:2,py:1.4,alignItems:"center",children:[(0,n.jsx)(C.Z,{sx:{width:"90%"},children:(0,n.jsx)(I.Z,{color:"common.black",fontSize:17,sx:{overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer"},fontWeight:500,onClick:()=>o.push("/dashboard/company/job_history/detail/".concat(e.id)),children:null==e?void 0:e.name})}),(null==e?void 0:e.status)<=0&&(0,n.jsx)(C.Z,{children:(0,n.jsx)(ei,{params:{user_id:null==F?void 0:F.id,job_id:null==e?void 0:e.id}})})]}),(0,n.jsx)(D.Z,{}),(0,n.jsxs)(N.Z,{children:[(0,n.jsxs)(S.ZP,{container:!0,spacing:2,alignItems:"start",children:[(0,n.jsxs)(S.ZP,{item:!0,md:3,children:[(0,n.jsxs)(P.Z,{direction:"row",spacing:2,mb:2,children:[(0,n.jsxs)(P.Z,{direction:"row",alignItems:"center",spacing:.6,children:[(0,n.jsx)(P.Z,{alignItems:"center",children:(0,n.jsx)(d.Z,{icon:"bx:layer",color:e=>e.palette.primary.main,width:22})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{fontSize:12,color:"grey",children:e.items[0].product.material})})]}),(0,n.jsxs)(P.Z,{direction:"row",alignItems:"center",spacing:.6,children:[(0,n.jsx)(P.Z,{alignItems:"center",children:(0,n.jsx)(d.Z,{icon:"gg:expand",color:e=>e.palette.primary.main,width:22})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{fontSize:12,color:"grey",children:"".concat(e.items[0].product.length,"*").concat(e.items[0].product.width,"*").concat(e.items[0].product.height)})})]}),(0,n.jsxs)(P.Z,{direction:"row",alignItems:"center",spacing:.6,children:[(0,n.jsx)(P.Z,{alignItems:"center",children:(0,n.jsx)(d.Z,{icon:"uil:weight",color:e=>e.palette.primary.main,width:22})}),(0,n.jsx)(C.Z,{children:(0,n.jsxs)(I.Z,{fontSize:12,color:"grey",children:[e.items[0].product.quantity," Qty"]})})]})]}),(0,n.jsx)(P.Z,{direction:"row",spacing:1,children:e.items.map((e,i)=>i>2?"":(0,n.jsx)(H.Fragment,{children:(0,n.jsx)(C.Z,{component:"img",alt:e.product.image,src:"".concat(e.product.base_url).concat(e.product.image),sx:{width:"83px",height:"59px",border:"1px solid lightgrey",objectFit:"cover"}})},i))}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(h.Z,{line:4,component:"p",variant:"body2",children:e.description})})]}),(0,n.jsxs)(S.ZP,{item:!0,md:3,children:[(0,n.jsxs)(C.Z,{mb:4,children:[(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{fontSize:13,fontWeight:600,children:"Pick up Date"})}),(0,n.jsxs)(P.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,n.jsx)(C.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,n.jsx)(d.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==m?void 0:null===(l=m.product)||void 0===l?void 0:l.pickup_date)||"N/A"})})]})]}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{fontSize:13,fontWeight:600,children:"Pick up Time"})}),(0,n.jsxs)(P.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,n.jsx)(C.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,n.jsx)(d.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==m?void 0:null===(s=m.product)||void 0===s?void 0:s.pickup_time)||"N/A"})})]})]}),(0,n.jsxs)(S.ZP,{item:!0,md:3,children:[(0,n.jsxs)(C.Z,{mb:4,children:[(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{fontSize:13,fontWeight:600,children:"Delivery out Date"})}),(0,n.jsxs)(P.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,n.jsx)(C.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,n.jsx)(d.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==m?void 0:null===(a=m.product)||void 0===a?void 0:a.drop_date)||"N/A"})})]})]}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{fontSize:13,fontWeight:600,children:"Delivery out Time"})}),(0,n.jsxs)(P.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,n.jsx)(C.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,n.jsx)(d.Z,{color:e=>e.palette.primary.main,icon:"majesticons:calendar-line"})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==m?void 0:null===(c=m.product)||void 0===c?void 0:c.drop_time)||"N/A"})})]})]}),(0,n.jsxs)(S.ZP,{item:!0,md:3,children:[(0,n.jsxs)(Z.Z,{sx:{["& .".concat(f.Z.root,":before")]:{flex:0,padding:0}},children:[(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:null==j?void 0:null===(u=j.address.filter(e=>"pickup"===e.type))||void 0===u?void 0:u.map((e,i)=>(0,n.jsxs)(b.Z,{sx:{"&.MuiTimelineItem-root":{minHeight:"50px"}},children:[(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(d.Z,{color:e=>e.palette.primary.main,width:30,icon:"carbon:location-star-filled"}),(0,n.jsx)(w.Z,{sx:{"&.MuiTimelineConnector-root":{border:e=>"1px solid ".concat((0,O.Fq)(e.palette.common.black,.6)),width:"0px",borderStyle:"dashed",backgroundColor:"transparent"}}})]}),(0,n.jsxs)(_.Z,{sx:{fontSize:14,fontWeight:600},children:[e.address," ",(0,n.jsxs)(I.Z,{fontSize:10,component:"span",color:"primary",children:[e.type,","]})]},i)]},i))}),(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:null==j?void 0:null===(x=j.address.filter(e=>"drop"===e.type))||void 0===x?void 0:x.map((e,i)=>(0,n.jsxs)(b.Z,{sx:{"&.MuiTimelineItem-root":{minHeight:"50px"}},children:[(0,n.jsx)(y.Z,{children:(0,n.jsx)(d.Z,{width:30,icon:"carbon:location-star-filled"})}),(0,n.jsxs)(_.Z,{sx:{fontSize:14,fontWeight:600},children:[e.address," ",(0,n.jsxs)(I.Z,{fontSize:10,component:"span",color:"primary",children:[e.type," "]})]})]},i))})]}),(0,n.jsxs)(C.Z,{mt:4,children:[(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{fontSize:13,fontWeight:600,children:"Created At"})}),(0,n.jsxs)(P.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,n.jsx)(C.Z,{sx:{backgroundColor:"#FEE6BB",width:"28px",height:"28px",borderRadius:"50%",p:"5px"},children:(0,n.jsx)(d.Z,{color:e=>e.palette.primary.main,icon:"ion:time"})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(I.Z,{color:"grey",fontWeight:400,fontSize:13,children:(null==e?void 0:e.created_at)?V()(null==e?void 0:e.created_at).format("DD MMM"):"N/A"})})]})]})]})]}),(0,n.jsx)(D.Z,{sx:{my:2}}),(0,n.jsx)(C.Z,{children:(0,n.jsxs)(P.Z,{className:"customerBid_box_stack_responsive",direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,n.jsx)(I.Z,{variant:"subtitle2",sx:{display:"flex",alignItems:"flex-start"},children:null==e?void 0:e.budget}),(0,n.jsxs)(P.Z,{direction:"row",spacing:2,children:[(null==e?void 0:e.bid_id)&&(null==e?void 0:e.bid_id)!==null&&(null==e?void 0:e.status)===2&&(null==e?void 0:e.is_paid)===0&&(null==F?void 0:F.user_type)=="company"&&(null==F?void 0:F.profile.company_type)=="customer"&&(0,n.jsx)(C.Z,{children:(0,n.jsx)(z.Z,{color:"secondary",fullWidth:!0,variant:"contained",onClick:()=>em(e),sx:{fontWeight:500},children:"Pay"})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(T.Z,{badgeContent:null==e?void 0:null===(p=e.job_requests)||void 0===p?void 0:p.length,color:"secondary",anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,n.jsx)(z.Z,{sx:{fontWeight:500},fullWidth:!0,variant:"contained",startIcon:(0,n.jsx)(d.Z,{icon:"ph:hand-fill"}),onClick:()=>o.push("/dashboard/company/driver_bid_list/".concat(e.id)),children:"View Bids"})})}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(z.Z,{color:"dark",fullWidth:!0,variant:"outlined",startIcon:(0,n.jsx)(d.Z,{icon:"basil:edit-solid"}),onClick:()=>o.push("/dashboard/company/job_post_form/".concat(null==e?void 0:e.id)),disabled:(null==e?void 0:e.status)===1||(null==e?void 0:e.status)===2||3===e.status||(null==e?void 0:e.status)===4,sx:{fontWeight:500},children:"Edit Job"})}),(null==e?void 0:e.bid_id)&&(null==e?void 0:e.bid_id)!==null&&(null==e?void 0:e.status)!==1&&(0,n.jsx)(C.Z,{children:(0,n.jsx)(z.Z,{color:"primary",fullWidth:!0,variant:"outlined",startIcon:(0,n.jsx)(d.Z,{icon:"mingcute:foot-fill"}),onClick:()=>o.push("/dashboard/company/track_job/".concat(e.bid_id,"/").concat(e.id)),sx:{fontWeight:500},children:"Track Job"})})]})]})})]})]})},i)}):(0,n.jsx)(C.Z,{my:4,children:(0,n.jsx)(I.Z,{variant:"h4",children:"No Job Posted"})})}),eo&&(null==eo?void 0:eo.length)>0&&(0,n.jsx)(C.Z,{children:(0,n.jsx)(P.Z,{alignItems:"center",justifyContent:"center",children:(0,n.jsx)(E.Z,{count:ec,color:"primary",page:eu,onChange:(e,i)=>{l((0,x._O)(i))},variant:"outlined",shape:"rounded",renderItem:e=>(0,n.jsx)(B.Z,{slots:{previous:()=>(0,n.jsx)(P.Z,{direction:"row",spacing:.5,alignItems:"center",children:(0,n.jsx)(g.Z,{})}),next:()=>(0,n.jsx)(P.Z,{direction:"row",spacing:.5,alignItems:"center",children:(0,n.jsx)(v.Z,{})})},...e})})})})]})]})})})})};let ei=e=>{let{params:i}=e,[t,r]=H.useState(!1),{user:o}=(0,s.E)(),{enqueueSnackbar:l}=(0,Y.Ds)(),c=()=>{r(!1),Z.resetForm()},h=(0,p.I0)(),{jobPost:{pageCount:u,data:j,page:g,pageSize:v}}=(0,p.v9)(e=>e.customerJob),Z=(0,F.TA)({initialValues:{...i,reason:"",is_deleted:1},validate:e=>{let i={};return e.reason||(i.reason="Reason is required"),i},onSubmit:async e=>{await m.Z.post("api/auth/jobs/delete-job",e).then(e=>{var i;(null==e?void 0:e.status)===200&&(c(),h((0,x.zj)({user_id:null==o?void 0:o.id,type:null==o?void 0:o.user_type,lat:0,long:0,is_deleted:0})),l((0,n.jsx)(q.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}))}).catch(e=>{var i;let{response:t}=e;l((0,n.jsx)(q.Z,{icon:!1,severity:"error",children:null==t?void 0:null===(i=t.data)||void 0===i?void 0:i.error}),{variant:"error",anchorOrigin:{vertical:"top",horizontal:"center"}})})}});return(0,n.jsxs)(C.Z,{children:[(0,n.jsx)(z.Z,{onClick:()=>r(!0),children:(0,n.jsx)(d.Z,{icon:"fluent:delete-12-regular",width:"1.7em",color:e=>e.palette.primary.main})}),(0,n.jsx)(R.Z,{open:t,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",fullWidth:!0,maxWidth:"xs",children:(0,n.jsx)(A.Z,{sx:{py:2},children:(0,n.jsxs)(P.Z,{spacing:1,sx:{mb:0,height:"100%"},justifyContent:"space-between",children:[(0,n.jsx)(I.Z,{id:"modal-modal-title",fontWeight:600,fontSize:20,component:"p",children:"Sure you want to delete?"}),(0,n.jsx)(C.Z,{children:(0,n.jsx)(a.zC,{size:"small",name:"reason",label:"Reason",fullWidth:!0,multiline:!0,rows:"4",value:Z.values.reason,onChange:Z.handleChange,helperText:Z.touched.reason&&Z.errors.reason})}),(0,n.jsx)(C.Z,{component:"form",noValidate:!0,onSubmit:Z.handleSubmit,children:(0,n.jsxs)(P.Z,{direction:"row",spacing:3,children:[(0,n.jsx)(z.Z,{fullWidth:!0,variant:"outlined",onClick:c,children:"No, cancel"}),(0,n.jsx)(z.Z,{fullWidth:!0,variant:"contained",type:"submit",children:"Yes, Delete"})]})})]})})})]})},et=()=>{let e=(0,F.TA)({initialValues:{month:0}});return(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(ee,{formik:e}),(0,n.jsx)(o.Z,{})]})};et.getLayout=function(e){return(0,n.jsx)(l.l,{children:e})};var en=et},43723:function(e,i,t){"use strict";var n=t(85893);t(12499);var r=t(46574),o=t(51233),l=t(87357),s=t(66242),a=t(44267),d=t(86886),c=t(15861),h=t(69417),u=t(11163),x=t(67294);i.Z=()=>{let e=(0,u.useRouter)();return(0,n.jsx)(x.Fragment,{children:(0,n.jsx)("div",{style:{marginTop:"150px",marginBottom:"80px"},children:(0,n.jsx)(r.Z,{sx:{my:2},children:(0,n.jsx)(o.Z,{spacing:4,children:(0,n.jsx)(l.Z,{children:(0,n.jsxs)(s.Z,{sx:{position:"relative",height:"356px",borderRadius:"12px"},children:[(0,n.jsx)(l.Z,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:-1},children:(0,n.jsx)(l.Z,{component:"img",src:"/customerDashboard.png",sx:{width:"100%",height:"100%",backgroundRepeat:"no-repeat",objectFit:"fill"}})}),(0,n.jsx)(a.Z,{sx:{height:"100%",px:10},children:(0,n.jsx)(d.ZP,{container:!0,alignItems:"center",sx:{height:"inherit"},children:(0,n.jsx)(d.ZP,{item:!0,md:5,children:(0,n.jsx)(o.Z,{direction:"row",alignItems:"center",height:"100%",children:(0,n.jsxs)(o.Z,{spacing:2,children:[(0,n.jsx)(c.Z,{fontSize:30,fontWeight:600,color:"common.black",children:"Lorem ipsums"}),(0,n.jsx)(c.Z,{color:"common.black",fontSize:13,fontWeight:400,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium augue ac justo semper, vitae ultrices velit cursus. Aenean tristique vel mi non pulvinar."}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(h.Z,{sx:{fontSize:"14px"},variant:"contained",onClick:()=>e.push("/dashboard/customer/job_posted"),color:"dark",children:"POST YOUR JOB"})})]})})})})})]})})})})})})}}},function(e){e.O(0,[4885,1810,678,3827,1994,6034,4815,8251,4576,872,7857,3879,1383,5981,6107,5324,9550,9774,2888,179],function(){return e(e.s=49069)}),_N_E=e.O()}]);