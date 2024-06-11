import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addPokemon , removePokemon} from '../actions/PokemonSlice'
import { Text, View , StyleSheet, TextInput, Button, Touchable, TouchableOpacity } from 'react-native'

const AddPokemon = () => {

  const [input , setInput] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addPokemon(input))
      setInput('')
      console.log(input)
  }

  return (
  <View style={styles.Container}>

    <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
    <TextInput placeholder='add pokemon' placeholderTextColor='black' style={styles.TextInput} value={input}
   onChangeText={(text) => setInput(text)}/>

   <TouchableOpacity style={styles.button} onPress={handleSubmit}>
    <Text style={styles.buttonText}>add</Text>
   </TouchableOpacity>
    </View>

  </View>
  )
}

export default AddPokemon

const styles = StyleSheet.create({
  Container:{
  // flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#E4DEA3',
   width:'100%',
   height:200
  },
  TextInput:{
 //backgroundColor:'green',
 width:280,
 borderWidth:1,
 borderRadius:10,
 color:'black'
  },
  button:{
   backgroundColor:'black',
   width:80,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:10,
   margin:10
  },
  buttonText:{
  fontSize:15,
  fontWeight:'900'
  }
})
