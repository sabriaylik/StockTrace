
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet } from 'react-native';

import { View, Text } from 'react-native'
import { Category } from '../../Models/Category';
import axios from 'axios';


const ListofCategory = () => {
    const [data, setData] = useState<Category[]>([]); // Use the interface for state
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null); // Specify error type

    function fetchData(): void{
        axios
      .get('http://192.168.1.101:6565/SP_war/sp/stock/category/selectall') // Replace with your URL
      .then((response) => {
        if (response.data.success) {
          setData(response.data.data); // Set the data to state
          setLoading(false);
        } else {
          setError(response.data.message); // Use the message from the response
        }
      })
      .catch((err) => {
        setError(err); // Handle any network errors
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
    }



    useEffect(() => {
        fetchData();
    }, []);

    // if(loading)return (
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <ActivityIndicator size="large" color="#0000ff" />
    //     </View>
    //   );

    //    if (err) 
    //     return (
    //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text>Error fetching data: {err}</Text>
    //       </View>
    //     );
      

      return (
        <View style={styles.container}>
          <Text style={styles.title}>List of Category</Text>
          <FlatList
          data={data}
          keyExtractor={(item) => item.categoryId.toString()} // Use a unique key
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' ,flex: 1, flexDirection: 'row'}}>
              {/* <Text>Category ID: {item.categoryId}</Text> */}
              
              <Text> {item.explain}</Text>
              <View style= {styles.buttons}>
              <Button title='Edit' onPress={() => {console.log("Clicked Edit Button"  )}} />
              <Button title='Delete' onPress={() => {console.log("Clicked Delete Button" + item.categoryId )}} />
              </View>
            </View>
          )}
        />
        </View>
      );

    }
  

export default ListofCategory







const styles = StyleSheet.create({
    container:{
      flex:8,
      // backgroundColor:'yellow'
    },
    title:{

    },
    buttons:{
    flex:2,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end'
    }


})