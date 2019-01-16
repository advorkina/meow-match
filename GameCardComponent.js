import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';

export default class GameCardComponent extends Component {
  componentWillMount = () => {
    this.rotateAnimatedValue = new Animated.Value(0);

    this.frontRotation = this.rotateAnimatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    });
    this.opacity = this.rotateAnimatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: [0, 1]
    });
    this.backRotation = this.rotateAnimatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
  };

  componentDidUpdate = () => {
    if (!this.props.card.isOpen) {
      Animated.spring(this.rotateAnimatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    }
  };

  onPress = () => {
    Animated.spring(this.rotateAnimatedValue, {
      toValue: 180,
      friction: 8,
      tension: 10
    }).start();
    this.props.onCardTap(this.props.card.id);
  };

  render() {
    const frontAnimation = { transform: [{ rotateX: this.frontRotation }] };
    const backAnimation = {
      transform: [{ rotateX: this.backRotation }],
      opacity: this.opacity
    };
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onPress}
        activeOpacity={0.9}>
        <Animated.View
          style={[styles.card, { backgroundColor: '#FFB407' }, frontAnimation]}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Tap!</Text>
        </Animated.View>
        <Animated.View style={[styles.card, styles.backCard, backAnimation]}>
          <Image
            source={{ uri: this.props.card.url }}
            style={{ width: '100%', height: '100%', borderRadius: 15 }}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backCard: {
    backgroundColor: '#FFCCED',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    aspectRatio: 1,
    width: '23%'
  },
  card: {
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flex: 1
  }
});