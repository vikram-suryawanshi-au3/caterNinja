import logo from './logo.svg';
import './App.css';
import BookChef from './Component/BookChef.js'
import Demo from './Component/Demo'

function App() {
  return (
    <div className="App">
      <BookChef/>
      {/* <Demo/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
