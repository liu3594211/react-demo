import React, { Component } from 'react'

export default class query extends Component {

  componentDidMount(){
    this.props.onRefChild(this)
}

childMethods = () => alert('子组件被执行了')

  render() {
    return (
      <div>
        我是子组件
      </div>
    )
  }
}
