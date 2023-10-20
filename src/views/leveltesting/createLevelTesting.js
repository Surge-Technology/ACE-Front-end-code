import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Col, Label, Card, CardBody, Row, Input, FormGroup, Button, Media, Spinner } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Axios from "../../hoc/axiosConfig";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import moment from 'moment/moment';
import Select from 'react-select'; 
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import emptyimage from "../../assets/images/avatars/userempty.jpg";
let dateToday = moment(new Date()).format("YYYY-MM-DD");
const createLevelTesting = () => {
  const [state, setState] = useState({ startDate: new Date(), master: null,program:null, class: null, loader: false });
  const [programOptions, setProgramOptions] = useState([]);
  const [masterOptions, setMasterOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [attendenceTime, setAttendenceTime] = useState("");
  const [attendenceStartTime, setAttendenceStartTime] = useState("");
  const [studentAttendenceList, setStudentAttendenceList] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);
  const [selectrow, setSelectrow] = useState(false);
  const [selectrows, setSelectrows] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    //getAllMasters();
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    axios.get(`${process.env.REACT_APP_BASE_URL_BASE}api/program-names`)
      .then((res) => {
        console.log("program-names",res)
        let programs = []
        res.data.map((key, index) => {
          programs.push({ value: key.id, label: key.name });
        })
        setProgramOptions(programs)
      }).catch((err) => {
        if (err.response.status === 401) {
          Swal.fire('401 session expired..!', 'Please re-login');
        }
        else {
          Swal.fire('Oops, something went wrong. Please try again later');
        }
      })
  }, []);
  const initialValues = {
    startDate: state.startDate,
    master: state.master,
    class: state.class,
  }
  const setStartDate = (date, values) => {
    values.startDate = date;
    setState({ ...values });
    console.log("date",date)
   // return
   // {{url}}/api/student-statuses/2023-10-05
   let dat = moment(date).format("YYYY-MM-DD")
    Axios.get(`student-statuses/${dat}`).then(response => {
     console.log("ress",response)
     setStudentAttendenceList(response.data);
    }).catch((err) => {
      Swal.fire(err , 'Please try again later');
    })
  }
  // const AttendenceSchema = () => Yup.object().shape({
  //   master: Yup.object().required('Master is Required'),
  //   class: Yup.object().required('Class is Required'),
  // });
  const getmasterId = (data) => { classDependable(data.value) }
  const classDependable = (id) => {
    Axios.get(`user/${id}/batch`).then(response => {
      let batchArray = [];
      response.data.map((mapdata, index) => {
        batchArray.push({ value: mapdata.id, label: mapdata.name });
      })
      setClassOptions(batchArray);
      setAttendenceTime("");
      setStudentAttendenceList([]);
      setState({ ...state, class: null });
    }).catch((err) => {
      Swal.fire(err.response.data.message, 'Please try again later');
    })
  }
  const getMastersByprogram =(e,name)=>{
    //console.log("getMastersByprogram",e,name)
    //api/program-names/26/users
      Axios.get(`program-names/${e.value}/users`).then(response => {
        console.log("resss",response)
        let staffArray = []
        response.data.map((key, index) => {
          staffArray.push({ value: key.id, label: `${key.firstName} ${key.lastName}` });
        })
        setState({ ...state });
        console.log("staffArray",staffArray)
        setMasterOptions(staffArray);
      }).catch((err) => { })
  }
  const getclassId = (data) => { studentDependable(data.value) }
  const studentDependable = (id) => {
    state.loader = true;
    setState({ ...state });
    Axios.get(`batch/${id}/student`).then(response => {
        console.log("ress",response)
        state.loader = false;
        setState({ ...state });
        setAttendenceStartTime(response.data[0].batch.startTime);
        setAttendenceTime(`${moment(response.data[0].batch.startTime, ["HH:mm"]).format("hh:mm a")} - ${moment(response.data[0].batch.endTime, ["HH:mm"]).format("hh:mm a")}`);
        setStudentAttendenceList(response.data);
      }).catch((err) => {
      Swal.fire(err.response.data.message, 'Please try again later');
      state.loader = false;
      setState({ ...state });
    })
  }

  // const selectedRow = {
  //   mode: 'checkbox',
  //   showOnlySelected: true,
  //   onSelect: (row, isSelect, rowIndex, e) => {
  //     setSelectrow(isSelect);
  //     let singleArray = studentDetails;
  //     if (isSelect === true) {
  //       singleArray.push(row);
  //       let singleDetails = [];
  //       singleArray.map((student, index) => {
  //         singleDetails.push({ id: student.id, firstName: student.firstName, lastName: student.lastName, dob: student.dob, gender: student.gender, photo: student.photo, phone: student.phone, email: student.email, studentAttendance: student.studentAttendance });
  //       })
  //       c
  //     } else {
  //       singleArray.map((student, index) => {
  //         if (row.id == student.id) {
  //           singleArray.splice(index, 1);
  //         }
  //       })
  //     }
  //   },
  //   onSelectAll: (isSelect, rows, e) => {
  //     setSelectrows(isSelect);
  //     if (isSelect) {
  //       let details = []
  //       rows.map((student, index) => {
  //         details.push({ id: student.id, firstName: student.firstName, lastName: student.lastName, dob: student.dob, gender: student.gender, photo: student.photo, phone: student.phone, email: student.email, studentAttendance: student.studentAttendance });
  //       })
  //       setStudentDetails(details);
  //     }
  //     else {
  //     }
  //   }
  // }
  const selectedRow = {
    mode: 'checkbox',
    showOnlySelected: true,
    onSelect: (row, isSelected, rowIndex, e) => {
      setSelectrow(isSelected);
        if (isSelected) {
        const data = studentDetails
        data.push(row)
        setStudentDetails(data);
        // setState((prevState)=>({
        //   ...prevState,selectedStudents:data
        // }))
      } else {
        const selectedData= []
        studentDetails.map((mapdata,index)=>{
          if(mapdata.studentId!==row.studentId){
            selectedData.push(mapdata)
          }
        })
        setTimeout(() => {
          // setState((prevState)=>({
          //   ...prevState,selectedStudents:selectedData
          // }))
           if(selectedData.length===0){
             setSelectrows(false);
          } 
          setStudentDetails(selectedData);
        }, 500);
      }
    },
    onSelectAll: (isSelect, rows, e) => {
      setSelectrows(isSelect);
     
      if (isSelect) {
        // setState((prevState)=>({
        //   ...prevState,
        //   selectedStudents:rows
        // }))
        setStudentDetails(rows);
      }
      
     if (!isSelect)  {
        // setState((prevState)=>({
        //   ...prevState,
        //   selectedStudents:[]
        // }))
        setStudentDetails([]);
      }
    }
  };
  const pictureFormat = (picture) => {
    let studentPicture = picture === null ? emptyimage : `${process.env.REACT_APP_BASE_URL_BASE}auth/student/image/${picture}`;
    return (
      <Media>
        <Media src={studentPicture} id="mediastyle" />
      </Media>
    )
  }
  const attendenceSubmit = (values) => {
    console.log("submit",values,studentDetails)
    let payload = []
      studentDetails.map((mapdat,index)=>{
          payload.push({
            "levelId": mapdat.currentLevel?mapdat.currentLevel.id:null,
            "studentId": mapdat.studentId,
            "certificateName": mapdat.certificate.backgroundPhoto?mapdat.certificate.backgroundPhoto:null
          })
      })
      console.log("payload",payload)
      setTimeout(() => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    axios.post(`${process.env.REACT_APP_BASE_URL}/level-testing/promote`, payload)
      .then((res) => {
         if (res.status === 201) {
          toast.success("Successfully", { theme: "colored" });
          setSelectrows(false);
          setSelectrow(false);
          setStudentDetails([])
        }
      }).catch((err) => {
        if (err.response.status === 401) {
          Swal.fire('401 session expired..!', 'Please re-login');
        }
        else {
          console.log(err.response.data.message)
          Swal.fire('Please try again later');
        }
      })
      }, 500);
    return
    // let payload = {
    //   studentAttendanceDate: values.startDate ? moment(values.startDate).format("YYYY-MM-DD") : values.startDate,
    //   studentAttendanceTime: attendenceStartTime,
    //   student: studentDetails
    // }
    // axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    // axios.post(`${process.env.REACT_APP_BASE_URL}/user/${values.master.value}/batch/${values.class.value}/studentAttendance`, payload)
    //   .then((res) => {
    //      if (res.status === 201) {
    //       toast.success("Attendence done successfully", { theme: "colored" });
    //       setTimeout(() => {
    //         navigate('/attendence/createstaffattendence/new');
    //       }, 1000);
    //     }
    //   }).catch((err) => {
    //     if (err.response.status === 401) {
    //       Swal.fire('401 session expired..!', 'Please re-login');
    //     }
    //     else {
    //       Swal.fire(err.response.data.message, 'Please try again later');
    //     }
    //   })
  }
  
  const displaycurrentLevel = (cell, row) => {
    return (<span>{row.currentLevel.name? row.currentLevel.name : null}</span>);
  }
  const displaynextLevel = (cell, row) => {
    return (<span>{row.nextLevel.name? row.nextLevel.name : null}</span>);
  }
  const sublevelsCheckboxHandleChange=(check)=>{
    console.log("check",check)
  }
  const displaysubLevels = (cell, row) => {
   
    let name ='';
    if(row.subLevels ){
      row.subLevels.map((mapdat,index)=>{
          if(index===0){
              name=mapdat.shortName
          }else{
              name=name+", "+mapdat.shortName 
          }
      })
   }
   return name
    
      for (let i = 0; i < row.subLevels; i++) {
        return   <h1>tg</h1>
      }
      return
          row.subLevels.map((mapdata,index)=>(
          <div key={row.studentName+index}> 
      {console.log("mapdat",mapdata)} 
                  <Input type="checkbox" name={mapdata.shortName} value={false} onChange={sublevelsCheckboxHandleChange}/> <Label check ><span>{mapdata.shortName}</span></Label>     
              </div>
      ))
     
   
  }
  return (
    <> 
      <ToastContainer />
      {state.loader ? <Spinner
        className='loaderr'
        color="primary"
      >
        Loading...
      </Spinner> : null}
      <Card >
        <CardBody className='cardbg'>
          <h4><strong>Belt Testing ({dateToday})</strong></h4>
          <Card className='attendencecard' >
            <Formik
              enableReinitialize="true"
              initialValues={initialValues}
            //  validationSchema={AttendenceSchema}
              onSubmit={attendenceSubmit}
            >
              {({ values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty, setFieldValue }) => (
                <Form className="add-edit-user-form" onSubmit={handleSubmit}>
                  <Row>
                    {/* <Col md={2}>
                      <FormGroup>
                        <Label for="startDate" >Date</Label>
                        <DatePicker
                          className='studentsattendancecolor'
                          name="startDate"
                          selected={values.startDate ? new Date(values.startDate) : null}
                          onChange={(date) => setStartDate(date, values)}
                          placeholderText="mm/dd/yyyy"
                          disabled="true"
                        />
                      </FormGroup>
                    </Col> */}
                     <Col md={3}>
                     <FormGroup>
                        <Label for="startDate" >Search By Date</Label>
                        <DatePicker
                          className='studentsattendancecolor'
                          name="startDate"
                          selected={values.startDate ? new Date(values.startDate) : null}
                          onChange={(date) => setStartDate(date, values)}
                          placeholderText="mm/dd/yyyy"
                          />
                      </FormGroup>
                    </Col>  
                    {/* <Col md={3}>
                      <FormGroup>
                        <Label for="master">Master</Label> 
                        <Select
                          name="master"
                          value={values.master}
                          options={masterOptions}
                          onChange={(selectedOption) => { setFieldValue('master', selectedOption), getmasterId(selectedOption, 'master'), setFieldValue("class", null) }}
                          invalid={touched.master && !!errors.master}
                        />
                        <ErrorMessage name="master" component="div" className='errmsg'></ErrorMessage>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="class">Class</Label>
                        <Select
                          name="class"
                          value={values.class}
                          options={classOptions}
                          onChange={(selectedOption) => { setFieldValue('class', selectedOption), getclassId(selectedOption, 'class') }}
                          invalid={touched.class && !!errors.class}
                        />
                        <ErrorMessage name="class" component="div" className='errmsg'></ErrorMessage>
                      </FormGroup>
                    </Col> */}
                     
                    <Col md={2}>
                      <FormGroup style={{marginTop:"10px"}}>
                        <Button className="markasbutton" type="submit" disabled={selectrow !== true && selectrows !== true ? true : false}>Promote</Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Card>
          <hr />
          
          <Row className='rowborder'>
            <Card className='marginStyleForTablee'>
              <BootstrapTable data={studentAttendenceList} selectRow={selectedRow} keyField="studentId" search tableContainerClass='studenttablescro' multiColumnSearch="true">
                <TableHeaderColumn width="5" dataField='studentId' hidden >unique field</TableHeaderColumn>
                <TableHeaderColumn   dataField='studentName'>Student Name</TableHeaderColumn>
                <TableHeaderColumn dataField='currentLevel' dataFormat={displaycurrentLevel}>Current Level</TableHeaderColumn>
                <TableHeaderColumn dataField='nextLevel' dataFormat={displaynextLevel} >Next Level</TableHeaderColumn>
                <TableHeaderColumn dataField='phone' dataFormat={displaysubLevels} >Tip</TableHeaderColumn>
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
export default createLevelTesting;