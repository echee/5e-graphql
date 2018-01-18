import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PageClasses from  './PageClasses';
import PageClass from  './PageClass';
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
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/classes">Classes</Link></li>
              </ul>
            </div>
            <Route exact path="/classes" component={PageClasses} />
            <Route exact path="/class/:slug" render={({ match })=> (<PageClass slug={match.params.slug}/>)}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;