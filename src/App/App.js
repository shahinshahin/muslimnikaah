import React, { Component } from 'react';
//import logo from './logo.svg';
//import './style.css';
import AboutUs from '../componants/AboutUs';

import Header from '../componants/Shared/Header';
import Footer from '../componants/Shared/Footer';
import Mainpage from '../componants/Mainpage';
class App extends Component {
  render() {
    return (
  <div>
    <Header/>
    <Mainpage/>
    
    <Footer/>
  </div>
    );
  }
}
export default App;