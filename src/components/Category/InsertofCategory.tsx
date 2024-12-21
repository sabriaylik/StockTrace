import { View, Text, TextInput, Button ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import categoryService,{} from '../../services/CategoryService';
// import {Category} from '../../Models/Concrate/Category';

import Category from '../../Models/Concrate/Category';


const InsertofCategory = () => {


    const [category,setCategory] = useState("");

     function  insertCategory(explain:String):void {
      const result =   categoryService.postData(category)
    }


    function  insertCategory2(explain:String):void {
      console.log("Insert of Category insertCategory2 Started")
      const category = new Category(null,explain,1,new Date());
      const result =   categoryService.postData2(category)
      console.log("Insert of Category insertCategory2 Finished")
    }

  return (
    <View style = {styles.insertView}>
        <TextInput style={styles.textInput} placeholder='New Category'  onChangeText={(category) => setCategory(category)} />
        <Button title='+' onPress={() => { insertCategory2(category) }} />
    </View>
  )
}



const styles = StyleSheet.create({
    insertView:{
           flex : 1,
        //  flexDirection: 'row',
        // position:'absolute',
        // bottom:0

    },
    textInput:{
       // flex:9,
    },
    insertButton:{
       // flex:1,
    }
})


export default InsertofCategory