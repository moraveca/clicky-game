import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CurrentScore from "./components/CurrentScore";
import HighestScore from "./components/HighestScore";
import WinsAndLosses from "./components/WinsAndLosses";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    guesses: [],
    currentScore: 0,
    won: 0,
    lost: 0,
    highScore: 0
  };

  shuffle = friends => {
    var currentIndex = friends.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = friends[currentIndex];
      friends[currentIndex] = friends[randomIndex];
      friends[randomIndex] = temporaryValue;
    };

    return friends;
  };

  checkGuesses = id => {
    console.log("guesses: ", this.state.guesses);
    console.log("this pick: ", id)
    if (this.state.guesses.length === 0) {
      this.continueGame(id);
    } else if (this.state.guesses.length === 12) {
      this.wonGame();
    } else {
      for (let i = 0; i < this.state.guesses.length; i++) {
        if (id === this.state.guesses[i]) {
          this.lostGame();
        } else {
          this.continueGame(id);
        };
      };
    };
  };

  wonGame = () => {
    console.log("won");
    this.setState({ won: this.state.won + 1});
    this.resetGame()
  }

  lostGame = () => {
    console.log("lost");
    this.setState({ highScore: this.state.currentScore});
    this.setState({ lost: this.state.lost + 1 });
    this.resetGame()
  };

  continueGame = id => {
    console.log("continued")
    this.state.guesses.push(id);
    // console.log("guessesArray: ", this.state.guesses);

    this.setState({ currentScore: this.state.currentScore + 1 })
    // console.log("currentScore: ", this.state.currentScore);

    this.shuffle(friends);
    this.render(friends)
  }

  resetGame = () => {
    this.setState({ currentScore: 0});
    this.setState({ guesses: [] });
    this.shuffle(friends)
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky-Shuffle Game</Title>
        <CurrentScore>Current Game Score: {this.state.currentScore}</CurrentScore>
        <HighestScore>Highest Score: {this.state.highScore}</HighestScore>
        <WinsAndLosses>Won: {this.state.won}  Lost: {this.state.lost}</WinsAndLosses>
        {/* <CardDeck> */}
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            checkGuesses={this.checkGuesses}
          />
          // </CardDeck>
        ))}
      </Wrapper>
    );
  }
}

export default App;
