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
//import './style.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const createattendance = () => {
    const [state, setState] = useState({ timee: new Date() });
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState("");
    const [allStudents, setAllStudents] = useState("");
    const [studentAttendenceList, setStudentAttendenceList] = useState([]);
    const [defaultData, setDefaultData] = useState("");
    // const[requiredIds,setRequiredIds]=useState({studentId:"",batchId:""})
    const [studentId, setStudentId] = useState("")
    const [batchId, setBatchId] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        getAllStudentAttendances();
    }, []);
    const initialValues = {
        startDate: startDate,
        name: name,
        timee: state.timee,
    }
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
       setDefaultData(string);
        if (string !== "") {
            axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
            axios.get(`${process.env.REACT_APP_BASE_URL}/search/student/${string}`).then((res) => {
                let allStudents = []
                res.data.map((data, index) => {
                    allStudents.push({ id: data.id, name: `${data.firstName} ${data.lastName}` })
                    setStudentId(data.id)
                    setBatchId(data.batch.id)
                })
                setAllStudents({ allStudents });
                //setRequiredIds({...requiredIds,studentId:res.data.id,batchId:res.data.batch.id})
                //getAllStudentAttendances();
            }).catch((err) => {
                if (err.status === 401) {
                    Swal.fire('401 session expired..!', 'Please re-login');
                }
                // else {
                //   Swal.fire(err.message)
                // }
            })
        }
    }
    const getAllStudentAttendances = () => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
        axios.get(`${process.env.REACT_APP_BASE_URL}/student-attendances`).then((res) => {
            if (res.status === 200) {
                setStudentAttendenceList(res.data.content)
            }
        }).catch((err) => {
            if (err.status === 401) {
                Swal.fire('401 session expired..!', 'Please re-login');
            }
            else {
                Swal.fire(err.response.data.message, 'Please try again later');
            }
        })
    }
    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }
    const handleOnSelect = (item) => {
        // the item selected
       setName(`${item.name}`)
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
    const attendenceSubmit = (values) => {
        let payload = {
            studentAttendanceDate: moment(values.startDate).format('YYYY-MM-DD'),
            studentAttendanceTime: moment(values.timee).format("HH:mm:ss"),
            studentAttended: true
        }
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
        let userId = localStorage.getItem("userid");
        axios.post(`${process.env.REACT_APP_BASE_URL}/student/${studentId}/batch/${batchId}/user/${userId}/student-attendance`, payload).then((res) => {
           if (res.status === 201) {
                Swal.fire(
                    'Good job!',
                    'Student attendance successfully done',
                    'success'
                )
                // toast.success(`Student attendance successfully done `, { theme: "colored" });
                window.location.reload(false);
            }
        }).catch((err) => {
            if (err.status === 401) {
                Swal.fire('401 session expired..!', 'Please re-login');
            }
            else {
                Swal.fire(err.response.data.message, 'Please try again later');
            }
        })
    }
    const dateDisplay = (cell, row) => {
        return cell !== null && cell !== undefined ? moment(cell).format("MM/DD/YYYY") : "";
    }
    const timeDisplay = (cell, row) => {
        return cell !== null && cell !== undefined ? moment(cell, ["HH:mm"]).format("hh:mm a") : "";
    }
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(e, row, rowIndex)
        }
    };
    return (
        <>
            <ToastContainer />
            <Card >
                <CardBody className='cardbg'>
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
                                                        items={allStudents.allStudents}
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
                                                <Label for="name" >Student Name</Label>
                                                <Input type="text" name="name" disabled value={name} />
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
                                                <Label  > Time</Label>
                                                <DatePicker
                                                    name="timee"
                                                    selected={values.timee ? new Date(values.timee) : null}
                                                    onChange={date => setDateIn(date, values)}
                                                    minTime={new Date()}
                                                    maxTime={new Date().setHours(23, 59, 59)}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={5}
                                                    timeCaption="Time"
                                                    dateFormat="h:mm aa"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            {defaultData !== "" ?
                                                <Button className='timeTop' type="submit" >Mark As Attending</Button> :
                                                <Button className='timeTop' type="submit" disabled>Mark As Attending</Button>}
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </Card>
                    <hr />
                    <Row >
                        <Card >
                            <BootstrapTable data={studentAttendenceList} keyField="id" search multiColumnSearch="true">
                                <TableHeaderColumn width="5" dataField='id' hidden >unique field</TableHeaderColumn>
                                {/* <TableHeaderColumn dataField='staff' dataSort dataFormat={staffDisplay}>Staff</TableHeaderColumn> */}
                                <TableHeaderColumn dataField='studentAttendanceDate' dataSort >Date</TableHeaderColumn>
                                <TableHeaderColumn dataField='name' dataSort >Student Name</TableHeaderColumn>
                                <TableHeaderColumn dataField='masterName' dataSort >Master Name</TableHeaderColumn>
                                <TableHeaderColumn dataField='batch'  >Batch</TableHeaderColumn>
                                <TableHeaderColumn dataField='program'  >Program</TableHeaderColumn>
                                <TableHeaderColumn dataField='studentAttendanceTime' dataFormat={timeDisplay}>Time</TableHeaderColumn>
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
export default createattendance;
