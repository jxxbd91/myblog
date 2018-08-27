import React, { Component } from 'react'
import { loginApi } from '../../api/api'

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }
  clickHandle () {
    loginApi({
      userName: this.state.userName,
      password: this.state.password
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  userNameInputHandle (e) {
    this.setState({
      userName: e.target.value
    })
  }
  pswInputHandle(e) {
    this.setState({
      password: e.target.value
    })
  }
  render () {
    return (
      <div>
        <h1>登录</h1>
        <div>
          <p>
            用户名：
            <input type="text" onInput={this.userNameInputHandle.bind(this)}/>
          </p>
          <p>
            密&emsp;码：
            <input type="password" onInput={this.pswInputHandle.bind(this)}/>
          </p>
          <p>
            <input type="button" value="登录" onClick={this.clickHandle.bind(this)}/>
          </p>
        </div>
      </div>
    )
  }
}