import React, { Component } from 'react'
import { Button } from 'antd'
import {connect} from 'react-redux'
 class demo extends Component {
  
  onClickBtns = ()=>{
    console.log(this.props);
      const {onIncreaseClick} = this.props
      onIncreaseClick()
  }
  render() {
    return (
      <div>
       <Button onClick={this.onClickBtns}>增加+</Button>
      </div>
    )
  }

}

//将action映射到要用到的组件的props
const mapDispatchToProps = (dispatch)=>{
  return {
    onIncreaseClick:()=>dispatch({
      type:'REFERENCE_ERR',
     
    })
  }
}
export default connect(null,mapDispatchToProps)(demo)
