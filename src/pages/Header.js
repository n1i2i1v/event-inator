import React, { Component } from 'react';
import LongMenu from './Menu'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className = "Header">
      <LongMenu />
      </div>
    );
  }
}
export default Header;
