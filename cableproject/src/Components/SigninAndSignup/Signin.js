import React,{useState} from 'react'
import './Signin.css'
import axios from "axios"
function Signin() {
    const [state, setState] = useState(
        {
            username:"",
            passcode:"",
            successmessage:null
        }
    )
    const handleChange = (e)=>
    {
        const {id,value} = e.target;
        setState(prevState =>
            ({
                ...prevState,
                [id]:value
            }))
    }

    const onformSubmition = (e)=>
    {
        e.preventDefault();
        const payload = {
            username :state.username,
            passcode :state.passcode
        }
       console.log(state.username);
       axios.post('http://localhost:8089/controller/test',payload)
       .then(response=>
        {
            console.log(response.data)
        }).catch(error => {
            console.log("Inside");
            console.log(error);
          });
    }
    return (
        <div>
            <div>
                <h3>Login</h3>
            </div>
            <form onSubmit ={onformSubmition}>
                <input type="text" id="username" value = {state.username} onChange = {handleChange}></input>
                <br></br>
                <br></br>
                <input type="password" id="passcode" value = {state.passcode} onChange = {handleChange}></input>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
                <button type="reset" value="reset" className="buttonpadding">Reset</button>
            </form>
        </div>
    )
}

export default Signin
