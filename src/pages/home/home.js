import React, {
    Component
} from 'react'
import {
    BrowserRouter as Router ,
    Route,
    Switch,
    Link
  } from 'react-router-dom'

export default class home extends Component {
    constructor(){
    super()
    this.state = {
        list:[
            {
                cid:1,
                name:'我是技术胖'
            },
            {
                cid:2,
                name:'我是技术胖'
            },
            {
                cid:3,
                name:'我是技术胖'
            }
        ]
    }
    }
    componentDidMount(){
        console.log(this.props.match.params.name);
        
    }
    render() {
        return ( <div >我是home组件
            {
                this.state.list.map((item)=>{
                   return (
                       <Link to={'/home/' + item.cid} key={item.cid} >
                        
                        {item.name}
                       </Link>
                   
                    )
                })
            }
        
             </div>
        )
    }
}