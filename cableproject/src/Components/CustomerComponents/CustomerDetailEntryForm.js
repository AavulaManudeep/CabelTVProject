import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useEffect } from 'react'
import axios from 'axios'
import history from '../History'

function CustomerDetailEntryForm(props) {

    const [formObj, setfromObj] = useState(
        {
            firstName:"",
            lastName:"",
            address:"",
            address2:"",
            city:"",
            state:"",
            zipcode:"",
            customerId:"",
            customerplan:"",
            amountdue:"",
            mandal:"",
            district:""
        }
    )

    const onFormSubmit = (e) =>
    {
        e.preventDefault()
        console.log(formObj)
        
        const customerDetailPayload = {
            firstName:formObj.firstName,
            lastName:formObj.lastName,
            customerId:formObj.customerId,
            userAddress:{
                address1:formObj.address,
                address2:formObj.address2,
                city:formObj.city,
                state:formObj.state,
                zipcode:formObj.zipcode,
                mandal:formObj.mandal,
                district:formObj.district
            },
            userPlanDetailsVO:{  
            planName:formObj.customerplan,
            price:formObj.amountdue }
        }
        const customerPalnPayload = {
            customerFirstName:formObj.firstName,
            customerLastName:formObj.lastName,
            customerId:formObj.customerId,
            customerCurrentPlan:formObj.customerplan,
            amountDue:formObj.amountdue
        }
        let customerDetailPayloadflag = new Boolean(false);
        let customerPalnPayloadflag =  new Boolean(false);
        const headers = 
        {
            'Authorization': localStorage.getItem('Authorization')
        }
        axios.post("http://ec2-3-16-21-160.us-east-2.compute.amazonaws.com:8089/customerinfo/insert/userplandetails",
        customerPalnPayload,{headers:headers}
            ).then(
            response =>
            {
                    console.log(response.data)
                    customerDetailPayloadflag = Boolean(true);
            }
        ).catch
        (error =>
            {
                console.log(error);
            }

        )
        
        console.log(customerPalnPayload)

        axios.post("http://ec2-3-16-21-160.us-east-2.compute.amazonaws.com:8087/customerprofile/insertuserdetails",customerDetailPayload)
        .then(response =>
            {
                    console.log(response.data)
                    customerDetailPayloadflag= Boolean(true);
            }
        ).catch
        (error =>
            {
                console.log(error);
            }

        )
        if(customerDetailPayloadflag&&customerPalnPayloadflag)
        {
            props.history.push('/home');
        }
        else
        {
            props.history.push('/about')
        }

        
    }

    const onreset = () =>
    {
        setfromObj({
            firstName:"",
            lastName:"",
            address:"",
            address2:"",
            city:"",
            state:"",
            zipcode:"",
            customerId:"",
            customerplan:"",
            amountdue:"",
            mandal:"",
            district:""}
        );
    }

    const handelChange = (e) =>
    {
        const {id,value} = e.target
        console.log(value)
        console.log(id)
        setfromObj(prevState=>
            ({
                ...prevState,
                [id]:value

            })
            )
    }


    return (
        <div>
            <Form onSubmit = {onFormSubmit}>
                <Form.Row>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder = "Enter First Name" onChange = {handelChange} value = {formObj.firstName} id = "firstName"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formLasttName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder = "Enter Last Name" onChange = {handelChange} value = {formObj.lastName} id = "lastName"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder = "Enter Address" onChange = {handelChange} value = {formObj.address} id = "address"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formAddress2">
                        <Form.Label>Address2</Form.Label>
                        <Form.Control placeholder = "Enter Address" onChange = {handelChange} value = {formObj.address2} id = "address2"></Form.Control>
                </Form.Group>
                <Form.Row>
                <Form.Group controlId="formMandal">
                        <Form.Label>Mandal</Form.Label>
                        <Form.Control placeholder = "Mandal" onChange = {handelChange} value = {formObj.mandal} id = "mandal"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formDistrict">
                        <Form.Label>District</Form.Label>
                        <Form.Control placeholder = "District" onChange = {handelChange} value = {formObj.district} id = "district"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder = "City" onChange = {handelChange} value = {formObj.city} id = "city"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder = "State" onChange = {handelChange} value = {formObj.state} id = "state"></Form.Control>
                    </Form.Group>
                    <Form.Group  controlId="formZipcode">
                        <Form.Label>ZipCode</Form.Label>
                        <Form.Control placeholder = "ZipCode" onChange = {handelChange} value = {formObj.zipcode} id = "zipcode"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <hr></hr>
                <Form.Row>
                    <Form.Group  controlId="formCustomerId">
                        <Form.Label>CustomerId/SerialNumber</Form.Label>
                        <Form.Control placeholder = "CustomerId/SerialNumber" onChange = {handelChange} value = {formObj.customerId} id = "customerId"></Form.Control>
                    </Form.Group>
                    <Form.Group  controlId="formPlans">
                        <Form.Label>Plans</Form.Label>
                        <Form.Control as="select" defaultValue = "Starter" onChange = {handelChange} value = {formObj.customerplan} id = "customerplan">
                        <option>Starter</option>
                        <option>Advance</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group  controlId="formDues">
                        <Form.Label>Amount Due</Form.Label>
                        <Form.Control placeholder = "Intial Due" onChange = {handelChange} value = {formObj.amountdue} id = "amountdue"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <button type = "submit">Submit</button>
                <button type = "reset" onClick={onreset}>Reset</button>
            </Form>
        </div>
    )
}

export default CustomerDetailEntryForm
