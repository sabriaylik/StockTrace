



import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import categoryService from '../../services/CategoryService';
import {Controller, SubmitHandler, useForm}  from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { resolver } from '../../../metro.config';
import productService from '../../services/ProductService';
import { ICategory } from '../../Models/Interface/Category';
import { IProduct } from '../../Models/Interface/Product';
import Product from '../../Models/Concrate/Product';
import Category from '../../Models/Concrate/Category';
import MeasureUnit from '../../Models/Concrate/MeasureUnit';
import DropDownPicker from 'react-native-dropdown-picker';


export default function InsertProductModal3() {

  interface IProductForm {
    // explain : string,
    // purchasePrice: string,
    // salePrice: string,
    // earningRate: string,
    // categoryId : number,
    category : ICategory
  }
 

  const [open, setOpen] = useState(false);  // Açılır menüyü kontrol etmek için
  const [selected , setSelected] = useState<number | null>(null);
  const [selectedCategory,setSelectedCategory] = useState<ICategory | null> (null);
  const [categoryList,setCategoryList] = useState<ICategory[]>([]);

  const onSubmit:SubmitHandler<IProductForm> = (data) =>{
    console.log("Started onSubmit")
    console.log(data)
  }

  const validationRules = {
    // explain: {
    //   required: "Açıklama zorunlu",
    //   minLength: { value: 3, message: "İsim en az 2 karakter olmalı" },
     
    // },
    // purchasePrice: {
    //   required: "purchasePrice gerekli",
    //   pattern: {
    //     value: /^[0-9]+(\.[0-9]+)?$/,  // Ondalık sayılar için regex
    //     message: "Geçerli bir değer girin (nokta ile ayrılmış ondalık sayı olmalı)"
    //   },
    // },

    // salePrice: {
    //   required: "salePrice gerekli",
    //   pattern: {
    //     value: /^[0-9]+(\.[0-9]+)?$/,  // Ondalık sayılar için regex
    //     message: "Geçerli bir değer girin (nokta ile ayrılmış ondalık sayı olmalı)"
    //   },
    // },
    // earningRate: {
    //   required: "earningRate gerekli",
    //   pattern: {
    //     value: /^[0-9]+(\.[0-9]+)?$/,  // Ondalık sayılar için regex
    //     message: "Geçerli bir değer girin (nokta ile ayrılmış ondalık sayı olmalı)"
    //   },
    // },
    // categoryId: {
    //   required: "Category  gerekli",
    // },
    category:{
      required: " Category is required "
    }
  };

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
      // explain:Yup.string().required('username') ,
      // purchasePrice:Yup.string().required('purchasePrice'),
      // salePrice:Yup.string().required("salePrice"),
      // earningRate:Yup.string().required("earningRate"),
      // categoryId:Yup.number().required("categoryId"),
      category: Yup.
    }
  );
  const {control,handleSubmit,formState:{errors}} = useForm<IProductForm>({
      resolver: yupResolver(schema),
    });

  return (
    <View style={styles.container}>
      <Text>ADDING PRODUCT</Text>
      <Controller  name="explain"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="Product Name"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      />

      <Controller  name="purchasePrice"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="Product Purchase Price"
          keyboardType='numeric'
          onBlur={onBlur}
          // onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          onChangeText={onChange}
          value={value ? value.toString() : ''}
        />
      )}
      />

      <Controller  name="salePrice"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput  placeholder="salePrice"
          keyboardType='default'
          onBlur={onBlur}
          // onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          onChangeText={onChange}
          value={value ? value.toString() : ''}
        /> 
       )}  
         />
               {/* {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>} */}


      <Controller name="earningRate" 
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput 
         placeholder="Etiketleri nokta ayırarak girin"
          keyboardType="default" // Yazı klavyesi
          onBlur={onBlur}
          onChangeText={onChange}
          value={value} 
          />
         )} 
       />



{/* <Controller name="categoryId" 
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
<DropDownPicker
      open={open}
      value={selected}
      items={categoryList.map(item => ({
        label: item.explain,  // Dropdown'da görünen metin
        value: item.categoryId,  // Seçilen değer
      }))}
      multiple={false}
      setOpen={setOpen}
      setValue={setSelected}
      setItems={setCategoryList}
      placeholder='Select Category'
    />
         )} 
       /> */}



          {selected && <Text>You selected : {selected}</Text>} 


    {/* <Dropdown 
          data={categoryList}
          labelField={'explain'}
          valueField={'categoryId'}
          value={selected}
          placeholder='Select an option'
          // onChange={item => {setSelected(item.explain)}}
          />
          {selected && <Text>You selected : {selected}</Text>} */}

  <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:25,
  }
})


       // const product = new Product();
    // insertCategory(data);
    // const product = {
    //   productId: null,
    //   explain : "yeni Ürün 10",
    //   purchasePrice: 10.5,
    //   salePrice: 12.5,
    //   earningRate: 0.13,
    //   savedDate: '2024-10-17T07:00:00.000+00:00',
    //   userId: 1,
    //   category : {
    //       categoryId: 1,
    //       explain: 'string',
    //       userId: -1,
    //       savedDate: '2024-11-10T14:32:00.000+00:00' // Consider using Date if you plan to manipulate dates
    //   },
    //   measureUnit:{
    //   measureUnitId: 1,
    //   explain: 'KG',
    //   savedDate: '2024-10-17T07:00:00.000+00:00'
    //   }

  // };