import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Container, Row, Col,} from 'react-bootstrap';
import CustomerPlandetails from './CustomerComponents/CustomerPlandetails';

function Home() {
  
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
      data: [50,30]
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
          </Container>
          <CustomerPlandetails></CustomerPlandetails>
        </div>
    )
}

export default Home
