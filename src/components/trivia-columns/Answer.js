import React, { Component } from 'react';
import '../../styles/Answer.css';

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswersArray: []
    }
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
    console.log(this.state.allAnswersArray);
    var answersComponentArray = this.state.allAnswersArray.map((element, index) => (
      <div key ={ index } className="answers">
        <p>{ element }</p>
      </div>
    ))

    return (
      { answersComponentArray }
    );
  }
}
