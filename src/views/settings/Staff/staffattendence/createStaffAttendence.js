import React, { useState, useEffect } from 'react';
import { Col, Label, Card, CardBody, Row, Input, FormGroup, Button, Media, InputGroup, InputGroupText } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Formik, Form } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import moment from 'moment/moment';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import './style.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const createStaffAttendence = () => {
  const [state, setState] = useState({ checkIn: new Date(), checkOut: new Date() });
  const [startDate, setStartDate] = useState(new Date());
  const [inCheck, setInCheck] = useState(false);
  const [name, setName] = useState("");
  const [defaultData, setDefaultData] = useState("");
  const [pin, setPin] = useState("");
  const [attendenceId, setAttendenceId] = useState("");
  const [staffAttendenceList, setStaffAttendenceList] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedStaffId, setSelectedStaffId] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    handleOnSearch();
  }, []);
  const setDateIn = (date, values) => {
    values.checkIn = date;
    setState({ ...values });
  }
  const setDateOut = (date, values) => {
    values.checkOut = date;
    setState({ ...values });
  }
  const initialValues = {
    startDate: startDate,
    name: name,
    checkIn: state.checkIn,
    checkOut: state.checkOut,
    pin: pin
  }
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results)
    setDefaultData(string);
    if (string !== "") {
      axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
      axios.get(`${process.env.REACT_APP_BASE_URL_BASE}staff-api/search/user/${string}`).then((res) => {
        //console.log("search api", res)
        let allusers = []
        res.data.map((data, index) => {
          allusers.push({ id: data.id, name: `${data.firstName} ${data.lastName}` })
        })
        setAllUsers({ allusers });
      }).catch((err) => {
        if (err.status === 401) {
          Swal.fire('401 session expired..!', 'Please re-login');
        }
        else {
          Swal.fire(err.message)
        }
      })
    }
  }
  const handleOnHover = (result) => {
    // the item hovered
    //console.log(result)
  }
  const handleOnSelect = (item) => {
    // the item selected
    //console.log(item)
    setName(item.name);
    setSelectedStaffId(item.id);
    sevendaysData(item);
    todatDateFetch(item);
  }
  const sevendaysData = (data) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    //let userId = localStorage.getItem("userid");
    axios.get(`${process.env.REACT_APP_BASE_URL_BASE}staff-api/user/${data.id}/staff-attendances`).then((res) => {
      //console.log(res)
      if (res.data !== []) {
        setStaffAttendenceList(res.data);
        setAttendenceId(res.data[0].id);
      }
      else {
        //console.log("hii")
      }
    }).catch((err) => {
      console.log(err.message)
      //Swal.fire( 'Please try again ')
    })
  }
  const todatDateFetch = (data) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    //let userId = localStorage.getItem("userid");
    axios.get(`${process.env.REACT_APP_BASE_URL_BASE}staff-api/user/${data.id}/staff-attendance/${moment(state.datee).format('YYYY-MM-DD')}`).then((res) => {
      //console.log("today date", res)
      if (res.data === "") {
        setInCheck(true);
        //setResponseData(res.data);
      }
      // if (res.data) {
      //   setOutCheck(true);
      //   let d = new Date();
      //   let [hours, minutes] = res.data.checkIn.split(':');
      //   d.setHours(+hours);
      //   d.setMinutes(minutes);
      //   setState({ ...state, checkIn: d.toString() });
      // }
      else {
        let d = new Date();
        let [hours, minutes] = res.data.checkOut.split(':');
        d.setHours(+hours);
        d.setMinutes(minutes);
        setState({ ...state, checkOut: d.toString() });
      }
    }).catch((err) => {
      console.log(err)
      if (err.status === 401) {
        Swal.fire('401 session expired..!', 'Please re-login');
      }
      // else {
      //Swal.fire('Oops, something went wrong. Please try again later');
      // }
    })
  }
  const handleOnFocus = () => {
    console.log('Focused')
  }
  const formatResult = (item) => {
    return (
      <div >
        <span style={{ display: 'block', textAlign: 'left', cursor: "pointer" }}>{item.name}</span>
      </div>
    )
  }
  const refreshPage = () => {
    setInCheck(false);
    setName("");
    setDefaultData("");
    setPin("");
    setStaffAttendenceList([]);
  }
  const attendenceSubmit = (values) => {
    console.log(values)
    let payload = {
      date: moment(values.startDate).format('YYYY-MM-DD'),
      checkIn: moment(values.checkIn).format("HH:mm"),
      pin: values.pin
    }
    let updatePayload = {
      checkOut: moment(values.checkOut).format("HH:mm")
    }
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    if (inCheck == true) {
      axios.post(`${process.env.REACT_APP_BASE_URL_BASE}staff-api/user/${selectedStaffId}/staff-attendance`, payload).then((res) => {
        console.log("post", res)
        if (res.status === 201) {
          Swal.fire(
            'Good job!',
            'Staff In time entered successfully',
            'success'
          )
          //  toast.success(`Staff In time entered successfully `, { theme: "colored" });
          sevendaysData(res.data);
          todatDateFetch(res.data);
         // window.location.reload(false)
          refreshPage();
        }
      }).catch((err) => {
        console.log(err)
        if (err.status === 401) {
          Swal.fire('401 session expired..!', 'Please re-login');
        }
        else {
          Swal.fire(err.response.data.message);
        }
      })
    }
    else {
      axios.put(`${process.env.REACT_APP_BASE_URL_BASE}staff-api/user/${selectedStaffId}/staff-attendance/${attendenceId}`, updatePayload).then((res) => {
        console.log("update", res)
        if (res.status === 200) {
          Swal.fire(
            'Good job!',
            'Staff Out time entered successfully',
            'success'
          )
          // toast.info(`Staff Out time entered successfully`, { theme: "colored" });
          window.location.reload(false)
          //refreshPage();
        }
      }).catch((err) => {
        console.log(err.response)
        if (err.response.status === 401) {
          Swal.fire('401 session expired..!', 'Please re-login');
        }
        // if (err.response.status === 404) {
        //   Swal.fire(`Staff already checked out at time : ${moment(err.response.data.message, ["HH:mm"]).format("hh:mm a")}`);
        // }
        else {
          Swal.fire(err.response.data.message);
        }
      })
    }
  }
  const dateDisplay = (cell, row) => {
    return cell !== null && cell !== undefined ? moment(cell).format("MM/DD/YYYY") : "";
  }
  const timeDisplay = (cell, row) => {
    return cell !== null && cell !== undefined ? moment(cell, ["HH:mm"]).format("hh:mm a") : "";
  }
  // const filterNames = ({ name }) => {
  //   return name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  // };
  return (
    <>
      <ToastContainer />
      <Card >
        <CardBody className='cardbg'>
          {/* <h4><strong>Staff Attendence <Button type="button" onClick={() => navigate('/attendence')}></Button>
          </strong></h4> */}
          {/* <Row>
                    <Col md={12}>
                  <Row>
                    <Col><h4><strong>Start entering your first or last name to locate your Staff information:</strong></h4></Col>
                  </Row>
                  <br/>
                  <Row className='rowborder'>
                    <Card style={{width:"83.5em",marginLeft:"1em"}}>
                      <BootstrapTable data={""} keyField="test1" search striped hover version='4' tableContainerClass='my-custom-class' rowEvents={ rowEvents }>
                        <TableHeaderColumn  dataAlign='left' dataField='test1'  dataSort >Staff Details</TableHeaderColumn>
                      </BootstrapTable>
                    </Card>
                  </Row>
                    </Col>
                    </Row>
                    <hr /> */}
          <Card className='attendencecard' >
            <Formik
              enableReinitialize="true"
              initialValues={initialValues}
              onSubmit={attendenceSubmit}
            >
              {({ values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty, setFieldValue }) => (
                <Form className="add-edit-user-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col width={5}>
                      <FormGroup>
                        <Label for="search" >Search</Label>
                        <div style={{ width: 400 }}>
                          <ReactSearchAutocomplete
                            items={allUsers.allusers}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                            styling={{ zIndex: "1000", height: "34px", border: "1px solid #65bdf7", borderRadius: "10px", backgroundColor: "#e6fafe", hoverBackgroundColor: "#e6fafe", }}
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col width={4}>
                      <FormGroup>
                        <Label for="name" >Staff Name</Label>
                        {defaultData !== undefined ? <Input type="text" name="name" value={name} disabled /> : <Input name="" value="" disabled />}
                      </FormGroup>
                    </Col>
                    <Col width={3}>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="startDate" >Date</Label>
                        <DatePicker selected={startDate} readOnly className="disable" onChange={(date) => setStartDate(date)} minDate={new Date()} />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="pin" >Pin</Label>
                        {(inCheck == true) ?
                          <Input type="number" name="pin" value={values.pin} onChange={handleChange} /> :
                          <Input type="number" name="pin" readOnly className="disable" />}
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      {(inCheck == true) &&
                        <Row>
                          <>
                            <Col md={2}>
                              {/* <FormGroup>
                                <Label  > Check-In</Label>
                                <DatePicker
                                  name="checkIn"
                                  selected={values.checkIn ? new Date(values.checkIn) : null}
                                  onChange={date => setDateIn(date, values)}
                                  minTime={new Date()}
                                  maxTime={new Date().setHours(23, 59, 59)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={5}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                  readOnly={true}
                                  className="disable"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={1}> */}
                              {defaultData !== undefined ? <Button className='timeTop' type="submit" >In</Button> : <Button className='timeTop' type="submit" disabled>In</Button>}
                            </Col>
                            
                          </>
                          <>
                            <Col md={2}>
                              {/* <FormGroup>
                                <Label  > Check-Out</Label>
                                <DatePicker
                                  name="checkOut"
                                  selected={values.checkOut ? values.checkOut : null}
                                  onChange={date => setDateOut(date, values)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={5}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                  readOnly={true}
                                  className="disable"
                                  placeholderText="--:-- --"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={2}> */}
                              <Button className='timeTop' type="submit" disabled>Out</Button>
                            </Col>
                          </>
                        </Row>
                      }
                      {(inCheck == false) &&
                        <Row>
                          <>
                            <Col md={2}>
                              {/* <FormGroup>
                                <Label  > Check-In</Label>
                                <DatePicker
                                  name="checkIn"
                                  selected={values.checkIn ? new Date(values.checkIn) : null}
                                  onChange={date => setDateIn(date, values)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={5}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                  readOnly={true}
                                  className="disable"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={1}> */}
                              <Button className='timeTop' type="submit" disabled>In</Button>
                            </Col>
                             
                          </>
                          <>
                            <Col md={2}>
                              {/* <FormGroup>
                                <Label  > Check-Out</Label>
                                <DatePicker
                                  name="checkOut"
                                  selected={values.checkOut ? values.checkOut : null}
                                  onChange={date => setDateOut(date, values)}
                                  minTime={new Date(new Date(values.checkIn).getTime() + (5 * 60 * 1000))}
                                  maxTime={new Date().setHours(23, 59, 59)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={5}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                  readOnly={true}
                                  className="disable"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={2}> */}
                              {defaultData !== undefined ? <Button className='timeTop' type="submit" >Out</Button> : <Button className='timeTop' type="submit" disabled>Out</Button>}
                            </Col>
                          </>
                        </Row>
                      }
                    </Col>
                    
                  </Row>
                </Form>
              )}
            </Formik>
          </Card>
          <hr />
          <Row  >
            <Card  >
              <BootstrapTable data={staffAttendenceList} keyField="id" multiColumnSearch="true">
                <TableHeaderColumn width="5" dataField='id' hidden >unique field</TableHeaderColumn>
                {/* <TableHeaderColumn dataField='staff' dataSort dataFormat={staffDisplay}>Staff</TableHeaderColumn> */}
                <TableHeaderColumn dataField='date' dataSort dataFormat={dateDisplay}>Date</TableHeaderColumn>
                {/* <TableHeaderColumn dataField='name' dataSort >Staff Name</TableHeaderColumn>
                <TableHeaderColumn dataField='phone' dataSort >Phone Number</TableHeaderColumn> */}
                <TableHeaderColumn dataField='checkIn' dataFormat={timeDisplay} >Check-In</TableHeaderColumn>
                <TableHeaderColumn dataField='checkOut' dataFormat={timeDisplay}>Check-Out</TableHeaderColumn>
              </BootstrapTable>
            </Card>
          </Row>
          <Row>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}
export default createStaffAttendence;