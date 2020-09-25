import React, { Component } from 'react'
import PokemonItem from './PokemonItem'

export class Pokemons extends Component {
    render() {
            return this.props.pokemons.map((pokemon) =>(
            <PokemonItem pokemon={pokemon}/>
            ));
    }
}

export default Pokemons
