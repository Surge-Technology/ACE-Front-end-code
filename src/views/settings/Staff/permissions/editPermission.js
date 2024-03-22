import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import {
    Row,
    Col,
    Input,
    CardHeader,
    Label,
    Button,
    Card,
    CardBody,
    CardFooter,
    FormFeedback,
    FormGroup,
} from 'reactstrap'
import Switch from 'react-switch'
import * as Yup from 'yup'
import { Formik, Form, ErrorMessage } from 'formik'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'
const Fields = {
    role_id: '',
    roleName: '',
    array1: [],
    initialMenu: [
        { id: 0, menu: 'Select All', identifier: 'selectall' },
        { id: 1, menu: 'Dashboard', identifier: 'dashboard' },
        { id: 2, menu: 'Student Tab', identifier: 'studentTab' },
        { id: 3, menu: 'Students', identifier: 'students' },
        { id: 4, menu: 'Inquiries', identifier: 'inquiries' },
        { id: 5, menu: 'Attendence Tab', identifier: 'attendenceTab' },
        { id: 6, menu: 'Student Attendences', identifier: 'student_attendences' },
        { id: 7, menu: 'Staff Attendence', identifier: 'staff_attendence' },
        { id: 8, menu: 'Level Testing', identifier: 'levelTesting' },
        { id: 9, menu: 'Contracts', identifier: 'contracts' },
        { id: 10, menu: 'Certificates', identifier: 'certificates' },
        { id: 11, menu: 'Email Templates', identifier: 'email_templates' },
        { id: 12, menu: 'Uses Tab', identifier: 'usersTab' },
        { id: 13, menu: 'Permissions', identifier: 'permissions' },
        { id: 14, menu: 'Users', identifier: 'users' },
        { id: 15, menu: 'Batches', identifier: 'batches' },
        { id: 16, menu: 'Events', identifier: 'events' },
    ],
}
export default function editPermission() {
    const [creatinitalData, setState] = useState(Fields)

    const { role_id, roleName, array1, initialMenu } = creatinitalData
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.id !== 'new') {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios
                .get(`${process.env.REACT_APP_BASE_URL_BASE}auth/roles/${params.id}`)
                .then((res) => {
                    localStorage.setItem('editrole', res.data.roleName)

                    let arr = [];
                    let allViewEnabled = true; // Flag to check if View permission is enabled for all identifiers except "Select All"
                    let allCreateEnabled = true;
                    let allEditEnabled = true;
                    let allDeleteEnabled = true;

                    initialMenu.forEach((val) => {
                        const permissions = res.data[val.identifier];

                        if (permissions) {
                            arr.push({ id: val.id, [val.identifier]: permissions });
                            if (!permissions.canView) {
                                allViewEnabled = false;
                            }
                            if (!permissions.canCreate) {
                                allCreateEnabled = false;
                            }
                            if (!permissions.canUpdate) {
                                allEditEnabled = false;
                            }
                            if (!permissions.canDelete) {
                                allDeleteEnabled = false;
                            }

                        } else {
                            arr.push({
                                id: val.id,
                                [val.identifier]: {
                                    canView: false,
                                    canCreate: false,
                                    canDelete: false,
                                    canUpdate: false,
                                },
                            });
                        }
                    });

                    if (allViewEnabled) {
                        arr[0].selectall.canView = true
                    }
                    if (allCreateEnabled) {
                        arr[0].selectall.canCreate = true
                    }
                    if (allEditEnabled) {
                        arr[0].selectall.canUpdate = true
                    }
                    if (allDeleteEnabled) {
                        arr[0].selectall.canDelete = true
                    }


                    // If View is enabled for all identifiers except "Select All", enable Select All for View
                    setState((prevState) => ({
                        ...prevState,
                        array1: arr,
                    }));
                })
                .catch((err) => {
                    console.error('Error fetching role data:', err)
                })
        }
    }, [params.id])


    const changeSwitch = (cell, row, enumObject, value) => {
        var changed = array1;
        if (row.identifier == 'selectall') {
            initialMenu.map((val, index) => {
                changed[index][val.identifier][enumObject] = !value;
            })
            setState((prevState) => ({
                ...prevState,
                array1: changed
            }))
        }
        else {
            changed[row.id][row.identifier][enumObject] = !array1[row.id][row.identifier][enumObject]
            if (changed[row.id][row.identifier][enumObject] == false) {
                changed[0]['selectall'][enumObject] = false
            }
            setState((prevState) => ({
                ...prevState,
                array1: changed
            }))
        }
    }


    const FormattedData = (cell, row, enumObject, index) => {
        if (array1[row.id] && array1[row.id][row.identifier]) {
            const value = array1[row.id][row.identifier][enumObject]
            // console.log('row identifier', row.identifier)
            return (
                <Switch
                    checked={value}
                    onChange={() => {
                        changeSwitch(cell, row, enumObject, value)
                    }}
                    variant={'pill'}
                    label
                    color={'primary'}
                    size={'lg'}
                />
            )
        } else {
            return null;
        }
    }

    const submitpermissions = (permissionRole) => {
        axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
        let obj = {};

        obj.roleName = localStorage.getItem('editrole');
        initialMenu.map((Data, index) => {
            obj[Data.identifier] = array1[index][Data.identifier];
        })
        console.log("check obj", obj);
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
        axios.put(`${process.env.REACT_APP_BASE_URL_BASE}api/roles/${params.id}`, obj)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(`Role ${res.data ? res.data.roleName : ''}  Updated successfully`, { theme: "colored" });
                    setTimeout(() => {
                        navigate('/userTabs/1');
                    }, 2000);
                }
            }).catch((err) => {
                Swal.fire(err.response ? err.response.data.message : null, 'Please try again later');
            })
    }
    return (
        <>
            <ToastContainer />
            <Card className="cardm">
                <CardBody className="cardbg">
                <i
                        className="fa fa-arrow-circle-left dashicon"
                        aria-hidden="true"
                        style={{ float: 'left', cursor: 'pointer', height: '20px' }}
                        onClick={()=> navigate("/userTabs/1")}
                    ></i>
                    <Formik
                        enableReinitialize={true}
                        initialValues={creatinitalData}
                        onSubmit={submitpermissions}
                    >
                        {({
                            values,
                            setFieldValue,
                            handleChange,
                            handleSubmit,
                            handleBlur,
                            errors,
                            touched,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <CardHeader>
                                    <h5>
                                        <strong>Edit Roles</strong>
                                    </h5>
                                </CardHeader>
                                <CardBody>
                                    <BootstrapTable
                                        data={initialMenu}
                                        keyField="menu"
                                        striped
                                        hover
                                        multiColumnSearch={true}
                                        version="4"
                                    >
                                        <TableHeaderColumn width="120" dataField="menu">
                                            Menu
                                        </TableHeaderColumn>
                                        <TableHeaderColumn
                                            width="120"
                                            dataField="canView"
                                            dataFormat={(cell, row) => FormattedData(cell, row, 'canView')}
                                        >
                                            View
                                        </TableHeaderColumn>
                                        <TableHeaderColumn
                                            width="120"
                                            dataField="canCreate"
                                            dataFormat={(cell, row) => FormattedData(cell, row, 'canCreate')}
                                        >
                                            Create
                                        </TableHeaderColumn>
                                        <TableHeaderColumn
                                            width="120"
                                            dataField="canUpdate"
                                            dataFormat={(cell, row) => FormattedData(cell, row, 'canUpdate')}
                                        >
                                            Update
                                        </TableHeaderColumn>
                                        <TableHeaderColumn
                                            width="120"
                                            dataField="canDelete"
                                            dataFormat={(cell, row) => FormattedData(cell, row, 'canDelete')}
                                        >
                                            Delete
                                        </TableHeaderColumn>
                                    </BootstrapTable>
                                </CardBody>
                                <CardFooter className="centerTextalign">
                                    <Button
                                        type="button"
                                        color="secondary"
                                        className="btnbg"
                                        size="sm"
                                        onClick={() => navigate('/userTabs/1')}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" color="primary" size="sm">
                                        Save
                                    </Button>
                                </CardFooter>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </>
    )
}
