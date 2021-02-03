import React,{useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

function CustomerPaymentHistory() {

    cost [paymetHistory,setPaymentHistort] = useState([]);
    
    return (
        <div>
            <BootstrapTable
            keyField="Customer ID"
            data={customers}
            columns={columns}
            pagination={paginationFactory()}
            rowEvents={rowEvents}/>
        </div>
    )
}

export default CustomerPaymentHistory
