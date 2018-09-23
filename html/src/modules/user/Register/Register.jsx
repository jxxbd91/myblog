import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { registerApi } from '../../../api/api'
import styles from './Register.css'

export default class Register extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      errorMsg: ''
    }
  }

  unChangeHandle (e) {
    this.setState({
      userName: e.target.value
    })
  }

  pwChangeHandle (e) {
    this.setState({
      password: e.target.value
    })
  }

  submitHandle () {
    let params = {
      userName: this.state.userName,
      password: this.state.password
    }
    registerApi(params)
      .then(res => {
        console.log(res)
        this.props.history.push('/login')
      })
      .catch(err => {
        let { data: {resultMsg} } = err
        this.setState({
          errorMsg: resultMsg
        })
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <p className={styles.regError}>{this.state.errorMsg}</p>
        <div>
          <p>
            <span>用户名</span>
            <input type="text" onChange={this.unChangeHandle.bind(this)} />
          </p>
          <p>
            <span>密&emsp;码</span>
            <input type="password" onChange={this.pwChangeHandle.bind(this)} />
          </p>
          <p>
            <input type="button" value="注册" onClick={this.submitHandle.bind(this)} />
          </p>
        </div>
        <div>
          <Link to="login">
            <p>已有账号去登录</p>
          </Link>
        </div>
      </div>
    )
  }
}