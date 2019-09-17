import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './User.css';

class User extends Component {
  render() {
    return (
      <Router basename="/user/">
        <div className="User">
        <h1>User centerpage, need ideas :) </h1>
        </div>
      </Router>
    );
  }
}

export default User;
