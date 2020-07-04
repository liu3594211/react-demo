import React, { Component } from "react";
import { Row, Col, Input, Button, Card } from "antd";
import "./TodoList.less";
import "./index.css";
import axios from "axios";
import store from "./../store/index";
import { CHANGE_INPUT, DELETE, AUTO_INCREMENT } from "./../store/actionTypes";
import {
  changeInputAction,
  AsynchronousData,
  getTodoList,
} from "./../store/actionCreators";
import { getHomeDate } from "./../serve/index";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    /*
       store.getState(): 获取state, 如上, 经过 reducer 返回了一个新的 state, 可以用该函数获取。
      store.dispatch(action): 发出 action, 用于触发 reducer 更新 state,
          store.subscribe(listener): 监听变化，当 state 发生变化时，就可以在这个函数的回调中监听。
     */

    this.state = {
      list: store.getState().list,
      multiple: store.getState().multiple,
      Input: "",
    };
    //先绑定方法
    this.handleStoreChange = this.handleStoreChange.bind(this);
    //订阅模式  ，然后订阅,state里面的数据变化，就会变化
    // store.subscribe(this.handleStoreChange);
  }
    //写一个方法，用this.setState更新加载的数据
    handleStoreChange() {
      this.setState(store.getState());
    }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
    //如果要更改就需要这样设置
    store.subscribe(()=>{
      this.setState(store.getState());
    })
  }

  onChangeInp = (e) => {
    this.setState({
      Input: e.target.value,
    });
  };

  addList = () => {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: this.state.Input,
    // };
    const action = changeInputAction(this.state.Input);
    store.dispatch(action);
  };
  autoIncrement = () => {
    const action = {
      type: AUTO_INCREMENT,
      value: this.state.multiple + 1,
    };
    store.dispatch(action);
  };
  Delete(index) {
    const action = {
      type: DELETE,
      value: index,
    };
    store.dispatch(action);
  }

  render() {
    const style = { marginLeft: "10px" };
    return (
      <div className="TodoList">
        <Row>
          <Col span={3}>
            <div>
              <Input placeholder="Basic usage" onChange={this.onChangeInp} />
            </div>
          </Col>
          <Col span={1}>
            <div style={style}>
              <Button type="primary" style={style} onClick={this.addList}>
                添加
              </Button>
            </div>
          </Col>
        </Row>
        <Card style={{ width: 300 }}>
          {this.state.list.map((item, index) => {
            return (
              <p key={item.public_id} onClick={this.Delete.bind(this, index)}>
                {item.name}
              </p>
            );
          })}
        </Card>
        <span>{this.state.multiple}</span>
        <Button type="primary" onClick={this.autoIncrement}>
          增加
        </Button>
      </div>
    );
  }
}
