import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserInformationScreen} from '../screens';
import {Tabs} from './Tabs';

export type StackScreensParams = {
  Tabs: undefined;
  UserInformationScreen: {accountNumber: string};
};

const Stack = createStackNavigator<StackScreensParams>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="UserInformationScreen"
          component={UserInformationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
