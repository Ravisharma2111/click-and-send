(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{53829:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return r(99848)}])},99848:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var i=r(85893),n=r(30633),a=r(21425),o=r(26107),l=r(67294),s=r(71953),c=r(28482),d=r(38308),p=r(79582),u=r(50594),m=r(54776),h=r(87357),x=r(46574),v=r(86886),f=r(51233),y=r(15861),g=r(69417),j=r(50480),b=r(30465),_=r(98456),Z=r(66242),w=r(44267),C=r(93946),S=r(94054),z=r(69368),k=r(56815),W=r(64666),V=r(6514),T=r(67720),F=r(31425),E=r(63763),P=r(33987),O=r(11163),A=r(22065),I=r(76487),N=r(50841),R=r(46901);let B=l.forwardRef(function(e,t){return(0,i.jsx)(m.Z,{direction:"down",ref:t,...e})});var U=e=>{var t,r;let{formik:n,open:o,handleOpenClose:m}=e,U=(0,O.useRouter)(),{enqueueSnackbar:L}=(0,N.Ds)(),[H,M]=l.useState(!1),[q,D]=l.useState(),{signUpWithGoogle:Y,user:G,signUpWithFacebook:$}=(0,a.E)(),[J,X]=l.useState(!1),[K,Q]=l.useState(!1),[ee,et]=l.useState(""),[er,ei]=l.useState(""),[en,ea]=l.useState("GB"),[eo,el]=l.useState(!1),[es,ec]=l.useState(60),[ed,ep]=l.useState(!1),[eu,em]=l.useState(!1),[eh,ex]=l.useState(!0),[ev,ef]=l.useState(!1),[ey,eg]=l.useState();(0,l.useEffect)(()=>{ep(!1)},[n.values.mobile.length]);let[ej,eb]=l.useState(),e_={GB:{primary:"UK",secondary:"+44"},IN:{primary:"IN",secondary:"+91"}},eZ=async()=>{try{Y&&Y("customer")}catch(e){console.error(e)}},ew=async()=>{try{$&&$("customer")}catch(e){console.error(e)}};(0,l.useEffect)(()=>{let e=setTimeout(()=>{el(!0)},6e4),t=setInterval(()=>{ec(e=>e-1)},1e3);return()=>{clearTimeout(e),clearInterval(t)}},[]);let eC=()=>{em(!0),setTimeout(()=>{em(!1),ep(!0)},2e3)},eS=(0,c.TA)({initialValues:{email:n&&(null==n?void 0:null===(t=n.values)||void 0===t?void 0:t.mobile)?null==n?void 0:null===(r=n.values)||void 0===r?void 0:r.mobile:"",otp:er,type:"mobile"},validate:e=>{},onSubmit:async e=>{console.log("formik.values formik.values formik.values :",n.values);try{var t,r,a,o,l,s;let e=null==n?void 0:null===(r=n.values)||void 0===r?void 0:null===(t=r.mobile)||void 0===t?void 0:t.replace(/^0+/,"");console.log(e);let c=await E.Z.post("/api/user/send-otp",{email:"".concat(e),dial_code:"".concat(ey),type:"mobile",logged:"no"});console.log("response API :",null==c?void 0:c.status),(null==c?void 0:c.status)===200?(L((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#74ccbf ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==c?void 0:null===(a=c.data)||void 0===a?void 0:a.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}),X(!0),M(!0),Q(!0),ei(null==c?void 0:null===(o=c.data)||void 0===o?void 0:o.verification_code),n.setFieldValue("otp",null==c?void 0:null===(l=c.data)||void 0===l?void 0:l.verification_code)):(L((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==c?void 0:null===(s=c.data)||void 0===s?void 0:s.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}),X(!1))}catch(e){console.error("Error occurred:",e),409===e.response.status&&L((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:"Mobile already register"}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})}}}),ez=async()=>{var e,t,r;let a="".concat(ey).concat(n.values.mobile),o={email:a,otp:null==n?void 0:null===(e=n.values)||void 0===e?void 0:e.otp};try{let e=await E.Z.post("api/user/validate-otp",o);(null==e?void 0:e.status)===200?(L((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#74ccbf ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}),X(!1),M(!1),ex(!1),et(e),ef(!0)):(L((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}),X(!1))}catch(e){console.error("Error sending OTP:",e)}};return(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(h.Z,{sx:{pb:4,py:12},children:(0,i.jsx)(x.Z,{children:(0,i.jsxs)(v.ZP,{sx:{justifyContent:"center"},spacing:0,container:!0,children:[(0,i.jsx)(v.ZP,{item:!0,md:6,children:(0,i.jsx)(h.Z,{sx:{marginTop:"60px"},style:{position:"sticky",top:"100px"},children:(0,i.jsx)(h.Z,{src:"/login/bro.png",component:"img"})})}),(0,i.jsx)(v.ZP,{item:!0,md:5,sm:12,xs:12,children:(0,i.jsxs)(f.Z,{spacing:3,children:[(0,i.jsx)(h.Z,{textAlign:"center",children:(0,i.jsx)(y.Z,{fontSize:20,fontWeight:600,children:"Welcome to Click & Send"})}),(0,i.jsxs)(f.Z,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(h.Z,{children:(0,i.jsx)(g.Z,{fullWidth:!0,sx:{backgroundColor:e=>e.palette.grey[100],border:e=>"1px solid ".concat(e.palette.grey[300]),borderRadius:"20px",px:2,color:"#fff",":hover":{backgroundColor:e=>e.palette.grey[400]}},startIcon:(0,i.jsx)(p.Z,{icon:"flat-color-icons:google"}),onClick:()=>eZ(),children:(0,i.jsx)(y.Z,{fontSize:9,color:e=>e.palette.grey[600],children:"Sign up with Google"})})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(g.Z,{fullWidth:!0,sx:{backgroundColor:e=>e.palette.grey[100],border:e=>"1px solid ".concat(e.palette.grey[300]),borderRadius:"20px",px:2,color:"#fff",":hover":{backgroundColor:e=>e.palette.grey[400]}},startIcon:(0,i.jsx)(p.Z,{icon:"logos:facebook"}),onClick:()=>ew(),children:(0,i.jsx)(y.Z,{fontSize:9,color:e=>e.palette.grey[600],children:"Sign up with Facebook"})})})]}),(0,i.jsx)(h.Z,{component:"form",noValidate:!0,onSubmit:n.handleSubmit,children:(0,i.jsxs)(h.Z,{mb:3,children:[(0,i.jsx)(j.Z,{control:(0,i.jsx)(b.Z,{size:"medium",name:"user_type",onChange:e=>{n.resetForm(),n.setFieldValue("user_type","customer")},checked:"customer"===n.values.user_type}),label:(0,i.jsx)(y.Z,{variant:"h5",fontWeight:500,children:"Customer"})}),(0,i.jsx)(j.Z,{control:(0,i.jsx)(b.Z,{size:"medium",name:"user_type",onChange:e=>{n.resetForm(),n.setFieldValue("user_type","company")},checked:"company"===n.values.user_type}),label:(0,i.jsx)(y.Z,{variant:"h5",fontWeight:500,children:"Company"})})]})}),(0,i.jsxs)(h.Z,{component:"form",noValidate:!0,onSubmit:n.handleSubmit,children:[(0,i.jsx)(h.Z,{children:(0,i.jsx)(d.zC,{variant:"standard",fullWidth:!0,placeholder:"company"===n.values.user_type?"Company Username":"Name",name:"name",label:"company"===n.values.user_type?"Company Username":"Name",value:n.values.name,onChange:n.handleChange,helperText:n.touched.name&&n.errors.name,size:"small"})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(d.zC,{variant:"standard",fullWidth:!0,placeholder:"company"===n.values.user_type?"Enter Company Name":"Username",name:"user_name",label:"company"===n.values.user_type?"Enter Company Name":"Username",value:n.values.user_name,onChange:n.handleChange,helperText:n.touched.user_name&&n.errors.user_name,size:"small"})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(d.zC,{variant:"standard",fullWidth:!0,placeholder:"company"===n.values.user_type?"Enter Your Company Email":"Enter Your Email Adress",name:"email",label:"company"===n.values.user_type?"Enter Your Company Email":"Enter Your Email Adress",value:n.values.email,onChange:n.handleChange,helperText:n.touched.email&&n.errors.email,size:"small"})}),(0,i.jsxs)(h.Z,{sx:{display:"flex",alignItems:"baseline",position:"relative"},children:[(0,i.jsx)("div",{style:{position:"relative",top:"-13px"},children:(0,i.jsx)(P.ZP,{selected:en,onSelect:e=>{let t=e.toUpperCase(),{primary:r,secondary:i}=e_[t];eg(i),ea(t)},countries:["GB","IN"],customLabels:e_,selectedSize:10,className:"menu-flags",components:{DropdownIndicator:()=>null,IndicatorSeparator:()=>null},selectButtonClassName:"menu-flags-button",style:{border:"1px solid red",fontSize:"25px",borderRadius:"5px",width:"40px"}})}),(0,i.jsx)(d.zC,{variant:"standard",fullWidth:!0,name:"mobile",label:"Contact Number",value:n.values.mobile,onChange:e=>{let t=e.target.value.replace(/\D/g,"");(t=t.slice(0,11)).length,n.setFieldValue("mobile",t)},helperText:n.touched.mobile&&n.errors.mobile,placeholder:"Enter Your Contact Number",size:"small"}),ev&&(0,i.jsx)(h.Z,{className:"numberVerified",mt:2,sx:{position:"absolute",top:"74%",left:"45%",transform:"translate(-50%, -50%)",color:"green",fontWeight:"bold"},children:"Number is verified."}),(0,i.jsx)(h.Z,{className:"otpButton",mt:2,children:(0,i.jsx)(g.Z,{variant:"contained",color:"primary",disabled:ed||11!==n.values.mobile.length,sx:{width:"100px",marginLeft:"10px"},onClick:()=>{eS.handleSubmit(),ep(!0),eC()},children:eu?(0,i.jsx)(_.Z,{size:24}):"Send OTP"})})]}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(d.Jg,{fullWidth:!0,name:"password",variant:"standard",label:"Password",value:n.values.password,onChange:n.handleChange,helperText:n.touched.password&&n.errors.password,placeholder:"Enter Password",size:"small"})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(d.Jg,{name:"password_confirmation",label:"Confirm Password",variant:"standard",value:n.values.password_confirmation,onChange:n.handleChange,helperText:n.touched.password_confirmation&&n.errors.password_confirmation,fullWidth:!0,placeholder:"Enter Confirm Password",size:"small"})}),"company"===n.values.user_type&&(0,i.jsx)(h.Z,{children:(0,i.jsxs)(f.Z,{direction:"row",spacing:2,sx:{mt:2},children:[(0,i.jsxs)(f.Z,{textAlign:"center",children:[(0,i.jsx)(y.Z,{textAlign:"left",variant:"p",children:"Company Certificate"}),!n.values.company_certificate&&(0,i.jsx)(d.zC,{variant:"standard",fullWidth:!0,type:"file",size:"small",value:"",name:"company_certificate",onChange:e=>{n.setFieldValue("company_certificate",e.target.files[0]),n.setFieldValue("company_certificate_url",URL.createObjectURL(e.target.files[0]))},helperText:n.touched.company_certificate&&n.errors.company_certificate,isAdditional:!0,textBoxSx:{"& .MuiInput-root:after":{borderBottom:"0px !important"},"& .MuiInput-root:before":{borderBottom:"0px !important",content:'""'}}}),n.values.company_certificate_url&&(0,i.jsx)(Z.Z,{sx:{width:"max-content"},children:(0,i.jsx)(w.Z,{children:(0,i.jsxs)(h.Z,{sx:{position:"relative"},children:[(0,i.jsx)(C.Z,{size:"small",sx:{position:"absolute",top:0,right:0},onClick:()=>{n.setFieldValue("company_certificate",""),n.setFieldValue("company_certificate_url","")},children:(0,i.jsx)(u.Z,{fontSize:"small"})}),(0,i.jsx)(h.Z,{style:{margin:"10px",width:"150px",height:"150px"},thumbnail:!0,children:n.values.company_certificate.name.toLowerCase().endsWith(".pdf")?(0,i.jsx)("embed",{src:n.values.company_certificate_url,type:"application/pdf",width:"100%",height:"100%"}):(0,i.jsx)("img",{src:n.values.company_certificate_url,alt:n.values.company_certificate.name,style:{width:"100%",height:"100%",objectFit:"cover"}})})]})})})]}),(0,i.jsxs)(f.Z,{textAlign:"center",children:[(0,i.jsx)(y.Z,{textAlign:"left",variant:"p",children:"Company VAT Certificate"}),!n.values.company_vat&&(0,i.jsx)(d.zC,{variant:"standard",fullWidth:!0,type:"file",size:"small",value:"",name:"company_vat",onChange:e=>{n.setFieldValue("company_vat",e.target.files[0]),n.setFieldValue("company_vat_url",URL.createObjectURL(e.target.files[0]))},helperText:n.touched.company_vat&&n.errors.company_vat,isAdditional:!0,textBoxSx:{"& .MuiInput-root:after":{borderBottom:"0px !important"},"& .MuiInput-root:before":{borderBottom:"0px !important",content:'""'}}}),n.values.company_vat_url&&(0,i.jsx)(Z.Z,{sx:{width:"max-content"},children:(0,i.jsx)(w.Z,{children:(0,i.jsxs)(h.Z,{sx:{position:"relative"},children:[(0,i.jsx)(C.Z,{size:"small",sx:{position:"absolute",top:0,right:0},onClick:()=>{n.setFieldValue("company_vat",""),n.setFieldValue("company_vat_url","")},children:(0,i.jsx)(u.Z,{fontSize:"small"})}),(0,i.jsx)(h.Z,{style:{margin:"10px",width:"150px",height:"150px"},thumbnail:!0,children:n.values.company_vat.name.toLowerCase().endsWith(".pdf")?(0,i.jsx)("embed",{src:n.values.company_vat_url,type:"application/pdf",width:"100%",height:"100%"}):(0,i.jsx)("img",{src:n.values.company_vat_url,alt:n.values.company_vat.name,style:{width:"100%",height:"100%",objectFit:"cover"}})})]})})})]})]})}),(0,i.jsx)(f.Z,{justifyContent:"space-between",alignItems:"left",children:(0,i.jsx)(h.Z,{my:1,children:(0,i.jsxs)(S.Z,{error:!!n.errors.term,fullWidth:!0,children:[(0,i.jsx)(j.Z,{name:"term",checked:"yes"==n.values.term,onChange:e=>{e.target.checked?n.setFieldValue("term","yes"):n.setFieldValue("term","no")},control:(0,i.jsx)(z.Z,{size:""}),label:(0,i.jsxs)(y.Z,{textAlign:"center",children:["I accept the",(0,i.jsx)(y.Z,{color:"primary",ml:.5,component:"span",onClick:()=>U.push("/termandcondition"),children:"terms & Condition"})," "]})}),n.errors.term&&(0,i.jsx)(k.Z,{sx:{textAlign:"center"},children:n.errors.term})]})})}),(0,i.jsxs)(f.Z,{direction:"row",spacing:3,justifyContent:"space-around",children:[(0,i.jsx)(g.Z,{fullWidth:!0,variant:"contained",type:"submit",color:"primary",children:"Sign up"}),(0,i.jsx)(g.Z,{fullWidth:!0,variant:"outlined",color:"dark",onClick:n.resetForm,children:(0,i.jsx)(y.Z,{children:"Reset Now"})})]}),(0,i.jsxs)(f.Z,{my:1.5,direction:"row",justifyContent:"center",spacing:.5,children:[(0,i.jsx)(y.Z,{variant:"p",children:"Already a member?"})," ",(0,i.jsx)(y.Z,{color:"primary",onClick:()=>U.push("/auth/login"),sx:{cursor:"pointer"},children:"Login Here"})]}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(g.Z,{onClick:()=>U.push("/auth/register/driver"),fullWidth:!0,variant:"outlined",startIcon:(0,i.jsx)(p.Z,{icon:"ion:bicycle",color:"primary"}),children:(0,i.jsx)(y.Z,{children:"Want To Become A Driver"})})})]})]})})]})})}),(0,i.jsx)(s.Z,{onClose:m,email:n.values.email,registerFormik:n,open:o,title:"OTP Verification"}),K&&(0,i.jsxs)(W.Z,{open:H,TransitionComponent:B,components:"form",scroll:"paper","aria-describedby":"alert-dialog-slide-description",maxWidth:"xs",sx:{"& .MuiPaper-rounded":{borderRadius:"0px"}},children:[(0,i.jsx)(A.f,{title:"OTP Verification",showResend:J}),(0,i.jsxs)(V.Z,{dividers:!0,children:[(0,i.jsxs)(f.Z,{textAlign:"center",mt:2,children:[(0,i.jsx)(h.Z,{m:"auto",component:"img",width:"6em"}),(0,i.jsx)(y.Z,{variant:"h4",fontWeight:300,sx:{cursor:"pointer",fontSize:"16px",fontWeight:500},children:"Please Enter One Time OTP"}),(0,i.jsx)(y.Z,{sx:{fontSize:"16px"},children:"A Code has Been Sent To Your ".concat("email"==n.values.type?"Email":"Mobile")})]}),(0,i.jsx)(I.t,{formik:eS,showOTP:K}),(0,i.jsx)(h.Z,{children:(0,i.jsxs)(y.Z,{sx:{fontSize:"16px"},children:["Didn't receive OTP?"," ",!eo&&(0,i.jsxs)(y.Z,{color:"primary",component:"span",fontWeight:500,sx:{cursor:"pointer",fontSize:"15px"},children:["Resend OTP in ",es," seconds"]}),eo&&(0,i.jsx)(y.Z,{color:"primary",component:"span",fontWeight:500,sx:{cursor:"pointer",fontSize:"15px"},onClick:()=>{},children:"Resend OTP"})]})})]}),(0,i.jsx)(T.Z,{}),(0,i.jsx)(F.Z,{children:(0,i.jsx)(g.Z,{onClick:()=>ez(),variant:"contained",color:"primary",children:"Verify"})})]})]})};let L=()=>{let e=(0,O.useRouter)(),{register:t}=(0,a.E)(),{enqueueSnackbar:r}=(0,N.Ds)(),[o,s]=l.useState(!1),d=(0,c.TA)({initialValues:{user_name:"",user_type:"customer",email:"",mobile:"",term:"no",password:"",password_confirmation:"",company_certificate:"",company_certificate_url:"",company_vat:"",company_vat_url:""},validate:e=>{let t={},r=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;return e.user_name||(t.user_name="User name is required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.mobile?/^\d{10,11}$/.test(e.mobile)||(t.mobile="Please enter a valid 10 or 11-digit number"):t.mobile="Phone is required",e.password?r.test(e.password)||(t.password="Min 8 letter password, with at least a symbol, upper and lower case letters and a number"):t.password="Password is required",e.password_confirmation?r.test(e.password_confirmation)?e.password&&e.password_confirmation&&e.password!=e.password_confirmation&&(t.password_confirmation="Password didn't match."):t.password_confirmation="Min 8 letter password, with at least a symbol, upper and lower case letters and a number":t.password_confirmation="Confirm password is required","company"!==e.user_type||e.company_certificate||(t.company_certificate="Company Certificate is required"),"company"!==e.user_type||e.company_vat||(t.company_vat="Company Vat is required"),"no"==e.term&&(t.term="T&C is required"),t},onSubmit:async(t,n)=>{let a,o,{setErrors:l}=n;if("customer"===t.user_type){a="/api/user/cust-register";let e=new FormData;e.append("user_name",null==t?void 0:t.user_name),e.append("user_type",null==t?void 0:t.user_type),e.append("email",null==t?void 0:t.email),e.append("mobile",null==t?void 0:t.mobile),e.append("term",null==t?void 0:t.term),e.append("password",null==t?void 0:t.password),e.append("company_type","customer"),e.append("password_confirmation",null==t?void 0:t.password_confirmation),o=e}else{a="/api/user/company-register";let e=new FormData;e.append("user_name",null==t?void 0:t.user_name),e.append("user_type",null==t?void 0:t.user_type),e.append("email",null==t?void 0:t.email),e.append("company_type","customer"),e.append("mobile",null==t?void 0:t.mobile),e.append("term",null==t?void 0:t.term),e.append("password",null==t?void 0:t.password),e.append("password_confirmation",null==t?void 0:t.password_confirmation),e.append("company_certificate",null==t?void 0:t.company_certificate),e.append("company_vat",null==t?void 0:t.company_vat),o=e}await E.Z.post(a,o).then(t=>{var n,a;(null==t?void 0:t.status)===200?(d.resetForm(),e.push("/auth/login"),r((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})):r((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==t?void 0:null===(a=t.data)||void 0===a?void 0:a.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})}).catch(e=>{var n,a;let{response:o}=e;if(422===o.status)for(let[e,r]of Object.entries(t))o.data.error[e]&&l({[e]:o.data.error[e][0]});(null==o?void 0:null===(n=o.data)||void 0===n?void 0:n.status)===406&&r((0,i.jsx)(R.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==o?void 0:null===(a=o.data)||void 0===a?void 0:a.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})})}});return(0,i.jsx)(n.Z,{children:(0,i.jsx)(U,{open:o,handleOpenClose:()=>{s(!o)},formik:d})})};L.getLayout=function(e){return(0,i.jsx)(o.l,{children:e})};var H=L}},function(e){e.O(0,[4885,1810,678,3827,1994,6034,4815,8251,5981,6107,330,9774,2888,179],function(){return e(e.s=53829)}),_N_E=e.O()}]);