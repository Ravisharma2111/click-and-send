"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{50594:function(e,t,r){var n=r(64836);t.Z=void 0;var i=n(r(64938)),o=r(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=a},30465:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(63366),i=r(87462),o=r(67294),a=r(90512),s=r(58510),l=r(88111),d=r(21964),c=r(71657),u=r(82066),p=r(85893),h=(0,u.Z)((0,p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),x=(0,u.Z)((0,p.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),v=r(90948);let m=(0,v.ZP)("span")({position:"relative",display:"flex"}),f=(0,v.ZP)(h)({transform:"scale(1)"}),g=(0,v.ZP)(x)(({theme:e,ownerState:t})=>(0,i.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));var j=function(e){let{checked:t=!1,classes:r={},fontSize:n}=e,o=(0,i.Z)({},e,{checked:t});return(0,p.jsxs)(m,{className:r.root,ownerState:o,children:[(0,p.jsx)(f,{fontSize:n,className:r.background,ownerState:o}),(0,p.jsx)(g,{fontSize:n,className:r.dot,ownerState:o})]})},Z=r(98216),y=r(35893);let w=o.createContext(void 0);var b=r(1977),C=r(8027);function S(e){return(0,C.ZP)("MuiRadio",e)}let k=(0,b.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),z=["checked","checkedIcon","color","icon","name","onChange","size","className"],R=e=>{let{classes:t,color:r,size:n}=e,o={root:["root",`color${(0,Z.Z)(r)}`,"medium"!==n&&`size${(0,Z.Z)(n)}`]};return(0,i.Z)({},t,(0,s.Z)(o,S,t))},F=(0,v.ZP)(d.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"medium"!==r.size&&t[`size${(0,Z.Z)(r.size)}`],t[`color${(0,Z.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${k.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),P=(0,p.jsx)(j,{checked:!0}),O=(0,p.jsx)(j,{}),W=o.forwardRef(function(e,t){var r,s,l,d;let u=(0,c.Z)({props:e,name:"MuiRadio"}),{checked:h,checkedIcon:x=P,color:v="primary",icon:m=O,name:f,onChange:g,size:j="medium",className:Z}=u,b=(0,n.Z)(u,z),C=(0,i.Z)({},u,{color:v,size:j}),S=R(C),k=o.useContext(w),W=h,_=(0,y.Z)(g,k&&k.onChange),I=f;return k&&(void 0===W&&(l=k.value,W="object"==typeof(d=u.value)&&null!==d?l===d:String(l)===String(d)),void 0===I&&(I=k.name)),(0,p.jsx)(F,(0,i.Z)({type:"radio",icon:o.cloneElement(m,{fontSize:null!=(r=O.props.fontSize)?r:j}),checkedIcon:o.cloneElement(x,{fontSize:null!=(s=P.props.fontSize)?s:j}),ownerState:C,classes:S,name:I,checked:W,onChange:_,ref:t,className:(0,a.Z)(S.root,Z)},b))});var _=W},30633:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(85893),i=r(45697),o=r.n(i),a=r(67294),s=r(11163),l=r(90948);r(96922),(0,l.ZP)("div")(e=>{let{theme:t}=e;return{right:0,bottom:0,zIndex:9998,width:"100%",height:"100%",position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:t.palette.background.default}});var d=r(21425);r(26107);var c=r(87357),u=r(46574),p=r(50261);function h(e){let{children:t}=e,{push:r}=(0,s.useRouter)(),{isAuthenticated:i,isInitialized:o,user:l}=(0,d.E)();return((0,a.useEffect)(()=>{i&&l&&(null==l?void 0:l.user_type)&&((null==l?void 0:l.user_type)==="customer"?r("/dashboard/customer/job_posted"):"driver"===l.user_type?r("/dashboard/driver/active_jobs"):"company"===l.user_type&&r("/dashboard/company"))},[i]),o===i)?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{mt:10,children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(p.Z,{})})})}):(0,n.jsxs)(n.Fragment,{children:[" ",t," "]})}h.propTypes={children:o().node}},22065:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(85893),i=r(87357),o=r(51233),a=r(37645),s=r(67720);r(67294);let l=e=>{let{onClose:t,title:r,handleClose:l}=e;return(0,n.jsxs)(i.Z,{sx:{background:e=>e.palette.primary.main},children:[(0,n.jsx)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:(0,n.jsx)(a.Z,{color:"inherit",sx:{color:e=>e.palette.common.white,fontSize:"20px",fontWeight:500},children:r})}),(0,n.jsx)(s.Z,{})]})}},76487:function(e,t,r){r.d(t,{t:function(){return c}});var n=r(85893),i=r(38308);r(79582);var o=r(87357),a=r(94054),s=r(51233),l=r(67294),d=r(58386);let c=e=>{var t,r,c,u,p,h;let{formik:x,showOTP:v}=e;return console.log("aaaaaaaaaaa",x),(0,n.jsx)(l.Fragment,{children:v?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{sx:{mt:4}}),(0,n.jsx)(o.Z,{sx:{my:2},children:(0,n.jsx)(o.Z,{sx:{width:"100%",textAlign:"center"},children:(0,n.jsx)(a.Z,{error:null!=x&&null!==(p=x.errors)&&void 0!==p&&!!p.otp,children:(0,n.jsx)(d.Z,{name:"otp",containerStyle:{justifyContent:"center"},inputStyle:{width:"50px",height:"56px",borderRadius:"10px"},value:null==x?void 0:null===(h=x.values)||void 0===h?void 0:h.otp,onChange:e=>x.setFieldValue("otp",e),numInputs:4,renderSeparator:(0,n.jsx)("span",{style:{marginRight:"5px"}}),renderInput:e=>(0,n.jsx)("input",{...e})})})})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{sx:{mt:4}}),(0,n.jsx)(o.Z,{sx:{my:2},children:(0,n.jsxs)(o.Z,{sx:{width:"100%",textAlign:"center"},children:[(0,n.jsx)(a.Z,{error:null!=x&&null!==(t=x.errors)&&void 0!==t&&!!t.otp,children:(0,n.jsx)(d.Z,{name:"otp",containerStyle:{justifyContent:"center"},inputStyle:{width:"50px",height:"56px",borderRadius:"10px"},value:null==x?void 0:null===(r=x.values)||void 0===r?void 0:r.otp,onChange:e=>x.setFieldValue("otp",e),numInputs:4,renderSeparator:(0,n.jsx)("span",{style:{marginRight:"5px"}}),renderInput:e=>(0,n.jsx)("input",{...e})})}),(0,n.jsxs)(s.Z,{spacing:1,children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)(i.Jg,{fullWidth:!0,size:"small",name:"password",value:x.values.password,onChange:x.handleChange,placeholder:"Enter New Password",helperText:null==x?void 0:null===(c=x.errors)||void 0===c?void 0:c.password})}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(i.Jg,{fullWidth:!0,size:"small",name:"password_confirmation",value:x.values.password_confirmation,onChange:x.handleChange,placeholder:"Enter Confirm Password",helperText:null==x?void 0:null===(u=x.errors)||void 0===u?void 0:u.password_confirmation})})]})]})})]})})}},71953:function(e,t,r){r.d(t,{Z:function(){return z}});var n=r(85893),i=r(67294),o=r(54776),a=r(64666),s=r(6514),l=r(51233),d=r(15861),c=r(87357),u=r(67720),p=r(31425),h=r(69417),x=r(50594),v=r(37645),m=r(93946);let f=e=>{let{onClose:t,title:r}=e;return(0,n.jsxs)(c.Z,{sx:{background:e=>e.palette.primary.main},children:[(0,n.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(v.Z,{color:"inherit",sx:{color:e=>e.palette.common.white,fontSize:"20px",fontWeight:500},children:r}),(0,n.jsx)(c.Z,{mr:1,children:(0,n.jsx)(m.Z,{onClick:t,children:(0,n.jsx)(x.Z,{})})})]}),(0,n.jsx)(u.Z,{})]})};r(38308),r(79582);var g=r(94054),j=r(56815),Z=r(58386);let y=e=>{var t;let{formik:r}=e;return(0,n.jsx)(i.Fragment,{children:(0,n.jsx)(c.Z,{sx:{my:2},children:(0,n.jsx)(c.Z,{sx:{width:"100%",textAlign:"center"},children:(0,n.jsxs)(g.Z,{error:!!r.errors.otp,children:[(0,n.jsx)(Z.Z,{name:"otp",containerStyle:{justifyContent:"center"},inputStyle:{width:"50px",height:"56px",borderRadius:"10px"},value:null==r?void 0:null===(t=r.values)||void 0===t?void 0:t.otp,onChange:e=>r.setFieldValue("otp",e),error:r.touched.otp&&r.errors.otp,helperText:r.touched.otp&&r.errors.otp,numInputs:4,renderSeparator:(0,n.jsx)("span",{style:{marginRight:"5px"}}),renderInput:e=>(0,n.jsx)("input",{...e})}),r.errors.otp&&(0,n.jsx)(j.Z,{children:r.errors.otp})]})})})})};var w=r(28482),b=r(63763),C=r(50841),S=r(46901);let k=i.forwardRef(function(e,t){return(0,n.jsx)(o.Z,{direction:"down",ref:t,...e})});var z=e=>{let{keepMounted:t,onClose:r,open:i,title:o,email:x,registerFormik:v}=e,{enqueueSnackbar:m}=(0,C.Ds)(),g=(0,w.TA)({initialValues:{email:"",otp:""},validate:e=>{let t={};return e.otp||(t.otp="OTP  is required"),t},onSubmit:async e=>{let t;t={email:x,otp:e.otp},await b.Z.post("api/user/validate-otp",t,{setErrors}).then(e=>{var t,i;(null==e?void 0:e.status)===200?(r(),g.resetForm(),v.resetForm(),m((0,n.jsx)(S.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})):m((0,n.jsx)(S.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})}).catch(t=>{var r;let{response:i}=t;if(422===i.status)for(let[t,r]of Object.entries(e))i.data.error[t]&&setErrors({[t]:i.data.error[t][0]});[406,404].includes(null==i?void 0:i.status)&&m((0,n.jsx)(S.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==i?void 0:null===(r=i.data)||void 0===r?void 0:r.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})})}}),j=async()=>{var e,t;let r;r={email:null==v?void 0:null===(e=v.values)||void 0===e?void 0:e.email,type:null==v?void 0:null===(t=v.values)||void 0===t?void 0:t.user_type},await b.Z.post("api/user/resend-otp",r).then(e=>{var t,r;(null==e?void 0:e.status)===200?m((0,n.jsx)(S.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}):m((0,n.jsx)(S.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})}).catch(e=>{var t;let{response:r}=e;[406,404].includes(null==r?void 0:r.status)&&m((0,n.jsx)(S.Z,{style:{width:"100%",padding:"30px",filter:blur("8px"),background:"#ffe9d5 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.error}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})})},Z=()=>{g.resetForm(),v.resetForm()};return(0,n.jsx)("div",{children:(0,n.jsxs)(a.Z,{open:i,TransitionComponent:k,keepMounted:t,components:"form",scroll:"paper",onClose:()=>{r(),Z()},"aria-describedby":"alert-dialog-slide-description",sx:{"& .MuiPaper-rounded":{borderRadius:"0px"}},maxWidth:"xs",children:[(0,n.jsx)(f,{onClose:()=>{r(),Z()},title:o}),(0,n.jsxs)(s.Z,{dividers:"paper",children:[(0,n.jsxs)(l.Z,{textAlign:"left",mb:2,mt:2,children:[(0,n.jsx)(d.Z,{variant:"h5",fontWeight:500,sx:{cursor:"pointer",fontSize:"16px",fontWeight:500},children:"Please Enter One Time Password to Verify your Account"}),(0,n.jsx)(d.Z,{sx:{fontSize:"16px"},children:"A Code has Been Sent To Your Email-id"})]}),(0,n.jsx)(y,{formik:g}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(d.Z,{sx:{fontSize:"16px"},children:["Didn","'","t receive OTP ?"," ",(0,n.jsx)(d.Z,{color:"primary",component:"span",fontWeight:500,sx:{cursor:"pointer",fontSize:"15px"},onClick:j,children:"Resend OTP"})]})})]}),(0,n.jsx)(u.Z,{}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(h.Z,{onClick:()=>g.handleSubmit(),variant:"contained",color:"primary",type:"submit",children:"Verify"}),(0,n.jsx)(h.Z,{variant:"contained",color:"dark",onClick:()=>{r(),Z()},children:"Close"})]})]})})}},50261:function(e,t,r){var n=r(85893),i=r(66242),o=r(78445),a=r(88078),s=r(44267),l=r(67294);t.Z=()=>(0,n.jsxs)(i.Z,{sx:{maxWidth:"100%",my:4},children:[(0,n.jsx)(o.Z,{avatar:(0,n.jsx)(a.Z,{animation:"wave",variant:"circular",width:40,height:40}),title:(0,n.jsx)(a.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:(0,n.jsx)(a.Z,{animation:"wave",height:10,width:"40%"})}),(0,n.jsx)(a.Z,{sx:{height:190},animation:"wave",variant:"rectangular"}),(0,n.jsx)(s.Z,{children:(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(a.Z,{animation:"wave",height:10,style:{marginBottom:6}}),(0,n.jsx)(a.Z,{animation:"wave",height:10,width:"80%"})]})})]})}}]);