import React, { Component } from 'react';
import Answer from './Answer';
import '../../styles/Question.css';

export default class Question extends Component {
  render() {
    console.log('is anyone there');
    var allAnswersArray = [];
    var correctAnswer = this.props.question.correct_answer;
    var incorrectAnswers = this.props.question.incorrect_answers;
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

    console.log(allAnswersArray, 'all answers');

    var answerComponentArray = allAnswersArray.map((data, index) => (
      <Answer hasBeenSelected ={ this.hasBeenSelected }
              handleScore={ this.handleScore }
              answers={ data }
              key={ index } />
    ))

    console.log('answer component array', answerComponentArray );

    return (
      <div id="question-container">
        { answerComponentArray }
      </div>
    );
  }
}

