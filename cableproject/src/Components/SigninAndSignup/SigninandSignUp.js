import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBar from '../NavBar';
import About from '../About';
import Home from '../Home';
import history from '../History';
import { LoginContext } from '../LoginContext';
function SigninandSignUp(props) {

    const {target,test} = React.useContext(LoginContext);
    let about = null
    let home = null
    if(target.loginstate)
    {
        about = <Route path ="/about" component= {About}></Route>
        home = <Route path ="/home" component= {Home}></Route>   
    }
    console.log(target.loginstate);
    return (
        <div>
            <Router history = {history}>
                <NavBar></NavBar>
                <Switch>
                <Route path ="/" exact component= {Signin}></Route>
                <Route path ="/signin" component = {Signin}></Route>
                <Route path ="/signup" component= {Signup}></Route>
                {about}
                {home}
                <Route path ="/*"  component= {Signin}></Route>
                </Switch>
                {console.log(target.loginstate)}
            </Router>
        </div>
    )
}

export default SigninandSignUp;
