import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import paginationFactory from "react-bootstrap-table2-paginator"
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter'
import"./CustomerDetails.css"
import PropTypes from 'prop-types'

const CustomerPlandetails=({props,dueAmount}) => {
    const [state,setState] = useState(
        {userDetails:[]})
    
   let ref = useRef(state)
    useEffect(()=>{  
    axios.get("http://localhost:8089/customerinfo/retrieveall",{headers:
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
                    var total_due=0;
                    userinfo.map(cus => {if(cus.userPlanDetailsVO.price > 0)
                    {total_due =total_due+cus.userPlanDetailsVO.price;
                    console.log(typeof(cus.amountDue))}
                    
                })
                console.log(total_due)
                console.log(dueAmount)
                    dueAmount(total_due);
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
        {dataField:"customerId",text:"Customer ID",sort:true,filter:textFilter()},
        {dataField:"customerFirstName",text:"Name",sort:true},
        {dataField:"userPlanDetailsVO.planName",text:"Current Plan",sort:true},
        {dataField:"userPlanDetailsVO.price",text:"Due Amount",sort:true}
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
            <div className ="pagnation">
            <BootstrapTable 
            keyField="customerId"
            data={state.userDetails}
            columns={columns}
            pagination={paginationFactory()}
            rowEvents={rowEvents}
            search
            striped
            hover
            filter = {filterFactory()}
            >
            </BootstrapTable>
            </div>
        </div>
    )
}

export default CustomerPlandetails
