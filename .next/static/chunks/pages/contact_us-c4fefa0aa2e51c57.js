(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1134],{40085:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact_us",function(){return t(3258)}])},50261:function(e,i,t){"use strict";var n=t(85893),s=t(66242),r=t(78445),a=t(88078),l=t(44267),o=t(67294);i.Z=()=>(0,n.jsxs)(s.Z,{sx:{maxWidth:"100%",my:4},children:[(0,n.jsx)(r.Z,{avatar:(0,n.jsx)(a.Z,{animation:"wave",variant:"circular",width:40,height:40}),title:(0,n.jsx)(a.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:(0,n.jsx)(a.Z,{animation:"wave",height:10,width:"40%"})}),(0,n.jsx)(a.Z,{sx:{height:190},animation:"wave",variant:"rectangular"}),(0,n.jsx)(l.Z,{children:(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(a.Z,{animation:"wave",height:10,style:{marginBottom:6}}),(0,n.jsx)(a.Z,{animation:"wave",height:10,width:"80%"})]})})]})},3258:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return S}});var n=t(85893),s=t(67294),r=t(26107),a=t(28482),l=t(50261),o=t(63763),c=t(87357),d=t(46574),h=t(86886),m=t(12963),u=t(15861),x=t(51233),g=t(41664),j=t.n(g),p=t(38308),Z=t(69417),f=e=>{var i,t,s,r;let{formik:a}=e;return(0,n.jsx)(c.Z,{component:"form",noValidate:!0,onSubmit:a.handleSubmit,children:(0,n.jsxs)(h.ZP,{container:!0,spacing:1,children:[(0,n.jsx)(h.ZP,{item:!0,md:12,children:(0,n.jsx)(p.zC,{size:"small",fullWidth:!0,start:!0,label:"Name",name:"name",placeholder:"Enter your Name",value:null==a?void 0:null===(i=a.values)||void 0===i?void 0:i.name,onChange:a.handleChange,error:a.touched.name&&a.errors.name,helperText:a.touched.name&&a.errors.name})}),(0,n.jsx)(h.ZP,{item:!0,md:12,children:(0,n.jsx)(p.zC,{size:"small",fullWidth:!0,start:!0,label:"Email",name:"email",placeholder:"Enter your Email",value:null==a?void 0:null===(t=a.values)||void 0===t?void 0:t.email,onChange:a.handleChange,error:a.touched.email&&a.errors.email,helperText:a.touched.email&&a.errors.email})}),(0,n.jsx)(h.ZP,{item:!0,md:12,children:(0,n.jsx)(p.zC,{size:"small",fullWidth:!0,start:!0,label:"Phone number",name:"subject",placeholder:"Enter phone number",value:null==a?void 0:null===(s=a.values)||void 0===s?void 0:s.subject,isMaxLenght:11,onChange:e=>{e&&a.setFieldValue("subject",e.target.value.replace(/\D/gm,""))},error:a.touched.subject&&a.errors.subject,helperText:a.touched.subject&&a.errors.subject})}),(0,n.jsx)(h.ZP,{item:!0,md:12,children:(0,n.jsx)(p.zC,{fullWidth:!0,label:"Your Message",placeholder:"Enter your message",name:"message",value:null==a?void 0:null===(r=a.values)||void 0===r?void 0:r.message,onChange:a.handleChange,error:a.touched.message&&a.errors.message,helperText:a.touched.message&&a.errors.message,size:"small",multiline:!0,rows:3})}),(0,n.jsx)(h.ZP,{item:!0,md:12,children:(0,n.jsx)(Z.Z,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",children:"Send"})})]})})},v=()=>(0,n.jsx)(c.Z,{children:(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29018.468085709213!2d73.70646755!3d24.6130496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692790761597!5m2!1sen!2sin",width:"100%",height:"550",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})}),b=e=>{let{formik:i}=e,[t,r]=s.useState(!1),[a,g]=(0,s.useState)(""),p=async()=>{r(!0),await o.Z.get("/api/front/contact-details").then(e=>{(null==e?void 0:e.status)===200?(r(!1),g(e.data.view_data)):(r(!1),console.log("error"))}).catch(e=>{r(!1),console.log(e,"About Us Page")})};return(0,s.useEffect)(()=>{p()},[]),(0,n.jsx)(s.Fragment,{children:(0,n.jsxs)(c.Z,{sx:{pt:13,position:"relative",pb:10},children:[(0,n.jsx)(c.Z,{sx:{position:"absolute",left:0,right:0,top:0,bottom:0,zIndex:-1,width:"100%",height:"100%"},children:(0,n.jsx)(d.Z,{sx:{width:"100%",height:"100%"},children:(0,n.jsxs)(h.ZP,{container:!0,sx:{width:"100%",height:"100%"},children:[(0,n.jsx)(h.ZP,{item:!0,md:8}),(0,n.jsx)(h.ZP,{item:!0,md:4,sx:{background:e=>e.palette.common.black}})]})})}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(c.Z,{sx:{mb:6},children:(0,n.jsxs)(m.Z,{"aria-label":"breadcrumb",children:[(0,n.jsx)(c.Z,{component:j(),sx:{textDecoration:"none",fontSize:"14px"},color:"inherit",href:"/",children:"Home"}),(0,n.jsx)(u.Z,{fontSize:14,color:"common.black",children:"Contact Us"})]})}),(0,n.jsxs)(h.ZP,{container:!0,spacing:10,pb:12,children:[(0,n.jsxs)(h.ZP,{item:!0,md:6,children:[(0,n.jsxs)(c.Z,{sx:{mb:4},children:[(0,n.jsxs)(u.Z,{component:"h4",sx:{fontSize:"34.24px"},fontWeight:700,children:["Get in"," ",(0,n.jsx)(u.Z,{component:"span",sx:{fontSize:"34.24px"},fontWeight:700,color:"primary",children:"Touch"})]}),(0,n.jsx)(u.Z,{component:"h4",sx:{fontSize:"12px",letterSpacing:"1px !important"},fontWeight:400,children:"Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus."})]}),(0,n.jsx)(f,{formik:i}),(0,n.jsx)(c.Z,{sx:{mt:4},children:t?(0,n.jsx)(l.Z,{}):(0,n.jsxs)(x.Z,{direction:"row",alignItems:"center",spacing:0,justifyContent:"space-between",className:"contact-session",children:[(0,n.jsxs)(x.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(c.Z,{children:(0,n.jsx)(c.Z,{component:"img",src:"/assets/icon/phone.png",width:"auto",height:"auto"})}),(0,n.jsxs)(x.Z,{spacing:.2,children:[(0,n.jsx)(u.Z,{fontWeight:500,sx:{fontSize:"14px"},children:"Call Us"}),(0,n.jsx)(u.Z,{fontWeight:500,sx:{fontSize:"14px"},color:"primary",children:a&&a.mobile||"N/A"})]})]}),(0,n.jsxs)(x.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(c.Z,{children:(0,n.jsx)(c.Z,{component:"img",src:"/assets/icon/email.png",width:"auto",height:"auto"})}),(0,n.jsxs)(x.Z,{spacing:.2,children:[(0,n.jsx)(u.Z,{fontWeight:500,sx:{fontSize:"14px"},children:"Email"}),(0,n.jsx)(u.Z,{fontWeight:500,sx:{fontSize:"14px"},color:"primary",children:a&&a.email||"N/A"})]})]}),(0,n.jsxs)(x.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(c.Z,{children:(0,n.jsx)(c.Z,{component:"img",src:"/assets/icon/fax.png",width:"auto",height:"auto"})}),(0,n.jsxs)(x.Z,{spacing:.2,children:[(0,n.jsx)(u.Z,{fontWeight:500,sx:{fontSize:"14px"},children:"Address"}),(0,n.jsx)(u.Z,{fontWeight:500,sx:{fontSize:"14px"},color:"primary",children:a&&a.address||"N/A"})]})]})]})})]}),(0,n.jsx)(h.ZP,{item:!0,md:6,children:(0,n.jsx)(v,{})})]})]})]})})},w=t(50841),z=t(46901);let y=()=>{let{enqueueSnackbar:e}=(0,w.Ds)(),i=(0,a.TA)({initialValues:{name:"",email:"",subject:"",message:""},validate:e=>{let i={};return e.name||(i.name="Name is Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(i.email="Invalid email address"):i.email="Email is required",e.subject?e.subject.length>=11&&(i.subject="Enter valid number (Max 11 Digit)"):i.subject="Number is required",e.message||(i.message="Name is Required"),i},onSubmit:async(t,s)=>{let{setFieldError:r}=s;await o.Z.post("/api/front/contact-enquiry",t).then(t=>{var s;(null==t?void 0:t.status)===200&&e((0,n.jsx)(z.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533 ",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.message}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}),i.resetForm()}).catch(e=>{var i;let{response:n}=e;if(422===n.status)for(let[e,i]of(console.log("response",n.data.error),Object.entries(t)))n.data.error[e]&&r(e,n.data.error[e][0]);null==n||null===(i=n.data)||void 0===i||i.status})}});return(0,n.jsx)(b,{formik:i})};y.getLayout=function(e){return(0,n.jsx)(r.l,{children:e})};var S=y}},function(e){e.O(0,[4885,678,3827,1994,6034,4815,8784,5981,6107,9774,2888,179],function(){return e(e.s=40085)}),_N_E=e.O()}]);