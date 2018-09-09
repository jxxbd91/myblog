import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { homeInitApi } from '../../api/api'
import Publish from '../publish/Publish'

export default class HomeIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'home page'
    }
  }
  componentWillMount () {
    homeInitApi({})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    return (
      <div>
        {/* 路由 */}
        <h1>这是首页</h1>
        <ul>
          <li>
            <NavLink to="/home">首页</NavLink>
          </li>
          <li>
            <NavLink to="/publish">发表</NavLink>
          </li>
          <Route path="/publish" component={Publish}></Route>
        </ul>
      </div>
    )
  }
}