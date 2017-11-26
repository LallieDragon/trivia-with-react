import React, { Component } from 'react';
import '../../styles/Questions.css';

export default class Questions extends Component {
  constructor(props) {
    super(props)
    this.makeDisplays = this.makeDisplays.bind(this);
  }

  makeDisplays() {
    let divs = [];
    for (let i; i < 3; i++) {
      divs.push(
        <div classname="boxes" key={ i }>
          <h1 id="cat-title"> { this.props.data[i].category } </h1>
        </div>
        )
    }
  return divs;
  }

  render() {
    var display = (
      <div id="rendered">
        { this.makeDisplays() }
      </div>
    )

    return (
      <div id="game-board">
        { display }
      </div>
    );
  }
}
