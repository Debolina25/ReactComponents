import React, { Component } from 'react';
import './style.css'
class Album extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                'Speak to Me',
                'Breathe (In The Air)',
                'On The Run',
                'Eclipse',
                'Spring', 
                'Summer',
                'Fall'

            ]
        }
    }
 
      render() {
          
          return(
              <div className="album">
                  <h4>Dark Side Of The Moon - Pink Floyd</h4>
                  <ul> 
                  {this.state.lists.map((list, i) =>( <li key = {i} 
                  lists={list}>{list}</li>  ))} 
                

                  </ul>
              </div>
          );
      }
  }
  export default Album;