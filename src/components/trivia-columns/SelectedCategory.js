import React, { Component } from 'react';
import '../../styles/SelectedCategory.css';
import Question from './Question';

export default class SelectedCategory extends Component {
  render() {
    var questionComponentArray;
    console.log(this.props.category);
    questionComponentArray = this.props.category.map((question, index) => (
    <Question hasBeenSelected ={ this.hasBeenSelected }
              handleScore={ this.handleScore }
              question={ question }
              key={ index } />
    ))

    return (
      <div className="footer">
        { questionComponentArray }
      </div>
    );
  }
}
