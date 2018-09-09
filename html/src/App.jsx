import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './modules/user/Login/Login'
import Register from './modules/user//Register/Register'
import HomeIndex from './modules/home/Index.jsx'
// import Notice from './components/globalComponents/Notice/Notice.js'
import './App.css';
import './style/init.css'

class App extends Component {
  componentWillMount () {
    window.routerHistory = this.props.history
  }
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/home" component={HomeIndex}></Route>
              <Route component={HomeIndex}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
