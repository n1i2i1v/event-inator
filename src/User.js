import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './User.css';
import Header from './pages/Header';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';


class User extends Component {
  render() {
    return (
      <Router basename="/user/">
        <div className="User">
        <Header />
        <Gallery />
        <Footer />
        </div>
      </Router>
    );
  }
}

export default User;
