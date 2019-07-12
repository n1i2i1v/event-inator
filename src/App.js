import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Drawer from 'react-motion-drawer';
import Login from './Login';
import User from './User';
import SignInForm from './pages/SignInForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className ="Init">
        <User />
      </div>
    );
  }
}

export default App;
