import React from "react";
import fetch from 'isomorphic-fetch';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import logo from './images/bg2.jpg';
import axios from 'axios';

import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Login from "./Login";


class RegisterForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {    
    username:'',
    password:'',
    confirmpassword:'',
    email:'',
    mobile:'',
    address:'',
    showComponent: false,
    
  
  };
  this._onButtonClick = this._onButtonClick.bind(this)

}
handleClick=(e)=> {
  e.preventDefault();
  console.log('The link was clicked.');
}
_onButtonClick() {
  this.setState({
    showComponent: true,
  });
}
  handleChange=(e)=>
  {
this.setState({[e.target.id]:e.target.value})    
  }
  handleSubmit=(e)=>
  {
    e.preventDefault();
    
    const form = {
      username: this.state.name,
      email: this.state.email,
      password:this.state.password,
      confirmpassword:this.state.confirmpassword,
      mobile:this.state. mobile,
      address:this.state.address
      
     }
     
     var data = new FormData();
     console.log("this is the object",form);
     data.append("form", JSON.stringify(form));

  //    const response = fetch('http://localhost:8075/muslimalnikah/registerusers', {
  //   method: 'POST',
  //   mode: "cors",
  //   body: data,

  //   headers: {
  //   'Accept': 'application/json',
  //   'content-type': 'application/x-www-form-urlencoded',
  //   'Access-Control-Allow-Origin': '*'
  // },
  //   body: data
  // })
  
  
  console.log("this is the state object",this.state);
  axios.post('http://localhost:8989/muslimalnikah/registerusers',this.state).then(response=>{console.log(response)}).catch(error=>{console.log(error)});
  
  
  };

  
  
       
  
  render() {
    return (
     
      
      <div class="container">
    
          <Form onSubmit={this.handleSubmit}>
         
    
    <div class="row h-100 justify-content-center align-items-center">
        <form class="col-md-9">
            <div class="AppForm shadow-lg">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <div class="AppFormLeft">
                               
    <div class="form-group position-relative mb-4">
      
     <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"  placeholder="username" id="username" onChange={this.handleChange}/>
     <i class="fa fa-user-o"></i>
     </div>
     <div class="form-group position-relative mb-4">
     
      <i class="fa fa-user-o"></i>
      </div>
     <div class="form-group position-relative mb-4">
      <input type="password" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" placeholder="password" id="password"  onChange={this.handleChange}/>
      <i class="fa fa-user-o"></i>
      </div>
      <div class="form-group position-relative mb-4">
    <input type="password" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" placeholder="confirmpassword" id="confirmpassword" onChange={this.handleChange}/>
    <i class="fa fa-user-o"></i>
    </div>
    <div class="form-group position-relative mb-4">
      <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" placeholder="email address" id="email" onChange={this.handleChange}/>
      <i class="fa fa-user-o"></i>
     </div>
     <div class="form-group position-relative mb-4">
    <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" placeholder="mobile" id="mobile" onChange={this.handleChange}/>
    <i class="fa fa-user-o"></i>
      </div>

     <div class="form-group position-relative mb-4">
      <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" placeholder="address" id="address" onChange={this.handleChange}/>
      <i class="fa fa-user-o"></i>
     </div> <button  class="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">create</button>
     
     <p class="text-center mt-5">
     Already registered?
                                    <span>
                                       Log In
                                    </span>

                                </p>
      </div>
      </div>
      
      </div>
      </div>
      
    </form>
    
    </div>
    
    </Form>
    </div>
  
  
       
       
       
      
      );
    }
  }
       
      
    
    
        
   
 

export default RegisterForm;