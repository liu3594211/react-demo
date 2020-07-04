import React, { Component, createContext } from "react";
//先设置
const BattertContext = createContext();
export default class Countext extends Component {
  constructor() {
    super();
    this.state = {
      value: "传递的数据",
      count: 1,
    };
  }
  onClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <BattertContext.Provider
          value={{
            value: this.state.value,
            onClick: this.onClick,
            count: this.state.count,
          }}
        >
          <Countforer></Countforer>
        </BattertContext.Provider>
        123
      </div>
    );
  }
}

//子组件
class Countforer extends Component {
  render() {
    return <Countersy></Countersy>;
  }
}

//孙组件
class Countersy extends Component {
  render() {
    return (
      <BattertContext.Consumer>
        {({ value, onClick, count }) => {
          console.log("value", onClick);

          return (
            <p onClick={onClick}>
              {value}+++++{count}
            </p>
          );
        }}
      </BattertContext.Consumer>
    );
  }
}
