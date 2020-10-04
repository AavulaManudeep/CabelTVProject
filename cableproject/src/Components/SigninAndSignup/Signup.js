import React, {useState}from 'react'
import './Signin.css'
import axios from "axios"
import { LoginContext } from '../LoginContext';
import history from '../History';
function Signup(props) {
    const [state, setState] = useState(
        {
            username:"",
            passcode:"",
            confirmpassword:"",
            usernameError:"",
            passwordError:"",
            confirmpasswordError:""

        }
    )
    const {target,test} = React.useContext(LoginContext);
    console.log(target);
    const signupsuccess = (e) =>
    {
        console.log(test);
        test.loginfunction();
        console.log(target);
    }
    const handleChange = (e)=>
    {
        const {id,value} = e.target;
        setState(prevState =>
            ({
                ...prevState,
                [id]:value
            }))
        console.log(e.target.value); 
        if([id][0]==="username" )
        {
            
            if(value==='')
            {
                console.log("Invalid");
                setState(prevState =>
                    ({
                        ...prevState,
                        usernameError:"*username cannot be empty"
                    })) 
            } 
            else{
                console.log("Valid");
                setState(prevState =>
                    ({
                        ...prevState,
                        usernameError:""
                    })) 
            }
        }
        if([id][0]==="passcode" )
        {
            console.log(value);
            if(value==='')
            {
                console.log("Invalid");
                setState(prevState =>
                    ({
                        ...prevState,
                        passwordError:"*password cannot be empty"
                    })) 
            } 
            else{
                console.log("Valid");
                setState(prevState =>
                    ({
                        ...prevState,
                        passwordError:""
                    })) 
            }
        }
        if([id][0]==="passcode" && state.confirmpassword!=='')
        {
         checkonconfirmpassword(e.target.value);
        }
    }
    console.log(state.passcode);
    const checkonconfirmpassword = (value)=>
    {
        if(value!==state.confirmpassword)
        {
            setState(prevState =>
                ({
                    ...prevState,
                    confirmpasswordError : "*password doesn't match"
            }))
        }
        else{
            setState(prevState =>
                ({
                    ...prevState,
                    confirmpasswordError : ""
            }))
        }
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
                setState( prevState =>
                    ({
                        ...prevState,
                        passcode:state.passcode,
                        username:state.username,
                        confirmpasswordError : ""
                    })
                )
                
            } else {

                setState(prevState =>
                    ({
                        ...prevState,
                        passcode:state.passcode,
                        username:state.username,
                        confirmpasswordError : "*password doesn't match"
                    })
                )
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
            username:"",
            passcode:"",
            confirmpassword:"",
            usernameError:"",
            passwordError:"",
            confirmpasswordError:""
          }
      )  
    }
    const onformSubmition = (e)=>
    {
        e.preventDefault();
        let payload={};
        console.log(state.confirmpasswordError);
        console.log(state.usernameError);
        console.log(state.passwordError);
        if(state.username !=='' && state.confirmpasswordError ==='' 
         && state.passcode !=='')
        {
            payload = {
                username :state.username,
                passcode :state.passcode,
                confirmpassword:state.confirmpassword
            }
        }
        else if(state.passcode==='' && state.confirmpassword ==='')
        {
            setState(prevState =>
                ({
                    ...prevState,
                    passwordError:"*Password cannot be empty",
                    confirmpasswordError:"*Confirmpassword cannot be empty"
                })) 
            payload={};
        }
        else if(state.username ===''){
            setState(prevState =>
                ({
                    ...prevState,
                    usernameError:"*username cannot be empty"
                    
                })) 
            payload={};
        }
        else if(state.confirmpassword ===''){
            setState(prevState =>
                ({
                    ...prevState,
                    confirmpasswordError:"*password doesn't match"
                })) 
            payload={};
        }
        else
        {
            console.log("Hey I am here")
            payload={};
        }
       axios.post('http://ec2-18-222-133-226.us-east-2.compute.amazonaws.com:8089/controller/registartion',payload)
       .then(response=>
        {
            if(response.data === "Registerd")
            {
                signupsuccess()
                if(!target)
                {
                    console.log("Inside Signup")
                    history.push("/home")
                }
                else
                {
                    history.push("/signup")
                }
            }
            console.log(response.data)
        }).catch(error => {
            console.log("Inside");
            console.log(error);
            history.push("/signup")
          });
    }
    return (
        <div>
            <div>
                <h3>Signup</h3>
            </div>
          <form onSubmit ={onformSubmition}>
                <input type="text" id="username" value = {state.username} onChange = {handleChange} placeholder="Username"></input>
                <p className="error">{state.usernameError}</p>
                <input type="password" id="passcode" value = {state.passcode} onChange = {handleChange} placeholder="Password"></input>
                <p className="error">{state.passwordError}</p>
                <input type="password" id="confirmpassword" value = {state.confirmpassword} onChange = {passwordconfirm} placeholder="Confirmpassword"></input>
                <p className="error">{state.confirmpasswordError}</p>
                <button type="submit">Signup</button>
                <button type="reset" value="reset" className="buttonpadding" onClick={onreset}>Reset</button>
            </form>
        </div>
    )
}

export default Signup
