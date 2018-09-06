import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './modules/user/Login.jsx';
import HomeIndex from './modules/home/Index.jsx'
import Notice from './components/globalComponents/Notice/Notice.js'
import './App.css';
import './style/init.css'

class App extends Component {
  componentWillMount () {
    window.routerHistory = this.props.history
  }
  clickHandle () {
    Notice().show({
      autoClose: true,
      msg: 'hello world'
    })
  }
  render() {
    return (
      <div>
        <span onClick={this.clickHandle.bind(this)}>点击</span>
        <Router>
          <div className="App">
            <ul>
              <li>
                <Link to="/login">登录</Link>
              </li>
              <li>
                <Link to="/home">首页</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route path="/home" component={HomeIndex}></Route>
              <Route component={Login}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
