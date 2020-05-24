import React,{useState,useEffect,useRef} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import UserPlanDetailsRecord from './UserPlanDetailsRecord';

function CustomerPlandetails(props) {


    const [state,setState] = useState(
        {userDetails:[]})
   let ref = useRef(state)
    useEffect(()=>{  
       axios.get("http://localhost:8089/customerinfo/retrieveall")
        .then(response =>
            {
                console.log(response.data)
                if(response.data!==null)
                {
                    console.log(response.data)
                    const userinfo = Object.assign([], response.data)
                    setState({userDetails:userinfo})
                    ref.current.due_amount = response.data[0].amountDue;
                }
            }
            ).catch(error=>
                {
                    console.log("Reference"+ref.current.due_amount) 
                    ref.current.due_amount = "Error";
                })
        },[]
    )
    return (
        <div>
           <Table responsive variant="dark">
               <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Current Plan</th>
                    <th>Due Amount</th>
                </tr>
               </thead>
               <tbody>
                {state.userDetails.map((user)=>{
                   return <UserPlanDetailsRecord user={user} key = {user.customerId}></UserPlanDetailsRecord>
                })}
               </tbody>
           </Table>
        </div>
    )
}

export default CustomerPlandetails
