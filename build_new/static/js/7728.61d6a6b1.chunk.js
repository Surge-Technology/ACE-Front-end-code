"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7728],{10003:function(t,e,n){n.d(e,{Z:function(){return c}});var o=n(29439),i=n(72791),a=n(70697),r=(n(87092),n(66293)),s=n(80184);function c(t){var e=(0,i.useState)({totalDocs:t.totalPages,currentPage:t.currentPage}),n=(0,o.Z)(e,2),c=n[0];n[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{showTotal:function(t,e){return"".concat(e[0]," - ").concat(e[1]," of ").concat(t," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:t.defaultPageSize,defaultCurrent:c.currentPage,onShowSizeChange:function(t){console.log("onShowSizeChange",t)},onChange:function(e){t.callbackfunc(e)},total:c.totalDocs,locale:r.Z})})}},57728:function(t,e,n){n.r(e);var o=n(1413),i=n(29439),a=n(72791),r=n(57689),s=n(11087),c=n(84951),l=n(30212),h=(n(48197),n(77710)),d=n(10003),u=n(21830),f=n.n(u),p=n(72426),g=n.n(p),m=n(67842),b=n(9085),v=(n(5462),n(63263)),y=n(80184);e.default=function(){var t=(0,a.useState)({allContracts:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}}),e=(0,i.Z)(t,2),n=e[0],u=e[1],p=(0,a.useState)(""),w=(0,i.Z)(p,2),k=w[0],x=w[1],C=n.allContracts,S=n.totalPages,j=n.currentPage,D=n.loader,M=n.permissions,T=(0,r.s0)(),E=function(t){u((function(t){return(0,o.Z)((0,o.Z)({},t),{},{loader:!0})})),h.Z.get("contract-promotion?page=".concat(t-1,"&size=10&sort=id,desc")).then((function(t){if(u((function(e){return(0,o.Z)((0,o.Z)({},e),{},{allContracts:t.data.content,totalPages:t.data.totalElements,currentPage:t.data.pageNumber+1,loader:!1})})),t.data.content.map((function(t,e){x(t.tenure.id)})),401==t.status){f().fire({title:"error",icon:"error",text:"Session Expired"});var e=localStorage.getItem("accode"),n=e?"/login/".concat(e):"/login";navigate(n)}})).catch((function(t){f().fire(t.response.data.message,"Please try again "),u((function(t){return(0,o.Z)((0,o.Z)({},t),{},{loader:!1,allContracts:[]})}))}))};(0,a.useEffect)((function(){document.getElementsByTagName("thead")[0].style.backgroundColor=localStorage.getItem("tableColor"),E("1");var t=localStorage.getItem("userid");v.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),v.Z.get("".concat("http://3.136.240.37:9090/api/v1/","auth/users/").concat(t)).then((function(t){var e=t.data.roles?t.data.roles[0].contracts:null;u((function(t){return(0,o.Z)((0,o.Z)({},t),{},{permissions:e})}))})).catch((function(t){}))}),[]);var I=function(t){return(0,y.jsxs)("span",{children:[M.canUpdate?(0,y.jsx)(s.rU,{id:t,to:"/settings/createcontract/".concat(t),children:(0,y.jsx)("i",{className:"fa fa-pencil",id:"pencilspace","aria-hidden":"true"})}):null,M.canDelete?(0,y.jsx)("i",{className:"fa fa-trash-o","aria-hidden":"true",id:"trashspace",onClick:function(){!function(t){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed?h.Z.delete("contract-promotion/".concat(t)).then((function(t){E("1"),200==t.status&&f().fire("Record Deleted!","","success")})).catch((function(t){f().fire("Please try again ")})):f().fire("Your Data safe","")}))}(t)}}):null]})},Z=function(t,e){e.activeInactive=1==t?"false":"true",h.Z.put("contract-tenure/".concat(k,"/contract-promotion/").concat(e.id),e).then((function(t){200===t.status&&(E(),b.Am.info("Contract updated successfully",{theme:"colored"}))})).catch((function(t){f().fire("Please try again ")}))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b.Ix,{}),D?(0,y.jsx)(c.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,y.jsx)(c.Zb,{children:(0,y.jsxs)(c.eW,{className:"cardbg",style:{backgroundColor:localStorage.getItem("cardColor")},children:[(0,y.jsxs)(c.X2,{children:[(0,y.jsx)(c.JX,{children:(0,y.jsx)("h4",{children:(0,y.jsx)("strong",{children:"Contracts "})})}),(0,y.jsx)(c.JX,{children:M.canCreate?(0,y.jsx)(c.zx,{color:"info",size:"sm",className:"buttonfloat",style:{float:"right",backgroundColor:localStorage.getItem("btColor")},onClick:function(){return T("/settings/createcontract/new")},children:"Add Contract"}):null})]}),(0,y.jsx)(c.X2,{children:(0,y.jsx)(c.JX,{children:(0,y.jsxs)(c.Zb,{children:[(0,y.jsxs)(l.c8,{data:C,headerStyle:{background:"red"},keyField:"name",search:!0,striped:!0,hover:!0,multiColumnSearch:!0,version:"4",children:[(0,y.jsx)(l.bY,{width:"120",dataAlign:"left",dataField:"sno",dataFormat:function(t,e,n,o){return(0,y.jsx)(y.Fragment,{children:o+1})},dataSort:!0,children:"S No"}),(0,y.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"name",dataSort:!0,children:"Name"}),(0,y.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"tenure",dataFormat:function(t,e){return(0,y.jsx)(y.Fragment,{children:t.name})},dataSort:!0,children:"Duration"}),(0,y.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"basePrice",dataSort:!0,children:"Base Price $"}),(0,y.jsx)(l.bY,{width:"140",dataAlign:"left",dataField:"creationDate",dataFormat:function(t,e){return null!==t&&void 0!==t?g()(t).format("MM/DD/YYYY"):""},dataSort:!0,children:"Created Date"}),(0,y.jsx)(l.bY,{width:"120",dataField:"activeInactive",dataFormat:function(t,e){return(0,y.jsx)(m.Z,{onChange:function(){Z(t,e)},checked:e.activeInactive,onHandleColor:"#fff",offHandleColor:"#fff",onColor:"#65bdf7",offColor:"#dc3545"})},children:"Status"}),(0,y.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"id",dataFormat:function(t){return I(t)},children:"Action"})]}),(0,y.jsx)(c.iR,{children:C.length>=1?(0,y.jsx)(d.Z,{totalPages:S,currentPage:j,callbackfunc:function(t){E(t)},defaultPageSize:"10"}):null})]})})})]})})]})}},48197:function(){},67842:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(72791);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i.apply(this,arguments)}var a=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),r=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,o,i){return function(t,e,n,o,i){var a=(t-n)/(e-n);if(0===a)return o;if(1===a)return i;for(var r="#",s=1;s<6;s+=2){var c=parseInt(o.substr(s,2),16),l=parseInt(i.substr(s,2),16),h=Math.round((1-a)*c+a*l).toString(16);1===h.length&&(h="0"+h),r+=h}return r}(t,e,n,s(o),s(i))}var l=function(t){function e(e){t.call(this,e);var n=e.height,o=e.width,i=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,o=e.h,i=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var a=Math.min(this.i,Math.max(this.o,i));a!==o&&this.setState({h:a})},e.prototype.U=function(t){var e=this.state,n=e.h,o=e.N,i=e.B,a=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-i;(!o||s<250||a&&n<=r||!a&&n>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.m=function(t){this.L(t.touches[0].clientX)},e.prototype.M=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,a=t.className,r=t.offColor,s=t.onColor,l=t.offHandleColor,h=t.onHandleColor,d=t.checkedIcon,u=t.uncheckedIcon,f=t.checkedHandleIcon,p=t.uncheckedHandleIcon,g=t.boxShadow,m=t.activeBoxShadow,b=t.height,v=t.width,y=t.borderRadius,w=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),k=this.state,x=k.h,C=k.N,S=k.j,j={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},D={height:b,width:v,margin:Math.max(0,(this.t-b)/2),position:"relative",background:c(x,this.i,this.o,r,s),borderRadius:"number"==typeof y?y:b/2,cursor:n?"default":"pointer",WebkitTransition:C?null:"background 0.25s",MozTransition:C?null:"background 0.25s",transition:C?null:"background 0.25s"},M={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"relative",opacity:(x-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},T={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"absolute",opacity:1-(x-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},E={height:this.t,width:this.t,background:c(x,this.i,this.o,l,h),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof y?y-1:"50%",position:"absolute",transform:"translateX("+x+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:S?m:g,border:0,WebkitTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},I={height:this.t,width:this.t,opacity:Math.max(2*(1-(x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},Z={height:this.t,width:this.t,opacity:Math.max(2*((x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"};return o.createElement("div",{className:a,style:j},o.createElement("div",{className:"react-switch-bg",style:D,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&o.createElement("div",{style:M},d),u&&o.createElement("div",{style:T},u)),o.createElement("div",{className:"react-switch-handle",style:E,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.m,onTouchEnd:n?null:this.M,onTouchCancel:n?null:this.O},p&&o.createElement("div",{style:I},p),f&&o.createElement("div",{style:Z},f)),o.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},w,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:a,checkedIcon:r,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56}}}]);
//# sourceMappingURL=7728.61d6a6b1.chunk.js.map