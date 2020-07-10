import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home  from '../componants/Home';
import Contact from '../componants/Contact';

import Carousel from 'react-images';
import RegisterForm from '../componants/RegisterForm';


export default class Routes extends Component {
    render() {
        return (
            <Router >
                  <Switch>
               <Route exact path="/"><Home></Home></Route>
               {/* <Route exact path="/MainPageForm" component={MainPageForm} />
           <Route path="/Login" component={Login} />
               <Route path="/RegisterForm" component={RegisterForm} /> */}
               {/* <Route path="/AboutUs" component={AboutUs} /> */}
            </Switch>
            </Router>
        )
    }
}