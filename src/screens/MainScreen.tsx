import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Background, Header} from '../components/index';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Background />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
