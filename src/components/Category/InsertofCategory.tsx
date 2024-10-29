import { View, Text, TextInput, Button ,StyleSheet} from 'react-native'
import React from 'react'

const InsertofCategory = () => {


    function insertCategory():void {
        console.log("Clicked the insert button")
    }


  return (
    <View style = {styles.insertView}>
        <TextInput style={styles.textInput} placeholder='New Category' />
        <Button title='+' onPress={(category) => {console.log("cickedbutton" + category)}} />
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