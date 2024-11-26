

import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../../Models/Product';
import productService from '../../services/ProductService';

const ListofProduct = () => {

    const [data,setData] = useState<Product[]>([]);



    const fetchData = async () => {
        // console.log("Started fetchData function")
        const result = await productService.getData();
        setData(result);
    }



    useEffect(() => {
        fetchData();
    },[])



  return (
    <View>
      <Text style= {styles.title}>List of Product</Text>
      <FlatList 
      data={data}
      keyExtractor={(product) => product.productId.toString()}
      renderItem={({item}) => (
        <View>
            <View style = {styles.row}>
                <Text style={styles.explain}>{item.explain}</Text>
                <Text style={styles.salePrice}>{item.salePrice}</Text>
                <Text style={styles.category}>{item.category.explain}</Text>
            </View>
            
        </View>
      )}
      /> 
    </View>
  )
}


const styles = StyleSheet.create({
    title: {
        textAlign:'center',
        height: '5%',
    },
    row:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'red',
        marginHorizontal:3,
        marginVertical:2,
    },
    explain:{
        flex:9,
        color:'white'
    },
    salePrice:{
        flex:1,
        color:'white'
    },
    category:{
        flex:3,
        color:'white'
    }
})



export default ListofProduct;

