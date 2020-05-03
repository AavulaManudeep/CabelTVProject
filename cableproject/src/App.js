import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Login</h3>
        </div>
      <form method='post'>
      <input type ="text" name="username"></input>
      <br></br>
      <br></br>
      <input type ="password" name="passcode"></input>
      <br></br>
      <br></br>
      <button type ="submit" value="login">Login</button>
      <button type = "reset" value="reset" className="buttonpadding">Reset</button>
      </form>
      </header>
    </div>
  );
}

export default App;
