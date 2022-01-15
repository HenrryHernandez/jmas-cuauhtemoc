import React from 'react';
import {SafeAreaView} from 'react-native';

import {ModalsProvider} from './src/contexts';

import {Navigator} from './src/navigator/navigator';

const AppState = ({children}: any) => {
  return <ModalsProvider>{children}</ModalsProvider>;
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppState>
        <Navigator />
      </AppState>
    </SafeAreaView>
  );
};

export default App;
