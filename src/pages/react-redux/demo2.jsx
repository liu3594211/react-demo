import React, { Component } from 'react'
import {connect} from 'react-redux'
 class demo2 extends Component {
  render() {

    //获取仓库里面的数据
    const {value} = this.props
    
    return (
      <div>
        数据{value}
      </div>
    )
  }
}

//将state存储的内容映射到组件的props
const mapStateToProps = (state)=>{
  return {
    value:state.count
  }
}


export default connect(mapStateToProps)(demo2)
