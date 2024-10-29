import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Button, TextInput ,StyleSheet, ImageBackground  } from 'react-native';
import axios from 'axios';
import { Category } from '../Models/Category'; // Import the interface
import ListofCategory from '../components/Category/ListofCategory';
import InsertofCategory from '../components/Category/InsertofCategory';

const CategoryScreen = () => {
  const [data, setData] = useState<Category[]>([]); // Use the interface for state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Specify error type

  useEffect(() => {
    
  }, []); // Empty dependency array means this runs once when the component mounts

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }

  // Render the data
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={ require('../utils/images/backgroundImage.jpg') }
      style={styles.background}
      >

      <ListofCategory />
      <InsertofCategory />

      </ImageBackground>
    </View>
   
  );
};



const styles = StyleSheet.create({
  container: {
    flex:12,
    backgroundColor:'yellow',
  },
  list: {
    flex:9
  },
  insert:{
    flex:1,
  },
  background: {
    flex: 1, // Make the background cover the entire screen
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})



export default CategoryScreen;
