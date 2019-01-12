import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GameCardComponent from './GameCardComponent';

export default class GameComponent extends Component {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = async () => {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png'
    );
    const cat = await response.json();
    catUrl = cat[0].url;
    this.setState({ catUrl: catUrl });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          {this.cards.map((item, index) => (
            <GameCardComponent key={index} imageUrl={this.state.catUrl} />
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
    flex: 0.5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-around'
  }
});
