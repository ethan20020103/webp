import './App.css';
import login from './login';
import userName from './userName';
import password from './password';
import button from './button';

function App() {
  return (
    <div className = "App">
        <div className = 'login'> {login()} </div>
        <div className = 'input'> {userName()} </div>
        <div className = 'input'> {password()} </div>
        <div className = 'btn'> {button()} </div>
      </div>
  );
}

export default App;