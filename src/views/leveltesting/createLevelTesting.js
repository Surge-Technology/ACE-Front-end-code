import React,{useState,memo, useEffect, useRef} from 'react'
import { useNavigate } from "react-router-dom";
import { Col, Label,Card,CardBody,CardFooter, Row,Input, Button,Spinner   } from "reactstrap";
import { Formik,Form ,  ErrorMessage, } from "formik";
import * as Yup from 'yup';
import Select from 'react-select';
 import Axios from "../../hoc/axiosConfig";
import Swal from 'sweetalert2';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import moment from 'moment/moment';
import "./createLevelTesting.css"; 
import html2canvas from "html2canvas";
 const levelTestingFields={selectName:"",nameOptions:[],selectStudent:"",studentOptions:[],createdDate:"",firstCriteria:"",
secondCriteria:"",thirdCriteria:"",firstCriteriaOptions:"",secondCriteriaOptions:"",thirdCriteriaOptions:"",setStatus:"",notes:"",setStatusOptions:"",loader:false,
certificateData:"",imageName:"",message:"",modaltoggle:false,newImage:"",CurriculumFileData:"",CurriculumFileName:""}
const createLevelTesting = () => {
  const [levelTestData,setState] =useState(levelTestingFields);
  const{selectName,nameOptions,selectStudent,studentOptions,createdDate,firstCriteria,secondCriteria,thirdCriteria,
    firstCriteriaOptions, secondCriteriaOptions,thirdCriteriaOptions,setStatus,notes,setStatusOptions,loader,
    certificateData,imageName,message,modaltoggle,newImage,CurriculumFileData,CurriculumFileName}=levelTestData;
  const navigate = useNavigate();
  const RefObject = useRef(null);
   const ValidationSchema = () => Yup.object().shape({
    selectName: Yup.object().required('Name is Required'),
     selectStudent: Yup.object().required('Student is Required'),
    createdDate: Yup.string().required('Birth date is Required'),
    firstCriteria: Yup.object().required('First Criteria is Required'),
    secondCriteria: Yup.object().required('Second Criteria is Required'),
    thirdCriteria: Yup.object().required('Third Criteria is Required'),
    setStatus: Yup.object().required('Set Status is Required'),
    notes: Yup.string().required('Notes is Required'),
   });
   const useEffectApis =()=>{
    Axios.get("/level").then((res)=>{
      console.log("level",res)
       let level =[]
      res.data.map((levelData)=>{
        level.push({ value: levelData.id, label: levelData.name })
      })  
      setState((prevState)=>({
        ...prevState,
        nameOptions:level
      }))
    }).catch((err)=>{
      Swal.fire( err.response.data.message, 'Please try again '  ) 
    })
    Axios.get("/level-testing/first-criteria").then((res)=>{
       let firstList =[]
      res.data.map((first)=>{
        firstList.push({ value: first.id, label: first.rating })
      })  
      setState((prevState)=>({
        ...prevState,
        firstCriteriaOptions:firstList
      }))
    }).catch((err)=>{
      Swal.fire( err.response.data.message, 'Please try again '  ) 
    })
    Axios.get("/level-testing/second-criteria").then((res)=>{
       let secondList =[]
      res.data.map((first)=>{
        secondList.push({ value: first.id, label: first.rating })
      })  
      setState((prevState)=>({
        ...prevState,
        secondCriteriaOptions:secondList
      }))
    }).catch((err)=>{
      Swal.fire( err.response.data.message, 'Please try again '  ) 
    })
    Axios.get("/level-testing/third-criteria").then((res)=>{
       let thirdList =[]
      res.data.map((first)=>{
        thirdList.push({ value: first.id, label: first.rating })
      })  
      setState((prevState)=>({
        ...prevState,
        thirdCriteriaOptions:thirdList
      }))
    }).catch((err)=>{
      Swal.fire( err.response.data.message, 'Please try again '  ) 
    })
    Axios.get("/level-testing/level-testing-status").then((res)=>{
      let statusList =[]
      res.data.map((first)=>{
        statusList.push({ value: first.id, label: first.name })
      })  
      setState((prevState)=>({
        ...prevState,
        setStatusOptions:statusList
      }))
    }).catch((err)=>{
      Swal.fire( err.response.data.message, 'Please try again '  ) 
    })
   }
  useEffect(()=>{
    useEffectApis();
  },[])
  const downloadCertificate=()=>{
    setState((prevState)=>({
    ...prevState,selectName:"",selectStudent:"",createdDate:"",firstCriteria:"",secondCriteria:"",thirdCriteria:"",setStatus:""
   }))
   useEffectApis();
  }
  const dataURLtoBlob = (dataURI) => {
    const binaryString = window.atob(dataURI.split(",")[1]);
    const mimeType = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeType });
  };
 const submittingValues=(e,imagename)=>{
  let payload = {
    "date":moment(e.createdDate).format("YYYY-MM-DD"),
    "note":e.notes,
    "certificateName": imagename
  }

  let formdata = new FormData();
  formdata.append('date', moment(e.createdDate).format("YYYY-MM-DD"));
  formdata.append('note',"payload");
  formdata.append('certificateName',imagename);
  formdata.append('curriculum',CurriculumFileData.target.files[0]);
  //level-testing/level/119/first-criteria/86/second-criteria/89/third-criteria/95/level-testing-status/80/student/117
  axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token");
  axios.post(`${process.env.REACT_APP_BASE_URL}/level-testing/level/${e.selectName.value}/first-criteria/${e.firstCriteria.value}/second-criteria/${e.secondCriteria.value}/third-criteria/${e.thirdCriteria.value}/level-testing-status/${e.setStatus.value}/student/${e.selectStudent.value}`,formdata).then((res)=>{
     console.log("res",res);
    toast.success("Level Created Successfully", { theme: "colored" })  
     setState((prevState)=>({...prevState,loader:false}));
     setTimeout(() => {
      downloadCertificate();
    }, 500);            
  }).catch(err=>{
    console.log("err",err)
     setState((prevState)=>({...prevState,loader:false}));
    Swal.fire(
      err.response.data.message,
       'Please try again '
    )
  })
 }
  const submitLevelTesting =async(e)=>{ 
    setState((prevState)=>({...prevState,loader:true,modaltoggle:true}));
    if(setStatus.label==="Pass"){
      const canvas = await html2canvas(RefObject.current,{allowTaint: true,useCORS:true});
      const image = canvas.toDataURL("image/jpeg", 1.0);
      var blob = dataURLtoBlob(image);
    let file = new File([blob], selectStudent.label+".jpeg", { type: "image/jpeg" })
    let formdata = new FormData();
    formdata.append('image',file);
     axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token");
      axios.post(`${process.env.REACT_APP_BASE_URL}/level-testing/image/upload`,formdata).then((res)=>{
        submittingValues(e,res.data.imageName);
       }).catch(err=>{
           Swal.fire(
            err.response.data.message,
            'Please try again '
          )
      })
    }else{
      submittingValues(e,null);
    }    
  }
  const selectFieldHandleChange= (name,selectedData)=>{
   if(name==="selectName"){
        Axios.get(`/level/${selectedData.value}/student-status`).then((res)=>{
          let stList =[]
          res.data.map((studentData)=>{
            stList.push({ value: studentData.student.id, label:  `${studentData.student.firstName} ${studentData.student.lastName}` })
          })  
          let finalData=res.data===[]?[{ value: "no data ", label:"No students for this level"}]:stList;
          setState((prevState)=>({
            ...prevState,
            studentOptions:finalData,selectName:selectedData
          }))
      }).catch((err)=>{
        Swal.fire( err.response.data.message, 'Please try again '  ) 
      })
    }
    if(name==="selectStudent"){
      Axios.get(`/certificate/level/${selectName.value}`).then((res)=>{
        if(res.data.length===0){
          Swal.fire({
            position : 'center',
            icon     : 'info',
            title    : `Certificate Template doesn't exists with ${selectName.label}..!`,
            showConfirmButton: false,
            timer    : 2000
          })
        }else{
          setState((prevState)=>({
            ...prevState,
            certificateData:res.data[res.data.length-1],
            imageName:res.data[res.data.length-1].backgroundPhoto,
            message:res.data[res.data.length-1].templateBody,
            selectStudent:selectedData
          }))
        } 
      }).catch((err)=>{
        Swal.fire( err.response.data.message, 'Please try again '  ) 
      })
    }else{
      setState((prevState)=>({
        ...prevState,
         [name]:selectedData
      }))
    }
  }
  const createdDateHandleChange = (date)=>{
    setState((prevState)=>({
      ...prevState,
      createdDate:date, 
    })) 
  }
  const modaltoggleHandle=()=>{
    setState((prevState)=>({
      ...prevState,
      modaltoggle:!modaltoggle
    }))
  }
  const CurriculumFileHandleChange=(e)=>{
     // // let file =URL.createObjectURL(e.target.files[0]);
    // // setStudentImage(file);
    //  let formdata = new FormData();
    // formdata.append('image', e.target.files[0]);
    //  axios.defaults.headers.common['Authorization'] =  "Bearer " + localStorage.getItem("token");
    // axios.post(`${process.env.REACT_APP_BASE_URL}/student/image/upload`,formdata).then((res)=>{
    //   //console.log("ci",res)
       setState((prevState)=>({
        ...prevState,
        CurriculumFileData:e,CurriculumFileName:e.target.files[0].name
      })) 
    // }).catch(err=>{
    //   Swal.fire(err.response.data.message,'Please try again later');
    // })  
  }
  return (
    <> 
     {loader?<Spinner
      className='loaderr'
       color="primary"
      > 
      Loading...
    </Spinner>:null} 
    <ToastContainer /> 
      <Card className='cardm'>
          <CardBody className='cardbg' >
            <Formik
              enableReinitialize={true}
              initialValues={levelTestData}
              validationSchema={ValidationSchema}
              onSubmit={submitLevelTesting} 
              >           
            {({ values,setFieldValue,handleChange,handleSubmit,handleBlur,errors,touched }) => (
              <Form onSubmit={handleSubmit} >
                <Card className='cardbgw'>                           
                  <CardBody>
                    <Row>
                    <h4><strong>Level Testing</strong></h4>
                      <Row>
                        <Col md={12}>
                        <Label for="selectName">Name</Label>
                        <Select
                          name="selectName"
                           value={selectName}
                          onChange={(e)=>{setFieldValue("selectName",e),selectFieldHandleChange("selectName",e)}}
                          options={nameOptions}
                          />
                        <ErrorMessage name="selectName" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                        <Label for="selectStudent">Student</Label>
                        <Select
                          name="selectStudent"
                          value={selectStudent}
                          onChange={(e)=>{setFieldValue("selectStudent",e),selectFieldHandleChange("selectStudent",e)}}
                          options={studentOptions}
                          />
                        <ErrorMessage name="selectStudent" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                        <Col md={4}>
                          <Label> Date <span className='colorRed'>*</span></Label>
                             <DatePicker
                              name="createdDate"
                              selected={values.createdDate?new Date(values.createdDate):null}
                              onChange={(date) => createdDateHandleChange(date)}
                              placeholderText="mm/dd/yyyy"
                            />
                          <ErrorMessage name="createdDate" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Label for="firstCriteria"> First Criteria </Label>
                          <Select
                          name="firstCriteria"
                          value={firstCriteria}
                          onChange={(e)=>{setFieldValue("firstCriteria",e),selectFieldHandleChange("firstCriteria",e)}}
                          options={firstCriteriaOptions}
                          />
                          <ErrorMessage name="firstCriteria" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                        <Col md={4}>
                          <Label for="secondCriteria"> Second Criteria </Label>
                          <Select
                          name="secondCriteria"
                          value={secondCriteria}
                          onChange={(e)=>{setFieldValue("secondCriteria",e),selectFieldHandleChange("secondCriteria",e)}}
                          options={secondCriteriaOptions}
                          />
                          <ErrorMessage name="secondCriteria" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                        <Col md={4}>
                          <Label for="thirdCriteria" > Third Criteria </Label>
                          <Select
                          name="thirdCriteria"
                          value={thirdCriteria}
                          onChange={(e)=>{setFieldValue("thirdCriteria",e),selectFieldHandleChange("thirdCriteria",e)}}
                          options={thirdCriteriaOptions}
                          />
                          <ErrorMessage name="thirdCriteria" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                        <Label for="setStatus" > Set Status </Label>
                          <Select
                            name="setStatus"
                            value={setStatus}
                            onChange={(e)=>{setFieldValue("setStatus",e),selectFieldHandleChange("setStatus",e)}}
                            options={setStatusOptions}
                          />
                          <ErrorMessage name="setStatus" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                        <Col md={2}>
                          <Row>
                            <Col>
                              <Label for="setStatus" >Curriculum File</Label>
                            <span className="btn btn-primary btn-file">
                              Upload <input type="file"  onChange={(e) =>CurriculumFileHandleChange(e)}  />
                            </span>
                            </Col>
                          </Row>
                          <Row>
                            {CurriculumFileName}
                          </Row>
                         </Col>
                        <Col md={7}>
                          <Label for="notes"> Notes </Label>
                          <Input name="notes" type="text" value={values.notes} onChange={(handleChange)} onBlur={handleBlur}/>
                          <ErrorMessage name="notes" component="div"  className='errmsg'></ErrorMessage>
                        </Col>
                      </Row>
                    </Row> 
                  </CardBody>
                      <CardFooter className='centerTextalign'>
                        <Button type="button" color='secondary' className='btnbg' size="sm"  >Cancel</Button>
                        <Button type="submit" color='primary'  size="sm"  >Save</Button>
                      </CardFooter>      
                </Card>
              </Form>
            )}
            </Formik>
          </CardBody>
      </Card>  
    { setStatus.label==="Pass"? <div>
           <div ref={RefObject}  className="AppTest" >
            <div id="downloadWrapperTest">
              <div id="certificateWrapperTest">
                <p className='nameTest'>{selectStudent.label}</p>
                <img src={imageName!==""?process.env.REACT_APP_BASE_URL_BASE+"auth/certificate/image/"+imageName:null}  alt="Certificate"  />
                <span className='bodyCopyTest'>{message}</span>
              </div>
            </div>
          </div>  
      </div>
      :null} 
    </>
  )
}

export default createLevelTesting