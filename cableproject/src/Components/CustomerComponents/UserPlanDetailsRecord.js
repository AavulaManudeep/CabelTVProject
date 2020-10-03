import React,{ useEffect,useState } from 'react'
import"./CustomerDetails.css"
import BootStrapTable from 'react-bootstrap-table-next'
import paginationFactory from "react-bootstrap-table2-paginator"
import {Modal,Button} from "react-bootstrap"
import history from "../History"
import BootstrapTable from 'react-bootstrap-table-next'
function UserPlanDetailsRecord({user}) {

    console.log("Inside UsePlan"+user)
    const [customers, setCustomers] = useState(user);
    let userdetail = Object.assign([],user)
    console.log("Userdetais"+userdetail[0])
    const columns =
    [
        {dataField:user.customerId,text:"Customer ID"},
        {dataField:user.customerFirstName+""+user.customerLastName,text:"Name"},
        {dataField:user.customerCurrentPlan,text:"Current Plan"},
        {dataField:user.amountDue,text:"Due Amount"}
    ]

    const getCustomerData = ()=>
    {
        console.log("Inside get")
        setCustomers(user)
    }

    const rowEvents = {
        onClick:(e,row)=>
        {
            console.log(row)
        } 
     }
     useEffect(() => {
        getCustomerData();
    },[]);
    return (
    //    <tr className="userinfo" >
    //         <td>{user.customerId}</td>
    //         <td>{user.customerFirstName+""+user.customerLastName}</td>
    //         <td>{user.customerCurrentPlan}</td>
    //         <td>{user.amountDue}</td>
    //         <td><button onClick={testfun} className="view-button">View</button></td> 
    //         <td><button onClick={testfun} className="delet-button">Delete</button></td>      
    //     </tr>
        <BootstrapTable
        keyField="Customer ID"
        data={customers}
        columns={columns}
        pagination={paginationFactory()}
        rowEvents={rowEvents} >
        </BootstrapTable>
    )
}

const testfun = (e,row) =>
{
   console.log(row)
}

export default UserPlanDetailsRecord
