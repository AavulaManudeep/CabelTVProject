import BootstrapTable from 'react-bootstrap-table-next'
import React,{ useEffect, useState } from 'react'
import Figure from 'react-bootstrap/Figure'
import FigureCaption from 'react-bootstrap/FigureCaption'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import { Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Col,Row } from 'react-bootstrap'
import testImg from '../../logo.svg'
import axios from 'axios'
function CustomerDetails(props) {
    var userData = props.userData
    const [disable,setDisable]= useState("disable")
    const [formObj, setfromObj] = useState(
        {
            id:userData.userAddress!==undefined?userData.userAddress.id:"",
            firstName:userData.firstName,
            lastName:userData.lastName,
            address:userData.userAddress!==undefined?userData.userAddress.address1:"",
            phonenumber:"123456789",
            emailId:"Test@testmail.com",
            address2:userData.userAddress!==undefined?userData.userAddress.address2:"",
            city:userData.userAddress!==undefined?userData.userAddress.mandal:"",
            state:userData.userAddress!==undefined?userData.userAddress.state:"",
            zipcode:userData.userAddress!==undefined?userData.userAddress.zipcode:"",
            customerId:userData.customerId,
            customerplan:userData.userPlanDetailsVO!==undefined?userData.userPlanDetailsVO.planName:"",
            amountdue:userData.userPlanDetailsVO!==undefined?userData.userPlanDetailsVO.price:"",
            mandal:userData.userAddress!==undefined?userData.userAddress.mandal:"",
            district:userData.userAddress!==undefined?userData.userAddress.district:""
        }
    )

    const settingForObj = ()=>
    {
        if(props.userData!==undefined && props.userData.length>0)
        {
            setfromObj({
                firstName:userData.firstName,
                id:userData.userAddress!==undefined?userData.userAddress.id:"",
                lastName:userData.lastName,
                address:userData.userAddress!==undefined?userData.userAddress.address1:"",
                phonenumber:"123456789",
                emailId:"Test@testmail.com",
                address2:userData.userAddress!==undefined?userData.userAddress.address2:"",
                city:userData.userAddress!==undefined?userData.userAddress.mandal:"",
                state:userData.userAddress!==undefined?userData.userAddress.state:"",
                zipcode:userData.userAddress!==undefined?userData.userAddress.zipcode:"",
                customerId:userData.customerId,
                customerplan:userData.userPlanDetailsVO!==undefined?userData.userPlanDetailsVO.planName:"",
                amountdue:userData.userPlanDetailsVO!==undefined?userData.userPlanDetailsVO.price:"",
                mandal:userData.userAddress!==undefined?userData.userAddress.mandal:"",
                district:userData.userAddress!==undefined?userData.userAddress.district:""
            })
            
        }
    }
    useEffect(()=>
    {
        settingForObj();
    },[])
    
    const onFormSubmit = (e)=>
    {
        e.preventDefault()
        var UserDetails ={
            customerId: formObj.customerId,
            firstName: formObj.firstName,
            lastName: formObj.lastName,
            userAddress: {
                id: formObj.id,
                address1: formObj.address,
                address2: formObj.address2,
                aptno: formObj.aptno,
                zipcode: formObj.zipcode,
                mandal: formObj.mandal,
                district: formObj.district,
                state: formObj.state
            },
            userPlanDetailsVO: {
                planId: formObj.id,
                planName: formObj.customerplan,
                price: formObj.amountdue
            }
        }
        console.log(UserDetails);
        axios.post("http://localhost:8087/customerprofile/updateuserdetails",UserDetails)
        .then(response =>
            {
                if(response.data === "Success")
                 {
                     console.log(response.data)
                 }
            }).catch( error =>
                {
                    console.log(error)
                })

        
    }
    const handelChange = (e)=>
    {
        const {id,value} = e.target;
        setfromObj(prevState=>
            ({
                ...prevState,
                [id]:value
            })
            )
    }
    const onEdit = (e)=>
    {
        e.preventDefault()
        if (disable!=="")
            setDisable("")
        else
            setDisable("disable")
    }
    const onCancel = (e) =>
    {
        e.preventDefault()
        setDisable("disable")
    }

    return (
        <div>
        <Container fluid>
            <Row>
                <Col xs='2'style={{margin:'50px' }}>
                <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" 
        src={testImg}
         />
        <Card.Body style = {{color:'black'}}>
            <Card.Title>{formObj.firstName} {formObj.lastName}</Card.Title>
            <Card.Title>{formObj.phonenumber}</Card.Title>
            <Card.Title>{formObj.emailId}</Card.Title>  
            <Card.Title>{formObj.address+" "+formObj.address}</Card.Title> 
            <Card.Title>{formObj.city,formObj.state,formObj.zipcode}</Card.Title>    
        </Card.Body>
        </Card>       
                </Col>
                <Col>
                <Form onSubmit = {onFormSubmit} >
            <fieldset disabled = {disable}>
                <Form.Row>
                    <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder = "Enter First Name" onChange = {handelChange} value = {formObj.firstName} id = "firstName"></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder = "Enter Last Name" onChange = {handelChange} value = {formObj.lastName} id = "lastName"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder = "Enter Phone Number" onChange = {handelChange} value = {formObj.phonenumber} id = "phonenumber"></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control placeholder = "Enter Email Id" onChange = {handelChange} value = {formObj.emailId} id = "emailId"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group >
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder = "Enter Address" onChange = {handelChange} value = {formObj.address} id = "address"></Form.Control>
                </Form.Group>
                <Form.Group >
                        <Form.Label>Address2</Form.Label>
                        <Form.Control placeholder = "Enter Address" onChange = {handelChange} value = {formObj.address2} id = "address2"></Form.Control>
                </Form.Group>
                <Form.Row>
                <Form.Group >
                        <Form.Label>Mandal</Form.Label>
                        <Form.Control placeholder = "Mandal" onChange = {handelChange} value = {formObj.mandal} id = "mandal"></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>District</Form.Label>
                        <Form.Control placeholder = "District" onChange = {handelChange} value = {formObj.district} id = "district"></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder = "City" onChange = {handelChange} value = {formObj.city} id = "city"></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder = "State" onChange = {handelChange} value = {formObj.state} id = "state"></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>ZipCode</Form.Label>
                        <Form.Control placeholder = "ZipCode" onChange = {handelChange} value = {formObj.zipcode} id = "zipcode"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group >
                        <Form.Label>CustomerId/SerialNumber</Form.Label>
                        <Form.Control placeholder = "CustomerId/SerialNumber" onChange = {handelChange} value = {formObj.customerId} id = "customerId"></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Plans</Form.Label>
                        <Form.Control as="select" defaultValue = "Starter" onChange = {handelChange} value = {formObj.customerplan} id = "customerplan">
                        <option>Starter</option>
                        <option>Advance</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Amount Due</Form.Label>
                        <Form.Control placeholder = "Intial Due" onChange = {handelChange} value = {formObj.amountdue} id = "amountdue"></Form.Control>
                    </Form.Group>
                </Form.Row>
                </fieldset>
                <button type = "submit" disabled = {disable}>Submit</button>
                <button type = "Edit" onClick={onEdit}>{disable!==""?"Edit":"Cancle"}</button>   
            </Form>      
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default CustomerDetails
