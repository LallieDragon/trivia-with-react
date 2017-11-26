import React, { Component } from 'react';
import '../../styles/FilmQuestions.css';

export default class FilmQuestions extends Component {
  constructor(props) {
    super(props)

    this.makeDisplays = this.makeDisplays.bind(this);
  }

  makeDisplays() {
    let filmDivs = [];
    for (let i; i < this.props.data.length; i++) {
      filmDivs.push(
        <div classname="film" key={ i }>
          <h1 id="cat-title"> { this.props.data[i].category } </h1>
        </div>
        )
    }
  return filmDivs;
  }

  render() {
    var display;
    display = (
      <div id="rendered-films">
        { this.makeDisplays() }
      </div>
    )

    return (
      { display }
    );
  }
}
