import React, {useContext} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {ModalsContext} from '../contexts';

const SetNumberModal = () => {
  const {modalVisible2, closeModal2} = useContext(ModalsContext);

  return (
    <View>
      <Modal transparent={true} visible={modalVisible2} animationType="slide">
        <TouchableWithoutFeedback onPress={closeModal2}>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 20, fontWeight: '700'}}>
                  Escribe tu número de cuenta:
                </Text>
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Número de contrato..."
                />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={{marginRight: 10}}>
                  <Text style={{fontWeight: '500'}}>CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{fontWeight: '500'}}>CONFIRMAR</Text>
                </TouchableOpacity>
              </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    height: 230,
    width: 280,
    backgroundColor: 'rgb(255,255,255)',
  },
  textContainer: {
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 50,
  },
  textInputContainer: {
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 230,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(180,180,180)',
  },
  buttonsContainer: {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20,
  },
});

export default SetNumberModal;
