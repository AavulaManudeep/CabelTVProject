import React, { useEffect,useState } from 'react'
import axios from "axios"
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from "react-bootstrap-table2-paginator"
import {Modal,Button} from "react-bootstrap"
import "./NavBar.css"
function About(props) {
    console.log(props)
    //const userdata = props.location.data.customerId
    const [players, setPlayers] = useState([]);
    const [modaInfo, setModalInfo] = useState([]);
    const [showModal,setShowModal] = useState(false);

    const [show,setShow] = useState(false);
    const handleClose =()=>{
        setShow(false)
    }
    const handleShow = ()=>
    {
        setShow(true);
    }
    const getPlayersData = async() =>
    {
        try {
            const data = await axios.post(
                "http://localhost:8087/customerprofile/userdetails",
            "222-SWAT-000");
            console.log(data.data);
            setPlayers(data.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getPlayersData();
    },[]);

    // const columns =
    // [
    //     {dataField:"name",text:"Player Name"},
    //     {dataField:"points_per_game",text:"Points per"},
    //     {dataField:"team_name",text:"Player Team"},
    // ]

    // const rowEvents = {
    //    onClick:(e,row)=>
    //    {
    //        console.log(row)
    //    } 
    // }
    return (
        <div>
            About
            {/* <div className ="pagnation">
            <BootstrapTable 
            keyField="name"
            data={players}
            columns={columns}
            pagination={paginationFactory()}
            rowEvents={rowEvents}
            ></BootstrapTable>
            </div> */}
        </div>
    )
}

export default About
