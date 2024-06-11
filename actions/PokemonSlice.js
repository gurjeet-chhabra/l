import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    pokemons:[{id:1 , name:"pokemon1"}]
}

export const pokemonSlice = createSlice({
    name:"pokemon",
    initialState,
    reducers:{
        addPokemon:(state , action) => {
            const pokemon = {
                id:nanoid(),
                text:action.payload
            }
            state.pokemons.push(pokemon)
        },
        removePokemon:(state , action) => {
            state.pokemons = state.pokemons.filter((pokemon) => pokemon.id !== action.payload)
        },
        editPokemon: (state, action) => {
            const { id, newText } = action.payload;
            const existingPokemon = state.pokemons.find(pokemon => pokemon.id === id);
            if (existingPokemon) {
              existingPokemon.text = newText;
            }
          }
    }
})

export const {addPokemon , removePokemon , editPokemon} = pokemonSlice.actions

export const pokemonReducer =  pokemonSlice.reducer