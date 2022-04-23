import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class unit extends Component{
  render(){
    return (
        <Col sm="6" md="4" lg="3" className="mb-2">
          <a href={this.props.link} class="text-muted text-decoration-none cursor-default">
            <Card body>
              <CardTitle tag="h5">{this.props.name}</CardTitle>
            </Card>
          </a>
        </Col>
    )    
  } 
};

export default unit;