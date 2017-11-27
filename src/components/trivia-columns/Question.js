import React, { Component } from 'react';
import Scores from './Scores';
import '../../styles/Question.css';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsArray: [],
    }
    this.hasBeenClicked = this.hasBeenClicked.bind(this);
  }

  componentDidMount() {
    var correct = this.props.data.correct_answer;
    var allAnswers = this.props.data.incorrect_answers;
    allAnswers.push(correct);

    this.setState({ optionsArray: allAnswers })
  }

  hasBeenClicked(answer) {
    var correct = this.props.data.correct_answer;
    if (correct !== answer) {
      if (this.state.currentPlayer !== 1) {
        this.setState({ currentPlayer: 1})
      }
      else {
        this.setState({ currentPlayer: 0})
      }
    }

    else {
      if (this.state.currentPlayer === 0) {
        this.setState({ playerOneScore: (this.state.playerOneScore + 100) })
      }
      else {
        this.setState({ playerTwoScore: (this.state.playerTwoScore + 100) })
      }
    }
    this.props.returnToGame();
    return <Scores info={ this.state } />
  }

  render() {
    var display = (
      <div id="container">
        <div id="question-title">
          <h1 id="question">{ this.props.data.question }</h1>
        </div>
        <div id="mutiple-choice">
          <p className="option" onClick={ e => this.hasBeenClicked(this.state.optionsArray[0]) }>{ this.state.optionsArray[0] }</p>
          <p className="option" onClick={ e => this.hasBeenClicked(this.state.optionsArray[1]) }>{ this.state.optionsArray[1] }</p>
          <p className="option" onClick={ e => this.hasBeenClicked(this.state.optionsArray[2]) }>{ this.state.optionsArray[2] }</p>
          <p className="option" onClick={ e => this.hasBeenClicked(this.state.optionsArray[3]) }>{ this.state.optionsArray[3] }</p>
        </div>
      </div>
    )
    console.log(this.state.optionsArray, 'optionsArray');

    return (
      <div id="question-container">
        { display }
      </div>
    );
  }
}
