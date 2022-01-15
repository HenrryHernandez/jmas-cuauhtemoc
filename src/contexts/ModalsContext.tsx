import React from 'react';
import {createContext, useState} from 'react';

type ModalsContextProps = {
  modalVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalsContext = createContext({} as ModalsContextProps);

export const ModalsProvider = ({children}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ModalsContext.Provider value={{modalVisible, openModal, closeModal}}>
      {children}
    </ModalsContext.Provider>
  );
};
