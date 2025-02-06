

import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../Models/Interface/Product';
import productService from '../../services/ProductService';

const ListofProduct = () => {
    const [data,setData] = useState<IProduct[]>([]);
    const fetchData = async () => {
        // console.log("Started fetchData function")
        const result = await productService.getData();
        setData(result);
    };
    useEffect(() => {
        fetchData();
    },[]);

  return (
    <View>
      <Text style= {styles.title}>List of Product</Text>
      <FlatList
      data={data}
      keyExtractor={(product) => product.productId.toString()}
      ListHeaderComponent={
      <View style={styles.listHeader}>
                <Text style={styles.explain} >EXPLAIN</Text>
                <Text style={styles.salePrice}>SALE PRICE</Text>
                <Text style={styles.category}>CATEGORY</Text>
     </View>
        }
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
  );
};


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
        color:'white',
    },
    salePrice:{
        flex:3,
        color:'white',
    },
    category:{
        flex:3,
        color:'white',
    },
    listHeader:{
        flex:1,
        flexDirection:'row',
        marginHorizontal:3,
        marginVertical:2,
    },
});



export default ListofProduct;

