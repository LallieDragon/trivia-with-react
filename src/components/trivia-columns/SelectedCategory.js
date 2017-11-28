import React, { Component } from 'react';
import '../../styles/SelectedCategory.css';
import Question from './Question';
import Answer from './Answer';

export default class SelectedCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null
    }
    this.hasBeenSelected = this.hasBeenSelected.bind(this);
  }

  hasBeenSelected(selectedCategory) {
    this.setState({ selectedCategory: selectedCategory })
  }

  render() {
    var questionComponent;
    if (this.state.selectedCategory === null) {
      questionComponent = (
        <Question hasBeenSelected={ this.hasBeenSelected }
                  category={ this.props.category } />
                  )
    }
    else {
      questionComponent = (<Answer category={ this.props.category }
                                   handleScore={ this.handleScore }/>)
    }


    return (
      <div className="footer">
        { questionComponent }
      </div>
    );
  }
}
