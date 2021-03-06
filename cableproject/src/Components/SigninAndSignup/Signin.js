import React,{useState} from 'react'
import './Signin.css'
import axios from "axios"
import { LoginContext } from '../LoginContext'
import history from '../History'
function Signin(props) {

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
    const onreset = () =>
    {
      setState(
          {
            username :"",
            passcode :""
          }
      )  
    }

    const {target,test} = React.useContext(LoginContext);
    console.log(target);
    const signinsuccess = (e) =>
    {
        console.log(test);
        test.loginfunction();
        console.log(target);
    }

    const onformSubmition = (e)=>
    {
        e.preventDefault();
        const payload = {
            username :state.username,
            passcode :state.passcode,
            confirmpassword:state.confirmpassword
        }
       axios.post('http://localhost:8089/controller/login',payload)
       .then(response=>
        {
            if(response.data === "Success")
            {
                console.log(response.data)
                signinsuccess();
                console.log(target);
                if(!target)
                {
                    console.log("Inside history");
                    history.push("/home")
                }
                else
                {
                    console.log("Inside /Signin history");
                    history.push("/signin")
                }
            }
            console.log(target);
        }).catch(error => {
            console.log("Inside");
            console.log(error);
          });
    }
    return (
        <div>
            <div>
                <h3>Signin</h3>
            </div>
            <form onSubmit ={onformSubmition}>
                <input type="text" id="username" value = {state.username} onChange = {handleChange} placeholder="Username"></input>
                <br></br>
                <br></br>
                <input type="password" id="passcode" value = {state.passcode} onChange = {handleChange} placeholder="Password"></input>
                <br></br>
                <br></br>
                <button type="submit" disabled ={false}>Signin</button>
                <button type="reset" value="reset" className="buttonpadding" onClick={onreset}>Reset</button>
            </form>
        </div>
    )
}

export default Signin
