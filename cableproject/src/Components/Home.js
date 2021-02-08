import React, { useEffect,useState } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {withRouter} from 'react-router-dom'
import {Container, Row, Col,} from 'react-bootstrap';
import CustomerPlandetails from './CustomerComponents/CustomerPlandetails';
import CustomerDetailEntryForm from './CustomerComponents/CustomerDetailEntryForm';

function Home(props) {
  console.log(props)
  const [total_due,setTotalDue] = useState(0);

  const dueAmount=(value)=>
  {
      setTotalDue(value)
  }
  // useEffect(()=>{
  //   dueAmount(0);
  // },[]
  // )
  const state = {
    labels:["To be collected ","Collected"],
    datasets :[{
      label: 'Summery',
      borderWidth:6,
      backgroundColor: [
        '#B21F00',
        '#2FDE00'
      ],
      borderColor:'black',
      hoverBackgroundColor: [
      '#501800',
      '#175000',
      ],
      data: [total_due,30]
    }]
  }
  const state2 = {
    labels:["UnPaid Customers","Paid Customers"],
    datasets :[{
      label: 'Summery',
      borderWidth:6,
      backgroundColor: [
        '#B21F00',
        '#2FDE00'
      ],
      borderColor:'black',
      hoverBackgroundColor: [
      '#501800',
      '#175000',
      ],
      data: [80,20]
    }]
  }
    return (
        <div>
          <Container>
            <Row>
              <Col>
              <Doughnut
          data={state}
          options={{
            title:{
              text:"Total collection vs To be collected",
              display:true,
              fontSize:20,
            },
            cutoutPercentage:0,
            circumference:2*Math.PI,
            rotation:-0.5*Math.PI,
            animation:{
                animateRotate:true,
                animateScale:true   
            },
            legend:
            {
              display:true,
              position:"right",
              fontSize:10,
            }
          }}
          />
              </Col>
              <Col>
              <Doughnut
          data={state2}
          options={{
            title:{
              text:"Total customers paid vs unpaid",
              display:true,
              fontSize:20,
            },
            cutoutPercentage:0,
            circumference:2*Math.PI,
            rotation:-0.5*Math.PI,
            animation:{
                animateRotate:true,
                animateScale:true   
            },
            legend:
            {
              display:true,
              position:"right"
            }
          }}
          />
            </Col>
          </Row>
          {console.log(total_due)}
          </Container>
          <CustomerPlandetails props = {props} dueAmount = {dueAmount}></CustomerPlandetails>
        </div>
    )
}

export default Home
