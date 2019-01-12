import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GameCardComponent from './GameCardComponent';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getNextAvailableRandom(cards) {
  let nextSpot = getRandomInt(6);
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
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentWillMount = async () => {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&limit=6'
    );
    const cats = await response.json();
    catsUrl = cats.map(c => c.url);

    cards = new Array(12);
    for (let i = 0; i < 6; i++) {
      let nextSpot = getNextAvailableRandom(cards);
      cards[nextSpot] = catsUrl[i];

      nextSpot = getNextAvailableRandom(cards);
      cards[nextSpot] = catsUrl[i];
    }

    this.setState({ cards: cards });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          {this.state.cards.map((item, index) => (
            <GameCardComponent key={index} imageUrl={item} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
