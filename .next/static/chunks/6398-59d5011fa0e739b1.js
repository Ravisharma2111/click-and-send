"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6398],{86398:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(85893),i=n(67294),a=n(66242),l=n(77651),s=n(87357),o=n(44267),d=n(51233),c=n(15861),u=n(46574),m=n(86886),p=n(50135),x=n(69417),h=n(46901),v=n(54927),g=n(11163),b=n(63763),y=n(21425),f=n(6154),j=e=>{let{setSuccess:t}=e;return(0,r.jsxs)(s.Z,{sx:{textAlign:"center",padding:"100px 0"},children:[(0,r.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:"Success!"}),(0,r.jsx)(c.Z,{variant:"subtitle1",children:"Your OTP has been verified successfully."}),(0,r.jsx)(x.Z,{variant:"contained",sx:{marginTop:"20px"},onClick:()=>t(!1),children:"Go Back"})]})},Z=e=>{let{setShowOTPVerification:t}=e,[n,a]=(0,i.useState)(""),[l,u]=(0,i.useState)(""),[h,v]=(0,i.useState)(!1),[g,b]=(0,i.useState)(!1),y=async()=>{if(6!==n.length){u("OTP must be 6 digits.");return}v(!0);try{let e=await f.Z.post("/api/verify-otp",{otp:n});200===e.status?(alert("OTP Verified Successfully!"),b(!0)):u("Verification failed. Please try again.")}catch(e){u("An error occurred. Please try again.")}finally{v(!1)}t(!1)},Z=async()=>{v(!0);try{let e=await f.Z.post("/api/resend-otp");200===e.status?alert("OTP Resent Successfully!"):u("Failed to resend OTP. Please try again.")}catch(e){u("An error occurred while resending OTP. Please try again.")}finally{v(!1)}};return g?(0,r.jsx)(j,{setSuccess:b}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"350px",md:"350px",sm:"100%",xs:"100%"},backgroundImage:'url("/banner/banner.png")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[(0,r.jsx)(d.Z,{className:"Subscritption_box_stack_responsive",sx:{zIndex:8,position:"absolute",left:"8em",top:"7em"}}),(0,r.jsx)(o.Z,{className:"dashboard_subscription_box_stack_responsive",sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9}})]}),(0,r.jsxs)(m.ZP,{sx:{alignItems:"center",padding:"100px 0px"},container:!0,direction:"column",spacing:2,children:[(0,r.jsx)(m.ZP,{item:!0,children:(0,r.jsx)(c.Z,{variant:"h5",children:"Verify OTP"})}),(0,r.jsx)(m.ZP,{item:!0,children:(0,r.jsx)(p.Z,{label:"Enter OTP",variant:"outlined",fullWidth:!0,value:n,onChange:e=>{let t=e.target.value;(t=t.replace(/\D/g,"")).length>6&&(t=t.slice(0,6)),a(t),u("")},error:!!l,helperText:l,disabled:h})}),(0,r.jsx)(m.ZP,{item:!0,children:(0,r.jsx)(x.Z,{variant:"contained",color:"primary",onClick:y,disabled:h,children:"Verify OTP"})}),(0,r.jsx)(m.ZP,{item:!0,children:(0,r.jsx)(x.Z,{variant:"text",onClick:Z,disabled:h,children:"Resend OTP"})})]})]})},C=e=>{let{customerInvoiceAndSubscription:t,paymentDetails:n,setShowPayment:f}=e;console.log("customerInvoiceAndSubscription customerInvoiceAndSubscription",t,n);let{user:j}=(0,y.E)();(0,g.useRouter)();let[C,P]=(0,i.useState)(!1),[N,k]=(0,i.useState)({cardNumber:"",expiryDate:"",cvv:"",nameOnCard:"",email:"company@mailinator.com",expMonth:"",expYear:""}),[_,O]=(0,i.useState)({}),[S,T]=(0,i.useState)(!1),D=e=>{O({});let{name:t,value:n}=e.target;if("expiryDate"===t){2===(n=n.replace(/[^0-9/]/g,"")).length&&-1===n.indexOf("/")?n+="/":n.length>2&&(n=n.substring(0,2)+"/"+n.substring(2).replace(/[^\d]/g,"")),3===n.length&&"deleteContentBackward"===e.nativeEvent.inputType&&(n=n.slice(0,-1));let[r,i]=n.split("/");k({...N,[t]:n,expMonth:r,expYear:i||""})}else if("cvv"===t)n=n.replace(/\D/g,"").slice(0,3),k({...N,[t]:n});else if("cardNumber"===t){var r;n=(null===(r=n.replace(/\D/g,"").match(/.{1,4}/g))||void 0===r?void 0:r.join(" "))||"",k({...N,[t]:n.slice(0,19)})}else k({...N,[t]:n})},w=e=>{let t={},n=new Date().getFullYear()%100,r=new Date().getMonth()+1,i=e.cardNumber.replace(/\s/g,"");if(e.cardNumber?16!==i.length&&(t.cardNumber="Card number must be 16 digits!"):t.cardNumber="Card number is required!",e.expiryDate){let[i,a]=e.expiryDate.split("/").map(e=>parseInt(e,10));isNaN(i)||isNaN(a)||i<1||i>12?t.expiryDate="Invalid month!":(a<n||a===n&&i<r)&&(t.expiryDate="Card has expired!")}else t.expiryDate="Expiry date is required!";return e.cvv?3!==e.cvv.length&&(t.cvv="CVV must be 3 digits!"):t.cvv="CVV is required!",e.nameOnCard||(t.nameOnCard="Name on card is required!"),t},I=async e=>{e.preventDefault();let r=w(N);if(O(r),0===Object.keys(r).length){var i,a;let[e,r]=N.expiryDate.split("/"),l={user_id:null==n?void 0:null===(i=n.job)||void 0===i?void 0:i.user_id,invoice_id:null==n?void 0:n.id,email:null==j?void 0:j.email,number:null==N?void 0:N.cardNumber,exp_month:Number(e),exp_year:Number(r),cvc:Number(null==N?void 0:N.cvv),name:null==N?void 0:N.nameOnCard},s={user_id:null==j?void 0:j.id,plan_id:null==n?void 0:n.id,email:null==j?void 0:j.email,number:null==N?void 0:N.cardNumber,exp_month:Number(e),exp_year:Number(r),cvc:Number(null==N?void 0:N.cvv),name:null==N?void 0:N.nameOnCard};try{let e;"companySubscriptionPlan"===t?e=await b.Z.post("api/auth/payment/purchase-plan/".concat(null==j?void 0:j.id),s):"companyInvoicePayment"===t&&(e=await b.Z.post("api/auth/payment/company-invoice-payment",l)),(null===(a=e)||void 0===a?void 0:a.status)===200&&(P(!0),setTimeout(()=>{f(!1)},1500))}catch(e){if(e.response){let{data:t}=e.response;O(t.errors)}else console.error("An error occurred:",e.message)}}};return S?(0,r.jsx)(Z,{setShowOTPVerification:T}):(0,r.jsxs)(a.Z,{sx:{paddingBottom:"120px"},children:[(0,r.jsx)(l.Z,{open:C,autoHideDuration:6e3,onClose:()=>P(!1),anchorOrigin:{vertical:"top",horizontal:"center"},style:{top:"100px"},children:(0,r.jsx)(h.Z,{elevation:6,variant:"filled",onClose:()=>P(!1),severity:"success",children:"Purchase plan successful!!"})}),(0,r.jsx)(s.Z,{sx:{position:"relative",overflow:"hidden",width:"100%",height:{lg:"350px",md:"350px",sm:"100%",xs:"100%"},backgroundImage:'url("/banner/banner.png")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right center",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:(0,r.jsx)(o.Z,{className:"dashboard_subscription_box_stack_responsive",sx:{paddingTop:{lg:"6rem!important",md:"6rem!important",sm:"6rem!important",xs:"3rem!important"},paddingBottom:{lg:"4rem!important",md:"4rem!important",sm:"2rem!important",xs:"2rem!important"},position:"relative",zIndex:9},children:(0,r.jsx)(d.Z,{spacing:4,children:(0,r.jsx)(c.Z,{gutterBottom:!0,fontSize:44,component:"h2",fontWeight:600,color:"white",variant:"h2",children:n.name})})})}),(0,r.jsxs)(u.Z,{maxWidth:"md",children:[(0,r.jsx)(c.Z,{variant:"h4",align:"center",gutterBottom:!0,style:{marginBottom:"2rem",color:"#333",paddingTop:"25px"},children:"Pay with card"}),(0,r.jsx)(a.Z,{variant:"outlined",style:{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"16px"},children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{display:"flex",justifyContent:"center",alignItems:"center",mb:2,children:(0,r.jsx)(v.Z,{fontSize:"large",style:{color:"#ff7533"}})}),(0,r.jsx)("form",{onSubmit:I,children:(0,r.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(m.ZP,{item:!0,xs:12,children:(0,r.jsx)(p.Z,{label:"Card Number",variant:"outlined",fullWidth:!0,name:"cardNumber",InputProps:{startAdornment:(0,r.jsx)(v.Z,{style:{marginRight:"10px"}}),inputMode:"numeric",pattern:"[0-9]*"},value:null==N?void 0:N.cardNumber,onChange:D,error:!!(null==_?void 0:_.cardNumber),helperText:null==_?void 0:_.cardNumber})}),(0,r.jsx)(m.ZP,{item:!0,xs:6,children:(0,r.jsx)(p.Z,{label:"Expiry Date (MM/YY)",variant:"outlined",fullWidth:!0,name:"expiryDate",value:null==N?void 0:N.expiryDate,onChange:D,error:!!(null==_?void 0:_.expiryDate),helperText:null==_?void 0:_.expiryDate})}),(0,r.jsx)(m.ZP,{item:!0,xs:6,children:(0,r.jsx)(p.Z,{label:"CVV",variant:"outlined",fullWidth:!0,name:"cvv",inputProps:{maxLength:3,inputMode:"numeric",pattern:"[0-9]*"},value:null==N?void 0:N.cvv,onChange:D,error:!!(null==_?void 0:_.cvv),helperText:null==_?void 0:_.cvv})}),(0,r.jsx)(m.ZP,{item:!0,xs:12,children:(0,r.jsx)(p.Z,{label:"Name on Card",variant:"outlined",fullWidth:!0,name:"nameOnCard",value:null==N?void 0:N.nameOnCard,onChange:D,error:!!(null==_?void 0:_.nameOnCard),helperText:(null==_?void 0:_.nameOnCard)||" "})}),(0,r.jsx)(m.ZP,{item:!0,xs:12,children:(0,r.jsx)(x.Z,{type:"submit",variant:"contained",style:{backgroundColor:"#ff7533",color:"white",borderRadius:"8px"},fullWidth:!0,children:"Complete payment"})}),(0,r.jsx)(x.Z,{fullWidth:!0,variant:"text",onClick:()=>f(!1),children:"Back to Plans"})]})})]})})]})]})}}}]);