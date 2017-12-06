import React, { Component } from 'react';
import '../../styles/Answer.css';
import he from 'he';

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
    var difficulty = this.props.category.difficulty;

    if ((guess === correct) && (this.props.appInfo.turn === 0)) {
      if (difficulty === "easy") {
        this.props.handleScore(100, 0, 0, guess);
      }
      if (difficulty === "medium") {
        this.props.handleScore(200, 0, 0, guess);
      }
      if (difficulty === "hard") {
        this.props.handleScore(300, 0, 0, guess);
      }
    }

    if ((guess === correct) && (this.props.appInfo.turn === 1)) {
      if (difficulty === "easy") {
        this.props.handleScore(0, 100, 0, guess);
      }
      if (difficulty === "medium") {
        this.props.handleScore(0, 200, 0, guess);
      }
      if (difficulty === "hard") {
        this.props.handleScore(0, 300, 0, guess);
      }
    }

    if ((guess !== correct) && (this.props.appInfo.turn === 0)) {
      this.props.handleScore(0, 0, 1, []);
    }

    if ((guess !== correct) && (this.props.appInfo.turn === 1)) {
      this.props.handleScore(0, 0, 0, []);
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
        <p className="possible-guesses">{ he.decode(element) }</p>
      </div>
    ))

    var display = he.decode( this.props.category.question );

    return (
      <div id="answers-display">
        <div id="question-header">
          <h1 id="question"> { display }</h1>
        </div>
        <div id="answers">
          { answersComponentArray }
        </div>
      </div>
    );
  }
}
