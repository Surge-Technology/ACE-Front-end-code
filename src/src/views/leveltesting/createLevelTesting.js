// import React,{useState,memo, useEffect, useRef} from 'react'
// import { useNavigate } from "react-router-dom";
// import { Col, Label,Card,CardBody,CardFooter, Row,Input, Button,Spinner   } from "reactstrap";
// import { Formik,Form ,  ErrorMessage, } from "formik";
// import * as Yup from 'yup';
// import Select from 'react-select';
//  import Axios from "../../hoc/axiosConfig";
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import DatePicker from "react-datepicker";
// import moment from 'moment/moment';
// import "./createLevelTesting.css"; 
// import html2canvas from "html2canvas";
//  const levelTestingFields={selectName:"",nameOptions:[],selectStudent:"",studentOptions:[],createdDate:"",firstCriteria:"",
// secondCriteria:"",thirdCriteria:"",firstCriteriaOptions:"",secondCriteriaOptions:"",thirdCriteriaOptions:"",setStatus:"",notes:"",setStatusOptions:"",loader:false,
// certificateData:"",imageName:"",message:"",modaltoggle:false,newImage:"",CurriculumFileData:"",CurriculumFileName:""}
// const createLevelTesting = () => {
//   const [levelTestData,setState] =useState(levelTestingFields);
//   const{selectName,nameOptions,selectStudent,studentOptions,createdDate,firstCriteria,secondCriteria,thirdCriteria,
//     firstCriteriaOptions, secondCriteriaOptions,thirdCriteriaOptions,setStatus,notes,setStatusOptions,loader,
//     certificateData,imageName,message,modaltoggle,newImage,CurriculumFileData,CurriculumFileName}=levelTestData;
//   const navigate = useNavigate();
//   const RefObject = useRef(null);
//    const ValidationSchema = () => Yup.object().shape({
//     selectName: Yup.object().required('Name is Required'),
//      selectStudent: Yup.object().required('Student is Required'),
//     createdDate: Yup.string().required('Birth date is Required'),
//     firstCriteria: Yup.object().required('First Criteria is Required'),
//     secondCriteria: Yup.object().required('Second Criteria is Required'),
//     thirdCriteria: Yup.object().required('Third Criteria is Required'),
//     setStatus: Yup.object().required('Set Status is Required'),
//     notes: Yup.string().required('Notes is Required'),
//    });
//    const useEffectApis =()=>{
//     Axios.get("/level").then((res)=>{
//       console.log("level",res)
//        let level =[]
//       res.data.map((levelData)=>{
//         level.push({ value: levelData.id, label: levelData.name })
//       })  
//       setState((prevState)=>({
//         ...prevState,
//         nameOptions:level
//       }))
//     }).catch((err)=>{
//       Swal.fire( err.response.data.message, 'Please try again '  ) 
//     })
//     Axios.get("/level-testing/first-criteria").then((res)=>{
//        let firstList =[]
//       res.data.map((first)=>{
//         firstList.push({ value: first.id, label: first.rating })
//       })  
//       setState((prevState)=>({
//         ...prevState,
//         firstCriteriaOptions:firstList
//       }))
//     }).catch((err)=>{
//       Swal.fire( err.response.data.message, 'Please try again '  ) 
//     })
//     Axios.get("/level-testing/second-criteria").then((res)=>{
//        let secondList =[]
//       res.data.map((first)=>{
//         secondList.push({ value: first.id, label: first.rating })
//       })  
//       setState((prevState)=>({
//         ...prevState,
//         secondCriteriaOptions:secondList
//       }))
//     }).catch((err)=>{
//       Swal.fire( err.response.data.message, 'Please try again '  ) 
//     })
//     Axios.get("/level-testing/third-criteria").then((res)=>{
//        let thirdList =[]
//       res.data.map((first)=>{
//         thirdList.push({ value: first.id, label: first.rating })
//       })  
//       setState((prevState)=>({
//         ...prevState,
//         thirdCriteriaOptions:thirdList
//       }))
//     }).catch((err)=>{
//       Swal.fire( err.response.data.message, 'Please try again '  ) 
//     })
//     Axios.get("/level-testing/level-testing-status").then((res)=>{
//       let statusList =[]
//       res.data.map((first)=>{
//         statusList.push({ value: first.id, label: first.name })
//       })  
//       setState((prevState)=>({
//         ...prevState,
//         setStatusOptions:statusList
//       }))
//     }).catch((err)=>{
//       Swal.fire( err.response.data.message, 'Please try again '  ) 
//     })
//    }
//   useEffect(()=>{
//     useEffectApis();
//   },[])
//   const downloadCertificate=()=>{
//     setState((prevState)=>({
//     ...prevState,selectName:"",selectStudent:"",createdDate:"",firstCriteria:"",secondCriteria:"",thirdCriteria:"",setStatus:""
//    }))
//    useEffectApis();
//   }
//   const dataURLtoBlob = (dataURI) => {
//     const binaryString = window.atob(dataURI.split(",")[1]);
//     const mimeType = dataURI.split(",")[0].split(":")[1].split(";")[0];
//     const arrayBuffer = new ArrayBuffer(binaryString.length);
//     const uint8Array = new Uint8Array(arrayBuffer);
//     for (let i = 0; i < binaryString.length; i++) {
//       uint8Array[i] = binaryString.charCodeAt(i);
//     }
//     return new Blob([arrayBuffer], { type: mimeType });
//   };
//  const submittingValues=(e,imagename)=>{
//   let payload = {
//     "date":moment(e.createdDate).format("YYYY-MM-DD"),
//     "note":e.notes,
//     "certificateName": imagename
//   }

