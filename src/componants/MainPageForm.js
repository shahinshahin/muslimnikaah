
import React from "react";
import fetch from 'isomorphic-fetch';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import logo from './images/bg2.jpg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
class MainPageForm extends React.Component {
    render() {
       
        return  <div class="container-fluid bg-3 text-center">
  
  <div class="row">
    <div class="col-sm-4">
      <p>Lorem ipsum..</p>
      <img src={require('../componants/images/img6.jpg')} alt="Image">
    </img>
    </div>
    <div class="col-sm-4">
      <p>Lorem ipsum..</p>
      <img src={require('../componants/images/img10.jpg')} alt="Image">
      </img>
    </div>
    <div class="col-sm-4">
      <p>Lorem ipsum..</p>
      <img src={require('../componants/images/img8.jpg')} alt="Image">
      </img>
    </div>
  </div>
</div>

}
}
export default MainPageForm;