import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBar from '../NavBar';
function SigninandSignUp() {
    const onSigninandSignupbuttonClick =(e)=>
    {
        
    }
    return (
        <div>
            <Router>
                <NavBar></NavBar>
                <Switch>
                <Route path ="/" exact component= {Signin}></Route>
                <Route path ="/signin" component= {Signin}></Route>
                <Route path ="/signup" component= {Signup}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default SigninandSignUp;
