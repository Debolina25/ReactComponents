import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Progress extends Component {
    render(){
        return(
            <div style={{width:'28rem',marginLeft:'460px'}}>
            <ProgressBar now={60} />
            </div>
        );
    }
}
export default Progress;