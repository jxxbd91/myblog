import React, { Component } from 'react'
import styles from './Notice.css'

export default class NoticeComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.visible
    }
  }

  close() {
    this.props.closeFn.call(this.props.self)
  }

  render() {
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