import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import MyForm from './componants/MyForm'
import { render } from 'react-dom';

import RegisterForm from './componants/RegisterForm';
import Mainpage from './componants/Mainpage';
import Contact from './componants/Contact';
import Login from'./LoginPages/Login';
import App from'./App/App';
import BrowserRouter from'react-router-dom';
import {BrowserRouter as router,Switch,Route,Link}from 'react-router-dom';
import { browserHistory } from 'react-router';
import AboutUs from './componants/AboutUs';

const element =<h1>First React APP</h1>;
console.log(element);
const Root = () =>
<router>
    <Route path='/about' component={AboutUs}>
      <Route path='/home' component={Mainpage} />
      {/* other routes */}
    </Route>
  </router>
      
//ReactDom.render(<Login/>,document.getElementById("root"));
render(<App />, document.getElementById('root'));