//   let formdata = new FormData();
//   formdata.append('date', moment(e.createdDate).format("YYYY-MM-DD"));
//   formdata.append('note',"payload");
//   formdata.append('certificateName',imagename);
//   formdata.append('curriculum',CurriculumFileData.target.files[0]);
//   //level-testing/level/119/first-criteria/86/second-criteria/89/third-criteria/95/level-testing-status/80/student/117
//   axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token");
//   axios.post(`${process.env.REACT_APP_BASE_URL}/level-testing/level/${e.selectName.value}/first-criteria/${e.firstCriteria.value}/second-criteria/${e.secondCriteria.value}/third-criteria/${e.thirdCriteria.value}/level-testing-status/${e.setStatus.value}/student/${e.selectStudent.value}`,formdata).then((res)=>{
//      console.log("res",res);
//     toast.success("Level Created Successfully", { theme: "colored" })  
//      setState((prevState)=>({...prevState,loader:false}));
//      setTimeout(() => {
//       downloadCertificate();
//     }, 500);            
//   }).catch(err=>{
//     console.log("err",err)
//      setState((prevState)=>({...prevState,loader:false}));
//     Swal.fire(
//       err.response.data.message,
//        'Please try again '
//     )
//   })
//  }
//   const submitLevelTesting =async(e)=>{ 
//     setState((prevState)=>({...prevState,loader:true,modaltoggle:true}));
//     if(setStatus.label==="Pass"){
//       const canvas = await html2canvas(RefObject.current,{allowTaint: true,useCORS:true});
//       const image = canvas.toDataURL("image/jpeg", 1.0);
//       var blob = dataURLtoBlob(image);
//     let file = new File([blob], selectStudent.label+".jpeg", { type: "image/jpeg" })
//     let formdata = new FormData();
//     formdata.append('image',file);
//      axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token");
//       axios.post(`${process.env.REACT_APP_BASE_URL}/level-testing/image/upload`,formdata).then((res)=>{
//         submittingValues(e,res.data.imageName);
//        }).catch(err=>{
//            Swal.fire(
//             err.response.data.message,
//             'Please try again '
//           )
//       })
//     }else{
//       submittingValues(e,null);
//     }    
//   }
//   const selectFieldHandleChange= (name,selectedData)=>{
//    if(name==="selectName"){
//         Axios.get(`/level/${selectedData.value}/student-status`).then((res)=>{
//           let stList =[]
//           res.data.map((studentData)=>{
//             stList.push({ value: studentData.student.id, label:  `${studentData.student.firstName} ${studentData.student.lastName}` })
//           })  
//           let finalData=res.data===[]?[{ value: "no data ", label:"No students for this level"}]:stList;
//           setState((prevState)=>({
//             ...prevState,
//             studentOptions:finalData,selectName:selectedData
//           }))
//       }).catch((err)=>{
//         Swal.fire( err.response.data.message, 'Please try again '  ) 
//       })
//     }
//     if(name==="selectStudent"){
//       Axios.get(`/certificate/level/${selectName.value}`).then((res)=>{
//         if(res.data.length===0){
//           Swal.fire({
//             position : 'center',
//             icon     : 'info',
//             title    : `Certificate Template doesn't exists with ${selectName.label}..!`,
//             showConfirmButton: false,
//             timer    : 2000
//           })
//         }else{
//           setState((prevState)=>({
//             ...prevState,
//             certificateData:res.data[res.data.length-1],
//             imageName:res.data[res.data.length-1].backgroundPhoto,
//             message:res.data[res.data.length-1].templateBody,
//             selectStudent:selectedData
//           }))
//         } 
//       }).catch((err)=>{
//         Swal.fire( err.response.data.message, 'Please try again '  ) 
//       })
//     }else{
//       setState((prevState)=>({
//         ...prevState,
//          [name]:selectedData
//       }))
//     }
//   }
//   const createdDateHandleChange = (date)=>{
//     setState((prevState)=>({
//       ...prevState,
//       createdDate:date, 
//     })) 
//   }
//   const modaltoggleHandle=()=>{
//     setState((prevState)=>({
//       ...prevState,
//       modaltoggle:!modaltoggle
//     }))
//   }
//   const CurriculumFileHandleChange=(e)=>{
//      // // let file =URL.createObjectURL(e.target.files[0]);
//     // // setStudentImage(file);
//     //  let formdata = new FormData();
//     // formdata.append('image', e.target.files[0]);
//     //  axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token");
//     // axios.post(`${process.env.REACT_APP_BASE_URL}/student/image/upload`,formdata).then((res)=>{
//     //   //console.log("ci",res)
//        setState((prevState)=>({
//         ...prevState,
//         CurriculumFileData:e,CurriculumFileName:e.target.files[0].name
//       })) 
//     // }).catch(err=>{
//     //   Swal.fire(err.response.data.message,'Please try again later');
//     // })  
//   }
//   return (
//     <> 
//      {loader?<Spinner
//       className='loaderr'
//        color="primary"
//       > 
//       Loading...
//     </Spinner>:null} 
//     <ToastContainer /> 
//       <Card className='cardm'>
//           <CardBody className='cardbg' >
//             <Formik
//               enableReinitialize={true}
//               initialValues={levelTestData}
//               validationSchema={ValidationSchema}
//               onSubmit={submitLevelTesting} 
//               >           
//             {({ values,setFieldValue,handleChange,handleSubmit,handleBlur,errors,touched }) => (
//               <Form onSubmit={handleSubmit} >
//                 <Card className='cardbgw'>                           
//                   <CardBody>
//                     <Row>
//                     <h4><strong>Level Testing</strong></h4>
//                       <Row>
//                         <Col md={12}>
//                         <Label for="selectName">Name</Label>
//                         <Select
//                           name="selectName"
//                            value={selectName}
//                           onChange={(e)=>{setFieldValue("selectName",e),selectFieldHandleChange("selectName",e)}}
//                           options={nameOptions}
//                           />
//                         <ErrorMessage name="selectName" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={8}>
//                         <Label for="selectStudent">Student</Label>
//                         <Select
//                           name="selectStudent"
//                           value={selectStudent}
//                           onChange={(e)=>{setFieldValue("selectStudent",e),selectFieldHandleChange("selectStudent",e)}}
//                           options={studentOptions}
//                           />
//                         <ErrorMessage name="selectStudent" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                         <Col md={4}>
//                           <Label> Date <span className='colorRed'>*</span></Label>
//                              <DatePicker
//                               name="createdDate"
//                               selected={values.createdDate?new Date(values.createdDate):null}
//                               onChange={(date) => createdDateHandleChange(date)}
//                               placeholderText="mm/dd/yyyy"
//                             />
//                           <ErrorMessage name="createdDate" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={4}>
//                           <Label for="firstCriteria"> First Criteria </Label>
//                           <Select
//                           name="firstCriteria"
//                           value={firstCriteria}
//                           onChange={(e)=>{setFieldValue("firstCriteria",e),selectFieldHandleChange("firstCriteria",e)}}
//                           options={firstCriteriaOptions}
//                           />
//                           <ErrorMessage name="firstCriteria" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                         <Col md={4}>
//                           <Label for="secondCriteria"> Second Criteria </Label>
//                           <Select
//                           name="secondCriteria"
//                           value={secondCriteria}
//                           onChange={(e)=>{setFieldValue("secondCriteria",e),selectFieldHandleChange("secondCriteria",e)}}
//                           options={secondCriteriaOptions}
//                           />
//                           <ErrorMessage name="secondCriteria" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                         <Col md={4}>
//                           <Label for="thirdCriteria" > Third Criteria </Label>
//                           <Select
//                           name="thirdCriteria"
//                           value={thirdCriteria}
//                           onChange={(e)=>{setFieldValue("thirdCriteria",e),selectFieldHandleChange("thirdCriteria",e)}}
//                           options={thirdCriteriaOptions}
//                           />
//                           <ErrorMessage name="thirdCriteria" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={3}>
//                         <Label for="setStatus" > Set Status </Label>
//                           <Select
//                             name="setStatus"
//                             value={setStatus}
//                             onChange={(e)=>{setFieldValue("setStatus",e),selectFieldHandleChange("setStatus",e)}}
//                             options={setStatusOptions}
//                           />
//                           <ErrorMessage name="setStatus" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                         <Col md={2}>
//                           <Row>
//                             <Col>
//                               <Label for="setStatus" >Curriculum File</Label>
//                             <span className="btn btn-primary btn-file">
//                               Upload <input type="file"  onChange={(e) =>CurriculumFileHandleChange(e)}  />
//                             </span>
//                             </Col>
//                           </Row>
//                           <Row>
//                             {CurriculumFileName}
//                           </Row>
//                          </Col>
//                         <Col md={7}>
//                           <Label for="notes"> Notes </Label>
//                           <Input name="notes" type="text" value={values.notes} onChange={(handleChange)} onBlur={handleBlur}/>
//                           <ErrorMessage name="notes" component="div"  className='errmsg'></ErrorMessage>
//                         </Col>
//                       </Row>
//                     </Row> 
//                   </CardBody>
//                       <CardFooter className='centerTextalign'>
//                         <Button type="button" color='secondary' className='btnbg' size="sm"  >Cancel</Button>
//                         <Button type="submit" color='primary'  size="sm"  >Save</Button>
//                       </CardFooter>      
//                 </Card>
//               </Form>
//             )}
//             </Formik>
//           </CardBody>
//       </Card>  
//     { setStatus.label==="Pass"? <div>
//            <div ref={RefObject}  className="AppTest" >
//             <div id="downloadWrapperTest">
//               <div id="certificateWrapperTest">
//                 <p className='nameTest'>{selectStudent.label}</p>
//                 <img src={imageName!==""?process.env.REACT_APP_BASE_URL_BASE+"auth/certificate/image/"+imageName:null}  alt="Certificate"  />
//                 <span className='bodyCopyTest'>{message}</span>
//               </div>
//             </div>
//           </div>  
//       </div>
//       :null} 
//     </>
//   )
// }

