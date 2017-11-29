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
      turn: 0,
      guessedCorrectly: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.axiosRequest = this.axiosRequest.bind(this);
    this.hasBeenSelected = this.hasBeenSelected.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.handleCorrect = this.handleCorrect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      categories: [],
      selectedCategory: null,
      scoreOne: 0,
      scoreTwo: 0,
      turn: 0
    })
    this.axiosRequest();
  }

  axiosRequest() {
    var filmUrl = 'https://opentdb.com/api.php?amount=4&category=11&type=multiple';
    var genUrl = 'https://opentdb.com/api.php?amount=4&category=9&type=multiple';
    var vidUrl = 'https://opentdb.com/api.php?amount=4&category=15&type=multiple';

    axios.get(filmUrl)
      .then((response) => {
        var catArray = this.state.categories
        for ( let i = 0; i < 4; i++) {
          catArray.push(response.data.results[i])
        }
        this.setState({
          categories: catArray
        })
      })
      .catch((error) => { console.log(error) })

    axios.get(genUrl)
      .then((response) => {
        var catArray = this.state.categories;
        for ( let i = 0; i < 4; i++) {
          catArray.push(response.data.results[i]);
        }
        this.setState({
          categories: catArray
        })
      })
      .catch((error) => { console.log(error) })

    axios.get(vidUrl)
      .then((response) => {
      var catArray = this.state.categories;
      for (let i = 0; i < 4; i++){
        catArray.push(response.data.results[i]);
      }
      this.setState({
        categories: catArray
      })
    })
      .catch((error) => { console.log(error) })
    }

  hasBeenSelected(selectedCategory) {
    this.setState({ selectedCategory: selectedCategory })
  }

  handleScore(scoreOne, scoreTwo, turn, correct) {
    var newScoreOne = this.state.scoreOne + scoreOne;
    var newScoreTwo = this.state.scoreTwo + scoreTwo;


    this.setState({
      scoreOne: newScoreOne,
      scoreTwo: newScoreTwo,
      turn: turn,
      guessedCorrectly: correct
    })

    this.handleCorrect(correct);
  }

  handleCorrect(correct) {
    if (correct !== []) {
      for (let i = 0; i < 12; i++) {
        if (correct === this.state.categories[i].correct_answer) {
          this.state.categories.splice(i, 1, ['Answered']);
        }
      }
    }
  }

  render() {
    var categoryComponentArray;
    if (this.state.selectedCategory === null) {
      categoryComponentArray = (
        <Category hasBeenSelected={ this.hasBeenSelected }
                  category={ this.state.categories } />
        )
    }
    else {
      categoryComponentArray = (
        <SelectedCategory category={ this.state.selectedCategory }
                          handleScore={ this.handleScore }
                          hasBeenSelected={ this.hasBeenSelected }
                          appInfo={ this.state } />
        )
    }

    return (
      <div id="start-page" className="App">
        <Header />

        <div id="start-button">
          <p id="button" onClick={ this.handleSubmit }><a>(re)</a>Start Game</p>
        </div>

        <div id='game-container'>
          { categoryComponentArray }
        </div>

        <div id="scores-container">
          <Scores info={ this.state } />
        </div>

        <Footer />
      </div>
    );
  }
}
