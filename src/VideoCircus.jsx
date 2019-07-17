import React from 'react';
import './VideoCircus.scss';
 
class VideoCircus extends React.Component {
  render() {
    
    return (
      <div className="VideoCircus">
      <video id="video" src="/images/circus.mp4" type="video/mp4" playsInline autoPlay muted loop></video>
      </div>
    );
  }
}

export default VideoCircus;