// export default createLevelTesting
 
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
  }
  const AttendenceSchema = () => Yup.object().shape({
    master: Yup.object().required('Master is Required'),
    class: Yup.object().required('Class is Required'),
  });
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
  const displayFullName = (cell, row) => {
    return (<span>{row ? `${row.firstName} ${row.lastName}` : null}</span>);
  }
  const selectedRow = {
    mode: 'checkbox',
    showOnlySelected: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelectrow(isSelect);
      let singleArray = studentDetails;
      if (isSelect === true) {
        singleArray.push(row);
        let singleDetails = [];
        singleArray.map((student, index) => {
          singleDetails.push({ id: student.id, firstName: student.firstName, lastName: student.lastName, dob: student.dob, gender: student.gender, photo: student.photo, phone: student.phone, email: student.email, studentAttendance: student.studentAttendance });
        })
        setStudentDetails(singleDetails);
      } else {
        singleArray.map((student, index) => {
          if (row.id == student.id) {
            singleArray.splice(index, 1);
          }
        })
      }
    },
    onSelectAll: (isSelect, rows, e) => {
      setSelectrows(isSelect);
      if (isSelect) {
        let details = []
        rows.map((student, index) => {
          details.push({ id: student.id, firstName: student.firstName, lastName: student.lastName, dob: student.dob, gender: student.gender, photo: student.photo, phone: student.phone, email: student.email, studentAttendance: student.studentAttendance });
        })
        setStudentDetails(details);
      }
      else {
      }
    }
  }
  const pictureFormat = (picture) => {
    let studentPicture = picture === null ? emptyimage : `${process.env.REACT_APP_BASE_URL_BASE}auth/student/image/${picture}`;
    return (
      <Media>
        <Media src={studentPicture} id="mediastyle" />
      </Media>
    )
  }
  const attendenceSubmit = (values) => {
    let payload = {
      studentAttendanceDate: values.startDate ? moment(values.startDate).format("YYYY-MM-DD") : values.startDate,
      studentAttendanceTime: attendenceStartTime,
      student: studentDetails
    }
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    axios.post(`${process.env.REACT_APP_BASE_URL}/user/${values.master.value}/batch/${values.class.value}/studentAttendance`, payload)
      .then((res) => {
         if (res.status === 201) {
          toast.success("Attendence done successfully", { theme: "colored" });
          setTimeout(() => {
            navigate('/attendence/createstaffattendence/new');
          }, 1000);
        }
      }).catch((err) => {
        if (err.response.status === 401) {
          Swal.fire('401 session expired..!', 'Please re-login');
        }
        else {
          Swal.fire(err.response.data.message, 'Please try again later');
        }
      })
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
              validationSchema={AttendenceSchema}
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
              <BootstrapTable data={studentAttendenceList} selectRow={selectedRow} keyField="id" search tableContainerClass='studenttablescro' multiColumnSearch="true">
                <TableHeaderColumn width="5" dataField='id' hidden >unique field</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='photo' dataFormat={pictureFormat}>Student Name</TableHeaderColumn>
                <TableHeaderColumn dataField='firstName' dataFormat={displayFullName}>Current Level</TableHeaderColumn>
                <TableHeaderColumn dataField='gender' >Next Level</TableHeaderColumn>
                <TableHeaderColumn dataField='phone' >Tip</TableHeaderColumn>
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