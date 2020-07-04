import React, {
    Component
} from 'react'
import {
    BrowserRouter as Router ,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

  import List from './blogger/list'
  import Form from './blogger/form'
export default class about extends Component {
    render() {
        return ( 
              <div >            
                 我是博客首页  
                 <br />
                 <Link to='/about/list'>list列表</Link> 
                 <Link to='/about/from'>from表单</Link>  <br />
                 <div>               
                 <Route path='/about/list' component={List} />   
                 <Route path='/about/from' component={Form} />   
                 <Route />     
                 </div>             
             </div>
        )
    }
}