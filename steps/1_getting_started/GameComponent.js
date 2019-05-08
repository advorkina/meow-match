import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class GameComponentStep1 extends Component {
  render() {
    return (
      <View style={styles.startContainer}>
          <Text style={styles.startText}>Hello from .NET Cologne!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    backgroundColor: '#292D3F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  startText: {
    color: 'white',
    fontSize: 30
  }
});