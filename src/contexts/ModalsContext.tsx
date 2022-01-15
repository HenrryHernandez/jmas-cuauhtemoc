import React from 'react';
import {createContext, useState} from 'react';

type ModalsContextProps = {
  modalVisible: boolean;
  modalVisible2: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModal2: () => void;
  closeModal2: () => void;
};

export const ModalsContext = createContext({} as ModalsContextProps);

export const ModalsProvider = ({children}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal2 = () => {
    setModalVisible2(true);
  };

  const closeModal2 = () => {
    setModalVisible2(false);
  };

  return (
    <ModalsContext.Provider
      value={{
        modalVisible,
        modalVisible2,
        openModal,
        closeModal,
        openModal2,
        closeModal2,
      }}>
      {children}
    </ModalsContext.Provider>
  );
};
