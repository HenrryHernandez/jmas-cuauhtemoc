import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../theme/appTheme';

interface Props {
  op1?: boolean;
  phoneNumber: string;
  text1: string;
  text2: string;
  callPhoneNumber: () => void;
}

const ClientSupportOption = ({
  op1 = false,
  phoneNumber,
  text1,
  text2,
  callPhoneNumber,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={callPhoneNumber}>
      <Image
        source={
          op1
            ? require('../assets/telephone.png')
            : require('../assets/leak_copy.png')
        }
        style={{height: op1 ? 120 : 130, width: op1 ? 120 : 130}}
      />

      <Text style={styles.text}>{text1}</Text>
      {text2.length > 0 && <Text style={styles.text}>{text2}</Text>}

      <Text style={styles.text}>{phoneNumber}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: colors.secondary, fontSize: 32, fontWeight: '500'},
});

export default ClientSupportOption;
