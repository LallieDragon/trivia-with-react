import React, { Component } from 'react';
import '../../styles/SelectedCategory.css';
import Answer from './Answer';

export default class SelectedCategory extends Component {
  render() {
    var questionComponent;

    questionComponent = (<Answer category={ this.props.category }
                                 hasBeenSelected={ this.props.hasBeenSelected }
                                 handleScore={ this.props.handleScore }
                                 appInfo={ this.props.appInfo } />)

    return (
      <div className="footer">
        { questionComponent }
      </div>
    );
  }
}
