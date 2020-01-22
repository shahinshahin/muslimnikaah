
import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import AboutUs from '../componants/AboutUs';
import Contact from '../componants/Contact';
import {browserHistory } from 'react-router';

import {BrowserRouter as Router,Switch,Route,Link,Redirect}from 'react-router-dom';
import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../componants/css/mainpage.css";
import App from '../App/App';
import Mainpage from '../componants/Mainpage';
import { HomePage } from '../HomePages/HomePage';
class Login extends Component {
  
  constructor(props)
  {
    super(props)
    this.state={
      username:'',
      password:'',
      email:'',
      renderView: 0


    }
  }
  handleSubmit =(event)=>
  {

    event.preventDefault();
    const data=this.state
    alert(data);
  }
  
  handleOnChange =(event)=>
  {
    this.setState({
      [event.target.name]:event.target.value,
      [event.target.password]:event.target.value
      })
event.preventDefault();


    
  }

  render() {
  const {username}=this.state
  const {password}=this.state
  const {email}=this.state
    const Root = () =>
    <router>
        <Route path='/about' component={AboutUs}>
          <Route path='/home' component={Mainpage} />
          {/* other routes */}
        </Route>
      </router>
      
    return (
      
      <div class="container">
        
<Form onSubmit={this.handleSubmit}>  
          

  <div class="form">
   <h1>Sign In</h1>
     Name  <input type="text"  name='username' onChange={this.handleOnChange} placeholder="name"/>
      
     Password <input type="password" name='password' onChange={this.handleOnChange}placeholder="password"/>
      E-mail <input type="text" name="email"  onChange={this.handleOnChange} placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
      <p>{username}</p>
      <p>{password}</p>
      <p>{email}</p>
    
  </div>
 
  
     </Form>
     </div>
     
      );
    }
  }
  
  export default Login;