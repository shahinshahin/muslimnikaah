import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mainpage from './componants/Mainpage';
import AboutUs from './componants/AboutUs';
import Contact from './componants/Contact';
import MyForm from './componants/MyForm';
import Home from './componants/Home';
import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h2>Al Nikaah</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
        <div className="navbar-nav"> <li><Link to={'/'} className="nav-link">Home</Link></li></div>
        <div className="navbar-nav"><li><Link to={'/contact'} className="nav-link">Contact</Link></li></div>
        <div className="navbar-nav">  <li><Link to={'/about'} className="nav-link">AboutUs</Link></li>  <div className="navbar-nav">
       </div> 
       </div>
       </ul>
        </nav>
        <nav>hfjhf</nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Mainpage} />
            <Route path='/about' component={AboutUs} />
        </Switch>
      </div>
       </Router>
     
   
  
    );
  }
}
export default App;