"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4476],{35055:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var a=n(1413),s=n(29439),r=n(72791),o=n(57689),i=n(84951),c=n(15830),l=n(72426),d=n.n(l),u=(n(45852),n(21830)),h=n.n(u),f=n(80184);d().locale("en-GB"),c.Z.momentLocalizer(d());var m="PREV",g="NEXT",v="TODAY",p=function(t){function e(e){t.onNavigate(e)}function n(e){t.onViewChange(e)}return(0,f.jsxs)("div",{className:"rbc-toolbar",children:[(0,f.jsxs)("span",{className:"rbc-btn-group",children:[(0,f.jsx)("button",{type:"button",onClick:e.bind(null,m),children:"Prev"}),(0,f.jsx)("button",{type:"button",onClick:e.bind(null,v),children:"Today"}),(0,f.jsx)("button",{type:"button",onClick:e.bind(null,g),children:"Next"})]}),(0,f.jsx)("span",{className:"rbc-toolbar-label",children:t.label}),(0,f.jsx)("span",{className:"rbc-btn-group",children:function(e){var a=t.views;if(t.view,a.length>1)return a.map((function(t){return(0,f.jsx)("button",{type:"button",onClick:n.bind(null,t),children:e[t]},t)}))}(t.messages)})]})},b=function(t){var e=(0,r.useState)([]),n=(0,s.Z)(e,2),a=n[0],o=n[1],i=(0,r.useState)(),l=(0,s.Z)(i,2),u=(l[0],l[1]);return(0,r.useEffect)((function(){t.events&&o(t.events)}),[t.events,o]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.Z,{defaultView:"month",events:a,views:["month","day"],components:{toolbar:p},onSelectEvent:function(t){u(t),h().fire({title:"<strong>".concat(t.title,"</strong>"),html:"<b>Start Date & Time:</b>\n ".concat(d()(t.start.toString()).format("MMMM Do YYYY, h:mm a")," <br/>\n      <b>End Date & Time:</b>\n").concat(d()(t.end.toString()).format("MMMM Do YYYY, h:mm a")),customClass:{title:"title-class",content:"content-class"}})}})})},D=n(45987),C=["views"];d().locale("en-GB"),(new Date).setHours(6,0,0),(new Date).setHours(23,30,0);var S=c.Z.momentLocalizer(d());S.segmentOffset=0;var x="PREV",j="NEXT",w="TODAY",T=function(t){function e(e){t.onNavigate(e)}function n(e){t.onViewChange(e)}return(0,f.jsxs)("div",{className:"rbc-toolbar",children:[(0,f.jsxs)("span",{className:"rbc-btn-group",children:[(0,f.jsx)("button",{type:"button",onClick:e.bind(null,x),children:"Prev"}),(0,f.jsx)("button",{type:"button",onClick:e.bind(null,w),children:"Today"}),(0,f.jsx)("button",{type:"button",onClick:e.bind(null,j),children:"Next"})]}),(0,f.jsx)("span",{className:"rbc-btn-group",children:function(e){var a=t.views;if(t.view,a.length>1)return a.map((function(t){return(0,f.jsx)("button",{type:"button",onClick:n.bind(null,t),children:e[t]},t)}))}(t.messages)})]})},Z=function(t){var e=(0,r.useState)([]),n=(0,s.Z)(e,2),a=n[0],o=n[1],i=(0,r.useState)(),l=(0,s.Z)(i,2),u=l[0],m=l[1],g=(0,r.useMemo)((function(){return{views:{week:!0}}}),[]);g.views,(0,D.Z)(g,C);(0,r.useEffect)((function(){t.events&&o(t.events)}),[t.events,o]);Object.keys(c.Z.Views).map((function(t){return c.Z.Views[t]}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.Z,{defaultView:"week",localizer:S,events:a,views:["week","day"],startAccessor:function(t){return t.start},endAccessor:function(t){var e=t.start,n=t.end,a=new Date(e),s=new Date(n);return a.getDate(),s.getDate(),new Date(n.getTime())},allDaySlot:!0,allDayDefault:!0,selected:u,onSelectEvent:function(t){m(t),h().fire({title:"<strong>".concat(t.title,"</strong>"),html:"<b>Start Date & Time:</b>\n ".concat(d()(t.start.toString()).format("MMMM Do YYYY, h:mm a")," <br/>\n      <b>End Date & Time:</b>\n").concat(d()(t.end.toString()).format("MMMM Do YYYY, h:mm a")),customClass:{title:"title-class",content:"content-class"}})},showMultiDayTimes:!0,displayEventTime:!0,min:new Date(0,0,0,6,0,0),max:new Date(0,0,0,23,30,0),components:{toolbar:T}})})},y=(n(77710),n(93076)),A=n(63263),M={totalStudents:0,activeStudents:0,newRegistrations:0,inactiveStudents:0,activeContracts:0,inactiveContracts:0,activeStudentCount:0,currentMonthAttendance:0,inactiveStudentCount:0,sevenDayAttendance:0,permanentStaffCount:0,temporaryStaffCount:0,staffsevenDayAttendance:0,staffcurrentMonthAttendance:0,testingActiveStudentCount:0,eligibleTestCount:0,approvedTestCount:0,chartData:"",openLeads:0,openTrials:0,totalInquiries:0,totalContracts:0,totalRenewals:0,totalUpgrades:0,renewalPercentage:0,upgradePercentage:0};function k(){var t=(0,r.useState)([]),e=(0,s.Z)(t,2),n=e[0],c=e[1],l=(0,r.useState)([]),u=(0,s.Z)(l,2),m=u[0],g=u[1],v=(0,r.useState)(M),p=(0,s.Z)(v,2),D=p[0],C=p[1],S=D.totalStudents,x=D.activeStudents,j=D.newRegistrations,w=D.inactiveStudents,T=D.activeContracts,k=D.inactiveContracts,E=D.activeStudentCount,N=D.currentMonthAttendance,Y=D.inactiveStudentCount,B=D.sevenDayAttendance,I=D.permanentStaffCount,F=D.temporaryStaffCount,R=D.staffsevenDayAttendance,H=D.staffcurrentMonthAttendance,P=D.testingActiveStudentCount,O=D.eligibleTestCount,X=D.approvedTestCount,_=(D.chartData,D.openLeads),z=D.openTrials,L=D.totalInquiries,q=D.totalContracts,J=D.totalRenewals,V=D.totalUpgrades,W=D.renewalPercentage,U=D.upgradePercentage,G=(0,o.s0)();(0,r.useEffect)((function(){localStorage.getItem("reload")||(window.location.reload(!1),localStorage.setItem("reload",!0)),K(),Q(),A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/dashboard/student")).then((function(t){C((function(e){return(0,a.Z)((0,a.Z)({},e),{},{totalStudents:t.data.totalStudents,activeStudents:t.data.activeStudents,newRegistrations:t.data.newRegistrations,inactiveStudents:t.data.inactiveStudents,activeContracts:t.data.activeContracts,inactiveContracts:t.data.inactiveContracts})}))})).catch((function(t){console.log(t)})),A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/student-attendances/count")).then((function(t){C((function(e){return(0,a.Z)((0,a.Z)({},e),{},{activeStudentCount:t.data.activeStudentCount,currentMonthAttendance:t.data.currentMonthAttendance,inactiveStudentCount:t.data.inactiveStudentCount,sevenDayAttendance:t.data.sevenDayAttendance})}))})).catch((function(t){})),A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/staff-attendances/count")).then((function(t){C((function(e){return(0,a.Z)((0,a.Z)({},e),{},{permanentStaffCount:t.data.permanentStaffCount,temporaryStaffCount:t.data.temporaryStaffCount,staffsevenDayAttendance:t.data.sevenDayAttendance,staffcurrentMonthAttendance:t.data.currentMonthAttendance})}))})).catch((function(t){})),A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/level-testing/count")).then((function(t){C((function(e){return(0,a.Z)((0,a.Z)({},e),{},{testingActiveStudentCount:t.data.activeStudentCount,eligibleTestCount:t.data.eligibleTestCount,approvedTestCount:t.data.approvedTestCount})}))})).catch((function(t){})),A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/dashboard/all-inquiry")).then((function(t){C((function(e){return(0,a.Z)((0,a.Z)({},e),{},{openLeads:t.data.openLeads,openTrials:t.data.openTrials,totalInquiries:t.data.totalInquiries})}))})).catch((function(t){401===t.response.status&&h().fire("401 session expired..!","Please re-login")})),A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/dashboard/all-contract")).then((function(t){C((function(e){return(0,a.Z)((0,a.Z)({},e),{},{totalContracts:t.data.totalContracts,totalRenewals:t.data.totalRenewals,totalUpgrades:t.data.totalUpgrades,renewalPercentage:t.data.renewalPercentage,upgradePercentage:t.data.upgradePercentage})}))})).catch((function(t){}))}),[]);var K=function(){A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/batches")).then((function(t){var e=[];t.data.content.map((function(t,n){t.startDate.split("-");var a=t.startTime.split(":"),s=new Date(t.startDate),r=new Date(t.startDate);s.setHours(a[0]),s.setMinutes(a[1]),s.setSeconds(a[2]);t.endDate.split("-");var o=t.endTime.split(":"),i=new Date(t.endDate),c=new Date(t.endDate);if(i.setHours(o[0]),i.setMinutes(o[1]),i.setSeconds(o[2]),r<c)for(var l=new Date(s.getFullYear(),s.getMonth(),s.getDate()),d=new Date(i.getFullYear(),i.getMonth(),i.getDate());new Date(l)<new Date(d);){var u=new Date(l);u.setHours(a[0]),u.setMinutes(a[1]),u.setSeconds(a[2]);var h=new Date(l);h.setHours(o[0]),h.setMinutes(o[1]),h.setSeconds(o[2]),l.setDate(l.getDate()+1),e.push({title:t.name,start:u,end:h})}else e.push({title:t.name,start:s,end:i})})),setTimeout((function(){c(e)}),1500)}))},Q=function(){A.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),A.Z.get("".concat("http://3.136.240.37:9090/api/v1/api","/event")).then((function(t){var e=[];t.data.content.map((function(t,n){if(1==t.isAllDay){t.allDayEvent.eventDate.split("-");var a=t.allDayEvent.startTime.split(":"),s=new Date(t.allDayEvent.eventDate);s.setHours(a[0]),s.setMinutes(a[1]),s.setSeconds(a[2]);t.allDayEvent.eventDate.split("-");var r=t.allDayEvent.endTime.split(":"),o=new Date(t.allDayEvent.eventDate);o.setHours(r[0]),o.setMinutes(r[1]),o.setSeconds(r[2]),e.push({title:t.name,start:s,end:o})}if(1==t.isCustomRange){for(var i=[],c=new Date(t.customRangeEvent.startDate),l=(new Date(t.customRangeEvent.endDate).getTime()-c.getTime())/864e5,u=d()(t.customRangeEvent.startTime,["HH:mm:ss"]).format("hh:mm a"),h=d()(t.customRangeEvent.endTime,["HH:mm:ss"]).format("hh:mm a"),f=1;f<l+1;f++){var m=new Date(c);m.setDate(m.getDate()+f),i.push({eventDate:d()(m).format("YYYY-MM-DD"),startTime:u,endTime:h})}setTimeout((function(){i.map((function(n,a){n.eventDate.split("-");var s=n.startTime.split(":"),r=new Date(n.eventDate);r.setHours(s[0]),r.setMinutes(s[1]),r.setSeconds(s[2]);n.eventDate.split("-");var o=n.endTime.split(":"),i=new Date(n.eventDate);i.setHours(o[0]),i.setMinutes(o[1]),i.setSeconds(o[2]),e.push({title:t.name,start:r,end:i})}))}),1e3)}})),setTimeout((function(){g(e)}),1e3)}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i.X2,{children:[(0,f.jsx)(i.JX,{md:4,children:(0,f.jsx)("div",{children:(0,f.jsxs)(i.Zb,{children:[(0,f.jsxs)(i.Ol,{children:[(0,f.jsx)("span",{className:"dashheader",children:"Testing Eligibility and Readiness"}),(0,f.jsx)("i",{className:"fa fa-arrow-circle-right dashicon","aria-hidden":"true",onClick:function(){return G("/dashboard/TestingEligibilityList")}})]}),(0,f.jsx)(i.eW,{className:"cardbg",children:(0,f.jsx)("div",{children:(0,f.jsx)(y.fH,{style:{cursor:"pointer"},data:{labels:["Active Student Count : ".concat(P),"Eligible Test Count : ".concat(O),"Approved Test Count : ".concat(X)],datasets:[{data:[P,O,X],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}})})})]})})}),(0,f.jsx)(i.JX,{md:4,children:(0,f.jsxs)(i.Zb,{children:[(0,f.jsxs)(i.Ol,{children:[(0,f.jsx)("span",{className:"dashheader",children:"Contract Details"}),(0,f.jsx)("i",{className:"fa fa-arrow-circle-right dashicon","aria-hidden":"true",onClick:function(){return G("/dashboard/ContractDetailsList")}})]}),(0,f.jsx)(i.eW,{className:"cardbg",children:(0,f.jsx)("div",{children:(0,f.jsx)(y.ZU,{style:{cursor:"pointer"},data:{labels:["Total Contracts : "+q,"Total Renewals : "+J,"Total Upgrades : "+V,"Renewal Percentage : "+W,"Upgrade Percentage : "+U],datasets:[{data:[q,J,V,W,U],backgroundColor:["rgba(255, 99, 132, 0.3)","rgba(75, 192, 192, 0.3)","rgba(255, 206, 86, 0.3)","rgba(231, 233, 237, 0.3)","rgba(54, 162, 235, 0.3)"]}]},options:{plugins:{legend:{labels:{position:"bottom"},fill:{opacity:.8}}}}})})})]})}),(0,f.jsx)(i.JX,{md:4,children:(0,f.jsxs)(i.Zb,{children:[(0,f.jsxs)(i.Ol,{children:[(0,f.jsx)("span",{className:"dashheader",children:"Inquiry Details"}),(0,f.jsx)("i",{className:"fa fa-arrow-circle-right dashicon","aria-hidden":"true",onClick:function(){return G("/dashboard/InquiryDetailsList")}})]}),(0,f.jsx)(i.eW,{className:"cardbg",children:(0,f.jsx)("div",{children:(0,f.jsx)(y.MG,{style:{cursor:"pointer"},data:{labels:["Total Inquiries : "+L,"Open Leads : "+_,"Open Trials : "+z],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF"],data:[L,_,z]}]}})})})]})})]}),(0,f.jsxs)(i.X2,{children:[(0,f.jsx)(i.JX,{md:6,children:(0,f.jsxs)(i.Zb,{children:[(0,f.jsx)(i.Ol,{children:(0,f.jsx)("span",{className:"dashheader",children:"Student Statistics"})}),(0,f.jsx)(i.eW,{className:"cardbg scrl",children:(0,f.jsx)(y.JZ,{data:{labels:["Total Students","Active Students","New Registrations","Inactive Students","Active Contracts","Inactive Contracts"],datasets:[{label:"Statistics",backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB","#41B883"],hoverBackgroundColor:"#f68713",data:[S,x,j,w,T,k]}]},labels:"Student"})})]})}),(0,f.jsx)(i.JX,{md:6,children:(0,f.jsxs)(i.Zb,{children:[(0,f.jsxs)(i.Ol,{children:[(0,f.jsx)("span",{className:"dashheader",children:"Student & Staff Attendance"}),(0,f.jsx)("i",{className:"fa fa-arrow-circle-right dashicon","aria-hidden":"true",onClick:function(){G("/dashboard/StudentANDstaffAttendenceTab")}})]}),(0,f.jsx)(i.eW,{className:"cardbg scrl",children:(0,f.jsx)(y.oK,{data:{labels:["Active Count","Inactive Count","Seven Days","Current Month","Temporary Staff"],datasets:[{label:"Student Attendance",backgroundColor:"rgba(220, 220, 220, 0.2)",borderColor:"rgba(220, 220, 220, 1)",pointBackgroundColor:"rgba(220, 220, 220, 1)",pointBorderColor:"#fff",data:[E,Y,B,N,0]},{label:"Staff Attendance",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",data:[I,0,R,H,F]}]}})})]})})]}),(0,f.jsxs)(i.X2,{children:[(0,f.jsx)(i.JX,{md:6,children:(0,f.jsxs)(i.Zb,{children:[(0,f.jsx)(i.Ol,{children:(0,f.jsx)("span",{className:"dashheader",children:"Weekly batch/class Schedule"})}),(0,f.jsx)(i.eW,{className:"cardbg scrl",children:(0,f.jsx)("div",{style:{height:290,overflowY:"scroll"},children:(0,f.jsx)(Z,{events:n})})})]})}),(0,f.jsx)(i.JX,{md:6,children:(0,f.jsxs)(i.Zb,{children:[(0,f.jsx)(i.Ol,{children:(0,f.jsx)("span",{className:"dashheader",children:"Monthly on-going Event Schedule"})}),(0,f.jsx)(i.eW,{className:"cardbg scrl",children:(0,f.jsx)(b,{events:m})})]})})]})]})}}}]);
//# sourceMappingURL=4476.62f3008c.chunk.js.map