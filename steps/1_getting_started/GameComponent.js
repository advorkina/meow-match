import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class GameComponentStep1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from .NET Cologne!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey', //'#292D3F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
