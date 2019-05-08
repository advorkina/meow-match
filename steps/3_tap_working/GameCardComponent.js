import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// can be written as hooks
export default class GameCardComponent extends Component {
  state = { isOpen: false };

  render() {
    return !this.state.isOpen ? (
      <View
        style={[styles.container, styles.card, { backgroundColor: '#38B6FF' }]}>
        <Text style={styles.text} />
      </View>
    ) : (
      <View
        style={[styles.container, styles.card, { backgroundColor: '#434966' }]}>
        <Text style={styles.text}>Opened!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    aspectRatio: 1,
    marginTop: 15
  },
  card: {
    aspectRatio: 1,
    backgroundColor: '#38B6FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
