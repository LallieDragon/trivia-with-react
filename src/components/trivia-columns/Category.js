import React, { Component } from 'react';
import '../../styles/Category.css';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (this.props.category[index] !== 'Answered') {
      this.props.hasBeenSelected(this.props.category[index]);
    }
  }

  render() {
    var categoryComponentArray;

    categoryComponentArray = this.props.category.map((element, index) => (
      <div key={ index } onClick={ () => { this.handleClick(index) } } className="categories">
        <h3 className="category-name">{ element.category }</h3>
        <h3 className="difficulty-level">{ element.difficulty }</h3>
      </div>
    ))

    return (
      <div id="categories-container">
        { categoryComponentArray }
      </div>
    );
  }
}
