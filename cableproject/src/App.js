import React, {useState}from 'react';
import './App.css';
import SigninandSignUp from './Components/SigninAndSignup/SigninandSignUp';
import { LoginContextProvider } from './Components/LoginContext';
function App() {
  const [loginstate, setstate] = useState(
    false
)
const loginfunction = (e) =>
{
       setstate({
         loginstate:!loginstate
       })
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
