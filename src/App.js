import logo from './logo.svg';
import './App.css';
import UserGreeting from './UserGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <UserGreeting userName='Mark'/> 
       <UserGreeting userName='Pam'/> 
       
      </header>
    </div>
  );
}

export default App;
