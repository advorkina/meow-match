import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GameCardComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#38B6FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
