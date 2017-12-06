import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Category from './components/trivia-columns/Category';
import SelectedCategory from './components/trivia-columns/SelectedCategory';
import Scores from './components/trivia-columns/Scores';
import WinPage from './components/trivia-columns/WinPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: null,
      scoreOne: 0,
      scoreTwo: 0,
      turn: 0,
      guessedCorrectly: [],
      count: 0
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
      turn: 0,
      count: 0
    })

    this.axiosRequest();
  }

  axiosRequest() {
    var vidGameUrl = 'https://opentdb.com/api.php?amount=4&category=15&type=multiple';
    var historyUrl = 'https://opentdb.com/api.php?amount=4&category=23&type=multiple';
    var animalUrl = 'https://opentdb.com/api.php?amount=4&category=27&type=multiple';

    axios.get(vidGameUrl)
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

    axios.get(historyUrl)
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

    axios.get(animalUrl)
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
          this.state.categories.splice(i, 1, "Answered");
          this.setState({ count: this.state.count + 1 });
        }
      }
    }
  }

  render() {
    var categoryComponentArray;
    var scoreOne = this.state.scoreOne;
    var scoreTwo = this.state.scoreTwo;

    if (this.state.count > 11) {
      categoryComponentArray = (
        <WinPage data={ this.state } />
      )
    }

    else {
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
    }

    return (
      <div id="start-page" className="App">
        <Header />

        <div id="start-button">
          <p id="button" onClick={ this.handleSubmit }>(re)Start Game</p>
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
