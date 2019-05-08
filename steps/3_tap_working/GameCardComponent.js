import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

// can be written as hooks
export default class GameCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, tapText: '?' };
  }

  onPress = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }));
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress} underlayColor="yellow">
        {!this.state.isOpen ? (
          <View style={[styles.card, {  backgroundColor: '#38B6FF' }]}>
            <Text style={styles.text}>{this.state.tapText}</Text>
          </View>
        ) : (
          <View style={[styles.card, { backgroundColor: '#434966' }]}>
            <Text style={styles.text}>Opened!</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: '30%',
    aspectRatio: 1
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flex: 1
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
