import React, { Component } from 'react';
import MediaCard from './SingleEvent'
import './Gallery.css'
import Search from './Search';

class Gallery extends Component {
  render() {
    return (
      <div className = "Gallery">
      <Search />
      <div className = "GalleryE">
      <MediaCard />
      <MediaCard />
      <MediaCard />
      </div></div>
    );
  }
}
export default Gallery;
