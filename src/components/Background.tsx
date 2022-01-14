import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Background = () => {
  return (
    <View style={styles.background}>
      <Image
        source={require('../assets/background.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 142,
    opacity: 0.08,
  },
  image: {
    width: '95%',
    height: '95%',
    resizeMode: 'contain',
  },
});

export default Background;
