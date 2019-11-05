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
              <h3>The count is :{this.state.count}</h3>
                    <Base   onClick={this.handleClick.bind(this)}
                    text="Increment"/>
                    
            </div>
      );
    }
  }
  export default Counter;