import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GameCardComponent from './GameCardComponent';

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=1';

export default class GameComponent extends Component {
  state = { cards: [] };

  componentDidMount = async () => {
    const catUrl = await this.getCatUrl();
    const cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push({ id: i, url: catUrl });
    }
    this.setState({ cards });
  };

  getCatUrl = async () => {
    const response = await fetch(CAT_API_URL);
    const cat = await response.json();
    return cat[0].url;
  }

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
    backgroundColor: '#292D3F',
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
