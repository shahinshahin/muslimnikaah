
import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import AboutUs from './AboutUs';
import Contact from './Contact';
import UserFunction from './UserFunction';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/mainpage.css";
import App from '../App';
class Login extends Component {
    
  render() {
    function sayHello() {
        return {App};
      }
    return (
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
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
     </Form>
      );
    }
  }
  
  export default Login;