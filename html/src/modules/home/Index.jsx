import React, { Component } from 'react'
import { homeInitApi } from '../../api/api'

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
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}