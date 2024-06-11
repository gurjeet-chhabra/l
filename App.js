import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AddPokemon from './Components/AddPokemon'
import Pokemons from './Components/Pokemons'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.Container}>
      <Text style={styles.text}>keep track of all your pokemons easily here!</Text>
      </View>
      <AddPokemon/>
      <Pokemons/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  text:{
  fontSize:25,
  fontWeight:'900',
  color:'black'
  },
  Container:{
  backgroundColor:'#E4DEA3',
  justifyContent:"center",
  alignItems:'center',
  padding:15,
  //flex:1,
  height:200
  }
})