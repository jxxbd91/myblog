import React, { Component } from 'react'
import { publishApi } from '../../api/api'

export default class Publish extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  taChangeHandle (e) {
    this.setState({
      text: e.target.value
    })
  }

  titleChangeHandle (e) {
    this.setState({
      title: e.target.value
    })
  }

  submitHandle () {
    let params = {
      text: this.state.text,
      title: this.state.title
    }
    publishApi(params)
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
        <p>
          标题
          <input type="text" onChange={this.titleChangeHandle.bind(this)}/>
        </p>
        <div>
          内容
          <textarea name="" id="" cols="30" rows="10" onChange={this.taChangeHandle.bind(this)}></textarea>
        </div>
        <input type="button" value="发表" onClick={this.submitHandle.bind(this)} />
      </div>
    )
  }
}