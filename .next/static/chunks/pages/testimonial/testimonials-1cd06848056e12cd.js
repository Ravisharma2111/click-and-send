(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7239],{26046:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testimonial/testimonials",function(){return n(92839)}])},54762:function(e,t,n){"use strict";n.d(t,{J:function(){return c}});var i=n(85893),s=n(87357),r=n(51233),a=n(15861);n(67294);var c=e=>{let{title:t}=e;return(0,i.jsx)(s.Z,{sx:{width:"100%",textAlign:"center",my:4},children:(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.Z,{variant:"h5",children:t})}),(0,i.jsx)(s.Z,{component:"img",sx:{width:"400px"},src:"/assets/images/home/new/banner-image.jpg",alt:"truck"})]})})}},50261:function(e,t,n){"use strict";var i=n(85893),s=n(66242),r=n(78445),a=n(88078),c=n(44267),l=n(67294);t.Z=()=>(0,i.jsxs)(s.Z,{sx:{maxWidth:"100%",my:4},children:[(0,i.jsx)(r.Z,{avatar:(0,i.jsx)(a.Z,{animation:"wave",variant:"circular",width:40,height:40}),title:(0,i.jsx)(a.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:(0,i.jsx)(a.Z,{animation:"wave",height:10,width:"40%"})}),(0,i.jsx)(a.Z,{sx:{height:190},animation:"wave",variant:"rectangular"}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(a.Z,{animation:"wave",height:10,style:{marginBottom:6}}),(0,i.jsx)(a.Z,{animation:"wave",height:10,width:"80%"})]})})]})},92839:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(85893),s=n(26107),r=n(46574),a=n(87357),c=n(51233),l=n(15861),o=n(86886),h=n(66242),d=n(44267),x=n(67720),m=n(91440),g=n(69661),j=n(67294),u=n(90948);let Z=(0,u.ZP)("div")(e=>{let{theme:t}=e;return{marginTop:"4em",width:"100%",padding:"1em 0 2em 0",background:"rgb(255,117,51)",background:"radial-gradient(circle, rgba(255,117,51,1) 0%, rgba(0,0,0,1) 100%)"}});(0,u.ZP)("div")(e=>{let{theme:t}=e;return{borderTop:"0.1px solid lightgrey",bottom:"9em",position:"absolute",width:"100%"}});var w=n(63763),p=n(50261),f=n(54762),v=()=>{let[e,t]=(0,j.useState)([]),[n,s]=(0,j.useState)(!1),u=async()=>{s(!0),await w.Z.get("api/front/testimonials").then(e=>{(null==e?void 0:e.status)===200?(s(!1),t(null==e?void 0:e.data.view_data)):(s(!1),console.log(error))}).catch(e=>{console.log(e,"Testimonial Page")})};return(0,j.useEffect)(()=>{u()},[]),console.log("datadatadata",e),(0,i.jsx)(j.Fragment,{children:(0,i.jsx)(Z,{children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)(a.Z,{py:6,children:[(0,i.jsxs)(c.Z,{spacing:1,alignItems:"center",color:"#fff",children:[(0,i.jsx)(l.Z,{variant:"h3",children:"Actual Customer Reviews"}),(0,i.jsxs)(l.Z,{fontWeight:600,children:["And that","'","s just a few"]})]}),(0,i.jsx)(a.Z,{py:6,children:n?(0,i.jsx)(p.Z,{}):(0,i.jsx)(o.ZP,{container:!0,spacing:6,justifyContent:n?"center":"left",children:(0,i.jsx)(i.Fragment,{children:e&&e.length>0?e.map((e,t)=>(0,i.jsx)(o.ZP,{item:!0,sm:12,md:4,children:(0,i.jsx)(h.Z,{sx:{borderRadius:"0px",position:"relative"},children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(c.Z,{direction:"row",spacing:2,sx:{mb:2},children:[(0,i.jsx)(a.Z,{component:"img",src:"/r1.png",width:"30px",height:"22px",alt:"testimonial icon"}),(0,i.jsx)(a.Z,{sx:{minHeight:"11em"},children:(0,i.jsx)(l.Z,{children:e.text})})]}),(0,i.jsx)(x.Z,{sx:{mb:2}}),(0,i.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)(l.Z,{color:"primary",fontWeight:600,children:e.name})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)(m.Z,{value:e.rating,readOnly:!0})})]}),(0,i.jsx)(a.Z,{sx:{position:"relative"},children:(0,i.jsx)(g.Z,{alt:"".concat(e.name),src:"".concat(e.base_url).concat(e.image),sx:{width:60,height:60}})})]})]})})},t)):(0,i.jsx)(i.Fragment,{children:!n&&e.length<=0&&(0,i.jsx)(f.J,{title:"No Testimonials"})})})})})]})})})})},b=n(28482);let _=()=>{let e=(0,b.TA)({});return(0,i.jsx)(v,{formik:e})};_.getLayout=function(e){return(0,i.jsx)(s.l,{children:e})};var y=_}},function(e){e.O(0,[4885,678,3827,1994,6034,4815,1440,3171,5981,6107,9774,2888,179],function(){return e(e.s=26046)}),_N_E=e.O()}]);