import React, {useState, useContext} from 'react'
import {CatchContext} from './CatchContext'
import CatchedPokemonItem from './CatchedPokemonItem'


const Catched = props => {
    const [pokemons, catchNewPokemon] = useContext(CatchContext)

    return pokemons.map((pokemon) =>(
                <CatchedPokemonItem pokemon={pokemon}/>
    ))
}

export default Catched