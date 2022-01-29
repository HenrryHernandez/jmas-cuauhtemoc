import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {StackScreensParams} from './../navigator/navigator';

interface Props
  extends StackScreenProps<StackScreensParams, 'UserInformationScreen'> {}

const UserInformationScreen = ({route}: Props) => {
  const {accountNumber} = route.params;

  return (
    <View>
      <Text>UserInformationScreen {accountNumber}</Text>
    </View>
  );
};

export default UserInformationScreen;
