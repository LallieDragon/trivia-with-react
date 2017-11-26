import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import FilmQuestions from './components/trivia-columns/FilmQuestions';
import GeneralQuestions from './components/trivia-columns/GeneralQuestions';
import VideoGameQuestions from './components/trivia-columns/VideoGameQuestions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmResponse: [],
      genResponse: [],
      vidResponse: []
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
      filmResponse: [],
      genResponse: [],
      vidResponse: []
    });

    var filmUrl = 'https://opentdb.com/api.php?amount=3&category=11&type=multiple';
    var genUrl = 'https://opentdb.com/api.php?amount=3&category=11&type=multiple';
    var vidUrl = 'https://opentdb.com/api.php?amount=3&category=15&type=multiple';

    axios.get(filmUrl)
      .then((response) => {
        console.log(response);
        for (let i of response.data.results) {
          this.setState({
            filmResponse: this.state.filmResponse.concat([i])
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(genUrl)
      .then((response) => {
        console.log(response);
        for (let i of response.data.results) {
          this.setState({
            genResponse: this.state.genResponse.concat([i])
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(vidUrl)
      .then((response) => {
        console.log(response);
        for (let i of response.data.results) {
          this.setState({
            vidResponse: this.state.vidResponse.concat([i])
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }

  render() {
    var display;
    let filmResponse = this.state.filmResponse;
    let genResponse = this.state.genResponse;
    let vidResponse = this.state.vidResponse;

    if ((filmResponse.length === 3) && (genResponse.length === 3) && (vidResponse.length === 3)) {
      display = (
        <div id='columns'>
          <FilmQuestions data={ this.state.filmResponse }/>
          <GeneralQuestions data={ this.state.genResponse }/>
          <VideoGameQuestions data={ this.state.vidResponse }/>
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
          <button onClick={ this.handleSubmit }>(re)Start Game</button>
        </div>

        { display }

        <Footer />
      </div>
    );
  }
}
