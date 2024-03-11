import React, { useState, useEffect } from 'react'
import { Col, Badge, Label, Card, CardBody, Row, Input, Button, Spinner } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const StudentAttandinitialData = { StudentAttandList: [], totalPages: "", currentPage: "", loader: false, startDate: '', endDate: "" }
import Axios from "../../../hoc/axiosConfig";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import moment from 'moment/moment';
import { useNavigate } from "react-router-dom";
export default function ContractDetailsList() {
  const [studentData, setState] = useState(StudentAttandinitialData);
  const { StudentAttandList,contractListData,filteredContracts, totalPages, currentPage, loader, startDate, endDate } = studentData;
  const navigate = useNavigate();
  useEffect(() => {
    var someDate = new Date();
    let startDat=moment(someDate).startOf('month');
    let endDat=moment(someDate).endOf('month')
    // Get the first day of the current month
    // var StartDat = new Date(year, month - 1, 1); // Day is 1 since we want the first day

    // // Get the last day of the current month
    // var endDat = new Date(year, month, 0); // Day 0 will give the last day of the previous month

    // Format the dates as yyyy-mm-dd
    // var startDateFormatted = startDate.toISOString().split('T')[0];
    // var endDateFormatted = endDate.toISOString().split('T')[0];
    // let StartDat = moment(someDate).format("YYYY-MM-DD");
    // let endDat = moment(someDate).format("YYYY-MM-DD");
    
    Axios.get(`/dashboard/all-contract?${startDat.format("YYYY-MM-DD")}&endDate=${endDat.format("YYYY-MM-DD")}`).then((res) => {
      console.log("res", res)
      setState((prevState) => ({
        ...prevState,
        startDate: startDat.toDate(),
        endDate: endDat.toDate(),
        StudentAttandList: res.data.contractDtos,
        loader: false
      }))
    }).catch(err => {
      Swal.fire(err.response.data.message, 'Please try again ')
      setState((prevState) => ({ ...prevState, loader: false }))
    })
  }, [])
  const dateHandleChange = (name, date) => {
    if (name === "startDate") {
      setState((prevState) => ({
        ...prevState,
        startDate: date
      }))
    }
    if (name === "endDate") {
      setState((prevState) => ({
        ...prevState,
        endDate: date
      }))
    }
  }
  const studentattendGetData = () => {
 
    if (startDate !== "" && endDate !== "") {
      setState((prevState) => ({ ...prevState, loader: true }))
      let StartDat = moment(startDate).format("YYYY-MM-DD");
      let endDat = moment(endDate).format("YYYY-MM-DD");
      Axios.get(`/dashboard/all-contract?startDate=${StartDat}&endDate=${endDat}`).then((res) => {
        const filteredContracts = StudentAttandList.filter((contractDto) => {
          const contractStartDate = moment(contractDto.startDate).format("YYYY-MM-DD");
          const contractEndDate = moment(contractDto.endDate).format("YYYY-MM-DD");
          return contractStartDate >= StartDat && contractEndDate <= endDat;
      });
        setState((prevState) => ({
          ...prevState,
          contractListData : filteredContracts.map((contractDto) => ({
            name: contractDto.contractPromotion.name,
            fee: contractDto.pricing.fee,
            totalFee: contractDto.pricing.total,
            contractStatus: contractDto.contractStatus,
            startDate: contractDto.startDate,
            endDate: contractDto.endDate,
            creationDate: contractDto.creationDate,
          })),
          loader: false
        }))
      }).catch(err => {
        Swal.fire(err.response.data.message, 'Please try again ')
        setState((prevState) => ({ ...prevState, loader: false }))
      })
      console.log("StudentAttandList", contractListData)
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please Enter Some Date',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
 
 
//   const nameHandle = (cell, row) => {
//     return <>{row.contractPromotion.name}</>
//   }
 
 
//   const totalFeeHandle = (cell, row) => {
//     return <>{row.pricing.total ? row.pricing.total : null}</>
//   }
//   const FeeHandle = (cell, row) => {
//     return <>{row.pricing.fee ? row.pricing.fee : null}</>
//   }
//   const creationDateHandle = (cell, row) => {
//     return <>{cell ? moment(cell).format("YYYY-MM-DD") : null}</>
//   }
 
//   const formattedData = StudentAttandList.map(row => ({
//     name: nameHandle(null, row),
//     totalFee: totalFeeHandle(null, row),
//     fee: FeeHandle(null, row),
//     creationDate: creationDateHandle(row.creationDate, row)
// }));
//console.log(formattedData);
 
  return (
    <>
      {loader ? <Spinner
        className='loaderr'
        color="primary"
      >
        Loading...
      </Spinner> : null}
      <Card >
      <i className = "fa fa-arrow-circle-left dashicon" aria-hidden = "true" onClick ={() => navigate("/dashboard")} ></i>
        <CardBody className='cardbg'>
          <h4><b>Contract Details List</b></h4>
          <div className='height15'></div>
          <Row>
            <Col md={3}>
              <Label>Start Date</Label>
              <DatePicker
                name="startDate"
                selected={startDate}
                onChange={(date) => dateHandleChange("startDate", date)}
                placeholderText="mm/dd/yyyy"
              />
            </Col>
            <Col md={3}>
              <Label>End Date</Label>
              <DatePicker
                selected={endDate}
                onChange={(date) => dateHandleChange("endDate", date)}
                placeholderText="mm/dd/yyyy"
                minDate={startDate}
              />
            </Col>
            <Col md={2} style={{ marginTop: "30px" }}>
              <Button type="button" onClick={() => { studentattendGetData() }}>Search</Button>
            </Col>
            <Col md={2} style={{ marginTop: "30px" }}>
              <Button type="button" onClick={() => navigate("/dashboard")} >Back</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <BootstrapTable data={contractListData} hover multiColumnSearch={true} version='4' search>
                <TableHeaderColumn width="140" dataField='name' dataSort isKey >Name</TableHeaderColumn>
                <TableHeaderColumn width="120" dataField='fee'  dataSort>fee</TableHeaderColumn>
                <TableHeaderColumn width="120" dataField='totalFee' ddataSort>Total Fee</TableHeaderColumn>
                <TableHeaderColumn width="100" dataField='contractStatus' dataSort>Contract Status</TableHeaderColumn>
                <TableHeaderColumn width="100" dataField='startDate' dataSort>Start Date</TableHeaderColumn>
                <TableHeaderColumn width="100" dataField='endDate' dataSort>End Date</TableHeaderColumn>
                <TableHeaderColumn width="100" dataField='creationDate'  dataSort>Created Date</TableHeaderColumn>
              </BootstrapTable>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}