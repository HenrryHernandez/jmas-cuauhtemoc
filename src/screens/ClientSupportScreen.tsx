import React from 'react';
import {Linking, View} from 'react-native';

import {ClientSupportOption, Header} from '../components';

const ClientSupportScreen = () => {
  const call = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      <ClientSupportOption
        op1
        phoneNumber="625 581 4898"
        text1="Atención"
        text2="Telefónica"
        callPhoneNumber={() => {
          call('614 122 2007');
        }}
      />
      <ClientSupportOption
        phoneNumber="625 581 4910"
        text1="Reportar fuga"
        text2=""
        callPhoneNumber={() => {
          call('614 122 2007');
        }}
      />
    </View>
  );
};

export default ClientSupportScreen;
