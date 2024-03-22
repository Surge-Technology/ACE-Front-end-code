import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Col, Card, CardBody, CardFooter, Row, Button ,Spinner} from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
 
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';
const PermissionsList = () => {
  const usersInitialData = { permissionsList: [], totalPages: "", currentPage: "", loader: false ,
  permissions:{canCreate: true, canView: true, canUpdate: true, canDelete: true}}
  const [initialData, setState] = useState(usersInitialData);
  const { permissionsList, totalPages, currentPage, loader,permissions } = initialData
  let history = useNavigate();
 
  useEffect(()=>{
    let userid=localStorage.getItem("userid");
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    axios.get(`${process.env.REACT_APP_BASE_URL_BASE}auth/users/${userid}`)
      .then((res) => {
          let permission = res.data.roles?res.data.roles[0]["permissions"]:null;
        setState((prevState) => ({
          ...prevState,
           permissions:permission
        }))
      }).catch((err) => { })
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
    axios.get(`${process.env.REACT_APP_BASE_URL_BASE}auth/roles`)
    .then((res) => {
      // console.log("response",res.data.id)
      setState((prevState)=>({
        ...prevState,
        permissionsList:res.data,loader:false
      }));
    }).catch((err) => {
        Swal.fire(err.response?err.response.data.message:null, 'Please try again later');
      })
  },[])
      const permissionActionsHandle=(cell, row)=>{
        return (
          <>
            <span>  
              {permissions.canUpdate?
<Link  id={row.id} to={`/permissions/edit/${row.id}`}>
                <i className="fa fa-pencil" id="pencilspace" aria-hidden="true"></i>
                </Link>:null
              }
 
 
            {/* {permissions.canDelete?      <i className="fa fa-trash-o" aria-hidden="true" onClick={()=>  permissionDeleteHandle(row.id)} style={{ cursor: 'pointer', fontSize: "15px", color: "red" }}  ></i> :null} */}
            </span>
          </>
        )
      }
      // const permissionDeleteHandle=(id)=>{
      //   console.log("certificateDeleteHandle",id);
      //   Swal.fire({
      //     title: 'Are you sure?',
      //     text: "Are you sure you want delete?",
      //     icon: 'warning',
      //     showCancelButton: true,
      //     confirmButtonColor: '#3085d6',
      //     cancelButtonColor: '#d33',
      //     confirmButtonText: 'Yes, delete it!'
      //   }).then((result) => {
      //     if (result.isConfirmed) {
      //       axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
      //       axios.delete(`${process.env.REACT_APP_BASE_URL_BASE}api/roles/${id}`).then((res) => {
      //           if (res.status == 204) {
      //             tableList("1");
      //             Swal.fire('Record Deleted!', '', 'success')
      //           }
      //         }).catch((err) => {
      //           Swal.fire( err.response.data.message, 'Please try again '  )
      //       })
      //     }
      //   })
      // }
  const indexFormat = (cell, row, enumObject, index) => {
    return (<>{index + 1}</>);
  }
  const displayDate = (date)=>{
    return(<>{moment(date).format("MM/DD/YYYY")}</>)
  }
 
 
  return (
    <> {loader?<Spinner
      className='loaderr'
       color="primary"
      >
      Loading...
    </Spinner>:null}
         <CardBody className='cardbg'>
          <Row>
            <Col ><h4><strong>Roles Permissions </strong></h4></Col>
            <Col>
                {permissions.canCreate?  <Button outline color="info" size="sm" className='buttonfloat' onClick={() => history("/permissions/create/new")}>Add Role </Button>:null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Card >
                <BootstrapTable data={permissionsList} keyField="sno" search striped hover multiColumnSearch={true} version='4'>
                  <TableHeaderColumn width="100" dataAlign='left' dataField='sno' dataFormat={indexFormat} dataSort>S No</TableHeaderColumn>
                  <TableHeaderColumn width="160"   dataField='roleName' dataSort>Role Name</TableHeaderColumn>
                 <TableHeaderColumn width="100" dataField='creationDate'  dataFormat={displayDate}>Creation Date</TableHeaderColumn>
                 <TableHeaderColumn width="160"   dataField='createdBy' dataSort>Created By</TableHeaderColumn>
                 <TableHeaderColumn width="160"   dataField='createdBy'  dataFormat={permissionActionsHandle}>Action</TableHeaderColumn>
                   </BootstrapTable>
                <CardFooter>
                 </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
          </Row>
        </CardBody>
    </>
  )
}
export default PermissionsList;