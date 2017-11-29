import React, { Component } from 'react';
import '../../styles/Question.css';
import he from 'he';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.hasBeenSelected(this.props.category.question);
  }

  render() {
    var display = he.decode( this.props.category.question );

    return (
      <div onClick={ this.props.hasBeenSelected } id="question-container">
        <p className="question-text">{ display }</p>
      </div>
    );
  }
}

