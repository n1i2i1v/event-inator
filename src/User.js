import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './User.css';
import Header from './pages/Header';
import Footer from './pages/Footer';

class User extends Component {
  render() {
    return (
      <Router basename="/user/">
        <div className="User">
        <Header />
        <Footer />
        </div>
      </Router>
    );
  }
}

export default User;
