import React, { Component } from 'react';
import '../../styles/Scores.css';

export default class Scores extends Component {
  render() {
    var team;
    var scoreOne = this.props.info.scoreOne;
    var scoreTwo = this.props.info.scoreTwo;

    if (this.props.info.turn === 0) {
      team = 'Team One';
    }
    else {
      team = 'Team Two';
    }

    return (
      <div id="scores">
        <div className="scores">
          <h1 id="turn-display">{ team }'s turn!</h1>
        </div>

        <div className="scores">
          <h1 id="score-one">Team One: <a id="score-one-number">{ scoreOne }</a></h1>
        </div>

        <div className="scores">
          <h1 id="score-two">Team Two: <a id="score-two-number">{ scoreTwo }</a></h1>
        </div>
      </div>
    );
  }
}
