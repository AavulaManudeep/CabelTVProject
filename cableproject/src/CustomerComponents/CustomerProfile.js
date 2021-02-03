import React,{ useState } from 'react'
import Figure from 'react-bootstrap/Figure'
import FigureCaption from 'react-bootstrap/FigureCaption'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import { Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Col,Row } from 'react-bootstrap'
import CustomerPlandetails from '../Components/CustomerComponents/CustomerPlandetails'
import testImg from '../logo.svg'
function CustomerProfile(props) {
    console.log("Customer Profile===>",props);
    var userData = props.userData !==undefined && props.userData.length>0 && props.userData.userAddress!==undefined ? props.userData:null;
    const [disable,setDisable]= useState("disable")
    const [formObj, setfromObj] = useState( userData===null?
        {
            firstName:"Test",
            lastName:"Test",
            address:"Test",
            phonenumber:"123456789",
            emailId:"Test@testmail.com",
            address2:"Test",
            city:"Test",
            state:"Test",
            zipcode:"Test",
            customerId:"Test",
            customerplan:"Advance",
            amountdue:"0",
            mandal:"Test",
            district:"Test"
        }:{

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
    
    const onFormSubmit = (e)=>
    {

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
        console.log(disable)
        e.preventDefault()
       setDisable("")
        console.log(disable)
    }

    return (
        <div>
        <Container fluid>
            <Row>
                <Col xs='2'>
                <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" 
        src={testImg}
         />
        <Card.Body>
            <Card.Title>{formObj.firstName} {formObj.lastName}</Card.Title>
            <Card.Title>{formObj.phonenumber}</Card.Title>
            <Card.Title>{formObj.emailId}</Card.Title>  
            <Card.Title>Address</Card.Title> 
            <Card.Title>city,State,Zipcode</Card.Title> 
            <Card.Title>jf</Card.Title>   
            <Card.Title>Address</Card.Title> 
            <Card.Title>city,State,Zipcode</Card.Title> 
            <Card.Title>jf</Card.Title>    
        </Card.Body>
        </Card>       
                </Col>
                <Col>
                <Form onSubmit = {onFormSubmit} style={{"padding":"10px"}} >
            <fieldset disabled = {disable}>
            {console.log(disable)}
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
                <Form.Row>
                    <Form.Group controlId="formPhonenumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder = "Enter Phone Number" onChange = {handelChange} value = {formObj.phonenumber} id = "phonenumber"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formEmailId">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control placeholder = "Enter Email Id" onChange = {handelChange} value = {formObj.emailId} id = "emailId"></Form.Control>
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
                </fieldset>
                <button type = "submit" disabled = {disable}>Submit</button>
                <button type = "Edit" onClick={onEdit}>Edit</button>  
            </Form>      
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default CustomerProfile
