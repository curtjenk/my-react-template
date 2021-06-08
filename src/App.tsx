// import logo from './logo.svg';
import './App.css';
import Button from './app/components/Button'
import React, { MouseEventHandler, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './redux/reducers/rootReducer';
import { AuthActions } from './redux/actions/AuthActions';

function App() {
  const clickme: MouseEventHandler = () => {
    console.log("Clicked the button");
  }
  const { accessToken } = useSelector((state: AppState) => state.authReducer);
  const authDispatch = useDispatch<Dispatch<AuthActions>>();

  const handleSetAccessToken = (e: React.ChangeEvent<HTMLInputElement>) => {
      authDispatch({type: 'SET_ACCESS_TOKEN', payload: e.target.value})
  }

  return (
    
    <div className="App">
      <div>
            
            <div>
                <input type="text" onChange={handleSetAccessToken}/>
                {accessToken}
            </div>
        </div>

    
      {/* <header className="App-header">
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
      </header> */}
      
    </div>
  );
}

export default App;