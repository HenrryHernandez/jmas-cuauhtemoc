import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ClientSupportScreen, MainScreen, MapScreen} from '../screens';

import {colors} from '../theme/appTheme';

export type TabsScreensParams = {
  Inicio: undefined;
  Contactanos: undefined;
  Encuentranos: undefined;
};

const TopTabs = createBottomTabNavigator<TabsScreensParams>();

export const Tabs = () => {
  return (
    <TopTabs.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 80,
        },
      }}>
      <TopTabs.Screen
        name="Inicio"
        component={MainScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => <Icon color={color} size={25} name="home" />,
        }}
      />
      <TopTabs.Screen
        name="Contactanos"
        component={ClientSupportScreen}
        options={{
          tabBarLabel: 'Contáctanos',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="headset" />
          ),
        }}
      />
      <TopTabs.Screen
        name="Encuentranos"
        component={MapScreen}
        options={{
          tabBarLabel: 'Encuentranos',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="location" />
          ),
        }}
      />
    </TopTabs.Navigator>
  );
};
