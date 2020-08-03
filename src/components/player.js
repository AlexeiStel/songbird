import React from "react";
import AudioPlayer from "react-h5-audio-player";

class Player extends React.Component {
  
  playerPause = () => {
    if (this.props.playing) {
      console.log(this.player.audio);
      // this.player.audio.pause();

    }
  };

  render() {
    return (
      <AudioPlayer
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