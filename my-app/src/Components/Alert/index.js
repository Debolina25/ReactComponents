import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Alerts extends Component {
    onGreet() {
        alert("Hello! I am Debolina");
    }
    render() {
        return(
            <div className="alert">
            <Button onClick={this.onGreet}>Greet</Button>
            </div>
        );
    }
}
export default Alerts;