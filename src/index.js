import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import MyForm from './componants/MyForm'

import RegisterForm from './componants/RegisterForm';
import Mainpage from './componants/Mainpage';
import Contact from './componants/Contact';
import Login from'./componants/Login';
import App from'./App';
import BrowserRouter from'react-router-dom';
import {BrowserRouter as router,Switch,Route,Link}from 'react-router-dom';

const element =<h1>First React APP</h1>;
console.log(element);

ReactDom.render(<Login/>,document.getElementById("root"));