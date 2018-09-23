import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loginApi } from '../../../api/api'
import Captcha from '../Captcha/Captcha'
import styles from './Login.css'

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      captcha: '',
      msg: '',
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
          msg: resultMsg
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
        <div>
          <Link to="/register">
            <p>还没有账号？去注册</p>
          </Link>
        </div>
      </div>
    )
  }
}