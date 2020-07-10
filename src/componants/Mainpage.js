import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import logo from './images/bg2.jpg';

import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';



class Mainpage extends React.Component {
  state={
    name:'shahin',
    password:'Shahin@33'
  }
  handleChange=(e)=>
  {
this.setState({name:e.target.value});
    
  }
  handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log("form submitted",this.state.name,this.state.password)
    console.log("this is the state object",this.state);
  //axios.post('http://localhost:8075/muslimalnikah/registerusers',this.state).then(response=>{console.log(response)}).catch(error=>{console.log(error)});
  
  }
  render() {
    return (
      <div id="content">
            
  <Form>  
  <div id="headermuslimalnikah" >
            <Router>
           
           <Container fluid={true}>
             
          
           
       
      
        <Navbar   bg="light" variant="light">
    
    <Nav >
    
    <img src={require('../componants/images/logo.svg.PNG')} style={{width: 80, height: 80, borderRadius: 400/ 2}} />
      <div className="navbar-nav" >
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
  </div>    
        <div class="login-page">
  <div class="form">
    
    <form class="login-form" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button  id='clickBtn' >login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
<div id="footer">
            <Navbar   bg="light" variant="light">
    
            <Nav >
              
              <div > All rights reserved by Muslim Al-Nikah</div>
            </Nav>
            </Navbar>
            </div>
     </Form>
     
      
     
    
  
  </div> 
      
    );
  }
}

export default Mainpage;