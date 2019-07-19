import React, { Component } from 'react';
import VideoCircus from './VideoCircus';
import Description from './Description';
import Animals from './Animals';
import Prices from './Prices';
import './Home.scss';
import NosShows from './NosShows';

class Home extends Component {
render() {
  return(
    <div className="Home">
      <h1>W<span className="under-text">ild Circu</span>s</h1>
      <VideoCircus />
      <Description />
      <hr />
      <Animals />
      <hr />
      <NosShows />
      <hr />
      <Prices />
    </div>
  )
}
}

export default Home;