import React, { Component } from 'react'
import {
  BrowserRouter as Router ,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Login from './component/login/Login'
import Admin from './component/admin/admin' 



export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
             <Switch> {/*只匹配第一个*/}
             <Route path='/login' component={Login}></Route>
            <Route path='/' component={Admin}></Route>
             </Switch>
      </Router>
      </div>
    )
  }
}
