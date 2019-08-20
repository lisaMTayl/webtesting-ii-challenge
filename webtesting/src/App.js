import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const addStrike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    } else {
      setStrikes(0);
    }
    return strikes;
  };

  const addBall = () => {
    if (balls < 3) {
      setBalls(balls +1)
    } else {
      setBalls(0);
    }
    return balls;
  };

  const resetCount = () => {
   setStrikes(0);
   setBalls(0);
  };



  return (
    <div className="App">
      <h1>Zephyr's Field</h1>
      <Display strikes = {strikes} balls = {balls}/>
      <Dashboard addStrike = {addStrike} addBall = {addBall} />
    </div>
  );
};

export default App;



