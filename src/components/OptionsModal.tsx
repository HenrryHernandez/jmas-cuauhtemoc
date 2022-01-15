import React, {useContext} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ModalsContext} from '../contexts';

const OptionsModal = () => {
  const {modalVisible, closeModal, openModal2} = useContext(ModalsContext);

  return (
    <View>
      <Modal transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.container}>
            <View style={styles.optionsContainer}>
              <View style={styles.textContainer}>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  Selecciona una manera de ingresar tu número de cuenta
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 70,
                }}
                onPress={() => {
                  openModal2();
                  closeModal();
                }}>
                <View style={styles.optionContainer}>
                  <Icon name="create-sharp" size={20} color="black" />
                  <Text style={styles.optionText}>
                    Escribir número de cuenta.
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 70,
                }}>
                <View style={styles.optionContainer}>
                  <Icon name="barcode-sharp" size={20} color="black" />
                  <Text style={styles.optionText}>
                    Escanear código de barras.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  optionsContainer: {
    height: 200,
    width: '100%',
    backgroundColor: 'rgb(255,255,255)',
    position: 'absolute',
    bottom: 0,
  },
  textContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  optionContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  optionText: {marginLeft: 20, fontSize: 16},
});

export default OptionsModal;
