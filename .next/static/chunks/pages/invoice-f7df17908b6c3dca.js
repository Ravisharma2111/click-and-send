(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9250],{66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(87462),l=n(63366),a=n(67294),o=n(90512),r=n(58510),s=n(90948),c=n(71657),d=n(90629),u=n(1977),h=n(8027);function p(e){return(0,h.ZP)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var v=n(85893);let m=["className","raised"],x=e=>{let{classes:t}=e;return(0,r.Z)({root:["root"]},p,t)},_=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=a.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCard"}),{className:a,raised:r=!1}=n,s=(0,l.Z)(n,m),d=(0,i.Z)({},n,{raised:r}),u=x(d);return(0,v.jsx)(_,(0,i.Z)({className:(0,o.Z)(u.root,a),elevation:r?8:void 0,ref:t,ownerState:d},s))});var j=Z},10027:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invoice",function(){return n(88021)}])},88021:function(e,t,n){"use strict";n.r(t);var i=n(85893),l=n(67294),a=n(25701),o=n(15861),r=n(86886),s=n(94054),c=n(33841),d=n(18360),u=n(18972),h=n(50135),p=n(72882),v=n(90629),m=n(7906),x=n(53184),_=n(53816),Z=n(53252),j=n(295),y=n(69417),g=n(87357),f=n(70872),b=n(63763),w=n(6973),S=n(84673),C=n(21425),I=n(50841),D=n(46901),k=n(86398);t.default=()=>{var e,t;let{user:n}=(0,C.E)(),{enqueueSnackbar:N}=(0,I.Ds)(),[P,T]=(0,l.useState)(""),[E,O]=(0,l.useState)(""),[L,F]=(0,l.useState)(10),[V,W]=(0,l.useState)(""),[M,z]=(0,l.useState)(1),[B,A]=(0,l.useState)([]),[R,H]=(0,l.useState)(null),[J,X]=(0,l.useState)(!1),[U,q]=(0,l.useState)(null),[G,K]=(0,l.useState)(null),[Q,Y]=(0,l.useState)(!1),$=()=>X(!0),ee={amount:"10000",base_url:null,billed_by:473,billed_by_user:{id:473,user_type:"driver",dial_code:"+91",email:"Dinesh5804200182@gmail.com",email_verified_at:null,mobile:"56756767681",social_type:null,status:1,strip_connect_id:null,strip_customer_id:null,term:"no",created_at:"2024-05-30T11:46:47.000000Z",updated_at:"2024-05-31T06:51:14.000000Z",app_token:null,web_token:null},billed_to:455,billed_to_user:null,comments:null,created_at:"2024-06-02T18:29:27.000000Z",id:37,invoice_number:"INVOICE0032",job:{id:475,user_id:455,created_by:"customer",name:"Long One Piece 123567890",budget:null,completed_on:null,created_at:"2024-06-02T07:19:54.000000Z",description:"1234678",is_deleted:0,is_paid:0,reason:null,send_invoice:null,started_on:null,status:2,updated_at:"2024-06-02T07:22:14.000000Z",vehical_type:"truck",vehicle:"Trailer"},budget:null,completed_on:null,created_by:"customer",description:"1234678",is_deleted:0,is_paid:0,job_id:475,send_invoice:null,sign_image:null,started_on:null,status:0,updated_at:"2024-06-02T12:57:00.000000Z"},et={...ee,amount:"12000",id:38,invoice_number:"INVOICE0033"},en={...ee,amount:"9000",id:39,invoice_number:"INVOICE0034"},ei={...ee,amount:"15000",id:40,invoice_number:"INVOICE0035"};console.log("dataArray",[et,en,ei]);let el=async()=>{try{var e;let t=(null==n?void 0:n.user_type)=="company"?null==n?void 0:null===(e=n.profile)||void 0===e?void 0:e.company_type:null==n?void 0:n.user_type,i=null==n?void 0:n.id;console.log("userType",t);let l=await b.Z.get("/api/auth/invoice/list?user_id=".concat(i,"&user_type=").concat(t));200===l.status&&A(l.data.view_data.data)}catch(e){console.log("error",e)}};(0,l.useEffect)(()=>{el()},[n]),console.log("dataaaaa",B);let ea=async e=>{try{let t=await b.Z.get("/api/auth/invoice/view/".concat(e));200===t.status&&(q(t.data),$())}catch(e){console.log("Error fetching invoice",e)}},eo=async e=>{try{let t=await b.Z.get("/api/auth/invoice/send/".concat(e));200===t.status&&N((0,i.jsx)(D.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"success",children:"Invoice sent successfully"}),{variant:"success",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})}catch(e){N((0,i.jsx)(D.Z,{style:{width:"100%",padding:"30px",backdropFilter:"blur(8px)",background:"#ff7533",fontSize:"19px",fontWeight:800,lineHeight:"30px"},icon:!1,severity:"error",children:"Failed to send invoice"}),{variant:"error",iconVariant:!0,anchorOrigin:{vertical:"top",horizontal:"center"}})}},er=M*L,es=er-L,ec=B.filter(e=>Object.values(e).some(e=>e.toString().toLowerCase().includes(V.toLowerCase()))).slice(es,er),ed=e=>{let t=new Date(e);return t.setDate(t.getDate()+45),t.toLocaleDateString()},eu=e=>{Y(!0),K(e)};return console.log("User.....",n),(0,i.jsxs)("div",{style:{padding:"0 20px"},children:[(0,i.jsx)("div",{style:{marginBottom:"100px"},children:(0,i.jsx)(w.Z,{})}),Q?(0,i.jsx)(k.Z,{customerInvoiceAndSubscription:"companyInvoicePayment",paymentDetails:G,setShowPayment:Y}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"Invoices Page"}),(0,i.jsxs)(r.ZP,{container:!0,spacing:2,style:{marginBottom:"20px"},children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,sm:3,children:(0,i.jsxs)(s.Z,{fullWidth:!0,children:[(0,i.jsx)(c.Z,{id:"show-label",children:"Show"}),(0,i.jsxs)(d.Z,{labelId:"show-label",id:"entries-select",value:L,onChange:e=>{F(e.target.value)},children:[(0,i.jsx)(u.Z,{value:10,children:"10"}),(0,i.jsx)(u.Z,{value:20,children:"20"}),(0,i.jsx)(u.Z,{value:30,children:"30"})]})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,sm:3,children:(0,i.jsx)(h.Z,{id:"invoice-date",label:"Invoice Date",type:"date",fullWidth:!0,value:P,onChange:e=>{T(e.target.value)},InputLabelProps:{shrink:!0}})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,sm:3,children:(0,i.jsx)(h.Z,{id:"due-date",label:"Due Date",type:"date",fullWidth:!0,value:E,onChange:e=>{O(e.target.value)},InputLabelProps:{shrink:!0}})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,sm:3,children:(0,i.jsx)(h.Z,{label:"Search",variant:"outlined",fullWidth:!0,value:V,onChange:e=>{W(e.target.value)}})})]}),(0,i.jsx)(p.Z,{component:v.Z,style:{padding:"10px"},children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(x.Z,{children:(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(Z.Z,{children:"SN"}),(0,i.jsx)(Z.Z,{children:"Invoice No"}),(0,i.jsx)(Z.Z,{children:"Job ID"}),(0,i.jsx)(Z.Z,{children:"Job Title"}),(0,i.jsx)(Z.Z,{children:"Invoice Date"}),(null==n?void 0:n.user_type)==="company"&&(null==n?void 0:null===(e=n.profile)||void 0===e?void 0:e.company_type)==="customer"&&(0,i.jsx)(Z.Z,{children:"Due Date"}),(0,i.jsx)(Z.Z,{children:"Status"}),(0,i.jsx)(Z.Z,{children:"amount"}),(null==n?void 0:n.user_type)==="company"&&(null==n?void 0:null===(t=n.profile)||void 0===t?void 0:t.company_type)==="customer"&&(0,i.jsx)(Z.Z,{children:"late amount"}),(0,i.jsx)(Z.Z,{children:"Action "})]})}),(0,i.jsx)(j.Z,{children:ec.length>0?(0,i.jsxs)(i.Fragment,{children:[ec.map((e,t)=>{var l,a,o;return(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(Z.Z,{children:es+t+1}),(0,i.jsx)(Z.Z,{children:e.invoice_number}),(0,i.jsx)(Z.Z,{children:e.job_id}),(0,i.jsx)(Z.Z,{children:e.job.name}),(0,i.jsxs)(Z.Z,{children:["   ",(null==n?void 0:n.user_type)==="company"&&(null==n?void 0:null===(l=n.profile)||void 0===l?void 0:l.company_type)==="customer"?(0,i.jsxs)(y.Z,{variant:"contained",color:"primary",onClick:()=>eu(e),children:[new Date(e.created_at).toLocaleDateString()," Before"]}):(0,i.jsxs)(i.Fragment,{children:[" ",new Date(e.created_at).toLocaleDateString()," "]})," "]}),(null==n?void 0:n.user_type)==="company"&&(null==n?void 0:null===(a=n.profile)||void 0===a?void 0:a.company_type)==="customer"&&(0,i.jsxs)(Z.Z,{children:[" ",(0,i.jsxs)(y.Z,{variant:"contained",color:"primary",onClick:()=>eu(e),children:[ed(e.created_at)," After"]})," "]}),(0,i.jsx)(Z.Z,{children:e.job.status}),(0,i.jsx)(Z.Z,{children:e.amount}),(null==n?void 0:n.user_type)==="company"&&(null==n?void 0:null===(o=n.profile)||void 0===o?void 0:o.company_type)==="customer"&&(0,i.jsxs)(Z.Z,{children:[".",Number(e.amount)+60]}),(0,i.jsxs)(Z.Z,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(y.Z,{variant:"contained",color:"primary",onClick:()=>ea(e.id),children:"View Invoice"})," ",(0,i.jsx)(y.Z,{variant:"contained",color:"secondary",onClick:()=>eo(e.id),style:{marginLeft:8},children:"Send Invoice"}),"   "]})]},t)})," "]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"30px",fontWeight:"700",color:"#000",fontSize:"20px"},children:" No Data Found "})})})]})}),(0,i.jsxs)(o.Z,{variant:"body2",gutterBottom:!0,children:["Showing ",es+1,"-",Math.min(er,B.length)," of ",B.length," entries"]})]}),(0,i.jsx)("div",{style:{marginTop:"150px"},children:(0,i.jsx)(S.Z,{})}),U&&(0,i.jsx)(a.default,{isOpen:J,onClose:()=>X(!1),invoiceDetails:U}),(0,i.jsx)(g.Z,{display:"flex",justifyContent:"flex-start",mt:2,children:(0,i.jsx)(f.Z,{count:Math.ceil(B.length/L),page:M,onChange:(e,t)=>{z(t)},variant:"outlined",shape:"rounded"})})]})}}},function(e){e.O(0,[4885,678,3827,1994,6034,872,659,3879,7116,5981,6398,5701,9774,2888,179],function(){return e(e.s=10027)}),_N_E=e.O()}]);