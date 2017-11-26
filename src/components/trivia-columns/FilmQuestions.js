import React, { Component } from 'react';
import '../../styles/FilmQuestions.css';

export default class FilmQuestions extends Component {
  constructor(props) {
    super(props)

    this.makeDisplays = this.makeDisplays.bind(this);
  }

  makeDisplays() {
    let filmDivs = [];
    for (let i; i < 3; i++) {
      filmDivs.push(
        <div classname="film" key={ i }>
          <h1 id="cat-title"> { this.props[i].category } </h1>
        </div>
        )
    }
  return filmDivs;
  }

  render() {
    return (
      <div className="rendered-film">
        { this.props.results[0].category }
      </div>
    );
  }
}
