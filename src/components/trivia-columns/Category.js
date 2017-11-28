import React, { Component } from 'react';
import '../../styles/Category.css';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.hasBeenSelected(this.props.category);
  }

  render() {
    var categoryComponentArray;
    categoryComponentArray = this.props.category.map((element, index) => (
      <div key={ index } onClick={ this.handleClick } className="categories">
        { element.category }
      </div>
      ))
    return (
      <div id="categories-container">
        <h1>{ categoryComponentArray }</h1>
      </div>
    );
  }
}
