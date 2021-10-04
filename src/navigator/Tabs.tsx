import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainScreen} from '../screens/MainScreen';
import {colors} from '../theme/appTheme';

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <BottomTabAndroid.Navigator
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName: string = '';

          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
          }

          return <Icon name={iconName} size={20} color="white" />;
        },
      })}>
      <BottomTabAndroid.Screen name="Inicio" component={MainScreen} />
    </BottomTabAndroid.Navigator>
  );
};
