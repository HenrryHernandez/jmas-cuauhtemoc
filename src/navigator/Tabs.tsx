import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {MainScreen} from '../screens/MainScreen';
import {colors} from '../theme/appTheme';

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <BottomTabAndroid.Navigator barStyle={{backgroundColor: colors.primary}}>
      <BottomTabAndroid.Screen name="MainScreen" component={MainScreen} />
    </BottomTabAndroid.Navigator>
  );
};
