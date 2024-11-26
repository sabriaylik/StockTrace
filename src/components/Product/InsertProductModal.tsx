



import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Category } from '../../Models/Category';
import categoryService from '../../services/CategoryService';
import {Controller, SubmitHandler, useForm}  from 'react-hook-form';
import { Product } from '../../Models/Product';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { resolver } from '../../../metro.config';
import productService from '../../services/ProductService';


export default function InsertProductModal() {

  interface IProduct {
    explain : string,
    purchasePrice: number,
    salePrice: number,
    earningRate: string,
    categoryId : number,
    measureUnitId: number,
  }
 

  const [selected , setSelected] = useState("");
  const [categoryList,setCategoryList] = useState<Category[]>([]);




  const fetchData = async () => {
    const result = await categoryService.getData();
    setCategoryList(result);
  }

  const onLoad = () => {
    fetchData();
  }

  useEffect(onLoad,[]);// Sayfa açılınca onLoad metodunu çalıştır.


  const schema = Yup.object().shape(
    {
      explain:Yup.string().required('username') ,
      purchasePrice:Yup.number().required('purchasePrice'),
      salePrice:Yup.number().required("salePrice"),
      earningRate:Yup.string().required("earningRate"),
      categoryId:Yup.number().required("categoryId"),
      measureUnitId:Yup.number().required("measureUnitId"),

    }
  );
  const {control,handleSubmit,formState:{errors}} = useForm<IProduct>({
      resolver: yupResolver(schema),
      // defaultValues:{
      //   explain:'',

      // }
    });


  // Define the Yup validation schema

 




  const onSubmit:SubmitHandler<IProduct> = (data) =>{
    console.log(data);
    // insertCategory(data);
    const product = {
      productId: null,
      explain : "yeni Ürün 10",
      purchasePrice: 10.5,
      salePrice: 12.5,
      earningRate: 0.13,
      savedDate: '2024-10-17T07:00:00.000+00:00',
      userId: 1,
      category : {
          categoryId: 1,
          explain: 'string',
          userId: -1,
          savedDate: '2024-11-10T14:32:00.000+00:00' // Consider using Date if you plan to manipulate dates
      },
      measureUnit:{
      measureUnitId: 1,
      explain: 'KG',
      savedDate: '2024-10-17T07:00:00.000+00:00'
      }

  };
  insertProduct(data);
  }



  function  insertProduct(product:IProduct):void {

    const result =   productService.postData2();
    console.log(result);
  }

  // function  insertCategory2(product:IProduct):void {
    
  //   const result =   productService.postData(product)
  // }

  // function  insertCategory2():void {
  //   console.log(" insertCategory2 ")
  //   const result =   productService.postData2()
  // }

  return (
    <View style={styles.container}>
      <Text>ADDING PRODUCT</Text>


      <Controller
      control={control}
      name="explain"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="Product Name"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      />
      

      <Controller
      control={control}
      name="purchasePrice"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="Product Purchase Price"
          keyboardType='numeric'
          onBlur={onBlur}
          onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          value={value ? value.toString() : ''}
        />
      )}
      />

<Controller
      control={control}
      name="salePrice"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="salePrice"
          keyboardType='numeric'
          onBlur={onBlur}
          onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          value={value ? value.toString() : ''}
        />
      )}
      />


<Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Etiketleri virgülle ayırarak girin"
            keyboardType="default" // Yazı klavyesi
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="earningRate"
      />

<Controller
      control={control}
      name="earningRate"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="earningRate"
          keyboardType='numeric'
          onBlur={onBlur}
          onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          value={value ? value.toString() : ''}
        />
      )}
      />

<Controller
      control={control}
      name="categoryId"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="categoryId"
          keyboardType='numeric'
          onBlur={onBlur}
          onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          value={value ? value.toString() : ''}
        />
      )}
      />
      <Controller
      control={control}
      name="measureUnitId"
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="measureUnitId"
          keyboardType='numeric'
          onBlur={onBlur}
          onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          value={value ? value.toString() : ''}
        />
      )}
      />



  <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      {/* <Dropdown 
      data={categoryList}
      labelField={'explain'}
      valueField={'categoryId'}
      value={selected}
      placeholder='Select an option'
      onChange={item => {setSelected(item.explain)}}
      />
      {selected && <Text>You selected : {selected}</Text>} */}
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:25,
  }
})