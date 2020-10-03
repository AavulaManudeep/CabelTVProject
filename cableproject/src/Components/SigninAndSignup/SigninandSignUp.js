import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBar from '../NavBar';
import About from '../About';
import Home from '../Home';
import history from '../History';
import { LoginContext } from '../LoginContext';
import CustomerDetailEntryForm from '../CustomerComponents/CustomerDetailEntryForm';
function SigninandSignUp(props) {

    const {target,test} = React.useContext(LoginContext);
    let about = null
    let home = null
    let signin = null;
    let signup = null;
    let other = null;
    let customerform = null;
    if(target)
    {
        about = <Route path ="/about" component= {About}></Route>
        home = <Route path ="/home" component= {Home}></Route> 
        customerform = <Route path ="/customerform" component= {CustomerDetailEntryForm}></Route> 
        other = <Route path ="/*"  component= {Home}></Route>

        //signin = <Route path ="/" exact component= {Home}></Route> 
    }
    else{
       // hom = <Route path ="/" exact component= {Signin}></Route>
        signin = <Route path ="/signin" component = {Signin}></Route>
        signup = <Route path ="/signup" component= {Signup}></Route>
        other  = <Route path ="/*"  component= {Signin}></Route> 

    }
    console.log(target);
    return (
        <div>
            <Router history = {history}>
                <NavBar></NavBar>
                <Switch>
                {signin}
                {signup}
                {about}
                {home}
                {customerform}
                {other}
                </Switch>
                {console.log(target)}
            </Router>
        </div>
    )
}

export default SigninandSignUp;
