import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Base extends Component {
    render(){
        return(
            <Button variant={this.props.variant}>{this.props.text}
            </Button>
        );
    }
}
export default Base;
Base.propTypes={
    variant: PropTypes.string,
    text: PropTypes.string
};