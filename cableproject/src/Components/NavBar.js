import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom'
import { LoginContextConsumer, LoginContext } from './LoginContext';
import Signin from './SigninAndSignup/Signin';
function NavBar(props) {
    const naveStyle =
    {
        color: 'white',
        "textDecoration":'none'
    }
    let logout = null 
    let home = null
    let about = null
    let signin = null
    let signup = null
    let customform = null
    const {target ,test} =  React.useContext(LoginContext);
    const func =(e) =>
    {
        localStorage.removeItem("login")
        test.loginfunction();
        console.log(target);
    } 
    console.log(target);
    if(target)
    {
        home = <Link style={naveStyle} to ='/home'> <li>Home</li> </Link>
        logout = <Link style={naveStyle}  to ='/signin'> <li onClick={func}> Logout</li></Link>
        about = <Link style={naveStyle} to ='/about'> <li>About</li> </Link>
        customform = <Link style={naveStyle} to ='/customerform'> <li>NewCustomForm</li> </Link>
    }
    else
    {
        signin = <Link style={naveStyle} to="/signin">
        <li> Signin</li>
        </Link>
        signup = <Link style={naveStyle} to ='/signup'>
        <li>Signup</li>
        </Link>
    }
    return (
        <nav>
            <h3 className="logo">Logo</h3>
            <ul className= "nav-links">
               {home}
               {customform}
               {logout}
               {signin}
               {signup} 
            </ul>
        </nav>
    )
   
}

export default withRouter(NavBar)
