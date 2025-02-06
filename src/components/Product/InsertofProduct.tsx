

import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
// import InsertProductModal3 from './InsertProductModal3';
import InsertProductModal from './InsertProductModalNew';

export default function InsertofProduct() {


    const [isModalVisible, setIsModalVisible] = useState(false);

    const hideDialog = () => {
        setIsModalVisible(false);
    };



    const clickedInsert = () => {
        setIsModalVisible(true);
    };

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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonStyle: {
        flex: 1,
        borderRadius: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
});
