import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Button, TextInput ,StyleSheet  } from 'react-native';
import axios from 'axios';
import { Category } from '../Models/Category'; // Import the interface
import ListofCategory from '../components/Category/ListofCategory';

const CategoryList: React.FC = () => {
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
    <View>

      <ListofCategory />

      <TextInput placeholder='New Category' />
      <Button title='+' onPress={(category) => {console.log("cickedbutton" + category)}} />

    </View>
   
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-around', // Optional: Adjust spacing
    alignItems: 'center', // Optional: Center items vertically
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
})



export default CategoryList;
