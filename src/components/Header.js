import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="header-title">
          <h1 id="title-text">Two Player Trivia with React</h1>
        </div>
      </div>
    );
  }
}
