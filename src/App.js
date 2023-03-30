import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';
import UserInput from './UserInput';
import { useState } from 'react';

function App() {
  const [state,setState] = useState(()=>{
    return JSON.parse(localStorage.getItem('progressBarData'))||{
      userInput:0
    }
  })
  const updateInput = (input)=>{
    setState({userInput:input})
  }
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar userInput={state.userInput} />
      <UserInput updateInput={updateInput} />
    </div>
  );
}

export default App;
