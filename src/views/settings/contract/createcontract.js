import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from 'react-router';
import { Button, FormGroup, Label, Input, CardImg, InputGroup, Card, CardFooter, CardBody, Col, Row } from 'reactstrap';
import './contract.css';
import Select from 'react-select';
import Axios from "../../../hoc/axiosConfig";
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contractImage from "../../../assets/images/avatars/contract.jpg"
const createcontract = () => {
  const [contractValues, setContractValues] = useState([{ programName: "", pricing: "", trailProgram: true }]);
  const [contractLoopValues, setContractLoopValues] = useState([{ id:"",ifperson: "", frequency: "", then: "", discount: "", amount: "" }]);
  const [lengths, setLengths] = useState("");
  const [contractlengths, setContractLengths] = useState("");
  const [contractfrequencies, setContractFrequencies] = useState("");
  const [enrolled, setEnrolled] = useState(false);
  const [defaultcount, setDefaultcount] = useState("");
  const [tenureId, setTenureId] = useState("");
  const [backendValues, setBackendValues] = useState([]);
  const [backbutton, setBackbutton] = useState(false);
  const [rowDeleteId, setRowDeleteId] = useState([]);
  let navigate = useNavigate();
  const params = useParams();
  const initialValues = {
    programName: contractValues.programName,
    pricing: contractValues.pricing,
    lengths: lengths,
    contractLoopValues: contractLoopValues,
  }
  const ContractSchema = () => Yup.object().shape({
    programName: Yup.string().matches(/^[a-zA-Z0-9@]/, "Special character are not allowed").min(2, 'Too Short!').max(70, 'Too Long!').required('Contract name Required'),
    pricing: Yup.number().required('Base Price is required'),
    lengths: Yup.object().required('Length is Required'),
    contractLoopValues: Yup.array().of(
      Yup.object().shape({
        ifperson: Yup.string().required("Member(s) required"),
        frequency: Yup.object().required('Frequency Required')
      })
    )
  });
  useEffect(() => {
    alllengths();
  //  allfrequencies();
    if (params.id !== "new") {
      Axios.get(`contract-promotion/${params.id}`).then((res) => {
        console.log("response", res)
        setContractValues({ ...contractValues, programName: res.data.name, pricing: res.data.basePrice })
        setLengths({ value: res.data.tenure.id, label: res.data.tenure.name })
        let backendContractLoopValues = []
        let setrow =[]
        res.data.pricing.map((key, index) => {
          backendContractLoopValues.push({ id: key.id, ifperson: key.members, frequency: { value: key.subscriptionFrequency.id, label: key.subscriptionFrequency.name }, then: key.fee, discount: key.discount, amount: key.total })
          setrow.push({id:key.id})
        })
        setRowDeleteId(setrow);
        setContractLoopValues(backendContractLoopValues);
        //for backend
        let backendContractLoopValues1 = []
        res.data.pricing.map((key, index) => {
          backendContractLoopValues1.push({ id: key.id, members: key.members, subscriptionFrequency: { id: key.subscriptionFrequency.id }, fee: key.fee, discount: key.discount, total: key.total })
        })
        setBackendValues(backendContractLoopValues1);
        setTenureId(res.data.tenure.id)
        setEnrolled(res.data.enrolled);
        setDefaultcount(res.data.pricing.length);
      }).catch((err) => {
        Swal.fire('Please try again ')
      })
    }
  }, []);
  const alllengths = () => {
    Axios.get(`/all-tenures`).then((res) => {
      let lengthsArray = []
      res.data.map((key, index) => {
        lengthsArray.push({ value: key.id, label: key.name })
      })
      setContractLengths(lengthsArray)
    }).catch((err) => {
      Swal.fire(err.response.data.message, 'Please try again ')
    })
  }
  const allfrequencies = (selectedOption) => {
    Axios.get(`/tenure/${selectedOption.value}/subscription-frequency`).then((res) => {
      let frequenciesArray = []
      res.data.map((key, index) => {
        frequenciesArray.push({ value: key.id, label: key.name })
      })
      setContractFrequencies(frequenciesArray)
    }).catch((err) => {
      Swal.fire(err.response.data.message, 'Please try again ')
    })
  }
  const contractSubmit = (values) => {
    console.log(values)
    let newarray = [];
    values.contractLoopValues.map((element, i) => {
      newarray.push({
        members: element.ifperson,
        fee: element.then,
        discount: element.discount,
        subscriptionFrequency: { id: element.frequency.value },
        total: values.pricing && ((parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) - (parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) * (element.discount / 100)).toFixed(2)
      })
    })
    let newarray1 = [];
    contractLoopValues.map((element, i) => {
      console.log("if", !element.id)
      if (element.id === undefined) {
        console.log("if true")
        newarray1.push({
          members: element.ifperson,
          fee: element.then,
          discount: element.discount,
          subscriptionFrequency: { id: element.frequency.value },
          total: values.pricing && ((parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) - (parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) * (element.discount / 100)).toFixed(2)
        })
      }
      // else{
      //   console.log("if false")
      //   newarray1.push(values.contractLoopValues)
      // }
    })
    let newarray3 = [];
    values.contractLoopValues.map((element, i) => {
      newarray3.push({
        id: element.id,
        members: element.ifperson,
        fee: element.then,
        discount: element.discount,
        subscriptionFrequency: { id: element.frequency.value },
        total: values.pricing && ((parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) - (parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) * (element.discount / 100)).toFixed(2)
      })
    })
    const payload = {
      name: values.programName,
      basePrice: values.pricing,
      pricing: newarray
    }
    const merged = [...backendValues, ...newarray1];
    console.log("minus", newarray3)
    console.log("plus", merged)
    // let pricingValue;
    // if(backbutton===true){
    //   console.log("button true")
    //   pricingValue=newarray3;
    // }
    // else{
    //   console.log("button not true")
    //   pricingValue=merged;
    // }
    const updatePayload = {
      name: values.programName,
      basePrice: values.pricing,
      pricing: newarray3
    }
    console.log("updatepayload", updatePayload)
    if (params.id === "new") {
      axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
      axios.post(`${process.env.REACT_APP_BASE_URL}/contract-tenure/${values.lengths.value}/contract-promotion`, payload).then((res) => {
        if (res.status === 201) {
          toast.success("Contract created successfully", { theme: "colored" });
          setTimeout(() => {
            navigate('/settings/allcontracts');
          }, 2000);
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
    else {
      Axios.put(`contract-tenure/${tenureId}/contract-promotion/${params.id}`, updatePayload).then((res) => {
        console.log(res)
        if (res.status === 200) {
          toast.info("Contract updated successfully", { theme: "colored" });
          setTimeout(() => {
            navigate('/settings/allcontracts');
          }, 2000);
        }
      }).catch((err) => {
        Swal.fire(err.response.data.message, 'Please try again ')
      })
    }
  }
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };
  const rowDeleteHandle=(id)=>{
    console.log("rowid",id);
    if (params.id !== "new") {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
              if (result.isConfirmed) {
                Axios.delete(`pricing/${id}/contract-promotion/${params.id}`)
                .then((response) => {
                  if (response.status == 200) {
                  
                  Swal.fire('Record Deleted!', '', 'success')
                  }
                }).catch((error) => { 
                Swal.fire( 'Please try again ' ) 
               })
              }
              else {
              Swal.fire('Your Data safe', '');
              }
            })
    }
  }
  return (
    <>
      <ToastContainer />
       <Card >
        <CardBody className='cardbg'>
          <h5><strong>{params.id === "new" ? "Create Contract" : "Update Contract"}</strong></h5>
          <Card>
            <Row>
              <Col md={8}>
                <Card className='cardbgw'>
                  <Formik
                    enableReinitialize="true"
                    initialValues={initialValues}
                    validationSchema={ContractSchema}
                    onSubmit={contractSubmit}
                  >
                    {({ values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty, setFieldValue }) => (
                      <Form onSubmit={handleSubmit} autoComplete='off'>
                        <CardBody className='cardbgw'>
                          <Row>
                            <Col md={8}>
                              <FormGroup>
                                <Label for="programName">Name<span className="required">*</span></Label>
                                <Input name="programName" placeholder='Contract name' type="text" value={values.programName} onChange={handleChange} onBlur={handleBlur}
                                  invalid={touched.programName && !!errors.programName} />
                                <ErrorMessage name="programName" component="div" className='errmsg'></ErrorMessage>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <FormGroup>
                                <Label for="pricing">Base Price $<span className="required">*</span></Label>
                                <InputGroup>
                                  <Input placeholder="0.00" type="number" min="1" onKeyPress={preventMinus} name="pricing" step="1"
                                    onChange={handleChange} onBlur={handleBlur} value={values.pricing}
                                    invalid={touched.pricing && !!errors.pricing} />
                                </InputGroup>
                                <ErrorMessage name="pricing" component="div" className='errmsg'></ErrorMessage>
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label for="lengths">Duration<span className="required">*</span></Label>
                                <Field name="lengths">
                                  {({ field, form }) => (
                                    <Select
                                      name="lengths"
                                      options={contractlengths}
                                      value={values.lengths}
                                      onChange={(selectedOption) => (form.setFieldValue('lengths', selectedOption),allfrequencies(selectedOption))}
                                      onBlur={() => { form.setFieldTouched('lengths') }}
                                    />
                                  )}
                                </Field>
                                <ErrorMessage name="lengths" component="div" className='errmsg'></ErrorMessage>
                              </FormGroup>
                            </Col >
                          </Row>
                          <FieldArray
                            name="contractLoopValues"
                            render={arrayHelpers => {
                              const contractLoopValues = values.contractLoopValues;
                              // console.log(contractLoopValues)
                              // if (!Array.isArray(contractLoopValues)) return;
                              // const isExist = contractLoopValues?.includes(char.id)
                              // if (isExist) {
                              //   // filter out the char u want to delete
                              //   const newData = contractLoopValues?.filter(i => i !== char.id)
                              //   setFieldValue('contractLoopValues', newData)
                              //   return;
                              // }
                              // const newData = contractLoopValues?.concat(char.id);
                              // setFieldValue('contractLoopValues', newData);
                              return (
                                <div>
                                  {contractLoopValues && contractLoopValues.length > 0 ? contractLoopValues.map((element, index) => (
                                    <div key={index}> 
                                      <Row>
                                        <Col md={2}>
                                          <FormGroup>
                                            <Label for="ifperson" >{index === 0 ? "Member" : ""}<span className="required">{index === 0 ? "*" : ""}</span></Label>
                                            <Input type="number"
                                              name={`contractLoopValues.${index}.ifperson`}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              min="1" step="1"
                                              onKeyPress={preventMinus}
                                              placeholder='Member(s)'
                                              value={element.ifperson || ""}
                                              disabled={enrolled && (defaultcount >= (index + 1)) ? true : false}
                                            />
                                            <ErrorMessage name={`contractLoopValues.${index}.ifperson`} component="div" className='errmsg' />
                                          </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                          <FormGroup>
                                            <Label for="frequency">{index === 0 ? "Frequency" : ""}<span className="required">{index === 0 ? "*" : ""}</span></Label>
                                            <Field>
                                              {({ field, form }) => (
                                                <Select
                                                  name="frequency"
                                                  options={contractfrequencies}
                                                  value={element.frequency || ""}
                                                  onChange={(selectedOption) => form.setFieldValue(`contractLoopValues.${index}.frequency`, selectedOption)}
                                                  onBlur={() => { form.setFieldTouched(`contractLoopValues.${index}.frequency`) }}
                                                  disabled={enrolled && (defaultcount >= (index + 1)) ? true : false}
                                                />
                                              )}
                                            </Field>
                                            <ErrorMessage name={`contractLoopValues.${index}.frequency`} component="div" className='errmsg' />                                        </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                          <FormGroup>
                                            <Label for="then">{index === 0 ? "Additional Fee $" : ""}</Label>
                                            <Input type="number" name={`contractLoopValues.${index}.then`} min="1" step="1" onKeyPress={preventMinus} onChange={handleChange} onBlur={handleBlur} placeholder="0.00" value={element.then || ""} disabled={enrolled && (defaultcount >= (index + 1)) ? true : false}
                                            />
                                            <ErrorMessage name={`contractLoopValues.${index}.then`} component="div" className='errmsg' />
                                          </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                          <FormGroup>
                                            <Label for="discount">{index === 0 ? "Discount %" : ""} </Label>
                                            <Input type="number" name={`contractLoopValues.${index}.discount`} min="0" step="1" onKeyPress={preventMinus} id="discount" placeholder="0" onChange={handleChange} onBlur={handleBlur} disabled={enrolled && (defaultcount >= (index + 1)) ? true : false}
                                              value={element.discount || ""} />
                                            <ErrorMessage name={`contractLoopValues.${index}.discount`} component="div" className='errmsg' />
                                          </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                          <FormGroup>
                                            <Label for="amount">{index === 0 ? "Total $" : ""}</Label>
                                            <Input type="number" name={`contractLoopValues.${index}.amount`} disabled="true" readonly="readonly" value={values.pricing && ((parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) - (parseFloat(values.pricing ? values.pricing : 0.00) + parseFloat(element.then ? element.then : 0.00)) * (element.discount / 100)).toFixed(2)} />
                                          </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                          <Button color='success'
                                            disabled={enrolled && (defaultcount > (index + 1)) ? true : false}
                                            onClick={() =>
                                              arrayHelpers.push({ ifperson: "", frequency: "", then: "", discount: "", amount: "" })
                                            }
                                            id="plusbutton" >
                                            <i className="fa fa-plus" aria-hidden="true" id="plusicon"></i>
                                          </Button> &nbsp;
                                          {index ? <Button color='danger' disabled={enrolled && (defaultcount >= (index + 1)) ? true : false} onClick={() => { arrayHelpers.remove(index), setBackbutton(!backbutton),rowDeleteHandle(element.id) }} id="minusbutton">
                                            <i className="fa fa-minus" aria-hidden="true" id="minusicon"></i>
                                          </Button> : null}
                                        </Col>
                                      </Row>
                                    </div>
                                  ))
                                    : null}
                                </div>
                              );
                            }}
                          />
                        </CardBody>
                        <CardFooter id='cardfootercolor'>
                          <Button  size="md" color='secondary' type='button' className='btncncl' id="cancelbutton" onClick={() => navigate(-1)}>Cancel</Button>{' '}
                          <Button  color="primary" size='md' className='btnsave' id="savebutton" type="submit">Save</Button>{' '}
                        </CardFooter>
                      </Form>
                    )}
                  </Formik>
                </Card>
              </Col>
              <Col md={4}>
                <CardImg
                  alt="Card image cap"
                  src={contractImage}
                  bottom
                />
              </Col>
            </Row>
          </Card>
        </CardBody>
      </Card>
    </>
  );
}
export default createcontract;