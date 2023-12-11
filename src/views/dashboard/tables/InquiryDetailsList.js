import React,{useState,useEffect}  from 'react'
import { Col,Badge, Label,Card,CardBody, Row,Input,Button,Spinner } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const StudentAttandinitialData= {inquiryList:[],totalPages:"",currentPage:"",loader:false,startDate:'',endDate:""}
import Axios from "../../../hoc/axiosConfig";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import moment from 'moment/moment';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function InquiryDetailsList() {
  const [studentData, setState] = useState(StudentAttandinitialData);
  const {inquiryList,totalPages,currentPage,loader,startDate,endDate} =  studentData;
  const navigate = useNavigate();
  
  const dateHandleChange=(name,date)=>{
    if(name==="startDate"){
      setState((prevState)=>({
        ...prevState,
        startDate:date
      }))
    }
    if(name==="endDate"){
      setState((prevState)=>({
        ...prevState,
        endDate:date
      }))
    }
  }
  const studentattendGetData=()=>{
    
    if(startDate!=="" && endDate !== ""){
      setState((prevState)=>({...prevState,loader:true}))
      let StartDat = moment(startDate).format("YYYY-MM-DD");
      let endDat = moment(endDate).format("YYYY-MM-DD");
      axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token");;
      //axios.put(`${process.env.REACT_APP_BASE_URL}/sports/
      //api/dashboard/inquiry?startDate=2023-10-05&endDate=2023-12-06
      axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/inquiry?startDate=${StartDat}&endDate=${endDat}`).then((res)=>{
        console.log("res", res)
        if(res.status===200||res.status===201){
          setState((prevState)=>({
            ...prevState, 
            inquiryList:res.data.inquiryDtos,
            loader:false
          }))
        }else{
          setState((prevState)=>({
            ...prevState, 
             loader:false
          }))
        }
       }).catch(err=>{
        setState((prevState)=>({...prevState,loader:false}))
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please Enter Some Date',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  const displayFullName = (cell, row) => {
    return (<span>{row?`${row.firstName} ${row.lastName}`:null}</span>)
  }
  const displayDate = (date)=>{
    return(<>{moment(date).format("MM/DD/YYYY")}</>)
  }
  const displayinquiryServices = (cell, row) => {
    return (<span>{row.inquiryServices? row.inquiryServices.name :null}</span>)
  }
  const displayinquiryStatus = (cell, row) => {
    return (<span>{row.inquiryStatus? row.inquiryStatus.name :null}</span>)
  }
  const displayinquiryType = (cell, row) => {
    return (<span>{row.inquiryType? row.inquiryType.name :null}</span>)
  }
  return (
    <>
     {loader?<Spinner
      className='loaderr'
       color="primary"
      > 
      Loading...
    </Spinner>:null}
       <Card >
            <CardBody className='cardbg'>          
                 <h4><b>Inquiry Details List</b></h4>
                 <div className='height15'></div>
              <Row>
                <Col md={3}>
                <Label>Start Date</Label>
                  <DatePicker
                    name="startDate"
                   // selected={startDate?new Date(startDate):null}
                   selected={startDate}
                    onChange={(date) => dateHandleChange("startDate",date)}
                    placeholderText="mm/dd/yyyy"
                  />
                </Col>
                <Col md={3}>
                  <Label>End Date</Label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => dateHandleChange("endDate",date)}
                    placeholderText="mm/dd/yyyy"
                    minDate={startDate} 
                  />
                </Col>
                <Col md={2} style={{marginTop:"30px"}}> 
                  <Button type="button" onClick={()=>{studentattendGetData()}}>Search</Button>
                </Col>
                <Col md={2} style={{marginTop:"30px"}}>
                  <Button type="button" onClick={() => navigate("/dashboard")} >Back</Button>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col> 
                <BootstrapTable data={inquiryList} hover multiColumnSearch={true} version='4' search>
                <TableHeaderColumn width="140" dataField='firstName' dataFormat={displayFullName} dataSort isKey>Name</TableHeaderColumn>
                <TableHeaderColumn width="160" dataField='email' dataSort>Email</TableHeaderColumn>
                <TableHeaderColumn width="110" dataField='phone'  dataSort>Phone</TableHeaderColumn>
                <TableHeaderColumn width="110" dataField='inquiryServices' dataFormat={displayinquiryServices} dataSort> Services</TableHeaderColumn>
                <TableHeaderColumn width="110" dataField='inquiryStatus' dataFormat={displayinquiryStatus} dataSort> Status</TableHeaderColumn>
                <TableHeaderColumn width="110" dataField='inquiryType' dataFormat={displayinquiryType} dataSort> Type</TableHeaderColumn>
                <TableHeaderColumn width="120" dataField='creationDate' dataFormat={displayDate}  dataSort>Created Date</TableHeaderColumn>
                </BootstrapTable>
                </Col>
              </Row>
            </CardBody>
          </Card>
    </>
  )
}
