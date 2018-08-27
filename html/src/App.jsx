import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './modules/user/Login.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">登录</Link>
            </li>
          </ul>
          <Route path="/login" component={Login}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
