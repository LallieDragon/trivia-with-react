## Table of Contents

- [Getting Started](#)
- [The Concept](#the-concept)
- [Operating the Game](#operating-the-game)
- [The Code](#the-code)
- [In Retrospect](#in-retrospect)
- [Future Versions](#future-versions)

## Getting Started

- Type ```git clone https://github.com/LallieDragon/trivia-with-react.git``` into 
your CLI to install the game. 
- ```cd react-trivia```
- ```npm install``` to install dependencies.
- ```npm start``` to run in localhost:3000.

## The Concept

This is the final project for the Web Development Immersive course
put on by General Assembly - Austin. The goal was to create a web
application in a week using any programming language that we had 
learned, inside or outside of the course.

I decided to create a Trivia application using React.js and 
render data from children through lift functions instead of Redux.
It makes three separate Ajax calls and stores the data in an
array of categories. The data returned from the call is made up of
three question categories; General Knowledge, Entertainment: Films,
Entertainment: Video Games.

![Diagram of Trivia Frame](./public/trivia.pdf)

## Operating the Game

Welcome to React Trivia! 

Press the re(Start) button to get started!

Rules:
- The players are made up of two teams. Team one will always begin.
- The active team picks a category and attempts to answer the question. 
- If answered correctly, 100 points will be added to the active team's score.
The current team will not change until a question is answered incorrectly.

## The Code
## In Retrospect
## Future Versions
