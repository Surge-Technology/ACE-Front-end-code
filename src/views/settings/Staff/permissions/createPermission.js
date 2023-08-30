import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import {BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
 import { Row,Col,Input, CardHeader,Label ,Button, Card, CardBody,CardFooter,FormFeedback,FormGroup} from "reactstrap";
 import Switch from "react-switch";
import * as Yup from 'yup';
 import {Formik,Form, ErrorMessage} from 'formik'
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
const Fields={  
    role_id:"", roleName:'' , array1:[],
   initialMenu:[
       {id:0,menu:"Select All",identifier:"selectall"},
       {id:1,menu:"Dashboard",identifier:"dashboard"},
       {id:2,menu:"Student Tab",identifier:"studentTab"},
       {id:3,menu:"Students",identifier:"students"},
       {id:4,menu:"Inquiries",identifier:"inquiries"},
       {id:5,menu:"Contracts",identifier:"contracts"},
       {id:6,menu:"Email Templates",identifier:"email_templates"},
       {id:7,menu:"Batches",identifier:"batches"},
        {id:8,menu:"Events",identifier:"events"},
       {id:9,menu:"Uses Tab",identifier:"usersTab"},
       {id:10,menu:"Permissions",identifier:"permissions"},
       {id:11,menu:"Users",identifier:"users"},
       {id:12,menu:"Certificates",identifier:"certificates"},
       {id:13,menu:"Level Testing",identifier:"levelTesting"},
       {id:14,menu:"Attendence Tab",identifier:"attendenceTab"},
       {id:15,menu:"Student Attendences",identifier:"student_attendences"},
       {id:16,menu:"Staff Attendence",identifier:"staff_attendence"},
        
    ],   }
export default function createPermission() {
    const [creatinitalData,setState] =useState(Fields);
  const [studentImage, setStudentImage] = useState("");

  const{role_id,roleName,array1,initialMenu }=creatinitalData;
  const navigate = useNavigate();
  
  const permissionSchema = () => Yup.object().shape({
    roleName: Yup.string().required('Name is required'),
    });
  useEffect(()=>{
    let arr = [];
    initialMenu.map((val)=>{
        arr.push({id:val.id,[val.identifier]:{canView:false,canCreate:false,canDelete:false,canUpdate:false}})
    })
    setState((prevState)=>({
        ...prevState,
        array1:arr
      }))
  },[])
 const changeSwitch=(cell,row,enumObject,value)=>{
    var changed= array1;
    if(row.identifier=='selectall'){
         initialMenu.map((val,index)=>{ 
            changed[index][val.identifier][enumObject] = !value;
        })
        //console.log(changed);
        //this.setState({array1:changed});
        setState((prevState)=>({
            ...prevState,
            array1:changed
          }))
    }
    else{
        changed[row.id][row.identifier][enumObject]=!array1[row.id][row.identifier][enumObject]
        if(changed[row.id][row.identifier][enumObject]==false){
            changed[0]['selectall'][enumObject]=false
        }
        setState((prevState)=>({
            ...prevState,
            array1:changed
          }))
    } 
}
 const FormattedData=(cell,row,enumObject,index)=>{
      let value =  array1[row.id]?array1[row.id][row.identifier][enumObject]:false ;
      return(<Switch 
         checked ={value}
          onChange={()=>{changeSwitch(cell,row,enumObject,value)}}
     variant={'pill'} 
     label color={'primary'} 
     size={'lg'}/>)
 }
 const submitpermissions =(values)=>{
    console.log("submit",values)
   axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
   let obj={};
   obj.roleName=values.roleName;
  // if(this.state.id == 'new'){
       initialMenu.map((Data,index)=>{
           obj[Data.identifier]=array1[index][Data.identifier];
            })
            console.log("payload",obj)
               //  let userId=localStorage.getItem('userId');
            axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
            axios.post(`${process.env.REACT_APP_BASE_URL_BASE}auth/roles`, obj)
            .then((res) => {
              console.log("res",res)
              if (res.status === 201) {
                toast.success(`Role ${res.data?res.data.roleName:''} created successfully`, { theme: "colored" });
                setTimeout(() => {
                  navigate('/userTabs/1');
                }, 2000);
              }
            }).catch((err) => {
              console.log("err",err)  
                Swal.fire(err.response?err.response.data.message:null, 'Please try again later');
            })
      //  let userId=localStorage.getItem('userId')
    //    axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
    //    axios.post(process.env.REACT_APP_BACKEND_API_URL+'new/role/'+ userId +'/',obj)
    //    .then(response=>{
    //        console.log(response)
    //        //console.log(userId)
    //        if(response.data.status==200){
    //          toast.success('Your data has been saved')
    //          this.props.history.push('/management/permissions');
    //        }
    //      })
    //    .catch(error=>{
    //         console.log(error)
    //         toast.error(error.response.data.message)
    //        })
//    }else{
//             this.state.initialMenu.map((Data,index)=>{
//                obj[Data.identifier]=this.state.array1[index][Data.identifier];
//            })
//            axios.put(process.env.REACT_APP_BACKEND_API_URL+'update/role/'+this.state.id,obj)
//            .then(response=>{
//                console.log(response);
//                this.props.history.push('/management/permissions');
//                })
//            .catch(error=>{
//                  console.log(error.response)
//                  //toast.error(error.response.data.message)
//                })           
//    }
}
  return (
    <>
     <ToastContainer />
        <Card className='cardm'>
          <CardBody className='cardbg' >
            <Formik
              enableReinitialize={true}
             initialValues={creatinitalData}
              validationSchema={permissionSchema}
             onSubmit={submitpermissions} 
              >           
            {({ values,setFieldValue,handleChange,handleSubmit,handleBlur,errors,touched }) => (
              <Form onSubmit={handleSubmit} >
                   <CardHeader> <h5><strong>Create Roles</strong></h5> </CardHeader>                          
                    <CardBody>
                        <Row style={{marginBottom:'10px'}}>
                            <Col md={4}>
                                <FormGroup> 
                                    <Label htmlFor='roleName'>Role  <span className='colorRed'>*</span> </Label>
                                    <Input   
                                        type="text" name="roleName" 
                                        value={values.roleName} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={errors.roleName && touched.roleName}
                                      //  valid={!errors.roleName } 
                                    />
                                    <ErrorMessage name="roleName" component="div"  className='errmsg'></ErrorMessage>
                                </FormGroup>
                            </Col>
                        </Row>
                        
                    <BootstrapTable data={initialMenu} keyField='menu' striped hover multiColumnSearch={true} version='4'>
                        <TableHeaderColumn  dataField='menu'> Menu</TableHeaderColumn>
                        <TableHeaderColumn  dataField='canView' dataFormat={FormattedData } formatExtraData={"canView"}> View</TableHeaderColumn>
                        <TableHeaderColumn dataField='canCreate' dataFormat={FormattedData} formatExtraData={"canCreate"} >Create </TableHeaderColumn>
                        <TableHeaderColumn dataField='canUpdate'  dataFormat={FormattedData} formatExtraData={"canUpdate"}>Update</TableHeaderColumn>
                        <TableHeaderColumn dataField='canDelete' dataFormat={FormattedData} formatExtraData={"canDelete"}>Delete</TableHeaderColumn>
                    </BootstrapTable>
                  </CardBody>
                    <CardFooter className='centerTextalign'>
                      <Button type="button" color='secondary' className='btnbg' size="sm" onClick={()=> navigate("/userTabs/1")}  >Cancel</Button>
                      <Button type="submit" color='primary'  size="sm"  >Save</Button>
                    </CardFooter>      
                 
              </Form>
            )}
            </Formik>
            </CardBody>
            </Card>
    </>
  )
}
