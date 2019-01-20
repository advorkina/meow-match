import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GameCardComponent from './GameCardComponent';

export default class GameComponent extends Component {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = async () => {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=gif'
    );
    const cat = await response.json();
    catUrl = cat[0].url;
    this.setState({ catUrl });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.cards.map((item, index) => (
          <GameCardComponent key={index} imageUrl={this.state.catUrl} />
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
