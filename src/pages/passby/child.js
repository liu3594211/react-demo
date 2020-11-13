import React, { Component } from 'react'
import   Query  from './query'
export default class child extends Component {

  onRefChild = (ref) => {
    this.child = ref

    console.log(ref);
    
}

clickParent = (e) => {
    this.child.childMethods()
}

  render() {
    return (
      <div>
        <Query onRefChild={this.onRefChild} />
        <button onClick={this.clickParent} >{'点击'}</button>
      </div>
    )
  }
}
