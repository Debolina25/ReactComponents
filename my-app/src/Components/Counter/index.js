import React, { Component } from 'react';
import Base from './Component/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class Counter extends Component {
    constructor(props) {
        super(props);
    this.state = {
      count: 0,
    };
}
    handleClick = () => {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    };
    render() {
      return (
          <div>
              <h3>Counter :{this.state.count}</h3>
              <p>Count is:</p>
                    <Base onClick={this.handleClick.bind(this)}
                    text="Increment"/>
                    
            </div>
      );
    }
  }
  export default Counter;