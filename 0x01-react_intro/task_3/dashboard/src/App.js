import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';
import holberton_logo from './holberton_logo.jpg';

function App() {
  return (
    <> 
      <div className="App-header" data-testid="app-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body" data-testid="app-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' />

        <label htmlFor='password'> Password: </label>
        <input type='password' id='password' />

        <button>Ok</button>
      </div>
      <div className="App-footer" data-testid="app-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
