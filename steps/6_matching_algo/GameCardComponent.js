import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class GameCardComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onCardTap(this.props.card.id)}>
        {!this.props.card.isOpen ? (
          <View style={[styles.card,  {  backgroundColor: '#38B6FF' }]}>
            <Text style={styles.text}>?</Text>
          </View>
        ) : (
          <View style={[styles.card,  { backgroundColor: '#434966' }]}>
            <Image
              source={{ uri: this.props.card.url }}
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
    marginTop: 15
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});
