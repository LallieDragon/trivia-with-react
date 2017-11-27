import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Questions from './components/trivia-columns/Questions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.axiosRequestFilm = this.axiosRequestFilm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.axiosRequestFilm();
  }

  axiosRequestFilm() {
    this.setState({
      responseData: []
    });

    var filmUrl = 'https://opentdb.com/api.php?amount=4&category=11&type=multiple';
    var genUrl = 'https://opentdb.com/api.php?amount=4&category=9&type=multiple';
    var vidUrl = 'https://opentdb.com/api.php?amount=4&category=15&type=multiple';

    axios.get(filmUrl)
      .then((response) => {
        this.setState({
          responseData: this.state.responseData.concat(response.data.results)
        })
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(genUrl)
      .then((response) => {
        this.setState({
          responseData: this.state.responseData.concat(response.data.results)
        })
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(vidUrl)
      .then((response) => {
        this.setState({
          responseData: this.state.responseData.concat(response.data.results)
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }

  render() {
    var display;

    if (this.state.responseData.length === 12) {
      display = (
        <div id='questions'>
          <Questions responseData={ this.state.responseData }/>
        </div>
        )
      }
      else {
        display = (
          <div id="empty-box">
          </div>
          )
      }

    return (
      <div className="App">
        <Header />

        <div id="start-button">
          <button onClick={ this.handleSubmit }><a>(re)</a>Start Game</button>
        </div>

        { display }

        <Footer />
      </div>
    );
  }
}
