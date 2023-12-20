import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserGreeting from './UserGreeting';

function App() {
  const user = "claireisfabulous"
  return (
    <div className="App">
      <UserGreeting username={user} />
    </div>
  );
}

export default App;
