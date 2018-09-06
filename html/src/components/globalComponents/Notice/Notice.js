import React from 'react'
import ReactDOM from 'react-dom'
import NoticeComp from './NoticeComp'

class Notice {
  constructor () {
    this.visible = false
    this.div = null
    this.props = {}
  }
  show(props) {
    this.visible = true
    this.props = props
    init.call(this)
  }
}

/**
 * close 方法变成私有方法
 */
function close() {
  ReactDOM.unmountComponentAtNode(this.div)
  document.body.removeChild(this.div)
}

/**
 * init 方法变成私有
 */
function init() {
  this.div = document.createElement('div')
  document.body.append(this.div)
  ReactDOM.render(<NoticeComp visible={this.visible} closeFn={close} self={this} {...this.props}></NoticeComp>, this.div)
}

export default () => {
  return new Notice()
}