import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  Background,
  FloatingButton,
  Header,
  OptionsModal,
} from '../components/index';

import {colors} from '../theme/appTheme';

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Background />
        <View style={styles.buttonContainer}>
          <FloatingButton openModal={openModal} />
          <Text style={styles.buttonText}>PAGAR</Text>
        </View>
      </View>

      <OptionsModal modalVisible={modalVisible} closeModal={closeModal} />
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
