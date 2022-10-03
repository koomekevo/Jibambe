/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/Home';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/*<SafeAreaView>*/}
      <Home />
      {/*</SafeAreaView>*/}
    </>
  );
};

export default App;
