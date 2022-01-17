import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {MainStackParams} from '../navigator/MainStack';

interface Props
  extends StackScreenProps<MainStackParams, 'UserInformationScreen'> {}

const UserInformationScreen = ({route}: Props) => {
  const {accountNumber} = route.params;

  return (
    <View>
      <Text>UserInformationScreen {accountNumber}</Text>
    </View>
  );
};

export default UserInformationScreen;
