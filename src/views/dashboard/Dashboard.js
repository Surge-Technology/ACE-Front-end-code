import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Col, Card, CardHeader, CardBody, Row } from "reactstrap";
import Monthlyevents from './monthlyevents';
import Weeklybatches from './weeklybatch';
import Axios from "../../hoc/axiosConfig";
import { CChartPie,CChartBar,CChartLine,CChartPolarArea ,CChartDoughnut} from '@coreui/react-chartjs'
import Swal from 'sweetalert2';
import './dashboard.css';
const dashboardState = {
  "totalStudents": 0,
  "activeStudents": 0,
  "newRegistrations": 0,
  "inactiveStudents": 0,
  "activeContracts": 0,
  "inactiveContracts": 0,
  activeStudentCount: 0, currentMonthAttendance: 0, inactiveStudentCount: 0, sevenDayAttendance: 0,
  permanentStaffCount: 0, temporaryStaffCount: 0, staffsevenDayAttendance: 0, staffcurrentMonthAttendance: 0, 
  testingActiveStudentCount: 0, eligibleTestCount: 0,approvedTestCount:0, chartData: "",
  openLeads :0,
  openTrials : 0,
  totalInquiries :  0,
  totalContracts :  0,
  totalRenewals :   0,
  totalUpgrades:   0,
  renewalPercentage:0,
  upgradePercentage:0,
} 
export default function Dashboard() {
  const [batchTimings, setBatchTimings] = useState([])
  const [eventTimings, setEventTimings] = useState([])
  const [dashboardIntialState, setState] = useState(dashboardState)
  const {totalStudents,activeStudents,newRegistrations,inactiveStudents,activeContracts,inactiveContracts, activeStudentCount, currentMonthAttendance, inactiveStudentCount, sevenDayAttendance, permanentStaffCount
    , temporaryStaffCount, staffsevenDayAttendance, staffcurrentMonthAttendance, testingActiveStudentCount, eligibleTestCount,approvedTestCount, chartData,
    openLeads,openTrials,totalInquiries,totalContracts,totalRenewals,totalUpgrades,renewalPercentage,upgradePercentage} = dashboardIntialState
  const random = () => Math.round(Math.random() * 100)
  const navigate = useNavigate();
  useEffect(() => {
    getAllBatches();
    getAllEvents();
    Axios.get("/dashboard/student").then((res) => {
      setState((prevState) => ({
       ...prevState,
       "totalStudents": res.data.totalStudents,
       "activeStudents": res.data.activeStudents,
       "newRegistrations": res.data.newRegistrations,
       "inactiveStudents": res.data.inactiveStudents,
       "activeContracts": res.data.activeContracts,
       "inactiveContracts":res.data.inactiveContracts,
      // "totalStudents":40,
      // "activeStudents":22,
      // "newRegistrations": 2,
      // "inactiveStudents": 7,
      // "activeContracts": 18,
      // "inactiveContracts": 2
     }))
    }).catch(err => { console.log(err)})
    Axios.get("/student-attendances/count").then((res) => {
       setState((prevState) => ({
        ...prevState,
        activeStudentCount: res.data.activeStudentCount,
         currentMonthAttendance: res.data.currentMonthAttendance,
        inactiveStudentCount: res.data.inactiveStudentCount,
         sevenDayAttendance: res.data.sevenDayAttendance,
        // "activeStudentCount": 30,
        // "inactiveStudentCount": 3,
        // "sevenDayAttendance": 34,
        // "currentMonthAttendance": 34
      }))
    }).catch(err => { console.log(err)})
    let employmentType = localStorage.getItem('employmentType')
    Axios.get(`/staff-attendances/count`).then((res) => {
       setState((prevState) => ({
        ...prevState,
        permanentStaffCount: res.data.permanentStaffCount,
         temporaryStaffCount: res.data.temporaryStaffCount,
        staffsevenDayAttendance: res.data.sevenDayAttendance, 
        staffcurrentMonthAttendance: res.data.currentMonthAttendance,
        // "permanentStaffCount": 30,
        // "temporaryStaffCount": 10,
        // "staffsevenDayAttendance": 20,
        // "staffcurrentMonthAttendance": 90
      }))
    }).catch(err => { console.log(err)})
    Axios.get("/level-testing/count").then((res) => {
       setState((prevState) => ({
        ...prevState,
        testingActiveStudentCount: res.data.activeStudentCount,
         eligibleTestCount: res.data.eligibleTestCount,
         approvedTestCount: res.data.approvedTestCount,

          // "testingActiveStudentCount": 40,
          // "eligibleTestCount": 25,
          // "approvedTestCount": 15,
      }))
    }).catch(err => { console.log(err)}) 
    Axios.get("/dashboard/all-inquiry").then((res) => {
       setState((prevState) => ({
       ...prevState,
       openLeads: res.data.openLeads,
        openTrials: res.data.openTrials,
        totalInquiries: res.data.totalInquiries,
      //  openLeads :12,
      //  openTrials : 8,
      //  totalInquiries :  20
         
     }))
    }).catch(err => { console.log(err)})
    Axios.get("/dashboard/all-contract").then((res) => {
      setState((prevState) => ({
       ...prevState,
       totalContracts: res.data.totalContracts,
        totalRenewals: res.data.totalRenewals,
        totalUpgrades: res.data.totalUpgrades,
       renewalPercentage: res.data.renewalPercentage,
       upgradePercentage: res.data.upgradePercentage,
      //  totalContracts :  25,
      //  totalRenewals :   16,
      //  totalUpgrades:   11,
      //  renewalPercentage:11,
      //  upgradePercentage:25,
         
     }))
    }).catch(err => { console.log(err)})
  }, [])
  const getAllBatches = () => {
    Axios.get(`batches`)
      .then((n) => {
        let batchArray = [];
        n.data.content.map((event, i) => {
          let startDate = event.startDate.split("-");
          let startTime = event.startTime.split(':');
          let startDateAndTime = new Date(event.startDate);
          let startDateAndTime2 = new Date(event.startDate);
          startDateAndTime.setHours(startTime[0]);
          startDateAndTime.setMinutes(startTime[1]);
          startDateAndTime.setSeconds(startTime[2]);
          let endDate = event.endDate.split("-");
          let endTime = event.endTime.split(':');
          let endDateAndTime = new Date(event.endDate);
          let endDateAndTime2 = new Date(event.endDate);
          endDateAndTime.setHours(endTime[0]);
          endDateAndTime.setMinutes(endTime[1]);
          endDateAndTime.setSeconds(endTime[2]);
          if (startDateAndTime2 < endDateAndTime2) {
            let startingPoint = new Date(startDateAndTime.getFullYear(), startDateAndTime.getMonth(), startDateAndTime.getDate());
            let endingPoint = new Date(endDateAndTime.getFullYear(), endDateAndTime.getMonth(), endDateAndTime.getDate());
            while (new Date(startingPoint) < new Date(endingPoint)) {
              let estartDateAndTime = new Date(startingPoint);
              estartDateAndTime.setHours(startTime[0]);
              estartDateAndTime.setMinutes(startTime[1]);
              estartDateAndTime.setSeconds(startTime[2]);
              let sendDateAndTime = new Date(startingPoint);
              sendDateAndTime.setHours(endTime[0]);
              sendDateAndTime.setMinutes(endTime[1]);
              sendDateAndTime.setSeconds(endTime[2]);
              startingPoint.setDate(startingPoint.getDate() + 1);
              batchArray.push({
                'title': event.name,
                'start': estartDateAndTime,
                'end': sendDateAndTime,
              })
            }
          }
          else {
            batchArray.push({
              'title': event.name,
              'start': startDateAndTime,
              'end': endDateAndTime,
            })
          }
        })
        setTimeout(() => {
          setBatchTimings(batchArray);
        }, 1500);
      })
  }
  const getAllEvents = () => {
    Axios.get("event")
      .then((n) => {
        let eventArray = [];
        n.data.content.map((event, i) => {
          if (event.isAllDay == true) {
            let startDate = event.allDayEvent.eventDate.split("-");
            let startTime = event.allDayEvent.startTime.split(':');
            let startDateAndTime = new Date(event.allDayEvent.eventDate);
            startDateAndTime.setHours(startTime[0]);
            startDateAndTime.setMinutes(startTime[1]);
            startDateAndTime.setSeconds(startTime[2]);
            let endDate = event.allDayEvent.eventDate.split("-");
            let endTime = event.allDayEvent.endTime.split(':');
            let endDateAndTime = new Date(event.allDayEvent.eventDate);
            endDateAndTime.setHours(endTime[0]);
            endDateAndTime.setMinutes(endTime[1]);
            endDateAndTime.setSeconds(endTime[2]);
            eventArray.push({
              'title': event.name,
              'start': startDateAndTime,
              'end': endDateAndTime
            })
          }
          if (event.isCustomRange == true) {
            event.customRangeEvent.map((e, i) => {
              let startDate = e.eventDate.split("-");
              let startTime = e.startTime.split(':');
              let startDateAndTime = new Date(e.eventDate);
              startDateAndTime.setHours(startTime[0]);
              startDateAndTime.setMinutes(startTime[1]);
              startDateAndTime.setSeconds(startTime[2]);
              let endDate = e.eventDate.split("-");
              let endTime = e.endTime.split(':');
              let endDateAndTime = new Date(e.eventDate);
              endDateAndTime.setHours(endTime[0]);
              endDateAndTime.setMinutes(endTime[1]);
              endDateAndTime.setSeconds(endTime[2]);
              eventArray.push({
                'title': event.name,
                'start': startDateAndTime,
                'end': endDateAndTime
              })
            })
          }
        })
        setTimeout(() => {
          setEventTimings(eventArray);
        }, 1000);
      })
  }
  return (
    <>
     <Row>
        <Col md={4} >
          <div >
          <Card  >
            <CardHeader>
              <span className="dashheader">Testing Eligibility and Readiness</span>
              <i className="fa fa-arrow-circle-right dashicon" aria-hidden="true" onClick={() => navigate("/dashboard/TestingEligibilityList")} ></i>
            </CardHeader>
            <CardBody className='cardbg'>
                  <div style={{ width: "260px"}}>  
                  <CChartPie
                  style={{cursor:"pointer"}}
                    data={{
                      labels: [ `Active Student Count : ${testingActiveStudentCount}`,`Eligible Test Count : ${eligibleTestCount}`, `Approved Test Count : ${approvedTestCount}`],
                      datasets: [
                        {
                          data: [testingActiveStudentCount,eligibleTestCount,approvedTestCount],
                          backgroundColor: ['#FF6384', '#36A2EB','#FFCE56'],
                          hoverBackgroundColor: ['#FF6384', '#36A2EB','#FFCE56'],
                        },
                      ],
                    }}
                  />
                </div> 
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col md={4}>
          <Card >
            <CardHeader>
              <span className="dashheader">Contract Details</span>
              <i className="fa fa-arrow-circle-right dashicon" aria-hidden="true" onClick={() => navigate("/dashboard/ContractDetailsList")} ></i>
            </CardHeader>
            <CardBody className='cardbg'>
                <div style={{ width: "260px"}}> 
                 <CChartPolarArea
                 style={{cursor:"pointer"}}
                  data={{
                    labels: ['Total Contracts : '+totalContracts, 'Total Renewals : '+totalRenewals, 'Total Upgrades : '+totalUpgrades,'Renewal Percentage : '+renewalPercentage,'Upgrade Percentage : '+upgradePercentage],
                    datasets: [
                      {
                        data: [totalContracts, totalRenewals, totalUpgrades,renewalPercentage,upgradePercentage],
                        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                      },
                    ],
                  }}
                />
              </div> 
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card >
            <CardHeader>
              <span className="dashheader">Inquiry Details</span>
              <i className="fa fa-arrow-circle-right dashicon" aria-hidden="true" onClick={() => navigate("/dashboard/InquiryDetailsList")} ></i>
            </CardHeader>
            <CardBody className='cardbg'>
                <div style={{ width: "260px"}}>  
                 <CChartDoughnut
                 style={{cursor:"pointer"}}
                      data={{
                        labels: ['Total Inquiries : '+totalInquiries, 'Open Leads : '+openLeads, 'Open Trials : '+openTrials],
                        datasets: [
                          {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
                            data: [totalInquiries, openLeads, openTrials],
                          },
                        ],
                      }}
                    />
                </div> 
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>
              <span className="dashheader">Student Statistics</span>
              <i className="fa fa-arrow-circle-right dashicon" aria-hidden="true" onClick={() => navigate("/studentTabs/1")} ></i>
            </CardHeader>
            <CardBody className='cardbg' >
             <CChartBar
              data={{
                labels: ['Total Students', 'Active Students', 'New Registrations', 'Inactive Students','Active Contracts','Inactive Contracts'],
                datasets: [
                  {
                     label: 'Statistics',
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB','#41B883'],
                    hoverBackgroundColor: '#f68713',
                    data: [totalStudents, activeStudents, newRegistrations, inactiveStudents,activeContracts,inactiveContracts],
                  },
                ],
              }}
              labels="Student"
            /> 
             </CardBody>
          </Card>
        </Col>
        <Col md={6}>
        <Card >
            <CardHeader>
              <span className="dashheader">Student & Staff Attendance</span>
              <i className="fa fa-arrow-circle-right dashicon" aria-hidden="true" onClick={() => { navigate('/dashboard/StudentANDstaffAttendenceTab') }}></i>
            </CardHeader>
            <CardBody className='cardbg'>
            <CChartLine
              data={{
                labels: ['Active Count', 'Inactive Count', 'Seven Days', 'Current Month', 'Temporary Staff'],
                datasets: [
                  {
                    label: 'Student Attendance',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [  activeStudentCount,  inactiveStudentCount, sevenDayAttendance,currentMonthAttendance,0],
                  },
                  {
                    label: 'Staff Attendance',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [ permanentStaffCount, 0, staffsevenDayAttendance, staffcurrentMonthAttendance,temporaryStaffCount ],
                  },
                ],
              }}
            />
            </CardBody>
          </Card>
          
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card >
            <CardHeader>
              <span className="dashheader">Weekly batch/class Schedule</span>
            </CardHeader>
            <CardBody className='cardbg' >
              <div style={{ height: 290, overflowY: "scroll" }}>
                <Weeklybatches events={batchTimings} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <CardHeader>
              <span className="dashheader">Monthly on-going Event Schedule</span>
            </CardHeader>
            <CardBody className='cardbg'>
                <Monthlyevents events={eventTimings} /> 
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}
