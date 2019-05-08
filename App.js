import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameComponent from './GameComponent';

import { default as GameComponentStep2 } from './steps/2_initial_view/GameComponent';
import { default as GameComponentStep3 } from './steps/3_tap_working/GameComponent';
import { default as GameComponentStep4 } from './steps/4_cat_api/GameComponent';
import { default as GameComponentStep5 } from './steps/5_random_cats/GameComponent';
import { default as GameComponentStep6 } from './steps/6_matching_algo/GameComponent';
import { default as GameComponentStep1 } from './steps/1_getting_started/GameComponent';

export default class App extends React.Component {
  activeStep = 2;

  getGameComponent = () => {
    switch (this.activeStep) {
      case 1:
        return <GameComponentStep1 />;
      case 2:
        return <GameComponentStep2 />;
      case 3:
        return <GameComponentStep3 />;
      case 4:
        return <GameComponentStep4 />;
      case 5:
        return <GameComponentStep5 />;
      case 6:
        return <GameComponentStep6 />;
      default:
        return <GameComponent />;
    }
  };

  render() {
    return <View style={styles.container}>{this.getGameComponent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
