import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ClassQuery from  './ClassQuery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/classes">Classes</Link></li>
              </ul>
            </div>
            <Route exact path="/classes" component={ClassQuery} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;