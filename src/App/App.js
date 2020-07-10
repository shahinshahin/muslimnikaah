import React, { Component } from 'react';
//import logo from './logo.svg';
//import './style.css';
import AboutUs from '../componants/AboutUs';

import Header from '../componants/Shared/Header';
import Footer from '../componants/Shared/Footer';
import RegisterUser from '../componants/RegisterUser';
import LoginUser from '../componants/LoginUser';
import Home from '../componants/Home';
import OurStory from '../componants/OurStory';
import MainPageForm from'../componants/MainPageForm';

import IndexPage from '../componants/IndexPage';
import {BrowserRouter as BrowserRouter,Switch,Route,Link,NavLink}from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../componants/css/mainpage.css";

import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import RegisterForm from '../componants/RegisterForm';
import Login from '../componants/Login';
import Routes from '../componants/Routes';
import Contact from '../componants/Contact';
const images = [{ src: '../componants/images/logo.svg.PNG' }];
function App() {
  return (
  
    //   <BrowserRouter>
     
    //     <div class="fixed-header" >
          
    //       <div class="container">
    //     <img src={require('../componants/images/logo.svg.PNG')} style={{width: 40, height: 40, borderRadius: 400/ 2}} />
    //     <div >
    //         <NavLink exact activeClassName="active" to="/">Home</NavLink>
    //         <NavLink activeClassName="active" to="/Login">Login</NavLink>
    //         <NavLink activeClassName="active" to="/RegisterForm">RegisterForm</NavLink>
    //         <NavLink  to="/AboutUs">AboutUs</NavLink>
    //         <NavLink  to="/MainPageForm">MainPage</NavLink>
    //       </div>
    //       </div>
         
    //       <div class="container">
         
    //         <Switch>
    //           <Route exact path="/" component={Home} />
    //           <Route exact path="/MainPageForm" component={MainPageForm} />
    //           <Route path="/Login" component={Login} />
    //           <Route path="/RegisterForm" component={RegisterForm} />
    //           <Route path="/AboutUs" component={AboutUs} />
    //         </Switch>
    //         </div>
          
    //         <div class="fixed-footer">
    //     <div class="container">Copyright &copy; 2016 Your Company</div>        
    // </div>
    //     </div>
       
    //   </BrowserRouter>
  //   <div >
  
  //  <Home></Home>
  //   {/* <OurStory></OurStory>   
  //   <Contact/> */}
  //   <div className="content">
             
            
           
            
             
  //            </div>
  // </div>
  <BrowserRouter>
  <div className="App">
    
  
                  <Switch>
               <Route exact path="/home"><IndexPage></IndexPage></Route>
               <Route exact path="/"><IndexPage></IndexPage></Route>
               {/* <Route exact path="/MainPageForm" component={MainPageForm} />
           <Route path="/Login" component={Login} />
               <Route path="/RegisterForm" component={RegisterForm} /> */}
                <Route exact path="/about"><RegisterUser></RegisterUser></Route>
                <Route exact path="/register"><RegisterForm></RegisterForm></Route>
                <Route exact path="/login"> <LoginUser></LoginUser></Route>
            </Switch>
           
  </div>
  </BrowserRouter>
  );
}
 
export default App;