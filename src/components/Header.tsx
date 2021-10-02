import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {colors} from '../theme/appTheme';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/banner_copy.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //height 18%
  header: {backgroundColor: colors.primary, height: 142},
  image: {flex: 1},
});

export default Header;
