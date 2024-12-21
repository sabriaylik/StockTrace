



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


export default function InsertProductModal() {

  interface IProductForm {
    explain : string,
    purchasePrice: number,
    salePrice: number,
    earningRate: string,
    categoryId : number,
    measureUnitId: number,
  }
 

  const [open, setOpen] = useState(false);  // Açılır menüyü kontrol etmek için
  const [selected , setSelected] = useState<number | null>(null);
  const [categoryList,setCategoryList] = useState<ICategory[]>([]);
  // const {selectedCategory,setSelectedCategory} = useState<ICategory>({}); 



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
  const {control,handleSubmit,formState:{errors}} = useForm<IProductForm>({
      resolver: yupResolver(schema),
      // defaultValues:{
      //   explain:'',

      // }
    });

  // Define the Yup validation schema

  const onSubmit:SubmitHandler<IProductForm> = (data) =>{
      insertProduct(data);
  }

  function  insertProduct(product:IProductForm):void {
    const measureUnitInsert = new MeasureUnit(1,"KG",new Date("2024-10-16T20:00:00.000+00:00"));
    const category = categoryList.find((category) => category.categoryId === selected) as ICategory;
    const categoryInsert = new Category(category.categoryId,category.explain,category.userId,new Date(category.savedDate));
    const productNew = new Product(0,product.explain,product.purchasePrice,product.salePrice,product.earningRate,"2024-10-16T20:00:00.000+00:00",1,categoryInsert,measureUnitInsert);
    const result =   productService.postData(productNew);
  }



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
          onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          value={value ? value.toString() : ''}
        />
      )}
      />

      <Controller  name="salePrice"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput  placeholder="salePrice"
          keyboardType='numeric'
          onBlur={onBlur}
          onChangeText={(text) => onChange(Number(text) || 0)}  // Convert to number
          value={value ? value.toString() : ''}
        /> 
       )}  
         />
               {/* {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>} */}


      <Controller name="earningRate" 
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
       />



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