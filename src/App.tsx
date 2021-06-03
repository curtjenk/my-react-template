// import logo from './logo.svg';
import './App.css';
import Button from './app/components/Button'
import React, { MouseEventHandler } from 'react';

function App() {
  const clickme: MouseEventHandler = () => {
    console.log("Clicked the button");
  }
  return (
    
    <div className="App">
      <Button text="hello" onClick={clickme} />
      <header className="App-header">
        <img src={require("./logo.svg").default} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;