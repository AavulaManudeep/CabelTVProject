import React from 'react';
import {Doughnut} from 'react-chartjs-2';
function Home() {

  const state = {
    labels:["UnPaid","Paid"],
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
    return (
        <div>
          <div className="">
          <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:"Average Rainfall",
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
              display:false,
              position:"right"
            }
          }}
          />
          </div>
        </div>
    )
}

export default Home
