import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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
    console.log(this.state.guesses.length);
    if (this.state.guesses.length > 0) {
      for (let i = 0; i < this.state.guesses.length; i++) {
        if (id === this.state.guesses[i]) {
          this.lostGame();
        } else {
          this.continueGame(id);
        }
      }
    } else {
      this.continueGame(id);
    }
  };

  lostGame = () => {
    this.setState({ lost: this.state.lost + 1 });
    this.resetGame()
  };

  continueGame = id => {

    this.state.guesses.push(id);
    console.log("guessesArray: ", this.state.guesses);

    this.setState({ currentScore: this.state.currentScore + 1 })
    console.log("currentScore: ", this.state.currentScore);

    this.shuffle(friends);
    this.render(friends)
  }

  resetGame = () => {

  }



  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            checkGuesses={this.checkGuesses}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
