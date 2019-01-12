import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameComponent from './GameComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GameComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
