

import { View, Text, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import InsertProductModal from './InsertProductModal';
import { Dropdown } from 'react-native-element-dropdown';
import InsertProductModal2 from './InsertProductModal2';

export default function InsertofProduct() {


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected , setSelected] = useState("");

    const hideDialog = () => {
        setIsModalVisible(false);
      };



    const clickedInsert = () => {
        console.log("Clicked button the Insert")
        setIsModalVisible(true);

    }

    const items = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];

  
        return (
            <View style={styles.container}>
        <Modal 
                visible={isModalVisible}
                transparent={false}  // Diğer içeriklerin arka planda görünmesini sağlar
                animationType="fade"  // Modal geçiş animasyonu
                onRequestClose={hideDialog}  // Android için geri tuşuna basıldığında kapanmasını sağlar

                >

<InsertProductModal /> 
{/* <InsertProductModal2 />  */}

            {/* <Dropdown 
      data={items}
      labelField={'label'}
      valueField={'value'}
      value={selected}
      placeholder='Select an option'
      onChange={item => {setSelected(item.value)}}
      /> */}


            

        </Modal>

                <TouchableOpacity style={styles.buttonStyle} onPress={clickedInsert}>
                    <Text style={styles.buttonText}>Add Product</Text>
                </TouchableOpacity>
        
        
                
        
        
            </View>
          )
    


  
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    buttonStyle:{
        flex:1,
        borderRadius:25,
        backgroundColor:'green',
        justifyContent:'center',
        alignContent:'center',
        
    },
    buttonText:{
        color:'white',
    }

})