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
      <h1 id="winner-display">{ team } has won!</h1>
    )

    return (
      <div id="winner">
        { winnerDisplay }
      </div>
    );
  }
}
