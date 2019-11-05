import React, { Component } from 'react';
class UserInput extends Component{

    state = {
        name:"Hello Mam How Can I Help You"
    }
  
    handleChange = (e) =>{
      this.setState({
          name: e.target.value
      })
    }
  
     render(){
      return(
        <div>
         <h1>{this.state.name}</h1>
         <input type="text"
           onChange={this.handleChange}
           value={this.state.name} />
        </div>
        )
     }
  }
  export default UserInput;