/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import ProductScreen from './src/screens/ProductScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {

 
  return (
    <SafeAreaView style={styles.container}>

      

      <View style = {styles.titleBox}>
        <Text style = {styles.appTitle}>Stock Trace</Text>
      </View>
      {/* <CategoryScreen  /> */}
     <ProductScreen />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    marginTop:25,
    
  },
  titleBox:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: 'transparent'

    // backgroundColor:'red',
  },
  appTitle: {
    textAlign:'center',
    color:'blue',
    fontSize:50,

  },
  background: {
    flex: 1, // Make the background cover the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;
