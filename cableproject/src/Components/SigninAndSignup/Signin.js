import React,{useState} from 'react'
import './Signin.css'
import axios from "axios"
function Signin() {
    const [state, setState] = useState(
        {
            username:"",
            passcode:"",
            confirmpassword:""
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
    const passwordconfirm = (e)=>
    {
        e.preventDefault();
        setState(
            {
                confirmpassword :e.target.value,
                passcode:state.passcode,
                username:state.username
            })
            if (e.target.value === state.passcode) {
                console.log("You got it")
            } else {
                console.log(e.target.value);
                console.log(state.passcode);
                console.log(state.username);
                console.log("OOOPS! check and change your confirmation password or password fields")
            }
    }
    const onreset = () =>
    {
      setState(
          {
            username :"",
            passcode :""
          }
      )  
    }
    const onformSubmition = (e)=>
    {
        e.preventDefault();
        const payload = {
            username :state.username,
            passcode :state.passcode,
            confirmpassword:state.confirmpassword
        }
       axios.post('http://localhost:8089/controller/registartion',payload)
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
                <input type="text" id="username" value = {state.username} onChange = {handleChange} placeholder="Username"></input>
                <br></br>
                <br></br>
                <input type="password" id="passcode" value = {state.passcode} onChange = {handleChange} placeholder="Password"></input>
                <br></br>
                <br></br>
                <input type="password" id="confirmpassword" value = {state.confirmpassword} onChange = {passwordconfirm} placeholder="Confirmpassword"></input>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
                <button type="reset" value="reset" className="buttonpadding" onClick={onreset}>Reset</button>
            </form>
        </div>
    )
}

export default Signin