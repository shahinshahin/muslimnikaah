import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import AboutUs from './AboutUs';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';



class Mainpage extends React.Component {
  render() {
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
    <Switch>
              <Route exact path='/' component={Mainpage} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={AboutUs} />
          </Switch>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
       
  <Form>  
          
        <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button  id='clickBtn'>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
     </Form>
     
      
     <Navbar   bg="light" variant="light">
    
    <Nav >
      
      <div class="footer"> All rights reserved by Muslim Al-Nikah</div>
    </Nav>
    </Navbar>
    
  </Container>
  </Router>
      
    );
  }
}

export default Mainpage;