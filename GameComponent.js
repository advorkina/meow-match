import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
  alreadyMatched = [];
  matchingCards = {};

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentWillMount = async () => {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=6'
    );
    const cats = await response.json();
    catsUrl = cats.map(c => c.url);

    cards = new Array(12);
    for (let i = 0; i < 6; i++) {
      let nextSpot1 = getNextAvailableRandom(cards);
      cards[nextSpot1] = { id: nextSpot1, url: catsUrl[i], isOpen: false };

      let nextSpot2 = getNextAvailableRandom(cards);
      cards[nextSpot2] = { id: nextSpot2, url: catsUrl[i], isOpen: false };

      this.matchingCards[nextSpot1] = nextSpot2;
      this.matchingCards[nextSpot2] = nextSpot1;
    }

    this.setState({ cards });
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
    const cardsCopy = [...this.state.cards];
    cardsCopy[id].isOpen = true;
    this.setState(prev => ({ ...prev, cards: cardsCopy }));

    if (this.currentAttemptToMatch.length < 1) {
      this.currentAttemptToMatch = [id];
      return;
    }

    if (this.matchingCards[this.currentAttemptToMatch[0]] === id) {
      this.currentAttemptToMatch = [];
    } else {
      setTimeout(() => {
        const cardsCopy = [...this.state.cards];
        cardsCopy[id].isOpen = false;
        cardsCopy[this.currentAttemptToMatch[0]].isOpen = false;
        this.setState(
          prev => ({
            ...prev,
            cards: cardsCopy
          }),
          () => {
            this.currentAttemptToMatch = [];
          }
        );
      }, 1500);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.cards.map((item, index) => (
          <GameCardComponent
            key={index}
            card={item}
            onCardTap={this.onCardTap}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
