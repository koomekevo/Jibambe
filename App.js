/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './src/navigation';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default App;
