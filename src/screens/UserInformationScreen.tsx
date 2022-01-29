import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';

import {StackScreensParams} from './../navigator/navigator';

import {Header} from '../components';

import {colors} from '../theme/appTheme';

interface Props
  extends StackScreenProps<StackScreensParams, 'UserInformationScreen'> {}

const UserInformationScreen = ({route}: Props) => {
  const {accountNumber} = route.params;

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <View style={styles.upperTextContainer}>
          <Text style={styles.upperText}>RECIBO DE PAGO</Text>
        </View>

        <View style={styles.informationContainer}>
          <View style={styles.informationTitleContainer}>
            <Text style={styles.informationTitleText}>Número de cuenta: </Text>
          </View>
          <View style={styles.informationTextContainer}>
            <Text style={styles.informationText}>{accountNumber}</Text>
          </View>
        </View>

        <View style={styles.informationContainer}>
          <View style={styles.informationTitleContainer}>
            <Text style={styles.informationTitleText}>Nombre: </Text>
          </View>
          <View style={styles.informationTextContainer}>
            <Text style={styles.informationText}>{accountNumber}</Text>
          </View>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total a pagar: ${'0.00'}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.button,
              marginBottom: 10,
              backgroundColor: 'rgb(rgb(0, 57, 115))',
            }}>
            <Text style={styles.buttonText}>SIGUIENTE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{...styles.button, backgroundColor: '#eb445a'}}>
            <Text style={styles.buttonText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  upperTextContainer: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderBottomColor: colors.primary,
  },
  upperText: {fontSize: 16, fontWeight: 'bold', color: colors.primary},
  informationContainer: {
    height: 80,
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'rgba(220,220,220,1)',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  informationTitleContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationTitleText: {fontSize: 16, fontWeight: 'bold'},
  informationTextContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  informationText: {fontSize: 16, fontWeight: '500', marginLeft: 20},
  totalContainer: {
    height: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingBottom: 10,
  },
  totalText: {fontSize: 20, fontWeight: 'bold', color: colors.primary},
  buttonsContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    height: 45,
    width: 370,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default UserInformationScreen;
