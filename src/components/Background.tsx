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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.1,
    marginBottom: 80,
  },
  image: {height: '75%', width: '75%'},
});

export default Background;
