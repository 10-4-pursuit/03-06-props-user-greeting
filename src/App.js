import React from 'react';
import './App.css';
import UserGreeting from './UserGreeting';

function App() {
  const sampleUsername = 'Kanique Cox';

  return (
    <div >
    <UserGreeting username={sampleUsername} />
    </div>
  );
}

export default App;
