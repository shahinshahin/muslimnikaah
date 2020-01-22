
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';



export default class Header extends Component {
    render(){
        return (
            <Router>
           
           <Container fluid={true}>
        <Form>
         
         

         
        </Form>
      
        <Navbar   bg="light" variant="light">
    
    <Nav >
      
      <div className="navbar-nav">
      <div className="navbar-nav"> <Link to="/AboutUs" className="nav-link">Home </Link> </div>
      <div className="navbar-nav"> 
      </div>
      <div className="navbar-nav"> <Link to="/profile" className="nav-link">Profile Upload</Link>
      </div>
      <div className="navbar-nav"> <Link to="/contact us" className="nav-link">Contact US</Link>
      </div>
    </div>
    
     
    </Nav>
    
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  </Container>
  </Router>
       

        )
    }
}