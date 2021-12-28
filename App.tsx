import React from 'react';
import {SafeAreaView} from 'react-native';

import {Navigator} from './src/navigator/navigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
