import React from 'react';
import {View} from 'react-native';

import {ClientSupportOption, Header} from '../components';

const ClientSupportScreen = () => {
  const call = () => {
    console.log('calling');
  };

  const call2 = () => {
    console.log('calling 2');
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      <ClientSupportOption
        op1
        phoneNumber="625 581 4898"
        text1="Atención"
        text2="Telefónica"
        callPhoneNumber={call}
      />
      <ClientSupportOption
        phoneNumber="625 581 4910"
        text1="Reportar fuga"
        text2=""
        callPhoneNumber={call2}
      />
    </View>
  );
};

export default ClientSupportScreen;
