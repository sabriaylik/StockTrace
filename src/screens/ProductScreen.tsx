


import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ListofProduct from '../components/Product/ListofProduct';
import InsertofProduct from '../components/Product/InsertofProduct';

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductScreen</Text>
      <View style={styles.listStyle}>
        <ListofProduct  />
      </View>
      <View style={styles.insertStyle}>
        <InsertofProduct />
      </View>
    </View>
  );
}





const styles = StyleSheet.create({

    container:{
        flex:10,
        alignContent:'space-between',
        justifyContent:'space-between',
        backgroundColor:'yellow',
    },
    title:{
        alignItems:'center',
        textAlign:'center',
    },
    listStyle:{
      flex:20,
      backgroundColor:'blue',
    },
    insertStyle:{
      flex:1,
      justifyContent:'flex-end',
      alignContent:'flex-end',
    },
});

