import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './modules/user/Login.jsx';
import HomeIndex from './modules/home/Index.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">登录</Link>
              <Link to="/home">首页</Link>
            </li>
          </ul>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={HomeIndex}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
