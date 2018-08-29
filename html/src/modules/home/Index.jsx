import React, { Component } from 'react'

export default class HomeIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'home page'
    }
  }
  render () {
    return (
      <div>
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}