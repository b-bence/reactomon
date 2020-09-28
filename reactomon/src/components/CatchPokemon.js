import React, {useState, useContext} from 'react'
import {CatchContext} from './CatchContext'

const CatchPokemon = props => {
    const [name, setName] = useState('');
    const [pokemons, catchNewPokemon] = useContext(CatchContext)

    const addPokemon = () => {
        setName(props.name)
        console.log(name)
        catchNewPokemon(prevPokemons => [...prevPokemons, {pokemonName: props.name}])
    }

    return (
        <button onClick={addPokemon}>Catch!</button>
    )
}

export default CatchPokemon; 