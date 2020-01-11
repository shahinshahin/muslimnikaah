import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import AboutUs from './AboutUs';
import Mainpage from'./Mainpage';
import {BrowserRouter ,Switch,Route,Link}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <Container fluid={true}>
    <Navbar   bg="light" variant="light">
    
    <Nav >
      
      <div className="navbar-nav">
      <div className="navbar-nav"> <Nav.Link to="/AboutUs">Home </Nav.Link> </div>
      <div className="navbar-nav"> 
      </div>
      <div className="navbar-nav"> <Nav.Link href="#pricing">Profile Upload</Nav.Link>
      </div>
      <div className="navbar-nav"> <Nav.Link href="#pricing">Contact US</Nav.Link>
      </div>
    </div>
    
     
    </Nav>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary" button  id='clickBtn'>Search</Button>
    </Form>
  </Navbar>
  
  
  </Container>
     

    
  );
  }
}
export default Contact