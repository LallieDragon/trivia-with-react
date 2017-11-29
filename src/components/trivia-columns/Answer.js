import React, { Component } from 'react';
import '../../styles/Answer.css';

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswersArray: []
    }
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(selectedAnswer) {
    var correct = this.props.category.correct_answer;
    var guess = this.state.allAnswersArray[selectedAnswer];

    if ((guess === correct) && (this.props.appInfo.turn === 0)) {
      this.props.handleScore(100, 0, 0);
    }
    if ((guess === correct) && (this.props.appInfo.turn === 1)) {
      this.props.handleScore(0, 100, 1);
    }
    if ((guess !== correct) && (this.props.appInfo.turn === 0)) {
      this.props.handleScore(0, 0, 1);
    }
    if ((guess !== correct) && (this.props.appInfo.turn === 1)) {
      this.props.handleScore(0, 0, 0);
    }
    this.props.hasBeenSelected(null);
  }

  componentWillMount() {
    var allAnswersArray = [];
    var correctAnswer = this.props.category.correct_answer;
    var incorrectAnswers = this.props.category.incorrect_answers;
    var correctAnswerIndex = Math.floor((Math.random() * incorrectAnswers.length) + 1);
    for (let i = 0; i < 3; i++) {
      if (correctAnswerIndex === i) {
        allAnswersArray.push(correctAnswer);
      }
      allAnswersArray.push(incorrectAnswers[i]);
    }

    if (allAnswersArray.length !== 4) {
      allAnswersArray.push(correctAnswer)
    }

    this.setState({
      allAnswersArray: allAnswersArray
    })
  }

  render() {
    var answersComponentArray = this.state.allAnswersArray.map((element, index) => (
      <div onClick={ () => this.checkAnswer(index) } key ={ index } className="answers">
        <p className="possible-guesses">{ element }</p>
      </div>
    ))

    return (
      <div>
        { answersComponentArray }
      </div>
    );
  }
}
