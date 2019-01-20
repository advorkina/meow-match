import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GameCardComponent from './GameCardComponent';

export default class GameComponent extends Component {
  state = { cards: [] };

  componentWillMount = async () => {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=1'
    );
    const cat = await response.json();
    const catUrl = cat[0].url;
    cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push({ id: i, url: catUrl });
    }
    this.setState({ cards });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.cards.map(item => (
          <GameCardComponent key={item.id} imageUrl={item.url} />
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
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
