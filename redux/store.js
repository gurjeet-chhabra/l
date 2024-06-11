import {configureStore} from '@reduxjs/toolkit'
import { pokemonReducer } from '../actions/PokemonSlice'

export const store = configureStore({
    reducer:pokemonReducer
}) 