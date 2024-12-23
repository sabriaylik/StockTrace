
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet } from 'react-native';

import { View, Text } from 'react-native'
import axios from 'axios';
import categoryService from '../../services/CategoryService';
import Dialog from 'react-native-dialog';
import { Category } from '../../Models/Interface/Category';


const ListofCategory = () => {
    const [data, setData] = useState<Category[]>([]); // Use the interface for state
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null); // Specify error type
    const [visible, setVisible] = useState(false);

    const fetchData = async () => {
      try {
          const result = await categoryService.getData();
          setData(result);
      } catch (error) {
          console.error('Error fetching data in component:', error);
      } finally {
          setLoading(false);
      }
  };


    const clickEdit = () => {
      console.log("Clicked Edit Button"  )
      setVisible(true);
    }

    const clickDelete = async (categoryId: number) => {
      console.log("Clicked Delete Button" + categoryId )

      const result = await categoryService.deleteData(categoryId);
      fetchData();

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
              <Text> {item.explain}</Text>
              <View style= {styles.buttons}>
              {/* <Button title='Edit' onPress={() => {clickEdit()}} /> */}
              <Button title='Delete' onPress={() => {clickDelete(item.categoryId)}} />
              </View>



              {/* <Dialog.Container visible={visible}>
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Description>
          This is a simple dialog message.
        </Dialog.Description> */}
        {/* <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Confirm" onPress={handleConfirm} /> */}
      {/* </Dialog.Container> */}




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