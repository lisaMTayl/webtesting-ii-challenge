import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">

    </div>
  );
}

export default App;

{/*
### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
  */}
