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
    alignItems: 'center',
    height: '81%',
    justifyContent: 'center',
    marginTop: 142,
    opacity: 0.15,
    position: 'absolute',
    width: '100%',
  },
  image: {height: '75%', width: '75%'},
});

export default Background;
