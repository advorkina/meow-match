import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class GameCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  onPress = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }));
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        {!this.state.isOpen ? (
          <View style={[styles.card, { backgroundColor: 'tomato' }]}>
            <Text style={styles.text}>Tap!</Text>
          </View>
        ) : (
          <View style={[styles.card, { backgroundColor: 'seagreen' }]}>
            <Text style={styles.text}>I'm opened!</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    aspectRatio: 1
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flex: 1,
    marginTop: 15
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
