import React, { Component } from 'react';
import '../../styles/WinPage.css';

export default class WinPage extends Component {
  render() {
    var team;
    var winnerDisplay;
    var scoreOne = this.props.data.scoreOne;
    var scoreTwo = this.props.data.scoreTwo;

    if (scoreOne > scoreTwo) {
      team = 'Team One';
    }
    else {
      team = 'Team Two';
    }

    winnerDisplay = (
      <div id="winner">
        <h1 id="winner-display">{ team } has won!</h1>
        <iframe src="https://giphy.com/embed/xThuWp2hJABbmc20Ew" width="480" height="297" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a id="giphy" href="https://giphy.com/gifs/nickatnite-friends-excited-tv-xThuWp2hJABbmc20Ew">via GIPHY</a></p>
      </div>
    )

    return (
      <div>
        { winnerDisplay }
      </div>
    );
  }
}
