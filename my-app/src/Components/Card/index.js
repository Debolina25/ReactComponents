import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Cards extends Component{
    render(){
        return(
          
<Card style={{ width: '28rem', marginTop:'30px', marginLeft:'450px' }} >
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title >Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant={this.props.variant}>{this.props.text}
            </Button>
  </Card.Body>
</Card>

        );
}
}
export default Cards;