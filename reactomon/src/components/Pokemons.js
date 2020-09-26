import React from 'react'
import PokemonItem from './PokemonItem'

const Pokemons = props => {
            return props.pokemons.map((pokemon) =>(
            <PokemonItem pokemon={pokemon}/>
            ));
    }

export default Pokemons
