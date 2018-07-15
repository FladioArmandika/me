import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
import logo from '../logo.svg';
import '../App.css';

import Header from './Header'
import Main from './Main';
import Footer from './Footer';

ReallySmoothScroll.shim();
ReallySmoothScroll.config({
  mousewheelSensitivity: 40, // Default
  keydownSensitivity: 12 // Default (When you press arrow down/up key)
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
