import { View, Text, TextInput, Button ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import categoryService,{CategoryResult} from '../../services/CategoryService';

const InsertofCategory = () => {


    const [category,setCategory] = useState("");

     function  insertCategory(explain:String):void {
      const result =   categoryService.postData(category)
    }


  return (
    <View style = {styles.insertView}>
        <TextInput style={styles.textInput} placeholder='New Category'  onChangeText={(category) => setCategory(category)} />
        <Button title='+' onPress={() => { insertCategory(category) }} />
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