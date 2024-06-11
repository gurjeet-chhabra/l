import { FlatList, StyleSheet, Text, TextInput, View , TouchableOpacity , Button} from 'react-native'
import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removePokemon , editPokemon} from '../actions/PokemonSlice'

const Pokemons = () => {

    const pokemons = useSelector(state => state.pokemons)
    
    const dispatch = useDispatch()

    const handleEdit = (id , currenttext) => {
      //dispatch(editPokemon({ id, newText }));
      setEditPokemonText(id)
      setText(currenttext)
    }

    const handleSave = (id) => {
      dispatch(editPokemon({ id, newText: text }));
      setEditPokemonText(null);
      setText('');
    }
    const [editPokemonText , setEditPokemonText] = useState(null)
    const [text , setText] = useState('')

  return (
    <View style={styles.Container}>

     <View style={{flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
    
    <FlatList data={pokemons}
    keyExtractor={(pokemon) => pokemon.id.toString()}
    renderItem={({item}) => (
        <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center' , height:60 }}>

            {editPokemonText === item.id ? (
                <TextInput value={text} style={{color:'black' , width:200}}
                onChangeText={(text) => setText(text)}/>

            ):(
        <Text style={{color:'black' , fontSize:15 , fontWeight:'900' , width:200}}>{item.text}</Text>
            )}
             <TouchableOpacity 
              onPress={() => dispatch(removePokemon(item.id))}
              style={styles.deleteButton}
            >
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            {editPokemonText === item.id ? (
              <Button title="Save" onPress={() => handleSave(item.id)} />
            ) : (
              <TouchableOpacity 
                onPress={() => handleEdit(item.id, item.text)}
                style={styles.editButton}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            )}
            </View>
    )}/>
     </View>

    </View>
  )
}

export default Pokemons

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        backgroundColor:'#E4DEA3'
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      input: {
        width: 150,
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        color:'black'
      },
      pokemonText: {
        width: 150,
        height: 35,
        borderRadius: 10,
        textAlign: 'center',
        lineHeight: 35,
        color:'black'
      },
      deleteButton: {
        marginLeft: 10,
        backgroundColor: 'red',
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      editButton: {
        marginLeft: 10,
        backgroundColor: '#51BBFE',
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
      },
})