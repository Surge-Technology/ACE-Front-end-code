"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8309],{10003:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(29439),r=a(72791),i=a(70697),c=(a(87092),a(66293)),o=a(80184);function s(e){var t=(0,r.useState)({totalDocs:e.totalPages,currentPage:e.currentPage}),a=(0,n.Z)(t,2),s=a[0];a[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{showTotal:function(e,t){return"".concat(t[0]," - ").concat(t[1]," of ").concat(e," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:e.defaultPageSize,defaultCurrent:s.currentPage,onShowSizeChange:function(e){console.log("onShowSizeChange",e)},onChange:function(t){e.callbackfunc(t)},total:s.totalDocs,locale:c.Z})})}},48309:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(1413),r=a(29439),i=a(72791),c=a(57689),o=a(84951),s=a(30212),l=a(77710),d=a(72426),u=a.n(d),f=a(10003),h=a(21830),g=a.n(h),m=a(63263),x=a(80184),p={certificationsList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}};function j(){var e=(0,i.useState)(p),t=(0,r.Z)(e,2),a=t[0],d=t[1],h=a.certificationsList,j=a.totalPages,S=a.currentPage,Z=a.loader,C=a.permissions,w=(0,c.s0)(),P=function(e){d((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!0})})),l.Z.get("certificate?page=".concat(e-1,"&size=10&sort=id,desc")).then((function(e){d((function(t){return(0,n.Z)((0,n.Z)({},t),{},{certificationsList:e.data.content,totalPages:e.data.totalElements,currentPage:e.data.pageNumber+1,loader:!1})}))})).catch((function(e){g().fire(e.response.data.message,"Please try again "),d((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!1,certificationsList:[]})}))}))};(0,i.useEffect)((function(){var e=localStorage.getItem("userid");m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.get("".concat("http://3.136.240.37:9090/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].certificates:null;d((function(e){return(0,n.Z)((0,n.Z)({},e),{},{permissions:t})}))})).catch((function(e){})),P("1")}),[]);return(0,x.jsxs)(x.Fragment,{children:[Z?(0,x.jsx)(o.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,x.jsx)(o.Zb,{children:(0,x.jsxs)(o.eW,{className:"cardbg",children:[(0,x.jsxs)(o.X2,{children:[(0,x.jsx)(o.JX,{children:(0,x.jsx)("h4",{children:(0,x.jsx)("strong",{children:"Certifications "})})}),(0,x.jsx)(o.JX,{children:C.canCreate?(0,x.jsx)(o.zx,{color:"primary",size:"sm",style:{float:"right"},onClick:function(){return w("/certifications/createcertification/new")},children:"Create"}):null})]}),(0,x.jsx)("div",{className:"height15"}),(0,x.jsx)(o.X2,{children:(0,x.jsx)(o.JX,{children:(0,x.jsxs)(o.Zb,{children:[(0,x.jsxs)(s.c8,{data:h,hover:!0,multiColumnSearch:!0,version:"4",search:!0,children:[(0,x.jsx)(s.bY,{width:"100",dataField:"level",dataFormat:function(e,t){return(0,x.jsx)("span",{children:t.level?"".concat(t.level.name):null})},dataSort:!0,isKey:!0,children:"Belt Name"}),(0,x.jsx)(s.bY,{width:"100",dataField:"name",dataSort:!0,children:"Name"}),(0,x.jsx)(s.bY,{width:"200",dataField:"templateBody",dataSort:!0,children:"Certificate Body"}),(0,x.jsx)(s.bY,{width:"120",dataField:"creationDate",dataFormat:function(e){return(0,x.jsx)(x.Fragment,{children:u()(e).format("MM/DD/YYYY")})},dataSort:!0,children:"Registered Date"}),(0,x.jsx)(s.bY,{width:"60",dataField:"id",dataAlign:"center",dataFormat:function(e,t){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("span",{children:[C.canUpdate?(0,x.jsx)("i",{className:"fa fa-pencil",id:"pencilspace","aria-hidden":"true",onClick:function(){return w("/certifications/createcertification/".concat(t.id))},style:{cursor:"pointer",fontSize:"15px",color:"green"}}):null,C.canDelete?(0,x.jsx)("i",{className:"fa fa-trash-o","aria-hidden":"true",onClick:function(){return e=t.id,void g().fire({title:"Are you sure?",text:"Are you sure you want delete?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.delete("".concat("http://3.136.240.37:9090/api/v1/api","/certificate/").concat(e)).then((function(e){204==e.status&&(P("1"),g().fire("Record Deleted!","","success"))})).catch((function(e){g().fire(e.response.data.message,"Please try again ")})))}));var e},style:{cursor:"pointer",fontSize:"15px",color:"red"}}):null]})})},children:"Action"})]}),(0,x.jsx)(o.iR,{children:h.length>=1?(0,x.jsx)(f.Z,{totalPages:j,currentPage:S,callbackfunc:function(e){P(e)},defaultPageSize:"10"}):null})]})})})]})})]})}}}]);
//# sourceMappingURL=8309.ea7fcb1c.chunk.js.map