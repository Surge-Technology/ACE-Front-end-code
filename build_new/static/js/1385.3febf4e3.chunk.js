"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1385],{81385:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(1413),r=n(29439),d=n(72791),i=n(84951),c=n(30212),s=n(77710),o=n(21830),l=n.n(o),u=n(59513),h=n.n(u),m=n(72426),f=n.n(m),x=n(57689),D=n(80184),j={StudentAttandList:[],totalPages:"",currentPage:"",loader:!1,startDate:"",endDate:""};function g(){var t=(0,d.useState)(j),e=(0,r.Z)(t,2),n=e[0],o=e[1],u=n.StudentAttandList,m=(n.totalPages,n.currentPage,n.loader),g=n.startDate,Y=n.endDate,p=(0,x.s0)();(0,d.useEffect)((function(){var t=new Date,e=f()(t).startOf("month"),n=f()(t).endOf("month");s.Z.get("/student-attendance/".concat(e.format("YYYY-MM-DD"),"/").concat(n.format("YYYY-MM-DD"))).then((function(t){o((function(r){return(0,a.Z)((0,a.Z)({},r),{},{startDate:e.toDate(),endDate:n.toDate(),StudentAttandList:t.data,loader:!1})}))})).catch((function(t){l().fire(t.response.data.message,"Please try again "),o((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!1})}))}))}),[]);var y=function(t,e){"startDate"===t&&o((function(t){return(0,a.Z)((0,a.Z)({},t),{},{startDate:e})})),"endDate"===t&&o((function(t){return(0,a.Z)((0,a.Z)({},t),{},{endDate:e})}))};return(0,D.jsxs)(D.Fragment,{children:[m?(0,D.jsx)(i.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,D.jsxs)(i.eW,{className:"cardbg",children:[(0,D.jsx)("h4",{children:(0,D.jsx)("b",{children:"Student Attendance List"})}),(0,D.jsx)("div",{className:"height15"}),(0,D.jsxs)(i.X2,{children:[(0,D.jsxs)(i.JX,{md:3,children:[(0,D.jsx)(i.__,{children:"Start Date"}),(0,D.jsx)(h(),{name:"startDate",selected:g?new Date(g):null,onChange:function(t){return y("startDate",t)},placeholderText:"mm/dd/yyyy"})]}),(0,D.jsxs)(i.JX,{md:3,children:[(0,D.jsx)(i.__,{children:"End Date"}),(0,D.jsx)(h(),{selected:Y,onChange:function(t){return y("endDate",t)},placeholderText:"mm/dd/yyyy",minDate:g})]}),(0,D.jsx)(i.JX,{md:2,style:{marginTop:"30px"},children:(0,D.jsx)(i.zx,{type:"button",onClick:function(){!function(){if(""!==g&&""!==Y){o((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!0})}));var t=f()(g).format("YYYY-MM-DD"),e=f()(Y).format("YYYY-MM-DD");s.Z.get("/student-attendance/".concat(t,"/").concat(e)).then((function(t){o((function(e){return(0,a.Z)((0,a.Z)({},e),{},{StudentAttandList:t.data,loader:!1})}))})).catch((function(t){l().fire(t.response.data.message,"Please try again "),o((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!1})}))}))}else l().fire({position:"center",icon:"warning",title:"Please Enter Some Date",showConfirmButton:!1,timer:1500})}()},children:"Search"})}),(0,D.jsx)(i.JX,{md:2,style:{marginTop:"30px"},children:(0,D.jsx)(i.zx,{type:"button",onClick:function(){return p("/dashboard")},children:"Back"})})]}),(0,D.jsx)("hr",{}),(0,D.jsx)(i.X2,{children:(0,D.jsx)(i.JX,{children:(0,D.jsxs)(c.c8,{data:u,hover:!0,multiColumnSearch:!0,version:"4",search:!0,children:[(0,D.jsx)(c.bY,{width:"140",dataField:"name",dataSort:!0,isKey:!0,children:"Name"}),(0,D.jsx)(c.bY,{width:"180",dataField:"masterName",dataSort:!0,children:"Master Name"}),(0,D.jsx)(c.bY,{width:"120",dataField:"program",dataSort:!0,children:"Style"}),(0,D.jsx)(c.bY,{width:"100",dataAlign:"center",dataField:"attendanceCount",dataSort:!0,children:"Attn.Count"}),(0,D.jsx)(c.bY,{width:"100",dataAlign:"center",dataField:"endTime",dataFormat:function(t,e){var n=new Date(g),a=((new Date(Y).getTime()-n.getTime())/864e5+1-e.attendanceCount).toFixed(0);return(0,D.jsx)(D.Fragment,{children:a||null})},dataSort:!0,children:"Absent Count"})]})})})]})]})}}}]);
//# sourceMappingURL=1385.3febf4e3.chunk.js.map