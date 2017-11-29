import React, { Component } from 'react';
import '../../styles/Question.css';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.hasBeenSelected(this.props.category.question);
  }

  render() {
    return (
      <div onClick={ this.props.hasBeenSelected } id="question-container">
        <p className="question-text">{ this.props.category.question }</p>
      </div>
    );
  }
}

