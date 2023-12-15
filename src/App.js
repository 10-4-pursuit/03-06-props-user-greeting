import React from 'react';
import './App.css';
import UserGreeting from './UserGreeting';

function App() {
  const sampleUsername = 'Kanique Cox'
  const greetingStyle = {
		display: 'flex',
		fontSize:'110px',
		marginTop: '100px',
    
	}

  return (
    <div>
    <UserGreeting style={greetingStyle} username={sampleUsername} />
    </div>
  );
}

export default App;
