import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar/>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Hoy es sabado</h1>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.educacionit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with EducaciónIT
          </a>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
