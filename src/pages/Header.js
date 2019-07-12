import React, { Component } from 'react';
import LongMenu from './Menu'
import './Header.css'
import About from './About'

class Header extends Component {
  render() {
    return (
      <div className = "Header">
      <LongMenu />
      <About />
      </div>
    );
  }
}
export default Header;
