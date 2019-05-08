import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GameCardComponent from './GameCardComponent';

export default class GameComponent extends Component {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  render() {
    return (
      <View style={styles.container}>
        {this.cards.map((item, index) => (
          <GameCardComponent key={index} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292D3F',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // alignContent: 'center',
    width: '100%'
  }
});