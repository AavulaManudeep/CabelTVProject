import React, {useState}from 'react';
import './App.css';
import SigninandSignUp from './Components/SigninAndSignup/SigninandSignUp';
import { LoginContextProvider } from './Components/LoginContext';
function App() {

  console.log("Inside App.js");
  const [loginstate, setstate] = useState(
    false
)
if(localStorage.getItem("login")==null)
{
  localStorage.setItem("login",false) 
}
const loginfunction = (e) =>
{  
    console.log("Inside LoginFunction");
       setstate(
         localStorage.getItem("login")
       )
}
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <LoginContextProvider value={{target:loginstate,test:{loginfunction}}}>
      <SigninandSignUp ></SigninandSignUp>
      </LoginContextProvider>
    </div>
  );
}
export default App;
