import React, { useEffect,useState } from 'react'
import axios from "axios"
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from "react-bootstrap-table2-paginator"
import {Modal,Button} from "react-bootstrap"
import "./NavBar.css"
import CustomerDetails from './CustomerComponents/CustomerDetails'
import CustomerProfile from '../CustomerComponents/CustomerProfile'
import CustomerDetailEntryForm from './CustomerComponents/CustomerDetailEntryForm'
var count = 0;
var cla = null;
function About(props) {
    const getPlayersData = async()=>
    {
        try {
            var userId = props.history.location.data!==undefined?props.history.location.data.customerId:""
             await axios.post(
                "http://localhost:8087/customerprofile/userdetails",
            userId).then(response=>
                {
                    setPlayers(response.data);
                });
            
        } catch (e) {
            console.log(e);
        }
    }
    const [players, setPlayers] = useState([]);
    const [modaInfo, setModalInfo] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [show,setShow] = useState(false);
    useEffect(() => {   
        getPlayersData();
    },[]);

    const handleClose =()=>{
        setShow(false)
    }
    const handleShow = ()=>
    {
        setShow(true);
    }
    return (
        <div>
            {players.length!==0 ?
            <CustomerDetails userData={players}></CustomerDetails>
            : <CustomerDetailEntryForm></CustomerDetailEntryForm>}
        </div>
        
    )
}

export default About
