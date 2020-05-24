import React from 'react'

function UserPlanDetailsRecord({user}) {
    return (
        <tr>
            <td>{user.customerId}</td>
            <td>{user.customerFirstName+""+user.customerLastName}</td>
            <td>{user.customerCurrentPlan}</td>
            <td>{user.amountDue}</td>           
        </tr>
    )
}

export default UserPlanDetailsRecord
