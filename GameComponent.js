import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import GameCardComponent from './GameCardComponent';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getNextAvailableRandom(cards) {
  let nextSpot = getRandomInt(12);
  while (cards[nextSpot]) {
    if (nextSpot == cards.length - 1) {
      nextSpot = 0;
      continue;
    }
    nextSpot++;
  }

  return nextSpot;
}

export default class GameComponent extends Component {
  currentAttemptToMatch = [];
  matchingCards = {};

  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentWillMount = async () => {
    this.onReset();
  };

  /*
   1. first open the card
   2. check if there is already one card opened
   3. if not -> add the card to the current matches array and wait for the next card
   5. if there 2 cards open -> check if they match
   5. if they match -> leave them open
   6. if don’t match -> close both
   7. clean up current matches
 */
  onCardTap = id => {
    // if we are now processing card check - ignore click
    if (this.currentAttemptToMatch.length > 1) {
      return;
    }
    console.log(this.currentAttemptToMatch);
    this.currentAttemptToMatch.push(id);

    const cardsCopy = [...this.state.cards];
    cardsCopy[id].isOpen = true;

    this.setState(prev => ({ ...prev, cards: cardsCopy }));

    if (this.currentAttemptToMatch.length < 2) {
      return;
    }

    if (this.matchingCards[this.currentAttemptToMatch[0]] === id) {
      this.currentAttemptToMatch = [];
      return;
    }

    setTimeout(() => {
      const cardsCopy = [...this.state.cards];
      cardsCopy[id].isOpen = false;
      cardsCopy[this.currentAttemptToMatch[0]].isOpen = false;
      this.setState(
        prev => ({ ...prev, cards: cardsCopy }),
        () => {
          this.currentAttemptToMatch = [];
        }
      );
    }, 1000);
  };

  onReset = async () => {
    this.matchingCards = {};
    this.currentAttemptToMatch = [];

    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=6'
    );
    const cats = await response.json();
    catsUrl = cats.map(c => c.url);

    cards = new Array(12);
    matchingDictionary = {};
    for (let i = 0; i < 6; i++) {
      let nextSpot1 = getNextAvailableRandom(cards);
      cards[nextSpot1] = { id: nextSpot1, url: catsUrl[i], isOpen: false };

      let nextSpot2 = getNextAvailableRandom(cards);
      cards[nextSpot2] = { id: nextSpot2, url: catsUrl[i], isOpen: false };

      this.matchingCards[nextSpot1] = nextSpot2;
      this.matchingCards[nextSpot2] = nextSpot1;
      Image.prefetch(cards[nextSpot1].url);
    }

    this.setState({ cards, matchingDictionary });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#757575', fontWeight: 'bold', fontSize: 18 }}>
          Meow Match
        </Text>
        <View style={styles.cards}>
          {this.state.cards.map((item, index) => (
            <GameCardComponent
              key={index}
              card={item}
              onCardTap={this.onCardTap}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.onReset}>
            <Text style={styles.buttonText}>Reset!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#757575',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cards: {
    flex: 0.7,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-around'
  }
});
