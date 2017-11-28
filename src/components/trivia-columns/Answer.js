import React, { Component } from 'react';
import '../../styles/Answer.css';

export default class Answer extends Component {
  render() {
    return (
      <div id="answer-container">
        <p>{ this.props.answers }</p>
      </div>
    );
  }
}
