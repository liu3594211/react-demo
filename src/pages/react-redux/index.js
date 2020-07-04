import React, { Component } from 'react'
import Demo from './demo'
import Demos from './demo2'
import {Provider} from 'react-redux'
import store from './../../store/index'
export default class index extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
             <Demo />
             <Demos />
        </Provider>
       
      </div>
    )
  }
}
