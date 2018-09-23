import React, { Component } from 'react'
import { apiMap } from "../../../env/config";


export default class Captcha extends Component {

  constructor (props) {
    super(props)
    this.baseSrc = `${apiMap.user}/captcha?`
    this.state = {
      random: Math.random()
    }
  }
  
  clickHandle () {
    this.setState({
      random: Math.random()
    })
  }

  render () {
    return (
      <div style={{ display: this.props.visible ? '' : 'none' }}>
        <input type="text"/>
        <img onClick={this.clickHandle.bind(this)} src={this.baseSrc + this.state.random} alt=""/>
      </div>
    )
  }
}