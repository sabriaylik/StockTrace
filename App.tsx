/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';
import CategoryList from './src/screens/CategoryList';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {

 
  return (
    <SafeAreaView>
      <Text>Stock Trace</Text>
      <CategoryList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
