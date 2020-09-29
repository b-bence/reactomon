import React, {useState, useContext} from 'react'
import {CatchContext} from './CatchContext'

const CatchPokemon = props => {
    const [name, setName] = useState('');
    const [pokemons, catchNewPokemon] = useContext(CatchContext)

    const [clickable, setClickable] = useState(false);

    const addPokemon = () => {
        setName(props.name)
        setClickable(true)
        catchNewPokemon(prevPokemons => [...prevPokemons, {pokemonName: props.name}])
    }

    return (
        <button disabled={clickable} style={catchButtonStyle} onClick={addPokemon}>Catch!</button>
    )
}

const catchButtonStyle = {
    borderRadius: '5px',
    backgroundColor: "#eeeeee",
    fontWeight: "bolder"
}


export default CatchPokemon; 