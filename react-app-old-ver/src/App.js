import React from "react";

// old ver 코드는 class 컴포넌트로 구성되어있다.
// 심플한 function component 대신 class component를 활용했던 이유는 state를 활용하기 위해서였다.
// class component를 쓸때는 render 메소드 안에서 return 시켜줘야한다.
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
