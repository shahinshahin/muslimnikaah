
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import logo from '../images/bg2.jpg';
import Carousel from 'react-images';
import RegisterForm from '../RegisterForm';
import Login from '../Login';

import {BrowserRouter as Router,Switch,Route,Link,NavLink}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';


const images = [{ src: '../images/logo.svg.PNG' }];
export default class Header extends Component {
    render(){
        return (
          <header>
            <Router>
           
           <Container fluid={true}>
             
          
           
       
      
        <Navbar   bg="light" variant="light">
    
    <Nav >
    
    <img src={require('../images/logo.svg.PNG')} style={{width: 80, height: 80, borderRadius: 400/ 2}} />
    <div id="templatemo_menu">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/Login">Login</NavLink>
            <NavLink activeClassName="active" to="/RegisterForm">RegisterForm</NavLink>
            <NavLink  to="/AboutUs">AboutUs</NavLink>
          </div>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Login" component={Login} />
              <Route path="/RegisterForm" component={RegisterForm} />
              <Route path="/AboutUs" component={AboutUs} />
            </Switch>
    
     
    </Nav>
    
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  </Container>
  </Router>
  </header>

        )
    }
}