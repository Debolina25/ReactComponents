import React, { Component } from 'react';

class Header extends Component {
  
  render() {
    let header='Header Component';
    let welcome= `Welcome ${header}`
    return (
      <div className="header">
        <h1>
      {welcome}
        </h1>
      </div>
    );
  }
}

export default Header;