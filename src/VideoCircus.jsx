import React from 'react';
import YouTube from 'react-youtube';
 
class VideoCircus extends React.Component {
  render() {
    const opts = {
      height: '400',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="S6hj9N1eTHQ"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoCircus;