import React, { Component } from 'react';
//import logo from './logo.svg';
//import './style.css';
import AboutUs from '../componants/AboutUs';

import Header from '../componants/Shared/Header';
import Footer from '../componants/Shared/Footer';
import Mainpage from '../componants/Mainpage';
import Content from'../componants/Content';

import Contact from '../componants/Contact';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../componants/css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

class App extends Component {
  displayDate() {
     Date();
  }
  render() {
    return (
  <div>
    <Header/>
    
   
   <Router>
   <Switch>
         <Mainpage/>
          <Route path="/AboutUs" >  
          <AboutUs/> 
          </Route> 
          </Switch>  
          </Router>
          
           
           
        
        
        
    <Footer/>
  </div>
    );
  }
}
export default App;