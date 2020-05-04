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

    const onformSubmition = ()=>
    {
        if(state.username.length && state.passcode.length)
        {
            const payload ={
                "username":state.username,
                "passcode":state.passcode
            }
            axios.post("http://192.168.1.160:8089/controller/test",payload)
            .then(function(response)
            {
                console.log("success");
                if(response.data.code === 200)
                {
                    setState(prevState =>
                        ({
                          ...prevState,
                          'successmessage':'Logged in Sucess'      
                        }))
                    this.props.showError(null);
                }
            }).catch(function(error)
            {
                console.log(error);
            });
        }
        else{
            this.props.showError("Please provide valid username and password");
        }
    }
    return (
        <div>
            <div>
                <h3>Login</h3>
            </div>
            <form>
                <input type="text" id="username" value = {state.username} onChange = {handleChange}></input>
                <br></br>
                <br></br>
                <input type="password" id="passcode" value = {state.passcode} onChange = {handleChange}></input>
                <br></br>
                <br></br>
                <button type="submit" onClick = {onformSubmition}>Login</button>
                <button type="reset" value="reset" className="buttonpadding">Reset</button>
            </form>
        </div>
    )
}

export default Signin
