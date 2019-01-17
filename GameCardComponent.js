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
          <View style={[styles.card, { backgroundColor: '#E552EA' }]}>
            <Text style={styles.text}>Tap On Me!</Text>
          </View>
        ) : null}
        {this.state.isOpen ? (
          <View style={[styles.card, { backgroundColor: '#FFCCED', flex: 1 }]}>
            <Text style={styles.text}>I'm opened!</Text>
          </View>
        ) : null}
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
    width: '100%',
    marginTop: 15
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
