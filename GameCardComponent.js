import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

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
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Tap On Me!
            </Text>
          </View>
        ) : (
          <View style={[styles.card, { backgroundColor: '#FFCCED' }]}>
            <Image
              source={{ uri: this.props.imageUrl }}
              style={{ width: '100%', height: '100%', borderRadius: 15 }}
            />
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
    width: '100%'
  }
});
