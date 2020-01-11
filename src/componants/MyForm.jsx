import React, { Component,Fragment } from 'react';
import {Nav, Navbar, NavDropdown,MenuItem, Tabs, Form,ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {BrowserRouter ,Switch,Route,Link}from 'react-router-dom';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import Mainpage from'./Mainpage';
class MyForm extends React.Component {
  state = {
    renderView: 0
  };

  clickBtn = e => {
    this.setState({
      renderView: +e.target.parentNode.name
    });
  };

  render() {
    switch (this.state.renderView) {
      case 1:
        return <Mainpage />;
      
      default:
        return <Contact/>;
    }
  }
}
const rootElement = document.getElementById("root");
export default MyForm;
  