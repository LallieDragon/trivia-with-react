import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/trivia-columns/Category';
import SelectedCategory from './components/trivia-columns/SelectedCategory';
import Scores from './components/trivia-columns/Scores';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: null,
      scoreOne: 0,
      scoreTwo: 0,
      turn: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.axiosRequest = this.axiosRequest.bind(this);
    this.hasBeenSelected = this.hasBeenSelected.bind(this);
    this.handleScore = this.handleScore.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.axiosRequest();
  }

  axiosRequest() {
    var filmUrl = 'https://opentdb.com/api.php?amount=4&category=11&type=multiple';
    var genUrl = 'https://opentdb.com/api.php?amount=4&category=9&type=multiple';
    var vidUrl = 'https://opentdb.com/api.php?amount=4&category=15&type=multiple';

    axios.get(filmUrl)
      .then((response) => {
        var catArray = this.state.categories
        catArray.push(response.data.results)
        this.setState({
          categories: catArray
        })
      })
      .catch((error) => { console.log(error) })

    axios.get(genUrl)
      .then((response) => {
        var catArray = this.state.categories;
        catArray.push(response.data.results);
        this.setState({
          categories: catArray
        })
      })
      .catch((error) => { console.log(error) })

    axios.get(vidUrl)
      .then((response) => {
      var catArray = this.state.categories;
      catArray.push(response.data.results);
      this.setState({
        categories: catArray
      })
    })
      .catch((error) => { console.log(error) })
    }

  hasBeenSelected(selectedCategory) {
    this.setState({ selectedCategory: selectedCategory })
  }

  handleScore(scoreOne, scoreTwo) {
    var newScoreOne = this.state.scoreOne + scoreOne;
    var newScoreTwo = this.state.scoreTwo + scoreTwo;

    this.setState({
      scoreOne: newScoreOne,
      scoreTwo: newScoreTwo
    })
  }

  render() {
    var categoryComponentArray;
    if (this.state.selectedCategory === null) {
      categoryComponentArray = this.state.categories.map((category, index) => (
        <Category hasBeenSelected={ this.hasBeenSelected }
                  category={ category }
                  key={ index } />
                  ))
    }
    else {
      categoryComponentArray = [<SelectedCategory category={ this.state.selectedCategory }
                                                  handleScore={ this.handleScore }/>]
    }

    return (
      <div className="App">
        <Header />

        <div id="start-button">
          <button onClick={ this.handleSubmit }><a>(re)</a>Start Game</button>
        </div>

        <div id='game-container'>
          { categoryComponentArray }
          <Scores data={ this.state } />
        </div>

        <Footer />
      </div>
    );
  }
}
