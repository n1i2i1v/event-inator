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
      <Router basename="/">
      <div className ="Init">
          <div className ="Hovers">
          <NavLink to="/login/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login Page</NavLink>
          <NavLink exact to="/user/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">User Page</NavLink>
          </div>
      <Route exact path="/login/" component={Login}></Route>
      <Route exact path="/user/" component={User}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
