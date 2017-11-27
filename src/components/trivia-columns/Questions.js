import React, { Component } from 'react';
import Question from './Question';
import '../../styles/Questions.css';
// import Scores from './Scores';

export default class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: [false, false, false, false, false, false, false, false, false, false, false, false],
      returnToGame: true,
      oneScore: 0,
      twoScore: 0,
      turn: 0
    }
    this.hasBeenClicked = this.hasBeenClicked.bind(this);
    this.returnToGame = this.returnToGame.bind(this);

  }

  hasBeenClicked(index) {
    var newClick = this.state.clicked;
    newClick[index] = !newClick[index];
    this.setState({ clicked: newClick });
  }

  returnToGame() {
    var newReturn = this.state.returnToGame;
    newReturn = !newReturn;
    this.setState({ returnToGame: newReturn })
    console.log('Reset to home', this.state.returnToGame);
  }

  render() {
    console.log('render questions', this.state.returnToGame);
    if (this.state.returnToGame) {
      var display = this.props.responseData.map((data, index) => {
        let divs = (
            <div key={ index } className="cat-titles" onClick={ e => this.hasBeenClicked(index) }>
              <p>{ data.category }</p>
            </div>
          )
        return divs;
      })
      for (let i = 0; i < 12; i++) {
        if (this.state.clicked[i]) {
          display = (
            <div id="question-container">
              <Question returnToGame={ this.returnToGame } data={ this.props.responseData[i] } />
            </div>
          )
        }
      }
    }
    else {
      display = (
        <div></div>
      )
    }

    return (
      <div id="game-container">
        <div id="cat-container">
          { display }
        </div>
{/*        <div id="score-container">
          <Scores />
        </div>*/}
      </div>
    );
  }
}

