import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  Background,
  FloatingButton,
  Header,
  OptionsModal,
  SetNumberModal,
} from '../components/index';

import {colors} from '../theme/appTheme';

const MainScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Background />
        <View style={styles.buttonContainer}>
          <FloatingButton />
          <Text style={styles.buttonText}>PAGAR</Text>
        </View>
      </View>

      <OptionsModal />
      <SetNumberModal />
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, height: '100%', width: '100%', backgroundColor: 'white'},
  buttonContainer: {
    width: '100%',
    height: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: '700',
  },
});

export default MainScreen;
