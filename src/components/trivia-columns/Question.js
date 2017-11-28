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
    console.log(this.props.category);
    return (
      <div onClick={ this.props.hasBeenSelected } id="question-container">
        { this.props.category.question }
      </div>
    );
  }
}

