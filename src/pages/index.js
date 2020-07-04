import React, { Component } from 'react';
import { Button } from 'antd';
import {
    BrowserRouter as Router ,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  import About from './home/about'
  import Market from './home/market'
  import Video from './home/video'

  import './index.css'
export default class index extends Component {
     constructor(){
         super()
         this.state = {
             list:[
                 {
                     path:'/',title:'博客首页',exact:true,component:About
                 },
                 {
                    path:'/market',title:'职场精英',exact:false,component:Market
                },
                {
                    path:'/Video',title:'视频教程',exact:false,component:Video
                }
             ]
         }
     }
    render() {

        return (
            <div>
                <Button type="primary">Button</Button>
                <Router>
                  <ul className='next-index'>
                      {
                          this.state.list.map((item)=>{
                              return (
                                <li  key={item.title}>
                                   <Link to={item.path}>{item.title}</Link>       
                                </li>
                               
                              )
                          }) 
                      }
                      {/* 
                       <Link to='/about'>博客首页</Link>                       
                      </li>
                      <li>
                      <Link to='/market'>职场精英</Link>
                      </li>
                      <li>
                      <Link to='/video'>视频教程</Link>
                      </li> */}
                  </ul>
                <div className='offside'>
                    {
                         this.state.list.map((item)=>{
                             return (
                                <Route path={item.path} exact={item.exact}   key={item.title} component={item.component} />
                             )
                         })
                    }
                {/* <Route path='/' exact component={About} />
                 <Route path='/about'  component={About} />
                 <Route path='/market' exact component={Market} />
                 <Route path='/video' exact component={Video} /> */}
                </div>

                </Router>
            </div>
        )
    }
}
