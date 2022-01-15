import React, {useContext, useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ModalsContext} from '../contexts';

import {colors} from '../theme/appTheme';

const FloatingButton = () => {
  const {openModal} = useContext(ModalsContext);

  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: 1.1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    openModal();
  };

  const onPressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={{...styles.button, transform: [{scale}]}}>
        <Icon color="white" size={45} name="card-sharp" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 85,
    width: 85,
    borderRadius: 100,
    elevation: 10,
  },
});

export default FloatingButton;
