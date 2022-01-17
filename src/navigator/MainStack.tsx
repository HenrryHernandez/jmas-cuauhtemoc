import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen, UserInformationScreen} from '../screens';

export type MainStackParams = {
  MainScreen: undefined;
  UserInformationScreen: {accountNumber: string};
};

const Stack = createStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          //backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      <Stack.Screen
        name="UserInformationScreen"
        component={UserInformationScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
