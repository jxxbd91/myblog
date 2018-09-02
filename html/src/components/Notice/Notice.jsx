import React, { Component } from 'react'
import styles from './Notice.css'

export default class Notice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  
  close () {
    this.setState({
      visible: false
    })
  }
  
  render () {
    let cn = styles['notice-wrap']
    if (!this.state.visible) {
      cn += styles['notice-hide']
    }
    return (
      <div className={cn}>
        <p>{this.props.msg}</p>
        <span onClick={this.close.bind(this)} className={styles.noticeClose}>关闭</span>
      </div>
    )
  }
}