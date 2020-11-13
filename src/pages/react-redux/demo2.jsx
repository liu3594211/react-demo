import React, { Component } from 'react'
import { connect } from 'react-redux'
class demo2 extends Component {
  render() {
    //获取仓库里面的数据

    console.log('this.props', this.props)

    return <div>数据</div>
  }
}

//将state存储的内容映射到组件的props
const mapStateToProps = (state) => {
  return {
    value: state,
  }
}

export default connect(mapStateToProps)(demo2)
