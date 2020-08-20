import React from "react";
import H5AudioPlayer from "react-h5-audio-player";

class Player extends React.Component {
  
  playerPause = () => {
    if (this.props.playing) {
      this.player.audio.current.pause();
    }
  };

  render() {
    return (
      <H5AudioPlayer
        ref={
          ref => {
              this.player = ref;
            }
        }
        src={this.props.src}
        playing={this.playerPause()}
        autoPlayAfterSrcChange={false}
      />
    );
  }
}

export default Player;