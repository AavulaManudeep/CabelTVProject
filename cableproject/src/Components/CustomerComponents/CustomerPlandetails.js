import React,{useState,useEffect,useRef} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import UserPlanDetailsRecord from './UserPlanDetailsRecord';
import paginationFactory from "react-bootstrap-table2-paginator"
import {Modal,Button} from "react-bootstrap"
import history from "../History"
import BootstrapTable from 'react-bootstrap-table-next'
import"./CustomerDetails.css"
import PropTypes from 'prop-types'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from '../About'
import { LoginContextProvider } from '../LoginContext';
const CustomerPlandetails=({props}) => {
    const [state,setState] = useState(
        {userDetails:[]})
    
    const contextTypes = {
        router: PropTypes.object
    }
   let ref = useRef(state)
    useEffect(()=>{  
    axios.get("http://ec2-18-222-133-226.us-east-2.compute.amazonaws.com:8089/customerinfo/retrieveall",{headers:
       {'Authorization': localStorage.getItem('Authorization')}})
        .then(response =>
            {
                //console.log(response.data)
                if(response.data!==null)
                {
                   // console.log(response.data)
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

    const columns =
    [
        {dataField:"customerId",text:"Customer ID"},
        {dataField:"customerFirstName",text:"Name"},
        {dataField:"customerCurrentPlan",text:"Current Plan"},
        {dataField:"amountDue",text:"Due Amount"}
    ]

    // const getCustomerData = ()=>
    // {
    //     console.log("Inside get")
    //     setCustomers(user)
    // }

    

    const rowEvents = {
        onClick:(e,row)=>
        {
           //const p = Object.assign({},props)
            
           console.log(props)
           props.history.push({
               pathname:'/about',
               data:row
           })           
        } 
     }
    //  useEffect(() => {
    //     getCustomerData();
    // },[]);

    return (
        // <div>
        //     {/* <Table responsive variant="dark">
        //        <thead>
        //         <tr>
        //             <th>Customer ID</th>
        //             <th>Name</th>
        //             <th>Current Plan</th>
        //             <th>Due Amount</th>
        //         </tr>
        //        </thead>
        //        <tbody>
        //         {state.userDetails.map((user)=>{
        //            return <UserPlanDetailsRecord user={user} key = {user.customerId}></UserPlanDetailsRecord>
        //         })}
        //        </tbody>
        //    </Table>  */}

        //    {console.log(state.userDetails)}
        //    <UserPlanDetailsRecord user={state.userDetails} key = {state.userDetails}></UserPlanDetailsRecord>
        // </div>
        <div>
            About
            <div className ="pagnation">
            <BootstrapTable 
            keyField="customerId"
            data={state.userDetails}
            columns={columns}
            pagination={paginationFactory()}
            rowEvents={rowEvents}
            ></BootstrapTable>
            </div>
        </div>
    )
}

export default CustomerPlandetails
