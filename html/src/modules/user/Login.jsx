import React, { Component } from 'react'
import { loginApi } from '../../api/api'
import Captcha from './Captcha'
import styles from './Login.css'

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      captcha: '',
      msg: '',
      errCount: 1,
      random: Math.random()
    }
  }
  clickHandle () {
    loginApi({
      userName: this.state.userName,
      password: this.state.password,
      captcha: this.state.captcha
    })
      .then(res => {
        // 登录成功
        this.setState({
          msg: ''
        })
        this.props.history.push('/home')
      })
      .catch(err => {
        console.log(err)
        let {data: {resultMsg}} = err
        this.setState((prevState, props) => ({
          msg: resultMsg,
          errCount: prevState.errCount + 1
        }))
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

  captchInputHandle (e) {
    this.setState({
      captcha: e.target.value
    })
  }
  
  render () {
    return (
      <div>
        {/* <h1>登录</h1> */}
        <p className={styles.loginMsg}>{this.state.msg}</p>
        {this.state.errCount}
        <div>
          <p>
            用户名：
            <input type="text" onInput={this.userNameInputHandle.bind(this)}/>
          </p>
          <p>
            密&emsp;码：
            <input type="password" onInput={this.pswInputHandle.bind(this)}/>
          </p>
          <Captcha visible={this.state.errCount>3}></Captcha>
          <p>
            <input type="button" value="登录" onClick={this.clickHandle.bind(this)}/>
          </p>
        </div>
      </div>
    )
  }
}